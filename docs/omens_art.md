# 재앙 카드 아트

재앙 카드 10종의 이미지 생성 프롬프트. 규칙·밸런스는 [omens.md](omens.md) 참고.

## 공통 규칙

### 카드 규격 — **1024 × 1024 (1:1)**

정사각으로 뽑고, **프레임·텍스트 레이어는 나중에 위에 얹는다.**

> v1에서는 카드 비율(928×1296)에 맞추고 "하단 2/5가 텍스트에 가려진다"는 제약을 걸었는데,
> 그 결과 **10종이 전부 "위에서 뭔가 떨어지는" 구도로 수렴**해 전달력이 떨어졌다.
> 프레임을 나중에 합성하는 방식이면 그 제약이 불필요하므로, 정사각 + 구도 자유로 전환한다.
> **구도를 프롬프트로 강하게 지정하지 않는다.**

### ⚠️ 재앙에는 **당하는 사람**이 있어야 한다

비·칼·역병 그 자체보다 **고통받는 인물**이 있어야 재앙으로 읽힌다.
v1은 네거티브로 인물을 막았으나(`people, characters, human figures`) **정반대로 간다.**

- 각 재앙마다 피해를 입는 인물·군중을 명시적으로 넣는다
- 특히 **초태 몰살**은 인물 없이는 컨셉 전달이 불가능하다
- 단 고어로 넘어가지 않도록 공통 네거티브에서 억제한다

### 생성 설정

캐릭터 카드와 동일. LoRA 적용 쪽이 확실히 우수함을 테스트로 확인
(LoRA 없이는 평면적인 삽화가 되고, 캐릭터 카드와 질감도 어긋남).

| 항목 | 값 |
|---|---|
| 모델 | `anima-base-v1.0` |
| LoRA | `AnimaMythP0rtr4itStyleV1`, strength 1.0 |
| 품질 태그 | base (`masterpiece, best quality, score_7, safe, ` 접두) |
| 샘플링 | 30 steps / CFG 4.0 / `er_sde` / `simple` |
| 크기 | **1024 × 1024** |
| 후보 | 재앙당 **2장** |

### 공통 네거티브

```text
gore, dismemberment, mutilation, excessive blood splatter, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

> v1의 인물 억제 항목(`people, characters, human figures, person, face, portrait`)은 **전부 제거**.
> 대신 인물이 들어오면서 필요해진 해부 오류·고어 억제 항목을 추가.

---

## 1. blood_rain — 선혈의 비 (국지)

> 플레이버: 피비린내가 나는군…

### 이미지 생성 프롬프트

```text
crimson blood rain pouring from a blood-red sky over a distant land, romance fantasy webnovel card illustration, detailed anime style scenery, heavy dark red clouds churning across the entire upper sky, countless streaks of red rain falling in sheets, the horizon far below stained dark and glistening wet, deep crimson and black palette with a sickly pale glow behind the clouds, ominous and oppressive atmosphere, vertical card illustration, composition weighted to the upper half with the main subject high in the frame, wide open sky filling the top of the image, the lower two fifths left simple and uncluttered with no important detail, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

```text
crimson blood rain pouring down over a town square, romance fantasy webnovel card illustration, detailed anime style, blood-red rain falling in heavy sheets from a churning dark red sky, several cloaked townspeople caught in it drenched red, one staggering with an arm raised over their face, another on their knees staring up in horror, dark wet cobblestones reflecting the red glow, deep crimson and black palette with a sickly pale light behind the clouds, ominous and oppressive, square composition, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v3

> 수정: v2에 **광신도 무리**가 생겼음. 그게 아니라 **피를 맞아 녹아내리는 사람들**이 핵심.

```text
crimson blood rain dissolving the people it touches, romance fantasy webnovel card illustration, detailed anime style, blood-red rain pouring in heavy sheets over a town square, two or three figures caught in the downpour with their bodies melting and sloughing away where the rain lands, flesh running down their arms and shoulders like wax, one already collapsing as their shape dissolves into red runoff on the stones, steam rising off the drenched cobblestones, churning dark red sky above, deep crimson and black palette, horrifying and oppressive, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v3

```text
cultists, hooded cult, robed worshippers, kneeling ritual, crowd of worshippers, ceremony, exposed organs, viscera, guts, dismemberment, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

### 이미지 생성 프롬프트 v4

> 수정: v3는 인물이 너무 젖고 물감 흘러내리듯 녹아 그로테스크했음.
> **카메라를 멀리 빼고**, 녹는 연출 없이 그냥 선혈의 비가 내리는 광경으로.

```text
crimson blood rain falling over a town, romance fantasy webnovel card illustration, detailed anime style, a wide distant view across the rooftops of a medieval town, heavy blood-red rain pouring down in sheets from a churning dark red sky over the whole town, red rivulets running down the roof tiles and along the streets far below, a few small distant figures hurrying for shelter, the entire scene washed in crimson, deep crimson and black palette, ominous and oppressive, wide establishing shot, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v4

```text
melting people, dissolving bodies, wax figures, dripping paint, close-up, portrait, large foreground figure, cultists, hooded cult, gore, viscera, dismemberment, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy
```

## 2. blade_rain — 칼날 비 (전역)

> 플레이버: 수천, 아니 수만 개의 검이 떨어진다.

### 이미지 생성 프롬프트

```text
tens of thousands of swords falling from the sky like rain, romance fantasy webnovel card illustration, detailed anime style scenery, countless blades tumbling downward through storm clouds high overhead, seen from below against a vast turbulent sky, shafts of pale gold light breaking between the clouds and glinting off the falling steel, the ground only a faint distant silhouette far below, cold steel gray and pale gold palette, epic and overwhelming atmosphere, vertical card illustration, composition weighted to the upper half with the main subject high in the frame, wide open sky filling the top of the image, the lower two fifths left simple and uncluttered with no important detail, no swords planted in the ground, no foreground swords, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

```text
a rain of countless swords crashing down on a battlefield, romance fantasy webnovel card illustration, detailed anime style, tens of thousands of blades hurtling out of a storm-dark sky, soldiers below running and throwing up shields and cloaks against them, one knocked to the ground as blades bite into the earth around him, sparks flying where steel strikes stone, cold steel gray and pale gold palette, shafts of light breaking through heavy clouds, epic and overwhelming, square composition, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v3

> 수정: v2는 병사 **군중**이 들어가 전쟁 장면처럼 읽혔음.
> ① 검이 떨어지는 것보다 **하늘을 빽빽하게 채운 채 떠 있는** 상태가 핵심 —
>    무협의 만천화우(滿天花雨)·만검 이미지.
> ② 군중을 빼고 **칼에 맞는 인물 1명만** 남긴다.

```text
ten thousand swords filling the entire sky, romance fantasy webnovel card illustration, detailed anime style, the whole sky densely packed with countless swords hovering point-down in midair like a vast field of suspended blades, layer upon layer of them receding into the distance, a few already streaking downward trailing light, one single lone figure standing far below pierced by a falling blade and staggering backward, only one person in the entire image, cold steel gray and pale gold palette, dramatic light breaking between storm clouds, overwhelming wuxia sword-rain atmosphere, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v3

```text
crowd, army, many people, soldiers, group of people, multiple figures, shields, formation, battle scene, gore, dismemberment, mutilation, excessive blood splatter, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

### 이미지 생성 프롬프트 v4

