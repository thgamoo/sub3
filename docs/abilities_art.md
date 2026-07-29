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

### 공통 네거티브

```text
person, people, human figure, hands, arms, face, character, background scenery, landscape, room, table, floor, multiple objects, several items, cluttered composition, frame, border, ornate frame, gore, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration
```

---

## 1. sword — 검

### 이미지 생성 프롬프트

```text
a single ornate longsword displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, one elegant straight double-edged blade standing upright with the point up, a silver crossguard with fine engraving and a dark wrapped leather grip, cold steel highlights running the length of the blade, the object floating upright and centered, seen straight on from the front, softly glowing, plain dark gradient background with a subtle cold silver-blue radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```

## 2. charm — 매력 (부채)

### 이미지 생성 프롬프트

```text
a single ornate folding fan displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, one elegant lace and silk folding fan spread fully open, rose pink and cream fabric with fine gold ribs and a small ribbon hanging from the pivot, the object floating and centered, seen straight on from the front, softly glowing, plain dark gradient background with a subtle warm rose pink radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```

## 3. magic — 마법 (지팡이)

### 이미지 생성 프롬프트

```text
a single ornate magic staff displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, one slender carved wooden staff standing perfectly upright, its head an ornate silver setting holding a glowing violet crystal, a few faint arcane runes drifting in the air close around the crystal, the object floating upright and centered, seen straight on from the front, softly glowing, plain dark gradient background with a subtle violet radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```

## 4. blood — 선혈 (핏방울)

### 이미지 생성 프롬프트

```text
a single large blood droplet displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, one perfect glossy crimson drop of blood suspended in midair, deep red and translucent with a bright specular highlight and a dark core, two or three tiny droplets trailing just beneath it, the object floating and centered, seen straight on from the front, softly glowing, plain dark gradient background with a subtle deep crimson radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```

## 5. holy — 신성 (십자가)

### 이미지 생성 프롬프트

```text
a single ornate golden cross displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, one elegant upright latin cross of polished gold with fine engraved filigree and a small white gem set at its heart, radiant holy light streaming outward from behind it, the object floating upright and centered, seen straight on from the front, softly glowing, plain dark gradient background with a subtle warm golden white radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```

## 6. poison — 독약

### 이미지 생성 프롬프트

```text
a single ornate poison vial displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, one small glass bottle with a dark cork stopper and a fine metal collar, filled with glowing toxic green liquid with small bubbles drifting inside, a thin wisp of green vapor curling up from the neck, the object floating upright and centered, seen straight on from the front, softly glowing, plain dark gradient background with a subtle sickly green radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```

## 7. dark — 어둠

### 이미지 생성 프롬프트

```text
a single orb of pure darkness displayed alone at the exact center of the frame, romance fantasy webnovel card illustration, detailed anime style, one perfect sphere of absolute black shadow with tendrils of dark smoke curling slowly outward from its surface, a faint violet rim light tracing its edge, a few wisps of shadow drifting close around it, the object floating and centered, seen straight on from the front, plain dark gradient background with a subtle deep purple radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation, high detail, no text, no watermark
```
