# 능력 카드 아트

능력 카드 7종의 이미지 생성 프롬프트. 구성품 사양은 [rules/tokens.md](rules/tokens.md#2-능력-카드) 참고.

## 공통 규칙

### 구성 (tokens.md 기준)

| 능력 | 상징물 | 장수 |
|---|---|---|
| 검 | 검 | 10 |
| 매력 | 부채 | **40** |
| 마법 | 지팡이 | 10 |
| 선혈 | 핏방울 | 10 |
| 신성 | 십자가 | 10 |
| 독약 | 독약병 | 10 |
| 어둠 | (어둠) | 10 |

총 100장, **뒷면 노란색**.

### ⚠️ 이건 아이콘 카드다 — 7종이 한 세트로 보여야 한다

캐릭터·재앙과 성격이 다르다.

- 같은 카드가 **10~40장씩 반복 인쇄**되므로, 한 장이 튀면 덱 전체가 지저분해진다
- 손에 여러 장 쥐고 **작게 볼 때 무엇인지 즉시 읽혀야** 한다
- 따라서 **구도·조명·배경을 7종 전부 동일하게 고정**하고, **오브젝트와 색만** 바꾼다

**고정 요소** — 모든 프롬프트에 동일하게 들어간다:

```text
a single ornate <오브젝트> displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, the object floating upright and centered, seen straight on from the front, softly glowing, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```

**능력별 색** — 손패에서 색만으로도 구분되도록 겹치지 않게 배분한다:

| 능력 | 색 |
|---|---|
| 검 | 차가운 은청색 |
| 매력 | 로즈 핑크 |
| 마법 | 보라 |
| 선혈 | 진홍 |
| 신성 | 금색 + 백광 |
| 독약 | 독성 녹색 |
| 어둠 | 흑색 + 자주 |

### 생성 설정

캐릭터·재앙과 동일. 크기는 **1024 × 1024** (프레임은 나중에 합성).

| 항목 | 값 |
|---|---|
| 모델 | `anima-base-v1.0` |
| LoRA | `AnimaMythP0rtr4itStyleV1`, strength 1.0 |
| 품질 태그 | base (`masterpiece, best quality, score_7, safe, ` 접두) |
| 샘플링 | 30 steps / CFG 4.0 / `er_sde` / `simple` |

> LoRA 는 이름이 `P0rtr4itStyle` 이지만 재앙(풍경) 카드에서도 질감이 우수했으므로 그대로 쓴다.
> 다만 **오브젝트 단독 카드에서는 검증되지 않았다** — 결과가 지저분하면 LoRA 없이 비교해볼 것.

### ⚠️ v2 방향 전환 — 플랫하고 귀엽게, 배경은 단색

v1은 오브젝트가 **3D 렌더처럼 광택이 강했고**, 방사형 글로우 + 그라데이션 배경이라
**오브젝트를 따내기가 어려웠다.** 로판 세계관에는 플랫하고 귀여운 쪽이 맞다.

- **화풍**: 셀 셰이딩 플랫 일러스트. 광택·반사·입체 렌더 금지
- **배경**: **완전 균일한 흰색 단색.** 글로우·그라데이션·비네팅·그림자 전부 제거
  → 후처리로 오브젝트만 따내기 쉬워진다
- `dark`(어둠)만 v1도 괜찮았으나, 세트 통일과 배경 조건 때문에 함께 개정한다

> **투명 배경은 불가능하다** — 확산 모델은 알파 채널을 만들지 못한다.
> 균일 단색이 실질적 대안이며, 필요하면 ComfyUI 에 배경 제거 모델
> (`models/background_removal/`)을 붙이는 방법도 있다. 별도 다운로드 필요.

모든 v2 프롬프트에 공통으로 들어가는 절:

```text
flat cel-shaded anime illustration, cute simplified icon style, clean bold outlines, flat colors with only minimal soft shading, no gloss, no specular highlights, no realistic reflections, no 3D rendering, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette
```

### 공통 네거티브

```text
person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, multiple objects, several items, cluttered composition, frame, border, ornate frame, gore, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration
```

### 공통 네거티브 v2

```text
3d render, cgi, photorealistic, realistic, glossy, high gloss, specular highlight, shiny reflection, metallic reflection, volumetric lighting, gradient background, radial glow, glowing background, vignette, dark background, black background, colored background, drop shadow, cast shadow, ground shadow, depth of field, person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, multiple objects, several items, cluttered composition, frame, border, gore, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration
```

---

## 1. sword — 검

### 이미지 생성 프롬프트

```text
a single ornate longsword displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, one elegant straight double-edged blade standing upright with the point up, a silver crossguard with fine engraving and a dark wrapped leather grip, cold steel highlights running the length of the blade, the object floating upright and centered, seen straight on from the front, softly glowing, plain dark gradient background with a subtle cold silver-blue radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

```text
a single cute stylized longsword icon at the exact center of the frame, romance fantasy webnovel card illustration, flat cel-shaded anime illustration, cute simplified icon style, one straight double-edged blade standing upright point up with a slightly chunky friendly shape, a simple silver crossguard and a soft blue wrapped grip, clean bold outlines, flat silver-blue colors with only minimal soft shading, no gloss, no specular highlights, no realistic reflections, no 3D rendering, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```


### 이미지 생성 프롬프트 v5

```text
a single cute 3d game item icon of a longsword at the exact center of the frame, romance fantasy webnovel card asset, one short stubby double-edged blade standing upright point up in cool silver blue polished metal, a small rounded crossguard and a soft blue wrapped grip with a round silver pommel, friendly toy-like proportions, rendered as a chunky rounded three dimensional object with soft plump volume, smooth matte vinyl toy surface with a gentle sheen, soft even studio lighting from the upper left, soft ambient occlusion in the crevices, a faint rim light along the far edge, seen in a slight three quarter view from just above, cute collectible charm proportions, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain pure white background, completely flat uniform white with no gradient, no cast shadow on the ground, no pedestal, no base, no platform, no reflection, no text, no watermark
```

### 네거티브 프롬프트 v5

```text
flat design, flat vector icon, 2d illustration, line art, sketch, cel shaded flat colors, sticker outline, thick black outline, cast shadow, drop shadow, ground shadow, floor reflection, pedestal, base, stand, platform, gradient background, radial glow, vignette, dark background, colored background, cropped, cut off, out of frame, touching the edge, partial object, person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, multiple objects, several items, cluttered composition, frame, border, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, katana, curved blade, realistic weapon, sharp gritty metal, battle damage, rust
```


### 이미지 생성 프롬프트 v7

> **화려함을 걷어내고 단순한 쇠검으로.** 대각선으로 눕힌다.
> v6 까지는 `cool silver blue steel` + 파란 그립이라 장식적이었고 세워둔 형태였다.
> v7 은 **평범한 회색 강철 + 가죽 그립**, 왼쪽 아래에서 오른쪽 위로 눕는 대각선.
>
> ⚠️ `no engraving` 같은 **포지티브 부정어는 쓰지 않았다** — 확산모델은 그걸 못 읽고
> 오히려 부른다. 전부 네거티브로 넣었다 (`ornate, engraving, filigree, gems, gold trim`).
> ⚠️ `upright, vertical, standing sword, point up` 억제 — 세워진 형태로 되돌아가는 것을 막는다.

```text
a plain steel longsword lying diagonally across the frame from the lower left to the upper right, one straight double-edged blade of plain gray steel with a simple bevel, a small plain crossguard, a dark leather-wrapped grip, a small round pommel, the object alone and complete, the whole sword fully inside the frame with generous empty margin on every side, isolated on a plain uniform white background with nothing else in the image
```

### 네거티브 프롬프트 v7

```text
upright, vertical, standing sword, point up, point down, blade pointing straight up,
ornate, ornamental, engraving, filigree, etched pattern, gems, jewels, gold trim, decorated hilt, fancy hilt, winged crossguard,
glowing blade, magic aura, energy blade, blue steel, colored blade, rainbow sheen,
person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, wall, multiple objects, several items, duplicate, cluttered composition, frame, border, cropped, cut off, out of frame, touching the edge, partial object, gore, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, katana, curved blade, samurai, rust, battle damage, broken blade
```

### 이미지 생성 프롬프트 v6

```text
a longsword at the exact center of the frame, one straight double-edged blade standing upright with the point up, cool silver blue steel, a crossguard and a blue wrapped grip with a round pommel, the object alone and complete, seen straight on, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain uniform white background with nothing else in the image, no person, no hands, no scenery, no text, no watermark
```

### 네거티브 프롬프트 v6

```text
person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, wall, multiple objects, several items, duplicate, cluttered composition, frame, border, cropped, cut off, out of frame, touching the edge, partial object, gore, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, katana, curved blade, samurai, rust, battle damage, broken blade
```

## 2. charm — 매력 (부채)

### 이미지 생성 프롬프트

```text
a single ornate folding fan displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, one elegant lace and silk folding fan spread fully open, rose pink and cream fabric with fine gold ribs and a small ribbon hanging from the pivot, the object floating and centered, seen straight on from the front, softly glowing, plain dark gradient background with a subtle warm rose pink radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

```text
a single cute stylized folding fan icon at the exact center of the frame, romance fantasy webnovel card illustration, flat cel-shaded anime illustration, cute simplified icon style, one folding fan spread open in a neat rounded arc, rose pink and cream panels with simple gold ribs and a small ribbon hanging from the pivot, clean bold outlines, flat pink colors with only minimal soft shading, no gloss, no specular highlights, no realistic reflections, no 3D rendering, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```


### 이미지 생성 프롬프트 v5

```text
a single cute 3d game item icon of a folding fan at the exact center of the frame, romance fantasy webnovel card asset, one folding fan spread open in a neat rounded arc, rose pink and cream panels with soft gold ribs and a tiny ribbon dangling from the pivot, plump padded looking panels, rendered as a chunky rounded three dimensional object with soft plump volume, smooth matte vinyl toy surface with a gentle sheen, soft even studio lighting from the upper left, soft ambient occlusion in the crevices, a faint rim light along the far edge, seen in a slight three quarter view from just above, cute collectible charm proportions, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain pure white background, completely flat uniform white with no gradient, no cast shadow on the ground, no pedestal, no base, no platform, no reflection, no text, no watermark
```

### 네거티브 프롬프트 v5

```text
flat design, flat vector icon, 2d illustration, line art, sketch, cel shaded flat colors, sticker outline, thick black outline, cast shadow, drop shadow, ground shadow, floor reflection, pedestal, base, stand, platform, gradient background, radial glow, vignette, dark background, colored background, cropped, cut off, out of frame, touching the edge, partial object, person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, multiple objects, several items, cluttered composition, frame, border, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, paper fan flat as paper, japanese uchiwa, closed fan
```


### 이미지 생성 프롬프트 v6

```text
a folding fan at the exact center of the frame, one western lace and silk folding fan spread fully open in a rounded arc, rose pink and cream, slender gold ribs, a small ribbon hanging from the pivot, the object alone and complete, seen straight on, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain uniform white background with nothing else in the image, no person, no hands, no scenery, no text, no watermark
```

### 네거티브 프롬프트 v6

```text
person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, wall, multiple objects, several items, duplicate, cluttered composition, frame, border, cropped, cut off, out of frame, touching the edge, partial object, gore, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, japanese fan, uchiwa, wooden ribs, bamboo, paper fan, closed fan, oriental pattern, cream only, beige only
```

## 3. magic — 마법 (지팡이)

### 이미지 생성 프롬프트

```text
a single ornate magic staff displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, one slender carved wooden staff standing perfectly upright, its head an ornate silver setting holding a glowing violet crystal, a few faint arcane runes drifting in the air close around the crystal, the object floating upright and centered, seen straight on from the front, softly glowing, plain dark gradient background with a subtle violet radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

```text
a single cute stylized magic staff icon at the exact center of the frame, romance fantasy webnovel card illustration, flat cel-shaded anime illustration, cute simplified icon style, one slim wooden staff standing upright with a rounded violet gem held in a simple silver crescent at the top, two tiny sparkles beside the gem, clean bold outlines, flat violet and warm brown colors with only minimal soft shading, no gloss, no specular highlights, no realistic reflections, no 3D rendering, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```

### 이미지 생성 프롬프트 v3

> 수정: 지팡이가 **너무 가늘고 작아** 손패에서 존재감이 없었음.
> **마법서(두꺼운 마도서)** 로 교체 — 면적이 넓어 축소해도 잘 읽힌다.

```text
a single cute stylized spellbook icon at the exact center of the frame, romance fantasy webnovel card illustration, flat cel-shaded anime illustration, cute simplified icon style, one thick closed magic tome standing upright and facing the viewer, a deep violet leather cover with a simple gold border and one round violet gem set in the middle of the cover, cream page edges visible along the side, two tiny sparkles beside it, clean bold outlines, flat violet and gold colors with only minimal soft shading, no gloss, no specular highlights, no realistic reflections, no 3D rendering, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```

### 네거티브 프롬프트 v3

```text
text on cover, letters, writing, runes, inscription, title, open book, pages spread, staff, wand, rod, 3d render, cgi, photorealistic, glossy, specular highlight, shiny reflection, gradient background, radial glow, vignette, dark background, colored background, drop shadow, cast shadow, person, hands, face, background scenery, multiple objects, frame, border, worst quality, low quality, score_1, score_2, score_3, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration
```


### 이미지 생성 프롬프트 v5

```text
a single cute 3d game item icon of a spellbook at the exact center of the frame, romance fantasy webnovel card asset, one thick closed magic tome standing upright and facing the viewer, a deep violet leather cover with a soft gold border and one round violet gem set in the middle, cream page edges visible along the side, plump padded cover with rounded corners, two tiny violet sparkles beside it, rendered as a chunky rounded three dimensional object with soft plump volume, smooth matte vinyl toy surface with a gentle sheen, soft even studio lighting from the upper left, soft ambient occlusion in the crevices, a faint rim light along the far edge, seen in a slight three quarter view from just above, cute collectible charm proportions, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain pure white background, completely flat uniform white with no gradient, no cast shadow on the ground, no pedestal, no base, no platform, no reflection, no text, no watermark
```

### 네거티브 프롬프트 v5

```text
flat design, flat vector icon, 2d illustration, line art, sketch, cel shaded flat colors, sticker outline, thick black outline, cast shadow, drop shadow, ground shadow, floor reflection, pedestal, base, stand, platform, gradient background, radial glow, vignette, dark background, colored background, cropped, cut off, out of frame, touching the edge, partial object, person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, multiple objects, several items, cluttered composition, frame, border, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, open book, pages spread, writing on cover, letters, title, runes, staff, wand
```


### 이미지 생성 프롬프트 v6

```text
a spellbook at the exact center of the frame, one thick closed magic tome standing upright and facing the viewer, a deep violet cover with a gold border and one round violet gem set in the middle, cream page edges visible along the side, the object alone and complete, seen straight on, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain uniform white background with nothing else in the image, no person, no hands, no scenery, no text, no watermark
```

### 네거티브 프롬프트 v6

```text
person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, wall, multiple objects, several items, duplicate, cluttered composition, frame, border, cropped, cut off, out of frame, touching the edge, partial object, gore, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, open book, pages spread, writing on cover, letters, title, runes, staff, wand
```

## 4. blood — 선혈 (핏방울)

### 이미지 생성 프롬프트

```text
a single large blood droplet displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, one perfect glossy crimson drop of blood suspended in midair, deep red and translucent with a bright specular highlight and a dark core, two or three tiny droplets trailing just beneath it, the object floating and centered, seen straight on from the front, softly glowing, plain dark gradient background with a subtle deep crimson radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

```text
a single cute stylized blood droplet icon at the exact center of the frame, romance fantasy webnovel card illustration, flat cel-shaded anime illustration, cute simplified icon style, one plump rounded teardrop of blood with a soft pointed top, a small simple white highlight shape on one side, two tiny droplets below it, clean bold outlines, flat crimson red colors with only minimal soft shading, no gloss, no specular highlights, no realistic reflections, no 3D rendering, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```

### 이미지 생성 프롬프트 v3

> 수정: 광택을 더 뺀다. 흰 하이라이트 대신 **어두운 붉은 그림자면 하나**로만 입체를 준다.
>
> 참고 — 하이라이트가 흰색이어도 **배경 제거로 같이 날아가지는 않는다.**
> BiRefNet 은 색상 키가 아니라 형태 기반 분할이라 오브젝트 내부 흰 픽셀을 전경으로 유지한다
> (v2 실측: 선혈 오브젝트 내부 흰 픽셀 2,984개가 불투명 상태로 보존됨).

```text
a single cute stylized blood droplet icon at the exact center of the frame, romance fantasy webnovel card illustration, flat cel-shaded anime illustration, cute simplified icon style, one plump rounded teardrop of blood with a soft pointed top, completely flat solid crimson red fill with one simple darker red shadow shape along the lower edge and nothing else, no white highlight, no shine, no gradient on the surface, two tiny droplets below it, clean bold outlines, no specular highlights, no realistic reflections, no 3D rendering, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```

### 네거티브 프롬프트 v3

```text
white highlight, specular highlight, shine, glossy, wet look, glass reflection, gradient fill, 3d render, cgi, photorealistic, radial glow, gradient background, vignette, dark background, colored background, drop shadow, cast shadow, person, hands, face, background scenery, multiple objects, frame, border, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration
```


### 이미지 생성 프롬프트 v5

```text
a single cute 3d game item icon of a blood droplet at the exact center of the frame, romance fantasy webnovel card asset, one plump rounded teardrop of blood with a soft pointed top in deep crimson red, smooth glassy jelly-like volume with one soft highlight, two tiny droplets below it, rendered as a chunky rounded three dimensional object with soft plump volume, smooth matte vinyl toy surface with a gentle sheen, soft even studio lighting from the upper left, soft ambient occlusion in the crevices, a faint rim light along the far edge, seen in a slight three quarter view from just above, cute collectible charm proportions, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain pure white background, completely flat uniform white with no gradient, no cast shadow on the ground, no pedestal, no base, no platform, no reflection, no text, no watermark
```

### 네거티브 프롬프트 v5

```text
flat design, flat vector icon, 2d illustration, line art, sketch, cel shaded flat colors, sticker outline, thick black outline, cast shadow, drop shadow, ground shadow, floor reflection, pedestal, base, stand, platform, gradient background, radial glow, vignette, dark background, colored background, cropped, cut off, out of frame, touching the edge, partial object, person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, multiple objects, several items, cluttered composition, frame, border, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, gore, wound, splatter, spilled blood pool, dripping mess
```


### 이미지 생성 프롬프트 v6

```text
a blood droplet at the exact center of the frame, one plump rounded teardrop of blood with a pointed top, deep crimson red, two tiny droplets below it, the object alone and complete, seen straight on, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain uniform white background with nothing else in the image, no person, no hands, no scenery, no text, no watermark
```

### 네거티브 프롬프트 v6

```text
person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, wall, multiple objects, several items, duplicate, cluttered composition, frame, border, cropped, cut off, out of frame, touching the edge, partial object, gore, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, puddle, pool of blood, spilled blood, splatter, melting, sagging shape, wound
```

## 5. holy — 신성 (십자가)

### 이미지 생성 프롬프트

```text
a single ornate golden cross displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, one elegant upright latin cross of polished gold with fine engraved filigree and a small white gem set at its heart, radiant holy light streaming outward from behind it, the object floating upright and centered, seen straight on from the front, softly glowing, plain dark gradient background with a subtle warm golden white radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

```text
a single cute stylized golden cross icon at the exact center of the frame, romance fantasy webnovel card illustration, flat cel-shaded anime illustration, cute simplified icon style, one upright latin cross with slightly rounded chunky arms, warm gold with a simple engraved line inset and one small round white gem at the crossing, clean bold outlines, flat gold colors with only minimal soft shading, no radiating light rays, no gloss, no specular highlights, no realistic reflections, no 3D rendering, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```


### 이미지 생성 프롬프트 v5

```text
a single cute 3d game item icon of a golden cross at the exact center of the frame, romance fantasy webnovel card asset, one upright latin cross with thick rounded chunky arms in warm gold, a soft engraved line inset along each arm and one small round white gem at the crossing, two tiny golden sparkles beside it, rendered as a chunky rounded three dimensional object with soft plump volume, smooth matte vinyl toy surface with a gentle sheen, soft even studio lighting from the upper left, soft ambient occlusion in the crevices, a faint rim light along the far edge, seen in a slight three quarter view from just above, cute collectible charm proportions, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain pure white background, completely flat uniform white with no gradient, no cast shadow on the ground, no pedestal, no base, no platform, no reflection, no text, no watermark
```

### 네거티브 프롬프트 v5

```text
flat design, flat vector icon, 2d illustration, line art, sketch, cel shaded flat colors, sticker outline, thick black outline, cast shadow, drop shadow, ground shadow, floor reflection, pedestal, base, stand, platform, gradient background, radial glow, vignette, dark background, colored background, cropped, cut off, out of frame, touching the edge, partial object, person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, multiple objects, several items, cluttered composition, frame, border, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, radiating light rays, lens flare, crucifix with figure, jesus, church
```


### 이미지 생성 프롬프트 v6

```text
a golden cross at the exact center of the frame, one upright latin cross of polished gold metal with an engraved line inset along each arm and one small round white gem at the crossing, the object alone and complete, seen straight on, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain uniform white background with nothing else in the image, no person, no hands, no scenery, no text, no watermark
```

### 네거티브 프롬프트 v6

```text
person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, wall, multiple objects, several items, duplicate, cluttered composition, frame, border, cropped, cut off, out of frame, touching the edge, partial object, gore, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, cookie, biscuit, bread, wood, stone, dull tan color, beige, crucifix with figure
```

## 6. poison — 독약

### 이미지 생성 프롬프트

```text
a single ornate poison vial displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, one small glass bottle with a dark cork stopper and a fine metal collar, filled with glowing toxic green liquid with small bubbles drifting inside, a thin wisp of green vapor curling up from the neck, the object floating upright and centered, seen straight on from the front, softly glowing, plain dark gradient background with a subtle sickly green radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

```text
a single cute stylized poison bottle icon at the exact center of the frame, romance fantasy webnovel card illustration, flat cel-shaded anime illustration, cute simplified icon style, one round-bellied little glass bottle with a chunky brown cork stopper, filled with flat toxic green liquid with two or three simple round bubbles inside, one small curl of green vapor above the cork, clean bold outlines, flat green colors with only minimal soft shading, no gloss, no specular highlights, no realistic reflections, no 3D rendering, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```


### 이미지 생성 프롬프트 v5

```text
a single cute 3d game item icon of a poison bottle at the exact center of the frame, romance fantasy webnovel card asset, one round-bellied little glass bottle with a chunky brown cork stopper, filled with toxic green liquid with two or three simple round bubbles inside, one small curl of green vapor above the cork, cute potion bottle proportions, rendered as a chunky rounded three dimensional object with soft plump volume, smooth matte vinyl toy surface with a gentle sheen, soft even studio lighting from the upper left, soft ambient occlusion in the crevices, a faint rim light along the far edge, seen in a slight three quarter view from just above, cute collectible charm proportions, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain pure white background, completely flat uniform white with no gradient, no cast shadow on the ground, no pedestal, no base, no platform, no reflection, no text, no watermark
```

### 네거티브 프롬프트 v5

```text
flat design, flat vector icon, 2d illustration, line art, sketch, cel shaded flat colors, sticker outline, thick black outline, cast shadow, drop shadow, ground shadow, floor reflection, pedestal, base, stand, platform, gradient background, radial glow, vignette, dark background, colored background, cropped, cut off, out of frame, touching the edge, partial object, person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, multiple objects, several items, cluttered composition, frame, border, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, skull label, label, tag, sticker on bottle, spilled liquid, broken glass
```


### 이미지 생성 프롬프트 v6

```text
a poison bottle at the exact center of the frame, one round-bellied glass bottle with a brown cork stopper, filled with toxic green liquid with a few round bubbles inside, a small curl of green vapor above the cork, the object alone and complete, seen straight on, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain uniform white background with nothing else in the image, no person, no hands, no scenery, no text, no watermark
```

### 네거티브 프롬프트 v6

```text
person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, wall, multiple objects, several items, duplicate, cluttered composition, frame, border, cropped, cut off, out of frame, touching the edge, partial object, gore, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, label, tag, sticker on bottle, skull mark, spilled liquid, broken glass
```

## 7. dark — 어둠

### 이미지 생성 프롬프트

```text
a single orb of pure darkness displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, one perfect sphere of absolute black shadow with tendrils of dark smoke curling slowly outward from its surface, a faint violet rim light tracing its edge, a few wisps of shadow drifting close around it, the object floating and centered, seen straight on from the front, plain dark gradient background with a subtle deep purple radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

```text
a single cute stylized dark orb icon at the exact center of the frame, romance fantasy webnovel card illustration, flat cel-shaded anime illustration, cute simplified icon style, one round sphere of solid black shadow with a few simple curling smoke wisps coming off its upper edge, a thin flat violet outline tracing the sphere, two tiny violet sparkles beside it, clean bold outlines, flat black and violet colors with only minimal soft shading, no gloss, no specular highlights, no realistic reflections, no 3D rendering, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```

### 이미지 생성 프롬프트 v3

> 수정: v2에서 **연기를 흰색으로** 그리는 경우가 있었고, 배경도 흰색이라
> BiRefNet 이 그 부분을 오브젝트로 잡아 **흰 얼룩이 남았음**(dark_01·03).
> `RemoveBackground` 노드에는 임계값 같은 조절 옵션이 **없으므로** 이미지 쪽에서 해결한다.
> → 연기를 **짙은 보라·검정으로 못박는다.** 귀여운 눈(보라 타원 두 개)은 유지.

```text
a single cute stylized dark orb icon at the exact center of the frame, romance fantasy webnovel card illustration, flat cel-shaded anime illustration, cute simplified icon style, one round sphere of solid black shadow with a simple cute face made of two small violet oval eyes, a few curling smoke wisps rising from its top edge drawn in dark violet and black only, never white smoke and never pale smoke, a thin flat violet outline tracing the sphere, two tiny violet sparkles beside it, clean bold outlines, flat black and violet colors with only minimal soft shading, no gloss, no specular highlights, no 3D rendering, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```

### 네거티브 프롬프트 v3

```text
white smoke, white mist, white clouds, pale smoke, light colored smoke, grey smoke, white haze, 3d render, cgi, photorealistic, glossy, specular highlight, gradient background, radial glow, vignette, dark background, colored background, drop shadow, cast shadow, person, hands, face of a human, background scenery, multiple objects, frame, border, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration
```

### 이미지 생성 프롬프트 v4

> 수정: v3에서 연기 얼룩 문제는 해결됐으나 두 가지가 남았음.
> ① **연기가 위로 길게 뻗어 프레임 상단에 잘림** (dark_01·03 — 상단 가장자리 알파 254 실측)
> ② **흰 잔여물**이 조금 남음 (dark_01 흰픽셀 971개) — 정체는 **흰색 반짝이**
>
> → 연기를 짧게 줄이고 여백을 못박으며, 반짝이는 **보라색으로만** 나오도록 억제한다.

```text
a single cute stylized dark orb icon at the exact center of the frame, romance fantasy webnovel card illustration, flat cel-shaded anime illustration, cute simplified icon style, one round sphere of solid black shadow with a simple cute face made of two small violet oval eyes, two or three short curling smoke wisps rising just a little above its top edge drawn in dark violet and black only, never white smoke and never pale smoke, a thin flat violet outline tracing the sphere, two tiny violet sparkles beside it, the entire object including the smoke fully inside the frame with generous empty margin on every side, nothing touching or crossing the image edges, clean bold outlines, flat black and violet colors with only minimal soft shading, no gloss, no 3D rendering, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```

### 네거티브 프롬프트 v4

```text
cropped, cut off, out of frame, touching the edge, object extending past the border, partial object, zoomed in, tall smoke plume, long smoke trail, white smoke, white mist, pale smoke, grey smoke, white sparkles, white stars, white dots, white specks, white glints, 3d render, cgi, photorealistic, glossy, specular highlight, gradient background, radial glow, vignette, dark background, colored background, drop shadow, cast shadow, person, hands, background scenery, multiple objects, frame, border, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration
```


### 이미지 생성 프롬프트 v5

```text
a single cute 3d game item icon of an orb of darkness at the exact center of the frame, romance fantasy webnovel card asset, one round sphere of deep black shadow with a simple cute face made of two small violet oval eyes, two or three short curling smoke wisps rising just a little above its top edge drawn in dark violet and black only, never white smoke and never pale smoke, a soft violet rim light tracing the sphere, two tiny violet sparkles beside it, rendered as a chunky rounded three dimensional object with soft plump volume, smooth matte vinyl toy surface with a gentle sheen, soft even studio lighting from the upper left, soft ambient occlusion in the crevices, a faint rim light along the far edge, seen in a slight three quarter view from just above, cute collectible charm proportions, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain pure white background, completely flat uniform white with no gradient, no cast shadow on the ground, no pedestal, no base, no platform, no reflection, no text, no watermark
```

### 네거티브 프롬프트 v5

```text
flat design, flat vector icon, 2d illustration, line art, sketch, cel shaded flat colors, sticker outline, thick black outline, cast shadow, drop shadow, ground shadow, floor reflection, pedestal, base, stand, platform, gradient background, radial glow, vignette, dark background, colored background, cropped, cut off, out of frame, touching the edge, partial object, person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, multiple objects, several items, cluttered composition, frame, border, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, white smoke, white mist, pale smoke, grey smoke, white sparkles, white dots, white specks, tall smoke plume, long smoke trail, crystal ball, glass sphere
```


### 이미지 생성 프롬프트 v6

```text
an orb of darkness at the exact center of the frame, one round sphere of deep black shadow with two small violet oval eyes, a few short curling smoke wisps in dark violet and black rising just above its top edge, a violet rim tracing the sphere, the object alone and complete, seen straight on, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain uniform white background with nothing else in the image, no person, no hands, no scenery, no text, no watermark
```

### 네거티브 프롬프트 v6

```text
person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, wall, multiple objects, several items, duplicate, cluttered composition, frame, border, cropped, cut off, out of frame, touching the edge, partial object, gore, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, white smoke, white mist, pale smoke, grey smoke, white sparkles, white dots, tall smoke plume, long smoke trail, crystal ball, glass sphere
```

## 8. coin — 금화

> 능력 카드가 아니라 **탐색 덱의 자원 카드**(`rules/tokens.md` 기준 40장)다.
> 같은 아이콘 규격을 쓰되 화풍을 비교하려고 두 버전을 둔다 —
> **v1 = 3D 입체 아이콘 / v2 = 평면(셀) 아이콘.**
> LoRA 적용 여부까지 조합해 2×2 로 뽑아 비교한다.

### 이미지 생성 프롬프트

```text
a single cute 3d game item icon of a gold coin at the exact center of the frame, romance fantasy webnovel card asset, one thick round gold coin standing upright facing the viewer, warm polished gold with a raised rim and a simple embossed crown motif on its face, friendly toy-like proportions, rendered as a chunky rounded three dimensional object with soft plump volume, smooth matte surface with a gentle sheen, soft even studio lighting from the upper left, soft ambient occlusion in the crevices, a faint rim light along the far edge, seen in a slight three quarter view from just above, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain uniform white background
```

### 네거티브 프롬프트

```text
person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, wall, multiple objects, several items, duplicate, cluttered composition, frame, border, cropped, cut off, out of frame, touching the edge, partial object, gore, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, katana, curved blade, samurai, rust, battle damage, broken blade
```

### 이미지 생성 프롬프트 v2

```text
a single gold coin icon at the exact center of the frame, romance fantasy webnovel card asset, flat color, anime coloring, one round gold coin facing the viewer with a raised rim and a simple embossed crown motif on its face, bold clean outlines, hard-edged cel shading, few gradients, matte finish, flat warm gold with only two or three tones, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain uniform white background
```

### 네거티브 프롬프트 v2

```text
3d, realistic, photorealistic, rendered, cgi, volumetric lighting, soft airbrush shading, smooth gradient shading, shiny highlights, specular highlight, metallic sheen, subsurface scattering, ambient occlusion, depth of field,
person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, wall, multiple objects, several items, duplicate, cluttered composition, frame, border, cropped, cut off, out of frame, touching the edge, partial object, gore, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, katana, curved blade, samurai, rust, battle damage, broken blade
```

## 9. skull — 해골

> 능력 카드가 아니라 **악령 전용 카드**(`rules/tokens.md` §8 기준 40장)다.
> 금화와 같은 아이콘 규격 · 평면(셀) 화풍. LoRA 적용본으로 뽑는다.
>
> ⚠️ 악령 소재라 화염·마법 오오라가 붙기 쉬워 네거티브로 막았다.
> 해골 아래 **뼈다귀 교차(crossbones)** 나 갈비뼈가 딸려 나오는 것도 억제.
> 정면 고정 — `tilted, three quarter view, profile, side view` 억제.

### 이미지 생성 프롬프트

```text
a single skull icon at the exact center of the frame, romance fantasy webnovel card asset, flat color, anime coloring, one human skull facing the viewer straight on, pale bone white with hollow dark eye sockets and a simple nasal cavity, a plain rounded cranium and a simple jaw with evenly drawn teeth, bold clean outlines, hard-edged cel shading, few gradients, matte finish, flat bone tones with only two or three values, a faint cool gray shadow under the brow, the whole object fully inside the frame with generous empty margin on every side, isolated on a plain uniform white background
```

### 네거티브 프롬프트

```text
realistic skull, anatomical skull, gore, blood, cracked bone, decayed, rotting,
flames, glowing eyes, magic aura, smoke, crown, hat, horns,
skeleton body, ribcage, bones around it, crossbones, multiple skulls,
tilted, three quarter view, profile, side view,
3d, realistic, photorealistic, rendered, cgi, volumetric lighting, soft airbrush shading, smooth gradient shading, shiny highlights, specular highlight, metallic sheen, subsurface scattering, ambient occlusion, depth of field,
person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, wall, multiple objects, several items, duplicate, cluttered composition, frame, border, cropped, cut off, out of frame, touching the edge, partial object, gore, worst quality, low quality, score_1, score_2, score_3, text, letters, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, katana, curved blade, samurai, rust, battle damage, broken blade
```
