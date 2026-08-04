/**
 * 캐릭터 카드 17종을 문서에서 뽑아 표로 만든다.
 *
 *   node scripts/extract-characters.mjs
 *
 * 정본은 `docs/characters/*.md` (한 파일이 한 인물). 문서를 고치면 다시 돌린다.
 *
 * **그림 관련 절은 통째로 버린다.** 각 파일의 절반 이상이 이미지 생성 프롬프트와
 * 네거티브 프롬프트고(파일당 최대 21판까지 쌓여 있다), 그건 카드에 실릴 글이 아니라
 * 그림을 뽑는 재료다. 외모 설명도 마찬가지로 뺀다 — 그림이 대신 말한다.
 *
 * 남기는 것: 기본 정보(구분·시작지점·시작자원·모티프) · 설정 · 원래 운명 ·
 * 숨겨진 과거 · 과거의 단서 · 가능한 각성 능력.
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dir = join(root, 'docs/characters')

const clean = (s) =>
  s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .trim()

/** 카드에 실을 절만 — 나머지(외모·프롬프트)는 그림 재료다 */
const KEEP = ['설정', '원래 운명', '숨겨진 과거', '과거의 단서', '가능한 각성 능력']

/** 구분을 짧게 — 카드 위에 길게 적을 자리가 없다 */
const shortRole = (s) =>
  /메인 악녀/.test(s) ? '메인 악녀'
  : /플레이어/.test(s) ? '플레이어'
  : /남주/.test(s) ? '남주'
  : /주인공/.test(s) ? '주인공'
  : clean(s)

const people = []
for (const file of readdirSync(dir).sort()) {
  if (!file.endsWith('.md') || file === 'overall.md') continue
  const lines = readFileSync(join(dir, file), 'utf8').split(/\r?\n/)

  // `# 서부의 꽃 - 로욱시나 (Roxana)` / `# 알렉 (Alec)`
  const title = clean(lines.find((l) => l.startsWith('# '))?.slice(2) ?? file)
  const m = /^(?:(.+?)\s*-\s*)?(.+?)\s*\(([^)]+)\)\s*$/.exec(title)
  const p = {
    file,
    epithet: clean(m?.[1] ?? ''),
    name: clean(m?.[2] ?? title),
    en: clean(m?.[3] ?? ''),
    role: '',
    start: '',
    res: '',
    motif: '',
    sections: {},
  }

  let sec = ''
  for (const raw of lines) {
    const line = raw.trim()
    const h = /^##\s+(.+)$/.exec(line)
    if (h) {
      sec = clean(h[1])
      continue
    }
    if (!line || line.startsWith('#')) continue

    if (sec === '기본 정보') {
      const kv = /^[-*]\s*([^:：]+)\s*[:：]\s*(.+)$/.exec(line)
      if (!kv) continue
      const k = clean(kv[1])
      const v = clean(kv[2])
      if (k === '구분') p.role = v
      else if (k === '시작지점') p.start = v
      else if (k === '시작자원') p.res = v
      else if (k === '모티프') p.motif = v
      continue
    }

    if (!KEEP.includes(sec)) continue
    if (line.startsWith('>')) continue
    if (line.startsWith('|')) continue // 표는 카드 글이 아니다
    ;(p.sections[sec] ??= []).push(clean(line.replace(/^\s*[-*]\s+/, '· ')))
  }
  people.push(p)
}

// 구분별로 묶어 보기 좋게 — 플레이어 → 남주 → 메인 악녀 → 주인공
const order = ['플레이어', '남주', '메인 악녀', '주인공']
people.sort((a, b) => order.indexOf(shortRole(a.role)) - order.indexOf(shortRole(b.role)) || a.name.localeCompare(b.name))

// ── 내보내기 ───────────────────────────────────────────────
const outDir = join(root, 'docs/_export')
mkdirSync(outDir, { recursive: true })

const esc = (s) => s.replace(/\n/g, '\\n')
const tsv = [
  ['구분', '이름', '이명', '영문', '시작지점', '시작자원', '모티프', '설정', '원래 운명', '숨겨진 과거', '과거의 단서', '가능한 각성 능력'].join('\t'),
  ...people.map((p) =>
    [
      shortRole(p.role),
      p.name,
      p.epithet,
      p.en,
      p.start,
      p.res,
      p.motif,
      ...KEEP.map((k) => esc((p.sections[k] ?? []).join('\n'))),
    ].join('\t')
  ),
].join('\n')
writeFileSync(join(outDir, 'character-cards.tsv'), tsv)

const txt = people
  .map((p) => {
    const out = [
      `${p.epithet ? `${p.epithet} - ` : ''}${p.name}   (${p.en})`,
      `     ${shortRole(p.role)} · 시작 ${p.start}${p.res ? ` · ${p.res}` : ''} · 모티프 ${p.motif}`,
    ]
    for (const k of KEEP) {
      const body = p.sections[k]
      if (!body?.length) continue
      out.push(`  [${k}]`)
      body.forEach((b) => out.push(`    ${b}`))
    }
    return out.join('\n')
  })
  .join('\n\n' + '─'.repeat(60) + '\n\n')

writeFileSync(
  join(outDir, 'character-cards.txt'),
  `캐릭터 카드 — docs/characters/*.md 에서 뽑음 (scripts/extract-characters.mjs)\n` +
    `${people.length}종\n` +
    `※ 외모·이미지 생성 프롬프트는 뺐다 — 카드에 실을 글이 아니라 그림 재료다\n\n` +
    '═'.repeat(60) +
    '\n\n' +
    txt +
    '\n'
)

console.log('docs/_export/character-cards.tsv · .txt')
for (const r of order) {
  const mine = people.filter((p) => shortRole(p.role) === r)
  if (mine.length) console.log(`  ${r.padEnd(6)} ${mine.length}명  ${mine.map((p) => p.name).join(', ')}`)
}
