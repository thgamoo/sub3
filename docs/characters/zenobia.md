# 전처녀 - 제노비아 (Zenobia)

## 기본 정보

- 구분: 서브 빌런 (플레이어 캐릭터)
- 시작지점: 남부
- 시작자원: 금화 1, 검 2
- 모티프: 제노비아 여왕 (Queen Zenobia)

## 외모

- 구리빛 피부와 검은 눈
- 반쪽 가면 (오른쪽 얼굴의 화상을 가림)
- **화상은 영원히 타오른다** — 꺼지지 않는 불이 가면 가장자리와 오른쪽 얼굴에
  작게 계속 일렁인다. 활활 타오르는 큰 불이 아니라, 사그라들지 않는 잔불에 가깝다
- 긴 머리, 갈색 머리
- 후드나 두건은 쓰지 않는다
- 가슴 정중앙에 십자가 모양의 목걸이 (필수)

## 원래 운명

남부의 이교도 척살자로 유명했던 그녀는 광신도에게 오른쪽 얼굴에 화상을 입은 후 웃음을 잃었다. 교회의 사냥개가 되어 반인륜적인 짓도 서슴지 않던 그녀는 스토리 후반부에 주인공 일행에게 토벌되고 만다.

## 가능한 각성 능력

- 일반 각성 능력 전부

## 숨겨진 과거

그녀는 본래 동부제국의 황녀다. 황실 내에서 발언권이 낮아져 위험해진 황후는 대륙 동남부의 한적한 마을로 숨어 그녀를 홀로 키웠다. 그러나 이 사실을 알게 된 `제국의 장미 - 메살리나`의 음모로 악마숭배자의 딸이라는 낙인이 찍히며 기록말살형에 처해진다. 놀랍게도 황후와 그녀의 딸인 제노비아는 악마숭배자들의 먹이로 던져지게 된다.

악마숭배자들에게 쫓기던 제노비아는 `남부의 보석 - 루크레치아`를 만나 그녀의 도움으로 남부에 정착하게 된다. 사실 이조차도 루크레치아가 후에 메살리나를 곤란하게 만들 심산으로 몰래 빼돌린 것이었다. 검에 재능이 있던 그녀는 교회성기사단에 들어갔고, 순식간에 성기사단장을 쟁취한다. 그러나 악마숭배자들에게 깊은 증오를 품고 있는 그녀는 교회의 어둠이 되기를 자처했고, 교회가 점찍은 곳이라면 무자비한 학살을 행했다. 물론 루크레치아의 부탁도 꼬박꼬박 들어주고 있다.

## 과거의 단서

- "황가의 팬던트"
- "폐태자의 편지"
- "이교의 계약서"
- "교황칙서 (말살 - HAL, ZEN 이 적혀있음)"

## ⚠️ 가면 좌우 규약 (2026-08-04 확정)

**관람자 시점으로 적는다.** 화상은 제노비아 자신의 **왼쪽 눈**에 있지만,
프롬프트에는 화면에서 보이는 위치를 쓴다.

| 구도 | 프롬프트 표기 |
|---|---|
| **얼굴이 보이는 컷** (정면·측면) | **`right`** — 관람자의 오른쪽 |
| **뒷모습 컷** | **`left`** — 관람자의 왼쪽 |

캐릭터 포트레이트는 전부 정면이므로 **`right`** 로 통일한다.
`fate_art.md` 에서는 `zenobia_sweep`(뒷모습)만 `left`, 나머지는 `right`.

> 좌우를 캐릭터 기준으로 적었더니 결과가 계속 뒤집혔다.
> 모델은 화면에 그려질 위치를 기준으로 해석하므로 관람자 시점이 맞다.

## 이미지 생성 프롬프트 v7

