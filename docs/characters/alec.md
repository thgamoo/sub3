# 알렉 (Alec)

## 기본 정보

- 구분: 남주
- 시작지점: 서부
- 모티프: 알렉산더 대왕 (Alexander the Great)

## 설정

- 끊임없는 전투가 일어나는 서부의 패자.
- 정복자 기질의 야성적인 로판 스타일 남주.

## 외모

- 터번, 곱슬머리, 날카로운 눈, 중동풍 왕자

## 이미지 생성 프롬프트 v5

> **`west_pacify` 카드에서 나온 알렉이 훨씬 평평했다.** 그쪽 문구를 포트레이트로 옮긴 것이다.
> 차이는 두 가지였다 — 카드 프롬프트에는 **`clean crisp anime linework with flat cel shading` 이 앞머리에 들어가 있고**, 인물 서술이 짧아 화풍 지시가 희석되지 않았다.
> 여기에 제노비아 v7 에서 쓴 평면화 처방을 얹는다 — `only two shading steps, one flat base tone and one flat shadow tone ... no third tone`.
> **코와 입술을 따로 지목했다.** 이 캐릭터에서 반복 지적된 부위라 전역 지시로는 안 잡힌다 — 포지티브에 형태를 규정하고(`one thin minimal line`) 네거티브에 `(defined nose:1.5) (nose shading:1.5) (plump lips:1.5)` 를 걸었다.
> v4 의 나이·수염·체격 조항은 그대로 유지한다.

```text
A fierce and charismatic young conqueror prince, a young man of eighteen, romance fantasy webnovel male lead, detailed anime style character portrait, clean crisp anime linework with flat cel shading, rich saturated color, long wavy jet-black hair spilling out from under a white desert turban, a fine gold chain circlet with a small gem across his forehead, sharp hawk-like dark eyes with a stern commanding gaze, deep bronze sun-tanned skin, athletic build, sleeveless white draped desert tunic with a deep V neckline leaving his arms and collarbone bare, wide gold armbands on his upper arms and gold bracelets at his wrists, layered gold pendant necklaces with a turquoise stone, a broad colored silk sash at his waist with gold ornaments, (flat color:1.4), (anime coloring:1.3), (hard-edged cel shading:1.5), (simple two-tone shading:1.5), only two shading steps, one flat base tone and one flat shadow tone with a hard clean edge between them, no third tone, (matte skin with no shine:1.5), broad areas of even unbroken color, bold clean outlines, even ambient light with no strong direction, (a flat simple nose drawn as one thin minimal line:1.4), no shading and no highlight on the nose, (flat plain lips drawn as one simple line:1.4), no lip volume and no gloss, warm sand and peach gradient background with no detailed scenery, wild and commanding conqueror aura, clean half body portrait, high detail, no text, no watermark
```

## 네거티브 프롬프트 v5

