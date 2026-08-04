# 동부의 꽃 - 샬롯 (Charlotte)

## 기본 정보

- 구분: 서브 빌런 (플레이어 캐릭터)
- 시작지점: 중부
- 시작자원: 금화 2, 매력 3
- 모티프: 조피 샤를로테 공녀 (Sophie Charlotte)

## 외모

- 롤빵 머리, 노란색(금발)
- 청안

## 원래 운명

아카데미에서 마주친 주인공 잔느를 천한 것이라 괴롭힌다. 잔느가 남주와 일정 관계 이상이 되는 순간, 선을 넘어 황실을 모독하게 되고 이로 인해 처형당한다.

## 가능한 각성 능력

- 일반 각성 능력 전부

## 숨겨진 과거

사실은 적녀가 아니라 서녀였고, 그녀를 낳은 어머니는 그녀의 유모였다. 그래서 황실모독죄로 회부되었을 때도 가문에서 지켜주기보다 파문시킨 것. 유모인 그녀의 어머니는 본래 황가 핏줄이었으며, 폐위된 태자의 여동생이어서 공작가에 숨어서 지냈다.

## 과거의 단서

- "유모의 일기"
- "황가의 팬던트"
- "양녀증서"
- "폐태자의 편지"

## 이미지 생성 프롬프트

```text
A haughty beautiful young noble lady, romance fantasy webnovel style, detailed anime character portrait, bright golden blonde hair in twin rolled bun curls, clear blue eyes, proud and slightly arrogant expression with a hint of hidden insecurity, elegant pastel noble dress with modest ribbons and small rose accents, holding a simple folding fan, soft neutral academy-toned gradient background with no hall or staircase, classic villainess ojou-sama aura, clean half body portrait, high detail, no text, no watermark
```

## 네거티브 프롬프트 v1

> v1 전용. 아래 공용 네거티브에는 `folding fan`, `twin round buns`, `pink dress` 가 들어 있어
> **v1의 부채·롤빵 머리·파스텔 드레스를 스스로 막는다.** v1로 뽑을 때는 이 블록이 쓰인다.
> (버전 번호가 같은 네거티브가 있으면 그것이, 없으면 공용 네거티브가 자동 선택됨)

```text
child, little girl, chibi, toddler, oversized head, childish proportions, dark hair, red hair, short hair, tiara, jeweled hair ornament, heavy jewelry, pale violet gown, garden background, stone arches, outdoor background, narrow half-closed eyes, slit eyes, staircase, ballroom crowd, busy background, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

## 이미지 생성 프롬프트 v21

> **v19(부채+teenage) + 자세 강제 두 가지.** 화풍은 `--flat` 플래그로 얹는다(md 에 안 박는다).
>
> 1. **허리에 손** — `the other hand resting at her waist` 라는 자연어가 약했다.
>    **`hand_on_own_hip`(204,436장)** 이 정확한 태그다. `elbow out` 을 더해 실루엣을 만든다.
>    ⚠️ 네거티브에 `hands on own hips, both hands on hips` — **양손 허리는 안 된다**
>    (한 손은 부채를 들고 있어야 한다). `arm hanging at side, hand behind back` 도 억제.
>
> 2. **고개 젖혀 내려다보기** — `head back` 태그 + 자연어.
>    ⚠️ **`looking down` 태그는 쓰지 않는다.** 그건 "고개를 **숙여** 아래를 봄"(125k)이라
>    젖히는 것과 정반대고, roxana 에서 이 태그가 눈을 감게 만든 전력이 있다.
>    대신 `head tilted back so she looks down her nose at the viewer, chin raised,
>    condescending gaze` 로 서술하고, 네거티브에 `head lowered, looking up, bowing` 을 넣는다.

```text
laughing, open mouth, covered mouth, holding fan, folding fan, hand on own hip, head back, head tilt, looking at viewer,

Charlotte, a haughty young noblewoman, the daughter of a duke, freshly presented at court, only just finished her debutante season, laughing haughtily, the classic arrogant noble lady laugh,

cowboy shot, one lace-gloved hand holding an open folding fan raised to cover the lower half of her face, laughing behind the fan, only her eyes visible above the fan rim, her other hand planted firmly on her own hip, elbow out, chest out, head tilted back so she looks down her nose at the viewer, chin raised, condescending gaze,

(youthful:1.25), a teenage noblewoman, a young lady of eighteen, fresh young face, delicate refined features, luminous fair skin, smooth unlined skin,

large clear icy blue eyes with sharply upturned outer corners narrowed in amusement, visible above the fan, bright golden blonde hair in twin rolled bun curls with long ringlets falling at the sides,

an elegant structured aristocratic court gown in deep jade green, fitted boned bodice with a cinched waist, corset lacing, richly woven damask pattern in the fabric, a cream silk panel down the center front, layered skirt with gathered folds, fitted sleeves with white lace cuffs, fine white lace jabot at the high collar, a small pearl choker, a single emerald brooch, long white lace gloves fully covering both hands all the way to the fingertips,

soft neutral academy-toned gradient background,

classic villainess ojou-sama aura, vertical composition
```

## 네거티브 프롬프트 v21

```text
hands on own hips, both hands on hips, arm hanging at side, hand behind back,
head lowered, looking up, bowing,
hand over own mouth, bare hand on face, closed fan, folded fan, fan hiding her eyes, fan covering whole face,
loose robe, wide sleeves, flowing sleeves, kimono, japanese clothes, dressing gown, bathrobe,
unstructured dress, shapeless dress, draped fabric, plain fabric, no waistline,
closed mouth, expressionless, sad, crying, embarrassed,
middle-aged, matronly, wrinkles, nasolabial folds, gaunt, hollow cheeks,
harsh weathered face, heavy makeup, tired eyes, eye bags,
monochrome outfit, single flat color dress, plain undecorated dress,
full length shot, wide shot, full body, distant camera, small face,
fingerless gloves, half gloves, bare hands, exposed fingers,
military uniform, epaulettes, silver braid trim,
pastel pink, baby pink, mint pastel, candy colors, frilly dress, many ribbons,
child, little girl, chibi, oversized head, childish proportions, toddler,
dark hair, red hair, short hair, tiara, jeweled hair ornament,
gaudy jewelry, layered necklaces,
garden background, stone arches, outdoor background, busy background,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```

## 이미지 생성 프롬프트 v20

> **v19(부채 + teenage) 기준에 화풍 조항만 얹은 것.**
> 앞서 v18 로 시도했을 때는 `teenage` 와 평면 화풍을 **한꺼번에** 바꿔서
> 무엇의 효과인지 분리가 안 됐다 (게다가 3장에서 중단했다).
> 이번엔 v19 를 베이스로 삼아 **차이가 화풍 하나**가 되게 한다.
>
> 실제 태그는 `flat color` · `anime coloring` 둘뿐이고 나머지는 자연어다.
> 체감에 가장 크게 기여하는 건 네거티브의 **`depth of field, bokeh`**(배경 흐림 제거)와
> **`glossy skin, shiny highlights`**(피부 광택 제거)로 보인다.

```text
laughing, open mouth, covered mouth, holding fan, folding fan, head tilt, looking at viewer,