> 수정: v3는 **검 밀도가 안 나왔음.** 원인은 `dramatic light breaking between storm clouds` —
> 이게 화면 중앙에 **빛기둥**을 만들면서 하늘을 차지해 검이 들어설 자리가 없어졌다.
> ① 빛 연출을 걷어내고 (네거티브로도 차단) ② 밀도를 극단적으로 강조
> ③ 인물이 너무 작았으므로 전경으로 당긴다.

```text
ten thousand swords completely filling the sky, romance fantasy webnovel card illustration, detailed anime style, thousands upon thousands of swords hovering point-down in midair packed edge to edge across the entire sky, so densely layered that almost no sky shows between the blades, row after row of them receding into the far distance, a few blades streaking downward, in the foreground a single lone figure seen from behind staggering as one blade pierces their shoulder, only one person in the whole image, flat overcast steel gray sky with cold even light, no sunbeam and no bright column, wuxia ten-thousand-sword atmosphere, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v4

```text
light beam, light shaft, sunbeam, god rays, glowing pillar of light, bright column, radiant burst, empty sky, clear sky, sparse swords, few swords, crowd, army, many people, soldiers, group of people, multiple figures, shields, formation, battle scene, gore, dismemberment, mutilation, excessive blood splatter, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

### 이미지 생성 프롬프트 v5

> 수정: v4에서 만천화우 밀도는 확보했으나 **인물이 너무 작아 "칼 맞는 사람"으로 안 읽혔음.**
> 인물을 전경으로 크게 당기고, 그 뒤·위로 검이 하늘을 메우는 구도로.

```text
a lone figure pierced beneath a sky of ten thousand swords, romance fantasy webnovel card illustration, detailed anime style, in the foreground at close range a single warrior seen from behind staggering backward as a falling sword drives through their shoulder, and filling the entire sky above and behind them thousands upon thousands of swords hovering point-down packed edge to edge so densely that almost no sky shows between the blades, row after row receding into the far distance, a few blades streaking down trailing light, only one person in the whole image, flat overcast steel gray sky with cold even light, wuxia ten-thousand-sword atmosphere, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v5

```text
light beam, light shaft, sunbeam, god rays, glowing pillar of light, bright column, empty sky, clear sky, sparse swords, few swords, tiny distant figure, crowd, army, many people, soldiers, group of people, multiple figures, battle scene, gore, dismemberment, mutilation, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

### 이미지 생성 프롬프트 v6

> 수정: 살아있는 인물을 **빼고**, 땅과 시체에 검이 박힌 광경으로.

```text
a battlefield after a rain of ten thousand swords, romance fantasy webnovel card illustration, detailed anime style, the entire sky above densely packed with countless swords hovering point-down edge to edge so almost no sky shows between the blades, below them a desolate cracked plain where thousands of blades stand driven deep into the earth, several armored corpses sprawled among them with swords run through their bodies and pinning them to the ground, no living person anywhere, flat overcast steel gray sky with cold even light, wuxia ten-thousand-sword atmosphere, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v6

```text
living person, standing figure, survivor, warrior standing, person holding a sword, crowd, army, light beam, light shaft, sunbeam, god rays, glowing pillar of light, empty sky, sparse swords, gore, dismemberment, viscera, excessive blood, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy
```

### 이미지 생성 프롬프트 v7

> 수정: 하늘의 검이 사방으로 뻗어 방사형이 됐음. **모든 검이 아래를 향해야** 한다.

```text
a battlefield after a rain of ten thousand swords, romance fantasy webnovel card illustration, detailed anime style, the entire sky above densely packed with countless swords all hanging vertically with every single blade tip pointing straight down at the ground, uniform downward orientation across the whole sky, packed edge to edge so almost no sky shows between them, row after row receding into the distance, below them a desolate cracked plain where thousands of blades stand driven straight down into the earth, several armored corpses sprawled among them with swords run through their bodies, no living person anywhere, flat overcast steel gray sky with cold even light, wuxia ten-thousand-sword atmosphere, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v7

```text
swords pointing sideways, horizontal blades, radial arrangement, swords at angles, tilted blades, scattered orientation, swords pointing up, living person, standing figure, survivor, crowd, light beam, sunbeam, god rays, glowing pillar of light, empty sky, sparse swords, gore, dismemberment, viscera, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy
```

## 3. plague — 돌림병 (확산)

> 플레이버: 콜록콜록… 이거 낫는 거 맞죠?

### 이미지 생성 프롬프트

```text
a sickly plague miasma creeping across a fantasy land, romance fantasy webnovel card illustration, detailed anime style scenery, thick pale green and yellow fog rolling out from a distant village high in the frame and spreading toward the horizon, crows scattering into a dim overcast sky, faint diseased haze blurring the far spires, muted olive and ash gray palette, quiet dread and decay, vertical card illustration, composition weighted to the upper half with the main subject high in the frame, wide open sky filling the top of the image, the lower two fifths left simple and uncluttered with no important detail, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

```text
a plague ravaging a fantasy village, romance fantasy webnovel card illustration, detailed anime style, thick sickly green miasma seeping between crooked timber houses, gaunt hooded villagers slumped against the walls coughing into their hands, one collapsed in the street while another crouches over them helplessly, crows watching from the rooftops, muted olive and ash gray palette under a dim overcast sky, quiet dread and decay, square composition, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v3

> 수정: 골목에 병들어 누운 사람 + 주변 시체. 문둥병·천연두 환자를 넣어 역병을 직접 보여준다.

```text
plague victims dying in a narrow alley, romance fantasy webnovel card illustration, detailed anime style, a gaunt sick man collapsed on the wet cobblestones of a cramped alley between leaning timber houses, his skin covered in raw pox sores and blisters, two corpses slumped against the walls further back partly covered with cloth, another emaciated figure sitting hunched with bandaged hands and a ruined disfigured face, thin sickly green miasma drifting low along the ground, rats along the gutter and crows on the eaves, muted olive and ash gray palette under a dim overcast sky, squalid and hopeless, square composition, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v4

> 수정: 증상을 구체적으로 — 오른쪽 인물은 **기침하며 피를 뱉고**,
> 왼쪽 인물은 **얼굴에 종기가 가득**해야 한다.

```text
plague victims dying in a narrow alley, romance fantasy webnovel card illustration, detailed anime style, in a cramped alley between leaning timber houses, on the right a gaunt man doubled over coughing up bright blood into his cupped hand with blood spattered on the cobblestones beneath him, on the left another victim slumped against the wall whose face is completely covered in swollen boils and pustules, a corpse lying further back partly covered with cloth, thin sickly green miasma drifting low along the ground, rats along the gutter and crows on the eaves, muted olive and ash gray palette under a dim overcast sky, squalid and hopeless, square composition, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v5

> 수정: 피를 물감 뱉듯 과하게 토했음. **실제로 각혈한 만큼만**.

