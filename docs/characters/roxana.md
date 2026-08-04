# 서부의 꽃 - 로욱시나 (Roxana)

## 기본 정보

- 구분: 빌런 (메인 악녀)
- 시작지점: 서부
- 모티프: 록사나 (Roxana)

## 설정

- 권력에 미친 여자.
- `부두술사 - 마리`와 비밀 거래를 이어가다 배신하여 이단심문관에게 넘기는 등, 서부의 이권과 권력을 위해서라면 무엇이든 하는 메인 악녀.
- 컨셉: 최대한 예쁘고 치명적이고 매력적이게.

## 외모

- 권태한 눈빛
- 작은 왕관
- 곱슬 머리, 붉은 머리
- 슬렌더 체형, 작은 가슴
- 신발은 하이힐이 아니라 **샌들**

## 이미지 생성 프롬프트

> 왕관은 **일부러 뺐다.** 생성 후 인페인팅으로 넣는다 — 네거티브에서 머리 위 장식을
> 억제해 마스크 영역을 좁게 유지한다 (LLLite 는 마스크 안을 처음부터 다시 그리므로
> 머리카락이 그 공간을 채우면 헤어라인까지 재구성된다).

```text
full body, (from below:1.4), extreme low angle, the viewer kneels at the foot of the dais looking steeply up, Roxana towers over the viewer and fills the frame,

Roxana, a beautiful and languid noblewoman seated on an ornate sandstone throne high on a raised stone dais, worn stone steps rising steeply in the foreground, the tall throne back cropped by the top edge of the frame,

looking at viewer, chin raised high, gazing far down at the viewer with lazy contempt, head rest, one elbow on the armrest with her cheek propped on that hand, leaning back into the throne, legs crossed, long gown spilling down the steps,

jitome, narrowed crimson eyes, red eyes, faint contemptuous smirk, closed mouth,

slender adult woman, small breasts, pale skin, bare shoulders, long voluminous curly crimson hair, white silk gown with ornate gold and red trim and a high thigh slit, golden strappy sandals,

deep red cushions, dim shadowed hall, warm rim light, blurry background, depth of field,

deep crimson and muted gold palette, dramatic side lighting, vertical composition
```

## 이미지 생성 프롬프트 v2

**전신(v1) 대비 `cowboy shot` 프레이밍 변형.** 허벅지 중간에서 잘라 얼굴을 키운다.
로우앵글·옥좌·시선은 v1 과 동일하게 유지한다.

`--prompt-version 1` 로 전신 버전을 다시 뽑을 수 있다.

```text
cowboy shot, (from below:1.4), extreme low angle, the viewer looks steeply up at her from the foot of the dais, Roxana towers over the viewer and fills the frame,

Roxana, a beautiful and languid noblewoman seated on an ornate sandstone throne high on a raised stone dais, the tall throne back cropped by the top edge of the frame,

looking at viewer, gazing down at the viewer with lazy contempt, chin raised high, head rest, one elbow on the armrest with her cheek propped on that hand, leaning back into the throne, legs crossed,

jitome, narrowed crimson eyes, red eyes, faint contemptuous smirk, closed mouth,

slender adult woman, small breasts, pale skin, bare shoulders, long voluminous curly crimson hair, white silk gown with ornate gold and red trim and a high thigh slit, golden strappy sandals,

deep red cushions, dim shadowed hall, warm rim light, blurry background, depth of field,

deep crimson and muted gold palette, dramatic side lighting, vertical composition
```

## 이미지 생성 프롬프트 v3

> **화풍 검증용 — 포지티브는 v2 와 완전히 동일하고 네거티브에만 3D 억제를 더한 것.**
> 입체감이 네거티브의 `3d, realistic` 계열 부재 때문인지 확인한다.
>
> ⚠️ 포지티브와 충돌해서 뺀 억제어: `depth of field`

```text
cowboy shot, (from below:1.4), extreme low angle, the viewer looks steeply up at her from the foot of the dais, Roxana towers over the viewer and fills the frame,

Roxana, a beautiful and languid noblewoman seated on an ornate sandstone throne high on a raised stone dais, the tall throne back cropped by the top edge of the frame,

looking at viewer, gazing down at the viewer with lazy contempt, chin raised high, head rest, one elbow on the armrest with her cheek propped on that hand, leaning back into the throne, legs crossed,

jitome, narrowed crimson eyes, red eyes, faint contemptuous smirk, closed mouth,

slender adult woman, small breasts, pale skin, bare shoulders, long voluminous curly crimson hair, white silk gown with ornate gold and red trim and a high thigh slit, golden strappy sandals,

deep red cushions, dim shadowed hall, warm rim light, blurry background, depth of field,

deep crimson and muted gold palette, dramatic side lighting, vertical composition
```

## 이미지 생성 프롬프트 v4

> **v2(cowboy) 구도 + 왕관을 생성 단계에서 씌운 것.**
> 원래는 왕관을 빼고 인페인팅으로 넣기로 했었는데, 그 과정에서 얻은 결론
> — **`mini_crown` 이 실제 태그**(22,844장, "머리 위에 작게 올려진 미니 왕관") — 을
> 생성 단계로 끌어올린다. 자연어로 길게 서술했을 때는 크고 뾰족한 티아라만 나왔다.
>
> ⚠️ 네거티브의 왕관 억제(`crown, tiara, circlet, headpiece, hair ornament, horns`)를
> 풀되 **맨 `crown` 은 쓰지 않는다** — `mini crown` 까지 같이 죽는다.
> 반드시 수식어를 붙여 `large crown, tall crown, spiked crown` 식으로 막는다.