Charlotte, a haughty young noblewoman, the daughter of a duke, freshly presented at court, only just finished her debutante season, laughing haughtily, the classic arrogant noble lady laugh,

cowboy shot, one lace-gloved hand holding an open folding fan raised to cover the lower half of her face, laughing behind the fan, only her eyes visible above the fan rim, the other hand resting at her waist, chest out, head tilted back,

(youthful:1.25), a teenage noblewoman, a young lady of eighteen, fresh young face, delicate refined features, luminous fair skin, smooth unlined skin,

large clear icy blue eyes with sharply upturned outer corners narrowed in amusement, visible above the fan, bright golden blonde hair in twin rolled bun curls with long ringlets falling at the sides,

an elegant structured aristocratic court gown in deep jade green, fitted boned bodice with a cinched waist, corset lacing, richly woven damask pattern in the fabric, a cream silk panel down the center front, layered skirt with gathered folds, fitted sleeves with white lace cuffs, fine white lace jabot at the high collar, a small pearl choker, a single emerald brooch, long white lace gloves fully covering both hands all the way to the fingertips,

soft neutral academy-toned gradient background,

flat color, anime coloring, bold clean outlines, hard-edged cel shading, few gradients, matte finish,

classic villainess ojou-sama aura, vertical composition
```

## 네거티브 프롬프트 v20

```text
3d, realistic, photorealistic, rendered, cgi, volumetric lighting, soft airbrush shading, smooth gradient shading, glossy skin, shiny highlights, subsurface scattering, depth of field, bokeh,
hand over own mouth, bare hand on face, closed fan, folded fan, fan hiding her eyes, fan covering whole face,
loose robe, wide sleeves, flowing sleeves, kimono, japanese clothes, dressing gown, bathrobe,
unstructured dress, shapeless dress, draped fabric, plain fabric, no waistline,
closed mouth, expressionless, sad, crying, embarrassed,
middle-aged, matronly, wrinkles, nasolabial folds, gaunt, hollow cheeks,
harsh weathered face, heavy makeup, tired eyes, eye bags,
monochrome outfit, single flat color dress, plain undecorated dress,
full length shot, wide shot, full body, distant camera, small face,
fingerless gloves, half gloves, bare hands, exposed fingers,
military uniform, epaulettes, silver braid trim,
pastel pink, baby pink, mint pastel, candy colors, frilly dress, many ribbons,
child, little girl, chibi, oversized head, childish proportions, toddler,
dark hair, red hair, short hair, tiara, jeweled hair ornament,
gaudy jewelry, layered necklaces,
garden background, stone arches, outdoor background, busy background,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```

## 이미지 생성 프롬프트 v19

> **v17(부채로 가리고 웃기) + `teenage` 만.** 구도·의상은 v8 에서 확정됐다.
>
> v18 에서 시도했던 **평면 화풍(`flat color, anime coloring` + 3D 억제)은 뺐다.**
> 화풍은 지금 그대로 두고 나이 표현만 본다.
>
> `teenage` 는 v3 에서 유아화를 유발했던 단어지만 그때는
> `softly rounded cheeks` + `large ribbon bow` 와 겹친 조합이었다.
> 구조 억제(`child, chibi, childish proportions, oversized head`)를 유지한 채 단독으로 넣는다.

```text
laughing, open mouth, covered mouth, holding fan, folding fan, head tilt, looking at viewer,

Charlotte, a haughty young noblewoman, the daughter of a duke, freshly presented at court, only just finished her debutante season, laughing haughtily, the classic arrogant noble lady laugh,

cowboy shot, one lace-gloved hand holding an open folding fan raised to cover the lower half of her face, laughing behind the fan, only her eyes visible above the fan rim, the other hand resting at her waist, chest out, head tilted back,

(youthful:1.25), a teenage noblewoman, a young lady of eighteen, fresh young face, delicate refined features, luminous fair skin, smooth unlined skin,

large clear icy blue eyes with sharply upturned outer corners narrowed in amusement, visible above the fan, bright golden blonde hair in twin rolled bun curls with long ringlets falling at the sides,

an elegant structured aristocratic court gown in deep jade green, fitted boned bodice with a cinched waist, corset lacing, richly woven damask pattern in the fabric, a cream silk panel down the center front, layered skirt with gathered folds, fitted sleeves with white lace cuffs, fine white lace jabot at the high collar, a small pearl choker, a single emerald brooch, long white lace gloves fully covering both hands all the way to the fingertips,

soft neutral academy-toned gradient background,

classic villainess ojou-sama aura, vertical composition
```

## 네거티브 프롬프트 v19

```text
hand over own mouth, bare hand on face, closed fan, folded fan, fan hiding her eyes, fan covering whole face,
loose robe, wide sleeves, flowing sleeves, kimono, japanese clothes, dressing gown, bathrobe,
unstructured dress, shapeless dress, draped fabric, plain fabric, no waistline,
closed mouth, expressionless, sad, crying, embarrassed,
middle-aged, matronly, wrinkles, nasolabial folds, gaunt, hollow cheeks,
harsh weathered face, heavy makeup, tired eyes, eye bags,
monochrome outfit, single flat color dress, plain undecorated dress,
full length shot, wide shot, full body, distant camera, small face,
fingerless gloves, half gloves, bare hands, exposed fingers,
military uniform, epaulettes, silver braid trim,
pastel pink, baby pink, mint pastel, candy colors, frilly dress, many ribbons,
child, little girl, chibi, oversized head, childish proportions, toddler,
dark hair, red hair, short hair, tiara, jeweled hair ornament,
gaudy jewelry, layered necklaces,
garden background, stone arches, outdoor background, busy background,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```

## 이미지 생성 프롬프트 v18

> **v17(부채로 가리고 웃기) 기준.** 구도는 확정됐고 두 가지만 더한다.
>
> 1. **`teenage` 복원** — `a teenage noblewoman`. v3 에서 유아화를 유발했던 단어지만
>    그때는 `softly rounded cheeks` + `large ribbon bow` 와 겹친 조합이었다.
>    구조 억제(`child, chibi, childish proportions`)는 그대로 두고 단독으로 넣어본다.
>
> 2. **평면 화풍** — 최근 생성분이 부드러운 그라데이션·광택으로 **입체감이 과했다.**
>    참고본(`sub3-chars/selected/charlotte.png`)은 색면이 넓고 그림자 경계가 딱 떨어지는
>    셀 채색이다. `flat color, anime coloring` 은 실제 태그라 이걸 쓰고,
>    네거티브로 3D 계열 렌더링을 막는다.
>
> ⚠️ `depth of field, bokeh` 도 네거티브에 넣었다 — 배경 흐림이 입체감을 키운다.

```text
laughing, open mouth, covered mouth, holding fan, folding fan, head tilt, looking at viewer,

