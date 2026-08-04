# 제국의 장미 - 메살리나 (Messalina)

## 기본 정보

- 구분: 빌런 (메인 악녀)
- 시작지점: 동부
- 모티프: 메살리나 (Messalina)

## 설정

- 바쿠스 추종자, 음녀.
- `어둠의 시녀 - 데이지`를 수족으로 부리며 수많은 더러운 일을 처리하고, 제노비아 모녀를 기록말살형으로 몰아넣은 장본인.
- 동부 제국 궁정을 무대로 하는 메인 악녀. 루크레치아와 거래·암투 관계.
- 컨셉: 최대한 예쁘고 치명적이고 매력적이게.

## 외모

- 유혹하듯 곁눈질하는, 날카롭고 매혹적인 눈매
- 악녀다운 교활하고 오만한 미소
- 사람을 홀리는 외모
- 파란 머리
- 흰색 시스루 드레스

## 이미지 생성 프롬프트

> 구도: **위에서 내려다보는 시점** — 관람자가 위에 서 있고 그녀가 침상에서 올려다본다.
> roxana(옥좌 + 로우앵글 + 내려다봄)와 정확히 대칭이 되게 잡은 것.
> 바쿠스 소품(술잔·포도)은 되살렸다.

```text
(from above:1.1), slightly from above, the viewer looks down at her from beside the bed, Messalina fills the frame,

Messalina, a bewitchingly seductive imperial villainess, reclining on a wide canopy bed inside an opulent eastern imperial palace,

cowboy shot, on bed, reclining, propped up on one elbow, upper body raised off the cushions, deep red silk cushions and rumpled white sheets, upturned eyes, looking at viewer, sideways glance, wicked mischievous smirk, sharp alluring cat-like eyes, blue eyes, cruel and confident,

long flowing blue hair spilling over the cushions, jeweled hair chains, sheer white silk dress, ornate gold jewelry, gold armlets,

a golden goblet of wine held loosely in one hand, grapes and fruit on a low table beside the bed,

indoors, imperial palace bedchamber, wide canopy bed, tall carved stone pillars, stone arches, heavy gold curtains draped behind the bed, patterned marble floor, glowing braziers, warm golden light,

intoxicating and dangerous charm, cold elegant decadence, vertical composition
```

## 이미지 생성 프롬프트 v2

> **화풍 검증용 — 포지티브는 v1 와 완전히 동일하고 네거티브에만 3D 억제를 더한 것.**
> 입체감이 네거티브의 `3d, realistic` 계열 부재 때문인지 확인한다.

```text
(from above:1.1), slightly from above, the viewer looks down at her from beside the bed, Messalina fills the frame,

Messalina, a bewitchingly seductive imperial villainess, reclining on a wide canopy bed inside an opulent eastern imperial palace,

cowboy shot, on bed, reclining, propped up on one elbow, upper body raised off the cushions, deep red silk cushions and rumpled white sheets, upturned eyes, looking at viewer, sideways glance, wicked mischievous smirk, sharp alluring cat-like eyes, blue eyes, cruel and confident,

long flowing blue hair spilling over the cushions, jeweled hair chains, sheer white silk dress, ornate gold jewelry, gold armlets,

a golden goblet of wine held loosely in one hand, grapes and fruit on a low table beside the bed,

indoors, imperial palace bedchamber, wide canopy bed, tall carved stone pillars, stone arches, heavy gold curtains draped behind the bed, patterned marble floor, glowing braziers, warm golden light,

intoxicating and dangerous charm, cold elegant decadence, vertical composition
```

## 이미지 생성 프롬프트 v3

> **채택본(seed 1001)이 나온 구도를 그대로 복원한 것.** `images/v2` 의 워크플로 JSON 에서 꺼냈다.
> 이후 md 를 v3 구도(`from above:1.1` + 팔꿈치로 상체 세움)로 덮어써서 어긋나 있었다.
> 이쪽이 `(from above:1.3)` + `lying back` + 머리 위 팔 구성이다.

```text
(from above:1.3), high angle, the viewer stands over her looking down, Messalina fills the frame,

Messalina, a bewitchingly seductive imperial villainess, reclining on a wide canopy bed inside an opulent eastern imperial palace,

cowboy shot, on bed, reclining, lying back into deep red silk cushions and rumpled white sheets, one arm draped above her head, upturned eyes, looking at viewer, sideways glance, wicked mischievous smirk, sharp alluring cat-like eyes, blue eyes, cruel and confident,

long flowing blue hair spilling over the cushions, jeweled hair chains, sheer white silk dress, ornate gold jewelry, gold armlets,

a golden goblet of wine held loosely in one hand, grapes and fruit on a low table beside the bed,

indoors, imperial palace bedchamber, wide canopy bed, tall carved stone pillars, stone arches, heavy gold curtains draped behind the bed, patterned marble floor, glowing braziers, warm golden light,

intoxicating and dangerous charm, cold elegant decadence, vertical composition
```

## 네거티브 프롬프트 v3

```text
from below, low angle, eye level, standing, sitting upright,
crown, tiara, sleepy eyes, half-lidded eyes, drowsy, listless gaze,
innocent, kind gentle eyes, naive expression, wholesome, cute childish,
cluttered background, colored dress, opaque dress, dark dress, blue dress,
nude, topless, nipples,
bokeh background, empty background, plain background, outdoors,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```

## 네거티브 프롬프트 v2

```text
3d, realistic, photorealistic, rendered, cgi, volumetric lighting, soft airbrush shading, smooth gradient shading, glossy skin, shiny highlights, subsurface scattering, depth of field, bokeh,
from below, low angle, eye level, standing, sitting upright,
crown, tiara, sleepy eyes, half-lidded eyes, drowsy, listless gaze,
innocent, kind gentle eyes, naive expression, wholesome, cute childish,
cluttered background, colored dress, opaque dress, dark dress, blue dress,
nude, topless, nipples,
bokeh background, empty background, plain background, outdoors,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```

## 네거티브 프롬프트 (Negative Prompt)

> ⚠️ 이전 네거티브에 있던 `goblet, cup, wine glass, chalice, holding object,`
> `grapes, grape motifs, grape vines, bunch of grapes, fruit` 는 **전부 뺐다.**
> 바쿠스 소품을 되살리기로 했으므로 이제는 살려야 할 요소다.
>
> ⚠️ `from below, low angle, eye level` 을 넣어 **고각(高角)을 지킨다.**
> 카메라가 내려가면 이 구도의 의도가 뒤집힌다.
>
> ⚠️ 1차에서 배경이 **황궁으로 안 읽혔다.** 원인은 건축 요소를 하나도 안 적고
> `bokeh` · `softly blurred` · `depth of field` 로 **흐리게만** 지시했기 때문.
> 기둥·아치·휘장·화로를 명시하고 블러 조항을 걷어냈다.
> 네거티브에도 `bokeh background, empty background, plain background` 를 넣었다.

```text
from below, low angle, eye level, standing, sitting upright,
crown, tiara, sleepy eyes, half-lidded eyes, drowsy, listless gaze,
innocent, kind gentle eyes, naive expression, wholesome, cute childish,
cluttered background, colored dress, opaque dress, dark dress, blue dress,
nude, topless, nipples,
bokeh background, empty background, plain background, outdoors,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```