> **더 플랫하게 + 가면 좌우 정정.**
>
> ⚠️ **v6 은 좌우가 모순이었다.** 2026-08-03 에 가면을 왼쪽 눈으로 정정하면서 `entire right half` → `entire left half` 만 치환되고 뒤따르는 `covering her right eye and right cheek` / `her left eye ... completely bare` 가 남아 있었다. v7 에서 **전부 왼쪽 눈 기준으로** 통일한다.
> 앞에서만 쓰는 가면이라 `no strap and no metal band crossing the back of her head` 도 명시했다.
>
> 평면화는 **입체감의 원인을 직접 지목**한다 — 음영 방식(`soft airbrush`, `smooth gradient`, `subsurface scattering`)과 광택(`glossy/shiny skin`, `specular`), 그리고 이 캐릭터에서 반복 지적된 **입술 볼륨**(`plump lips`, `glossy lips`)이다. 전부 1.4 로 건다.
> 포지티브에는 `(flat color:1.4) (hard-edged cel shading:1.4) simple two-tone shadows` 로 **그림자 단계 수를 줄이도록** 지시했다 — 음영이 많이 지는 것이 입체감의 주범이었다.

```text
cowboy shot, three-quarter view, eye level, even flat lighting,

Zenobia, a stoic church executioner, small steady flames flickering along her mask edge as a bright accent, the rest of her evenly lit with soft flat light,

 long brown hair worn loose, bare head with no hood and no head covering, dark eyes with no smile, deep copper tanned skin, a plain silver half-mask covering the entire right half of her face vertically, split down the middle of her face, the mask covering her right eye and right cheek from forehead to jaw, her left eye and the whole left half of her face completely bare and visible, her nose and mouth uncovered and clearly visible, small live flames still flickering steadily along the edge of the mask and across the scarred right side, an eternal burn that never goes out, the fire small and contained rather than engulfing her, the mask worn only on the front of her face with no strap and no metal band crossing the back of her head, simple white knight coat over a dark inner uniform, a prominent cross-shaped pendant necklace hanging clearly at the exact center of her chest, this cross necklace as her only jewelry, no weapon visible, (flat color:1.4), (anime coloring:1.3), (bold clean outlines:1.3), (hard-edged cel shading:1.4), few gradients, matte finish, broad areas of even color, simple two-tone shadows, muted dark gray flat background, tragic warrior queen aura, solemn and intimidating atmosphere, vertical composition
```

## 네거티브 프롬프트 v7

```text
(soft airbrush shading:1.4), (smooth gradient shading:1.4), (subsurface scattering:1.4), (glossy skin:1.4), (shiny skin:1.4), specular highlight, sheen, gloss, wet look, volumetric lighting, rim light, bloom, glow on skin, (plump lips:1.4), (glossy lips:1.4), lipstick, lip gloss, defined lips, (sparkling eyes:1.3), eye highlights, catchlight, glittering eyes, 3d, realistic, photorealistic, rendered, cgi, painterly rendering, oil painting, deep shading, heavy shadow, many shading steps, soft blended shadow, mask on the left eye, mask covering the left side of the face, mask strap, head strap, straps around the head, metal band across the back of the head, mouth mask, muzzle, mask over mouth, mask over nose, mask covering the lower face, surgical mask, respirator, gas mask, full face mask, masquerade mask over both eyes, both eyes covered, horizontal mask, dark scene, single light source, silhouette, backlit, dramatic lighting, chiaroscuro, strong shadows, hood, hooded cloak, cowl, head covering, veil, headscarf, raging fire, fire engulfing her head, wildfire, explosion, burning background, flames covering the whole face, pale skin, light skin, no necklace, missing cross pendant, cross off-center, no mask, full face visible, smiling expression, blonde hair, ornate armor, heavy jewelry, weapons, banners, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

## 이미지 생성 프롬프트

```text
A stoic female holy knight commander turned church executioner, romance fantasy webnovel style, detailed anime character portrait, long brown hair, dark eyes with no smile, copper tanned skin, plain silver half-mask covering the burned right side of her face, simple white knight coat over a dark inner uniform, a prominent cross-shaped pendant necklace hanging clearly at the exact center of her chest, this cross necklace as her only jewelry, no weapon visible, muted ash-gray and gold gradient background with no banners or ruins, tragic warrior queen aura, solemn and intimidating atmosphere, clean half body portrait, polished but not ornate, no text, no watermark
```

## 이미지 생성 프롬프트 v2

> 수정: 가면 주변에 타오르는 불꽃이 나오는 문제. `burned` 라는 단어가 불을 끌어옴.
> 화상 흔적(그을림·검댕)은 남기되 **활활 타는 불은 제거**. 십자가 목걸이는 그대로 유지.

```text
A stoic female holy knight commander turned church executioner, romance fantasy webnovel style, detailed anime character portrait, long brown hair, dark eyes with no smile, copper tanned skin, plain silver half-mask covering the scarred right side of her face, only faint dark scorch marks and soot staining around the edge of the mask, no active fire, no burning flames anywhere, simple white knight coat over a dark inner uniform, a prominent cross-shaped pendant necklace hanging clearly at the exact center of her chest, this cross necklace as her only jewelry, no weapon visible, muted ash-gray and gold gradient background with no banners or ruins, tragic warrior queen aura, solemn and intimidating atmosphere, clean half body portrait, polished but not ornate, no text, no watermark
```

## 이미지 생성 프롬프트 v3

> 수정 (설정 반영): 화상이 **영원히 타오른다**는 설정을 프롬프트에 반영.
> v2에서 불을 완전히 없앤 것을 되돌리되, 얼굴을 삼키는 큰 불이 아니라
> 가면 가장자리에 계속 일렁이는 **작은 잔불** 수준으로 통제.
> 또 v2에서 요청 없이 생겼던 **흰 후드를 제거**하고, 옅어진 피부를 구리빛으로 되돌림.

```text
A stoic female holy knight commander turned church executioner, romance fantasy webnovel style, detailed anime character portrait, long brown hair worn loose, bare head with no hood and no head covering, dark eyes with no smile, deep copper tanned skin, plain silver half-mask covering the eternally burning scar on the right side of her face, small live flames still flickering steadily along the edge of the mask and across the scarred right side, an eternal burn that never goes out, the fire small and contained rather than engulfing her, simple white knight coat over a dark inner uniform, a prominent cross-shaped pendant necklace hanging clearly at the exact center of her chest, this cross necklace as her only jewelry, no weapon visible, muted ash-gray and gold gradient background with no banners or ruins, tragic warrior queen aura, solemn and intimidating atmosphere, clean half body portrait, polished but not ornate, no text, no watermark
```

## 이미지 생성 프롬프트 v4

> 구도: **얼굴이 유일한 광원.** 각도가 아니라 **조명**으로 차별화한다. '화상이 영원히 타오른다(잔불)' 는 설정을 어두운 화면의 단일 광원으로 쓴다.

```text
cowboy shot, three-quarter view, eye level, dark scene, lit only by the fire on her own face,