Charlotte, a haughty young noblewoman, the daughter of a duke, freshly presented at court, only just finished her debutante season, laughing haughtily, the classic arrogant noble lady laugh,

cowboy shot, one lace-gloved hand holding an open folding fan raised to cover the lower half of her face, laughing behind the fan, only her eyes visible above the fan rim, the other hand resting at her waist, chest out, head tilted back,

(youthful:1.25), a teenage noblewoman, a young lady of eighteen, fresh young face, delicate refined features, luminous fair skin, smooth unlined skin,

large clear icy blue eyes with sharply upturned outer corners narrowed in amusement, visible above the fan, bright golden blonde hair in twin rolled bun curls with long ringlets falling at the sides,

an elegant structured aristocratic court gown in deep jade green, fitted boned bodice with a cinched waist, corset lacing, richly woven damask pattern in the fabric, a cream silk panel down the center front, layered skirt with gathered folds, fitted sleeves with white lace cuffs, fine white lace jabot at the high collar, a small pearl choker, a single emerald brooch, long white lace gloves fully covering both hands all the way to the fingertips,

soft neutral academy-toned gradient background,

flat color, anime coloring, bold clean outlines, hard-edged cel shading, few gradients, matte finish,

classic villainess ojou-sama aura, vertical composition
```

## 네거티브 프롬프트 v18

```text
3d, realistic, photorealistic, rendered, cgi, volumetric lighting, soft airbrush shading, smooth gradient shading, glossy skin, shiny highlights, subsurface scattering, depth of field, bokeh,
hand over own mouth, bare hand on face, closed fan, folded fan, fan hiding her eyes, fan covering whole face,
loose robe, wide sleeves, flowing sleeves, kimono, japanese clothes, dressing gown, bathrobe,
unstructured dress, shapeless dress, draped fabric, plain fabric, no waistline,
closed mouth, expressionless, sad, crying, embarrassed,
middle-aged, matronly, wrinkles, nasolabial folds, gaunt, hollow cheeks,
harsh weathered face, heavy makeup, tired eyes, eye bags,
monochrome outfit, single flat color dress, plain undecorated dress,
full length shot, wide shot, full body, distant camera, small face,
fingerless gloves, half gloves, bare hands, exposed fingers,
military uniform, epaulettes, silver braid trim,
pastel pink, baby pink, mint pastel, candy colors, frilly dress, many ribbons,
child, little girl, chibi, oversized head, childish proportions, toddler,
dark hair, red hair, short hair, tiara, jeweled hair ornament,
gaudy jewelry, layered necklaces,
garden background, stone arches, outdoor background, busy background,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```

## 이미지 생성 프롬프트 v17

> **부채로 가리고 웃는 안.** v14(확정 의상) 기준에서 **손등 → 펼친 부채**로만 교체.
> 얼굴 하단을 부채로 덮고 **눈만 부채 위로** 보이게 한다.
>
> ⚠️ 눈이 가려지면 오만한 눈매가 통째로 죽으므로 네거티브에
> `fan hiding her eyes, fan covering whole face` 를 넣었다.
> ⚠️ `closed fan, folded fan` 도 억제 — 접힌 부채로는 가릴 수가 없다.
> ⚠️ `hand over own mouth` 는 이제 **네거티브**다. v14 의 손등 포즈로 되돌아가는 것을 막는다.
>
> 나이·의상은 v14 그대로. A/B(v15 가중치 / v16 teenage) 결과가 나오면
> 이긴 쪽 설정을 여기에 옮겨 붙이면 된다.

```text
laughing, open mouth, covered mouth, holding fan, folding fan, head tilt, looking at viewer,

Charlotte, a haughty young noblewoman, the daughter of a duke, freshly presented at court, only just finished her debutante season, laughing haughtily, the classic arrogant noble lady laugh,

cowboy shot, one lace-gloved hand holding an open folding fan raised to cover the lower half of her face, laughing behind the fan, only her eyes visible above the fan rim, the other hand resting at her waist, chest out, head tilted back,

(youthful:1.25), a young lady of eighteen, fresh young face, delicate refined features, luminous fair skin, smooth unlined skin,

large clear icy blue eyes with sharply upturned outer corners narrowed in amusement, visible above the fan, bright golden blonde hair in twin rolled bun curls with long ringlets falling at the sides,

an elegant structured aristocratic court gown in deep jade green, fitted boned bodice with a cinched waist, corset lacing, richly woven damask pattern in the fabric, a cream silk panel down the center front, layered skirt with gathered folds, fitted sleeves with white lace cuffs, fine white lace jabot at the high collar, a small pearl choker, a single emerald brooch, long white lace gloves fully covering both hands all the way to the fingertips,

soft neutral academy-toned gradient background,

classic villainess ojou-sama aura, vertical composition
```

## 네거티브 프롬프트 v17

```text
hand over own mouth, bare hand on face, closed fan, folded fan, fan hiding her eyes, fan covering whole face,
loose robe, wide sleeves, flowing sleeves, kimono, japanese clothes, dressing gown, bathrobe,
unstructured dress, shapeless dress, draped fabric, plain fabric, no waistline,
closed mouth, expressionless, sad, crying, embarrassed,
middle-aged, matronly, wrinkles, nasolabial folds, gaunt, hollow cheeks,
harsh weathered face, heavy makeup, tired eyes, eye bags,
monochrome outfit, single flat color dress, plain undecorated dress,
full length shot, wide shot, full body, distant camera, small face,
fingerless gloves, half gloves, bare hands, exposed fingers,
military uniform, epaulettes, silver braid trim,
pastel pink, baby pink, mint pastel, candy colors, frilly dress, many ribbons,
child, little girl, chibi, oversized head, childish proportions, toddler,
dark hair, red hair, short hair, tiara, jeweled hair ornament,
gaudy jewelry, layered necklaces,
garden background, stone arches, outdoor background, busy background,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```

## 이미지 생성 프롬프트 v16

> **A/B 중 B — `teenage` 복원.** v14 에 `a teenage noblewoman` 만 추가. 가중치는 그대로 둬서 `teenage` 단독 효과를 본다. ⚠️ v3 에서 이 단어가 유아화를 유발한 전력이 있다 — `child, chibi, childish proportions` 구조 억제는 그대로 유지한다.

```text
laughing, open mouth, hand over own mouth, head back, head tilt, looking at viewer,

Charlotte, a haughty young noblewoman, the daughter of a duke, freshly presented at court, only just finished her debutante season, laughing haughtily, the classic arrogant noble lady laugh,

