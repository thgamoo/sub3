# 운명 카드 아트

운명 카드의 이미지 생성 프롬프트. 내용은 [scenario.md](scenario.md) 참고.

> **v2 (현행)** — 초반부 12종 전체. 공통 톤 조항으로 렌더링을 고정하고 분위기만 카드별로 연다.

## 구성 (초반부 덱 — **12종 16장**)

테마: **모이는 운명의 별**

| # | 카드 | 장수 |
|---|---|---|
| 1 | 주인공의 각성 — "어라... 이 힘은?" | 2 |
| 2 | 내가 일을 하나 맡기려고 하는데 | **4** |
| 3 | 충격! 대마법사 멀린의 사망 | 1 |
| 4 | 샬롯의 데뷔당트 | 1 |
| 5 | 깨어난 뱀파이어 | 1 |
| 6 | 루크레치아: 제노비아, 쓸어버려 | 1 |
| 7 | 루크레치아: 이레네, 이 자는 이교도야 | 1 |
| 8 | 메살리나: 데이지, 처리해 | 1 |
| 9 | 제국의 해적소탕령 | 1 |
| 10 | 로욱시나: 도망자 마리를 찾아 | 1 |
| 11 | 앗, 남주다! | 1 |
| 12 | 주인공, 잔느 등장! | 1 |

같은 카드가 여러 장인 경우 **아트는 1종을 공유**한다 → 아트는 12종.

## 공통 규칙

### 성격 — 서사 장면 카드

능력·성향 카드처럼 아이콘이 아니라, **재앙 카드와 같은 장면 일러스트**다.
매 막 오픈되어 낭독되는 사건 카드이므로 상황이 한눈에 읽혀야 한다.

- **1024 × 1024 (1:1)** — 프레임·텍스트는 나중에 위에 얹는다
- 뒷면은 검정 (재앙 카드와 동일 디자인)

### 등장 인물 처리

| 상황 | 처리 |
|---|---|
| **잔느** | 캐릭터 카드 디자인 고정 — 분홍 숏컷, 큰 분홍 눈, 수수한 아카데미 교복, 갑옷·무기 없음 |
| 특정 캐릭터 (제노비아·이레네·데이지·마리·그레이스) | 각 캐릭터 md 의 외모 설정을 따른다 |
| **누구인지 가변인 경우** | 얼굴을 그림자에 두어 **특정되지 않게** 한다 (예: "가장 가까운 악녀") |

### 생성 설정

| 항목 | 값 |
|---|---|
| 모델 | `anima-base-v1.0` |
| LoRA | `AnimaMythP0rtr4itStyleV1`, strength 1.0 |
| 품질 태그 | base (`masterpiece, best quality, score_7, safe, ` 접두) |
| 샘플링 | 30 steps / CFG 4.0 / `er_sde` / `simple` |
| 후보 | 테스트 단계에서는 **4장** |

### 공통 네거티브

```text
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

---

## 1. awakening — 주인공의 각성 — "어라... 이 힘은?" (2장)

> 주사위를 굴려 잔느가 6종 능력 중 하나를 얻는다.

### 이미지 생성 프롬프트 v2

```text
the heroine awakens to a power she does not understand, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a young girl with soft pink short bob hair and big clear pink eyes wearing a modest neat academy uniform, no armor and no weapons, she stands alone and stares down at her own open palms with wide startled eyes and her lips parted, a soft nameless light welling up out of both hands and spilling between her fingers, faint motes of light rising around her, her hair and collar lifted by the surge, an empty academy corridor behind her going pale in the glow, the light is plain white and gold and takes no particular shape
```

### 네거티브 프롬프트 v2

```text
sword, staff, wand, book, weapon, magic circle, elemental effect, fire, ice, lightning, colored aura, wings, transformation outfit, confident pose, smug expression, other people, crowd, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

## 2. commission — 내가 일을 하나 맡기려고 하는데 (4장)

> 모든 플레이어는 가장 가까운 악녀의 조우 토큰을 획득한다.
> 모든 토큰을 이미 받았다면 금화 2개와 **암살 의뢰**를 받는다.

> ⚠️ **어느 악녀인지 가변이므로 특정되면 안 된다.** 얼굴을 그림자에 둔다.

### 이미지 생성 프롬프트

```text
a villainess offering a secret commission, romance fantasy webnovel card illustration, detailed anime style, in a dim candlelit room an elegant noblewoman in a dark gown leans forward across a table and slides a small drawstring pouch of gold coins toward the viewer, her face deliberately kept in deep shadow so she cannot be identified as any particular character, one gloved fingertip still resting on the pouch, a few gold coins spilled beside it catching the candlelight, heavy drapery behind her, conspiratorial and dangerous atmosphere, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트

```text
identifiable face, clear facial features, bright lighting, cheerful mood, man, male, two people, crowd, gore, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

### 이미지 생성 프롬프트 v2

```text
a villainess offering a secret commission, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, in a dim candlelit room an elegant noblewoman in a dark gown leans forward across a table and slides a small drawstring pouch of gold coins toward the viewer, her face deliberately kept in deep shadow so she cannot be identified as any particular character, one gloved fingertip still resting on the pouch, a few gold coins spilled beside it catching the candlelight, heavy drapery behind her, conspiratorial and dangerous atmosphere
```

### 네거티브 프롬프트 v2

```text
identifiable face, clear facial features, bright lighting, cheerful mood, man, male, two people, crowd, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

## 3. merlin_death — 충격! 대마법사 멀린의 사망

> 마도사로 각성하지 않은 플레이어는 마법 카드 1장을 버려 애도한다.

### 이미지 생성 프롬프트 v2

```text
the death of the great archmage shocks the world, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, inside a ruined mage tower an aged archmage in deep blue star-patterned robes lies fallen on the cold stone floor with his long white beard spread over his chest and his eyes closed, his tall wooden staff broken in two beside his outstretched hand, its crystal cracked and going dark, torn spell pages and shattered glass scattered across the floor, thin cold moonlight falling through a collapsed ceiling, the fading violet glow of his magic dissipating into the air, solemn and irreversible atmosphere of a great loss
```

### 네거티브 프롬프트 v2

```text
blood, wound, young man, woman, cheerful, bright daylight, crowd, battle in progress, monster, intact staff, glowing crystal, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

## 4. charlotte_debut — 샬롯의 데뷔당트

> 샬롯이 동부로 이동해 메살리나와 조우한다.

### 이미지 생성 프롬프트 v2

```text
the young noble lady makes her debut at court, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a haughty noble lady with bright golden blonde hair in twin rolled bun curls with long ringlets at the sides, sharp icy blue eyes, in an elegant jade green and cream noble gown descends a grand marble staircase into a glittering ballroom, one gloved hand resting lightly on the gilded banister and her chin raised in proud composure, the hem of her gown trailing down the steps behind her, chandeliers blazing overhead and blurred formal guests below turning to look up at her, warm gold light and a swell of attention, the glamour of a debut with a thread of tension underneath
```

### 네거티브 프롬프트 v2

```text
pink dress, red dress, twin round buns without ringlets, childish face, chibi, casual clothes, modern clothing, outdoors, daylight, empty room, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

## 5. vampire_awakens — 깨어난 뱀파이어

> 바토리가 휴면에서 벗어난다.

### 이미지 생성 프롬프트 v2

```text
the sleeping vampire opens her eyes at last, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a petite ancient vampire queen with short white bob hair, glowing crimson red eyes, small fangs, pale porcelain skin, in a worn gothic black and red dress sits slowly upright inside a dust-choked stone crypt, the heavy lid of her sarcophagus pushed aside and centuries of dust sliding off her shoulders, her crimson eyes opening as the first points of light in the dark, one pale hand gripping the stone edge, cobwebs breaking around her and a cold blue underground gloom pierced by a single thin shaft of light from above, the hush of something very old waking up
```

### 네거티브 프롬프트 v2

```text
long hair, black hair, blonde hair, tall mature figure, revealing outfit, bats swarming, modern setting, daylight, cheerful expression, blood on face, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v3

> **구도 변경 — 관 안에서 일어나는 게 아니라 관 위에 걸터앉은 모습.**
> v2 는 `sits slowly upright inside` 라 관 속에서 상체를 세우는 그림이었다.
> 이제 닫힌 석관 뚜껑 위에 다리를 꼬고 앉아 여유롭게 기댄 자세다.
> 네거티브에 `lying down, sitting up from inside, standing` 을 넣어 되돌아가는 것을 막는다.

```text
the sleeping vampire opens her eyes at last, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a petite ancient vampire queen with short white bob hair, glowing crimson red eyes, small fangs, pale porcelain skin, in a worn gothic black and red dress sits perched on top of her stone sarcophagus inside a dust-choked crypt, seated on the edge of the closed stone lid with her legs crossed and one hand resting beside her, leaning back a little at ease, the heavy lid pushed half aside beneath her and centuries of dust still drifting in the air, her crimson eyes wide open and steady, cobwebs breaking around her and a cold blue underground gloom pierced by a single thin shaft of light from above, the hush of something very old waking up
```

### 네거티브 프롬프트 v3

```text
lying down, lying inside the coffin, sitting up from inside, standing, coffin lid fully closed with no gap,
long hair, black hair, blonde hair, tall mature figure, revealing outfit, bats swarming, modern setting, daylight, cheerful expression, blood on face, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v4

> **석관 → 진짜 뱀파이어 관.** 걸터앉는 구도는 그대로 두고 관만 바꾼다.
> v3 의 `stone sarcophagus` 는 이집트식 석관처럼 나왔다.
> 고전적인 **육각형 나무 관**(검은 옻칠 + 금속 장식 + 붉은 안감)으로 명시한다.

```text
the sleeping vampire opens her eyes at last, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a petite ancient vampire queen with short white bob hair, glowing crimson red eyes, small fangs, pale porcelain skin, in a worn gothic black and red dress sits perched on top of a classic hexagonal wooden vampire coffin inside a dust-choked crypt, the coffin lacquered black with tarnished silver fittings and deep red velvet lining spilling out from under its heavy lid, seated on the edge of that closed lid with her legs crossed and one hand resting beside her, leaning back a little at ease, the heavy lid pushed half aside beneath her and centuries of dust still drifting in the air, her crimson eyes wide open and steady, cobwebs breaking around her and a cold blue underground gloom pierced by a single thin shaft of light from above, the hush of something very old waking up
```

### 네거티브 프롬프트 v4

```text
stone sarcophagus, stone coffin, egyptian sarcophagus, marble tomb, rectangular box, modern casket, open grave, pile of rubble,
lying down, lying inside the coffin, sitting up from inside, standing, coffin lid fully closed with no gap,
long hair, black hair, blonde hair, tall mature figure, revealing outfit, bats swarming, modern setting, daylight, cheerful expression, blood on face, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v5

> **관 뚜껑을 완전히 닫고, 봉인된 관으로.** v4 는 `pushed half aside` 라 뚜껑이 열려 있었다.
> 걸터앉는 구도는 그대로. 육각형이 어려우면 **직사각형**으로 가되,
> **봉인의 관**처럼 보이게 한다 — 쇠사슬, 못질한 철대, 봉인 부적, 그리고 **뚜껑을 가로지르는 균열**.
> 균열이 '안에서 깨고 나왔다'는 서사를 그림 하나로 설명해준다.

```text
the sealed vampire wakes, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, a petite ancient vampire queen with short white bob hair, glowing crimson red eyes, small fangs, pale porcelain skin, in a worn gothic black and red dress, sits perched on top of a long rectangular black coffin inside a dust-choked stone crypt, the coffin lid completely shut beneath her, the coffin bound with heavy rusted iron chains and riveted iron bands across its width, old yellowed sealing talismans nailed to its sides and peeling away, a long jagged crack splitting the closed lid from end to end with faint red light bleeding out of it, she sits sideways on that cracked lid with her legs crossed and one hand resting beside her, leaning back a little at ease, her crimson eyes wide open and steady, centuries of dust still drifting in the air, cobwebs broken around the coffin, a cold blue underground gloom pierced by a single thin shaft of light from above, something very old that let itself out
```

### 네거티브 프롬프트 v5

```text
open coffin, coffin lid open, lid pushed aside, lid ajar, lid leaning against the wall, empty coffin interior visible, lying down, lying inside the coffin, sitting up from inside, standing, stone sarcophagus, egyptian sarcophagus, marble tomb, modern casket, open grave, long hair, black hair, blonde hair, tall mature figure, bats swarming, daylight, cheerful expression,
stone sarcophagus, stone coffin, egyptian sarcophagus, marble tomb, rectangular box, modern casket, open grave, pile of rubble,
lying down, lying inside the coffin, sitting up from inside, standing, coffin lid fully closed with no gap,
long hair, black hair, blonde hair, tall mature figure, revealing outfit, bats swarming, modern setting, daylight, cheerful expression, blood on face, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

## 6. zenobia_sweep — 루크레치아: 제노비아, 쓸어버려

> 제노비아가 같은 지역의 캐릭터에게 모략을 진행한다.

### 이미지 생성 프롬프트 v2

```text
the noble villainess sends her executioner in, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, two women together in one scene, on the left a cold-blooded noble villainess with golden blonde vertical drill curls and narrow half-closed icy blue eyes, a jeweled tiara ornament and a pale violet lace gown, holding an ornate jeweled folding fan stands half turned away and gives a small dismissive flick of her closed fan toward the far side of the room without even looking, on the right a stoic female knight with long loose brown hair and deep copper tanned skin, a plain silver half-mask over the right side of her face with small live flames flickering along its edge, in a white knight coat over a dark uniform is already striding forward past her with a straight longsword drawn low at her side, jaw set and eyes fixed ahead, a dim marble hall behind them with tall shadowed columns, cold command and immediate obedience
```

### 네거티브 프롬프트 v2

```text
three people, four people, crowd, only one person, duplicate character, same face twice, both women identical, smiling warmly, blood, corpse, katana, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v3

> **제노비아 단독 — 마을을 쓸어버리는 장면.** 루크레치아를 뺐다.
> 채택본(`sub3-char-zenobia/selected/zenobia_05.png`)의 인상 — 세로 반가면, 구리빛 피부,
> 가면 가장자리의 잔불, 가슴 정중앙 십자가 — 을 그대로 가져왔다.

```text
the church executioner sweeps the village, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, a stoic female executioner with long loose brown hair and deep copper tanned skin, a plain silver half-mask covering the entire left half of her face vertically with small live flames flickering steadily along its edge, a cross pendant at the exact center of her chest, in a white knight coat over a dark uniform, walks alone straight toward the viewer through a burning village at night with a straight longsword drawn low at her side, jaw set and eyes fixed ahead, thatched houses ablaze on both sides behind her, embers rising into the dark, silhouettes of collapsed timber, cold merciless duty carried out without hesitation
```

### 네거티브 프롬프트 v3

```text
two women, 2girls, multiple girls, blonde hair, golden drill curls, tiara, folding fan, pale violet gown, noble lady, indoors, marble hall, columns, mouth mask, mask over mouth, full face mask, hood, smiling,
three people, four people, crowd, only one person, duplicate character, same face twice, both women identical, smiling warmly, blood, corpse, katana, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v4

> **가면을 오른쪽 위로 못박음.** v3 에서도 입·코를 덮는 마스크가 나왔다.
> `half-mask` 만으로는 어느 절반인지 모델이 못 정한다 — 캐릭터 카드에서 겪은 것과 같은 문제다.
> 이번엔 **오른쪽 눈과 관자놀이를 덮고 광대뼈 위에서 끝난다**고 명시하고,
> **코·입·왼쪽 얼굴은 드러난다**는 것까지 적는다.

```text
the church executioner sweeps the village, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, a stoic female executioner with long loose brown hair and deep copper tanned skin, a plain silver half-mask covering only the upper right quarter of her face, the mask sitting over her right eye and right temple and stopping above her cheekbone, her nose, her mouth and the entire left half of her face completely bare and uncovered, small live flames flickering steadily along the mask edge, a cross pendant at the exact center of her chest, in a white knight coat over a dark uniform, walks alone straight toward the viewer through a burning village at night with a straight longsword drawn low at her side, jaw set and eyes fixed ahead, thatched houses ablaze on both sides behind her, embers rising into the dark, silhouettes of collapsed timber, cold merciless duty carried out without hesitation
```

### 네거티브 프롬프트 v4

```text
mouth mask, muzzle, mask over mouth, mask over nose, mask covering the lower face, surgical mask, respirator, gas mask, full face mask, masquerade mask over both eyes, both eyes covered, horizontal mask, mask covering the whole face,
two women, 2girls, multiple girls, blonde hair, golden drill curls, tiara, folding fan, pale violet gown, noble lady, indoors, marble hall, columns, mouth mask, mask over mouth, full face mask, hood, smiling,
three people, four people, crowd, only one person, duplicate character, same face twice, both women identical, smiling warmly, blood, corpse, katana, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v5

> **풀샷으로 물러남.** 근접 구도로는 '마을을 쓸어버린다'는 규모가 안 나왔다.
> 카메라를 멀리 빼서 **불타는 마을 전체가 보이는 광각**으로 잡고,
> 제노비아는 화면 안에서 작게 — **뒷모습이어도 무방**하다.
> 얼굴이 작아지므로 가면 묘사는 힘을 빼고 실루엣과 잔불로만 식별되게 한다.

```text
one executioner sweeps an entire village, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, full shot, wide angle, distant camera, the whole burning village visible in one frame, solo, one character only, a lone female church executioner seen from behind and slightly to the side, small in the frame, walking away from the viewer down the middle of a village lane with a straight longsword held low and swept out to one side, long loose brown hair and a white knight coat streaming behind her, a faint orange glow spilling out past the left edge of her head from the mask worn on the front of her face, the back of her head showing only bare flowing hair with no straps and no metal band crossing it, thatched houses burning to the left and right of the lane, roofs collapsing and embers pouring up into the night sky, dark smoke rolling across the stars, scattered debris and long firelight shadows stretching toward the viewer, one person emptying a whole village
```

### 네거티브 프롬프트 v5

```text
close-up, portrait, bust shot, upper body, large face, face filling the frame, mask strap, head strap, straps around the head, metal band across the back of the head, buckle at the back of the head, mask on the left eye, mask covering the left side of the face, 2girls, multiple girls, blonde hair, golden drill curls, tiara, folding fan, pale violet gown, noble lady, indoors, marble hall, columns, mouth mask, mask over mouth, full face mask, hood, smiling, crowd of soldiers, army,
mouth mask, muzzle, mask over mouth, mask over nose, mask covering the lower face, surgical mask, respirator, gas mask, full face mask, masquerade mask over both eyes, both eyes covered, horizontal mask, mask covering the whole face,
two women, 2girls, multiple girls, blonde hair, golden drill curls, tiara, folding fan, pale violet gown, noble lady, indoors, marble hall, columns, mouth mask, mask over mouth, full face mask, hood, smiling,
three people, four people, crowd, only one person, duplicate character, same face twice, both women identical, smiling warmly, blood, corpse, katana, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

## 7. irene_heretic — 루크레치아: 이레네, 이 자는 이교도야

> 이레네가 같은 지역의 캐릭터에게 여론악화를 건다.

### 이미지 생성 프롬프트 v2

```text
the noble villainess names a heretic, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, two women together in one scene, on the left a cold-blooded noble villainess with golden blonde vertical drill curls and narrow half-closed icy blue eyes, a jeweled tiara ornament and a pale violet lace gown, holding an ornate jeweled folding fan leans in and points one gloved finger past the viewer with a faint cruel smile, on the right a saintess candidate with pale blonde hair whose long heavy straight bangs fall completely over her eyes with only a faint golden glow seeping through the strands, blank expressionless face, in plain white and gold priestess vestments and a white bishop's mitre stands perfectly still and level-headed with one hand raised in a slow formal gesture of judgement, a cold pale light gathering around her raised palm, the vaulted stone nave of a cathedral behind them with tall narrow windows, an accusation being turned into doctrine
```

### 네거티브 프롬프트 v2

```text
three people, four people, crowd, only one person, duplicate character, same face twice, visible eyes on the blonde priestess, bangs pushed aside, halo, floating scripture pages, crown, smiling, blood, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v3

> **이레네 단독 — 특정 인물을 이단으로 확정하는 장면.** 루크레치아를 뺐다.
> 채택본(`sub3-char-irene/selected/irene_09.png`) 기준 — 앞머리로 눈을 완전히 가림,
> 뾰족한 사제관, 흰 사제복. 단죄받는 인물은 얼굴을 가린 익명으로 둔다.

```text
the saintess candidate names a heretic, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a saintess candidate with pale blonde hair whose long heavy straight bangs fall completely over her eyes with only a faint golden glow seeping through the strands, blank expressionless face with lips in a flat line, in plain white and gold priestess vestments and a tall pointed white mitre, stands over a single kneeling figure and extends one hand down toward that figure's head in a slow formal gesture of judgement, cold pale light gathering around her palm and falling on the kneeling person, the condemned figure hunched with head bowed and face completely hidden in shadow, unrecognizable, the vaulted stone nave of a cathedral behind them with tall narrow windows, an accusation being turned into doctrine
```

### 네거티브 프롬프트 v3

```text
blonde drill curls, tiara, folding fan, pale violet gown, noble lady, cold-blooded villainess, visible eyes, eyes showing, parted bangs, flat topped hat, round hat, recognizable second face, two main characters, crowd, smiling,
three people, four people, crowd, only one person, duplicate character, same face twice, visible eyes on the blonde priestess, bangs pushed aside, halo, floating scripture pages, crown, smiling, blood, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v4

> **축복이 아니라 낙인.** v3 은 손을 머리 위로 내려 **가호를 내리는 것처럼** 읽혔다.
> 펼친 손바닥 + 내려앉는 빛 조합이 원인이다. **달군 인장을 눌러 찍는 장면**으로 바꾼다.
> 네거티브에 `blessing, healing, prayer, open palm, benediction, halo` 를 넣어 축복 해석을 막는다.

```text
the saintess candidate brands a heretic, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a saintess candidate with pale blonde hair whose long heavy straight bangs fall completely over her eyes with only a faint golden glow seeping through the strands, blank expressionless face with lips in a flat line, in plain white and gold priestess vestments and a tall pointed white mitre, grips a long iron branding rod in both hands and presses its red hot glowing seal down onto the bare shoulder of a kneeling figure, sparks and a thin curl of smoke rising from the contact point, the condemned figure hunched and straining with head bowed and face completely hidden in shadow, unrecognizable, harsh orange glow from the brand lighting her impassive face from below, the vaulted stone nave of a cathedral behind them, judgement carried out as procedure
```

### 네거티브 프롬프트 v4

```text
blessing, healing, prayer, praying, benediction, gentle gesture, open palm, outstretched palm, halo, holy light descending, soft warm glow, comforting, kind expression, blonde drill curls, tiara, folding fan, pale violet gown, visible eyes, parted bangs, flat topped hat, round hat, crowd, smiling,
blonde drill curls, tiara, folding fan, pale violet gown, noble lady, cold-blooded villainess, visible eyes, eyes showing, parted bangs, flat topped hat, round hat, recognizable second face, two main characters, crowd, smiling,
three people, four people, crowd, only one person, duplicate character, same face twice, visible eyes on the blonde priestess, bangs pushed aside, halo, floating scripture pages, crown, smiling, blood, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v5

