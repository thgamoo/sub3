# 잔느 (Jeanne)

## 기본 정보

- 구분: 주인공
- 시작지점: 아카데미
- 모티프: 잔 다르크 (Jeanne d'Arc)

## 설정

- 라운드가 지나서 운명 카드를 오픈할수록 악녀들을 처치하고, 남주들을 자기편으로 만든다.
- 게임의 스토리 축을 이끄는 정화자 포지션. 플레이어(서브 빌런)들에게는 '원래 운명'대로라면 자신을 토벌하러 오는 존재.

## 외모

> 컨셉: 모티프는 잔 다르크지만, 디자인은 로맨스판타지 세계에 처음 떨어진 순수한 여주 느낌. 갑옷 요소 없음.

- 분홍색 숏컷 머리
- 맑고 큰 분홍색 눈, 순수하고 착해 보이는 인상
- 수수하지만 단정한 아카데미 교복 차림 (화려한 장신구 없음)
- 은은한 성스러운 빛의 분위기만 살짝

## 이미지 생성 프롬프트

> 구도: **정면 눈높이 cowboy shot + 관람자에게 한 손을 내밈.**
>
> 잔느는 디자인이 **의도적으로 수수하다**(갑옷·장신구 없음, 교복). 악녀들처럼
> 극적인 각도를 주면 그 수수함과 싸운다. 게다가 모든 덱에 등장하는 축이라
> **기준점**으로 안정적인 편이 낫다. 그래서 각도는 건드리지 않는다.
>
> 대신 **내민 손 하나**로 구별한다:
> - jezebel 은 두 팔을 **양옆으로** 벌렸고, 잔느는 한 손을 **앞으로** 내민다.
>   각도가 같아도 실루엣이 완전히 다르다
> - 플레이어(서브 빌런) 입장에서 이 손은 **구원의 손이자 심판의 손**이다.
>   "원래 운명대로라면 자신을 토벌하러 오는 존재" 라는 설정이 그대로 담긴다
> - 손이 앞으로 나오면 깊이감이 생겨 수수한 디자인으로도 화면이 산다
>
> ⚠️ `no armor, no weapons` 를 **포지티브에서 뺐다** — 확산모델은 포지티브의 부정어를
> 못 읽고 오히려 갑옷·무기를 부른다. 네거티브로 옮겼다.

```text
cowboy shot, eye level, facing viewer, looking at viewer, reaching towards viewer,

Jeanne, a pure and innocent young heroine of a romance fantasy webnovel, standing and extending one hand toward the viewer,

one hand reached out toward the camera with the palm open and turned upward, the other hand resting at her side, gentle shy smile,

soft pink short bob hair, big clear pink eyes full of innocence and kindness,

modest and neat academy school uniform with a simple ribbon,

subtle faint holy glow around her, soft warm neutral gradient background with a few drifting light particles,

delicate and lovely atmosphere, vertical composition
```

## 이미지 생성 프롬프트 v2

> **v1 에서 두 가지만 바꾼 것.**
> 1. 네거티브에 **3D 억제**를 더한다 (다른 4명과 동일한 화풍 검증)
> 2. **한 손만** 내밀도록 강화 — `(only one hand extended:1.2)` +
>    `a single outstretched hand` + `her other arm hanging relaxed and lowered at her side`.
>    네거티브에도 `both arms extended, two hands reaching, holding out both hands,
>    both palms open, symmetrical arms` 를 추가했다.
>    양손을 벌리면 jezebel(두 팔 벌림)과 실루엣이 겹친다.

```text
cowboy shot, eye level, facing viewer, looking at viewer, reaching towards viewer, (only one hand extended:1.2),

Jeanne, a pure and innocent young heroine of a romance fantasy webnovel, standing and extending one hand toward the viewer,

a single outstretched hand reaching toward the camera with the palm open and turned upward, her other arm hanging relaxed and lowered at her side, gentle shy smile,

soft pink short bob hair, big clear pink eyes full of innocence and kindness,

modest and neat academy school uniform with a simple ribbon,

subtle faint holy glow around her, soft warm neutral gradient background with a few drifting light particles,

delicate and lovely atmosphere, vertical composition
```

## 네거티브 프롬프트 v2

```text
3d, realistic, photorealistic, rendered, cgi, volumetric lighting, soft airbrush shading, smooth gradient shading, glossy skin, shiny highlights, subsurface scattering, depth of field, bokeh,
both arms extended, two hands reaching, holding out both hands, both palms open, symmetrical arms,
armor, weapons, sword, shield,
both hands raised, waving, arms spread, outstretched arms,
giant hand, oversized hand, distorted perspective,
from below, from above, dutch angle, back view,
dark hair, blonde hair, red hair, ornate jewelry, revealing outfit,
mature seductive expression, heavy makeup, villainess vibe,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```

## 네거티브 프롬프트 (Negative Prompt)

> ⚠️ `reaching towards viewer` 는 손이 카메라 쪽으로 나오는 **단축법(foreshortening)** 이라
> 손이 커지거나 뭉개지기 쉽다. `giant hand, oversized hand, distorted perspective` 를 넣어둔다.
> ⚠️ `both hands raised, waving` 억제 — **한 손만** 내밀어야 jezebel(두 팔 벌림)과 갈린다.

```text
armor, weapons, sword, shield,
both hands raised, waving, arms spread, outstretched arms,
giant hand, oversized hand, distorted perspective,
from below, from above, dutch angle, back view,
dark hair, blonde hair, red hair, ornate jewelry, revealing outfit,
mature seductive expression, heavy makeup, villainess vibe,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```