cowboy shot, one lace-gloved hand raised with the back of her hand to her mouth, the other hand holding a folded fan, chest out, head tilted back,

(youthful:1.25), a teenage noblewoman, a young lady of eighteen, fresh young face, delicate refined features, luminous fair skin, smooth unlined skin,

bright golden blonde hair in twin rolled bun curls with long ringlets falling at the sides, large clear icy blue eyes with sharply upturned outer corners, narrowed in amusement,

an elegant structured aristocratic court gown in deep jade green, fitted boned bodice with a cinched waist, corset lacing, richly woven damask pattern in the fabric, a cream silk panel down the center front, layered skirt with gathered folds, fitted sleeves with white lace cuffs, fine white lace jabot at the high collar, a small pearl choker, a single emerald brooch, long white lace gloves fully covering both hands all the way to the fingertips,

soft neutral academy-toned gradient background,

classic villainess ojou-sama aura, vertical composition
```

## 네거티브 프롬프트 v16

```text
loose robe, wide sleeves, flowing sleeves, kimono, japanese clothes, dressing gown, bathrobe,
unstructured dress, shapeless dress, draped fabric, plain fabric, no waistline,
closed mouth, expressionless, sad, crying, embarrassed,
middle-aged, matronly, wrinkles, nasolabial folds, gaunt, hollow cheeks,
harsh weathered face, heavy makeup, tired eyes, eye bags,
monochrome outfit, single flat color dress, plain undecorated dress,
full length shot, wide shot, full body, distant camera, small face,
fingerless gloves, half gloves, bare hands, exposed fingers,
military uniform, epaulettes, silver braid trim,
pastel pink, baby pink, mint pastel, candy colors, frilly dress, many ribbons,
child, little girl, chibi, oversized head, childish proportions, toddler,
dark hair, red hair, short hair, tiara, jeweled hair ornament,
gaudy jewelry, layered necklaces,
garden background, stone arches, outdoor background, busy background,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```

## 이미지 생성 프롬프트 v15

> **A/B 중 A — 가중치·나이만 강화.** `(youthful:1.25)` → `(youthful:1.45)` + `(young:1.2)`, 나이는 eighteen → seventeen. `teenage` 는 쓰지 않는다. 의상(v14)은 좋다고 확인돼서 손대지 않았다.

```text
laughing, open mouth, hand over own mouth, head back, head tilt, looking at viewer,

Charlotte, a haughty young noblewoman, the daughter of a duke, freshly presented at court, only just finished her debutante season, laughing haughtily, the classic arrogant noble lady laugh,

cowboy shot, one lace-gloved hand raised with the back of her hand to her mouth, the other hand holding a folded fan, chest out, head tilted back,

(youthful:1.45), (young:1.2), a young lady of seventeen, fresh young face, delicate refined features, luminous fair skin, smooth unlined skin,

bright golden blonde hair in twin rolled bun curls with long ringlets falling at the sides, large clear icy blue eyes with sharply upturned outer corners, narrowed in amusement,

an elegant structured aristocratic court gown in deep jade green, fitted boned bodice with a cinched waist, corset lacing, richly woven damask pattern in the fabric, a cream silk panel down the center front, layered skirt with gathered folds, fitted sleeves with white lace cuffs, fine white lace jabot at the high collar, a small pearl choker, a single emerald brooch, long white lace gloves fully covering both hands all the way to the fingertips,

soft neutral academy-toned gradient background,

classic villainess ojou-sama aura, vertical composition
```

## 네거티브 프롬프트 v15

```text
loose robe, wide sleeves, flowing sleeves, kimono, japanese clothes, dressing gown, bathrobe,
unstructured dress, shapeless dress, draped fabric, plain fabric, no waistline,
closed mouth, expressionless, sad, crying, embarrassed,
middle-aged, matronly, wrinkles, nasolabial folds, gaunt, hollow cheeks,
harsh weathered face, heavy makeup, tired eyes, eye bags,
monochrome outfit, single flat color dress, plain undecorated dress,
full length shot, wide shot, full body, distant camera, small face,
fingerless gloves, half gloves, bare hands, exposed fingers,
military uniform, epaulettes, silver braid trim,
pastel pink, baby pink, mint pastel, candy colors, frilly dress, many ribbons,
child, little girl, chibi, oversized head, childish proportions, toddler,
dark hair, red hair, short hair, tiara, jeweled hair ornament,
gaudy jewelry, layered necklaces,
garden background, stone arches, outdoor background, busy background,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```

## 이미지 생성 프롬프트 v14

> v13 에서 **의상만** 바꾼 것. 얼굴·나이·포즈는 그대로.
>
> v13 의 제이드 드레스는 **구조가 없어서** 실내복/기모노처럼 읽혔다 —
> 품이 넓은 소매, 몸에 붙지 않는 드레이프 실크, 장식 없음.
> 공작가 여식이면 **뼈대가 잡힌 보디스 + 직조 무늬 + 층진 스커트**가 필요하다.
>
> ⚠️ 네거티브에 `loose robe, wide sleeves, kimono, dressing gown, unstructured dress` 를
> 넣어 **드레이프로 되돌아가는 것을 막는다.** 이게 없으면 다시 실내복이 된다.
> ⚠️ `heavy jewelry` 억제는 **뺐다** — 진주 초커·브로치까지 같이 죽는다.
> 대신 `gaudy jewelry, layered necklaces` 로 과함만 막는다.
> 티아라 억제는 **유지** (루크레치아와 겹치므로).
>
> ⚠️ `teenage` 는 쓰지 않는다. v3 에서 `teenage academy student` 조합이 유아화를 유발했다.
> 나이는 **숫자로 못박는다** (`a young lady of eighteen`).

```text
laughing, open mouth, hand over own mouth, head back, head tilt, looking at viewer,

Charlotte, a haughty young noblewoman, the daughter of a duke, freshly presented at court, only just finished her debutante season, laughing haughtily, the classic arrogant noble lady laugh,

cowboy shot, one lace-gloved hand raised with the back of her hand to her mouth, the other hand holding a folded fan, chest out, head tilted back,

(youthful:1.25), a young lady of eighteen, fresh young face, delicate refined features, luminous fair skin, smooth unlined skin,

bright golden blonde hair in twin rolled bun curls with long ringlets falling at the sides, large clear icy blue eyes with sharply upturned outer corners, narrowed in amusement,

an elegant structured aristocratic court gown in deep jade green, fitted boned bodice with a cinched waist, corset lacing, richly woven damask pattern in the fabric, a cream silk panel down the center front, layered skirt with gathered folds, fitted sleeves with white lace cuffs, fine white lace jabot at the high collar, a small pearl choker, a single emerald brooch, long white lace gloves fully covering both hands all the way to the fingertips,