```text
(soft airbrush shading:1.5), (smooth gradient shading:1.5), (subsurface scattering:1.5), (blended shadow:1.4), (many shading steps:1.4), (deep shading:1.4), (heavy shadow:1.4), shadow under the nose, shadow under the cheekbone, contact shadow, ambient occlusion, (glossy skin:1.5), (shiny skin:1.5), specular highlight, sheen, gloss, oiled skin, sweaty skin, rim light, volumetric lighting, bloom, dramatic lighting, chiaroscuro, (defined nose:1.5), (nose shading:1.5), sharp nose bridge, prominent nose, sculpted nose, nostril shadow, (plump lips:1.5), (defined lips:1.4), lip highlight, middle-aged, older man, stubble, beard, facial hair, mustache, rugged weathered face, heavy square jaw, nasolabial folds, wrinkles, blonde hair, light hair, straight hair, bare head, no turban, pale skin, western knight armor, full plate armor, crown, oversized weapon, cluttered detailed background, 3d, realistic, photorealistic, rendered, cgi, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

## 이미지 생성 프롬프트

```text
A fierce and charismatic young conqueror prince, romance fantasy webnovel male lead, detailed anime style character portrait, dark curly hair under a simple jeweled turban, sharp hawk-like eyes, sun-kissed skin, Middle Eastern prince aesthetic, refined desert royal garments with restrained gold accents, a curved scimitar only subtly visible at his waist, minimal warm sand-colored gradient background with no detailed scenery, wild and commanding conqueror aura, clean half body portrait, high detail, no text, no watermark
```

## 이미지 생성 프롬프트 v2

> 역반영: v1으로 생성한 결과가 채택됨. 실제 출력에 맞춰 프롬프트를 다시 기술.
> v1의 "곱슬머리"는 실제로는 길고 굵은 웨이브로, "정제된 사막 왕족 의상"은
> 소매 없는 드레이프 튜닉 + 드러난 팔로 나왔고 금장식도 v1의 "restrained" 보다 강함.

```text
A fierce and charismatic young conqueror prince, romance fantasy webnovel male lead, detailed anime style character portrait, long wavy jet-black hair spilling out from under a white desert turban, a fine gold chain circlet with a small gem across his forehead, sharp hawk-like dark eyes with a stern commanding gaze, deep bronze sun-tanned skin, athletic muscular build, sleeveless white draped desert tunic with a deep V neckline leaving his arms and collarbone bare, wide gold armbands on his upper arms and gold bracelets at his wrists, layered gold pendant necklaces with a turquoise stone, a broad colored silk sash at his waist with gold ornaments, the golden hooked hilt of a curved scimitar at his hip, warm sand and peach gradient background with no detailed scenery, wild and commanding conqueror aura, clean half body portrait, high detail, no text, no watermark
```

## 이미지 생성 프롬프트 v3

> **소년미 보강.** v2 로 뽑으니 기존 채택본보다 나이 들어 보였다.
> 원인으로 두 가지를 잡았다 — 나이 표현이 아예 없었던 것, 그리고 `athletic muscular build`.
> **근육량이 많으면 나이가 올라가 보인다.** `lean athletic build, slender frame` 으로 바꿨다.
>
> ⚠️ charlotte 에서 얻은 교훈 적용 — 나이는 **숫자로 못박고**(`of eighteen`),
> 네거티브에는 노화 요소(수염·주름·각진 턱·과한 근육)만 넣는다.
> 정복자 기질(매서운 눈매·명령하는 시선)은 그대로 둔다.

```text
A fierce and charismatic young conqueror prince, (youthful:1.2), a boyish young man of eighteen, soft boyish face, smooth unlined skin, softer jawline, romance fantasy webnovel male lead, detailed anime style character portrait, long wavy jet-black hair spilling out from under a white desert turban, a fine gold chain circlet with a small gem across his forehead, sharp hawk-like dark eyes with a stern commanding gaze, deep bronze sun-tanned skin, lean athletic build, slender frame, sleeveless white draped desert tunic with a deep V neckline leaving his arms and collarbone bare, wide gold armbands on his upper arms and gold bracelets at his wrists, layered gold pendant necklaces with a turquoise stone, a broad colored silk sash at his waist with gold ornaments, the golden hooked hilt of a curved scimitar at his hip, warm sand and peach gradient background with no detailed scenery, wild and commanding conqueror aura, clean half body portrait, high detail, no text, no watermark
```

## 이미지 생성 프롬프트 v4

> **소년미 조항 제거.** v3 이 너무 여리여리해졌다.
> `boyish face` · `soft` · `softer jawline` · `(youthful:1.2)` 를 빼고,
> `lean athletic build, slender frame` → `athletic build` 로 되돌린다.
> 네거티브의 근육 억제(`bulky muscles, thick neck, huge biceps, bodybuilder`)도 뺐다 —
> **그게 체격을 빈약하게 만든 원인**이다.
>
> 나이는 `a young man of eighteen` 만 남긴다. v2(나이 표현 없음)와 v3(과한 소년미) 사이.
> 수염·주름 억제는 유지한다.

```text
A fierce and charismatic young conqueror prince, a young man of eighteen, romance fantasy webnovel male lead, detailed anime style character portrait, long wavy jet-black hair spilling out from under a white desert turban, a fine gold chain circlet with a small gem across his forehead, sharp hawk-like dark eyes with a stern commanding gaze, deep bronze sun-tanned skin, athletic build, sleeveless white draped desert tunic with a deep V neckline leaving his arms and collarbone bare, wide gold armbands on his upper arms and gold bracelets at his wrists, layered gold pendant necklaces with a turquoise stone, a broad colored silk sash at his waist with gold ornaments, the golden hooked hilt of a curved scimitar at his hip, warm sand and peach gradient background with no detailed scenery, wild and commanding conqueror aura, clean half body portrait, high detail, no text, no watermark
```

## 네거티브 프롬프트 v4

```text
middle-aged, older man, stubble, beard, facial hair, mustache,
rugged weathered face, heavy square jaw, nasolabial folds, wrinkles,
blonde hair, light hair, straight hair, bare head, no turban, pale skin, western knight armor, full plate armor, crown, oversized weapon, cluttered detailed background, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

## 네거티브 프롬프트 v3

```text
middle-aged, older man, adult man, stubble, beard, facial hair, mustache,
rugged weathered face, heavy square jaw, nasolabial folds, wrinkles,
bulky muscles, thick neck, huge biceps, bodybuilder,
blonde hair, light hair, straight hair, bare head, no turban, pale skin, western knight armor, full plate armor, crown, oversized weapon, cluttered detailed background, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

## 네거티브 프롬프트 (Negative Prompt)

```text
blonde hair, light hair, straight hair, bare head, no turban, pale skin, western knight armor, full plate armor, crown, oversized weapon, cluttered detailed background, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```