```text
plague victims dying in a narrow alley, romance fantasy webnovel card illustration, detailed anime style, in a cramped alley between leaning timber houses, on the right a gaunt man doubled over coughing into his cupped hand with only a small smear of blood on his palm and a few dark red flecks spattered on the cobblestones beneath him, on the left another victim slumped against the wall whose face is completely covered in swollen boils and pustules, a corpse lying further back partly covered with cloth, thin sickly green miasma drifting low along the ground, rats along the gutter and crows on the eaves, muted olive and ash gray palette under a dim overcast sky, squalid and hopeless, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v5

```text
large pool of blood, gushing blood, blood fountain, spraying blood, paint splash, excessive blood, blood everywhere, gore, viscera, dismemberment, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers
```

### 이미지 생성 프롬프트 v6

> 수정: 오른쪽 인물이 **담배 피우는 것처럼** 보였고, 왼쪽 인물의 종기가 안 보였음.
> 각혈 동작과 종기를 각각 더 명시한다.

```text
plague victims dying in a narrow alley, romance fantasy webnovel card illustration, detailed anime style, in a cramped alley between leaning timber houses, on the right a gaunt man on his knees doubled over mid-cough with his mouth open and one hand pressed against his lips, a small smear of fresh blood on his palm and lips and a few dark red flecks on the cobblestones below him, on the left another victim slumped against the wall with his face turned toward the viewer, his cheeks and forehead thickly covered with swollen red boils and pustules, a corpse lying further back partly covered with cloth, thin sickly green miasma drifting low along the ground, rats along the gutter and crows on the eaves, muted olive and ash gray palette under a dim overcast sky, squalid and hopeless, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v6

```text
smoking, pipe, cigarette, smoke from the mouth, clean face, healthy skin, unblemished face, large pool of blood, gushing blood, blood fountain, paint splash, excessive blood, gore, viscera, dismemberment, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers
```

### 이미지 생성 프롬프트 v7

> 수정: v6의 2번 구도를 기준으로 삼되, **입가와 손에 피가 묻어 있어야** 한다.

```text
plague victims dying in a narrow alley, romance fantasy webnovel card illustration, detailed anime style, in a cramped alley between tall stone walls, on the right an older white-haired man kneeling and doubled over with one hand pressed over his mouth, fresh red blood smeared across his lips and chin and running between his fingers and staining his palm, on the left another victim lying back on the cobblestones with his face turned up, his cheeks and forehead covered in swollen red boils and sores, a corpse further back partly covered with cloth, thin sickly green miasma drifting low along the ground, crows perched along the alley walls, muted olive and ash gray palette under a dim overcast sky, squalid and hopeless, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v7

```text
smoking, pipe, cigarette, smoke from the mouth, clean mouth, no blood, unblemished face, healthy skin, large pool of blood, gushing blood, blood fountain, paint splash, gore, viscera, dismemberment, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers
```

### 이미지 생성 프롬프트 v8

> 수정: ① 피 색이 너무 밝아 물감처럼 보였음 → **어두운 암적색**으로.
> ② 두 인물이 각각 다른 컷처럼 떨어져 보였음 → **한 골목 안에서 벌어지는 일**로 묶는다.

```text
plague victims dying together in one narrow alley, romance fantasy webnovel card illustration, detailed anime style, a single continuous cramped alley between tall stone walls seen in one unified view, an older white-haired man kneeling in the middle of the alley doubled over with one hand pressed over his mouth, dark crimson almost black blood smeared across his lips and chin and running between his fingers, and only a step away from him on the same cobblestones another victim lying back with his face turned up, his cheeks and forehead covered in swollen boils and sores, a corpse further down the same alley partly covered with cloth, all of them together in the one alley, thin sickly green miasma drifting low along the ground, crows perched along the walls, muted olive and ash gray palette under a dim overcast sky, squalid and hopeless, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v8

```text
bright red blood, scarlet blood, vivid red, paint, paint splash, split panel, two separate scenes, diptych, divided composition, separate rooms, smoking, pipe, cigarette, clean mouth, no blood, unblemished face, large pool of blood, gushing blood, gore, viscera, dismemberment, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers
```

### 이미지 생성 프롬프트 v9

> 수정: 각혈이 아니라 **손을 깨무는 자세**로 나왔음.
> ① 입을 다물고 손은 입 아래에 둔다 — **이빨이 보이면 안 된다**
> ② 손과 입에는 피가 **살짝만** 묻고, 바닥에 피가 **조금 고여** 있다

```text
plague victims dying together in one narrow alley, romance fantasy webnovel card illustration, detailed anime style, a single continuous cramped alley between tall stone walls, an older white-haired man kneeling in the middle of the alley with his head lowered and one hand held just below his closed mouth, his lips shut with no teeth showing at all, a light smear of dark crimson blood on his lips and on his fingertips, a small shallow pool of dark blood on the cobblestones in front of him, a step away another victim lying back on the same stones with his face turned up covered in swollen boils and sores, more bodies further down the same alley, thin sickly green miasma drifting low along the ground, crows perched along the walls and circling above, muted olive and ash gray palette under a dim overcast sky, squalid and hopeless, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v9

```text
biting hand, hand in mouth, fingers in mouth, teeth, visible teeth, open mouth, screaming, bright red blood, scarlet blood, vivid red, paint, paint splash, gushing blood, large pool of blood, split panel, two separate scenes, smoking, pipe, gore, viscera, dismemberment, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers
```

### 이미지 생성 프롬프트 v10

> 수정: v9에 `more bodies further down the same alley` 를 넣은 탓에 골목이 시신으로 가득 차고,
> 그 인파에 **종기 환자와 각혈 환자가 묻혔음.**
> **인물은 정확히 2명** — 각혈하는 노인 + 얼굴에 종기가 가득한 환자. 그 외엔 아무도 없다.

```text
two plague victims dying in a narrow alley, romance fantasy webnovel card illustration, detailed anime style, a cramped alley between tall stone walls with exactly two people in it and nobody else at all, on one side an older white-haired man kneeling with his head lowered and one hand held just below his closed mouth, his lips shut with no teeth showing, a smear of dark crimson blood on his lips and fingertips and a small shallow pool of dark blood on the cobblestones in front of him, and directly beside him the second man lying back on the same stones with his face turned up toward the viewer, his cheeks and forehead thickly covered with swollen red boils and pustules, only these two people in the entire image, thin sickly green miasma drifting low along the ground, a few crows perched along the walls, muted olive and ash gray palette under a dim overcast sky, squalid and hopeless, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v10

```text
crowd, many people, many bodies, rows of corpses, pile of bodies, third person, more than two people, group, biting hand, hand in mouth, fingers in mouth, teeth, visible teeth, open mouth, screaming, bright red blood, scarlet blood, paint splash, gushing blood, large pool of blood, gore, viscera, dismemberment, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers
```

### 이미지 생성 프롬프트 v11

> 수정: 인물 2명은 확보했으나 **둘 다 백발 노인이라 같은 사람처럼** 보였고,
> 특히 좌우 대칭으로 복제된 듯한 구도가 나왔음.
> 두 인물을 **나이·머리색·체격으로 확실히 구분**하고, **비대칭 구도**로 못박는다.