Zenobia, a stoic church executioner standing in near darkness, the smoldering flames along her mask edge and scarred right cheek are the only light source, warm orange rim light on her jaw and shoulder, deep shadow everywhere else,

 long brown hair worn loose, bare head with no hood and no head covering, dark eyes with no smile, deep copper tanned skin, plain silver half-mask covering the eternally burning scar on the right side of her face, small live flames still flickering steadily along the edge of the mask and across the scarred right side, an eternal burn that never goes out, the fire small and contained rather than engulfing her, simple white knight coat over a dark inner uniform, a prominent cross-shaped pendant necklace hanging clearly at the exact center of her chest, this cross necklace as her only jewelry, no weapon visible, near-black background, darkness, tragic warrior queen aura, solemn and intimidating atmosphere, vertical composition
```

## 이미지 생성 프롬프트 v5

> **조명 개념을 물린 것.** `lit only by the fire on her own face` + `deep shadow everywhere else` 조합이 명암 대비를 극단으로 밀어서 **그림체가 3D 처럼 달라 보였다.**
> 불은 얼굴 오른쪽의 **강조 요소**로만 남기고 전체 조명은 평평하게 간다.

```text
cowboy shot, three-quarter view, eye level, even flat lighting,

Zenobia, a stoic church executioner, small steady flames flickering along her mask edge and scarred right cheek as a bright accent, the rest of her evenly lit with soft flat light,

 long brown hair worn loose, bare head with no hood and no head covering, dark eyes with no smile, deep copper tanned skin, plain silver half-mask covering the eternally burning scar on the right side of her face, small live flames still flickering steadily along the edge of the mask and across the scarred right side, an eternal burn that never goes out, the fire small and contained rather than engulfing her, simple white knight coat over a dark inner uniform, a prominent cross-shaped pendant necklace hanging clearly at the exact center of her chest, this cross necklace as her only jewelry, no weapon visible, muted dark gray flat background, tragic warrior queen aura, solemn and intimidating atmosphere, vertical composition