> **봉 → 인두.** v4 는 `a long iron branding rod` 라 **긴 막대**로 나왔다.
> 필요한 건 **손잡이가 짧은 인두**(끝에 달군 인장이 달린 것)를 눌러 **낙인(stigma)** 을 지지는 장면이다.
> `short wooden handle` · `glowing red hot iron seal at its tip` · `searing a stigma brand into the skin` 으로 명시하고, 네거티브에 `long rod, staff, pole, scepter, wand, torch` 를 넣는다.

```text
the saintess candidate sears a stigma, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a saintess candidate with pale blonde hair whose long heavy straight bangs fall completely over her eyes with only a faint golden glow seeping through the strands, blank expressionless face with lips in a flat line, in plain white and gold priestess vestments and a tall pointed white mitre, grips a short-handled branding iron in one hand, a stubby wooden grip with a small glowing red hot iron seal at its tip, and presses that seal firmly down onto the bare shoulder of a kneeling figure, searing a stigma brand into the skin, sparks and a thin curl of smoke rising from the contact point, the condemned figure hunched and straining with head bowed and face completely hidden in shadow, unrecognizable, harsh orange glow from the iron lighting her impassive face from below, the vaulted stone nave of a cathedral behind them, judgement carried out as procedure
```

### 네거티브 프롬프트 v5

```text
long rod, long staff, pole, scepter, wand, torch, spear, sword, blessing, healing, prayer, praying, benediction, gentle gesture, open palm, outstretched palm, halo, holy light descending, soft warm glow, comforting, kind expression, blonde drill curls, tiara, folding fan, pale violet gown, visible eyes, parted bangs, flat topped hat, round hat, crowd, smiling,
blessing, healing, prayer, praying, benediction, gentle gesture, open palm, outstretched palm, halo, holy light descending, soft warm glow, comforting, kind expression, blonde drill curls, tiara, folding fan, pale violet gown, visible eyes, parted bangs, flat topped hat, round hat, crowd, smiling,
blonde drill curls, tiara, folding fan, pale violet gown, noble lady, cold-blooded villainess, visible eyes, eyes showing, parted bangs, flat topped hat, round hat, recognizable second face, two main characters, crowd, smiling,
three people, four people, crowd, only one person, duplicate character, same face twice, visible eyes on the blonde priestess, bangs pushed aside, halo, floating scripture pages, crown, smiling, blood, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```


### 이미지 생성 프롬프트 v6

> **도구를 완전히 버렸다.** v5 는 인두를 명시했지만 손에 뭘 들리게 하는 순간 막대·봉·횃불로 새고 형태도 어색해졌다. 무엇을 들었는지가 이 카드의 요점이 아니다.
>
> v6 는 **맨손 + 낙인 자체**만 그린다. 이레네가 맨손바닥을 어깨에 눌러 붙이고 그 손 밑에서 십자 낙인이 살을 태우며 손가락 사이로 번져 나온다.
> `holding nothing at all, both her hands completely empty` 로 못박고 네거티브에 도구류 전체 + `holding an object, anything held` 를 넣었다.
>
> ⚠️ **가호처럼 읽히는 것을 막는 장치가 두 개 필요하다.**
> 1. `pointing finger, raised accusing hand, open palm facing the viewer, benediction, blessing` — 손을 몸에서 떼면 축복 제스처가 된다. 손이 **살에 닿아 눌려 있어야** 한다
> 2. `light descending from above, holy beam from the sky, warm golden halo` — 빛이 위에서 내려오면 은총이 된다. 이 그림의 유일한 붉은 광원은 **낙인 자국 자체**다

```text
this one is a heretic, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a saintess candidate with pale blonde hair whose long heavy straight bangs fall completely over her eyes with only a faint golden glow seeping through, a blank expressionless face, white and gold priestess vestments and a tall pointed white mitre, holding nothing at all, both her hands completely empty, no object of any kind in her hands, she presses her bare open palm down flat and firmly onto the bare shoulder of a kneeling figure below her, her fingers spread and pushing into the skin, and directly beneath her palm a stigma is burning itself into that shoulder, an intricate cross-shaped sigil searing into the flesh in glowing red-hot lines that spread outward from under the edges of her hand, the mark itself the only source of red light in the scene, thin white smoke curling up from the seared skin around her fingers, small orange sparks scattering off the burning lines, the kneeling figure's head bowed low with dark hair hanging forward hiding the face, shoulders locked rigid, a dim stone cathedral at night, cold shadow everywhere else, a verdict burned into a body
```

### 네거티브 프롬프트 v6

```text
branding iron, hot iron, iron seal, iron stamp, poker, rod, long rod, staff, long staff, pole, scepter, wand, torch, candle, spear, sword, dagger, knife, hammer, tool, instrument, holding an object, gripping something, object in hand, tool in hand, anything held, pointing finger, raised accusing hand, hand raised in the air, hand away from the body, open palm facing the viewer, benediction, blessing, blessing gesture, prayer, light descending from above, holy beam from the sky, warm golden halo, gentle glow, divine radiance, kind expression, smiling, compassionate, serene comfort, visible eyes on the saintess, uncovered eyes, visible face on the kneeling figure, identifiable victim, three people, crowd, congregation, onlookers, second saintess, duplicate character, blood, gore, torn flesh, open wound, dismemberment, excessive blood, bright daylight, cheerful, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v7

> **피시술자를 화면에서 뺐다. 이레네 단독이다.**
> v6 + 인페인트 5회까지 손이 끝내 안 나왔다. 원인은 매번 같았다 — **두 인물 사이에 낀 손**이라 팔에서 손으로 이어지는 경로가 불안정했고, 낙인 발광이 손이 있어야 할 자리를 덮었다.
>
> v7 은 그 구조를 없앤다. **손바닥을 위로 펼치고 그 위에 낙인 문양이 타오른다.** 손이 화면에서 가려질 것이 아무것도 없다.
>
> ⚠️ **펼친 손 + 빛 = 축복**으로 읽히는 것이 이 구성의 유일한 위험이다. 네 겹으로 막았다:
> 1. 빛이 **붉다** — `red-hot`, `searing bright red`. 금빛이면 은총이 된다
> 2. 빛이 **아래에서 위로** — `thrown upward onto the underside of her fingers and up onto her face from below`. 위에서 내려오면 계시가 된다
> 3. **연기와 불똥** — 축복에는 무언가가 타지 않는다
> 4. 네거티브에 `(benediction:1.5), (blessing:1.5), (warm golden glow:1.5), (light descending from above:1.5), holy halo, gentle light, kind expression`
>
> 손 소실 방지는 인페인트 5차에서 쓴 문구를 그대로 가져왔다 — 소매→팔뚝→손목→손 경로 명시 + 네거티브 `(sleeve with no hand:1.6), (arm ending without a hand:1.7)`.

```text
this one is a heretic, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, nobody else in the frame, a saintess candidate with pale blonde hair whose long heavy straight bangs fall completely over her eyes with only a faint golden glow seeping through, a blank expressionless face, lips closed, white and gold priestess vestments and a tall pointed white mitre, seen from the front at chest height, (she holds one bare hand out in front of her with the palm turned up and all five fingers spread wide apart:1.6), (the whole open hand clearly visible with each finger separated:1.5), the pale forearm coming out of a wide white and gold sleeve and continuing unbroken into the wrist and then into that open hand, holding nothing, (and hovering just above her open palm an intricate circular stigma sigil burns in the air:1.5), a brand mark of glowing red-hot lines searing bright red, its light thrown upward onto the underside of her fingers and up onto her face from below, thin white smoke curling up off the sigil, small orange sparks scattering from it, the red brand light being the only light in the scene, her other arm hanging down at her side, a dim stone cathedral at night behind her, cold black shadow everywhere the red light does not reach, a verdict about to be burned into someone
```

### 네거티브 프롬프트 v7

```text
(second person:1.5), two people, three people, kneeling figure, victim, bare shoulder, bare back, man, crowd, congregation, onlookers, duplicate character, (arm ending without a hand:1.7), (severed arm:1.6), (stump:1.6), (sleeve with no hand:1.6), (hand hidden:1.6), (no hand:1.6), hand out of view, missing hand, cropped hand, (closed fist:1.5), clenched hand, fist, gripping hand, curled fingers, fingers together, branding iron, hot iron, rod, stick, pole, staff, scepter, wand, torch, candle, handle, grip, tool, weapon, held object, object in hand, orb, ball, crystal, flower, book, (benediction:1.5), (blessing:1.5), blessing gesture, prayer, praying, worship, (warm golden glow:1.5), holy halo, golden halo, divine radiance, gentle light, soft warm light, (light descending from above:1.5), beam from the sky, sunbeam, kind expression, smiling, gentle smile, compassionate, serene comfort, tears, visible eyes, uncovered eyes, (shiny skin:1.4), (glossy skin:1.4), oiled skin, sweaty skin, specular highlight, subsurface scattering, soft airbrush shading, smooth gradient shading, glistening, sheen, gloss, blood, gore, wound, bright daylight, cheerful, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, six fingers, four fingers, fused fingers, extra limbs, extra arms, malformed face, photorealistic, 3d render
```
## 8. daisy_dispose — 메살리나: 데이지, 처리해

> 데이지가 같은 지역의 캐릭터에게 암습/처단을 진행한다.

### 이미지 생성 프롬프트 v2

```text
the imperial villainess gives her maid a quiet order, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, two women together in one scene, on the left an imperial villainess with long flowing blue hair, sharp alluring cat-like eyes and a wicked smirk, in a sheer white Roman-inspired silk dress with ornate gold jewelry reclines on a gilded couch and murmurs behind her raised hand with a wicked smirk, on the right a quiet young maid with brown hair in a neat bun and calm brown eyes, in a classic black and white victorian maid uniform with a small frilled headdress stands beside her with her head bowed in a small obedient nod, one hand hidden behind her back where a thin dark shadow curls around her fingers, an opulent palace chamber with warm golden bokeh behind them, an order given so softly that no one else hears it
```

### 네거티브 프롬프트 v2

```text
three people, four people, crowd, only one person, duplicate character, same face twice, maid smiling, visible knife, blood, corpse, bright daylight, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v3

> **데이지 단독 암습으로 변경.** 메살리나가 명령하는 2인 구도를 버리고
> 데이지가 실제로 처리하는 순간만 그린다.
> 대상은 카드마다 달라지므로 **얼굴 없는 검은 실루엣**으로 익명 처리한다
> (`male_lead` 계열과 같은 방식).
> `empty_eyes`(44,512 · 사전 키워드 "죽은 눈")를 명시했다 — 감정 없이 처리한다는 게 이 카드의 핵심이다.

```text
the maid carries out the order alone, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo focus, one clear character, a quiet young maid with brown hair neatly tied up in a bun, empty eyes, dead lifeless eyes with no light and no highlight in them, a completely expressionless face, lips pressed thin, not smiling, not sad, feeling nothing at all, in a classic black and white victorian maid uniform with a small frilled headdress, stands upright and perfectly composed in a dark palace corridor at night, her outstretched hand swallowed by black shadow magic, ragged black tendrils dripping from her fingers and streaming forward through the air, and at her feet in the dark a single anonymous figure rendered as a featureless black silhouette with no visible face and no identifying detail is collapsing away from the viewer, already going limp as the shadow closes around it, cold moonlight from a tall window cutting one hard pale shape across the stone floor, deep flat black shadows filling the rest of the corridor, an execution carried out quietly by someone who feels nothing about it
```

### 네거티브 프롬프트 v3

```text
blue hair, long flowing blue hair, roman dress, toga, gilded couch, reclining woman, imperial villainess, second woman, three people, four people, crowd, duplicate character, same face twice, two maids, visible face on the fallen figure, identifiable victim, recognizable character on the floor, maid smiling, smile, grin, smirk, crying, tears, angry face, sparkling eyes, eye highlights, catchlight, glittering eyes, wide open surprised eyes, blood, gore, wound, corpse, dismemberment, excessive blood, severed limb, bright daylight, warm golden light, cheerful, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v4

> **조용한 자상으로 변경.** v3 는 그림자를 뻗어 처형하는 연출이라 동작이 컸다.
> 뒤에서 입을 막고 갈비뼈 아래로 단검을 밀어 넣는, **소리가 안 나는 구도**로 바꿨다.
> 대상은 v3 과 같이 얼굴 없는 검은 실루엣으로 익명 처리한다.
>
> 눈은 `empty_eyes` 를 **뺐다.** 죽은 눈을 직접 지정하면 표정이 과하게 붕괴한다.
> `no highlight and no catchlight` + `soft dark shadow under and around her eyes` 만으로
> 충분히 데이지가 된다 — flat 블록의 `eye highlights, catchlight` 네거티브와도 방향이 같다.

```text
the maid does it quietly, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a quiet young maid with brown hair neatly tied up in a bun, her eyes flat and matte with no highlight and no catchlight in them, a soft dark shadow settled under and around her eyes, calm lowered eyelids, a small composed face showing nothing at all, lips closed and relaxed, in a classic black and white victorian maid uniform with a small frilled headdress, stands close behind an anonymous figure rendered as a featureless black silhouette with no visible face and no identifying detail, one hand clamped gently over the silhouette's mouth from behind to keep it silent, the other hand pressing a slender thin dagger in low under its ribs in one small quiet motion, her arms relaxed and unhurried, no struggle, the silhouette already going slack against her, thin wisps of black shadow magic curling around her wrists and muffling the sound, a dark palace corridor at night, cold moonlight from a tall window laying one hard pale shape across the stone floor, deep flat black shadows everywhere else, a killing done so quietly that the room never knew
```

### 네거티브 프롬프트 v4

```text
blue hair, long flowing blue hair, roman dress, toga, gilded couch, reclining woman, imperial villainess, second woman, three people, four people, crowd, duplicate character, same face twice, two maids, visible face on the victim, identifiable victim, recognizable character, struggle, thrashing, violent motion, action lines, dramatic pose, big swing, raised weapon, screaming, open mouth, shouting, maid smiling, smile, grin, smirk, crying, tears, angry face, gritted teeth, sparkling eyes, eye highlights, catchlight, glittering eyes, glowing eyes, wide open eyes, blood, blood spray, gore, wound, corpse, dismemberment, excessive blood, severed limb, large sword, longsword, axe, gun, bright daylight, warm golden light, cheerful, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, extra arms, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v5

> **단검을 뺐다.** v4 는 칼이 온전히 드러나 "암기를 쓴 자객"으로 읽혔다.
> 데이지의 무기는 어둠이므로, **한 손이 손목까지 검게 물들고 손가락이 어둠에 의해
> 하나의 뾰족한 끝으로 뽑혀 나온 형태**로 바꿨다. 그 손을 상대의 **목 옆에** 꽂는다.
> 반대 손은 v4 그대로 입을 막는다.
>
> 눈은 v4 의 `calm lowered eyelids` 가 **완전히 감기는 쪽으로 새서** 안광 없는 눈이
> 아예 안 보였다. `open but half-lidded` 로 바꾸고 네거티브에 `closed eyes, eyes shut` 을 넣었다.
>
> 네거티브의 `dagger, knife, blade, steel` 는 **금속 날붙이만** 겨냥한다.
> 포지티브의 `a blade grown out of her own hand` 는 어둠으로 만든 것이라 살아남아야 한다.

```text
the maid does it with her bare hand, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a quiet young maid with brown hair neatly tied up in a bun, her eyes open but half-lidded and flat and matte with no highlight and no catchlight in them, a soft dark shadow settled under and around her eyes, a small composed face showing nothing at all, lips closed and relaxed, in a classic black and white victorian maid uniform with a small frilled headdress, stands close behind an anonymous figure rendered as a featureless black silhouette with no visible face and no identifying detail, one of her hands is stained black to the wrist by shadow magic, the black creeping up her forearm, her fingers pressed together and drawn out by the darkness into a single long sharp black point like a blade grown out of her own hand, and she drives that sharpened black hand straight into the side of the silhouette's neck, her wrist buried to the knuckles, in one small quiet motion, her other hand resting flat over the silhouette's mouth from behind to keep it silent, her arms relaxed and unhurried, no struggle, the silhouette already going slack against her, thin wisps of black shadow curling off her buried wrist, a dark palace corridor at night, cold moonlight from a tall window laying one hard pale shape across the stone floor, deep flat black shadows everywhere else, a killing done so quietly that the room never knew
```

### 네거티브 프롬프트 v5

```text
dagger, knife, blade, sword, longsword, weapon, held weapon, metal blade, steel, sharp metal object, scissors, needle, blue hair, long flowing blue hair, roman dress, toga, gilded couch, reclining woman, imperial villainess, second woman, three people, four people, crowd, duplicate character, same face twice, two maids, visible face on the victim, identifiable victim, recognizable character, struggle, thrashing, violent motion, action lines, dramatic pose, big swing, raised arm, screaming, open mouth, shouting, closed eyes, eyes shut, sleeping, maid smiling, smile, grin, smirk, crying, tears, angry face, gritted teeth, sparkling eyes, eye highlights, catchlight, glittering eyes, glowing eyes, wide open eyes, blood, blood spray, gore, wound, corpse, dismemberment, excessive blood, severed limb, severed hand, missing hand, bright daylight, warm golden light, cheerful, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, extra arms, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v6

> **v5 는 손이 꽂히지 않고 얹혀만 나왔다.** 원인이 둘이었다.
>
> 1. `fingers pressed together` 라 **손가락이 남아서** 어둠이 얼룩으로만 묻었다
>    → 손을 아예 없앤다. `her arm ends not in a hand but in a long tapering spike of solid black shadow`
> 2. **"꽂혔는데 상처는 없다"가 모델에게 모순**이라 안전한 쪽(얹은 손)으로 도망쳤다.
>    `blood, wound, gore` 를 강하게 걸어둔 것과 정면으로 부딪혔다
>    → 상대가 **검은 실루엣**인 이점을 쓴다. 상해가 아니라 **잠기는 것**으로 재규정하면
>    상처를 그릴 필요 자체가 사라진다 —
>    `sinking the way a blade sinks into dark water, the black of her arm and the black of its neck
>    flowing together so that no edge or seam can be seen between them`
>
> 네거티브에 `intact hand on the shadow arm`, `normal hand touching the neck`,
> `hand resting on the neck`, `black paint smeared on skin` 을 넣어 v5 의 실패형을 직접 막았다.

```text
the maid does it with her bare hand, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a quiet young maid with brown hair neatly tied up in a bun, her eyes open but half-lidded and flat and matte with no highlight and no catchlight in them, a soft dark shadow settled under and around her eyes, a small composed face showing nothing at all, lips closed and relaxed, in a classic black and white victorian maid uniform with a small frilled headdress, stands close behind an anonymous figure rendered as a featureless solid black silhouette with no visible face and no identifying detail, one of her arms ends not in a hand but in a long smooth tapering spike of solid black shadow, her fingers already gone, swallowed and reshaped into one clean sharp black point, the black running back up her wrist and forearm in hard flat edges, and that black spike is sunk deep into the side of the silhouette's neck, buried past her wrist, sinking in the way a blade sinks into dark water, the black of her arm and the black of its neck flowing together where they meet so that no edge or seam can be seen between them, her other hand resting flat over the silhouette's mouth from behind to keep it silent, her shoulders relaxed and unhurried, no struggle, the silhouette already going slack against her, thin wisps of black shadow curling up from where the spike went in, a dark palace corridor at night, cold moonlight from a tall window laying one hard pale shape across the stone floor, deep flat black shadows everywhere else, a killing done so quietly that the room never knew
```

### 네거티브 프롬프트 v6

```text
dagger, knife, blade, sword, longsword, weapon, held weapon, metal blade, steel, sharp metal object, scissors, needle, intact hand on the shadow arm, five fingers on the shadow arm, normal hand touching the neck, hand resting on the neck, palm on the neck, hand on the shoulder, gentle touch, caress, black paint smeared on skin, stain on the hand, glove, blue hair, long flowing blue hair, roman dress, toga, gilded couch, reclining woman, imperial villainess, second woman, three people, four people, crowd, duplicate character, same face twice, two maids, visible face on the victim, identifiable victim, recognizable character, struggle, thrashing, violent motion, action lines, dramatic pose, big swing, raised arm, screaming, open mouth, shouting, closed eyes, eyes shut, sleeping, maid smiling, smile, grin, smirk, crying, tears, angry face, gritted teeth, sparkling eyes, eye highlights, catchlight, glittering eyes, glowing eyes, wide open eyes, blood, blood spray, gore, wound, torn flesh, corpse, dismemberment, excessive blood, bright daylight, warm golden light, cheerful, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, extra arms, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v7

> **찌르는 순간을 포기하고 사후 컷으로 바꿨다.** v3~v6 + 인페인트 3회까지 '손을 목에 꽂는' 장면은 끝내 안 나왔다. 이 모델은 손을 지우지도, 관통을 그리지도 못한다.
>
> 대신 **이미 끝내고 갈무리하며 돌아가는 순간**을 그린다. 바닥에 쓰러진 익명 실루엣은 이미 정지해 있고, 데이지는 소매로 그림자를 거둬들이며 앞치마를 펴고 걸어 나온다.
> 이쪽이 오히려 캐릭터에 맞는다 — **행위가 아니라 무심함**이 이 카드의 핵심이기 때문이다.
> 네거티브에 `stabbing, mid-attack, standing over the body, crouching` 을 넣어 다시 행위 장면으로 끌려가는 것을 막고, `guilty face, remorse` 로 죄책감 표정도 막았다.

```text
the maid walks back after it is done, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a quiet young maid with brown hair neatly tied up in a bun, her eyes open but half-lidded and flat and matte with no highlight and no catchlight in them, a soft dark shadow settled under and around her eyes, a small composed face showing nothing at all, lips closed and relaxed, in a classic black and white victorian maid uniform with a small frilled headdress, she is already walking away from the scene toward the viewer, unhurried, her posture straight and her shoulders level, one hand lifted at her waist as she calmly draws the last black shadow back into her sleeve, the darkness peeling off her fingers in thin ribbons and shrinking away, her other hand smoothing her apron flat, and behind her on the stone floor an anonymous figure rendered as a featureless black silhouette with no visible face and no identifying detail lies crumpled and completely still, one of its arms flung out, already finished, a dark palace corridor at night, cold moonlight from a tall window laying one hard pale shape across the stone floor around the fallen figure, deep flat black shadows everywhere else, a task completed and tidied up, work that is simply over
```

### 네거티브 프롬프트 v7

