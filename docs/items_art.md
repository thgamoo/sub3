# 물건 카드 아트

단서 18종 + 유물 6종 = **24종**의 이미지 생성 프롬프트.
구성품 사양은 [rules/tokens.md](rules/tokens.md#3-물건-카드-뒷면-파랑),
세계 진실 물건의 서사는 [rules/truth-clues.md](rules/truth-clues.md) 참고.

## 공통 규칙

### 이건 아이콘 카드다 — 능력 카드와 같은 규격

물건 카드는 손에 여러 장 쥐고 **작게 볼 때 무엇인지 즉시 읽혀야** 한다.
따라서 [abilities_art.md](abilities_art.md) 와 동일하게
**구도·배경을 24종 전부 고정**하고 **오브젝트와 조명색만** 바꾼다.

정중앙 단독 배치 / 정면 / 어두운 그라디언트 배경 / 인물·손·배경 없음.

### 계층은 조명색으로 가른다

뒷면은 전부 파랑이라 앞면에서 구분돼야 한다.

| 계층 | 조명 | 의도 |
|---|---|---|
| **단서** 18종 | 따뜻한 호박색 (`warm amber glow`) | 오래 간직된 개인의 과거 |
| **세계 진실 물건** 5종 | 차가운 청록색 (`cold pale cyan glow`) | 고대 SF·초월적 이물감 |
| **엘릭서** 1종 | 자체 발광 금색 | 유일한 소모품, 즉시 구분돼야 함 |

### ⚠️ 문서형 물건은 글자를 막지 말 것

24종 중 **10종이 문서**(일기·증서·편지·인명부·칙서·설계도·수기 등)다.
`no text` 계열을 네거티브에 그대로 넣으면 **백지가 나온다.**

- 문서형 → 네거티브에서 `text, letters, words, writing` 을 **뺀다.**
  대신 포지티브에 `faint indistinct script` / `rows of faint indistinct handwriting` 을 넣어
  **읽히지 않는 필기체 질감**으로 처리한다. 어차피 2B 는 글자를 못 쓴다
- 사물형 → 네거티브에 `text, letters, words, writing, inscription, label` 을 넣어 깔끔하게 막는다
- 단 `벨의 단검`은 각인이 서사의 핵심이라 **사물형이지만 각인을 살렸다**

> `no text, no watermark` 는 포지티브 말미의 관용구라 24종 전부에 그대로 둔다 —
> 이건 화면에 오버레이되는 텍스트를 막는 것이고 위 네거티브와는 층위가 다르다.

---

# 단서 (18종 27장)

## clue_nanny_diary — 유모의 일기

### 이미지 생성 프롬프트 v1

```text
a single small worn leather-bound diary lying closed with a faded ribbon bookmark trailing out of it, its cover soft and rounded from handling displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```


### 이미지 생성 프롬프트 v2

> **끈 제거 + 얇은 책.** `thick book, heavy tome, many pages` 를 막지 않으면 두꺼운 고서로 간다.

```text
a single small thin leather-bound diary lying closed and flat, only a slim sheaf of pages inside so the book is noticeably thin, its soft cover rounded and worn smooth from years of handling, faded and scuffed at the corners displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v2

```text
ribbon, bookmark, trailing ribbon, cord, strap, clasp, thick book, heavy tome, many pages, fat book, open book, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```

### 이미지 생성 프롬프트 v3

> **양장본 → 수첩.** 하녀가 쓰는 책이 양장본일 리 없다. `softcover pocket notebook`, `limp paper cover ... no rigid boards and no hard binding`, `carried in an apron pocket` 로 규정했다.
> 네거티브에 `hardcover, rigid boards, leather bound, gilt edges, clasp, metal fittings, grimoire, tome` 를 넣었다 — 이 모델은 '책'이라고만 하면 기본적으로 고서를 그린다.

```text
a single small thin softcover pocket notebook lying closed and flat, a cheap plain servant's memo book, its limp paper cover bent and curling at the corners with no rigid boards and no hard binding, only a slim sheaf of pages inside so it is noticeably thin, the simple stitched spine visible along one edge, the cover blank and unadorned, faded and scuffed and soft from years of being carried in an apron pocket displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v3

```text
hardcover, hard binding, rigid boards, leather bound, tooled leather, gilt edges, gold leaf, clasp, metal fittings, ornate cover, embossed cover, decorated cover, grimoire, tome, thick book, heavy book, many pages, fat book, open book, ribbon, bookmark, trailing ribbon, cord, strap, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```

### 이미지 생성 프롬프트 v4

> **펼쳐서 글씨를 보이게.** v3 은 닫혀 있어서 아무것도 안 적힌 것처럼 보였다.
> 장보기 목록처럼 **짧은 항목이 줄줄이** 적힌 형태로 지정했다 — `brief entries written one under another`, `short like a list of errands and things to buy rather than sentences`, `each entry starting with a small dash`, 몇 개는 줄로 그어 지웠다.
> 사물형 → **문서형으로 전환**했다. `text, letters, writing` 을 막아두면 백지가 된다. 네거티브에 `blank pages, no writing` 과 함께 `long paragraphs, dense prose, columns of names` 를 넣어 인명부처럼 빽빽해지는 것도 막았다.

```text
a single small thin softcover pocket notebook lying open flat, a cheap plain servant's memo book with a limp paper cover bent and curling at the corners, no rigid boards and no hard binding, only a slim sheaf of pages so it is noticeably thin, a simple stitched spine down the middle, and its two open pages carrying a short handwritten list, seven or eight brief entries written one under another in a plain hurried everyday hand, each line short like a list of errands and things to buy rather than sentences, each entry starting with a small dash and a few of them crossed out with a single stroke, the ink faded brown, the writing faint and indistinct but clearly present, the paper soft and scuffed from years in an apron pocket displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v4

```text
blank pages, empty pages, no writing, unwritten, clean paper, long paragraphs, dense prose, full sentences, wall of text, columns of names, hardcover, hard binding, rigid boards, leather bound, tooled leather, gilt edges, gold leaf, clasp, metal fittings, ornate cover, embossed cover, grimoire, tome, thick book, heavy book, many pages, fat book, closed book, ribbon, bookmark, cord, strap, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```
## clue_imperial_pendant — 황가의 팬던트

### 이미지 생성 프롬프트 v1

```text
a single ornate golden imperial pendant on a fine chain, a double-headed eagle crest set with a deep red gemstone at its center, the chain pooled beneath it displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```

## clue_adoption_deed — 양녀증서

### 이미지 생성 프롬프트 v1

```text
a single stiff formal adoption deed on heavy cream parchment, rolled half open, a broken red wax seal and a trailing silk cord at its lower edge, rows of faint indistinct script displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```


### 이미지 생성 프롬프트 v2

> **종이 한 장 + 인장만.** 두루마리·끈을 전부 네거티브로 뺐다.

```text
a single single flat sheet of stiff cream parchment lying face up, one plain rectangular page and nothing else, a round deep red wax seal pressed into its lower corner, rows of faint indistinct script across it, the paper slightly yellowed at the edges displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v2

```text
rolled scroll, rolled paper, curled paper, scroll rod, ribbon, silk cord, cord, bookmark, stack of papers, several sheets, envelope, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```
## clue_prince_letter — 폐태자의 편지

### 이미지 생성 프롬프트 v1

```text
a single folded handwritten letter on yellowed paper, its cracked wax seal split in two, the paper creased deeply from being folded and hidden many times, faint indistinct script displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```


### 이미지 생성 프롬프트 v2

> **봉해진 편지 한 장.** 뜯긴 밀랍이 기본값이라 `broken seal, cracked seal, open letter` 를 막았다. 겉면에 글씨가 없으므로 사물형 네거티브를 쓴다.

```text
a single single folded letter of yellowed paper lying flat and still sealed shut, an unbroken round dark red wax seal pressed at the center of its fold holding it closed, the paper creased deeply from being folded and hidden many times, no writing visible on the outside displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v2

```text
open letter, unfolded letter, broken seal, cracked seal, torn paper, several letters, stack of letters, envelope pile, visible handwriting, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```

### 이미지 생성 프롬프트 v3

> **두께를 없앤다.** `seen almost edge-on so its extreme thinness is obvious`, `one flat leaf ... with no bulk and no volume at all`.
> ⚠️ **이 카드는 `--no-lora` 로 뽑는다.** `AnimaMythP0rtr4itStyleV1` 은 포트레이트 스타일 LoRA라 오브젝트에 질감과 두께를 더하는 경향이 있다. 종이 한 장처럼 **부피가 0이어야 하는 대상**에는 오히려 방해가 된다.

```text
a single single sheet of folded letter paper lying perfectly flat on its side, seen almost edge-on so its extreme thinness is obvious, just one flat leaf of yellowed paper with no bulk and no volume at all, still sealed shut by one small round dark red wax seal pressed at the centre of the fold, the paper creased deeply from being folded and hidden many times, its edges soft and worn, no writing visible on the outside displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v3

```text
thick paper, thick letter, bulky, stack of paper, several sheets, many pages, book, envelope pile, package, parcel, scroll, rolled paper, open letter, unfolded letter, broken seal, cracked seal, torn paper, visible handwriting, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```

### 이미지 생성 프롬프트 v4

> **LoRA 를 다시 켠다.** `--no-lora` 로 두께는 잡혔지만 인장이 밋밋한 원반이 됐다 — LoRA 가 빠지면 작은 부조 디테일이 같이 사라진다. 두께는 프롬프트로 잡고 인장은 LoRA 로 살린다.
> 인장을 **황가의 인**으로 명시했다 — `an imperial crest of a double-headed eagle with its wings spread` (`clue_imperial_pendant` 의 쌍두독수리 문장과 같은 것).
> 네거티브에 `blank seal, plain seal, featureless wax, unstamped seal` 로 밋밋해지는 것을, `cross emblem, religious symbol` 로 다른 문장으로 새는 것을 막았다.

```text
a single single sheet of folded letter paper lying perfectly flat, seen almost edge-on so its extreme thinness is obvious, just one flat leaf of yellowed paper with no bulk and no volume at all, still sealed shut by one round dark red wax seal pressed at the centre of the fold, the wax seal clearly stamped with an imperial crest of a double-headed eagle with its wings spread, the eagle impression crisp and deep in the wax and unbroken, the paper creased deeply from being folded and hidden many times, its edges soft and worn, no writing visible on the outside displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v4

```text
blank seal, plain seal, featureless wax, smooth wax, unstamped seal, broken seal, cracked seal, opened seal, open letter, unfolded letter, torn paper, cross emblem, religious symbol, skull, rose, star, thick paper, thick letter, bulky, stack of paper, several sheets, many pages, book, envelope pile, package, parcel, scroll, rolled paper, visible handwriting, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```
## clue_memory_chip — 메모리 칩

### 이미지 생성 프롬프트 v1

```text
a single tiny ancient memory chip, a thin dark rectangle of circuitry with delicate gold contact pins along one edge and faint blue light tracing its etched lines displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```


### 이미지 생성 프롬프트 v2

> **더 얇게.** `thick block, chunky, cartridge` 를 막고 `wafer-thin`, `barely thicker than a fingernail` 로 명시했다.

```text
a single very thin flat memory chip, a wafer-thin dark rectangle barely thicker than a fingernail, its flatness obvious, delicate gold contact pins along one narrow edge, faint blue light tracing the fine circuit lines etched into its surface displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v2

```text
thick block, chunky, bulky, cube, boxy, cartridge, module with a case, heat sink, circuit board, motherboard, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```
## clue_bell_dagger — 벨의 단검

> 각인(`내 사랑하는 여동생 데이지를 생각하며`)이 서사의 핵심이라 사물형이지만 글자를 살렸다.

### 이미지 생성 프롬프트 v1

```text
a single slender straight steel dagger lying at an angle, a simple crossguard and a plain leather-wrapped grip, a line of small engraved script running along the flat of the blade displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```

## clue_church_registry — 교회 7094지부의 인명부

### 이미지 생성 프롬프트 v1

```text
a single thick heavy church registry ledger lying open, two dense columns of faint indistinct names filling its yellowed pages, a dark cross embossed on the exposed corner of its cover displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```


### 이미지 생성 프롬프트 v2

> **장부 형태 + 작은 교회 표시 + 탄 자국.** 십자가가 커지지 않도록 `large cross, ornate cross` 를 막았다.

```text
a single thick heavy ledger book bound in dark leather, lying open flat, its two yellowed pages ruled into narrow columns filled with rows of faint indistinct handwritten names, a small simple cross emblem stamped in the corner of the exposed cover, the outer edges of the pages and the cover scorched brown and blackened as if pulled out of a fire, a few charred flaking corners displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v2

```text
large cross, huge cross, ornate cross, religious icon dominating, clean pristine book, new book, unburnt, scroll, loose papers, blank pages, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```

### 이미지 생성 프롬프트 v3

> **v2 는 책이 불타고 있었다.** '탄 듯하게'를 화재로 해석한 것이다. v3 은 **이미 꺼진 뒤**를 그린다 — `cold and long extinguished`, `no heat and no light left in it`.
> 핵심은 **재가 된 부분과 남은 부분의 경계**다. `one whole corner burned away into soft grey ash` + `the surviving half still intact and readable` + `a hard ragged line between the ash and what was saved`.
> 네거티브에 `fire, flame, burning, ember, smoke, orange glow, firelight, sparks` 를 전부 넣었다.

```text
a single thick heavy ledger book bound in dark leather, lying open flat, cold and long extinguished, its two yellowed pages ruled into narrow columns filled with rows of faint indistinct handwritten names, a small simple cross emblem stamped in the corner of the exposed cover, one whole corner of the book already burned away into soft grey ash so the ruled pages simply end in a crumbling black and grey edge, the surviving half of the pages still intact and readable with their columns of names untouched, a hard ragged line between the ash and what was saved, fine grey ash dust settled in the gutter of the book, brittle blackened flakes curling at the burned edge, no heat and no light left in it displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v3

```text
fire, flame, flames, burning, on fire, alight, ablaze, ember, glowing embers, hot coals, smoke, rising smoke, orange glow, firelight, sparks, fully burnt, completely destroyed, all pages black, clean pristine book, new book, undamaged, scroll, loose papers, blank pages, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```
## clue_oblivion_potion — 약간 남은 망각포션

### 이미지 생성 프롬프트 v1

```text
a single small glass vial with only a shallow swallow of pale silver-grey liquid left at the bottom, a loose cork stopper beside its neck, the empty upper glass catching the light displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```


### 이미지 생성 프롬프트 v2

> **스티커 라벨 추가.** 라벨에 글씨가 있어야 하므로 문서형으로 바꿨다 — 사물형 네거티브(`text, letters, label`)를 그대로 뒀으면 라벨이 안 붙는다. 대신 `large readable words` 만 막아 읽히지 않는 손글씨 질감으로 처리한다.

```text
a single small glass medicine bottle with only a shallow swallow of pale silver-grey liquid left at the bottom, a loose cork stopper beside its neck, and a small rectangular paper label sticker pasted crookedly across the front of the bottle, its corners peeling up, a few short lines of faint indistinct handwritten scrawl on the sticker, the empty upper glass catching the light displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v2

```text
full bottle, bottle full of liquid, overflowing, no label, bare bottle, large readable words on the label, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```

### 이미지 생성 프롬프트 v3

> **v2 는 액체가 안 보였다.** '조금 남은'이 '다 비운'으로 갔다 — 투명한 은회색이 유리에 묻혔다. v3 은 액체를 **불투명하게(`opaque milky`)** 만들고 `a sharp bright horizontal line across the glass` + `distinct dark meniscus curve` 로 **수면을 형태로** 지정했다. 네거티브에 `empty bottle, no liquid, transparent liquid, invisible liquid` 를 넣었다.

```text
a single small clear glass medicine bottle standing upright and mostly empty, with a shallow pool of opaque milky pale silver-grey liquid resting in the very bottom of it, the liquid filling only the lowest fifth of the bottle but plainly and clearly visible, its flat surface making a sharp bright horizontal line across the glass and a distinct dark meniscus curve where it meets the walls, the liquid noticeably lighter than the empty glass above it, a loose cork stopper tilted in the neck, and a small rectangular paper label sticker pasted crookedly across the front of the bottle, its corners peeling up, a few short lines of faint indistinct handwritten scrawl on the sticker displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v3

```text
empty bottle, completely empty, no liquid, dry bottle, full bottle, bottle full of liquid, half full, overflowing, transparent liquid, invisible liquid, clear water, no label, bare bottle, large readable words on the label, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```
## clue_papal_bull — 교황칙서

### 이미지 생성 프롬프트 v1

```text
a single official papal decree on stiff white parchment hanging open, a heavy gold and lead seal dangling from a cord at its base, an ornate cross at the top and short lines of stern indistinct script below displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```

## clue_yokai_converter — 요마변환기

### 이미지 생성 프롬프트 v1

```text
a single strange handheld transformation device of dark lacquered metal and bone, a ring of orange-glowing runes around its barrel and a small cracked lens at one end displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```


### 이미지 생성 프롬프트 v2

> **팔찌 형태로 변경.** v1 의 총·봉 형태로 새지 않도록 `gun, barrel, handle, grip, wand, rod` 를 막고, 다른 장신구로 새지 않게 `necklace, ring` 도 넣었다.

```text
a single strange heavy bracelet of dark lacquered metal and bone, a thick rigid cuff sized for a wrist, a ring of small orange-glowing runes running around its outer band, a single cracked round lens set into its face like a gem, worn fastenings at the back displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v2

```text
gun, barrel, handle, grip, wand, rod, staff, handheld device, machine, box, necklace, ring, earring, crown, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```
## clue_hoyo_record — 호요족의 기록

### 이미지 생성 프롬프트 v1

```text
a single old eastern bound record scroll partly unrolled, thin bamboo slats and rice paper, a fox-shaped seal stamped in red at one end, faint indistinct brush script displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```


### 이미지 생성 프롬프트 v2

> **두루마리 제거 + 여러 겹 + 여우귀 인물 붓 삽화.** 삽화가 있어야 하므로 문서형으로 두되 `scroll, scroll rod, bamboo slats` 를 명시적으로 막았다.

```text
a single bundle of several layered sheets of old rice paper stacked and slightly fanned out, flat and unrolled, the topmost sheet bearing a delicate ink brush painting of a standing figure with fox ears and a fox tail drawn in flowing eastern brush strokes, faint indistinct brush script in columns beside the drawing, a small red seal stamp in the corner, the paper foxed and stained with age displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v2

```text
scroll, rolled scroll, scroll rod, wooden rod, bamboo slats, hanging scroll, single sheet, western paper, book binding, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```

### 이미지 생성 프롬프트 v3

> **v2 는 여우귀 사람이 아니라 여우가 나왔다.** `a standing figure with fox ears` 만으로는 동물로 해석된다. v3 은 **사람임을 먼저 못박는다** — `a human woman ... with a human face and human hands`, `a fox-eared woman and not an animal`. 네거티브에도 `fox, animal, quadruped, four legs, real fox` 를 넣었다.
> ⚠️ 공통 네거티브의 `person, human, face` 와 정면 충돌하므로 **이 카드에서는 그 조항을 뺐다.** 삽화 속 인물은 허용해야 한다.

```text
a single bundle of several layered sheets of old rice paper stacked and slightly fanned out, flat and unrolled, the topmost sheet bearing a delicate ink brush painting of a woman, a human woman standing upright on two legs in flowing eastern robes, with a human face and human hands, who has a pair of pointed fox ears rising from her hair and a large fox tail behind her, a fox-eared woman and not an animal, drawn in flowing eastern brush strokes, faint indistinct brush script in columns beside the drawing, a small red seal stamp in the corner, the paper foxed and stained with age displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v3

```text
fox, animal, beast, quadruped, four legs, animal on all fours, sitting fox, real fox, kitsune animal, wolf, dog, creature without a human body, scroll, rolled scroll, scroll rod, wooden rod, bamboo slats, hanging scroll, single sheet, western paper, book binding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```
## clue_hero_chronicle — 용사전기

### 이미지 생성 프롬프트 v1

```text
a single grand old chronicle book standing upright and closed, a deep blue cover with a gold sword emblem stamped on it, gilded page edges and a heavy metal clasp displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```

## clue_hundred_demons — 백요잡서

### 이미지 생성 프롬프트 v1

```text
a single battered eastern folding book opened into a zigzag, its pages crowded with faint sketched outlines of small grotesque demons, the paper stained and torn at the corners displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```

## clue_progenitor_lore — 진조의 전승

### 이미지 생성 프롬프트 v1

```text
a single ancient tome bound in dark red leather with iron corner fittings, a single stylized bat sigil burned into the cover, thin dried blood-brown lines seeping from its closed edge displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```

## clue_eternal_coffin — 영원의 관

> `vampire_awakens` 운명카드의 관과 **같은 물건**이다. 서술을 맞춰뒀다.

### 이미지 생성 프롬프트 v1

```text
a single long rectangular black coffin standing upright and closed, bound with heavy rusted iron chains and riveted iron bands, old sealing talismans peeling from its lid displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```


### 이미지 생성 프롬프트 v2

> **부적 제거 + 쇠사슬이 풀린 연출.** `chains taut, tightly bound` 를 막아 느슨함을 강제했다. `vampire_awakens` 의 관과 같은 물건이지만 이쪽은 **이미 풀린 뒤**다.

```text
a single long rectangular black coffin standing upright with its lid shut, heavy rusted iron chains wrapped around it but hanging loose and half undone, several links slipped free and dangling down one side, one chain end fallen away from the coffin entirely, riveted iron bands across its width, the lid seated but no longer held displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v2

```text
talisman, paper talisman, ofuda, seal paper, sticker, charm, written seal, chains taut, chains tight, tightly bound, padlock, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```
## clue_heretic_contract — 이교의 계약서

### 이미지 생성 프롬프트 v1

```text
a single unholy contract on dark grey parchment, an inverted occult sigil drawn large at its center in dried red-brown ink, its lower edge scorched and curling, faint indistinct clauses displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```

## clue_cardinal_appointment — 추기경서임서

### 이미지 생성 프롬프트 v1

```text
a single formal ecclesiastical appointment document on white and gold parchment, a scarlet ribbon and a round gold seal at its base, an ornate cross watermarked faintly into the paper displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```


### 이미지 생성 프롬프트 v2

> **v1 은 종이가 책 위에 얹혀 두께가 생겼다.** 서임서는 문서 한 장이다.
> `one loose leaf of paper and nothing underneath it, no book and no board and no backing of any kind`, `thin and limp with its lower corners curling forward` 로 못박고 네거티브에 `book, codex, tome, cover, boards, spine, binding, paper resting on a book, backing board` 를 넣었다.
> 같은 장에서 **`clue_papal_bull` 은 v1 에서 이미 단일 종이로 잘 나왔다** — 상단 십자 · 본문 필기체 · 아래 인장. 그 구성을 그대로 따르되 끈을 **주홍 리본**으로, 인장을 금색으로 바꿔 칙서와 구분되게 했다.
> v1 의 거대한 금 십자가 페이지를 다 먹어 문서로 안 읽혔던 것도 함께 고쳤다 — `small ornate gold cross emblem at the top centre` + 네거티브 `huge cross, giant cross filling the page, cross dominating the composition, blank page`.

```text
a single single flat sheet of ecclesiastical appointment parchment hanging alone in the frame, one loose leaf of paper and nothing underneath it, no book and no board and no backing of any kind, the sheet thin and limp with its lower corners curling forward and its edges softly frayed, a small ornate gold cross emblem printed at the top centre of the sheet, below it eight or nine lines of faint indistinct formal script filling the middle of the page, a thin gold rule border framing the text, and at the bottom edge a scarlet silk ribbon threaded through the parchment with a round gold seal hanging from it just below the paper, the whole thing clearly a single document and not a bound volume displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v2

```text
book, bound book, codex, volume, tome, cover, book cover, hardcover, boards, spine, binding, stack of pages, many pages, thick, thickness, bulky, three dimensional block, paper resting on a book, paper on a board, paper on a plaque, backing board, tablet, scroll, rolled paper, scroll rods, large readable letters, big bold title text, modern printed font, huge cross, giant cross filling the page, cross dominating the composition, blank page, no text, person, human, face, hands, fingers, holding, two objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, room interior, table, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting
```
## clue_mermaid_scale — 인어의비늘

### 이미지 생성 프롬프트 v1

```text
a single single large iridescent mermaid scale, a smooth teardrop shape shading from deep sea blue to pale green at its rim, a faint pearl sheen along its ridges displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```

---

# 유물 — 세계 진실 물건 (5종 10장)


### 이미지 생성 프롬프트 v2

> **여러 개 + 무지개빛.** 단수형이 강해서 `single scale, one scale, only one` 을 네거티브에 넣었다. 공통 네거티브의 `two objects, multiple objects` 와 충돌하므로 이 카드에서는 **그 조항을 뺐다.**

```text
a single small cluster of several iridescent mermaid scales gathered together, five or six smooth teardrop scales overlapping loosely, each one shimmering through the full rainbow from violet to deep sea blue to green to gold depending on its angle, a soft pearl sheen along every ridge, prismatic rainbow highlights scattered across them displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v2

```text
single scale, one scale, only one, fish, mermaid, tail, creature, monochrome, dull color, person, human, face, girl, boy, hands, fingers, arms, holding, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```

### 이미지 생성 프롬프트 v3

> **하나짜리로 되돌렸다.** v2 의 여러 개 구성을 폐기했다. 공통 네거티브의 단수 강제 조항(`two objects, multiple objects`)도 그대로 살렸고, `two scales, several scales, cluster of scales` 를 추가로 넣었다. 무지개빛은 유지한다.

```text
a single single large iridescent mermaid scale, one scale and nothing else, a smooth teardrop shape shading through the full rainbow from violet at its tip to deep sea blue to green to gold at its rim, a soft pearl sheen along its ridges, prismatic rainbow highlights sliding across its surface displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v3

```text
two scales, several scales, cluster of scales, pile, group, many, fish, mermaid, tail, creature, monochrome, dull color, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```

### 이미지 생성 프롬프트 v4

> **무지개빛 → 푸른빛 중심.** 전면 무지개는 정체가 흐려진다. `predominantly blue ... with only a faint restrained iridescent shimmer` 로 **청색을 본체, 영롱함을 가장자리 효과**로 격하했다. 네거티브에 `rainbow, multicolored, red, orange, yellow, green, pink, prismatic, holographic` 을 넣었다.

```text
a single single large iridescent mermaid scale, one scale and nothing else, a smooth teardrop shape that is predominantly blue, deep sea blue across most of its body shading to a lighter aqua at the rim, with only a faint restrained iridescent shimmer of teal and violet catching along its ridges at the edges, a soft pearl sheen over the blue, the overall impression clearly blue rather than multicolored displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v4

```text
rainbow, full rainbow, multicolored, many colors, red, orange, yellow, green, pink, magenta, prismatic, oil slick, holographic, two scales, several scales, cluster of scales, pile, group, many, fish, mermaid, tail, creature, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```

### 이미지 생성 프롬프트 v5

> **푸른색은 잡혔지만 형태가 커졌다.** 표면에 격자 비늘무늬가 잔뜩 박혀 '비늘 한 장'이 아니라 '비늘로 덮인 물고기 몸통'처럼 보였다.
> `teardrop shape` 만으로는 부족했고 LoRA 가 표면을 디테일로 채운 것이 겹쳤다.
> **표면이 매끈해야 한다고 명시한다** — `one clean unbroken glassy surface and no pattern or texture drawn on it at all`, `completely smooth like a polished fingernail or a flat guitar pick`.
> 네거티브에 `scale pattern, scales on the surface, fish scale texture, overlapping scales, mesh, lattice, diamond pattern` 과 부피를 막는 `bulky, thick, volumetric, puffy` 를 넣었다. 폐태자의 편지에서 두께를 억누른 것과 같은 종류의 문제다.

```text
a single single thin flat mermaid scale, one small smooth plate of scale and nothing else, a simple rounded teardrop plate with one clean unbroken glassy surface and no pattern or texture drawn on it at all, completely smooth like a polished fingernail or a flat guitar pick, its colour predominantly blue, deep sea blue through the body shading to a lighter aqua at the rim, with only a faint restrained shimmer of teal catching along its outer edge, a soft pearl sheen, a few fine concentric growth lines near its base being the only marking on it displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a warm amber glow, aged and worn with the patina of something kept for years, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v5

```text
scale pattern, scales on the surface, fish scale texture, overlapping scales, mesh, net pattern, lattice, crosshatch, diamond pattern, quilted, reptile skin, dragon scale, feathers, fish, fish body, tail, fin, creature, animal, bulky, thick, volumetric, puffy, inflated, three dimensional mass, rainbow, full rainbow, multicolored, many colors, red, orange, yellow, green, pink, magenta, prismatic, oil slick, holographic, two scales, several scales, cluster of scales, pile, group, many, person, human, face, hands, fingers, holding, two objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, room interior, table, shelf, floor, text, letters, words, writing, inscription, label, watermark, signature, logo, frame border, lowres, blurry, jpeg artifacts, chromatic aberration, photorealistic, 3d render, glossy plastic, volumetric lighting
```
## truth_lab_pass — 고대 연구소의 출입증

### 이미지 생성 프롬프트 v1

```text
a single ancient laboratory access pass, a thin translucent card of pale blue crystal-glass etched with unreadable geometric characters, the faint portrait of a smiling woman glowing dimly inside it displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a cold pale cyan glow, humming with impossible ancient technology, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```


### 이미지 생성 프롬프트 v2

> **일러스트 제거 + 실제 출입증 카드 형태 + 목걸이 끈.** v1 의 '웃는 여인의 초상'이 카드를 그림판으로 만들었다. 이제 `portrait, illustration, face on the card` 를 네거티브로 뺐다.

```text
a single plain rectangular identification badge card hanging from a fabric neck lanyard, the lanyard looped above it and its clip fastened to a punched hole at the card's top edge, the card face flat and mostly empty pale blue-grey with a small square blank photo panel in one corner and two short faint indistinct data lines beside it, a thin embedded circuit strip along one side glowing dimly displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a cold pale cyan glow, humming with impossible ancient technology, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v2

```text
portrait, illustration, painting, drawing, face on the card, woman, smiling woman, ornate decoration, engraving, crystal, gemstone, rune, magic sigil, no lanyard, no strap, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```
## truth_hal_core — HAL의 코어 파편

### 이미지 생성 프롬프트 v1

```text
a single jagged shard of a shattered machine core, dark metal veined with softly pulsing pale blue light, fine circuitry visible along its broken edge displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a cold pale cyan glow, humming with impossible ancient technology, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```

## truth_gate_blueprint — 승천의 문 설계도

### 이미지 생성 프롬프트 v1

```text
a single large technical blueprint of an enormous gate, pale cyan lines on dark drafting paper, precise circles and measurement marks, two signature lines at the bottom corner where one name has been violently scratched out displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a cold pale cyan glow, humming with impossible ancient technology, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```


### 이미지 생성 프롬프트 v2

> **진짜 blueprint 형태로.** v1 은 '어두운 제도지 위 청록 선'이라 미묘했다. 이제 **짙은 청색 바탕 + 흰 선**이라는 고전 청사진 규약을 명시하고, 원근 투시가 아닌 `orthographic elevation`(정투상 입면도)으로 못박았다.

```text
a single single large architectural blueprint sheet seen flat and straight on, classic blueprint style with a solid deep blue paper ground and precise thin white line drawings on it, an orthographic elevation of an enormous gate at the center with white construction circles, dimension lines with arrowheads, and small white grid ticks along the margins, a ruled title block box in the lower right corner containing two faint signature lines where one has been struck through displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a cold pale cyan glow, humming with impossible ancient technology, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v2

```text
cyan lines on dark paper, black paper, parchment, aged paper, scroll, painting, illustration, artistic drawing, sketch, rendered image, perspective view, colorful, warm color, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```
## truth_ascended_husk — 승천자의 허물

### 이미지 생성 프롬프트 v1

```text
a single empty human-shaped husk left behind, a hollow translucent shell of a person collapsed softly inward like shed skin, the face serene and vacant, faint pale light inside the emptiness displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a cold pale cyan glow, humming with impossible ancient technology, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```


### 이미지 생성 프롬프트 v2

> **전신.** `full-body`, `head to toe`, `crown to feet` 를 겹쳐 쓰고 네거티브로 크롭을 막았다. 아이콘 카드 규격상 클로즈업으로 가려는 압력이 세서 명시가 여러 번 필요하다.

```text
a single complete full-body human-shaped husk shown head to toe, an entire hollow translucent shell of a whole person from crown to feet, standing slightly slumped and softly collapsed inward like shed skin with the whole silhouette intact, the face serene and vacant, the arms and legs and torso all visible within the frame, faint pale light glowing inside the emptiness displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a cold pale cyan glow, humming with impossible ancient technology, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v2

```text
cropped, close-up, portrait, bust, head only, face only, upper body only, cut off at the waist, partial figure, missing legs, missing arms, person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```
## truth_previous_journal — 이전 빙의자의 수기

### 이미지 생성 프롬프트 v1

```text
a single worn everyday notebook lying open, its modern lined pages completely out of place among medieval things, rows of faint indistinct handwriting, one page corner folded down displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by a cold pale cyan glow, humming with impossible ancient technology, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, large readable letters, big bold title text, modern printed font
```

---

# 유물 — 엘릭서 (3장)

## elixir — 엘릭서

> 유일한 소모품. 단서·진실 물건과 **한눈에 달라야** 해서 자체 발광 금색으로 뺐다.

### 이미지 생성 프롬프트 v1

```text
a single ornate crystal flask of elixir, a round faceted bottle filled with luminous golden liquid, a gold filigree collar at its neck and a stopper shaped like a small sun, tiny motes of light rising inside the fluid displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, the object seen straight on from the front and filling most of the frame, lit by its own bright inner light, precious and alive, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, no furniture, clean iconic presentation, high detail, no text, no watermark
```

### 네거티브 프롬프트 v1

```text
person, human, face, girl, boy, hands, fingers, arms, holding, two objects, three objects, multiple objects, duplicate object, pair, collection, cluttered background, scenery, landscape, room interior, table, desk, shelf, floor, watermark, signature, logo, frame border, ornate border, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, photorealistic, 3d render, glossy plastic, shiny highlights, volumetric lighting, text, letters, words, writing, inscription, label
```
