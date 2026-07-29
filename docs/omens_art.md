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
