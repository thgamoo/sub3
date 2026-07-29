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

## 2. charm — 매력 (부채)

### 이미지 생성 프롬프트

```text
a single ornate folding fan displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, one elegant lace and silk folding fan spread fully open, rose pink and cream fabric with fine gold ribs and a small ribbon hanging from the pivot, the object floating and centered, seen straight on from the front, softly glowing, plain dark gradient background with a subtle warm rose pink radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

```text
a single cute stylized folding fan icon at the exact center of the frame, romance fantasy webnovel card illustration, flat cel-shaded anime illustration, cute simplified icon style, one folding fan spread open in a neat rounded arc, rose pink and cream panels with simple gold ribs and a small ribbon hanging from the pivot, clean bold outlines, flat pink colors with only minimal soft shading, no gloss, no specular highlights, no realistic reflections, no 3D rendering, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
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

## 5. holy — 신성 (십자가)

### 이미지 생성 프롬프트

```text
a single ornate golden cross displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, one elegant upright latin cross of polished gold with fine engraved filigree and a small white gem set at its heart, radiant holy light streaming outward from behind it, the object floating upright and centered, seen straight on from the front, softly glowing, plain dark gradient background with a subtle warm golden white radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

```text
a single cute stylized golden cross icon at the exact center of the frame, romance fantasy webnovel card illustration, flat cel-shaded anime illustration, cute simplified icon style, one upright latin cross with slightly rounded chunky arms, warm gold with a simple engraved line inset and one small round white gem at the crossing, clean bold outlines, flat gold colors with only minimal soft shading, no radiating light rays, no gloss, no specular highlights, no realistic reflections, no 3D rendering, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
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