```text
two plague victims dying in a narrow alley, romance fantasy webnovel card illustration, detailed anime style, a cramped alley between tall stone walls with exactly two people in it and nobody else at all, in the near foreground on the left a gaunt old man with thin white hair and a deeply lined face kneeling with his head lowered and one hand held just below his closed mouth, his lips shut with no teeth showing, a smear of dark crimson blood on his lips and fingertips and a small shallow pool of dark blood on the cobblestones in front of him, and further back on the right a much younger man with dark brown hair and a heavier build sprawled on his back against the wall, his face turned up toward the viewer with his cheeks and forehead thickly covered in swollen red boils and pustules, the two of them clearly different people of different ages and builds, asymmetric off-center composition, only these two people in the entire image, thin sickly green miasma drifting low along the ground, a few crows perched along the walls, muted olive and ash gray palette under a dim overcast sky, squalid and hopeless, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v11

```text
mirrored composition, symmetrical composition, duplicate figures, twins, identical people, same face, two identical old men, both white haired, reflection, crowd, many people, many bodies, third person, more than two people, biting hand, hand in mouth, teeth, visible teeth, open mouth, bright red blood, scarlet blood, paint splash, gushing blood, large pool of blood, gore, viscera, dismemberment, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers
```

### 이미지 생성 프롬프트 v12

> **채택 버전은 v6.** v6 그대로 두되 한 가지만 추가 —
> 바닥에 **풀·잡초**가 섞여 나면서 초록색이 두 종류가 됐음.
> 초록은 **질병 안개(miasma) 하나뿐**이어야 하므로 식생을 전부 뺀다.

```text
plague victims dying in a narrow alley, romance fantasy webnovel card illustration, detailed anime style, in a cramped alley between leaning timber houses, on the right a gaunt man on his knees doubled over mid-cough with his mouth open and one hand pressed against his lips, a small smear of fresh blood on his palm and lips and a few dark red flecks on the cobblestones below him, on the left another victim slumped against the wall with his face turned toward the viewer, his cheeks and forehead thickly covered with swollen red boils and pustules, a corpse lying further back partly covered with cloth, thin sickly green plague miasma drifting low along the ground, this sickly green miasma is the only green anywhere in the image, bare dry cobblestones and bare stone walls with no grass, no weeds, no moss and no plants at all, rats along the gutter and crows on the eaves, muted olive and ash gray palette under a dim overcast sky, squalid and hopeless, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v12

```text
grass, weeds, plants, moss, vines, ivy, vegetation, greenery, foliage, green plants, bushes, leaves, smoking, pipe, cigarette, smoke from the mouth, clean face, healthy skin, unblemished face, large pool of blood, gushing blood, paint splash, excessive blood, gore, viscera, dismemberment, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers
```

### 이미지 생성 프롬프트 v13

> 수정: v12에서 잡초는 사라졌으나 **초록 안개까지 같이 사라졌음.**
> 네거티브의 `greenery, green plants, foliage` 가 바닥의 낮은 초록 요소를 통째로 억제한 것으로 보임.
> → **식생 억제 항목을 전부 되돌리고**(v6 네거티브로 복귀),
> 안개는 포지티브에서 강하게 밀어 바닥을 가득 채우게 한다.

```text
plague victims dying in a narrow alley, romance fantasy webnovel card illustration, detailed anime style, in a cramped alley between leaning timber houses, thick sickly green plague miasma flowing heavily along the entire ground and filling the whole alley floor, glowing green vapor pooling and curling over the cobblestones everywhere and drifting up around the bodies, on the right a gaunt man on his knees doubled over mid-cough with his mouth open and one hand pressed against his lips, a small smear of fresh blood on his palm and lips and a few dark red flecks on the stones below him, on the left another victim slumped against the wall with his face turned toward the viewer, his cheeks and forehead thickly covered with swollen red boils and pustules, a corpse lying further back partly covered with cloth, rats along the gutter and crows on the eaves, muted olive and ash gray palette under a dim overcast sky, squalid and hopeless, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v13

```text
smoking, pipe, cigarette, smoke from the mouth, clean face, healthy skin, unblemished face, large pool of blood, gushing blood, blood fountain, paint splash, excessive blood, gore, viscera, dismemberment, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers
```

## 4. darkness — 흑암 (전역)

> 플레이버: 태양은 삼켜지고, 어둠이 내려앉았다.

### 이미지 생성 프롬프트

```text
the sun devoured by a vast black void in the sky, romance fantasy webnovel card illustration, detailed anime style scenery, an enormous sphere of absolute darkness high in the sky swallowing the sun, tendrils of shadow spilling outward across the clouds, a thin ring of light bleeding around its edge, the land far below sunk in deep shadow with only a faint rim of dusk on the horizon, oppressive black and deep indigo palette, apocalyptic stillness, vertical card illustration, composition weighted to the upper half with the main subject high in the frame, wide open sky filling the top of the image, the lower two fifths left simple and uncluttered with no important detail, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

```text
the sun devoured by a black void above a darkened city, romance fantasy webnovel card illustration, detailed anime style, an enormous sphere of absolute darkness hanging in the sky where the sun should be, a thin ring of light bleeding around its rim, the streets below drowned in shadow, small figures gathered in the square holding up feeble lanterns and looking upward, long shadows stretching across the stones, oppressive black and deep indigo palette, apocalyptic stillness, square composition, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v3

> 수정: 사람이 보이는 것보다 **문을 걸어잠근 집들**이 어울린다.
> 어둠의 기운이 집 주위를 감돌게 한다.

```text
a village sealed shut against the swallowing dark, romance fantasy webnovel card illustration, detailed anime style, an enormous sphere of absolute darkness hanging where the sun should be with a thin ring of light bleeding around its rim, below it a silent village of timber houses with every door barred and shuttered and planks nailed across the windows, tendrils and wisps of black shadow energy creeping and coiling around the houses and drifting along the empty street, faint lamplight leaking through the cracks in the shutters, no people anywhere, oppressive black and deep indigo palette, apocalyptic stillness, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v3

```text
people, human figures, person, crowd, figures in the street, faces, gore, dismemberment, mutilation, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy
```

### 이미지 생성 프롬프트 v4

> 수정: 집들을 늘어놓는 대신, **화면 아래쪽에 도시를 부감(탑뷰)으로 줌아웃**해서 넣는다.

```text
a black void devouring the sun above a darkened city, romance fantasy webnovel card illustration, detailed anime style, in the upper half an enormous sphere of absolute darkness hanging in the sky with a thin ring of light bleeding around its rim and tendrils of black shadow spilling outward from it, in the lower half a wide high-angle aerial view looking down over a great city of towers and rooftops sunk in deep shadow, its streets marked only by scattered pinpricks of lamplight, wisps of shadow energy drifting between the spires, no visible people, oppressive black and deep indigo palette, apocalyptic stillness, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v4

```text
people, human figures, person, crowd, faces, close-up houses, street level view, gore, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy
```

## 5. mana_burst — 마력폭발 (전역)

> 플레이버: 마력은 폭발이다!

### 이미지 생성 프롬프트

```text
raw mana erupting out of control high in the sky, romance fantasy webnovel card illustration, detailed anime style scenery, a colossal detonation of violet and cyan arcane energy blooming above the clouds, jagged bolts of magic lashing outward, shattered rings of glowing runes flying apart in midair, shockwave rippling through the upper atmosphere, brilliant violet magenta and electric cyan palette against a dark sky, violent and blinding, vertical card illustration, composition weighted to the upper half with the main subject high in the frame, wide open sky filling the top of the image, the lower two fifths left simple and uncluttered with no important detail, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

```text
raw mana detonating out of control inside a magic tower, romance fantasy webnovel card illustration, detailed anime style, a colossal burst of violet and cyan arcane energy erupting in the middle of a great hall, shattered rings of glowing runes flying apart in midair, a robed mage hurled backward by the shockwave with his staff splintering in his hand, other mages shielding their faces behind toppled bookshelves, brilliant violet magenta and electric cyan against deep shadow, violent and blinding, square composition, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v3

> 수정: 배경에 **무너지는 마탑**, 옆에서 **사람이 터지는 것**, 그리고 그것을 보고 **끔찍해하는 인물 1명**.

```text
a mage detonating as the magic tower collapses, romance fantasy webnovel card illustration, detailed anime style, in the background a great arcane tower breaking apart and toppling in a storm of violet and cyan energy, in the midground a robed mage caught mid-explosion bursting outward in a blinding violet blast, and in the foreground a single other mage recoiling in horror with both hands raised and eyes wide, shattered rings of glowing runes and stone debris hurtling through the air, brilliant violet magenta and electric cyan against deep shadow, violent and catastrophic, square composition, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v4