```text
cowboy shot, (from below:1.4), extreme low angle, the viewer looks steeply up at her from the foot of the dais, Roxana towers over the viewer and fills the frame,

Roxana, a beautiful and languid noblewoman seated on an ornate sandstone throne high on a raised stone dais, the tall throne back cropped by the top edge of the frame,

looking at viewer, gazing down at the viewer with lazy contempt, chin raised high, head rest, one elbow on the armrest with her cheek propped on that hand, leaning back into the throne, legs crossed,

jitome, narrowed crimson eyes, red eyes, faint contemptuous smirk, closed mouth,

mini crown, gold crown, a tiny tilted mini crown perched on the right side of the top of her head, one small round red gemstone on it, small red teardrop jewel on her forehead,

slender adult woman, small breasts, pale skin, bare shoulders, long voluminous curly crimson hair, white silk gown with ornate gold and red trim and a high thigh slit, golden strappy sandals,

deep red cushions, dim shadowed hall, warm rim light, blurry background, depth of field,

deep crimson and muted gold palette, dramatic side lighting, vertical composition
```

## 네거티브 프롬프트 v4

```text
large crown, tall crown, spiked crown, pointed crown, crown of thorns,
ornate tiara, headpiece, circlet, crown across the forehead, horns,
closed eyes, sleeping, looking away, looking down,
from above, eye level, portrait crop, full body,
high heels, stiletto heels, boots, bare feet,
arena, stadium, audience, crowd, spectators, railing, banners,
2girls, multiple girls, multiple views,
open mouth, teeth,
blue hair, blonde hair, straight hair, blue gemstones, blue drapery,
plump figure, chubby, large breasts, big bust, busty, voluptuous, cleavage,
panties, crotch focus,
modern setting, text, watermark, signature, logo,
extra fingers, extra arms, deformed hands, bad anatomy
```

## 네거티브 프롬프트 v3

```text
3d, realistic, photorealistic, rendered, cgi, volumetric lighting, soft airbrush shading, smooth gradient shading, glossy skin, shiny highlights, subsurface scattering, bokeh,
crown, tiara, circlet, headpiece, hair ornament, horns,
closed eyes, sleeping, looking away, looking down,
from above, eye level, portrait crop, full body,
high heels, stiletto heels, boots, bare feet,
arena, stadium, audience, crowd, spectators, railing, banners,
2girls, multiple girls, multiple views,
open mouth, teeth,
blue hair, blonde hair, straight hair, blue gemstones, blue drapery,
plump figure, chubby, large breasts, big bust, busty, voluptuous, cleavage,
panties, crotch focus,
modern setting, text, watermark, signature, logo,
extra fingers, extra arms, deformed hands, bad anatomy
```

## 네거티브 프롬프트 v2

v1 과 거의 같되 **`cropped legs` 를 뺐다** — `cowboy shot` 이 허벅지에서 자르는 것이라
그 네거티브가 프레이밍 자체와 싸운다.

```text
crown, tiara, circlet, headpiece, hair ornament, horns,
closed eyes, sleeping, looking away, looking down,
from above, eye level, portrait crop, full body,
high heels, stiletto heels, boots, bare feet,
arena, stadium, audience, crowd, spectators, railing, banners,
2girls, multiple girls, multiple views,
open mouth, teeth,
blue hair, blonde hair, straight hair, blue gemstones, blue drapery,
plump figure, chubby, large breasts, big bust, busty, voluptuous, cleavage,
panties, crotch focus,
modern setting, text, watermark, signature, logo,
extra fingers, extra arms, deformed hands, bad anatomy
```

> ⚠️ v2 는 `looking down` 을 **네거티브로 옮겼다.** v1(전신)에서 이걸 포지티브에 넣었더니
> 고개가 너무 숙여져 8장 중 5장에서 눈맞춤이 사라졌다. 내려다보는 느낌은
> `from below` + `looking at viewer` + `chin raised high` 만으로 충분히 성립한다.

## 네거티브 프롬프트 (Negative Prompt)

```text
crown, tiara, circlet, headpiece, hair ornament, horns,
closed eyes, sleeping, looking away, looking down,
from above, eye level, upper body, portrait crop, cropped legs,
high heels, stiletto heels, boots, bare feet,
arena, stadium, audience, crowd, spectators, railing, banners,
2girls, multiple girls, multiple views,
open mouth, teeth,
blue hair, blonde hair, straight hair, blue gemstones, blue drapery,
plump figure, chubby, large breasts, big bust, busty, voluptuous, cleavage,
panties, crotch focus,
modern setting, text, watermark, signature, logo,
extra fingers, extra arms, deformed hands, bad anatomy
```

> ⚠️ 네거티브에 **절대 넣지 말 것** 3가지 — 전부 실제로 사고를 냈다:
> - **`looking at viewer`** — "관람자를 내려다보는 시선"이 이걸로 성립한다
> - **`full body`, `wide shot`** — 인물이 작게 나오는 걸 막으려고 넣었다가
>   **전신 로우앵글을 통째로 막았다.** 다리·옥좌 단이 잘리면 `from below` 의
>   원근 단서가 사라져 앵글이 안 느껴진다. 인물 크기는 네거티브가 아니라
>   포지티브의 `towers over the viewer and fills most of the frame` 로 잡는다
>
> `from above` / `eye level` / `upper body` 는 네거티브가 맞다 —
> 카메라가 올라가거나 눈높이가 되면 올려다보는 권위가 뒤집힌다.