```text
stabbing, mid-attack, attacking, striking, lunging, reaching toward the body, touching the body, holding the body, standing over the body, crouching, kneeling, dagger, knife, blade, sword, weapon, metal blade, steel, the fallen figure standing, the fallen figure moving, the fallen figure sitting up, two standing people, visible face on the fallen figure, identifiable victim, recognizable character, blue hair, roman dress, imperial villainess, second woman, three people, crowd, duplicate character, same face twice, two maids, running, fleeing, hurried, panicked, looking back over her shoulder, turning around, screaming, open mouth, shouting, closed eyes, eyes shut, sleeping, maid smiling, smile, grin, smirk, crying, tears, angry face, gritted teeth, guilty face, remorse, sparkling eyes, eye highlights, catchlight, glittering eyes, glowing eyes, wide open eyes, blood, blood spray, blood pool, gore, wound, corpse detail, dismemberment, excessive blood, bright daylight, warm golden light, cheerful, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, extra arms, malformed face, photorealistic, 3d render
```

## 9. pirate_purge — 제국의 해적소탕령

> 그레이스가 동부 해역에 있다면 두근! 포인트를 1 잃는다.

### 이미지 생성 프롬프트 v2

```text
the empire declares a purge of pirates, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a seascape at dusk, in the foreground a flamboyant female pirate captain with short curly red bob hair and a prominent golden monocle over one eye, smirking, in an ornate gold-trimmed captain coat stands braced at the helm of her ship looking back over her shoulder with her coat and hair snapping in the wind, and behind her a line of tall imperial warships with white sails and gold eagle banners closes in through the spray, cannon smoke drifting low over the swell, heavy grey clouds breaking with red sunset light on the water, the moment before a chase becomes a battle
```

### 네거티브 프롬프트 v2

```text
calm water, harbor, docked ships, modern ship, steamship, only ships and no person, cheerful crew, party, treasure chest, gore, sinking wreck in flames, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v3

> **그레이스가 당하는 장면으로 변경.** 포격으로 배가 가라앉고,
> 그레이스는 분해하는 표정. 이전에는 추격 직전의 여유로운 구도였다.

```text
the imperial purge catches the pirate captain, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, a flamboyant female pirate captain with short curly red bob hair, yellow amber eyes and a prominent golden monocle over one eye, in a gold-trimmed captain coat, stands on the steeply tilting deck of her own burning ship as it goes down, gripping a broken rail to stay upright, teeth bared and face twisted in furious frustration, her hat gone and her coat torn, the mast snapped and sails on fire behind her, cannon shot tearing through the hull and seawater flooding across the deck, imperial warships firing from the smoke in the far distance, dusk sea and heavy grey clouds, the moment a legend is being sunk
```

### 네거티브 프롬프트 v3

```text
smirking, confident smile, calm, unharmed ship, intact ship, standing proudly at the helm, chase, sailing, victory, crowd of sailors, 2girls, multiple girls,
calm water, harbor, docked ships, modern ship, steamship, only ships and no person, cheerful crew, party, treasure chest, gore, sinking wreck in flames, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

## 10. marie_hunt — 로욱시나: 도망자 마리를 찾아

> 마리가 서부에 있다면 능력 카드를 전부 잃거나 두근! 포인트를 1 잃는다.

### 이미지 생성 프롬프트 v2

```text
the queen sends hunters after the fugitive, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a languid villainess queen with voluminous curly crimson red hair and bored half-lidded arrogant eyes, a small golden crown with a single red gem, in a desert-kingdom royal dress with translucent silk veils sits sideways on her throne in the foreground holding up a torn wanted poster between two fingers with a bored half-lidded look, and the poster clearly shows a crude drawing of a red and green haired woman's face, behind her two armored soldiers in desert cloaks are already turning to leave through a tall archway into the night, warm sand-colored torchlight and deep red drapery, a hunt beginning as an afterthought
```

### 네거티브 프롬프트 v2

```text
the fugitive herself present, red and green haired woman standing in the room, three women, crowd, smiling queen, standing queen, empty poster, blank paper, modern poster, gore, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v3

> **도망치는 마리로 변경.** 로욱시나가 사냥꾼을 보내는 장면이 아니라
> 쫓기는 마리 본인을 그린다.

```text
the fugitive poisoner flees, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, an eerie female poison master with wild red and green two-tone hair and hollow empty eye sockets with no eyeballs at all, only depthless black voids where her eyes should be, a thin unnerving smile still on her face, in a dark alchemist robe with a few small glass vials at her belt, runs hard through a night alley clutching her robe closed, twisting to look back over her shoulder as she flees, torchlight and long searching shadows spilling in from behind her, a torn wanted poster with her face on it peeling off the wall she is passing, breathless flight in the dark
```

### 네거티브 프롬프트 v3

```text
throne, queen, crimson hair woman, crown, soldiers, guards, armored men, standing still, calm pose, sitting, indoors palace, visible eyeballs, eye whites, pupils, 2girls, multiple girls,
the fugitive herself present, red and green haired woman standing in the room, three women, crowd, smiling queen, standing queen, empty poster, blank paper, modern poster, gore, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

## 11. male_lead — 앗, 남주다!

> 가장 가까운 남주의 조우 토큰을 획득한다. (어느 남주인지 가변)

### 이미지 생성 프롬프트 v2

```text
a male lead appears and every eye turns, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a tall young nobleman in a dark ornate military-style coat with a high collar walks toward the viewer down a sunlit colonnade, seen fully backlit so that he reads as a striking dark silhouette with his face left unlit and unreadable, no single feature identifying which man he is, his coat and hair edged with a bright rim of light, a scatter of blurred onlookers at the sides caught mid-turn toward him, dust and petals hanging in the light beams, the hush of an entrance
```

### 네거티브 프롬프트 v2

```text
identifiable face, clear facial features, visible eye color, close-up of face, woman, female protagonist, two men, crowd of men, casual clothes, modern clothing, indoors at night, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

### 이미지 생성 프롬프트 v3

> **남주 실루엣 단독.** 주변 인물을 전부 뺐다.

```text
a male lead appears, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, a tall young nobleman in a dark ornate military-style coat with a high collar walks toward the viewer, seen fully backlit so that he reads as a striking dark silhouette with his face left unlit and unreadable, no single feature identifying which man he is, his coat and hair edged with a bright rim of light, standing alone with nothing else in the frame, dust motes hanging in the light beams, plain bright glare behind him, the hush of an entrance
```

### 네거티브 프롬프트 v3

```text
onlookers, crowd, background figures, students, people at the sides, colonnade, detailed background, scenery, visible face, lit face, clear facial features, 2boys, multiple boys, woman, girl,
identifiable face, clear facial features, visible eye color, close-up of face, woman, female protagonist, two men, crowd of men, casual clothes, modern clothing, indoors at night, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

## 12. jeanne_arrival — 주인공, 잔느 등장!

> 잔느가 모든 플레이어들을 조우한다.

### 이미지 생성 프롬프트

```text
the heroine makes her entrance and greets everyone, romance fantasy webnovel card illustration, detailed anime style, a young girl with soft pink short bob hair and big clear pink eyes wearing a modest neat academy uniform standing in a sunlit academy courtyard with one hand raised in a bright innocent wave, several other students around her turned toward her and rendered as soft shadowed background figures with unreadable faces, petals drifting in the light, a faint holy glow around her, warm hopeful atmosphere with a hint of unease in the onlookers, square composition, high detail, no text, no watermark
```

### 네거티브 프롬프트

```text
armor, weapons, sword, shield, dark hair, blonde hair, red hair, long hair, ornate jewelry, revealing outfit, mature seductive expression, villainess vibe, gore, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

### 이미지 생성 프롬프트 v2

```text
the heroine makes her entrance and greets everyone, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a young girl with soft pink short bob hair and big clear pink eyes wearing a modest neat academy uniform, no armor and no weapons, she stands in a sunlit academy courtyard with one hand raised in a bright innocent wave and a shy warm smile, several other students around her turned toward her and rendered as soft shadowed background figures with unreadable faces, petals drifting through the light, a faint holy glow clinging to her, warm and hopeful with a thread of unease in the onlookers
```

### 네거티브 프롬프트 v2

```text
armor, weapons, sword, shield, dark hair, blonde hair, red hair, long hair, ornate jewelry, revealing outfit, mature seductive expression, villainess vibe, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```



---

### 이미지 생성 프롬프트 v3

> **등장 연출로 변경.** 학생들 사이에서 인사하는 게 아니라 "짠!" 하고 나타나는 느낌.
> 배경은 비운다 — 인물에 집중시키기 위해서다. 주변 인물도 전부 뺐다.

```text
the heroine bursts into the scene, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, a young girl with soft pink short bob hair and big clear pink eyes wearing a modest neat academy uniform strikes a bright confident entrance pose facing the viewer, one arm flung out and the other hand at her waist, weight on one foot, chin up with a beaming triumphant smile, her hair and skirt still swinging from the motion, a burst of radial light and drifting petals exploding outward behind her, a faint holy glow clinging to her, plain simple background with nothing but the light burst, the pure ta-da moment of an entrance
```

### 네거티브 프롬프트 v3

```text
other people, students, crowd, background figures, onlookers, classroom, courtyard, detailed background, scenery, buildings, shy expression, timid, waving politely, armor, weapons, 2girls, multiple girls,
armor, weapons, sword, shield, dark hair, blonde hair, red hair, long hair, ornate jewelry, revealing outfit, mature seductive expression, villainess vibe, gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render
```

## v1 이력 (톤 확인용 시험분)

초반부 2종만 뽑아 톤을 봤던 초안. **두 장의 톤이 어긋나** v2 에서 공통 톤 조항을 도입했다.
(jeanne_arrival 은 밝고 반짝이는 쪽, commission 은 어둡고 회화적인 쪽으로 갈렸음)

---

# 중반부 덱 (16장)

> `scenario.md` 의 중반부 구성 — ① 메인 악녀 공세 4 · ② 운명의 만남 4(동일 카드) · ③ 운명의 강제력 5 · ④ 잔느 이벤트 3 = **13종 / 16장**.
> 인물 외모는 전부 **확정된 채택본 기준**으로 적었다.
> 여러 명이 나오는 카드는 `on the left / on the right` 로 위치를 못박아 뒤섞이지 않게 한다.

## 13. jezebel_ritual — 이제벨의 벨제붑 강림 의식 — 북부 (1장)

### 이미지 생성 프롬프트

```text
the witch calls down her demon, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, a demon-worshipping witch with long wild disheveled black hair streaked with vivid red, thick white bandages fully wrapped over her eyes, an ecstatic mad grin, tattered black priestess robes with torn streaming sleeves, stands at the center of a dark northern cult hall with both arms flung wide and her head tipped back in ecstasy, a vast swarm of black flies boiling out of the darkness above her and spiralling down around her, the swarm thickening into the shape of something enormous just beyond sight, stone pillars and crimson backlight, a summoning at its peak
```

### 네거티브 프롬프트

```text
2girls, multiple girls, altar, candles, glowing runes, visible eyes, neat tidy hair,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

## 14. messalina_feast — 메살리나의 어둠 연회 — 동부 (1장)

### 이미지 생성 프롬프트

```text
the empress holds her dark banquet, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a bewitchingly seductive imperial villainess with long flowing blue hair, blue eyes, jeweled hair chains, a sheer white silk gown and ornate gold jewelry, a wicked mischievous smirk, reclines on a wide canopy bed in an opulent eastern palace holding up a golden goblet, smirking down at a scatter of ornate charm cards fanned across the sheets in front of her, several shadowed hands reaching in from the edges of the frame offering more cards to her, tall stone pillars, heavy gold curtains and glowing braziers behind, everything being taken with a smile
```

### 네거티브 프롬프트

```text
2girls, recognizable second face, standing, outdoors,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **플레이어 캐릭터들이 마스커레이드 가면을 쓰고 참가.** 인물을 특정하지 않고 '가면 쓴 손님들'로 두는 편이 카드 재사용에 유리하다. 퇴폐적 분위기를 위해 밝고 건전한 연회를 네거티브로 막았다.

```text
the masquerade banquet, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a dark decadent masquerade banquet seen from inside the crowd, several elegantly dressed guests wearing ornate masquerade eye masks of gold and black filigree, faces half hidden, leaning close to one another, laughing without sound, wine glasses raised and tilted, one guest reaching for another's mask, in the middle of them a bewitchingly seductive imperial villainess with long flowing blue hair, sharp alluring cat-like blue eyes and a wicked smirk, a sheer white roman silk dress with ornate gold jewelry, wearing a gold filigree masquerade eye mask of her own, reclining back on a low couch, one arm draped along its back, presiding over the room, heavy dark red drapery, guttering candelabra, spilled wine, dark polished floor, deep shadows swallowing the edges of the room, thick warm gloom, a beautiful party that is not safe to be at
```

### 네거티브 프롬프트 v2

```text
bright cheerful party, daylight, clean tidy hall, wholesome celebration, children, cute mascot, no masks, bare faces, everyone unmasked, empty room, only one person, nude, topless, explicit, gore, blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v3

> **남자 손님들을 서브빌런들로 교체.** 메살리나가 주재하고 루크레치아·샬롯·로욱시나·그레이스가 함께 있다. 가면이 눈만 가리므로 **머리 모양과 드레스로 식별**된다 — 그래서 가면을 `eye mask` 로 한정했다. 네거티브에 `men, man, male, suit, tuxedo` 를 넣어 남자가 다시 들어오는 것을 막았다.

```text
the villainesses at the masquerade, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a dark decadent masquerade banquet, five villainesses gathered together in one room, every one of them wearing an ornate masquerade eye mask of gold and black filigree so their eyes are hidden while their hair and dress stay fully readable, at the center reclining back on a low couch and presiding over the room, a bewitchingly seductive imperial villainess with long flowing blue hair and sharp alluring cat-like blue eyes, a sheer white roman silk dress with ornate gold jewelry, beside her leaning in with her fan half raised, a cold-blooded noble villainess with golden blonde vertical drill curls and narrow half-closed icy blue eyes, a pale violet lace gown, holding an ornate jeweled folding fan, standing behind them with her chin lifted, a haughty young noble lady with bright golden blonde hair in twin rolled bun curls and clear blue eyes, an elegant pastel noble dress with modest ribbons, seated to one side with her legs crossed and a goblet held loosely, a languid villainess with long voluminous curly crimson hair and a tiny tilted gold mini crown, a white silk gown with gold and red trim, and at the edge of the group with one boot up on a chair, a flamboyant pirate captain with short curly red bob hair and a golden monocle, a gold-trimmed captain coat, no men anywhere in the room, only these women, heavy dark red drapery, guttering candelabra, spilled wine, dark polished floor, deep shadows swallowing the edges of the room, thick warm gloom, a beautiful party that is not safe to be at
```

### 네거티브 프롬프트 v3

```text
men, man, male, gentleman, male guest, suit, tuxedo, male silhouette, no masks, bare faces, everyone unmasked, bright cheerful party, daylight, clean tidy hall, wholesome celebration, children, cute mascot, empty room, only one person, nude, topless, explicit, gore, blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v4

> **군중을 전부 없앴다.** 5인 구성에서 가면을 1명만 쓰는 실패가 났고, 그 전에는 남자 손님이 계속 들어왔다. 인원이 늘수록 개별 속성 지시가 희석된다.
> **샬롯 단독 + 칠흑**으로 간다. 촛대 하나가 발밑에만 작은 빛웅덩이를 만들고 나머지는 완전한 어둠이다. 군중을 안 그리는 것이 오히려 이 카드를 무섭게 만든다 — 어둠 속에 뭐가 있는지 모른다.
> 네거티브에 `people in the background, figures in the shadows, silhouettes of people` 까지 넣어 배경에 인영이 남는 것을 막았다.

```text
the masquerade she should not have come to, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, nobody else anywhere in the frame, a haughty young noble lady with bright golden blonde hair in twin rolled bun curls and clear blue eyes, an elegant pastel noble dress with modest ribbons, wearing an ornate gold and black filigree masquerade eye mask over her eyes, standing alone in the middle of a vast pitch-dark banquet hall, small in the frame, holding a single thin wine glass close to her chest with both hands, her chin lifted in forced composure but her shoulders drawn in, the whole room around her swallowed by heavy blackness with no other guests and no crowd at all, one lone candelabrum burning near her throwing a small pool of warm light around her feet and leaving everything beyond it in total darkness, the dim suggestion of a long empty banquet table and heavy dark red drapery at the edge of the light, an overturned goblet and a dark stain on the cloth, the darkness pressing in from every side, a party with no one else in it
```

### 네거티브 프롬프트 v4

```text
men, man, male, gentleman, male guest, suit, tuxedo, male silhouette, second person, two people, three people, four people, five people, group, crowd, guests, people in the background, figures in the shadows, silhouettes of people, party crowd, blue hair, roman dress, imperial villainess, drill curls, folding fan, crimson hair, mini crown, bright cheerful party, daylight, well lit hall, wholesome celebration, nude, topless, explicit, gore, blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v5

> **샬롯 → 메살리나.** 이 카드는 메살리나의 연회이므로 주재자가 메살리나여야 맞다.
> 샬롯일 때는 `forced composure` 로 위축을 노렸지만 안 먹었다. 메살리나는 반대로 **완전히 편안한 자세**(소파에 기대고 팔을 등받이에 걸침)로 간다 — 이쪽이 캐릭터에 맞고 표정 지시도 단순해진다.
> 네거티브에 샬롯 특징(`golden blonde hair, twin rolled buns, pastel dress`)을 넣어 이전 버전이 섞이지 않게 했다. 군중 차단은 v4 그대로 유지.

```text
the masquerade she presides over alone, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, nobody else anywhere in the frame, a bewitchingly seductive imperial villainess with long flowing blue hair and sharp alluring cat-like blue eyes, a sheer white roman-inspired silk dress with ornate gold jewelry and gold armlets, wearing an ornate gold and black filigree masquerade eye mask over her eyes, reclining back on a low couch in the middle of a vast pitch-dark banquet hall, one arm draped along the couch back and a thin wine glass held loosely in her other hand, her chin tipped up and a slow knowing smile beneath the mask, entirely at ease, the whole room around her swallowed by heavy blackness with no other guests and no crowd at all, one lone candelabrum burning beside the couch throwing a small pool of warm light around her and leaving everything beyond it in total darkness, the dim suggestion of a long empty banquet table and heavy dark red drapery at the edge of the light, an overturned goblet and a dark stain on the cloth, the darkness pressing in from every side, the only one who belongs at a party with no one else in it
```

### 네거티브 프롬프트 v5

```text
golden blonde hair, twin rolled buns, drill curls, pastel dress, blue eyes on a blonde girl, charlotte, young noble girl, men, man, male, gentleman, male guest, suit, tuxedo, male silhouette, second person, two people, three people, group, crowd, guests, people in the background, figures in the shadows, silhouettes of people, party crowd, standing, nervous, timid, shrinking, frightened, bright cheerful party, daylight, well lit hall, wholesome celebration, nude, topless, explicit, gore, blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 15. lucrezia_poison — 루크레치아의 독배 — 남부 (1장)

### 이미지 생성 프롬프트

```text
the noble villainess offers the poisoned cup, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a cold-blooded noble villainess with golden blonde vertical drill curls, narrow half-closed icy blue eyes, a jeweled tiara ornament and a pale violet lace gown, holding an ornate jeweled folding fan, stands in a sunlit rose garden holding out a delicate goblet toward the viewer with a faint cruel smile, a single dark drop falling into the wine, her other hand still half-hidden behind her closed fan, pale roses and stone arches behind her, a courtesy that is already a death sentence
```

### 네거티브 프롬프트

```text
2girls, recognizable second face, poison vial in hand, skull imagery, indoors,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **연회장에서 웃는 루크레치아 + 쓰러지는 사람들.** 루크레치아만 멀쩡해야 하므로 `lucrezia collapsing, lucrezia drinking` 을 네거티브에 명시했다. 마리와 섞이지 않게 `two-tone hair, black eyes` 도 차단.

```text
the poisoned cup goes around, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a grand banquet hall at night, in the foreground on one side a cold-blooded noble villainess with golden blonde vertical drill curls and narrow half-closed icy blue eyes, a jeweled tiara ornament and a pale violet lace gown, holding an ornate jeweled folding fan, standing perfectly composed and untouched with a slow delighted smile behind her raised folding fan, her eyes narrowed with pleasure as she watches, and all across the hall behind her the banquet guests are collapsing, several richly dressed nobles clutching their throats and slumping sideways out of their chairs, one already sprawled face down across the long table, wine goblets tipped over and dark wine spreading across the white tablecloth, a chair overturned, scattered plates, warm candlelight from tall candelabra above a hall going silent, the only one still standing
```

### 네거티브 프롬프트 v2

```text
everyone healthy, cheerful party, dancing, celebration, guests smiling, lucrezia collapsing, lucrezia drinking, poison master falling, red and green two-tone hair, black eyes, alchemist robe, empty hall, no guests, only one person, blood, gore, vomit, corpses piled, dismemberment, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v3

> **독배 단독 클로즈업 + 배경에 흐릿한 루크레치아.** 쓰러지는 손님들을 전부 뺐다. `extreme close-up` + `completely out of focus` 로 심도를 강하게 갈랐다. 루크레치아가 앞으로 나오지 않도록 `lucrezia in the foreground, large figure` 를 막았다.

```text
the poisoned cup, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, extreme close-up of a single ornate goblet standing alone in sharp focus in the immediate foreground, filling the lower half of the frame, dark wine inside it with an unnatural faint green sheen curling across the surface, a few pale bubbles clinging to the rim, the metal chased with fine engraving and catching one hard highlight, and far behind it completely out of focus and softly blurred, a cold-blooded noble villainess with golden blonde vertical drill curls and narrow half-closed icy blue eyes, a pale violet lace gown, holding an ornate jeweled folding fan, standing in the blurred depths of a candlelit banquet hall and smiling slowly behind her raised fan, only her golden drill curls and the pale shape of her smile readable through the blur, warm candle bokeh scattered around her, the cup sharp and the poisoner soft, a drink that has already been decided
```

### 네거티브 프롬프트 v3

```text
sharp background, focused background, everything in focus, lucrezia in the foreground, large figure, person filling the frame, two goblets, many cups, crowd of guests, collapsing people, bodies, red and green two-tone hair, black eyes, alchemist robe, empty cup, overturned cup, spilled wine, blood, gore, skull, poison bottle, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 16. roxana_arena — 로욱시나의 투기장 초대장 — 서부 (1장)

### 이미지 생성 프롬프트

```text
the arena queen sends her invitation, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, a languid villainess with long voluminous curly crimson hair, narrowed crimson eyes and a faint contemptuous smirk, a tiny tilted gold mini crown perched on the right side of her head, a white silk gown with gold and red trim, sits on an ornate sandstone throne raised on a stone dais, seen from below, holding out a sealed invitation letter between two fingers with lazy contempt, chin raised, the sand-colored arena tiers and deep red banners blurred far below and behind her, a summons no one may refuse
```

### 네거티브 프롬프트