> 수정: 터지는 인물이 온전한 몸으로 나왔음.
> **실루엣이 반파되었거나 가루로 흩어지는** 상태여야 한다.

```text
a mage disintegrating as mana detonates, romance fantasy webnovel card illustration, detailed anime style, in the background a great arcane tower breaking apart and toppling in a storm of violet and cyan energy, in the midground a robed mage caught in the blast with the upper half of his silhouette already blown away and the remainder crumbling into drifting ash and motes of light, his outline dissolving into scattering particles, and in the foreground a single other mage recoiling in horror with both hands raised and eyes wide, shattered glowing runes and stone debris hurtling through the air, brilliant violet magenta and electric cyan against deep shadow, violent and catastrophic, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v4

```text
intact body, whole undamaged figure, standing unharmed, gore, blood, viscera, guts, dismemberment, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

### 이미지 생성 프롬프트 v5

> 수정: 의도와 다르게 뽑혔음. **폭발하는 사람이 메인**이어야 한다.
> ① 공중에 떠 있는 마법사 실루엣이 폭발 — **반은 부서지고 반은 사람 형태**
> ② 마탑은 **둥근 원통형**이며, 가운데에서 폭발이 일어나 **꺾여서 떨어지는** 중

```text
a mage exploding in midair above a collapsing round tower, romance fantasy webnovel card illustration, detailed anime style, the main subject at the center of the image is a mage silhouette floating in the air bursting apart in a violent detonation of violet and cyan energy, half of the silhouette already shattered into flying fragments and scattering ash while the other half still holds a clearly recognizable human shape, behind and below him a tall round cylindrical wizard tower snapped through its middle by the blast and bending over as it topples, shattered stone blocks and glowing runes hurtling outward, brilliant violet magenta and electric cyan against deep shadow, violent and catastrophic, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v5

```text
intact body, whole undamaged figure, standing on the ground, ground level explosion, square tower, rectangular tower, crowd, many mages, bystanders, gore, blood, viscera, dismemberment, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs
```

### 이미지 생성 프롬프트 v6

> 수정: **마탑을 뺀다.** 세 요소(공중의 마법사 · 반파 실루엣 · 꺾이는 탑)를 한 화면에 넣으니
> 매번 뭉개졌음. 공중에서 폭발하는 **반파된 마법사 하나만** 남겨 주역으로 세운다.

```text
a mage exploding in midair, romance fantasy webnovel card illustration, detailed anime style, a single robed mage suspended high in the empty sky at the center of the image caught mid-detonation, the entire left half of his body already blown apart into flying fragments and scattering ash, while the right half still holds a clearly recognizable human silhouette with one arm and half a face intact, a violent burst of violet and cyan arcane energy erupting outward from the break, shattered glowing runes and motes of light hurled in all directions, empty dark sky all around him with no buildings and no ground, brilliant violet magenta and electric cyan against deep shadow, violent and catastrophic, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v6

```text
tower, building, architecture, structure, castle, ground, landscape, horizon, intact body, whole undamaged figure, standing on the ground, crowd, many mages, bystanders, gore, blood, viscera, dismemberment, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs
```

### 이미지 생성 프롬프트 v7

> 수정: v6의 2번처럼 옆에 **다른 인물이 서 있었음.** 터지는 사람 하나만 남긴다.

```text
a mage exploding in midair, romance fantasy webnovel card illustration, detailed anime style, one single robed figure suspended in the air at the center of the image caught mid-detonation, the entire left half of the body already blown apart into flying fragments and scattering ash while the right half still holds a clearly recognizable dark human silhouette, a violent burst of violet and cyan arcane energy erupting outward from the break, shattered glowing runes and rock debris hurled in all directions, only one person in the entire image and absolutely nobody else, empty dark ground and empty sky all around, brilliant violet magenta and electric cyan against deep shadow, violent and catastrophic, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v7

```text
two people, second figure, bystander, onlooker, witness, another person standing, crowd, many mages, tower, building, architecture, intact body, whole undamaged figure, gore, blood, viscera, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs
```

### 이미지 생성 프롬프트 v8

> 수정: 형체가 너무 또렷했음. **무조건 불분명한 실루엣**이어야 하고, **머리는 날아가고 없어야** 한다
> (머리가 남아 있으면 폭발이 안 된 것처럼 보임). 돌 파편 대신 **살점·옷조각**이 흩날린다.

```text
a mage exploding in midair, romance fantasy webnovel card illustration, detailed anime style, one single figure suspended in the air at the center of the image caught mid-detonation, the figure reduced to an indistinct dark silhouette with no clear features and no recognizable face, its head completely blown off and missing entirely, the outline broken and half dissolved so the shape is barely readable as a body, a violent burst of violet and cyan arcane energy erupting outward from it, torn scraps of robe and small dark fragments of flesh scattering outward with the blast, no stone debris and no rocks anywhere, empty dark sky and empty ground all around, only one person in the entire image, brilliant violet magenta and electric cyan against deep shadow, violent and catastrophic, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v8

```text
head, face, visible face, intact head, helmet, clear silhouette, sharply defined body, detailed figure, recognizable person, rocks, stone debris, boulders, rubble, masonry, two people, second figure, bystander, onlooker, crowd, tower, building, architecture, intact body, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers
```

## 6. firstborn — 초태 몰살 (전역)

> 플레이버: 열 번째 밤, 모든 장자의 숨이 멎는다. (성경 열 번째 재앙)

### 이미지 생성 프롬프트

```text
the tenth night of death passing over a sleeping kingdom, romance fantasy webnovel card illustration, detailed anime style scenery, a vast shadow shaped like a slow dark wave sweeping across the night sky above a moonlit city of towers, pale spectral wisps drifting down from it toward the rooftops far below, a blood-tinged moon veiled behind thin cloud high in the frame, deep midnight blue and cold silver palette with faint crimson, silent and inevitable dread, vertical card illustration, composition weighted to the upper half with the main subject high in the frame, wide open sky filling the top of the image, the lower two fifths left simple and uncluttered with no important detail, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

> 이 재앙은 **인물 없이는 컨셉이 전달되지 않는다.**
> 왕자가 숨이 끊어지는 순간과, 그 주위에서 경악하는 인물들을 중심에 놓는다.

```text
the moment a young crown prince stops breathing, romance fantasy webnovel card illustration, detailed anime style, a golden-haired prince in white and gold royal attire collapsed limp on the marble floor of a moonlit chamber, his eyes closed and one arm fallen open, courtiers and a knight around him recoiling in shock with hands over their mouths, one kneeling and reaching for him in disbelief, a pale spectral wisp drifting up from his chest, a blood-tinged moon visible through the tall window, deep midnight blue and cold silver palette with faint crimson, silent inevitable dread, square composition, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v3

> 수정: 쓰러진 인물을 **가이우스**로 특정.
> (금발 · 벽안 · 흰색과 금색 제국 군복 · 금 월계관 · 보라 망토 — `characters/gaius.md` 참고)

