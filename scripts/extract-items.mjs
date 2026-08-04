/**
 * 물건 카드(단서·유물·엘릭서·금화)를 문서에서 뽑아 표로 만든다.
 *
 *   node scripts/extract-items.mjs
 *
 * 정본은 `docs/rules/tokens.md` §3. 문서를 고치면 다시 돌린다. 손으로 고치지 말 것.
 * (운명은 `extract-fate.mjs` · 재앙은 `extract-omens.mjs`)
 *
 * 앞의 둘과 달리 여기는 **표**로 적혀 있다. 카드마다 문단이 있는 게 아니라
 * 한 줄이 한 종류다. 그래서 표를 읽어 «분류 · 이름 · 딸린 것 · 장수» 로 편다.
 *
 *     | 물건          | 관련 캐릭터          | 장수 |
 *     | 유모의 일기   | 샬롯                 | 1    |
 *
 * ⚠️ **플레이버가 없다.** 단서·유물에는 문구가 아직 안 붙어 있어서
 * «딸린 것»(관련 캐릭터 / 진실의 축)만 옮긴다. 문구가 생기면 여기도 늘린다.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const lines = readFileSync(join(root, 'docs/rules/tokens.md'), 'utf8').split(/\r?\n/)

const clean = (s) =>
  s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .trim()

/** `| a | b | c |` -> ['a','b','c'] · 구분줄(`| --- |`)이면 null */
function row(line) {
  if (!/^\s*\|/.test(line)) return undefined
  const cells = line.trim().replace(/^\||\|$/g, '').split('|').map((c) => clean(c))
  return cells.every((c) => /^-{2,}$/.test(c.replace(/\s/g, ''))) ? null : cells
}

// ── 어느 소제목 아래의 표인지 따라가며 줄을 모은다 ────────
const items = []
let where = ''
for (const raw of lines) {
  const line = raw.trim()

  const h = /^#{2,3}\s+(.+)$/.exec(line)
  if (h) {
    where = clean(h[1])
    continue
  }

  const r = row(line)
  if (!r || r.length < 3) continue

  const [name, tag, qty] = r
  const n = Number(qty)
  if (!Number.isFinite(n) || n <= 0) continue // 머리글 줄
  if (name === '물건') continue

  // 어느 소제목 아래냐로 분류가 갈린다
  const kind = where.includes('단서') ? '단서' : where.includes('유물') ? '유물' : ''
  if (!kind) continue
  items.push({ kind, name, tag, qty: n })
}

// 엘릭서는 표가 아니라 문장으로 적혀 있다 (§3.2 끝)
const elixir = lines.find((l) => l.includes('엘릭서') && /총\s*3장/.test(l))
if (elixir) {
  items.push({
    kind: '엘릭서',
    name: '엘릭서',
    tag: clean(elixir).replace(/^.*?엘릭서\s*—\s*/, '').replace(/^총 3장\.\s*/, ''),
    qty: 3,
  })
}
// 금화도 물건 카드(뒷면 파랑)다 — §12
const gold = lines.find((l) => /^-\s*\*\*총\s*60장/.test(l.trim()))
if (gold) items.push({ kind: '금화', name: '금화', tag: '40장은 탐색 덱에 10장씩 · 20장은 세계은행연합', qty: 60 })

// ── 내보내기 ───────────────────────────────────────────────
const outDir = join(root, 'docs/_export')
mkdirSync(outDir, { recursive: true })

const tsv = [
  ['분류', '이름', '딸린 것', '장수'].join('\t'),
  ...items.map((i) => [i.kind, i.name, i.tag, i.qty].join('\t')),
].join('\n')
writeFileSync(join(outDir, 'item-cards.tsv'), tsv)

const groups = ['단서', '유물', '엘릭서', '금화']
const txt = groups
  .map((g) => {
    const mine = items.filter((i) => i.kind === g)
    if (!mine.length) return ''
    const n = mine.reduce((a, b) => a + b.qty, 0)
    const width = Math.max(...mine.map((i) => [...i.name].length))
    return (
      `【${g}】 ${mine.length}종 ${n}장\n` +
      '─'.repeat(60) +
      '\n' +
      mine
        .map((i) => `  ${i.name.padEnd(width + 2)} ×${i.qty}${i.tag ? `   ${i.tag}` : ''}`)
        .join('\n')
    )
  })
  .filter(Boolean)
  .join('\n\n')

const total = items.reduce((a, b) => a + b.qty, 0)
writeFileSync(
  join(outDir, 'item-cards.txt'),
  `물건 카드 — docs/rules/tokens.md §3 에서 뽑음 (scripts/extract-items.mjs)\n` +
    `${items.length}종 · ${total}장 (뒷면 파랑)\n` +
    `※ 단서·유물에는 아직 플레이버 문구가 없다 — «딸린 것» 만 옮겼다\n\n` +
    '═'.repeat(60) +
    '\n\n' +
    txt +
    '\n'
)

console.log('docs/_export/item-cards.tsv · .txt')
for (const g of groups) {
  const mine = items.filter((i) => i.kind === g)
  if (mine.length)
    console.log(`  ${g.padEnd(4)} ${String(mine.length).padStart(2)}종 ${String(mine.reduce((a, b) => a + b.qty, 0)).padStart(3)}장`)
}
console.log(`  합계   ${items.length}종 ${total}장`)