```text
2girls, standing, from above, eye level, large crown, tall crown,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **인물 없는 오브젝트 클로즈업으로 전환.** 뜯긴 초대장만 위에서 내려다본다. **하단의 서명이 가장 두드러져야** 하므로 본문은 `faint indistinct script`, 서명은 `single large flowing handwritten signature in dark red ink` 로 대비를 줬다. 문서형이라 글자 네거티브는 `large readable letters` 계열만 건다.

```text
the arena invitation, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, extreme close-up of a single opened letter lying alone on a dark wooden desk, seen from directly above, a stiff cream parchment invitation unfolded flat and filling almost the entire frame, its broken deep red wax seal stamped with a small crossed-swords arena crest lying beside it, the torn envelope pushed to one corner, a few short lines of faint indistinct formal script across the upper half of the parchment, and at the lower right a single large flowing handwritten signature in dark red ink, the signature clearly the most prominent mark on the page, warm low lamplight raking across the paper texture, deep shadow around the desk edges, a summons no one may refuse
```

### 네거티브 프롬프트 v2

```text
person, human, face, girl, woman, character, hands, fingers, holding, arena, crowd, stands, throne, large readable letters, big bold title text, modern printed font, typed text, blank paper, empty page, no signature, unsigned, cluttered desk, many objects, books, candles, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v3

> **서명을 빼고 붉은 인장으로 대체.** 인장 문양을 **콜로세움 외관 + 교차한 검투 무기**(글라디우스 + 삼지창)로 지정했다.
> 네거티브에 `signature, handwritten signature, autograph` 를 넣어 서명이 남지 않게 하고, `eagle, crown, cross emblem` 으로 다른 문장(폐태자의 편지·교회 문서)과 섞이지 않게 했다.

```text
the arena invitation, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, extreme close-up of a single opened letter lying alone on a dark wooden desk, seen from directly above, a stiff cream parchment invitation unfolded flat and filling almost the entire frame, a few short lines of faint indistinct formal script across the upper half, and at the lower centre of the parchment a large round deep red wax seal pressed into the paper, the wax seal stamped with the image of a great oval colosseum amphitheatre seen from outside with its tiers of arches running around it, and crossed gladiator weapons over it, a short curved gladius sword crossed with a trident, the colosseum and the crossed weapons deeply impressed and clearly readable in the red wax, the torn envelope pushed to one corner, warm low lamplight raking across the paper texture, deep shadow around the desk edges, a summons no one may refuse
```

### 네거티브 프롬프트 v3

```text
signature, handwritten signature, name written, autograph, ink signature at the bottom, blank seal, plain seal, featureless wax, smooth wax, unstamped seal, cross emblem, religious symbol, eagle, crown, flower, star, skull, person, human, face, girl, woman, character, hands, fingers, holding, arena interior, crowd, stands, throne, large readable letters, big bold title text, modern printed font, cluttered desk, many objects, books, candles, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v4

> **두 가지를 분리했다.** v3 는 콜로세움이 붉은 인장 안으로 들어가 뭉쳤다.
> - **편지 내용** = 종이 위에 직접 그린 **연필 스케치**. `light graphite line drawing`, `thin grey pencil strokes with visible construction lines`, `no color in the sketch at all`
> - **인장** = 붉은 밀랍에 **교차한 검 두 자루만**. `(exactly two crossed swords and nothing else:1.5)`
> 네거티브로 서로 침범을 막았다 — `(colosseum in the seal:1.6)`, `(building in the seal:1.5)`, `red drawing, colored drawing`. 검 개수도 `three swords, one sword` 로 고정.

```text
the arena invitation, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, extreme close-up of a single opened letter lying alone on a dark wooden desk, seen from directly above, a stiff cream parchment invitation unfolded flat and filling almost the entire frame, in the upper half a small delicate pencil sketch drawn directly on the parchment, a light graphite line drawing of an oval colosseum amphitheatre with its tiers of arches, drawn in thin grey pencil strokes with visible construction lines and light hatching, unfinished and hand-drawn, no color in the sketch at all, a few short lines of faint indistinct handwritten script beside it, and at the lower centre of the parchment a large round deep red wax seal pressed into the paper, (the wax seal stamped with exactly two crossed swords and nothing else:1.5), two straight blades crossing in an X with their hilts at the bottom, the crossed swords deeply impressed and clearly readable in the red wax, the torn envelope pushed to one corner, warm low lamplight raking across the paper texture, deep shadow around the desk edges, a summons no one may refuse
```

### 네거티브 프롬프트 v4

```text
(colosseum in the seal:1.6), (building in the seal:1.5), amphitheatre in the wax, arches in the seal, architecture in the seal, trident, spear, axe, shield, helmet, three swords, one sword, red drawing, colored drawing, red illustration, painted illustration, ink illustration, signature, handwritten signature, autograph, blank seal, plain seal, featureless wax, unstamped seal, cross emblem, religious symbol, eagle, crown, flower, star, skull, person, human, face, girl, woman, character, hands, fingers, holding, arena interior, crowd, stands, throne, large readable letters, big bold title text, modern printed font, cluttered desk, many objects, books, candles, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 17. fated_meeting — 운명의 만남 (4장, 동일 카드)

### 이미지 생성 프롬프트

```text
the heroine is betrothed, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a young girl with soft pink short bob hair and big clear pink eyes in a modest neat academy uniform, no armor and no weapons, stands in warm light with her hands clasped by a tall young nobleman seen only as a dark backlit silhouette with his face unlit and unreadable, no single feature identifying which man he is, a ring of soft petals and light around the two of them, her shy warm smile lit from the side, plain bright glare behind them, a bond being fixed by fate rather than by choice
```

### 네거티브 프롬프트

```text
visible face on the man, clear male facial features, crowd, onlookers, wedding dress, armor,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

## 18. discard_pawn — 버리는 패는 누구? (1장)

### 이미지 생성 프롬프트

```text
which piece gets discarded, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, three women caught in a standoff inside a dim southern cathedral, on the left a stoic church executioner with long loose brown hair and deep copper tanned skin, a plain silver half-mask covering only the upper right quarter of her face over her right eye and temple and stopping above her cheekbone with her nose and mouth and entire left half bare, small live flames along the mask edge, a cross pendant at the center of her chest, a white knight coat, in the middle a saintess candidate with pale blonde hair whose long heavy straight bangs fall completely over her eyes with only a faint golden glow seeping through, a blank expressionless face, white and gold priestess vestments and a tall pointed white mitre, on the right a cold-blooded noble villainess with golden blonde vertical drill curls, narrow half-closed icy blue eyes, a jeweled tiara ornament and a pale violet lace gown, holding an ornate jeweled folding fan, all three turned toward one another in a tense triangle with none of them touching, cold light from tall narrow windows cutting between them, long shadows crossing on the stone floor, an alliance about to spend one of its own
```

### 네거티브 프롬프트

```text
fighting, weapons drawn, blood, crowd, smiling, mouth mask, mask over mouth,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **제노비아 vs 이레네 정면 충돌로 변경.** 3인 대치를 버렸다. 제노비아는 **뒷모습**(검을 내리치는 쪽), 이레네는 **메이스로 받아내며 신성력**을 터뜨린다. 루크레치아는 네거티브로 배제했다.

```text
which piece gets discarded, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, two women fighting each other head-on in a dim southern cathedral, in the foreground seen from behind and slightly to the side, a stoic female church executioner with long loose brown hair and deep copper tanned skin, a plain silver half-mask covering only the upper right quarter of her face over her right eye and temple and stopping above her cheekbone with her nose and mouth and entire left half bare, small live flames along the mask edge, a cross pendant at the center of her chest, a white knight coat over a dark uniform, her back to the viewer, swinging a straight longsword down hard in both hands, her white coat and long brown hair flaring with the motion, and facing her across the nave, a saintess candidate with pale blonde hair whose long heavy straight bangs fall completely over her eyes with only a faint golden glow seeping through, a blank expressionless face, white and gold priestess vestments and a tall pointed white mitre, bracing a heavy ornate flanged mace in both hands to catch the blade, a bright ring of holy golden light flaring out from the mace head at the point of impact, golden sparks and shockwave rings spreading between them, cold light from tall narrow windows, long shadows crossing the stone floor, two allies turning their weapons on each other
```

### 네거티브 프롬프트 v2

```text
third person, three people, crowd, bystanders, drill curls, folding fan, pale violet gown, noble lady, executioner facing the viewer, front view of the executioner, visible executioner face, friendly, standing calmly, talking, no weapons, mouth mask, mask over mouth, full face mask, mask strap, head strap, blood, gore, severed limb, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v3

> **v2 는 제노비아가 둘로 복제됐다.** 두 인물을 같은 크기로 마주 세운 것이 원인이다 — 이 모델은 대칭 대치에서 한쪽을 복제한다. 게다가 `뒷모습`과 `정면`을 한 축에 두면 둘을 같은 인물의 앞뒤로 착각한다.
>
> v3 는 **over-the-shoulder 비대칭**으로 간다. 제노비아는 전경에 화면 절반을 채울 만큼 크게, 이레네는 중경에 작게 둔다. 크기가 다르면 복제가 안 생긴다.
> 둘 다 흰옷이라 구분이 안 되던 문제는 **명암으로 갈랐다** — 제노비아는 역광 실루엣(어둡게), 이레네는 메이스에서 터지는 황금빛으로 완전히 밝게. 그 빛이 제노비아의 윤곽을 뒤에서 훑어 두 사람이 한 광원으로 묶인다.
> 네거티브에 `two executioners`, `mirrored pose`, `both figures the same size`, `two white coats` 로 v2 의 실패형을 직접 막았다.

```text
which piece gets discarded, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, an over-the-shoulder view from close behind one fighter, the two women are very different sizes in the frame and are never mirrored, filling the whole left half of the frame in the immediate foreground and seen from directly behind, the broad back of a tall church executioner, her long loose brown hair falling down her back, her white knight coat and dark uniform thrown almost entirely into black shadow so that she reads as a dark backlit shape, no face visible at all, only the back of her head, her arms raised as she swings a straight longsword down and away from the viewer, and far beyond her in the middle distance, small and fully lit, a saintess candidate with pale blonde hair whose long heavy straight bangs fall completely over her eyes, a blank expressionless face, white and gold priestess vestments and a tall pointed white mitre, braced low with both hands on a heavy ornate flanged mace raised to catch the falling blade, a brilliant burst of holy golden light exploding outward from the mace head, the golden blast lighting the whole cathedral and rimming the dark executioner from behind, golden sparks and shockwave rings spreading between them, a dim southern cathedral, tall narrow windows, long shadows on the stone floor, two allies turning their weapons on each other
```

### 네거티브 프롬프트 v3

```text
two executioners, two knights, two brown-haired women, mirrored pose, symmetrical composition, both figures the same size, both figures facing each other at the same distance, duplicate character, same character twice, clone, twins, same outfit twice, two white coats, two silver masks, two swords, both holding swords, visible face on the foreground figure, front view of the foreground figure, foreground figure turning around, foreground figure looking at viewer, third person, three people, four people, crowd, bystanders, drill curls, folding fan, pale violet gown, noble lady, saintess standing idle, saintess without a mace, saintess holding a sword, mouth mask, mask over mouth, full face mask, mask strap, head strap, friendly, standing calmly, talking, no weapons, blood, gore, severed limb, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v4

> **v3 는 검이 프레임 밖으로 나가고 이레네가 무기를 머리 위로 들어올렸다.** 셋을 고쳤다.
> 1. 전경 인물을 화면 절반 → **좌측 1/3**로 줄이고 `the whole blade ... fully visible inside the frame` 로 검을 강제. 네거티브에 `sword out of frame, cropped sword, executioner filling the whole frame` 추가
> 2. **철퇴를 형태로 못박았다** — `a short thick blunt iron head studded with heavy ridged flanges on a stout haft, no blade and no point on it at all`. 네거티브에 `saintess holding a staff/scepter/cross/wand, mace with a blade`
> 3. 시전 포즈로 새지 않도록 `braced low with her knees bent`, `held out horizontally`, `metal locked against metal` 로 접촉을 명시하고 `mace raised overhead, arms straight up` 을 막았다

```text
which piece gets discarded, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, an over-the-shoulder view from behind one fighter, the two women are very different sizes in the frame and are never mirrored, in the left third of the frame in the foreground and seen from behind, the upper body of a stoic female church executioner with long loose brown hair and deep copper tanned skin, a plain silver half-mask covering only the upper right quarter of her face over her right eye and temple, small live flames along the mask edge, a white knight coat over a dark uniform, her back to the viewer, no face visible, only the back of her head, thrown into deep shadow so that she reads as a dark backlit shape, both her hands gripping the hilt of a long straight steel longsword which is fully visible inside the frame, the whole blade swung down and forward across the picture, and beyond her in the middle distance, smaller and fully lit, a saintess candidate with pale blonde hair whose long heavy straight bangs fall completely over her eyes with only a faint golden glow seeping through, a blank expressionless face, white and gold priestess vestments and a tall pointed white mitre, braced low with her knees bent and both hands choked up on the shaft of a heavy iron flanged mace, a short thick blunt iron head studded with heavy ridged flanges on a stout haft, no blade and no point on it at all, the mace held out horizontally in front of her so that the falling steel blade lands square on its iron head, metal locked against metal at the point of contact, a burst of holy golden light flaring out from where the two weapons meet and rimming the dark executioner from behind, golden sparks spreading between them, a dim southern cathedral, tall narrow windows, long shadows on the stone floor, two allies turning their weapons on each other
```

### 네거티브 프롬프트 v4

```text
saintess holding a sword, saintess holding a staff, saintess holding a scepter, saintess holding a cross, saintess with a wand, mace with a blade, bladed weapon on the saintess, thin delicate mace, mace raised overhead, weapon raised to the sky, arms straight up, executioner without a sword, empty handed executioner, sword out of frame, cropped sword, executioner filling the whole frame, extreme close-up of the foreground figure, back of head only, two executioners, two knights, two brown-haired women, mirrored pose, symmetrical composition, both figures the same size, duplicate character, same character twice, twins, two swords, visible face on the foreground figure, front view of the foreground figure, third person, three people, crowd, drill curls, folding fan, pale violet gown, mouth mask, mask over mouth, full face mask, mask strap, head strap, friendly, standing calmly, talking, no weapons, blood, gore, severed limb, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v5

> **여섯 번째다. 실패 이력을 정리하고 접근을 바꾼다.**
> - v2 — 제노비아가 둘로 복제됨 (대칭 대치)
> - v3 — 복제는 잡혔으나 전경 인물이 너무 크고 검이 프레임 밖
> - v4 — 철퇴·충돌은 잡혔으나 **제3의 인물이 무릎 꿇고 철퇴를 들었고**, 제노비아가 투구를 쓰고 정면을 봄
>
> **`from behind` 를 버렸다.** 이게 계속 사고의 원인이었다 — 뒷모습을 요구하면 모델이 머리 뒤를 그리려다 투구를 씌우거나 다른 인물을 끼워 넣는다. 대신 **둘 다 완전 측면(profile)**으로 세운다.
> 복제 방지는 **왼쪽/오른쪽에 서로 배타적인 속성을 못박는 것**으로 바꿨다 — 왼쪽은 큰 키·구릿빛 피부·갈색 머리·어둠, 오른쪽은 작은 키·창백함·금발·빛. v3 의 크기 비대칭과 명암 분리는 유지하되 뒷모습만 뺀 것이다.
> 철퇴 소유권을 `she alone is holding the mace and no one else holds it` 로 명시하고 네거티브에 `weapon held by someone else, kneeling figure, third figure` 를 넣었다.

```text
which piece gets discarded, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, exactly two women in the whole picture and nobody else, both standing on their feet, seen from the side in full profile, facing each other across the frame, the woman on the left is tall with deep copper tanned skin and long loose brown hair, bareheaded with no helmet of any kind, a plain silver half-mask over the upper left quarter of her face, a white knight coat over a dark uniform, thrown into deep shadow so she reads as a dark shape, she has both hands on the grip of a long straight steel longsword and has swung it down and across into the centre of the frame, the whole blade visible, the woman on the right is smaller and stands fully lit in pale light, with pale blonde hair whose long heavy straight bangs fall completely over her eyes, a blank expressionless face, white and gold priestess vestments and a tall pointed white mitre, she alone is holding the mace and no one else holds it, gripping it in both hands and holding it up horizontally in front of her chest to block, the mace being a short stout iron club with a thick blunt ridged head and no blade and no point, the steel blade landing square on the iron head at the exact centre of the picture, metal locked against metal, a burst of holy golden light bursting out from that single contact point, a dim southern cathedral, tall narrow windows, long shadows on the stone floor, two allies turning their weapons on each other
```

### 네거티브 프롬프트 v5

```text
third person, third figure, extra person, kneeling figure, kneeling man, someone kneeling between them, person on the ground, sitting figure, bystander, crowd, congregation, helmet, great helm, closed helm, visor, faceplate, metal helmet, armet, knight helmet, full armor, the left woman holding a mace, the left woman without a sword, empty handed, the right woman holding a sword, the right woman holding a staff, scepter, cross staff, wand, mace with a blade, bladed mace, spear, polearm, long handle, two handed maul, weapon held by someone else, weapon floating, unheld weapon, two swords, two maces, both holding the same weapon, two executioners, two knights, two brown-haired women, two blonde women, mirrored pose, duplicate character, same character twice, twins, clone, same outfit twice, front view, facing the viewer, looking at viewer, back view, seen from behind, drill curls, folding fan, pale violet gown, mouth mask, mask over mouth, full face mask, mask strap, head strap, friendly, standing calmly, talking, no weapons, blood, gore, severed limb, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 19. tower_purge — 마탑척살령 (1장)

### 이미지 생성 프롬프트

```text
the mage tower issues a kill order, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, a studious young mage with long straight black hair, round glasses and dark eyes, a plain dark scholar robe, stands alone in a moonlit tower library clutching a book to her chest and looking back over her shoulder, a torn execution decree bearing a heavy wax seal pinned to the shelf beside her, faint violet haze curling in the air behind her, tall dark bookshelves and a great window, the moment the institution turns on one of its own
```

### 네거티브 프롬프트

```text
fox ears, fox tails, nine tails, crowd, soldiers, no glasses,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **후드를 눌러쓴 미호 + 추격하는 암살자.** 중반부 시나리오 카드다. 얼굴이 가려져야 하므로 `no hood, bare head, hood down` 을 네거티브에 넣고, 식별용으로 **둥근 안경만** 빛을 받게 했다.

```text
the tower purges its own, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a night chase through a narrow stone alley, a young mage girl with long straight black hair and dark violet-black eyes behind round glasses, ornate dark scholar mage robes of a magic tower with gold details, with a deep hood pulled far down over her head hiding most of her face in shadow, only her chin and her round glasses catching the light, running hard toward the viewer, one hand clutching the hood closed at her throat and the other clamped around a bundle of books against her chest, her robe and long black hair streaming out behind her, and behind her down the alley three hooded assassins in dark close-fitting garb are chasing her, drawn daggers low in their hands, faces lost in shadow, one of them already reaching forward, cold blue moonlight above and hard black shadow between the buildings, wet cobblestones throwing back the light, hunted by her own
```

### 네거티브 프롬프트 v2

```text
walking calmly, standing still, sitting, reading, studying, library, classroom, no hood, bare head, uncovered head, hood down, smiling, cheerful, relaxed, daylight, bright sun, indoors, fox ears, fox tail, blood, gore, caught, captured, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v3

> **추격자를 1명으로 줄이고 대각선 탑뷰로.** `a single hooded assassin ... chasing her alone` + `just the two of them` 으로 명시하고 네거티브에 `three assassins, two assassins, many pursuers` 를 넣었다. 시점은 `high diagonal top-down view` 이고 골목이 화면을 비스듬히 가로지른다.

```text
the tower purges its own, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a high diagonal top-down view looking steeply down into a narrow stone alley that runs across the frame at an angle, the two figures seen from above and behind, a young mage girl with long straight black hair and dark violet-black eyes behind round glasses, ornate dark scholar mage robes of a magic tower with gold details, with a deep hood pulled far down over her head hiding most of her face in shadow, only her chin and her round glasses catching the light, running hard away down the alley, one hand clutching the hood closed at her throat and the other clamped around a bundle of books against her chest, her robe and long black hair streaming out behind her, and a single hooded assassin in dark close-fitting garb chasing her alone, one drawn dagger low in his hand, his face lost in shadow, closing the gap, just the two of them in the alley and no one else, cold blue moonlight falling into the alley from above and hard black shadow along the walls, wet cobblestones throwing back the light, the long shadows of both runners stretched out behind them, hunted by her own
```

### 네거티브 프롬프트 v3

```text
three assassins, two assassins, many pursuers, group of pursuers, crowd, guards, soldiers, eye level, front view, low angle, from below, walking calmly, standing still, sitting, reading, studying, library, classroom, no hood, bare head, uncovered head, hood down, smiling, cheerful, relaxed, daylight, bright sun, indoors, fox ears, fox tail, blood, gore, caught, captured, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v4

> **추격 장면을 버리고 은신으로.** 암살자를 화면에서 완전히 뺐다. 미호가 건물 사이 좁은 틈에 몸을 붙이고 골목 입구를 내다본다.
> 긴장은 인물이 아니라 **빛으로 만든다** — 골목 입구에는 차가운 달빛이 떨어지고 미호는 그 앞 깊은 어둠 속에 남아 있다. 쫓는 자를 안 보여주는 편이 더 조인다.

```text
the tower purges its own, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, nobody else in the frame, a young mage girl with long straight black hair and dark violet-black eyes behind round glasses, ornate dark scholar mage robes of a magic tower with gold details, with a deep hood pulled far down over her head hiding most of her face in shadow, only her chin and her round glasses catching a sliver of light, she is hiding, pressed flat back into a narrow gap between two tall stone buildings, her shoulders squeezed against the wall and one hand braced on the stone beside her, the other arm clutching a bundle of books tight against her chest, her head turned to peer out of the gap toward the mouth of the alley, holding her breath, a hard shaft of cold blue moonlight falling across the alley mouth in front of her while she stays back in the deep black shadow of the gap, wet cobblestones, dripping pipes, scattered crates, high walls closing in overhead, waiting for the footsteps to pass
```

### 네거티브 프롬프트 v4

```text
assassin, pursuer, chaser, hooded man, second person, two people, three people, crowd, running, chase, fleeing in the open, mid-stride, action pose, no hood, bare head, uncovered head, hood down, smiling, cheerful, relaxed, daylight, bright sun, indoors, library, classroom, fox ears, fox tail, blood, gore, weapon drawn, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v5

> **은신 → 부상 후 도주.** 싸움이 이미 끝난 뒤다.
> 부상을 여러 곳에 분산해 적었다 — 찢긴 후드 · **금 간 안경알** · 뺨의 상처 · 팔의 자상 · 그을린 로브 자락. 한 군데만 적으면 반영이 약하다.
> 추격자는 여전히 화면 밖이고, **골목 안쪽의 연기와 주황빛**으로만 방금 무슨 일이 있었는지 남긴다.
> ⚠️ 피는 `dark blood seeping between her fingers` 수준으로만. 네거티브에 `gore, blood spray, excessive blood` 를 넣어 과해지는 것을 막았다.