```text
the moment the crown prince stops breathing, romance fantasy webnovel card illustration, detailed anime style, a young crown prince with golden blond hair and a golden laurel wreath collapsed lifeless on the marble floor of a moonlit palace chamber, wearing a white and gold imperial uniform with a rich purple cape spilling out around him, his eyes closed and one arm fallen open, courtiers and an armored knight around him recoiling in shock with hands over their mouths, one kneeling and reaching for him in disbelief, a pale spectral wisp drifting up from his chest, marble columns and a blood-tinged moon through the tall window, deep midnight blue and cold silver palette with faint crimson and gold, silent inevitable dread, square composition, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v4

> 수정: 이미 **죽은 상태**로 — 목이 옆으로 돌아가고 얼굴은 창백해야 한다(붉은 기 없음).
> **왕비가 와서 울고**, 신하와 기사들은 슬퍼한다. 너무 줌인하지 않는다.

```text
the crown prince already dead in the palace hall, romance fantasy webnovel card illustration, detailed anime style, a medium wide view of a moonlit marble hall, a young crown prince with golden blond hair and a golden laurel wreath lying dead on the floor in a white and gold imperial uniform with a purple cape spread out around him, his head lolled limply to one side, his face ashen pale and completely drained of color, the queen collapsed beside him weeping with her face buried in her hands, courtiers and armored knights standing around them with heads bowed in grief, tall marble columns and a pale moon through the high window, deep midnight blue and cold silver palette, silent sorrow, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v4

```text
red face, flushed cheeks, blush, rosy skin, healthy complexion, open eyes, alive, sitting up, extreme close up, tight close-up, blood, gore, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

### 이미지 생성 프롬프트 v5

> 수정: **우는 왕비가 왕자를 안고 있어야** 한다 — 다가와 끌어안는 순간.
> 기사들은 애도가 아니라 **놀라고 어쩔 줄 몰라하는** 반응이어야 한다.

```text
the queen cradling her dead son, romance fantasy webnovel card illustration, detailed anime style, a medium wide view of a moonlit marble hall, a young crown prince with golden blond hair and a golden laurel wreath lying dead in a white and gold imperial uniform with a purple cape spread around him, his head lolled limply to one side and his face ashen pale and drained of all color, the queen rushed to his side and gathering his upper body up into her arms, clutching him against her chest and weeping openly, armored knights and courtiers around them reeling in shock and confusion, some recoiling with wide startled eyes, one gripping his own head at a loss for what to do, tall marble columns and a pale moon through the high window, deep midnight blue and cold silver palette, shock and grief, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v5

```text
bowed heads, praying, calm mourning, quiet funeral ceremony, composed expressions, queen standing apart, no one holding him, red face, flushed cheeks, blush, rosy skin, healthy complexion, open eyes, alive, extreme close up, blood, gore, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

### 이미지 생성 프롬프트 v6

> 수정: v5는 왕비도 금발 + 금 월계관이라 나이대가 비슷해 보여
> **끌어안은 구도가 연인의 입맞춤처럼** 읽혔음.
> 왕비를 **연상으로, 다른 머리색, 왕관·월계관 없이** 명시해 모자 관계가 드러나게 한다.

```text
the queen cradling her dead son, romance fantasy webnovel card illustration, detailed anime style, a medium wide view of a moonlit marble hall, a young crown prince with golden blond hair and a golden laurel wreath lying dead in a white and gold imperial uniform with a purple cape spread around him, his head lolled limply to one side and his face ashen pale and drained of all color, his mother the queen kneeling and gathering his upper body up into her arms, she is clearly middle aged and much older than him with dark brown hair streaked with grey, wearing a plain dark mourning gown with no crown and no laurel, her face contorted in grief as she weeps over her son, armored knights and courtiers around them reeling in shock and confusion with wide startled eyes, tall marble columns and a pale moon through the high window, deep midnight blue and cold silver palette, shock and grief, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v6

```text
kissing, romantic embrace, lovers, couple, two blond figures, young woman, same age, queen with laurel wreath, queen with crown, blonde queen, bowed heads, praying, calm mourning, composed expressions, red face, flushed cheeks, blush, rosy skin, open eyes, alive, extreme close up, blood, gore, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

### 이미지 생성 프롬프트 v7

> 수정: **갑작스러운 죽음을 목격한 상황이므로 상복 차림이면 안 된다.**
> 왕비는 평소 궁정 예복 그대로 막 달려온 모습이어야 한다.
> 또 뒤에 태연한 인물들을 전부 치우고 **놀란 인물 5명 정도만** 남긴다.

```text
the queen rushing to her dead son, romance fantasy webnovel card illustration, detailed anime style, a medium wide view of a moonlit marble hall, a young crown prince with golden blond hair and a golden laurel wreath lying dead on the floor in a white and gold imperial uniform with a purple cape spread around him, his head lolled limply to one side and his face ashen pale and drained of all color, his mother the queen having just rushed in and dropped to her knees to gather his upper body into her arms, she is clearly middle aged and much older than him with dark brown hair streaked with grey, still wearing her full royal court gown of deep blue and gold with her jewelry, not mourning clothes, her face contorted in grief and disbelief, only about five other people around them and every one of them reacting in shock, knights and courtiers with wide startled eyes and hands flying to their mouths, no calm bystanders anywhere, tall marble columns and a pale moon through the high window, deep midnight blue and cold silver palette, shock and grief, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v7

```text
mourning black, black mourning dress, funeral attire, veil, crowd, many people, rows of people, calm bystanders, composed onlookers, bowed heads, praying, kissing, romantic embrace, lovers, two blond figures, young woman, queen with laurel wreath, red face, flushed cheeks, blush, rosy skin, open eyes, alive, extreme close up, blood, gore, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

### 이미지 생성 프롬프트 v8

> 수정: ① 왕비도 **금발**이어야 한다 — 아들과 너무 달라 보였음.
> ② 왕비도 **놀란 쪽**에 포함 — 조용히 흐느끼는 게 아니라 경악한 표정.
> 인원수는 현재 수준으로 유지.

```text
the queen rushing to her dead son, romance fantasy webnovel card illustration, detailed anime style, a medium wide view of a moonlit marble hall, a young crown prince with golden blond hair and a golden laurel wreath lying dead on the floor in a white and gold imperial uniform with a purple cape spread around him, his head lolled limply to one side and his face ashen pale and drained of all color, his mother the queen dropped to her knees beside him with her hands on his body, she has the same golden blonde hair as her son and is clearly middle aged and older than him, wearing her full royal court gown of deep blue and gold, not mourning clothes, her eyes wide and her mouth open in shock and disbelief rather than quiet weeping, knights and courtiers around them all reacting in shock with wide startled eyes and hands flying to their mouths, tall marble columns and a pale moon through the high window, deep midnight blue and cold silver palette, shock and grief, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v8

```text
dark hair queen, brown hair queen, grey hair queen, black hair, mourning black, black mourning dress, funeral attire, veil, queen with laurel wreath, queen with crown, calm bystanders, composed onlookers, bowed heads, praying, quiet weeping, kissing, romantic embrace, lovers, red face, flushed cheeks, blush, rosy skin, open eyes, alive, extreme close up, blood, gore, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

### 이미지 생성 프롬프트 v9

> 수정: v8 1번 구도는 좋았으나 **뒤의 병사들이 전부 같은 얼굴**로 반복됐음.
> 배경 군중을 **여러 종류로 섞고 초점을 흐려** 얼굴 반복이 드러나지 않게 한다.

```text
the queen rushing to her dead son, romance fantasy webnovel card illustration, detailed anime style, a medium wide view of a moonlit marble hall, a young crown prince with golden blond hair and a golden laurel wreath lying dead on the floor in a white and gold imperial uniform with a purple cape spread around him, his head lolled limply to one side and his face ashen pale and drained of all color, his mother the queen dropped to her knees beside him with her hands on his body, she has the same golden blonde hair as her son and is clearly middle aged and older than him, wearing her full royal court gown of deep blue and gold, her eyes wide and her mouth open in shock and disbelief, behind them a varied crowd of onlookers each one clearly different from the others — armored knights, elderly courtiers, servants, noblewomen — all rendered soft and out of focus in the background with shallow depth of field so only their startled postures read, sharp focus on the queen and the prince alone, tall marble columns and a pale moon through the high window, deep midnight blue and cold silver palette, shock and grief, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v9