soft neutral academy-toned gradient background,

classic villainess ojou-sama aura, vertical composition
```

## 네거티브 프롬프트 v14

```text
loose robe, wide sleeves, flowing sleeves, kimono, japanese clothes, dressing gown, bathrobe,
unstructured dress, shapeless dress, draped fabric, plain fabric, no waistline,
closed mouth, expressionless, sad, crying, embarrassed,
middle-aged, matronly, wrinkles, nasolabial folds, gaunt, hollow cheeks,
harsh weathered face, heavy makeup, tired eyes, eye bags,
monochrome outfit, single flat color dress, plain undecorated dress,
full length shot, wide shot, full body, distant camera, small face,
fingerless gloves, half gloves, bare hands, exposed fingers,
military uniform, epaulettes, silver braid trim,
pastel pink, baby pink, mint pastel, candy colors, frilly dress, many ribbons,
child, little girl, chibi, oversized head, childish proportions, toddler,
dark hair, red hair, short hair, tiara, jeweled hair ornament,
gaudy jewelry, layered necklaces,
garden background, stone arches, outdoor background, busy background,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```

## 이미지 생성 프롬프트 v13

> v12 가 여전히 나이 들어 보였던 **진짜 원인** — 네거티브가 젊음을 스스로 막고 있었다.
> `round soft eyes, big innocent doe eyes, drooping eyes` 는 아동화를 막으려고 넣은 것인데
> **어려 보이는 눈매를 통째로 차단**한다. 걷어냈다.
>
> 아동화 억제는 **형태 쪽만** 남긴다 — `chibi, child, little girl, oversized head,
> childish proportions`. 이건 비율·크기 문제라 나이 인상과 분리된다.
> 오만함은 눈매(`sharply upturned outer corners`)와 표정으로 유지한다.
>
> ⚠️ 여전히 유효한 지뢰: 네거티브에 **`mature adult woman` 금지**(유아화를 밀었음),
> 포지티브에 **`softly rounded cheeks` 금지**(v3 아동화 원인).

```text
laughing, open mouth, hand over own mouth, head back, head tilt, looking at viewer,

Charlotte, a haughty young noblewoman freshly presented at court, only just finished her debutante season, laughing haughtily, the classic arrogant noble lady laugh,

cowboy shot, one lace-gloved hand raised with the back of her hand to her mouth, the other hand holding a folded fan, chest out, head tilted back,

(youthful:1.25), a young lady of eighteen, fresh young face, delicate refined features, luminous fair skin, smooth unlined skin,

bright golden blonde hair in twin rolled bun curls with long ringlets falling at the sides, large clear icy blue eyes with sharply upturned outer corners, narrowed in amusement,

elegant noble gown in deep jade green with a soft cream panel down the center front, the jade green opening in a gentle V over the cream, fine white lace at the collar and along the cream panel, softly gathered sleeves, long white lace gloves fully covering both hands all the way to the fingertips,

soft neutral academy-toned gradient background,

classic villainess ojou-sama aura, vertical composition
```

## 네거티브 프롬프트 v13

```text
closed mouth, expressionless, sad, crying, embarrassed,
middle-aged, matronly, wrinkles, nasolabial folds, gaunt, hollow cheeks,
harsh weathered face, heavy makeup, tired eyes, eye bags,
monochrome outfit, single flat color dress, plain undecorated dress,
full length shot, wide shot, full body, distant camera, small face,
fingerless gloves, half gloves, bare hands, exposed fingers,
military uniform, epaulettes, silver braid trim,
pastel pink, baby pink, mint pastel, candy colors, frilly dress, many ribbons,
child, little girl, chibi, oversized head, childish proportions, toddler,
dark hair, red hair, short hair, tiara, jeweled hair ornament, heavy jewelry,
garden background, stone arches, outdoor background, busy background,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```

## 이미지 생성 프롬프트 v12

> v11(오호호호 웃음)에 **미형 + 데뷔탕트 직후의 어림**을 더한 것.
>
> ⚠️ **어리게 만들 때 밟으면 안 되는 지뢰 둘** (둘 다 charlotte 에서 실제로 터졌다):
> 1. 네거티브에 **`mature adult woman` 을 넣지 말 것** — 오히려 유아화를 밀었다
> 2. 포지티브에 **`teenage academy student` + `softly rounded cheeks`** 조합을 쓰지 말 것 —
>    v3 가 이것으로 아동화되어 폐기됐다
>
> 그래서 나이는 **사교계 맥락**(데뷔탕트를 막 마친)으로만 표현하고,
> 얼굴 형태는 건드리지 않는다. 구조적 아동화 억제
> (`child, little girl, chibi, oversized head, childish proportions`)는 그대로 둔다.

```text
laughing, open mouth, hand over own mouth, head back, head tilt, looking at viewer,

Charlotte, a haughty young noblewoman freshly presented at court, only just finished her debutante season, laughing haughtily, the classic arrogant noble lady laugh,

cowboy shot, one lace-gloved hand raised with the back of her hand to her mouth, the other hand holding a folded fan, chest out, head tilted back,

youthful and refined, delicate features, luminous fair skin, slender graceful neck, a fresh unlined face,

bright golden blonde hair in twin rolled bun curls with long ringlets falling at the sides, sharp upturned almond eyes in clear icy blue narrowed in amusement,

elegant noble gown in deep jade green with a soft cream panel down the center front, the jade green opening in a gentle V over the cream, fine white lace at the collar and along the cream panel, softly gathered sleeves, long white lace gloves fully covering both hands all the way to the fingertips,

soft neutral academy-toned gradient background,

classic villainess ojou-sama aura, vertical composition
```

## 네거티브 프롬프트 v12

```text
closed mouth, expressionless, sad, crying, embarrassed,
middle-aged, matronly, wrinkles, gaunt, hollow cheeks, harsh weathered face, heavy makeup, tired eyes,
monochrome outfit, single flat color dress, plain undecorated dress,
full length shot, wide shot, full body, distant camera, small face,
fingerless gloves, half gloves, bare hands, exposed fingers,
round soft eyes, big innocent doe eyes, drooping eyes,
military uniform, epaulettes, silver braid trim,
pastel pink, baby pink, mint pastel, candy colors, frilly dress, many ribbons,
childish outfit, child, little girl, chibi, oversized head, childish proportions,
dark hair, red hair, short hair, tiara, jeweled hair ornament, heavy jewelry,
garden background, stone arches, outdoor background, busy background,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```

## 이미지 생성 프롬프트 v11

> 구도: **"오호호호~" 고전 영애 웃음.**
> 레이스 장갑 낀 손등을 입에 대고, 고개를 젖혀 웃는 그 포즈.
> charlotte 의 오만함이 가장 알아보기 쉽게 드러나는 클리셰다.
>
> ⚠️ **네거티브에서 `open mouth, showing teeth, toothy grin` 을 반드시 빼야 한다.**
> v9·v10 은 "다문 입의 은근한 우월감" 을 위해 이걸 억제했는데,
> 그대로 두면 **웃음 자체가 안 나온다.** 정반대 방향의 표정이라 억제를 뒤집는 것이다.
> (억제하려는 것과 살리려는 것이 같은 단어로 묶이는 전형적인 사고 지점)

```text
laughing, open mouth, hand over own mouth, head back, head tilt, looking at viewer,