```text
the tower purges its own, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, nobody else in the frame, a young mage girl with long straight black hair and dark violet-black eyes behind round glasses, ornate dark scholar mage robes of a magic tower with gold details, wounded and fleeing after a fight, her hood torn half off her head and hanging back on her shoulders, her long black hair loose and wild, one round glasses lens cracked across, a cut across her cheek and a dark bruise at her temple, one hand clamped over a wound on her opposite upper arm with dark blood seeping between her fingers, her sleeve torn open, her mage robes ripped along the hem and scorched black at one edge, she is stumbling forward down a narrow stone alley toward the viewer, off balance, one shoulder scraping the wall for support, her mouth open and gasping for breath, her eyes wide behind the cracked lens, a few loose book pages scattering behind her in the air, faint drifting smoke and a dull orange glow far back at the alley mouth behind her, cold blue moonlight above and hard black shadow between the buildings, wet cobblestones throwing back the light, she got out, but only just
```

### 네거티브 프롬프트 v5

```text
assassin, pursuer, chaser, hooded man, second person, two people, three people, crowd, unhurt, clean, tidy, pristine robes, composed, calm, smiling, cheerful, relaxed, standing still, hiding, crouching, sitting, reading, intact glasses, no wound, no blood, gore, severed limb, dismemberment, excessive blood, blood spray, daylight, bright sun, indoors, library, classroom, fox ears, fox tail, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 20. jezebel_pity — 이제벨: 불쌍하게도, 인간때문에 그리되었군요 (1장)

### 이미지 생성 프롬프트

```text
the witch pities the vampire, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, two women in a cold northern crypt, on the left a demon-worshipping witch with long wild disheveled black hair streaked with vivid red, thick white bandages fully wrapped over her eyes, an ecstatic mad grin, tattered black priestess robes with torn streaming sleeves, tilts her head with a slow pitying smile and reaches one hand toward the other, on the right a petite ancient vampire with short white bob hair, glowing crimson eyes and small fangs, pale porcelain skin, a worn gothic black and red dress, stands very still with her crimson eyes fixed on that hand, fangs just showing, faint cold mist between them, dark stone and thin red light, false sympathy offered to something that remembers everything
```

### 네거티브 프롬프트

```text
fighting, blood, crowd, daylight, visible eyes on the witch,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **이제벨이 바토리에게 최면.** 바토리가 저항하지 않고 눈이 풀리는 것이 핵심이라 네거티브에 `resisting, fighting back, angry vampire` 를 넣었다.

```text
the witch puts the vampire under, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, two women alone in a dark stone crypt, on the right a demon-worshipping witch with long wild disheveled black hair streaked with vivid red, thick white bandages wrapped fully around her head completely covering both eyes with no eyes visible at all, an ecstatic mad grin, tattered elegant black priestess robes, leaning in close with both hands raised and fingers spread wide in front of the other woman's face, her mad grin wide, thin threads of dark red light spiralling out of her palms, on the left an ancient vampire queen with short white bob hair, glowing crimson red eyes and small fangs, pale porcelain skin, a petite regal figure in a worn gothic black and red dress, sitting slack and unresisting with her shoulders dropped, her crimson eyes gone wide and glassy and unfocused, her expression emptied out, faint concentric rings of dull red light closing in around her head, her small hands limp in her lap, deep shadow, a few guttering candles, low drifting fog, a mind being taken over
```

### 네거티브 프롬프트 v2

```text
three people, crowd, vampire fighting back, resisting, angry vampire, fangs bared in anger, standing vampire, witch with visible eyes, unbandaged eyes, bright light, daylight, cheerful, blood, gore, biting, neck bite, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v3

> **이제벨을 화면에서 완전히 뺐다.** 최면에 걸리는 **바토리 정면 단독 흉상**만 그린다. 이제벨의 손조차 들어오지 않도록 `hands in frame, another person's arms` 를 막았다. 최면은 `off-frame` 에서 오는 붉은 실과 동심원 파문으로만 암시한다.

```text
the vampire goes under, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, a straight-on frontal bust shot, an ancient vampire queen with short white bob hair and small fangs, pale porcelain skin, a petite regal figure in a worn gothic black and red dress, facing the viewer dead centre, her head tilted very slightly back, her crimson red eyes wide open but gone completely glassy and unfocused, the pupils blown wide and empty, no light or awareness left in them at all, her face slack and expressionless, her lips just parted, faint concentric rings of dull red light closing inward around her head like ripples, thin threads of dark red light drifting across her face from off-frame, her white bob hair lifting very slightly as if in a current, a dark stone crypt behind her, deep shadow, a few guttering candles far back, a mind being taken over
```

### 네거티브 프롬프트 v3

```text
two people, second person, witch, bandaged woman, black hair, red streaked hair, hands in frame, reaching hands, another person's arms, alert, focused eyes, sharp gaze, angry, fangs bared, fighting back, resisting, smiling, profile view, side view, three quarter view, looking away, bright light, daylight, cheerful, blood, gore, neck bite, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v4

> **최면 순간 대신 무너진 뒤를 그린다.** 정면 흉상에서 **무릎 꿇고 우는 전신**으로 바꿨다. 이제벨은 여전히 화면 밖이고, 붉은 실이 흩어져 사라지는 것으로만 남긴다.
> 얼굴을 두 손으로 가리게 한 것이 핵심이다 — 표정을 그리지 않아도 무너진 게 읽히고, 우는 얼굴을 직접 그릴 때 생기는 어색함도 피한다.

```text
the vampire breaks, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, nobody else in the frame, an ancient vampire queen with short white bob hair and small fangs, pale porcelain skin, a petite figure in a worn gothic black and red dress, kneeling on the cold stone floor of a dark crypt, sunk down on both knees with her weight collapsed back onto her heels, her small shoulders curled inward and shaking, both hands pressed flat against her own face covering her eyes, her head bowed low, thin tears running down past her fingers and dripping from her chin, her mouth open in a soundless sob with her small fangs showing, her white bob hair falling forward around her hands, faint threads of dull red light still drifting away from her head and dissolving in the air, deep shadow, a few guttering candles far back, low drifting fog around her knees, an ancient thing reduced to weeping
```

### 네거티브 프롬프트 v4

```text
witch, bandaged woman, black hair, red streaked hair, second person, two people, crowd, hands in frame from off screen, another person's arms, standing, sitting on a chair, lying down, smiling, grinning, laughing, angry, fangs bared in anger, fighting, attacking, bright light, daylight, cheerful, blood, gore, neck bite, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 21. roxana_found — 로욱시나: 오, 찾았다 (1장)

### 이미지 생성 프롬프트

```text
the queen finds her fugitive, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, two women in a torchlit western hall, on the right a languid villainess with long voluminous curly crimson hair, narrowed crimson eyes and a faint contemptuous smirk, a tiny tilted gold mini crown perched on the right side of her head, a white silk gown with gold and red trim, leans forward on her throne with her chin propped on one hand and a slow delighted smirk, on the left an eerie poison master with wild red and green two-tone hair and hollow empty eye sockets with only depthless black voids where her eyes should be, a thin unnerving smile, a dark alchemist robe, stops mid-step and turns her head sharply, one hand drifting toward the vials at her belt, warm sand-colored torchlight and deep red drapery, a hunt that ends the moment it is noticed
```

### 네거티브 프롬프트

```text
fighting, blood, crowd, soldiers, visible eyeballs on the poisoner,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **들킨 마리 단독.** 로욱시나를 화면에서 빼고 마리의 당황만 남겼다. 마리는 `red and green two-tone hair + 검은 눈` 의 독약사다 (로욱시나·루크레치아와 혼동 주의).

```text
the fugitive is found, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, an eerie female poison master with wild red and green two-tone hair and solid pitch-black eyes with no whites at all, a dark alchemist robe with small glass vials hanging from a leather belt, caught in the act and startled, frozen mid-step and spinning around toward the viewer, her eyes wide, her shoulders jerked up, her mouth open in a small gasp, one hand snatched back guiltily toward the vials at her belt and the other flung out for balance, her two-tone hair whipping across her face with the sudden motion, a glass vial slipping out of her fingers and falling, a bright hard shaft of torchlight thrown across her from the side pinning her against the wall, a torchlit western stone corridor, deep red drapery, long shadows, the moment of being discovered
```

### 네거티브 프롬프트 v2

```text
two people, second person, crimson hair, mini crown, throne, white silk gown, calm, composed, smiling, confident, smirk, sitting, lying down, eyes closed, hidden face, back turned, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 22. royal_frameup — 황족능멸죄의 누명 (1장)

### 이미지 생성 프롬프트

```text
a false charge of insulting the imperial house, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, two women in a grand eastern palace hall, in front a haughty young noblewoman with bright golden blonde twin rolled bun curls and long ringlets, sharp upturned icy blue eyes, a structured jade green court gown with a cream front panel and long white lace gloves, stands rigid with her chin up and her jaw tight as an unrolled imperial decree with a heavy red seal is held out toward her by shadowed hands from the edge of the frame, behind her a quiet young maid with brown hair tied up in a bun, downcast eyes, a black and white victorian maid uniform, black shadow devouring one hand, stands half a step back with her head bowed, cold marble columns and gold banners, a lie dressed as law
```

### 네거티브 프롬프트

```text
smiling, laughing, fan raised, crowd of nobles, recognizable third face,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **황실 법정에서 규탄받는 샬롯.** 샬롯을 작게, 판사석과 방청석을 크게 잡아 압도되는 구도로 갔다. 샬롯 본인 md 의 네거티브(`tiara, pale violet gown, drill curls`)를 그대로 이어 루크레치아와 안 섞이게 했다.

```text
the lady is denounced, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a vast imperial courtroom, a haughty young noble lady with bright golden blonde hair in twin rolled bun curls and clear blue eyes, an elegant pastel noble dress with modest ribbons, standing alone in the open floor at the center of the room, small in the frame, her hands clenched at her chest, her shoulders drawn in, her face pale and stricken as she looks up, and towering above and around her a raised semicircular bench of robed imperial judges and rows of noble spectators all looking down at her, several of them pointing down at her in accusation, mouths open mid-denunciation, a single hard shaft of cold light falling straight down on her from a high window, everything around her in deep shadow, tall stone columns and imperial banners, one girl against an entire court
```

### 네거티브 프롬프트 v2

```text
empty room, no audience, no judges, only one person, charlotte smiling, confident, smug, laughing, arrogant, charlotte seated, throne, dark hair, red hair, short hair, tiara, pale violet gown, drill curls, outdoors, garden, ballroom dance, cheerful, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v3

> **방청석을 전부 비웠다.** 판사 1 · 검사 1 · 변호인 1 · 샬롯 = **4명만.** 네거티브에 `crowd, audience, gallery, rows of people, jury` 를 넣어 인원이 다시 불어나는 것을 막았다. 변호인은 고개를 숙이고 아무 말도 하지 않는 것으로 뒀다 — 판결이 이미 정해졌다는 뜻이다.

```text
the lady is denounced, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a stark imperial courtroom with only four people in it, a haughty young noble lady with bright golden blonde hair in twin rolled bun curls and clear blue eyes, an elegant pastel noble dress with modest ribbons, standing alone in the open floor at the center, her hands clenched at her chest, her shoulders drawn in, her face pale and stricken as she looks up, directly in front of her and raised above on a single tall judge's bench one stern old imperial judge in heavy dark robes and a flat judicial cap looking down at her, at one side one prosecutor in severe black and gold robes standing and pointing at her in accusation, mouth open mid-denunciation, at the other side one defence advocate in plain grey robes standing with a sheaf of papers, head lowered, saying nothing, the rest of the chamber empty and dark, no audience at all, a single hard shaft of cold light falling straight down on her from a high window, tall stone columns and imperial banners in the shadows, one girl against a verdict already written
```

### 네거티브 프롬프트 v3

```text
crowd, audience, spectators, gallery, many people, rows of people, packed courtroom, five people, six people, seven people, jury, guards, soldiers, charlotte smiling, confident, smug, laughing, arrogant, charlotte seated, throne, dark hair, red hair, short hair, tiara, pale violet gown, drill curls, outdoors, garden, ballroom dance, cheerful, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v4

> **샬롯을 `late teens` 로.** `jeanne_here` v7 과 같은 처방이다 — 나이 한 줄만 주고 얼굴형·목 서술은 넣지 않는다.
> 이 카드는 **작게 그려 압도되는 구도**라 나이가 더 어려 보이는 문제가 있었다. 그래서 `standing at full adult height, not dwarfed by the others` 를 넣어 **작아 보이는 것과 어려 보이는 것을 분리**했다. 압박감은 판사석 높이와 빛으로 만든다.
> 네거티브에 `very short girl, tiny figure, huge height difference` 추가. 4인 구성과 방청석 차단은 v3 그대로.

```text
the lady is denounced, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a stark imperial courtroom with only four people in it, a noble lady in her late teens, a slim young woman rather than a child, bright golden blonde hair in twin rolled bun curls and clear blue eyes, an elegant pastel noble dress with modest ribbons, standing alone in the open floor at the center, her hands clenched at her chest, her shoulders drawn in, her face pale and stricken as she looks up, standing at full adult height, not dwarfed by the others, directly in front of her and raised above on a single tall judge's bench one stern old imperial judge in heavy dark robes and a flat judicial cap looking down at her, at one side one prosecutor in severe black and gold robes standing and pointing at her in accusation, mouth open mid-denunciation, at the other side one defence advocate in plain grey robes standing with a sheaf of papers, head lowered, saying nothing, the rest of the chamber empty and dark, no audience at all, a single hard shaft of cold light falling straight down on her from a high window, tall stone columns and imperial banners in the shadows, one girl against a verdict already written
```

### 네거티브 프롬프트 v4

```text
(child:1.5), (little girl:1.5), kid, toddler, baby face, round chubby face, childish proportions, oversized head, big head, short stubby limbs, chibi, loli, very short girl, tiny figure, huge height difference, crowd, audience, spectators, gallery, many people, rows of people, packed courtroom, five people, six people, seven people, jury, guards, soldiers, charlotte smiling, confident, smug, laughing, arrogant, charlotte seated, throne, dark hair, red hair, short hair, tiara, pale violet gown, drill curls, outdoors, garden, ballroom dance, cheerful, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 23. jeanne_here — 잔느, 여기에 있었구나 (1장)

### 이미지 생성 프롬프트

```text
the male leads find her, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a young girl with soft pink short bob hair and big clear pink eyes in a modest neat academy uniform, no armor and no weapons, stands in the middle of the frame looking slightly surprised with one hand half-raised, and four tall young noblemen converge on her from all four sides, every one of them rendered as a dark backlit silhouette with unlit unreadable faces, their coats edged with rim light, a bright radial glare behind her, plain simple background, the world rearranging itself around one girl
```

### 네거티브 프롬프트

```text
visible male faces, clear facial features on the men, women, 2girls, detailed background,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **익명 실루엣 처리를 폐기.** 네 남주를 전부 얼굴이 보이게 그린다. 그래서 `silhouette, unlit face, shadowed face` 계열을 **전부 네거티브로** 옮겼다 — 다른 카드와 정반대 방향이니 주의.

```text
the heroine arrives with her suitors, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, five people standing together facing the viewer in a bright academy courtyard, at the exact center and slightly forward a pure young heroine with soft pink short bob hair and big clear pink eyes, a modest neat academy uniform with a simple ribbon, standing straight with a bright open smile, and flanking her two on each side, four handsome young men all clearly visible and fully lit, each with a distinct face, on her far left a male lead with jet black hair and sharp crimson red eyes, a cold noble expression, an ornate black military coat with silver embroidery and metal gauntlets, beside him a crown prince with golden blond hair and piercing azure blue eyes, white and gold imperial regalia with layered gold chains and a rich purple cape, on her right a conqueror prince with dark curly hair under a jeweled turban, sharp hawk-like eyes and sun-kissed skin, refined desert royal garments with restrained gold accents, and on her far right a gentle young clergyman with soft black hair and warm brown eyes, ornate white and crimson clergy vestments with gold cross embroidery, all four standing at ease and turned slightly toward her, warm daylight, pale stone arcades and green trees behind them, the whole cast assembled at last
```

### 네거티브 프롬프트 v2

```text
silhouette, backlit silhouette, unlit face, shadowed face, faceless man, hidden face, obscured face, dark figure, two people, three people, six people, seven people, crowd, identical faces, same face repeated, duplicate character, night, dark background, indoors, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v3

> **남주 넷을 세우는 단체 구도를 폐기.** 지크프리트가 잔느를 **찾아와 주는** 2인 장면으로 바꿨다. 나머지 셋의 특징(`golden blond hair, turban, clergy vestments, purple cape`)을 네거티브로 빼서 섞이지 않게 했다.

```text
the knight comes for her, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, two people only, in a quiet academy courtyard at dusk, on the right a pure young heroine with soft pink short bob hair and big clear pink eyes, a modest neat academy uniform with a simple ribbon, turning around in surprise with both hands still holding her books to her chest, her eyes wide and a small startled hopeful smile breaking across her face, and on the left a male lead with jet black hair and sharp crimson red eyes, a cold noble expression, an ornate black military coat with silver embroidery and metal gauntlets, who has just arrived and stopped a few steps away, one hand extended toward her, his cold expression softened just slightly, his coat still settling from the walk, warm low evening light between them, pale stone arcades and long shadows, someone came looking for her after all
```

### 네거티브 프롬프트 v3

```text
four men, five people, three people, crowd, group photo, lineup, golden blond hair, turban, clergy vestments, purple cape, laurel, brown hair on the man, light hair on the man, silhouette, unlit face, shadowed face, faceless man, identical faces, duplicate character, night, indoors, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v4

> **놀라는 쪽을 바꿨다.** v2 는 잔느가 과하게 놀랐다. 이제 **입을 벌리는 건 지크프리트**다 — 이름을 부르며 다가오는 순간이고, 잔느는 눈썹만 살짝 올린 채 조용히 웃기 시작한다.
> 가중치로 방향을 갈랐다 — `(his mouth open as he calls out to her:1.4)` / 네거티브 `(jeanne with her mouth open:1.4)`, `(man with his mouth closed:1.3)`.
> **지크프리트도 평상복으로.** 군복 코트 + 건틀릿이 더워 보였다. 네거티브에 `military coat, heavy coat, armor, gauntlets, chains, cape` 를 넣었다. 잔느도 평상복이라 둘의 결이 맞는다.

```text
the knight comes for her, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, two people only, in a quiet academy courtyard at dusk, on the right a pure young heroine with soft pink short bob hair and big clear pink eyes, in ordinary everyday travel clothes, a simple cream blouse with rolled sleeves, a plain brown skirt and sturdy boots, a light travel cloak, no school uniform, turning around with her books still held to her chest, her expression only mildly surprised, eyebrows lifted a little and a small warm hopeful smile starting, her mouth closed, calm, and on the left a male lead with jet black hair and sharp crimson red eyes, in relaxed casual clothes, a loose white shirt with the collar open and the sleeves pushed up, a simple dark vest and plain trousers, no coat and no armor and no gauntlets, who has just arrived and stopped a few steps away, one hand extended toward her, (his mouth open as he calls out to her:1.4), caught mid-word, leaning slightly forward, his usual cold composure broken for once, warm low evening light between them, pale stone arcades and long shadows, someone came looking for her after all
```

### 네거티브 프롬프트 v4

```text
(jeanne with her mouth open:1.4), jeanne shouting, jeanne screaming, wide open shocked eyes on jeanne, terrified, frightened, alarmed, recoiling, stepping back, (man with his mouth closed:1.3), silent man, expressionless man, military coat, heavy coat, armor, gauntlets, metal plate, chains, cape, school uniform, academy uniform, sailor collar, blazer, necktie, four men, five people, three people, crowd, group photo, lineup, golden blond hair, turban, clergy vestments, purple cape, laurel, silhouette, unlit face, shadowed face, faceless man, identical faces, duplicate character, night, indoors, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v5

> **지크프리트 → 가이우스.** 평상복 지크프리트가 어울리지 않았다.
> 가이우스는 **본래의 백금 제복 그대로** 간다 — 평상복이 문제였으므로 옷을 갈아입히는 대신 인물을 바꾼다. 금발·벽안·자주색 망토가 잔느의 분홍 계열과 색으로도 잘 갈린다.
> 네거티브에 다른 남주 특징(`black hair, crimson red eyes, dark military coat, turban, clergy vestments`)과 `casual shirt on the man, plain vest` 를 넣어 섞이지 않게 했다.
> 잔느 성숙화는 `jeanne_travel` 과 같은 서술을 공유한다. 입을 벌리는 쪽이 남주라는 지시도 v4 그대로 유지.

```text
the prince comes for her, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, two people only, in a quiet academy courtyard at dusk, on the right a young woman in her late teens, mature and composed, tall with adult proportions, a slender oval face with a defined jawline and a long neck, calm level eyes, soft pink short bob hair and clear pink eyes, in ordinary everyday travel clothes, a simple cream blouse with rolled sleeves, a plain brown skirt and sturdy boots, a light travel cloak, no school uniform, turning around with her books still held to her chest, her expression only mildly surprised, eyebrows lifted a little and a small warm hopeful smile starting, her mouth closed, calm, and on the left a crown prince with golden blond hair and piercing azure blue eyes, a calm authoritative face, ornate white and gold imperial regalia with layered gold chains and a rich purple cape, a golden laurel hair ornament, who has just arrived and stopped a few steps away, one hand extended toward her, (his mouth open as he calls out to her:1.4), caught mid-word, leaning slightly forward, his usual composure broken for once, warm low evening light between them, pale stone arcades and long shadows, someone came looking for her after all
```

### 네거티브 프롬프트 v5