```text
identical faces, repeated faces, cloned faces, duplicate people, uniform crowd, everyone in the same armor, rows of identical soldiers, sharp background crowd, all faces in focus, dark hair queen, brown hair queen, grey hair queen, mourning black, funeral attire, queen with laurel wreath, queen with crown, calm bystanders, bowed heads, praying, kissing, romantic embrace, red face, flushed cheeks, blush, rosy skin, open eyes, alive, blood, gore, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

### 이미지 생성 프롬프트 v10

> 수정: 배경 인물을 **전부 뺀다.** 왕비와 죽은 왕자 둘만 남긴다.

```text
the queen rushing to her dead son, romance fantasy webnovel card illustration, detailed anime style, a moonlit marble hall completely empty except for two people, a young crown prince with golden blond hair and a golden laurel wreath lying dead on the floor in a white and gold imperial uniform with a purple cape spread around him, his head lolled limply to one side and his face ashen pale and drained of all color, his mother the queen dropped to her knees beside him with her hands on his body, she has the same golden blonde hair and is clearly middle aged and older than him, wearing her full royal court gown of deep blue and gold, her eyes wide and her mouth open in shock and disbelief, nobody else anywhere in the hall, bare marble columns and a pale moon through the high window behind them, deep midnight blue and cold silver palette, shock and grief, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v10

```text
crowd, onlookers, background people, bystanders, knights, soldiers, courtiers, servants, noblewomen, third person, group of people, figures in the background, dark hair queen, brown hair queen, grey hair queen, mourning black, funeral attire, queen with laurel wreath, queen with crown, kissing, romantic embrace, red face, flushed cheeks, blush, rosy skin, open eyes, alive, blood, gore, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

## 7. beast_swarm — 마수폭주 (국지)

> 플레이버: 개굴, 개굴 — 늪에서 기어나온 마수들이 대지를 덮는다. (성경 두 번째 재앙)

### 이미지 생성 프롬프트

```text
a swarm of monstrous frog beasts erupting from a swamp, romance fantasy webnovel card illustration, detailed anime style scenery, a dense mass of grotesque amphibian monsters leaping high into the air above the marsh, silhouetted in mid-leap against a murky green sky, more of them boiling up from the mist below, sickly green and swamp brown palette, chaotic and repulsive energy, vertical card illustration, composition weighted to the upper half with the main subject high in the frame, wide open murky sky filling the top of the image, the lower two fifths left simple and uncluttered with no important detail, high detail, no text, no watermark
```

### 네거티브 프롬프트

```text
humans, human figures, person, face, portrait, large foreground object, cluttered foreground, busy bottom, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration
```

### 이미지 생성 프롬프트 v2

```text
a swarm of monstrous frog beasts overrunning a village, romance fantasy webnovel card illustration, detailed anime style, dozens of grotesque amphibian monsters leaping over fences and clambering onto rooftops, villagers scrambling away in panic between the houses, one swinging a burning torch at the nearest beast while another drags a child clear, murky green swamp mist rolling in behind them, sickly green and swamp brown palette, chaotic and repulsive, square composition, high detail, no text, no watermark
```

## 8. flies — 파리 (이동)

> 플레이버: 썩은 냄새와 함께 죽은 자들이 일어서고, 하늘이 새까맣게 뒤덮인다. (성경 네 번째 재앙)

### 이미지 생성 프롬프트

```text
an enormous swarm of flies blackening the sky, romance fantasy webnovel card illustration, detailed anime style scenery, a colossal churning cloud of insects filling the entire upper sky and blotting out the sun, the swarm twisting into a vast dark column, thin sickly light struggling through gaps in the swarm, a distant graveyard skyline barely visible far below, rotting brown and black palette with a jaundiced glow, foul and suffocating, vertical card illustration, composition weighted to the upper half with the main subject high in the frame, wide open sky filling the top of the image, the lower two fifths left simple and uncluttered with no important detail, high detail, no text, no watermark
```

### 네거티브 프롬프트

```text
humans, human figures, person, face, portrait, large foreground object, cluttered foreground, busy bottom, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration
```

### 이미지 생성 프롬프트 v2

> 수정: v1의 `twisting into a vast dark column` 이 **나무 줄기**로 해석되어
> 거대한 불타는 세계수처럼 나왔음. 기둥·소용돌이 묘사를 걷어내고
> **하늘을 가득 메운 개별 벌레 떼**로 다시 기술.

```text
an uncountable swarm of black flies filling the entire sky, romance fantasy webnovel card illustration, detailed anime style scenery, the whole upper sky densely speckled with countless individual black insects in flight, a seething living haze of bugs blotting out the sun, thin jaundiced light struggling through the gaps between them, the swarm spread flat and wide across the sky rather than gathered into any shape, a low graveyard skyline as a small distant silhouette far below, rotting brown and black palette with a sickly yellow glow, foul and suffocating, vertical card illustration, composition weighted to the upper half with the main subject high in the frame, wide open sky filling the top of the image, the lower two fifths left simple and uncluttered with no important detail, high detail, no text, no watermark
```

### 네거티브 프롬프트 v2

```text
tree, giant tree, tree trunk, branches, roots, world tree, mushroom cloud, explosion, pillar, column, tornado, whirlwind, single large shape, humans, human figures, person, face, portrait, large foreground object, cluttered foreground, busy bottom, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration
```

### 이미지 생성 프롬프트 v3

```text
undead rising as a swarm of flies blackens the sky, romance fantasy webnovel card illustration, detailed anime style, the whole sky densely speckled with countless black insects blotting out the sun, skeletal undead clawing their way up out of the graveyard soil among leaning headstones, a living figure stumbling backward with one arm thrown up against the swarm, rotting brown and black palette with a jaundiced glow, foul and suffocating, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v3

```text
tree, giant tree, tree trunk, branches, world tree, mushroom cloud, explosion, pillar, column, tornado, gore, dismemberment, mutilation, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

### 이미지 생성 프롬프트 v4

> 수정: v3는 파리가 **새 떼**처럼 나왔고 해골이 여럿이라 산만했음.
> 언데드 대신 **구울 하나**에 집중 — 구더기와 파리가 들끓는 구울이 사람을 무는 장면.

```text
a rotting ghoul swarming with flies biting a victim, romance fantasy webnovel card illustration, detailed anime style, a single gaunt grey-skinned ghoul with sunken hollow eyes and torn peeling flesh lunging forward and sinking its teeth into a screaming man's shoulder, dense clusters of small black flies crawling and buzzing all over the ghoul's body and face, pale maggots writhing in its open wounds, thick clouds of tiny flies filling the air close around the two of them, a dim graveyard of leaning headstones behind, rotting brown and sickly green palette with a jaundiced haze, foul and suffocating, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v4

