/**
 * 재앙 카드 10종을 문서에서 뽑아 표로 만든다.
 *
 *   node scripts/extract-omens.mjs
 *
 * 정본은 `docs/omens.md`. 여기서 만드는 건 **카드에 복붙하기 위한 사본**이고,
 * 문서를 고치면 다시 돌린다. 손으로 고치지 말 것. (운명 카드는 `extract-fate.mjs`)
 *
 * 운명 카드와 달리 여기는 꼴이 하나뿐이라 읽기 쉽다:
 *
 *     ## 1. 선혈의 비 (국지)
 *     - **효과**: …
 *     - **상호작용**: …
 *     - **플레이버**: 피비린내가 나는군…
 *
 * 라벨(`효과`·`플레이버`·`지속`·`정화`…)을 **그대로 열로** 옮긴다.
 * 어느 카드에 어떤 라벨이 붙어 있는지가 제각각이라, 있는 것만 채운다.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const lines = readFileSync(join(root, 'docs/omens.md'), 'utf8').split(/\r?\n/)

/** 카드에 그대로 옮길 수 있게 마크다운 표시를 걷어낸다 */
const clean = (s) =>
  s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .trim()

// ── 카드 자르기 ────────────────────────────────────────────
const cards = []
let cur = null
for (const raw of lines) {
  const line = raw.trim()

  const head = /^##\s+(\d+)\.\s+(.+?)\s*\(([^)]+)\)\s*$/.exec(line)
  if (head) {
    cur = { no: Number(head[1]), name: head[2], kind: head[3], fields: [], extra: [] }
    cards.push(cur)
    continue
  }
  // 번호 없는 `##` 을 만나면 카드 구간이 끝난 것 (재앙 유형 · 목록 요약 · 밸런싱…)
  if (/^##\s/.test(line)) {
    cur = null
    continue
  }
  if (!cur || !line || line === '---') continue

  const field = /^[-*]\s+\*\*(.+?)\*\*\s*[:：]\s*(.*)$/.exec(line)
  if (field) {
    cur.fields.push({ label: clean(field[1]), text: clean(field[2]) })
    continue
  }
  // 이어지는 줄(표·들여쓴 설명)은 **바로 앞 라벨에 붙인다**.
  // 주사위 표가 «효과» 아래 딸려 있어서, 떼어놓으면 뜻이 끊긴다.
  const last = cur.fields[cur.fields.length - 1]
  if (last) last.text += '\n' + clean(raw)
  else cur.extra.push(clean(raw))
}

const pick = (c, label) => c.fields.find((f) => f.label === label)?.text ?? ''
/** 효과·플레이버 말고 남은 것들 — 카드마다 다르다 (지속·정화·NPC 처리…) */
const rest = (c) =>
  c.fields
    .filter((f) => f.label !== '효과' && f.label !== '플레이버')
    .map((f) => `${f.label}: ${f.text}`)
    .join('\n')

// ── 내보내기 ───────────────────────────────────────────────
const outDir = join(root, 'docs/_export')
mkdirSync(outDir, { recursive: true })

// 본문에 쉼표가 흔해 CSV 대신 탭. 줄바꿈은 `\n` 두 글자로 접는다.
const esc = (s) => s.replace(/\n/g, '\\n')
const tsv = [
  ['번호', '이름', '유형', '효과', '플레이버', '그 밖'].join('\t'),
  ...cards.map((c) =>
    [c.no, c.name, c.kind, esc(pick(c, '효과')), esc(pick(c, '플레이버')), esc(rest(c))].join('\t')
  ),
].join('\n')
writeFileSync(join(outDir, 'omen-cards.tsv'), tsv)

const txt = cards
  .map((c) => {
    const out = [`[${String(c.no).padStart(2, '0')}] ${c.name}   (${c.kind})`]
    const flavor = pick(c, '플레이버')
    if (flavor) out.push(`     “${flavor}”`)
    for (const f of c.fields) {
      if (f.label === '플레이버') continue
      const [first, ...more] = f.text.split('\n')
      out.push(`  · ${f.label}: ${first}`)
      more.forEach((m) => out.push(`      ${m}`))
    }
    c.extra.forEach((e) => out.push(`  ${e}`))
    return out.join('\n')
  })
  .join('\n\n' + '─'.repeat(60) + '\n\n')

writeFileSync(
  join(outDir, 'omen-cards.txt'),
  `재앙 카드 — docs/omens.md 에서 뽑음 (scripts/extract-omens.mjs)\n` +
    `${cards.length}종 각 1장 · 총 ${cards.length}장 (뒷면은 운명 카드와 동일)\n\n` +
    '═'.repeat(60) +
    '\n\n' +
    txt +
    '\n'
)

console.log('docs/_export/omen-cards.tsv · .txt')
console.log(`${cards.length}종`)
for (const c of cards) {
  const miss = ['효과', '플레이버'].filter((l) => !pick(c, l))
  console.log(
    `  ${String(c.no).padStart(2)}. ${c.name.padEnd(7)} ${c.kind.padEnd(3)} 라벨 ${c.fields.length}개` +
      (miss.length ? `  ⚠ ${miss.join('·')} 없음` : '')
  )
}