```text
(child:1.6), (little girl:1.6), (kid:1.5), toddler, baby face, round chubby face, childish proportions, oversized head, big head, short stubby limbs, chibi, loli, very young, elementary school, small child body, school uniform, academy uniform, sailor collar, blazer, necktie, pleated skirt, (jeanne with her mouth open:1.4), jeanne shouting, jeanne screaming, wide open shocked eyes on jeanne, terrified, frightened, alarmed, recoiling, stepping back, (man with his mouth closed:1.3), silent man, expressionless man, black hair on the man, jet black hair, crimson red eyes, dark military coat, turban, dark curly hair, clergy vestments, crimson vestments, casual shirt on the man, plain vest, rolled sleeves, shabby clothes, four men, five people, three people, crowd, group photo, lineup, silhouette, unlit face, shadowed face, faceless man, identical faces, duplicate character, night, indoors, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v6

> **잔느 성숙화만 되돌리고 가이우스는 유지한다.** v5 에서 두 가지를 동시에 바꿨는데 인물 교체는 맞았고 나이 조정이 과했다.
> 잔느는 v4 서술로 복귀, 남주는 가이우스(백금 제복) 그대로. 입을 벌리는 쪽이 남주라는 지시도 유지.
> 나이는 시드 12개로 고른다.

```text
the prince comes for her, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, two people only, in a quiet academy courtyard at dusk, on the right a pure young heroine with soft pink short bob hair and big clear pink eyes, in ordinary everyday travel clothes, a simple cream blouse with rolled sleeves, a plain brown skirt and sturdy boots, a light travel cloak, no school uniform, turning around with her books still held to her chest, her expression only mildly surprised, eyebrows lifted a little and a small warm hopeful smile starting, her mouth closed, calm, and on the left a crown prince with golden blond hair and piercing azure blue eyes, a calm authoritative face, ornate white and gold imperial regalia with layered gold chains and a rich purple cape, a golden laurel hair ornament, who has just arrived and stopped a few steps away, one hand extended toward her, (his mouth open as he calls out to her:1.4), caught mid-word, leaning slightly forward, his usual composure broken for once, warm low evening light between them, pale stone arcades and long shadows, someone came looking for her after all
```

### 네거티브 프롬프트 v6

```text
school uniform, academy uniform, sailor collar, blazer, necktie, pleated skirt, (jeanne with her mouth open:1.4), jeanne shouting, jeanne screaming, wide open shocked eyes on jeanne, terrified, frightened, alarmed, recoiling, stepping back, (man with his mouth closed:1.3), silent man, expressionless man, black hair on the man, jet black hair, crimson red eyes, dark military coat, turban, dark curly hair, clergy vestments, crimson vestments, casual shirt on the man, plain vest, rolled sleeves, shabby clothes, four men, five people, three people, crowd, group photo, lineup, silhouette, unlit face, shadowed face, faceless man, identical faces, duplicate character, night, indoors, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v7

> **`late teens` 만 되살린다.** v5 는 `late teens` + `adult proportions` + `defined jawline and a long neck` 를 한꺼번에 넣어 인물이 아예 달라졌고, v6 은 나이 지시를 다 빼서 12장 전부 아이로 나왔다.
> 이번엔 **나이만** 준다 — `a heroine in her late teens, a slim young woman rather than a child`. 얼굴형·목 길이 서술은 넣지 않는다.
> 추가로 **키 대비**를 지정했다 — `standing at close to the same height as the man beside her`. v6 에서 가이우스가 성인 남성으로 크게 나와 나란히 서니 잔느가 더 어려 보였다. 네거티브에도 `very short girl, tiny girl next to a tall man, huge height difference` 를 넣었다.

```text
the prince comes for her, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, two people only, in a quiet academy courtyard at dusk, on the right a heroine in her late teens, a slim young woman rather than a child, soft pink short bob hair and clear pink eyes, in ordinary everyday travel clothes, a simple cream blouse with rolled sleeves, a plain brown skirt and sturdy boots, a light travel cloak, no school uniform, standing at close to the same height as the man beside her, turning around with her books still held to her chest, her expression only mildly surprised, eyebrows lifted a little and a small warm hopeful smile starting, her mouth closed, calm, and on the left a crown prince with golden blond hair and piercing azure blue eyes, a calm authoritative face, ornate white and gold imperial regalia with layered gold chains and a rich purple cape, a golden laurel hair ornament, who has just arrived and stopped a few steps away, one hand extended toward her, (his mouth open as he calls out to her:1.4), caught mid-word, leaning slightly forward, his usual composure broken for once, warm low evening light between them, pale stone arcades and long shadows, someone came looking for her after all
```

### 네거티브 프롬프트 v7

```text
(child:1.5), (little girl:1.5), kid, toddler, baby face, round chubby face, childish proportions, oversized head, big head, short stubby limbs, chibi, loli, very short girl, tiny girl next to a tall man, huge height difference, school uniform, academy uniform, sailor collar, blazer, necktie, pleated skirt, (jeanne with her mouth open:1.4), jeanne shouting, wide open shocked eyes on jeanne, terrified, frightened, alarmed, recoiling, stepping back, (man with his mouth closed:1.3), silent man, expressionless man, black hair on the man, jet black hair, crimson red eyes, dark military coat, turban, dark curly hair, clergy vestments, crimson vestments, casual shirt on the man, plain vest, rolled sleeves, shabby clothes, four men, five people, three people, crowd, group photo, lineup, silhouette, unlit face, shadowed face, faceless man, identical faces, duplicate character, night, indoors, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v8

> **v7 은 12장 중 8장에서 잔느가 둘로 복제됐다.** 원인은 v7 에서 새로 넣은 `standing at close to the same height as the man beside her` 다 — **비교 대상(`the man beside her`)을 언급하면서 인물이 하나 더 생겼다.** v6 에는 이 문장이 없었고 복제도 없었다.
>
> v8 은 키를 **비교가 아니라 잔느 본인의 속성**으로 적는다 — `tall and long-limbed`. 다른 인물을 참조하지 않으므로 복제 유인이 없다.
> 인원도 명시적으로 못박았다 — `(exactly two people in the whole picture, one man and one girl:1.5)`, `(only one girl:1.5)`, 각 인물 서술 앞에 `alone, a single girl` / `alone, a single man`.
> 네거티브에 `(two girls:1.7) (2girls:1.7) (multiple girls:1.7) (twins:1.6)` 및 `two pink haired girls, girl standing next to another girl` 를 걸었다.
>
> ⚠️ **교훈: 두 인물 장면에서 한쪽을 다른 쪽에 빗대어 서술하지 말 것.** `discard_pawn` 의 복제와 같은 계열의 사고다.

```text
the prince comes for her, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, (exactly two people in the whole picture, one man and one girl:1.5), (only one girl:1.5), (only one man:1.4), nobody else anywhere in the frame, in a quiet academy courtyard at dusk, on the right, alone, a single girl, a heroine in her late teens, a slim young woman rather than a child, tall and long-limbed, soft pink short bob hair and clear pink eyes, in ordinary everyday travel clothes, a simple cream blouse with rolled sleeves, a plain brown skirt and sturdy boots, a light travel cloak, no school uniform, turning around with her books still held to her chest, her expression only mildly surprised, eyebrows lifted a little and a small warm hopeful smile starting, her mouth closed, calm, and on the left, alone, a single man, a crown prince with golden blond hair and piercing azure blue eyes, a calm authoritative face, ornate white and gold imperial regalia with layered gold chains and a rich purple cape, a golden laurel hair ornament, who has just arrived and stopped a few steps away, one hand extended toward her, (his mouth open as he calls out to her:1.4), caught mid-word, leaning slightly forward, his usual composure broken for once, warm low evening light between them, pale stone arcades and long shadows, someone came looking for her after all
```

### 네거티브 프롬프트 v8

```text
(two girls:1.7), (2girls:1.7), (multiple girls:1.7), (twins:1.6), (three people:1.6), (duplicate character:1.6), (same face twice:1.6), cloned girl, two pink haired girls, two identical girls, girl standing next to another girl, pair of girls, (child:1.5), (little girl:1.5), kid, toddler, baby face, round chubby face, childish proportions, oversized head, big head, short stubby limbs, chibi, loli, school uniform, academy uniform, sailor collar, blazer, necktie, pleated skirt, (jeanne with her mouth open:1.4), jeanne shouting, wide open shocked eyes on jeanne, terrified, frightened, alarmed, recoiling, stepping back, (man with his mouth closed:1.3), silent man, expressionless man, black hair on the man, jet black hair, crimson red eyes, dark military coat, turban, dark curly hair, clergy vestments, crimson vestments, casual shirt on the man, plain vest, shabby clothes, four men, five people, crowd, group photo, lineup, silhouette, unlit face, shadowed face, faceless man, night, indoors, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v9

> **v8 에서 잔느 머리에 월계관이 옮겨붙었다.** 가이우스의 `golden laurel hair ornament` 가 새어나온 **속성 누출**이다. 두 인물이 가까이 서면 장신구·색·의상이 서로 번진다.
>
> 세 방향으로 막았다:
> 1. **잔느 쪽에 '없음'을 명시** — `(nothing at all in her hair, no ornament, no laurel, no wreath, no crown, no tiara, no hairpin, no gold in her hair:1.5)`, 그리고 `no gold and no jewellery anywhere on her`
> 2. **가이우스 쪽에 소유자를 못박음** — `(a golden laurel wreath worn by this man alone on his own blond head:1.3)`. 가중치를 1.3 으로 낮춰 번질 힘을 줄였다
> 3. 네거티브에 `(laurel on the girl:1.7) (laurel wreath on pink hair:1.7) (gold ornament in pink hair:1.6)` — **머리색으로 대상을 특정**해야 가이우스 것까지 같이 죽지 않는다
>
> ⚠️ 여기서도 `matching headwear, both wearing the same ornament` 를 넣었다. 복제 방지(v8)와 같은 원리다 — 두 인물이 무언가를 **공유**하게 두면 안 된다.
> v8 의 복제 방지는 12장 중 10장에서 성공했으므로 그대로 유지한다.

```text
the prince comes for her, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, (exactly two people in the whole picture, one man and one girl:1.5), (only one girl:1.5), (only one man:1.4), nobody else anywhere in the frame, in a quiet academy courtyard at dusk, on the right, alone, a single girl, a heroine in her late teens, a slim young woman rather than a child, tall and long-limbed, soft pink short bob hair worn completely plain and bare, (nothing at all in her hair, no ornament, no laurel, no wreath, no crown, no tiara, no hairpin, no gold in her hair:1.5), clear pink eyes, in ordinary everyday travel clothes, a simple cream blouse with rolled sleeves, a plain brown skirt and sturdy boots, a light travel cloak, no school uniform, no gold and no jewellery anywhere on her, turning around with her books still held to her chest, her expression only mildly surprised, eyebrows lifted a little and a small warm hopeful smile starting, her mouth closed, calm, and on the left, alone, a single man, a crown prince with golden blond hair and piercing azure blue eyes, a calm authoritative face, ornate white and gold imperial regalia with layered gold chains and a rich purple cape, (a golden laurel wreath worn by this man alone on his own blond head:1.3), who has just arrived and stopped a few steps away, one hand extended toward her, (his mouth open as he calls out to her:1.4), caught mid-word, leaning slightly forward, his usual composure broken for once, warm low evening light between them, pale stone arcades and long shadows, someone came looking for her after all
```

### 네거티브 프롬프트 v9

```text
(laurel on the girl:1.7), (laurel wreath on pink hair:1.7), (gold ornament in pink hair:1.6), (hair ornament on the girl:1.6), (crown on the girl:1.6), (tiara on the girl:1.6), circlet on the girl, headband on the girl, hairpin, gold leaves in pink hair, matching headwear, both wearing the same ornament, (two girls:1.7), (2girls:1.7), (multiple girls:1.7), (twins:1.6), (three people:1.6), (duplicate character:1.6), (same face twice:1.6), cloned girl, two pink haired girls, two identical girls, girl standing next to another girl, pair of girls, (child:1.5), (little girl:1.5), kid, toddler, baby face, round chubby face, childish proportions, oversized head, big head, short stubby limbs, chibi, loli, school uniform, academy uniform, sailor collar, blazer, necktie, pleated skirt, (jeanne with her mouth open:1.4), jeanne shouting, wide open shocked eyes on jeanne, terrified, frightened, alarmed, recoiling, stepping back, (man with his mouth closed:1.3), silent man, expressionless man, black hair on the man, jet black hair, crimson red eyes, dark military coat, turban, dark curly hair, clergy vestments, crimson vestments, casual shirt on the man, plain vest, shabby clothes, four men, five people, crowd, group photo, lineup, silhouette, unlit face, shadowed face, faceless man, night, indoors, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 24. jeanne_exam — 잔느: 나 시험 준비해야해 (1장)

### 이미지 생성 프롬프트

```text
the heroine studies for her exam, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, a young girl with soft pink short bob hair and big clear pink eyes in a modest neat academy uniform, no armor and no weapons, sits at a wooden desk in a quiet academy library with an open textbook, a stack of notes and a small lamp, chewing the end of her pen with a slightly worried frown, warm lamplight pooling on the desk and tall dark shelves fading off behind her, a very ordinary evening
```

### 네거티브 프롬프트

```text
crowd, other students, male characters, armor, weapons, holy glow, dramatic lighting,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

## 25. jeanne_travel — 잔느: 나 여기 가보고 싶어 (1장)

### 이미지 생성 프롬프트

```text
the heroine picks her next destination, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, a young girl with soft pink short bob hair and big clear pink eyes in a modest neat academy uniform, no armor and no weapons, crouches over a large parchment map spread on the ground, one finger planted excitedly on a far region and her eyes bright, a travel pack and a rolling die beside the map, warm daylight and a plain simple background, whim deciding where fate goes next
```

### 네거티브 프롬프트

```text
crowd, other characters, armor, weapons, vehicles, detailed scenery,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

---

# 후반부 덱 (16장 + 서막)

> `scenario.md` 의 후반부 구성 — ① 메인 빌런 토벌전 4 · ② 엔딩 경로 개봉 7 · ③ 멸망 관련 **4** · ④ 잔느의 설득 1 (+ 서막) = **16장**.
> 오브젝트만 나오는 카드는 `no people, no human figure, no character` 를 넣어 인물이 끼어드는 것을 막는다.
> 남주는 **누구인지 특정되면 안 되므로** 전부 역광 실루엣으로 처리한다.
>
> ✅ **구성 확정 (2026-08-03)** — 원문 머리말에 있던 `⑤ 밝혀지는 과거 1장`은 **삭제**되고 그 1장이 **③ 멸망 관련**으로 넘어갔다.
> 따라서 멸망은 `사자들의 합창 2장 + 종말의 전조 2장 = 4장`이 맞고,
> 후반부 합계는 `4 + 7 + 4 + 1 = 16장`으로 떨어진다.


### 이미지 생성 프롬프트 v2

> **배낭 + 펼친 지도 + 팔짱 낀 지크프리트.** `arms crossed` 가 풀리지 않도록 네거티브에 `uncrossed arms, arms at sides` 를 넣었다.

```text
the heroine sets out, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, two people together on a country road at the edge of a wide open landscape, on the left a pure young heroine with soft pink short bob hair and big clear pink eyes, a modest neat academy uniform with a simple ribbon, wearing a large travel backpack on her shoulders, holding a big unfolded paper map open in both hands and peering down at it with a small determined frown, leaning slightly forward, on the right a male lead with jet black hair and sharp crimson red eyes, a cold noble expression, an ornate black military coat with silver embroidery and metal gauntlets, standing beside her with his arms crossed over his chest, weight on one leg, looking away down the road with a patient unimpressed expression, a dirt road winding off toward distant blue hills, scattered trees, bright open sky, the beginning of a long journey
```

### 네거티브 프롬프트 v2

```text
three people, crowd, indoors, folded map, closed book, scroll, no map, uncrossed arms, arms at sides, waving, holding hands, embracing, blonde hair on the man, light hair on the man, night, dark, dungeon, , text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v3

> **남주를 완전히 제거.** `solo, one character only, no one else in the frame` 로 못박고 네거티브에 `figure in the background, person watching, onlooker` 까지 넣었다 — 배경에 지켜보는 인물이 남는 것이 흔한 실패다.

```text
the heroine sets out alone, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, no one else in the frame, a pure young heroine with soft pink short bob hair and big clear pink eyes, a modest neat academy uniform with a simple ribbon, wearing a large travel backpack on her shoulders, holding a big unfolded paper map open in both hands and peering down at it with a small determined frown, leaning slightly forward, her weight shifted onto one foot as if about to keep walking, a dirt road winding off toward distant blue hills, scattered trees, bright open sky, the beginning of a long journey taken by herself
```

### 네거티브 프롬프트 v3

```text
two people, second person, man, boy, male, companion, escort, knight, figure in the background, person watching, onlooker, silhouette of a person, crossed arms, black coat, crimson eyes, folded map, closed book, scroll, no map, no backpack, night, dark, indoors, crowd, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v4

> **교복 → 평상복.** 여행을 떠나는 장면에 교복은 안 맞는다. 크림색 블라우스 + 갈색 치마 + 부츠 + 여행용 망토로 바꾸고, 네거티브에 `school uniform, sailor collar, blazer, necktie, pleated skirt` 를 넣었다.
> 남주 제거(`solo, one character only`)와 배경 인영 차단은 v3 그대로 유지한다.

```text
the heroine sets out alone, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, no one else in the frame, a pure young heroine with soft pink short bob hair and big clear pink eyes, in ordinary everyday travel clothes, a simple cream blouse with rolled sleeves, a plain brown skirt and sturdy boots, a light travel cloak, no school uniform, wearing a large travel backpack on her shoulders, holding a big unfolded paper map open in both hands and peering down at it with a small determined frown, leaning slightly forward, her weight shifted onto one foot as if about to keep walking, a dirt road winding off toward distant blue hills, scattered trees, bright open sky, the beginning of a long journey taken by herself
```

### 네거티브 프롬프트 v4

```text
school uniform, academy uniform, sailor collar, blazer, necktie, school ribbon, pleated skirt, two people, second person, man, boy, male, companion, escort, knight, figure in the background, person watching, onlooker, silhouette of a person, folded map, closed book, scroll, no map, no backpack, night, dark, indoors, crowd, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v5

> **잔느를 성숙하게.** v4 는 너무 어리게 나왔다.
> 나이 표현을 한 단어에 맡기지 않고 여러 겹으로 겹쳤다 — `a young woman in her late teens`, `mature and composed`, `tall with adult proportions`, `a slender oval face with a defined jawline and a long neck`.
> **얼굴형과 목 길이를 적은 것이 핵심이다.** 이 모델은 나이 형용사만으로는 잘 안 바뀌고 비율을 직접 지정해야 움직인다.
> 네거티브에 `(child:1.6) (little girl:1.6) (kid:1.5) round chubby face, oversized head, short stubby limbs, chibi, loli` 를 걸었다.

```text
the heroine sets out alone, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, no one else in the frame, a young woman in her late teens, mature and composed, tall with adult proportions, a slender oval face with a defined jawline and a long neck, calm level eyes, soft pink short bob hair and clear pink eyes, in ordinary everyday travel clothes, a simple cream blouse with rolled sleeves, a plain brown skirt and sturdy boots, a light travel cloak, no school uniform, wearing a large travel backpack on her shoulders, holding a big unfolded paper map open in both hands and peering down at it with a small determined frown, leaning slightly forward, her weight shifted onto one foot as if about to keep walking, a dirt road winding off toward distant blue hills, scattered trees, bright open sky, the beginning of a long journey taken by herself
```

### 네거티브 프롬프트 v5

```text
(child:1.6), (little girl:1.6), (kid:1.5), toddler, baby face, round chubby face, childish proportions, oversized head, big head, short stubby limbs, chibi, loli, very young, elementary school, small child body, school uniform, academy uniform, sailor collar, blazer, necktie, pleated skirt, two people, second person, man, boy, male, companion, escort, knight, figure in the background, person watching, onlooker, silhouette of a person, folded map, closed book, scroll, no map, no backpack, night, dark, indoors, crowd, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v6

> **성숙화를 되돌렸다.** v5 의 `late teens / adult proportions / defined jawline` 조합이 과하게 먹어 인물이 달라졌다. v4 의 서술로 복귀한다 — 나이 지시를 아예 넣지 않는다.
> 대신 **시드를 12개로 늘려** 원하는 나이대가 나온 컷을 고른다. 이 모델에서 나이는 프롬프트로 미세조정하기 어렵고 시드 편차가 더 크다.

```text
the heroine sets out alone, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, no one else in the frame, a pure young heroine with soft pink short bob hair and big clear pink eyes, in ordinary everyday travel clothes, a simple cream blouse with rolled sleeves, a plain brown skirt and sturdy boots, a light travel cloak, no school uniform, wearing a large travel backpack on her shoulders, holding a big unfolded paper map open in both hands and peering down at it with a small determined frown, leaning slightly forward, her weight shifted onto one foot as if about to keep walking, a dirt road winding off toward distant blue hills, scattered trees, bright open sky, the beginning of a long journey taken by herself
```

### 네거티브 프롬프트 v6

```text
school uniform, academy uniform, sailor collar, blazer, necktie, pleated skirt, two people, second person, man, boy, male, companion, escort, knight, figure in the background, person watching, onlooker, silhouette of a person, folded map, closed book, scroll, no map, no backpack, night, dark, indoors, crowd, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 26. villainess_declaration — 서막 · 메인 악녀 선언 (막 소모 X)

### 이미지 생성 프롬프트

```text
the empty title is claimed, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, an empty ornate throne standing alone at the top of a short flight of stone steps in a dim hall, a single shaft of cold light falling on the vacant seat, and around it three or four figures rendered entirely as dark faceless silhouettes standing at the foot of the steps looking up at it, none of them yet on the throne, one of them just beginning to step forward, long shadows stretching back across the floor, a title waiting for whoever dares take it
```

### 네거티브 프롬프트

```text
recognizable faces, clear facial features, character sitting on the throne, crowd, bright lighting, outdoors,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **옥좌의 바토리로 예시를 넣었다.** 추상적인 '빌런 선언'이 아니라 **한 인물이 관람자에게 무릎 꿇으라 명령하는** 구체적 장면으로 바꿨다.
> 시점이 핵심이다 — `seen from below at a steep low angle so the viewer looks up at her` + 손바닥을 아래로 관람자를 향해 뻗는다. 네거티브에 `eye level, high angle, from above`.
> **작은 체구 vs 거대한 옥좌**의 대비(`her small figure dwarfed by the huge throne yet completely in command of it`)가 바토리의 위압을 만든다.

```text
kneel, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, an ancient vampire queen with short white bob hair, glowing crimson red eyes and small fangs, pale porcelain skin, a worn gothic black and red dress, seated high on a massive ancient stone throne, seen from below at a steep low angle so the viewer looks up at her, her small figure dwarfed by the huge throne yet completely in command of it, one leg crossed over the other and one elbow on the armrest with her chin resting on her knuckles, her other arm extended straight out and down toward the viewer, palm turned down, commanding the viewer to kneel, her crimson eyes fixed on the viewer and a small cold smile showing one fang, her chin lifted, absolute and unbothered, tattered banners and cracked stone columns rising away behind the throne into darkness, a shaft of cold light falling across the throne, faint mist around its base, the villainess declares herself
```

### 네거티브 프롬프트 v2

```text
second person, two people, crowd, subjects, servants, kneeling people, standing, walking, lying down, eye level, high angle, from above, looking down at her, frightened, sad, uncertain, gentle smile, laughing loudly, black hair, long hair, blonde hair, blue eyes, modern clothes, bright daylight, cheerful, blood, gore, fangs bared in rage, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 27. north_conquest — 북부 정벌 — 북부의 마녀 (1장)

### 이미지 생성 프롬프트