```text
birds, crows, ravens, flock of birds, bats, skeleton, skeletons, many undead, horde, crowd, multiple ghouls, distant wide shot, exposed organs, viscera, guts, dismemberment, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

### 이미지 생성 프롬프트 v5

> 수정: v4는 구울이 사람을 무는 구도가 **껴안고 키스하는 것처럼** 나왔음.
> 사람을 빼고 **구울 하나만** 놔둔다. 파리·구더기가 핵심이므로 가중치를 준다.

```text
a rotting ghoul swarming with flies, romance fantasy webnovel card illustration, detailed anime style, a single gaunt grey-skinned ghoul standing alone in a dim graveyard, jaw hanging open and hollow sunken eyes, torn peeling flesh hanging from its ribs and arms, (dense clusters of small black flies crawling thickly all over its skin and face:1.4), (pale maggots writhing in its open wounds:1.3), a thick buzzing cloud of tiny black flies swarming in the air around it, leaning headstones and low mist behind, rotting brown and sickly green palette with a jaundiced haze, foul and suffocating, only the ghoul and no other figure, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v5

```text
human, man, woman, victim, person being bitten, two figures, couple, embrace, hugging, kissing, birds, crows, ravens, flock of birds, bats, skeletons, horde, crowd, multiple ghouls, gore, viscera, guts, dismemberment, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs

```

### 이미지 생성 프롬프트 v6

> 수정: v5는 파리가 **흰 알갱이**로 나와 파리로 안 읽혔음.
> ① 전경에 **확대된 파리**를 가까이 배치 ② 구울의 **절반을 파리가 덮도록**.

```text
a rotting ghoul half-buried under a blanket of flies, romance fantasy webnovel card illustration, detailed anime style, a single gaunt grey-skinned ghoul standing alone in a dim graveyard, the entire left half of its body and face completely covered under a thick crawling carpet of glossy black flies, its remaining exposed skin torn and peeling, in the immediate foreground several greatly enlarged black flies in sharp close-up flying toward the viewer with clearly visible wings, legs and red compound eyes, more black flies swarming thickly through the air between the viewer and the ghoul, pale maggots in its open wounds, leaning headstones and low mist behind, rotting brown and sickly green palette, foul and suffocating, only the ghoul and no other person, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v6

```text
white specks, pale dots, white particles, snow, ash, dust motes, embers, sparkles, human, man, woman, victim, two figures, couple, embrace, kissing, birds, crows, ravens, bats, skeletons, horde, multiple ghouls, gore, viscera, guts, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers
```

### 이미지 생성 프롬프트 v7

> 수정: v6에서 파리는 검게 잘 나왔으나, "절반을 덮는다"가
> **구울이 검은 더미 위에 서 있는** 형태가 됐음. 파리가 **몸에 직접 달라붙도록** 명시한다.

```text
a rotting ghoul with flies clinging all over its body, romance fantasy webnovel card illustration, detailed anime style, a single gaunt grey-skinned ghoul standing upright in a dim graveyard, glossy black flies densely clinging directly onto its skin and rags covering the entire left half of its torso shoulder and face like a living crust stuck fast to the body, the right half of it bare torn grey flesh, in the immediate foreground several greatly enlarged black flies in sharp close-up flying toward the viewer with clearly visible wings, legs and red compound eyes, more flies swarming through the air around its head, flat plain graveyard ground with leaning headstones behind, rotting brown and sickly green palette, foul and suffocating, only the ghoul and no other person, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v7

```text
pile of insects on the ground, mound, heap, standing in a pile, larvae mound, nest, insects only at the feet, white specks, pale dots, snow, ash, dust motes, sparkles, human, man, woman, victim, two figures, couple, embrace, kissing, birds, crows, ravens, bats, skeletons, horde, multiple ghouls, gore, viscera, guts, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers
```

### 이미지 생성 프롬프트 v8

> 수정: **구울을 완전히 뺀다.** 파리 뭉치 자체로 표현하는 편이 낫다.

```text
a writhing mass of flies, romance fantasy webnovel card illustration, detailed anime style, an enormous seething cluster of glossy black flies swarming together into a dense churning mass hanging in the air above a dim graveyard, many thousands of individual insects packed on top of one another and boiling over each other, the outline of the swarm shifting and formless, in the immediate foreground several greatly enlarged black flies in sharp close-up flying toward the viewer with clearly visible wings, legs and red compound eyes, more flies streaming off the mass in dark trailing ribbons, leaning headstones and low mist below, rotting brown and sickly green palette with a jaundiced haze, foul and suffocating, no creature and no person anywhere, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트 v8

```text
ghoul, zombie, undead, corpse, humanoid, human, man, woman, body, figure, creature, monster, animal, face, birds, crows, ravens, bats, white specks, pale dots, snow, ash, dust motes, sparkles, gore, viscera, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration
```

## 9. erasure — 소멸 (전역)

> 플레이버: 세계가 스스로를 지운다 — 소설의 한 페이지가 찢겨나가듯.

### 이미지 생성 프롬프트

```text
a region of the world being erased like a torn page, romance fantasy webnovel card illustration, detailed anime style scenery, a huge ragged tear cutting across the sky and landscape high in the frame, everything beyond the tear dissolving into blank white paper and drifting scraps, torn paper edges curling at the boundary, faint ink lines and unfinished sketch showing through the void, the intact world at the edges rendered in full color, surreal and unsettling, cream white and muted color palette, vertical card illustration, composition weighted to the upper half with the main subject high in the frame, wide open sky filling the top of the image, the lower two fifths left simple and uncluttered with no important detail, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

> 수정: 찢긴 종이 컨셉은 흰 면적이 커서 덱 안에서 톤이 튀었음.
> **거대한 크레이터**로 전환 — 지역이 통째로 사라졌다는 것이 훨씬 직관적으로 읽힌다.

```text
an entire region erased leaving a colossal crater, romance fantasy webnovel card illustration, detailed anime style, an enormous perfectly circular crater where a city once stood, sheer cliff walls dropping away into bare rock and dust far below, the untouched green countryside cut off abruptly at its rim, a few tiny figures standing at the edge staring down into the emptiness, drifting dust and pale haze rising from the pit, muted earth and ash palette under a washed pale sky, awe and desolation, square composition, high detail, no text, no watermark
```

## 10. final_act — 종막 (메타)

> 플레이버: 막이 오른다. 이야기는 결말을 향해 폭주하기 시작한다.

### 이미지 생성 프롬프트

```text
an immense theater curtain rising over the sky of the world, romance fantasy webnovel card illustration, detailed anime style scenery, colossal heavy crimson velvet curtains parting high above the clouds with golden tassels and rope, blinding stage light pouring down through the opening, the fantasy landscape far below lit like a stage set, dramatic crimson and gold palette against deep shadow, theatrical and ominous grandeur, vertical card illustration, composition weighted to the upper half with the main subject high in the frame, wide open sky filling the top of the image, the lower two fifths left simple and uncluttered with no important detail, high detail, no text, no watermark
```

### 이미지 생성 프롬프트 v2

> 수정: 무대 커튼 대신 **빠르게 넘어가는 영화 필름 + 회전하는 시계**로.
> "이야기가 결말을 향해 폭주한다"는 메타적 성격이 훨씬 직접적으로 읽힌다.

```text
a film reel racing forward while a clock spins wildly, romance fantasy webnovel card illustration, detailed anime style, long strips of celluloid film unspooling and streaming past at high speed, each frame showing a blurred glimpse of a scene, a large ornate clock face at the center with its hands whirling around out of control, motion streaks and scattered sparks trailing behind the film, gears and fragments flying apart, deep crimson and gold against black, theatrical and ominous acceleration, square composition, high detail, no text, no watermark
```