Charlotte, a haughty beautiful young noble lady laughing haughtily, the classic arrogant noble lady laugh,

cowboy shot, one lace-gloved hand raised with the back of her hand to her mouth, the other hand holding a folded fan, chest out, head tilted back,

bright golden blonde hair in twin rolled bun curls with long ringlets falling at the sides, sharp upturned almond eyes in clear icy blue narrowed in amusement,

elegant noble gown in deep jade green with a soft cream panel down the center front, the jade green opening in a gentle V over the cream, fine white lace at the collar and along the cream panel, softly gathered sleeves, long white lace gloves fully covering both hands all the way to the fingertips,

soft neutral academy-toned gradient background,

classic villainess ojou-sama aura, vertical composition
```

## 네거티브 프롬프트 v11

```text
closed mouth, expressionless, sad, crying, embarrassed,
monochrome outfit, single flat color dress, plain undecorated dress,
full length shot, wide shot, full body, distant camera, small face,
fingerless gloves, half gloves, bare hands, exposed fingers,
round soft eyes, big innocent doe eyes, drooping eyes,
military uniform, epaulettes, silver braid trim,
pastel pink, baby pink, mint pastel, candy colors, frilly dress, many ribbons,
childish outfit, child, little girl, chibi, oversized head, childish proportions,
dark hair, red hair, short hair, tiara, jeweled hair ornament, heavy jewelry,
garden background, stone arches, outdoor background, busy background,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```

## 이미지 생성 프롬프트 v9

> **v8에서 색감만 되돌린 최종안.**
> v8이 단색 제이드가 된 원인은 두 가지가 겹친 것 —
> 포지티브에서 `and cream` 을 지우고, 네거티브에 `contrasting underdress,
> cream panel down the front, V-shaped opening, open front` 을 넣어 **양쪽에서 크림을 막았음.**
>
> 초록이 V자로 열리며 크림이 드러나는 실루엣은 **문제없다고 확인됨** → 억제를 걷어낸다.
> v8의 **가슴위 프레임**과 **손가락까지 덮는 레이스 장갑**은 그대로 유지.

```text
A haughty beautiful young noble lady, romance fantasy webnovel style, detailed anime character portrait, bust-up framing with her face large in the frame, bright golden blonde hair in twin rolled bun curls with long ringlets falling at the sides, sharp upturned almond eyes in clear icy blue with a keen alert gaze, proud arrogant expression with a faint closed-lip smirk of quiet superiority, lips closed, wearing an elegant noble gown in deep jade green with a soft cream panel down the center front, the jade green opening in a gentle V over the cream, fine white lace at the collar and along the cream panel, softly gathered sleeves, long white lace gloves fully covering both hands all the way to the fingertips, every finger covered in white lace, holding a simple folding fan, soft neutral academy-toned gradient background, classic villainess ojou-sama aura, high detail, no text, no watermark
```

## 네거티브 프롬프트 v9

```text
monochrome outfit, single flat color dress, plain undecorated dress, full length shot, wide shot, full body, distant camera, small face, fingerless gloves, half gloves, bare hands, exposed fingers, lace cuffs only, separate skirt, blouse and skirt, two-piece outfit, open mouth, showing teeth, toothy grin, harsh angry eyebrows, villain scowl, round soft eyes, big innocent doe eyes, drooping eyes, half-closed eyes, sleepy gaze, military uniform, military braid, epaulettes, belt, metal buckles, silver braid trim, pastel pink, baby pink, mint pastel, candy colors, frilly dress, many ribbons, rose accents, childish outfit, child, little girl, chibi, oversized head, childish proportions, dark hair, red hair, short hair, tiara, jeweled hair ornament, heavy jewelry, pale violet gown, garden background, stone arches, outdoor background, staircase, ballroom crowd, busy background, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

> v9 네거티브 요점: v8에서 넣었던 **크림 억제 항목 전부 제거**
> (`V-shaped opening, plunging neckline, contrasting underdress, cream panel down the front,
> open front, robe over dress, overcoat, long coat, jacket over dress`).
> 대신 `monochrome outfit, single flat color dress, plain undecorated dress` 로 **단색화를 역으로 차단**.
> 프레임(`full length shot, small face` 등)과 장갑 항목은 v8에서 유지.

## 이미지 생성 프롬프트 v8

> **v7에서 두 가지 교정.**
> ① 원피스 — v7은 초록이 V자로 열리며 크림색 안감이 드러나 **겉옷처럼** 보였음(2번만 통짜).
>    앞이 막힌 보디스로 고정.
> ② 프레임 — 의상을 길게 묘사하다 보니 카메라가 뒤로 빠져 **얼굴이 작아짐**.
>    가슴위 컷으로 당겨 얼굴을 크게.

```text
A haughty beautiful young noble lady, romance fantasy webnovel style, detailed anime character portrait, bust-up framing with her face large in the frame, bright golden blonde hair in twin rolled bun curls with long ringlets falling at the sides, sharp upturned almond eyes in clear icy blue with a keen alert gaze, proud arrogant expression with a faint closed-lip smirk of quiet superiority, lips closed, wearing an elegant deep jade green one-piece noble gown, a closed front bodice buttoned all the way up to the high collar with no opening and no contrasting underdress showing, a single continuous dress with no separation at the waist, no overcoat, no open robe, softly gathered sleeves, fine white lace at the collar, long white lace gloves fully covering both hands all the way to the fingertips, every finger covered in white lace, holding a simple folding fan, soft neutral academy-toned gradient background, classic villainess ojou-sama aura, high detail, no text, no watermark
```

## 네거티브 프롬프트 v8