```text
the north is put down, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a young girl with soft pink short bob hair and big clear pink eyes in a modest neat academy uniform, no armor and no weapons advances at the front with a tall young nobleman rendered as a dark backlit silhouette with his face unlit and unreadable, no single feature identifying which man he is, his coat edged with rim light a step behind her, both entering a frozen northern crypt, and ahead of them a petite ancient vampire with short white bob hair, glowing crimson eyes and small fangs, pale porcelain skin, a worn gothic black and red dress stands her ground alone in the dark with her fangs bared and one hand raised, cold blue mist and cracked stone, a reckoning arriving with the dawn light behind it
```

### 네거티브 프롬프트

```text
visible male face, clear male facial features, 3girls, crowd, blood, daylight interior,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **잔느 + 지크프리트가 실루엣 악녀를 무찌른다.** 악녀는 **이제벨**이므로 실루엣 안에서도 식별되도록 `a broad cloth wrapping visible across her eyes even in silhouette` (눈을 감은 붕대)와 `long wild hair, torn ragged robes` 를 남겼다.
> ⚠️ **실루엣 지시가 주인공에게 옮겨붙지 않도록** 네거티브에 `silhouette on the heroine, silhouette on the knight, unlit heroine` 을 넣었다. 이번 세션에서 반복 확인한 속성 누출 대책이다.

```text
the north is taken, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, three people in a ruined northern hall, in the foreground with their backs three-quarters to the viewer, side by side, a pure young heroine with soft pink short bob hair and big clear pink eyes, a modest neat academy uniform with a simple ribbon, and a male lead with jet black hair and sharp crimson red eyes, a cold noble expression, an ornate black military coat with silver embroidery and metal gauntlets, both fully lit and clearly visible, standing together and pressing forward, the heroine with her fists clenched at her chest and her face set, the knight with a straight sword drawn and levelled ahead of him, and facing them across the hall, raised on a low dais, a tall witch rendered as a solid black backlit silhouette with no visible face and no visible features, her long wild hair and torn ragged robes flaring out around her in a jagged outline, both arms flung wide, a broad cloth wrapping visible across her eyes even in silhouette, a burst of cold white light behind her throwing her whole shape into darkness, cracked stone, snow drifting in through a broken roof, the north falls tonight
```

### 네거티브 프롬프트 v2

```text
visible face on the witch, lit witch, detailed witch face, witch in full color, silhouette on the heroine, silhouette on the knight, unlit heroine, shadowed hero faces, golden blond hair on the man, turban, clergy vestments, purple cape, four people, five people, crowd, army, smiling, cheerful, calm, gore, blood, dismemberment, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v3

> **두 가지를 고쳤다.**
> 1. **지크프리트 복제** — `(exactly three people and nobody else:1.5)` + `(only one man in the whole picture:1.5)` 로 못박고, 네거티브에 `(two knights:1.7) (two men:1.7) (two black-haired men:1.7) two swords, two military coats`.
> 2. **검이 안 꽂혔다** — `(a single straight sword driven deep into the centre of her chest:1.6)`, `buried to the hilt and clearly passing into the black silhouette`. 네거티브에 `sword held up, sword raised overhead, sword not touching her` 로 실패형을 직접 막았다.
> ⚠️ 상대가 **검은 실루엣**이라 관통을 그려도 상처를 그릴 필요가 없다. `daisy_dispose` 에서 관통이 끝내 안 됐던 것과 조건이 다르다 — 거기서는 피부에 꽂아야 해서 `blood, wound` 네거티브와 모순됐다.

```text
the north is taken, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, (exactly three people and nobody else:1.5), (only one man in the whole picture:1.5), a ruined northern hall, in the centre of the frame a tall witch rendered as a solid black backlit silhouette with no visible face and no visible features, her long wild hair and torn ragged robes flaring out in a jagged outline, a broad cloth wrapping visible across her eyes even in silhouette, she is thrown back with her head tipped up and both arms flung out, and (a single straight sword driven deep into the centre of her chest:1.6), the blade buried to the hilt and clearly passing into the black silhouette, one lone male knight, a male lead with jet black hair and sharp crimson red eyes, a cold noble expression, an ornate black military coat with silver embroidery and metal gauntlets, standing close in front of her with both hands still gripping that sword hilt, his arms extended straight forward from the thrust, his weight forward on one leg, seen from the side so both his face and the impaled silhouette read clearly, and behind him a pure young heroine with soft pink short bob hair and big clear pink eyes, a modest neat academy uniform with a simple ribbon, standing a few steps back with her fists closed at her chest, watching, a burst of cold white light exploding outward from the wound behind the blade, cracked stone, snow drifting in through a broken roof, the north falls tonight
```

### 네거티브 프롬프트 v3

```text
(two knights:1.7), (two men:1.7), (two black-haired men:1.7), (duplicate character:1.6), (same character twice:1.6), twins, clone, mirrored pose, two swords, two military coats, sword held up, sword raised overhead, sword at his side, sword not touching her, sword missing, empty hands, weapon floating, visible face on the witch, lit witch, detailed witch face, witch in full color, silhouette on the heroine, silhouette on the knight, unlit heroine, shadowed hero faces, golden blond hair on the man, turban, clergy vestments, purple cape, four people, five people, crowd, army, smiling, cheerful, gore, blood, dismemberment, severed limb, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 28. south_purge — 남부 숙청 — 남부의 보석 (1장)

### 이미지 생성 프롬프트

```text
the south is purged, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a young girl with soft pink short bob hair and big clear pink eyes in a modest neat academy uniform, no armor and no weapons enters a southern cathedral with a tall young nobleman rendered as a dark backlit silhouette with his face unlit and unreadable, no single feature identifying which man he is, his coat edged with rim light at her shoulder, and facing them across the nave stand two women, on the left a stoic church executioner with long loose brown hair and deep copper tanned skin, a plain silver half-mask covering only the upper right quarter of her face over her right eye and temple and stopping above her cheekbone with her nose and mouth and entire left half bare, small live flames along the mask edge, a cross pendant at the center of her chest, drawing a straight longsword low at her side, on the right a saintess candidate with pale blonde hair whose long heavy straight bangs fall completely over her eyes with only a faint golden glow seeping through, a blank expressionless face, white and gold priestess vestments and a tall pointed white mitre, perfectly still with her hands folded, cold light from tall narrow windows, an institution finally being called to account
```

### 네거티브 프롬프트

```text
visible male face, clear male facial features, crowd, blood, mouth mask, mask over mouth,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **조반니 + 잔느가 루크레치아를 단두대로 보낸다.** 루크레치아는 **실루엣만** — 드릴 컬과 넓은 치마, 그리고 손에 든 부채로 식별된다.
> ⚠️ 처형 장면이지만 **피와 참수는 전부 네거티브**로 막았다. 단두대 날은 아직 위에 있고, 그림은 집행 **직전**에서 멈춘다.
> 여기서도 실루엣 누출 방지(`silhouette on the heroine, unlit faces on the pair`)를 넣었다. 이전 버전의 제노비아(교회 처형인)는 나오지 않으므로 네거티브로 배제했다.

```text
the south is purged, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, three people in a southern cathedral square at dawn, in the foreground on the left a pure young heroine with soft pink short bob hair and big clear pink eyes, a modest neat academy uniform with a simple ribbon, and on the right a gentle young clergyman with soft black hair and warm brown eyes, ornate white and crimson clergy vestments with gold cross embroidery, standing side by side and fully lit with their faces clearly visible, both looking ahead grimly, the clergyman with one hand raised in a formal sentence and the heroine with her hands clasped tight, and beyond them on a raised wooden scaffold a tall guillotine standing against the sky, its heavy angled blade raised at the top of the frame, and kneeling at its base a noble woman rendered as a solid black backlit silhouette with no visible face, her long ringlet curls and wide skirt clear in her outline, a folding fan still held in one silhouetted hand, pale dawn light behind the scaffold, dark crowd-less square, a verdict carried out by people who did not want to
```

### 네거티브 프롬프트 v2

```text
visible face on the kneeling woman, lit noble woman, detailed face on the silhouette, silhouette on the heroine, silhouette on the clergyman, unlit faces on the pair, black hair on the clergyman, crimson red eyes, military coat, turban, purple cape, executioner, church executioner, silver mask, four people, five people, crowd, spectators, smiling, cheerful, blood, gore, severed head, decapitation, dismemberment, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 29. east_coup — 동부 정변 — 제국의 장미 (1장)

### 이미지 생성 프롬프트

```text
the east turns over, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a young girl with soft pink short bob hair and big clear pink eyes in a modest neat academy uniform, no armor and no weapons strides into a grand eastern palace hall with a tall young nobleman rendered as a dark backlit silhouette with his face unlit and unreadable, no single feature identifying which man he is, his coat edged with rim light beside her, and before them two women stand together, in front a haughty young noblewoman with bright golden blonde twin rolled bun curls, sharp upturned icy blue eyes, a structured jade green court gown with long white lace gloves, chin up and jaw tight, behind her a quiet young maid with brown hair tied up in a bun, downcast eyes, a black and white victorian maid uniform, head bowed with one hand at her chest, gold banners tearing loose and marble columns behind, a court eating its own
```

### 네거티브 프롬프트

```text
visible male face, clear male facial features, crowd of nobles, blood, smiling,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **실루엣 처리를 폐기하고 인물을 특정했다.** 남주 = **가이우스**, 여주 = **잔느**로 얼굴이 다 보이게 한다. 네거티브에 `silhouette, unlit face, faceless man` 을 넣었다.
> 배경에 **데이지와 샬롯**을 흐릿하게 세웠다 — `small and softly out of focus`. 앞으로 나오지 않도록 `daisy in the foreground, charlotte in the foreground, large background figures` 를 네거티브에 넣었다.

```text
the eastern court turns, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, four people in an eastern imperial throne hall, in the foreground on the right a pure young heroine with soft pink short bob hair and big clear pink eyes, a modest neat academy uniform with a simple ribbon, standing straight with her jaw set and her hands closed at her sides, and beside her on the left a crown prince with golden blond hair and piercing azure blue eyes, ornate white and gold imperial regalia with layered gold chains and a rich purple cape, a golden laurel wreath, fully lit and clearly visible with his face plainly shown, one hand raised in a firm declaration, his expression cold and certain, and far behind them in the dim depths of the hall, small and softly out of focus, two women watching, on one side a quiet young maid with brown hair in a neat bun, a black and white victorian maid uniform with a small frilled headdress, standing perfectly still with her hands folded, and on the other side a young noble lady with bright golden blonde hair in twin rolled bun curls and clear blue eyes, an elegant pastel noble dress, one hand at her mouth, tall red lacquered columns and gold dragon banners, cold light from high windows, the moment a court changes hands
```

### 네거티브 프롬프트 v2

```text
silhouette, backlit silhouette, unlit face, shadowed face, faceless man, dark figure, hidden face on the man, obscured face, black hair on the prince, crimson red eyes, turban, clergy vestments, five people, six people, crowd, army, soldiers, daisy in the foreground, charlotte in the foreground, large background figures, sharp background, everything in focus, smiling, cheerful, celebration, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v3

> **데이지·샬롯을 실루엣으로.** v2 는 배경 인물이 흐릿하게 채색돼 있었다.
> 실루엣 안에서도 누구인지 읽히도록 **옷의 윤곽**으로 구분했다 — 데이지는 `fitted maid uniform with a full skirt, an apron tied at the waist, a small frilled headdress`, 샬롯은 `wide layered ball gown with a fitted bodice, two round rolled buns on either side of her head`.
> ⚠️ 실루엣 지시가 앞의 두 사람에게 옮겨붙지 않도록 네거티브에 `silhouette on the heroine, silhouette on the prince, unlit hero faces` 를 넣었다.

```text
the eastern court turns, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, four people in an eastern imperial throne hall, in the foreground on the right a pure young heroine with soft pink short bob hair and big clear pink eyes, a modest neat academy uniform with a simple ribbon, and beside her on the left a crown prince with golden blond hair and piercing azure blue eyes, ornate white and gold imperial regalia with layered gold chains and a rich purple cape, a golden laurel wreath, both fully lit and clearly visible with their faces plainly shown, the heroine standing straight with her jaw set, the prince with one hand raised in a firm declaration, his expression cold and certain, and far behind them in the dim depths of the hall two women standing still and watching, both of them rendered only as solid black backlit silhouettes with no visible faces and no visible features, small and set well back, one silhouette clearly a maid, the outline of a fitted maid uniform with a full skirt, an apron tied at the waist and a small frilled headdress on her head, her hands folded in front of her, the other silhouette clearly a noble lady, the outline of a wide layered ball gown with a fitted bodice, and two round rolled buns on either side of her head, tall red lacquered columns and gold dragon banners, cold light from high windows behind them throwing both watchers into darkness, the moment a court changes hands
```

### 네거티브 프롬프트 v3

```text
lit background figures, visible faces on the watchers, detailed faces in the background, colored dresses on the watchers, full color background women, silhouette on the heroine, silhouette on the prince, unlit hero faces, shadowed foreground, background women in the foreground, large background figures, black hair on the prince, crimson red eyes, turban, clergy vestments, five people, six people, crowd, army, soldiers, smiling, cheerful, celebration, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v4

> **구도를 바꿨다 — 대전을 걸어 들어가는 둘.** 정면 대치에서 **뒷모습으로 중앙 통로를 걸어가는** 구성으로 옮겼다. 저 끝에 빈 옥좌가 기다린다.
> 샬롯·데이지는 **언급 자체를 뺐다.** 배경에 남지 않도록 네거티브에 `maid, apron, frilled headdress, noble lady in a ball gown, rolled buns, figures in the background, silhouettes of people` 를 넣었다.
> ⚠️ 완전한 뒷모습은 인물 식별이 안 되므로 `their faces turned just enough in profile to be readable` 로 반측면을 남겼다. `zenobia_sweep` 에서 뒷모습이 성공했던 것과 달리 여기는 **두 사람을 구분해야** 하기 때문이다.

```text
the eastern court turns, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, (exactly two people and nobody else:1.5), no other figures anywhere in the frame, a vast eastern imperial throne hall seen from behind and slightly to the side of the two walkers, in the centre of the frame, side by side and small against the scale of the hall, a heroine in her late teens, a slim young woman rather than a child, tall and long-limbed, soft pink short bob hair and clear pink eyes, a modest neat academy uniform with a simple ribbon, and beside her a crown prince with golden blond hair and piercing azure blue eyes, ornate white and gold imperial regalia with layered gold chains and a rich purple cape, a golden laurel wreath, the two of them walking away from the viewer straight down the long central aisle toward the distant throne, in step with each other, their backs mostly to the viewer with their faces turned just enough in profile to be readable, her chin up and her hands closed at her sides, his cape trailing behind him, a long red carpet running away beneath their feet, tall red lacquered columns marching away on both sides, gold dragon banners hanging between them, cold shafts of light falling across the aisle from high windows, the empty throne waiting far ahead at the end of the hall, long shadows stretching back toward the viewer, two people walking in to take a court
```

### 네거티브 프롬프트 v4

```text
third person, three people, four people, crowd, courtiers, guards, servants, soldiers, maid, apron, frilled headdress, noble lady in a ball gown, rolled buns, figures in the background, silhouettes of people, onlookers, watchers, facing the viewer, front view, standing still, sitting, occupied throne, someone on the throne, black hair on the prince, crimson red eyes, turban, clergy vestments, smiling, cheerful, celebration, outdoors, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v5

> **잔느를 교복으로.** v3 은 여행 복장(블라우스+갈색 치마+망토)으로 나갔다 — `jeanne_travel` 용으로 만든 서술이 이 카드에도 그대로 쓰였다.
> `(wearing a school uniform:1.5)` 로 가중치를 주고 세일러 칼라·리본·주름치마·무릎양말까지 구체적으로 적었다. 네거티브에 `(travel clothes:1.5) (cloak:1.4) backpack, plain brown skirt, boots, commoner clothes` 를 넣어 여행 복장이 다시 새는 것을 막았다.
> 나머지(대전 통로 구도·2인 고정·배경 인물 차단)는 v3 그대로.

```text
the eastern court turns, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, (exactly two people and nobody else:1.5), no other figures anywhere in the frame, a vast eastern imperial throne hall seen from behind and slightly to the side of the two walkers, in the centre of the frame, side by side and small against the scale of the hall, a heroine in her late teens, a slim young woman rather than a child, soft pink short bob hair and clear pink eyes, (wearing a school uniform:1.5), a neat academy school uniform with a white blouse, a sailor collar and a simple ribbon at the throat, a pleated skirt and knee socks, and beside her a crown prince with golden blond hair and piercing azure blue eyes, ornate white and gold imperial regalia with layered gold chains and a rich purple cape, a golden laurel wreath, the two of them walking away from the viewer straight down the long central aisle toward the distant throne, in step with each other, their backs mostly to the viewer with their faces turned just enough in profile to be readable, her chin up and her hands closed at her sides, his cape trailing behind him, a long red carpet running away beneath their feet, tall red lacquered columns marching away on both sides, gold dragon banners hanging between them, cold shafts of light falling across the aisle from high windows, the empty throne waiting far ahead at the end of the hall, long shadows stretching back toward the viewer, two people walking in to take a court
```

### 네거티브 프롬프트 v5

```text
(travel clothes:1.5), (cloak:1.4), travel cloak, backpack, blouse and long skirt, plain brown skirt, boots, peasant clothes, commoner clothes, dress, gown, casual clothes, third person, three people, four people, crowd, courtiers, guards, servants, soldiers, maid, apron, frilled headdress, noble lady in a ball gown, rolled buns, figures in the background, silhouettes of people, onlookers, watchers, facing the viewer, front view, standing still, sitting, occupied throne, someone on the throne, black hair on the prince, crimson red eyes, turban, clergy vestments, smiling, cheerful, celebration, outdoors, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 30. west_pacify — 서부 평정 — 서부의 꽃 (1장)

### 이미지 생성 프롬프트

```text
the west is pacified, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a young girl with soft pink short bob hair and big clear pink eyes in a modest neat academy uniform, no armor and no weapons walks into a torchlit western hall with a tall young nobleman rendered as a dark backlit silhouette with his face unlit and unreadable, no single feature identifying which man he is, his coat edged with rim light at her side, and across the sand-strewn floor an eerie poison master with wild red and green two-tone hair and hollow empty eye sockets with only depthless black voids where her eyes should be, a thin unnerving smile stands alone with a small glass vial already uncorked between two fingers, deep red drapery and warm torchlight, a fugitive who has stopped running
```

### 네거티브 프롬프트

```text
visible male face, clear male facial features, crowd, soldiers, blood, visible eyeballs,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **알렉과 잔느가 한 옥좌에 나란히 앉는다.** 좌석이 둘로 갈라지지 않도록 `one wide ornate desert throne ... broad enough for two` 로 명시하고 네거티브에 `two thrones, separate seats` 를 넣었다.
> **대비가 이 카드의 전부다** — 알렉은 팔꿈치를 걸치고 늘어지게 앉아 만족스럽고, 잔느는 좌석 끝에 뻣뻣이 걸터앉아 어쩔 줄 모른다. 감정이 서로 바뀌지 않도록 `jeanne confident/calm` 과 `prince flustered` 를 양쪽 다 막았다.

```text
the west is settled, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, exactly two people and nobody else, a pure young heroine with soft pink short bob hair and big clear pink eyes, a modest neat academy uniform with a simple ribbon, and a conqueror prince with long wavy jet-black hair under a white desert turban, a fine gold circlet across his forehead, sharp hawk-like dark eyes and deep bronze sun-tanned skin, a sleeveless white draped desert tunic with wide gold armbands, sitting side by side together on one wide ornate desert throne of pale sandstone and gold, the throne broad enough for two, the conqueror prince lounging back into his half of the throne with one elbow on the armrest and his legs apart, entirely at ease, a satisfied smirk on his face, turned slightly toward her, and the heroine perched stiffly upright beside him on the edge of the seat, (a flustered overwhelmed expression:1.5), her eyes wide and her eyebrows raised, her cheeks flushed, her hands pressed flat on her knees, not knowing what to do with herself, leaning very slightly away from him, warm sand and peach light, gauzy hanging drapes and gold ornaments behind the throne, she did not agree to this
```

### 네거티브 프롬프트 v2

```text
third person, three people, crowd, guards, servants, two thrones, separate seats, standing, jeanne confident, calm, composed, smug, angry, crying, prince flustered, embarrassed, nervous, blonde hair on the man, light hair, bare head, no turban, pale skin, western armor, kissing, embracing, romantic contact, explicit, cluttered background, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 31. emperor_token — 극동의 예언 — 황제의 증표 (3장, 동일 카드)

### 이미지 생성 프롬프트

```text
the emperor's proof waits on the far island, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, no people, no human figure, no character, a single ornate imperial seal of gold and deep red enamel resting alone on a weathered stone pedestal at the top of a windswept cliff on a far eastern island, thin clouds and open sea far below, a shaft of pale light falling directly on the seal, distant sails on the horizon, an object that decides who rules
```

### 네거티브 프롬프트

```text
people, human figure, character, hands, crowd, ship deck, indoors,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **용 문양으로.** 전 지역을 다스릴 자격이므로 상징을 용으로 잡았다.
> **동양 용**으로 명시했다 — `serpentine body, curling whiskers, antlers and clawed feet`. 네거티브에 `western dragon, wyvern, bat wings` 를 넣지 않으면 서양 드래곤이 나온다.
> 몸이 원주를 감고 **자기 꼬리를 물어 닫힌 고리**를 이루게 해서 원형 메달과 형태가 맞물리게 했다.

```text
the emperor's token, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a single ornate imperial token displayed alone at the exact center of the frame, a heavy round medallion of dark gold, and coiled around its full circumference a single long eastern dragon with a serpentine body, curling whiskers, antlers and clawed feet, the dragon biting its own tail so the body forms one closed ring, its scales finely engraved and its eyes set with small red gemstones, the dragon in high relief standing proud of the surface, a smaller flat disc at the centre inside the ring of the dragon's body, the token floating upright and seen straight on from the front, softly glowing, the right to rule every region in one object, plain dark gradient background with a subtle radial glow behind it and absolutely nothing else, no person, no hands, no scenery, clean iconic presentation
```

### 네거티브 프롬프트 v2

```text
person, human, face, hands, fingers, holding, western dragon, wyvern, bat wings, feathered wings, lizard, snake without limbs, two dragons, many dragons, crown, eagle, lion, cross, flower, star, skull, coin, currency, modern medal, ribbon, cluttered background, scenery, room interior, table, shelf, text, letters, words, inscription, flat plain disc, blank token, featureless, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v3

> **용은 각인이지 실물이 아니다.** v2 는 용이 메달을 감싸는 입체 조형으로 나왔다.
> `engraved into the face of that medallion, cut into the metal itself as a flat relief carving`, `the engraving shallow and contained entirely within the surface`, `just an engraved pattern on metal and nothing more` 로 못박았다.
> 네거티브에 `(dragon creature:1.7) (living dragon:1.7) dragon body outside the medallion, dragon head sticking out, dragon coiled around the altar` 를 걸었다.
> **제단 위에 놓인 상태**로 바꿨다 — 위에서 내려오는 빛 한 줄기와 텅 빈 어둠만 둔다.

