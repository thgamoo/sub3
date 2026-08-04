# 시나리오 카드 아트

**운명 카드 48장과 별개인 구성품 3장.** 각 구간 덱 맨 위에 1장씩 올라가며,
막을 소모하지 않고 **낭독으로 구간 전환을 알리는 서막** 역할을 한다.
사양은 [rules/tokens.md](rules/tokens.md#6-시나리오-카드-별도-3장) ·
[rules/phases.md](rules/phases.md#2-시나리오-카드-별도-3장) 참고.

## 공통 설계

이 3장은 **개별 사건이 아니라 그 막 전체의 분위기**를 담는 표지 그림이다.
운명 카드와 성격이 다르므로 아래 원칙을 따른다.

| 원칙 | 이유 |
|---|---|
| **초반·후반은 인물을 넣지 않는다** | 특정 캐릭터를 그리면 그 인물의 카드처럼 읽힌다 |
| **중반은 4인 전원 실루엣** | 넷이 동시에 등장한다는 사실 자체가 내용이다 |
| 세 장이 **같은 자리**(하늘 → 무대 → 옥좌)로 이어지게 | 넘길 때 단계가 올라가는 것이 보이게 |

색 흐름도 셋이 이어진다 — **차가운 남색(초반) → 흑백 무대(중반) → 붉은 하늘(후반).**

---

## early_prologue — 초반부 서막 「모이는 운명의 별」

### 이미지 생성 프롬프트 v1

> **초반부 서막 — 「모이는 운명의 별」.** 인물을 넣지 않는다.
> 이 카드는 사건이 아니라 **구간의 시작을 알리는 표지**다. 특정 캐릭터를 그리면 그 인물의 카드처럼 읽히므로 **빈 밤하늘**로 간다.
> 별들이 한 점으로 모여드는 중이되 **아직 별자리가 완성되지 않은 상태**가 핵심이다 — 네거티브에 `finished constellation, completed shape in the sky` 를 넣었다. 모든 것이 아직 정해지지 않았다는 뜻이다.

```text
the stars begin to gather, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, no people at all, an empty scene, a wide night sky over a quiet sleeping academy town seen from a low hill, pale stone spires and tiled roofs below, a few small warm windows still lit, and above them the whole sky filled with stars, a scattering of brighter stars drifting slowly inward toward one point high in the sky, each brighter star trailing a thin faint line of light behind it as it moves, the lines converging on a single small point of white light that has not yet formed into anything, the constellation not yet complete, cool deep blue night, a thin band of last violet light at the horizon, still and quiet and full of promise, the moment before anything has happened
```

### 네거티브 프롬프트 v1

```text
person, people, character, girl, boy, face, hands, crowd, silhouette of a person, daytime, sunlight, bright sky, finished constellation, completed shape in the sky, drawn constellation lines forming a figure, zodiac chart, star map on paper, battle, fire, ruins, blood, gore, threat, monster, cluttered foreground, large building filling the frame, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

## mid_prologue — 중반부 서막 「무대에 오르는 넷」

### 이미지 생성 프롬프트 v1

> **중반부 서막 — 메인 악녀 4인방이 무대에 오른다.**
> 네 명을 **전부 실루엣**으로 둔다. 얼굴을 그리면 그 중 하나가 주인공처럼 보이는데, 이 카드는 **넷이 동시에 등장한다는 사실 자체**가 내용이다.
> 실루엣만으로 구분되도록 각자의 형태를 지정했다 — 이제벨(헝클어진 머리 + 눈의 붕대) · 루크레치아(드릴 컬 + 부채) · 메살리나(기대 누운 자세 + 늘어진 머리) · 로욱시나(풍성한 곱슬 + 작은 왕관).
> 네 개의 조명 웅덩이 사이를 **팽팽한 빛의 실**로 이었다 — 서로 떨어져 있으면서 같은 판 위에 있다는 것을 한 장치로 보여준다.
> ⚠️ 인원이 흔들리기 쉬워 네거티브에 `one person, two people, three people, five people` 을 넣었다.

```text
the stage is set for the villainesses, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, four tall female figures standing far apart across a wide dark stage, all four rendered as solid black backlit silhouettes with no visible faces and no visible features, lit only from behind so their outlines read clearly, each silhouette distinct in shape, one with long wild hair and torn ragged robes and a wrapping across the eyes, one with tall ringlet curls and a wide gown holding a folding fan, one reclining low with long flowing hair and a draped dress, one seated high with voluminous curls and a tiny crown, a single hard beam of light falling on each of them from above, four separate pools of light on a black floor, everything between them swallowed in darkness, thin threads of pale light stretched taut between the four pools like the strings of a web, cold theatrical lighting, deep black stage with no walls and no ceiling visible, four powers taking their places at once
```

### 네거티브 프롬프트 v1

```text
visible faces, lit faces, detailed faces, facial features, eyes, mouths, colored clothing, full color figures, brightly lit figures, one person, two people, three people, five people, six people, crowd, male silhouette, man, men, friendly, smiling, gathering together, standing close, touching, daylight, warm light, outdoors, landscape, blood, gore, weapons drawn, fighting, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```


### 이미지 생성 프롬프트 v2

> **이제벨 실루엣 수정.** 몸을 붕대로 감는 대신 **찢어진 수녀복 + 머리에만 칭칭 감은 붕대**로 바꿨다.
> `a torn tattered nun's habit, the long veil and skirt ripped into ragged strips`, `her head alone wound round and round with thick bandages so her whole head reads as a wrapped bulb with no face, her body otherwise unwrapped`.
> 네거티브에 `bandages on the arms, bandages on the body, wrapped forearms, mummy wrapping, bandages on all four figures` 를 넣었다 — **붕대가 다른 셋에게 옮겨붙는 것**도 막아야 한다.
> 나머지 셋의 형태와 조명·거미줄 장치는 v1 그대로다.

```text
the stage is set for the villainesses, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, four tall female figures standing far apart across a wide dark stage, all four rendered as solid black backlit silhouettes with no visible faces and no visible features, lit only from behind so their outlines read clearly, each silhouette distinct in shape, one wearing a torn tattered nun's habit, the long veil and skirt ripped into ragged strips at the hem and sleeves, her head alone wound round and round with thick bandages so her whole head reads as a wrapped bulb with no face, her body otherwise unwrapped, one with tall ringlet curls and a wide gown holding a folding fan, one reclining low with long flowing hair and a draped dress, one seated high with voluminous curls and a tiny crown, a single hard beam of light falling on each of them from above, four separate pools of light on a black floor, everything between them swallowed in darkness, thin threads of pale light stretched taut between the four pools like the strings of a web, cold theatrical lighting, deep black stage with no walls and no ceiling visible, four powers taking their places at once
```

### 네거티브 프롬프트 v2

```text
bandages on the arms, bandages on the body, bandages around the torso, wrapped forearms, mummy wrapping, fully bandaged body, bandages on all four figures, visible faces, lit faces, detailed faces, facial features, eyes, mouths, colored clothing, full color figures, brightly lit figures, one person, two people, three people, five people, six people, crowd, male silhouette, man, men, friendly, smiling, gathering together, standing close, touching, daylight, warm light, outdoors, landscape, blood, gore, weapons drawn, fighting, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## late_prologue — 후반부 서막 「메인 악녀 선언」

### 이미지 생성 프롬프트 v1

> **후반부 서막 — 결착.** 초반부와 마찬가지로 **인물을 넣지 않는다.**
> 핵심은 **빈 옥좌와 넘어진 왕관**이다. 누가 앉을지 아직 정해지지 않았다는 것 —
> 서막의 「메인 악녀 선언」이 바로 그 자리를 두고 벌어지는 재판정이기 때문이다. 네거티브에 `occupied throne, someone on the throne` 을 넣어 비어 있는 상태를 강제했다.
> 붉은 달·재·떠도는 희미한 영체로 **악령 관련 3장**과 결이 이어지게 했다. 다만 영체는 `small and indistinct` 로 멀리 두고 `detailed ghosts in the foreground` 를 막았다 — 이 카드의 주인공은 옥좌다.

```text
the final act, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, no people at all, an empty scene, a vast ruined throne hall opened to a burning red sky, the roof torn away and broken columns leaning inward, in the centre one great empty throne standing alone on a cracked dais, its seat unoccupied, a heavy crown lying tipped on its side on the seat, long shadows thrown from the throne across a floor split by deep cracks, and high above through the broken roof a red moon hanging low, thin pale spirits drifting like smoke through the upper air far back, small and indistinct, embers rising, ash falling slowly through shafts of red light, tattered banners hanging in strips from the walls, cold blue shadow below and burning red light above, everything is about to be decided
```

### 네거티브 프롬프트 v1

```text
person, people, character, girl, boy, face, hands, crowd, seated figure, someone on the throne, occupied throne, king, queen, intact hall, clean room, undamaged, peaceful, daylight, blue sky, sunlight, cheerful, many ghosts, swarm of spirits, detailed ghosts in the foreground, blood, gore, corpses, bodies on the floor, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

---

# 중반부 서막 — 개별 실루엣 소재 (합성용)

> **4인 실루엣을 따로 뽑아 PIL 로 합친다.** 한 프롬프트에 넷을 넣으면 수녀복·붕대·부채가 서로 번지는 것을 v1·v2 에서 반복 확인했다. 개별 지시가 인물 수만큼 희석되기 때문이다.
> 각 인물은 **순수 검정 배경 + 조명 없음**으로 뽑는다 — 합성 시 스크린 블렌드로 배경이 자연스럽게 빠지고, 조명과 바닥 웅덩이·거미줄은 `scripts/make_mid_prologue.py` 가 그린다.
> 그래서 프롬프트에 `no stage, no floor, no spotlight, no light pool, no cast shadow` 를 넣었다. 그림자를 모델이 그리면 합성할 때 어긋난다.

## sil_jezebel — the witch

### 이미지 생성 프롬프트 v1

```text
the witch, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, high detail, no text, no watermark, solo, one single figure only, nobody else, a full body female silhouette standing straight and facing the viewer, centered in the frame, her whole body from head to feet inside the frame with a little empty space above and below, (rendered as one solid black silhouette:1.5), no visible face, no visible features, no facial detail at all, only her outline and the shapes of her clothing read, a thin cold rim of light along her edges from behind, (a pure flat black background with absolutely nothing in it:1.6), no stage, no floor, no walls, no spotlight beam, no light pool, no shadow on the ground, the background completely empty black, wearing a torn tattered nun's habit, the long veil and the skirt ripped into ragged strips at the hem and the sleeves, the ragged strips hanging and drifting, her head alone wound round and round with thick bandages so her whole head reads as a smooth wrapped bulb with no face at all, her body otherwise completely unwrapped, both arms hanging loose at her sides
```

### 네거티브 프롬프트 v1

```text
bandages on the arms, bandages on the body, wrapped forearms, mummy wrapping, bare head, clean tidy habit, intact robe, folding fan, crown, ringlet curls, visible face, facial features, eyes, mouth, nose, lit face, detailed face, full color figure, brightly lit figure, colored clothing, skin tone, two people, three people, four people, crowd, second figure, background, floor, ground, stage, wall, room, scenery, horizon, spotlight, light beam, light pool on the floor, cast shadow, reflection, cropped, cut off at the knees, head out of frame, close-up, bust shot, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, photorealistic, 3d render
```

## sil_lucrezia — the noble

### 이미지 생성 프롬프트 v1

```text
the noble, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, high detail, no text, no watermark, solo, one single figure only, nobody else, a full body female silhouette standing straight and facing the viewer, centered in the frame, her whole body from head to feet inside the frame with a little empty space above and below, (rendered as one solid black silhouette:1.5), no visible face, no visible features, no facial detail at all, only her outline and the shapes of her clothing read, a thin cold rim of light along her edges from behind, (a pure flat black background with absolutely nothing in it:1.6), no stage, no floor, no walls, no spotlight beam, no light pool, no shadow on the ground, the background completely empty black, wearing a wide floor-length noble ball gown with a fitted bodice and layered skirts, tall ringlet drill curls falling on both sides of her head in clear spiral shapes, one hand raised holding an open folding fan up beside her face, the fan's ribs clearly readable, her other hand resting at her waist
```

### 네거티브 프롬프트 v1

```text
nun habit, veil, bandages, wrapped head, ragged torn clothing, crown, tiara, reclining, sitting, straight hair, short hair, visible face, facial features, eyes, mouth, nose, lit face, detailed face, full color figure, brightly lit figure, colored clothing, skin tone, two people, three people, four people, crowd, second figure, background, floor, ground, stage, wall, room, scenery, horizon, spotlight, light beam, light pool on the floor, cast shadow, reflection, cropped, cut off at the knees, head out of frame, close-up, bust shot, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, photorealistic, 3d render
```

## sil_messalina — the empress

### 이미지 생성 프롬프트 v1

```text
the empress, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, high detail, no text, no watermark, solo, one single figure only, nobody else, a full body female silhouette standing straight and facing the viewer, centered in the frame, her whole body from head to feet inside the frame with a little empty space above and below, (rendered as one solid black silhouette:1.5), no visible face, no visible features, no facial detail at all, only her outline and the shapes of her clothing read, a thin cold rim of light along her edges from behind, (a pure flat black background with absolutely nothing in it:1.6), no stage, no floor, no walls, no spotlight beam, no light pool, no shadow on the ground, the background completely empty black, wearing a long flowing draped silk dress that falls in soft vertical folds, very long straight hair falling past her waist on both sides, one hip pushed out and her weight on one leg in a languid relaxed stance, one arm raised with the wrist bent back near her shoulder, the other hanging loose, a wine glass held loosely in her raised hand
```

### 네거티브 프롬프트 v1

```text
nun habit, veil, bandages, wrapped head, ragged torn clothing, folding fan, crown, ringlet curls, drill curls, stiff upright posture, visible face, facial features, eyes, mouth, nose, lit face, detailed face, full color figure, brightly lit figure, colored clothing, skin tone, two people, three people, four people, crowd, second figure, background, floor, ground, stage, wall, room, scenery, horizon, spotlight, light beam, light pool on the floor, cast shadow, reflection, cropped, cut off at the knees, head out of frame, close-up, bust shot, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, photorealistic, 3d render
```

## sil_roxana — the queen

### 이미지 생성 프롬프트 v1

```text
the queen, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, high detail, no text, no watermark, solo, one single figure only, nobody else, a full body female silhouette standing straight and facing the viewer, centered in the frame, her whole body from head to feet inside the frame with a little empty space above and below, (rendered as one solid black silhouette:1.5), no visible face, no visible features, no facial detail at all, only her outline and the shapes of her clothing read, a thin cold rim of light along her edges from behind, (a pure flat black background with absolutely nothing in it:1.6), no stage, no floor, no walls, no spotlight beam, no light pool, no shadow on the ground, the background completely empty black, wearing a long silk gown with a trailing hem, enormous voluminous curly hair piled high and spreading wide around her head and shoulders, a tiny small crown tilted on top of that hair, her chin lifted and both arms folded across her chest
```

### 네거티브 프롬프트 v1

```text
nun habit, veil, bandages, wrapped head, ragged torn clothing, folding fan, straight hair, short hair, large crown, huge crown, tall tiara, visible face, facial features, eyes, mouth, nose, lit face, detailed face, full color figure, brightly lit figure, colored clothing, skin tone, two people, three people, four people, crowd, second figure, background, floor, ground, stage, wall, room, scenery, horizon, spotlight, light beam, light pool on the floor, cast shadow, reflection, cropped, cut off at the knees, head out of frame, close-up, bust shot, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, photorealistic, 3d render
```