```text
V-shaped opening, plunging neckline, contrasting underdress, cream panel down the front, open front, robe over dress, overcoat, long coat, jacket over dress, separate skirt, blouse and skirt, two-piece outfit, full length shot, wide shot, full body, distant camera, small face, fingerless gloves, half gloves, bare hands, exposed fingers, lace cuffs only, open mouth, showing teeth, toothy grin, harsh angry eyebrows, villain scowl, round soft eyes, big innocent doe eyes, drooping eyes, half-closed eyes, sleepy gaze, military uniform, military braid, epaulettes, belt, metal buckles, silver braid trim, pastel pink, baby pink, mint pastel, candy colors, frilly dress, many ribbons, rose accents, childish outfit, child, little girl, chibi, oversized head, childish proportions, dark hair, red hair, short hair, tiara, jeweled hair ornament, heavy jewelry, pale violet gown, garden background, stone arches, outdoor background, staircase, ballroom crowd, busy background, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

> v8 네거티브 요점: 겉옷화 차단에 `V-shaped opening, contrasting underdress,
> cream panel down the front, open front` 추가.
> 프레임은 `full length shot, wide shot, full body, distant camera, small face` 로 당김.
> 나머지는 v7에서 유지.

## 이미지 생성 프롬프트 v7

> **v6에서 머리모양·표정·얼굴형은 그대로 두고 두 가지만 교정.**
> ① 장갑 — v6는 손목 레이스 커프스로 나와 손가락이 드러남.
>    **손가락까지 완전히 덮는 긴 흰 레이스 장갑**으로.
> ② 실루엣 — v6 1번처럼 코트를 걸친 듯한 상하 분리 느낌이 아니라,
>    **몸판부터 치마까지 이어지는 원피스 통짜 드레스**로 (v6 2번·4번 계열).

```text
A haughty beautiful young noble lady, romance fantasy webnovel style, detailed anime character portrait, bright golden blonde hair in twin rolled bun curls with long ringlets falling at the sides, sharp upturned almond eyes in clear icy blue with a keen alert gaze, proud arrogant expression with a faint closed-lip smirk of quiet superiority, lips closed, wearing elegant deep jade green and cream one-piece noble gown, a single continuous dress flowing from the fitted bodice down into the skirt with no separation at the waist, not a blouse and skirt, no overcoat, no open robe, no jacket, softly gathered sleeves and a delicate white lace panel down the center front, fine lace at the collar, long white lace gloves fully covering both hands all the way to the fingertips, every finger covered in white lace, holding a simple folding fan, soft neutral academy-toned gradient background, classic villainess ojou-sama aura, clean half body portrait, high detail, no text, no watermark
```

## 네거티브 프롬프트 v7

```text
fingerless gloves, half gloves, cropped gloves, bare hands, exposed fingers, bare fingertips, lace cuffs only, wrist frills instead of gloves, separate skirt, blouse and skirt, two-piece outfit, open robe, overcoat, long coat, jacket over dress, cardigan, cape, open mouth, showing teeth, toothy grin, wide grin, harsh angry eyebrows, villain scowl, round soft eyes, big innocent doe eyes, drooping eyes, half-closed eyes, sleepy gaze, military uniform, military braid, epaulettes, belt, metal buckles, silver braid trim, pastel pink, baby pink, mint pastel, candy colors, frilly dress, many ribbons, rose accents, childish outfit, child, little girl, chibi, oversized head, childish proportions, dark hair, red hair, short hair, tiara, jeweled hair ornament, heavy jewelry, pale violet gown, garden background, stone arches, outdoor background, staircase, ballroom crowd, busy background, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

> v7 네거티브 요점: 장갑은 `fingerless gloves, half gloves, bare hands, exposed fingers,
> lace cuffs only, wrist frills instead of gloves` 로 반장갑·커프스화를 차단.
> 실루엣은 `separate skirt, blouse and skirt, two-piece outfit, open robe, overcoat,
> long coat, jacket over dress` 로 상하 분리와 겉옷을 차단.
> 나머지(표정·유아틱·군복 억제)는 v6에서 그대로 유지.

## 이미지 생성 프롬프트 v6

> **v5를 한 단계씩 완화한 최종안.** v5가 요청을 넘어서 표정은 악역처럼, 의상은 군복처럼 나왔음.
> ① 치켜 올라간 눈매는 유지하되 **이 드러낸 미소 → 다문 입의 은근한 우월감**으로.
> ② 제이드 톤은 유지하되 **은색 브레이드·벨트·각진 재단을 걷어내고** 레이스 패널과
>    부드러운 소매의 귀족 드레스로 되돌림.

```text
A haughty beautiful young noble lady, romance fantasy webnovel style, detailed anime character portrait, bright golden blonde hair in twin rolled bun curls with long ringlets falling at the sides, sharp upturned almond eyes in clear icy blue with a keen alert gaze, proud arrogant expression with a faint closed-lip smirk of quiet superiority, lips closed, elegant deep jade green and cream noble gown in a mature jewel-toned palette, softly gathered sleeves and a delicate white lace panel down the center front, fine lace at the collar and cuffs, no military braid, no belt, no metal fittings, holding a simple folding fan, soft neutral academy-toned gradient background, classic villainess ojou-sama aura, clean half body portrait, high detail, no text, no watermark
```

## 네거티브 프롬프트 v6

```text
open mouth, showing teeth, toothy grin, wide grin, snarl, harsh angry eyebrows, villain scowl, round soft eyes, big innocent doe eyes, drooping eyes, half-closed eyes, sleepy gaze, military uniform, military braid, epaulettes, belt, metal buckles, armor, silver braid trim, structured stiff tailoring, pastel pink, baby pink, mint pastel, candy colors, frilly dress, many ribbons, rose accents, childish outfit, child, little girl, chibi, toddler, oversized head, childish proportions, dark hair, red hair, short hair, tiara, jeweled hair ornament, heavy jewelry, pale violet gown, garden background, stone arches, outdoor background, staircase, ballroom crowd, busy background, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

> v6 네거티브 요점: 표정은 `open mouth, showing teeth, toothy grin, harsh angry eyebrows,
> villain scowl` 로 과격함만 깎고 날카로운 눈매는 살린다.
> 의상은 `military braid, epaulettes, belt, metal buckles, silver braid trim,
> structured stiff tailoring` 으로 군복화를 차단. 유아틱 억제 항목은 v5에서 유지.

## 이미지 생성 프롬프트 v5

> **채택된 v1을 다듬은 버전.** v1의 롤빵 머리·부채·악녀 기질은 그대로 두고 두 가지만 조정:
> ① 눈매를 더 날카롭게 — 단 **가늘게 뜨는 방향은 금지**(루크레치아의 실눈과 겹침).
>    눈꼬리가 치켜 올라간 모양으로 날카로움을 만들고 시선은 또렷하게 유지.
> ② 의상이 유아틱하지 않게 — 파스텔 민트를 같은 계열 **진한 보석톤(제이드)** 으로 낮추고,
>    리본·장미 장식을 덜어내고 재단이 잡힌 보디스로.

```text
A haughty beautiful young noble lady, romance fantasy webnovel style, detailed anime character portrait, bright golden blonde hair in twin rolled bun curls with long ringlets falling at the sides, sharp upturned almond eyes in clear icy blue with a keen alert piercing gaze, proud arrogant expression with a faint condescending smirk and a hint of hidden insecurity, elegant deep jade green and cream noble dress in a mature jewel-toned palette, structured tailored bodice with clean lines and a high collar, restrained silver trim, only one small ribbon at the collar, no rose accents, no frills, holding a simple folding fan, soft neutral academy-toned gradient background, classic villainess ojou-sama aura, clean half body portrait, high detail, no text, no watermark
```

## 네거티브 프롬프트 v5

```text
round soft eyes, big innocent doe eyes, drooping eyes, half-closed eyes, sleepy gaze, gentle kind expression, pastel pink, baby pink, mint pastel, candy colors, washed out colors, frilly dress, many ribbons, rose accents, floral appliques, lace frills everywhere, childish outfit, child, little girl, chibi, toddler, oversized head, childish proportions, dark hair, red hair, short hair, tiara, jeweled hair ornament, heavy jewelry, pale violet gown, garden background, stone arches, outdoor background, staircase, ballroom crowd, busy background, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