```text
the emperor's token, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a single ornate imperial token resting on a low stone altar at the exact center of the frame, the token a heavy round medallion of dark gold lying flat on the altar's top surface, and engraved into the face of that medallion, cut into the metal itself as a flat relief carving, the coiled shape of an eastern dragon, its serpentine body curling around inside the disc, the engraving shallow and contained entirely within the surface of the medallion, just an engraved pattern on metal and nothing more, the altar a simple block of worn pale stone with a few carved lines along its edge, a single shaft of light falling straight down onto the token from above, the altar standing alone in a dark empty space with nothing around it, the right to rule every region in one object, plain dark background with absolutely nothing else, no person, no hands, no scenery, clean iconic presentation
```

### 네거티브 프롬프트 v3

```text
(dragon creature:1.7), (living dragon:1.7), (dragon flying:1.6), (dragon behind the altar:1.6), dragon in the sky, dragon body outside the medallion, dragon head sticking out, three dimensional dragon, dragon statue, dragon sculpture, dragon coiled around the altar, western dragon, wyvern, bat wings, feathered wings, person, human, face, hands, fingers, holding, crown, eagle, lion, cross, flower, star, skull, coin, currency, modern medal, ribbon, cluttered background, scenery, room interior, table, shelf, text, letters, words, inscription, blank token, featureless, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 32. ascension_gate — 승천의 문, 태동하다 (1장)

### 이미지 생성 프롬프트

```text
the gate of ascension stirs, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, no people, no human figure, no character, a vast circular stone gate buried in the foundations under the academy, its carved rings beginning to turn and split apart for the first time in centuries, pale white light bleeding out from the widening seam, dust and small stones lifting off the floor in the pull, broken pillars and old chains around it, something very old opening its eye
```

### 네거티브 프롬프트

```text
people, human figure, character, crowd, doorway with a person, daylight, outdoors,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **「승천의 문, 태동하다」 → 「세계의 진실을 깨달았노라」로 교체.**
> 문이 열리는 그림보다 **진실을 알아버린 순간**이 이 카드에 맞는다는 판단이다.
>
> [truth-clues.md](rules/truth-clues.md) 의 **세 축을 한 화면에** 담았다 —
> - 축 3 (소설이라는 메타 진실) → 밤하늘이 **책장처럼 젖혀지고** 뒷면에 필기가 빼곡하다
> - 축 1 (고대 SF 문명) → 그 찢어진 틈 너머로 **거대한 회로와 돌아가는 고리**가 보인다
> - 축 2 (승천) → 그 틈에서 내려오는 **한 줄기 흰빛**이 인물 위로 떨어진다
>
> 인물은 **작은 뒷모습 실루엣 하나**뿐이다. 얼굴을 그리면 특정 캐릭터의 카드가 되어버린다. `the stars on the unbroken part of the sky suddenly looking flat and painted` 를 넣어 **남은 하늘조차 그림이었다**는 것을 암시했다.
> 글자는 `faint indistinct handwritten script` 로 처리한다 — 2B 는 글자를 못 쓴다.

```text
i have seen the truth of this world, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, no people, no human figure except one distant silhouette, a lone small figure standing on a bare hilltop at the very bottom of the frame, seen from behind as a simple dark silhouette, arms hanging at their sides, head tipped all the way back to look up, tiny against what is above them, and filling the entire sky above, the night itself has split open, the darkness peeling back in great curling layers like the pages of an enormous book being turned, each peeled layer showing the underside of a page covered in endless rows of faint indistinct handwritten script, and behind the pages, glimpsed through the tear, vast ancient machinery, colossal circuit patterns and slowly turning rings of pale blue light stretching away forever, a single shaft of white light falling from the tear down onto the figure, loose torn page fragments drifting down through the air like snow, the stars on the unbroken part of the sky suddenly looking flat and painted, cold blue night below, pale gold light bleeding from the tear above, the moment someone learns what this place really is
```

### 네거티브 프롬프트 v2

```text
(many people:1.6), crowd, group, several figures, visible face, detailed face, close-up of a person, large figure, character portrait, stone gate, circular gate, door, archway, portal ring, large readable letters, big bold title text, modern printed font, modern city, spaceship, robot, mecha, alien, cheerful, bright daylight, warm sunny sky, blood, gore, monster, demon, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 33. truth_gather — 진실의 규합 (1장)

### 이미지 생성 프롬프트

```text
the fragments of truth converge, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, no people, no human figure, no character, three ancient relic objects drifting slowly toward one another in the air above an open stone floor, thin threads of pale light stretching between them as they align, faint circular script turning in the air around them, dark vaulted space behind, scattered pieces finding each other
```

### 네거티브 프롬프트

```text
people, human figure, character, hands, crowd, books, library,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

## 34. grace_ledger — 살아남은 대해적 — 그레이스의 만물금본 (1장)

### 이미지 생성 프롬프트

```text
the great pirate survives and cashes in, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, a flamboyant pirate captain with short curly red bob hair, yellow amber eyes and a golden monocle over one eye, a gold-trimmed captain coat, stands braced on a salvaged deck with a heavy leather-bound ledger open in one arm, grinning with one corner of her mouth raised as she taps a line in it, stacks of gold coins and opened chests piled around her feet, the wreck of a burned ship behind her under a wide dusk sky, everything has a price and she has just found it
```

### 네거티브 프롬프트

```text
sinking, drowning, furious, crying, crowd of sailors, imperial warships, 2girls,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **주인공이 여자임을 명시.** `a flamboyant female pirate captain, a woman with ...` 로 앞뒤에서 두 번 못박고 `clearly a woman, feminine face and figure` 를 추가했다.
> 네거티브에 `man, male, boy, masculine face, beard, stubble` 를 넣었다. 선장·장부·금화 같은 요소가 남성으로 기울게 만드는 경향이 있다.

```text
the great pirate's ledger, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, a flamboyant female pirate captain, a woman with short curly red bob hair, yellow amber eyes and a golden monocle over one eye, a gold-trimmed captain coat, clearly a woman, feminine face and figure, seated on a sea chest in her ship's cabin with one boot up on the lid, a huge heavy leather-bound ledger open across her knees, one hand holding a quill and the other spread flat across the open page, she is looking up at the viewer over the top of the ledger with a sharp knowing smirk, her golden monocle catching the lamplight, stacks of gold coins, gemstones and rolled charts piled around her feet, warm lantern light, dark timber walls and a small round window behind her, everything in the world has a price written down somewhere
```

### 네거티브 프롬프트 v2

```text
man, male, boy, masculine face, flat chest on a man, beard, stubble, second person, two people, crowd, closed book, no ledger, empty hands, sad, crying, angry, frightened, modern clothes, modern office, computer, blood, gore, battle, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 35. miho_sorcerer_king — 요술의 왕 — 미호 (1장)

### 이미지 생성 프롬프트

```text
the sorcerer king awakens, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one character only, a studious young mage with long straight black hair, round glasses and dark eyes, a plain dark scholar robe, stands with both arms lowered and five glowing spell cards orbiting slowly around her, her glasses catching the light, a faint violet aura rising from the floor around her feet, tall dark bookshelves and a great moonlit window behind her, quiet power finally acknowledged
```

### 네거티브 프롬프트

```text
fox ears, fox tails, nine tails, crowd, no glasses, screaming, gore,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **요호족임을 영체로 드러낸다.** 하늘색 정령 에너지로 만든 **아홉 꼬리와 여우귀**를 몸 뒤에 부채꼴로 펼친다 — `made of pale sky-blue spirit energy, translucent and glowing`.
> ⚠️ 실제 동물이 나오지 않도록 네거티브에 `real fox, animal, four legs, fur, actual animal tail` 를 넣었다. `one tail, two tails` 로 꼬리 수도 고정.
> **얼굴을 포기하고 규모를 얻는다** — `a distant wide shot, the figure small in the frame, her face not visible and not important` + 네거티브 `close-up, portrait, large face`.
> 손에는 **요마변환기(장갑형)** 를 채웠다. `sub3-items/selected/clue_yokai_converter_01.png` 의 형태를 그대로 서술했다 — 갈라진 돌 밴드 + 손등의 주황 코어 + 균열 사이로 타는 룬.

```text
the sorcerer king, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a distant wide shot, the figure small in the frame and far away, her face not visible and not important, solo, one figure only, a mage girl in dark scholar mage robes with long black hair, floating high in the air far above a night landscape, arms spread wide, robes and hair streaming, and behind her a great fan of nine long fox tails made of pale sky-blue spirit energy, translucent and glowing, spreading out around her like a halo of light, a pair of pale blue spirit fox ears of the same glowing energy above her head, the whole spirit aura clearly reading as a fox spirit, on one of her outstretched hands a heavy dark stone gauntlet on her hand, cracked stone bands wrapped around her wrist and the back of her hand with a round glowing orange core disc set into it and orange rune lines burning through the cracks, and filling the sky all around her dozens of magic circles of every kind burning at once, wide glowing runic rings, cascading sigils, chains of light, drifting arrays of symbols, bolts of energy arcing between them, layered spell diagrams at many depths, a dark night sky and a small distant landscape far below, one person holding the whole sky
```

### 네거티브 프롬프트 v2

```text
close-up, portrait, bust shot, large face, face filling the frame, detailed face, standing on the ground, feet on the ground, indoors, real fox, animal, four legs, quadruped, fur, actual animal tail, brown tail, one tail, two tails, second person, two people, crowd, glasses in close-up, empty sky, no magic, plain background, blood, gore, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v3

> **세 가지가 어긋나 있었다.**
> 1. **뒷모습으로 나왔다** → `seen from the front, facing the viewer straight on` + 네거티브 `(back view:1.7) (seen from behind:1.7) (facing away:1.6)`
> 2. **실루엣이 아니었다** → `her whole body rendered as a dark solid silhouette against the light behind her, her face not visible, only her outline`
> 3. **마법이 뒤에 배경처럼 깔렸다** → `magic firing outward in every direction from her at once, beams and bolts shooting off to the left and right and up and down ... radiating outward to the edges of the frame`. 사방으로 **뻗어나가는** 것이 요점이다.
> 꼬리 수는 `one tail, two tails, three tails` 를 막아 아홉으로 고정한다.

```text
the sorcerer king, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a distant wide shot, the figure small in the frame and far away, solo, one figure only, a lone mage girl seen from the front, facing the viewer straight on, her whole body rendered as a dark solid silhouette against the light behind her, her face not visible, only her outline, long hair and wide scholar mage robes streaming, she is floating high in the empty night sky far above the ground, both arms flung wide open to either side, and spreading out behind and around her a great fan of nine long fox tails made of pale sky-blue spirit energy, translucent and glowing, curling outward like flames, a pair of pale blue spirit fox ears of the same glowing energy above her head, the aura clearly reading as a nine-tailed fox spirit wrapped around her, on one outstretched hand a heavy dark stone gauntlet on one hand, cracked stone bands around the wrist and the back of the hand with a round glowing orange core disc set into it and orange rune lines burning through the cracks, and magic firing outward in every direction from her at once, beams and bolts of light shooting off to the left and right and up and down, glowing runic circles opening in the air all around her at many depths, chains of sigils and scattering sparks radiating outward to the edges of the frame, a dark night sky and a small distant landscape far below her, one person holding the whole sky
```

### 네거티브 프롬프트 v3

```text
(back view:1.7), (seen from behind:1.7), (facing away:1.6), back turned, rear view, close-up, portrait, bust shot, large face, face filling the frame, detailed face, visible face, standing on the ground, feet on the ground, indoors, floor, real fox, animal, four legs, quadruped, fur, actual animal tail, brown tail, one tail, two tails, three tails, second person, two people, crowd, single magic circle, one spell, empty sky, no magic, plain background, blood, gore, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 36. dead_chorus — 사자들의 합창 (2장)

### 이미지 생성 프롬프트

```text
the dead sing together, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, no people, no human figure, no character, a dense crowd of pale translucent spirits rising out of the ground with their mouths open in song, rendered as faceless glowing silhouettes packed shoulder to shoulder, thin white vapor streaming upward from them into a black sky, scattered bone-white skulls half buried in the earth in the foreground, a cold chorus swelling
```

### 네거티브 프롬프트

```text
recognizable faces, clear facial features, main character, living person, gore, blood, daylight,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **혼령을 하나로 줄였다.** v1 은 하늘색 혼령이 화면을 가득 채워 정신이 없었다.
> 대표 악령 **하나**가 고개를 젖히고 소리 없이 웃는 것만 그린다. 네거티브에 `(many ghosts:1.7) (crowd of spirits:1.7) swarm, horde, dozens of faces` 를 걸었다.
> 아래 다음 버전은 **키메라 안**이다. 둘 다 뽑아 비교할 것.

```text
one spirit sings, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one spirit only, a single vengeful ghost filling the frame, one pale translucent spectral figure of a woman floating in the dark, seen from the chest up, her head tipped back and her mouth stretched wide open in a broad delighted grin, laughing without any sound, her eyes empty white slits, her long hair and the lower half of her body dissolving into drifting pale blue mist and thin trailing wisps, her edges soft and coming apart, a faint cold blue glow radiating from her, absolutely nothing else in the frame, no other ghosts and no crowd, a vast empty black night sky behind her with a few small drifting embers of blue light, the dead have started to enjoy this
```

### 네거티브 프롬프트 v2

```text
(many ghosts:1.7), (crowd of spirits:1.7), multiple ghosts, several spirits, swarm, horde, group of figures, dozens of faces, busy composition, cluttered, living person, solid body, opaque figure, sad, crying, screaming in pain, angry, terrified, gore, blood, rotting flesh, zombie, skeleton, bright daylight, warm light, cheerful, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v3

> **키메라 안.** 여러 시체가 **하나로 융합된 단일 개체**가 노래한다. 머리 여럿이 한 몸을 공유하고 목이 뿌리에서 이어진 형태다.
> 핵심은 `one single chorus coming out of one creature` — 혼령이 여럿이면 v1 의 산만함이 돌아온다. 네거티브에 `(separate ghosts:1.7) spirits standing apart, several complete bodies` 를 걸었다.
> ⚠️ 융합체는 고어로 흐르기 쉬워 `gore, exposed organs, dismemberment` 를 막았다. 반투명 영체라 살점 묘사가 필요 없다.

```text
the chimera choir, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, solo, one creature only, a single enormous chimera spirit filling the frame, one huge pale translucent ghost formed from many dead bodies fused together into a single mass, a tangled column of merged torsos and arms and shoulders growing out of one another, and at its top several human heads sharing one body, their necks joined at the base, every one of those heads tipped back with its mouth open wide, all of them singing together, one single chorus coming out of one creature, the whole thing pale blue and translucent with its lower mass dissolving into drifting mist, loose hands and faces half-absorbed into the surface of the body, a faint cold blue glow radiating from it, a vast empty black night sky behind it, the dead no longer separate
```

### 네거티브 프롬프트 v3

```text
(separate ghosts:1.7), (many individual figures:1.6), crowd of spirits, spirits standing apart, group of people, several complete bodies, living person, solid opaque body, gore, blood, rotting flesh, exposed organs, zombie, skeleton, dismemberment, bright daylight, warm light, cheerful, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
## 37. apocalypse_omen — 종말의 전조 (2장)

### 이미지 생성 프롬프트

```text
an omen of the end appears, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, no people, no human figure, no character, a huge blood-red crack splitting open across a black night sky above a silent empty landscape, thin red light spilling down from it onto bare ground, birds scattering away from it in the distance, a lone dead tree in the foreground, the world quietly being told what comes next
```

### 네거티브 프롬프트

```text
people, human figure, character, crowd, buildings, city, daylight, cheerful,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

## 38. jeanne_persuasion — 잔느의 설득 (1장)

### 이미지 생성 프롬프트

```text
the heroine pleads her case, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with soft painterly shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, a young girl with soft pink short bob hair and big clear pink eyes in a modest neat academy uniform, no armor and no weapons, stands in soft light with both hands held out open toward the viewer, leaning slightly forward with an earnest pleading expression and her brows drawn together, a faint holy glow clinging to her, and around her three or four dark faceless silhouettes standing half turned away, some of them beginning to look back at her, plain simple background, a last honest appeal to people who have already decided
```

### 네거티브 프롬프트

```text
recognizable faces on the others, clear facial features on the silhouettes, angry expression, weapons, armor, crowd of students, detailed background,
gore, dismemberment, excessive blood, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```


### 이미지 생성 프롬프트 v2

> **세 가지를 바꿨다.**
> 1. **측면 샷** — `seen from the side in profile, a side view of both of them`. 네거티브에 `front view, facing the viewer, frontal composition`
> 2. **주변 남자 실루엣 제거** — `(male silhouette:1.7) (man:1.6) figures in the background`
> 3. **잔느는 걱정, 샬롯은 눈물** — 감정을 각자에게 고정했다. `(a worried anxious expression:1.5)` / `(tears running down her cheek:1.4)`. 네거티브로 서로 바뀌는 것도 막았다 (`jeanne smiling`, `charlotte smiling`)

```text
the heroine reaches her, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, exactly two people and nobody else, seen from the side in profile, a side view of both of them, on the left a pure young heroine with soft pink short bob hair and big clear pink eyes, a modest neat academy uniform with a simple ribbon, turned toward the other girl in profile, leaning in slightly, (a worried anxious expression:1.5), her eyebrows drawn up and together in concern, her mouth small and tight, searching the other girl's face, one hand reaching out and resting gently on the other girl's shoulder, and on the right a young noble lady with bright golden blonde hair in twin rolled bun curls and clear blue eyes, an elegant pastel noble dress, also seen in profile facing her, her head bowed and her shoulders shaking, (tears running down her cheek:1.4), her eyes squeezed shut and her mouth trembling, one hand half raised toward her own face, finally letting go, a quiet empty stone corridor at dusk behind them, soft low light, no other people anywhere in the frame, someone finally got through to her
```

### 네거티브 프롬프트 v2

```text
(male silhouette:1.7), (man:1.6), (men:1.6), male figure, dark figure, silhouette of a person, figures in the background, onlookers, crowd, third person, front view, facing the viewer, looking at viewer, straight on, frontal composition, jeanne smiling, cheerful, calm confident expression on jeanne, charlotte smiling, laughing, angry, smug, arrogant, blood, gore, violence, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v3

> **두 사람 다 `late teens` 로.** `jeanne_here` v7 과 같은 처방 — 나이 한 줄만 주고 얼굴형·목 서술은 넣지 않는다. 네거티브에 `(child:1.5) (little girl:1.5) chibi, loli` 추가.
> 측면 샷·남자 실루엣 제거·감정 고정은 v2 그대로 유지.

```text
the heroine reaches her, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, (exactly two people and nobody else:1.5), seen from the side in profile, a side view of both of them, on the left a heroine in her late teens, a slim young woman rather than a child, tall and long-limbed, soft pink short bob hair and clear pink eyes, a modest neat academy uniform with a simple ribbon, turned toward the other girl in profile, leaning in slightly, (a worried anxious expression:1.5), her eyebrows drawn up and together in concern, her mouth small and tight, searching the other girl's face, one hand reaching out and resting gently on the other girl's shoulder, and on the right a noble lady also in her late teens, a slim young woman rather than a child, a young noble lady with bright golden blonde hair in twin rolled bun curls and clear blue eyes, an elegant pastel noble dress, also seen in profile facing her, her head bowed and her shoulders shaking, (tears running down her cheek:1.4), her eyes squeezed shut and her mouth trembling, one hand half raised toward her own face, finally letting go, a quiet empty stone corridor at dusk behind them, soft low light, no other people anywhere in the frame, someone finally got through to her
```

### 네거티브 프롬프트 v3

```text
(child:1.5), (little girl:1.5), kid, toddler, baby face, round chubby face, childish proportions, oversized head, big head, short stubby limbs, chibi, loli, (male silhouette:1.7), (man:1.6), (men:1.6), male figure, dark figure, silhouette of a person, figures in the background, onlookers, crowd, third person, front view, facing the viewer, looking at viewer, straight on, frontal composition, jeanne smiling, cheerful, calm confident expression on jeanne, charlotte smiling, laughing, angry, smug, arrogant, blood, gore, violence, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```

### 이미지 생성 프롬프트 v4

> **샬롯을 무릎 꿇린다.** `(kneeling on the floor:1.6)` + `sunk down onto both knees with her weight settled back on her heels, her wide skirt spread around her on the stone`.
> 잔느는 그에 맞춰 **몸을 낮춘다** — `bending down toward her, her knees slightly bent to come down to the kneeling girl's level`. 그냥 서 있으면 위압하는 그림이 된다.
> 네거티브에 `(charlotte standing:1.6) both girls standing` 과 `jeanne kneeling, both kneeling` 을 양쪽 다 넣어 **누가 꿇는지**를 고정했다. 측면 샷·남자 실루엣 제거·나이는 v3 유지.

```text
the heroine reaches her, romance fantasy webnovel card illustration, detailed anime style, clean crisp anime linework with flat cel shading, rich saturated color, one clear cinematic key light so the silhouettes read instantly, storybook illustration rather than photography, square composition, high detail, no text, no watermark, (exactly two people and nobody else:1.5), seen from the side in profile, a side view of both of them, on the right a noble lady in her late teens, a slim young woman rather than a child, bright golden blonde hair in twin rolled bun curls and clear blue eyes, an elegant pastel noble dress, (kneeling on the floor:1.6), sunk down onto both knees with her weight settled back on her heels, her wide skirt spread around her on the stone, her back curved and her head bowed low, her shoulders shaking, (tears running down her cheek:1.5), her eyes squeezed shut and her mouth trembling, both hands limp in her lap, completely undone, and on the left, standing over her and bending down toward her, a heroine in her late teens, a slim young woman rather than a child, tall and long-limbed, soft pink short bob hair and clear pink eyes, a modest neat academy uniform with a simple ribbon, leaning forward with her knees slightly bent to come down to the kneeling girl's level, (a worried anxious expression:1.5), her eyebrows drawn up and together in concern, her mouth small and tight, looking down into the other girl's face, one hand reaching out and resting gently on the kneeling girl's shoulder, a quiet empty stone corridor at dusk behind them, soft low light, no other people anywhere in the frame, someone finally got through to her
```

### 네거티브 프롬프트 v4

```text
(charlotte standing:1.6), both girls standing, noble lady upright, (child:1.5), (little girl:1.5), kid, toddler, baby face, round chubby face, childish proportions, oversized head, big head, short stubby limbs, chibi, loli, (male silhouette:1.7), (man:1.6), (men:1.6), male figure, dark figure, silhouette of a person, figures in the background, onlookers, crowd, third person, front view, facing the viewer, looking at viewer, straight on, frontal composition, jeanne kneeling, both kneeling, jeanne smiling, cheerful, calm confident expression on jeanne, charlotte smiling, laughing, angry, smug, arrogant, blood, gore, violence, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face, photorealistic, 3d render, glossy skin, shiny lips
```
