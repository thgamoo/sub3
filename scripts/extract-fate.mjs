/**
 * 운명 카드 48장을 문서에서 뽑아 표로 만든다.
 *
 *   node scripts/extract-fate.mjs
 *
 * 정본은 `docs/scenario.md` 다. 여기서 만드는 건 **카드에 복붙하기 위한 사본**이고,
 * 문서를 고치면 다시 돌려서 새로 뽑는다. 손으로 고치지 말 것.
 *
 * 문서가 카드를 세 가지 꼴로 적고 있어 셋 다 읽는다:
 *   1. `### 제목 (1장)`            — 초반부
 *   2. `#### 제목 (1장)`           — 중반·후반의 묶음 아래
 *   3. `**제목 (1장)** · 덧붙임`   — 후반부 ①② (굵은 줄로만 구분한다)
 *
 * 그리고 «묶음»과 «카드»를 가려야 한다. `### ① 메인 빌런 토벌전 (4장, 각 지역 1장)` 은
 * 카드가 아니라 그 아래 넷을 묶는 이름이다. **아래에 더 깊은 항목이 있으면 묶음**으로 본다.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = readFileSync(join(root, 'docs/scenario.md'), 'utf8')
const lines = src.split(/\r?\n/)

/** `(3장)` `(4장, 각 지역 1장)` 에서 앞의 숫자 */
const qtyOf = (s) => Number(/\((\d+)\s*장/.exec(s)?.[1] ?? 0)

/** 카드에 그대로 옮길 수 있게 마크다운 표시를 걷어낸다 */
function clean(s) {
  return s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // 링크는 글자만
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .trim()
}

// ── 1) 항목 자리 찾기 ──────────────────────────────────────
const marks = []
let act = ''
lines.forEach((raw, i) => {
  const line = raw.trim()

  const deck = /^##\s+(초반부|중반부|후반부)\s*덱/.exec(line)
  if (deck) {
    act = deck[1]
    return
  }
  if (!act) return

  const h = /^(#{3,4})\s+(.*)$/.exec(line)
  if (h) {
    const title = h[2]
    if (qtyOf(title) > 0) marks.push({ depth: h[1].length, title, qty: qtyOf(title), at: i, act })
    else marks.push({ depth: h[1].length, title, qty: 0, at: i, act, groupOnly: true })
    return
  }

  // 굵은 줄 하나가 카드인 경우 — `**제목 (1장)** · 남주 …`
  const b = /^\*\*(.+?)\*\*(.*)$/.exec(line)
  if (b && qtyOf(b[1]) > 0) {
    marks.push({ depth: 4, title: b[1], qty: qtyOf(b[1]), at: i, act, tail: b[2] })
  }
})

// ── 2) 묶음인지 카드인지 가리기 ────────────────────────────
// 다음 항목이 «더 깊으면» 이건 묶음이다.
marks.forEach((m, i) => {
  const next = marks[i + 1]
  m.isGroup = m.groupOnly || (!!next && next.depth > m.depth)
})

// ── 3) 본문 모으기 ────────────────────────────────────────
const cards = []
marks.forEach((m, i) => {
  if (m.isGroup) return
  const end = marks[i + 1]?.at ?? lines.length
  const body = []
  for (let k = m.at + 1; k < end; k++) {
    const line = lines[k].trim()
    if (!line) continue
    if (line.startsWith('>')) continue // 덱 설명은 카드 글이 아니다
    if (line === '---') break
    body.push(clean(lines[k].replace(/^\s*[-*]\s+/, '· ').replace(/^\s{2,}/, '  ')))
  }
  // 굵은 줄 꼴은 뒤에 붙은 설명(`· 남주 지크프리트, 북부(D)`)이 첫 줄이 된다
  if (m.tail?.trim()) body.unshift(clean(m.tail.replace(/^\s*·\s*/, '')))

  // 제목에서 수량 표시와 **묶음 번호**(①②…)를 떼고, `—` 앞뒤를 이름/부제로 가른다.
  // 번호는 문서에서 묶음을 세는 표시일 뿐이라 카드에 찍히면 안 된다.
  const t = clean(m.title.replace(/\s*\([^)]*장[^)]*\)\s*$/, '').replace(/^[①-⑳]\s*/, ''))
  const dash = t.split(/\s+[—–]\s+/)
  cards.push({
    act: m.act,
    group: [...marks.slice(0, i)].reverse().find((x) => x.isGroup && x.act === m.act && x.depth < m.depth)?.title ?? '',
    title: dash[0],
    sub: dash.slice(1).join(' — '),
    qty: m.qty,
    body,
  })
})

// ── 4) 내보내기 ───────────────────────────────────────────
const outDir = join(root, 'docs/_export')
mkdirSync(outDir, { recursive: true })

// (가) 표 — 스프레드시트에 그대로 붙는다.
// 쉼표가 본문에 흔해서 CSV 대신 **탭**으로 나눈다 (엑셀·구글시트에 그냥 붙는다).
// 줄바꿈은 `\n` 두 글자로 바꿔 한 카드가 한 줄에 들어가게 한다.
const head = ['구간', '묶음', '제목', '부제', '수량', '본문']
const tsv = [
  head.join('\t'),
  ...cards.map((c) =>
    [
      c.act,
      clean(c.group.replace(/\s*\([^)]*\)\s*$/, '')),
      c.title,
      c.sub,
      c.qty,
      c.body.join('\\n'),
    ].join('\t')
  ),
].join('\n')
writeFileSync(join(outDir, 'fate-cards.tsv'), tsv)

// (나) 읽는 판 — 카드 하나씩 눈으로 보고 복붙하기 좋게
const txt = cards
  .map((c, i) => {
    const no = String(i + 1).padStart(2, '0')
    const where = [c.act, clean(c.group.replace(/\s*\([^)]*\)\s*$/, ''))].filter(Boolean).join(' · ')
    return [
      `[${no}] ${c.title}${c.sub ? ` — ${c.sub}` : ''}   (${c.qty}장)`,
      `     ${where}`,
      ...c.body.map((b) => `  ${b}`),
    ].join('\n')
  })
  .join('\n\n' + '─'.repeat(60) + '\n\n')

const total = cards.reduce((n, c) => n + c.qty, 0)
writeFileSync(
  join(outDir, 'fate-cards.txt'),
  `운명 카드 — docs/scenario.md 에서 뽑음 (scripts/extract-fate.mjs)\n` +
    `${cards.length}종 · ${total}장\n\n` +
    '═'.repeat(60) +
    '\n\n' +
    txt +
    '\n'
)

console.log(`docs/_export/fate-cards.tsv · .txt`)
console.log(`${cards.length}종 · ${total}장`)
for (const a of ['초반부', '중반부', '후반부']) {
  const mine = cards.filter((c) => c.act === a)
  console.log(`  ${a}  ${String(mine.length).padStart(2)}종 ${String(mine.reduce((n, c) => n + c.qty, 0)).padStart(3)}장`)
}