> v5 네거티브 요점: 눈은 `round soft eyes, big innocent doe eyes, drooping eyes` 로 둥글고
> 순한 인상을 막되, **`slit eyes` 류는 넣지 않는다**(치켜 올라간 눈매까지 같이 죽음).
> 대신 `half-closed eyes, sleepy gaze` 로 루크레치아식 실눈만 차단.
> 유아틱함은 `pastel pink, mint pastel, candy colors, frilly dress, many ribbons, rose accents` 로 억제.

## 이미지 생성 프롬프트 v2

> 수정: 더 정석적인 아가씨 이미지로. 세로 롤 드릴 머리, 유아틱한 분홍 대신 성숙한 색감의 드레스.

```text
A refined and haughty young noble lady, classic aristocratic ojou-sama, romance fantasy webnovel style, detailed anime character portrait, bright golden blonde hair styled in elegant long twin vertical drill curls, clear blue eyes, proud dignified expression with a subtle hint of hidden insecurity, elegant deep royal blue and white noble dress with modest lace and small ribbons, mature and classy color palette, no pink, holding a simple folding fan, soft neutral academy-toned gradient background, classic noble young lady aura, clean half body portrait, high detail, no text, no watermark
```

## 이미지 생성 프롬프트 v3

> 수정: 더 귀족영애답게. 그리고 **`남부의 보석 - 루크레치아`와 이미지가 겹치는 문제** 해소.
> 둘 다 금발·세로 롤 드릴·청안·접이식 부채를 갖고 있었음.
> 드릴 머리는 v2에서 잡은 방향이라 유지하고, 나머지로 차별화한다.
>
> | | 샬롯 | 루크레치아 |
> |---|---|---|
> | 나이대 | 10대 아카데미 영애 | 성숙한 악녀 |
> | 눈 | 크고 또렷한 청안 | 실눈, 냉소 |
> | 머리 장식 | 큰 청색 리본 | 보석 티아라 |
> | 소품 | 부채 없음, 레이스 장갑 | 보석 부채 (main prop) |
> | 색조 | 로열블루 + 화이트 | 페일 바이올렛 + 진주 |
> | 배경 | 밝은 아카데미 실내 | 햇살 정원, 석조 아치 |

```text
A proud young aristocratic daughter of a ducal house, a teenage academy student, romance fantasy webnovel style, detailed anime character portrait, youthful delicate face with softly rounded cheeks, bright golden blonde hair in neat twin vertical drill curls tied with a large deep blue satin ribbon bow, big clear round blue eyes wide open, chin raised in haughty pride with a subtle hint of youthful insecurity, high-collared deep royal blue and white academy noble dress with crisp white lace trim, a slim ribbon choker at her throat, white lace gloves, hands folded primly in front of her, no folding fan, no tiara, no gemstones, bright clean academy interior with tall sunlit windows in the background, prim well-bred young lady aura, mature and classy color palette, no pink, clean half body portrait, high detail, no text, no watermark
```

> ⚠️ **v3 폐기.** 결과가 아동처럼 나옴. `a teenage academy student` +
> `youthful delicate face with softly rounded cheeks` + `large deep blue satin ribbon bow` 가
> 겹치면서 유아화됐고, 네거티브의 `mature adult woman` 이 그 방향을 더 밀었음.

## 이미지 생성 프롬프트 v4

> **역반영 + 조정**: 참고본(당시 `images/anima_2/charlotte.png`, 현재는 삭제됨)을 보고 다시 기술.
> 확정 이미지는 [`images/chars/charlotte.png`](../../images/chars/charlotte.png).
> 참고본에서 "귀족영애다움"을 만드는 요소를 명시 — 은백색 다마스크 자수,
> 양 어깨의 흰 실크 리본, 작은 펜던트와 청색 드롭 귀걸이, 곁눈질하는 의뭉스러운 미소.
> **참고본의 부채는 빼고 흰 레이스 장갑으로 대체** (루크레치아의 부채와 겹치므로).
>
> 루크레치아와의 겹침은 티아라 vs 리본, 실눈 vs 또렷한 눈,
> 페일 바이올렛 vs 로열블루, 장미정원 vs 중성 배경으로 이미 충분히 갈린다.

```text
A refined and haughty young noble lady of a ducal house, classic aristocratic ojou-sama, romance fantasy webnovel style, detailed anime character portrait, bright golden blonde hair with a braided crown at the top and long glossy vertical ringlet drill curls falling on both sides, clear blue eyes, faintly smug knowing smile with her face turned slightly aside while glancing at the viewer, light blush on her cheeks, deep royal blue high-collared noble dress with intricate silver-white damask embroidery on the sleeves and bodice, a vertical white lace panel down the center front, white lace cuffs, small white silk ribbon bows on both upper arms, a slim blue sash at her waist, a small silver pendant necklace and a small blue drop earring, wearing white lace gloves with her hands resting lightly in front of her, no fan, mature and classy color palette, no pink, soft neutral gray gradient background with faint golden wisps, prim well-bred young lady aura, clean half body portrait, high detail, no text, no watermark
```

## 네거티브 프롬프트 (Negative Prompt)

```text
folding fan, fan in hand, child, little girl, chibi, toddler, oversized hair bow, giant ribbon, oversized head, childish outfit, tiara, jeweled hair ornament, large gemstones, pearls, pale violet gown, lilac dress, rose garden, stone arches, narrow half-closed eyes, slit eyes, cruel smirk, seductive expression, pink dress, dark hair, red hair, twin round buns, heavy jewelry, staircase, ballroom crowd, busy background, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

> v4에 맞춰 네거티브 조정: **아동화 억제** 항목 추가
> (`child, little girl, chibi, toddler, oversized hair bow, giant ribbon, oversized head`).
> v3의 `mature adult woman` 은 **제거** — 이 항목이 오히려 유아화를 밀었음.
> 부채는 루크레치아와 겹치므로 `folding fan, fan in hand` 유지.
> 드릴 머리를 살려야 하므로 `short hair` 는 넣지 않음.