```

## 이미지 생성 프롬프트 v6

> **반가면을 세로 절반으로 못박은 것.** v5 에서 마스크가 **입·코를 덮는 형태**로 나왔다.
> 원래는 v1 처럼 **오른쪽 얼굴 절반(눈 포함)을 세로로 덮는** 가면이어야 한다.
> `half-mask` 만으로는 어느 절반인지 모델이 못 정해서 아래쪽 절반으로 간 것.
> **세로로 갈린다는 것 / 오른쪽 눈을 덮는다는 것 / 코와 입은 드러난다는 것**을 전부 명시한다.

```text
cowboy shot, three-quarter view, eye level, even flat lighting,

Zenobia, a stoic church executioner, small steady flames flickering along her mask edge and scarred right cheek as a bright accent, the rest of her evenly lit with soft flat light,

 long brown hair worn loose, bare head with no hood and no head covering, dark eyes with no smile, deep copper tanned skin, a plain silver half-mask covering the entire right half of her face vertically, split down the middle of her face, the mask covering her right eye and right cheek from forehead to jaw, her left eye and the whole left half of her face completely bare and visible, her nose and mouth uncovered and clearly visible, small live flames still flickering steadily along the edge of the mask and across the scarred right side, an eternal burn that never goes out, the fire small and contained rather than engulfing her, simple white knight coat over a dark inner uniform, a prominent cross-shaped pendant necklace hanging clearly at the exact center of her chest, this cross necklace as her only jewelry, no weapon visible, muted dark gray flat background, tragic warrior queen aura, solemn and intimidating atmosphere, vertical composition
```

## 네거티브 프롬프트 v6

```text
mouth mask, muzzle, mask over mouth, mask over nose, mask covering the lower face,
surgical mask, respirator, gas mask, full face mask, masquerade mask over both eyes,
both eyes covered, horizontal mask,
dark scene, deep shadow, single light source, silhouette, backlit, dramatic lighting, chiaroscuro, strong shadows,
bright lighting, evenly lit, daylight, flat even lighting, sunlit, well-lit background,
hood, hooded cloak, cowl, head covering, veil, headscarf, raging fire, fire engulfing her head, wildfire, explosion, burning background, flames covering the whole face, pale skin, light skin, no necklace, missing cross pendant, cross off-center, no mask, full face visible, smiling expression, blonde hair, ornate armor, heavy jewelry, weapons, banners, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

## 네거티브 프롬프트 v5

```text
dark scene, deep shadow, single light source, silhouette, backlit, dramatic lighting, chiaroscuro, strong shadows,
bright lighting, evenly lit, daylight, flat even lighting, sunlit, well-lit background,
hood, hooded cloak, cowl, head covering, veil, headscarf, raging fire, fire engulfing her head, wildfire, explosion, burning background, flames covering the whole face, pale skin, light skin, no necklace, missing cross pendant, cross off-center, no mask, full face visible, smiling expression, blonde hair, ornate armor, heavy jewelry, weapons, banners, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

## 네거티브 프롬프트 v4

```text
bright lighting, evenly lit, daylight, flat even lighting, sunlit, well-lit background,
hood, hooded cloak, cowl, head covering, veil, headscarf, raging fire, fire engulfing her head, wildfire, explosion, burning background, flames covering the whole face, pale skin, light skin, no necklace, missing cross pendant, cross off-center, no mask, full face visible, smiling expression, blonde hair, ornate armor, heavy jewelry, weapons, banners, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

## 네거티브 프롬프트 (Negative Prompt)

```text
hood, hooded cloak, cowl, head covering, veil, headscarf, raging fire, fire engulfing her head, wildfire, explosion, burning background, flames covering the whole face, pale skin, light skin, no necklace, missing cross pendant, cross off-center, no mask, full face visible, smiling expression, blonde hair, ornate armor, heavy jewelry, weapons, banners, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

> v3에 맞춰 네거티브 조정: 불을 통째로 막던
> `large flames, blazing fire, burning fire, roaring flames, fire sparks, floating embers, glowing embers` 를
> 제거하고, **과열만 막는** `raging fire, fire engulfing her head, wildfire, explosion, burning background,
> flames covering the whole face` 로 교체. 후드 억제 항목과 `pale skin, light skin` 추가.
