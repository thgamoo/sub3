/**
 * 남주 성향 카드 20종을 문서에서 뽑아 표로 만든다.
 *
 *   node scripts/extract-traits.mjs
 *
 * 정본은 `docs/traits.md`. 문서를 고치면 다시 돌린다. 손으로 고치지 말 것.
 *
 * 그 문서는 같은 카드를 **두 번** 적는다:
 *   ① `## 목록 요약` 표 — 이상형·대체·**특수**를 한눈에
 *   ② `## 카드 상세` — 이상형·**플레이버**를 카드마다
 *
 * 문서 스스로 «불일치가 생기면 카드 상세가 정본» 이라고 못박아 뒀으므로
 * **이상형은 상세를 쓰고**, 상세에 없는 «특수» 만 표에서 가져온다.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const lines = readFileSync(join(root, 'docs/traits.md'), 'utf8').split(/\r?\n/)

const clean = (s) =>
  s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/^["“](.*)["”]$/, '$1')
    .trim()

// ── ① 목록 요약 표에서 «특수» 만 ──────────────────────────
const special = new Map()
let inSummary = false
for (const raw of lines) {
  const line = raw.trim()
  if (/^##\s+목록 요약/.test(line)) { inSummary = true; continue }
  if (/^##\s/.test(line) && inSummary) { inSummary = false; continue }
  if (!inSummary || !line.startsWith('|')) continue
  const c = line.replace(/^\||\|$/g, '').split('|').map(clean)
  const no = Number(c[0])
  if (Number.isFinite(no) && no > 0) special.set(no, c[4] ?? '')
}

// ── ② 카드 상세 ───────────────────────────────────────────
const cards = []
let cur = null
let inDetail = false
for (const raw of lines) {
  const line = raw.trim()
  if (/^##\s+카드 상세/.test(line)) { inDetail = true; continue }
  if (!inDetail) continue

  const h = /^###\s+(\d+)\.\s+(.+)$/.exec(line)
  if (h) {
    cur = { no: Number(h[1]), name: clean(h[2]), ideal: '', alt: '', note: '', flavor: '' }
    cards.push(cur)
    continue
  }
  if (!cur || !line) continue

  const f = /^[-*]\s+\*\*(.+?)\*\*\s*[:：]\s*(.*)$/.exec(line)
  if (!f) continue
  const label = clean(f[1])
  const text = clean(f[2])
  if (label === '플레이버') cur.flavor = text
  else if (label === '이상형') {
    // `매력 1, 검 1 / **또는** `팜므파탈` 각성 / 미호는 …` — 첫 칸이 이상형, 나머지는 대체·단서
    const parts = text.split(/\s*\/\s*/)
    cur.ideal = parts[0] ?? ''
    const rest = parts.slice(1).map((p) => p.replace(/^또는\s*/, '').trim()).filter(Boolean)
    cur.alt = rest[0] ?? ''
    cur.note = rest.slice(1).join(' / ')
  }
}
for (const c of cards) c.special = special.get(c.no) ?? ''

// ── 내보내기 ───────────────────────────────────────────────
const outDir = join(root, 'docs/_export')
mkdirSync(outDir, { recursive: true })

const tsv = [
  ['번호', '성향', '이상형', '대체', '플레이버', '특수', '비고'].join('\t'),
  ...cards.map((c) => [c.no, c.name, c.ideal, c.alt, c.flavor, c.special, c.note].join('\t')),
].join('\n')
writeFileSync(join(outDir, 'trait-cards.tsv'), tsv)

const txt = cards
  .map((c) => {
    const out = [`[${String(c.no).padStart(2, '0')}] ${c.name}`]
    if (c.flavor) out.push(`     “${c.flavor}”`)
    out.push(`  · 이상형: ${c.ideal}`)
    if (c.alt) out.push(`  · 또는:   ${c.alt}`)
    if (c.special) out.push(`  · 특수:   ${c.special}`)
    if (c.note) out.push(`  · 비고:   ${c.note}`)
    return out.join('\n')
  })
  .join('\n\n' + '─'.repeat(60) + '\n\n')

writeFileSync(
  join(outDir, 'trait-cards.txt'),
  `남주 성향 카드 — docs/traits.md 에서 뽑음 (scripts/extract-traits.mjs)\n` +
    `${cards.length}종 각 1장 · 총 ${cards.length}장 (뒷면 분홍)\n` +
    `※ 한 판에는 12장만 깔린다 (4남주 × 3장). 나머지 8장은 그 판에 안 나온다\n` +
    `※ 플레이버는 남주 본인의 대사다\n\n` +
    '═'.repeat(60) +
    '\n\n' +
    txt +
    '\n'
)

console.log('docs/_export/trait-cards.tsv · .txt')
console.log(`${cards.length}종`)
const miss = cards.filter((c) => !c.flavor || !c.ideal)
if (miss.length) console.log(`  ⚠ 빠진 칸: ${miss.map((c) => `${c.no}.${c.name}`).join(', ')}`)
