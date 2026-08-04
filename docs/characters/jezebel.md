# 북부의 마녀 - 이제벨 (Jezebel)

## 기본 정보

- 구분: 빌런 (메인 악녀)
- 시작지점: 북부
- 모티프: 이제벨 (Jezebel)

## 설정

- 악마숭배자.
- 본래 동부의 황녀였다. 현재는 북동부(공국과 동부 제국의 국경)에 그녀만의 자유도시를 세우고 시장을 맡고 있다. 대외적으로는 자유도시지만, 사실은 악마숭배자의 소굴이다.
- 지크프리트와 본래 약혼 관계였으나, 파혼 수순을 밟았다.
- `잊혀진 진조 - 바토리`를 깨워 학살에 이용하고, `마력없는 마법사 - 미호`를 금단의 마법으로 유혹하는 등 북부를 중심으로 어둠의 세력을 움직인다.
- 컨셉: 최대한 예쁘고 치명적이고 매력적이게.

## 외모

- 산발된 머리
- 눈에 붕대
- 광기 어린 웃음

## 이미지 생성 프롬프트

> 구도: **정면 눈높이 + 좌우대칭 + 두 팔 벌린 집전자.**
> roxana(아래→위, 옥좌) · messalina(위→아래, 침대)와 **각도로도 갈리게** 잡은 것.
>
> ⚠️ jezebel 은 **눈을 붕대로 완전히 가려서 시선 연출을 쓸 수 없다.**
> 다른 캐릭터가 쓰는 "내려다봄 / 올려다봄" 이 성립하지 않으므로
> **자세·손·대칭**으로 위압을 만든다. 눈이 없는데 정면을 똑바로 향하는
> 대칭 구도가 그 자체로 섬뜩하다.
>
> 배경은 **건축만** 풀었다 — 컬트 홀·석조 기둥·붉은 역광.
> 제단·촛불·룬은 계속 억제한다(아래 네거티브). 기존의 미니멀한 톤을 유지하면서
> 공간감만 주기 위함.

```text
symmetry, facing viewer, eye level, centered composition, Jezebel fills the frame,

Jezebel, a dangerously beautiful demon-worshipping witch, standing at the center of a dark cult hall,

cowboy shot, standing, outstretched arms, spread arms, both arms raised to either side, wide sleeves torn into long ragged strips streaming downward, white bandages wrapped around both forearms,

thick white bandages fully wrapped around her head completely covering both eyes, eyes entirely hidden, no eyes visible at all, ecstatic mad grin, teeth showing, head tilted slightly back,

long wild disheveled black hair streaked with vivid red, tattered elegant black priestess robes, high collar, a few subtle occult sigils,

dark stone cult hall, tall carved stone pillars, deep shadows, restrained crimson rim light from behind, low drifting fog at her feet,

seductive yet terrifying atmosphere, deep crimson and black palette, vertical composition
```

## 이미지 생성 프롬프트 v2

> **화풍 검증용 — 포지티브는 v1 와 완전히 동일하고 네거티브에만 3D 억제를 더한 것.**
> 입체감이 네거티브의 `3d, realistic` 계열 부재 때문인지 확인한다.

```text
symmetry, facing viewer, eye level, centered composition, Jezebel fills the frame,

Jezebel, a dangerously beautiful demon-worshipping witch, standing at the center of a dark cult hall,

cowboy shot, standing, outstretched arms, spread arms, both arms raised to either side, wide sleeves torn into long ragged strips streaming downward, white bandages wrapped around both forearms,

thick white bandages fully wrapped around her head completely covering both eyes, eyes entirely hidden, no eyes visible at all, ecstatic mad grin, teeth showing, head tilted slightly back,

long wild disheveled black hair streaked with vivid red, tattered elegant black priestess robes, high collar, a few subtle occult sigils,

dark stone cult hall, tall carved stone pillars, deep shadows, restrained crimson rim light from behind, low drifting fog at her feet,

seductive yet terrifying atmosphere, deep crimson and black palette, vertical composition
```

## 이미지 생성 프롬프트 v3

> **채택본(seed 4004)이 나온 구도를 그대로 복원한 것.** `images/v2` 의 워크플로 JSON 에서 꺼냈다.
> 이후 역십자가·미형화·역동성을 걷어낸 판으로 md 를 덮어써서 어긋나 있었다.
> 이쪽이 그것들이 **들어 있는** 구성이다.

```text
symmetry, facing viewer, eye level, centered composition, Jezebel fills the frame,

Jezebel, a dangerously beautiful demon-worshipping witch, standing at the center of a dark cult hall,

cowboy shot, standing, outstretched arms, spread arms, both arms raised to either side, wide sleeves torn into long ragged strips streaming downward, tattered robes billowing outward, wind, floating hair, dynamic pose, white bandages wrapped around both forearms,

thick white bandages fully wrapped around her head completely covering both eyes, eyes entirely hidden, no eyes visible at all, ecstatic mad grin, teeth showing, head tilted slightly back,

a beautiful young woman, delicate refined features, smooth pale skin, detailed face, sharp jawline,

long wild disheveled black hair streaked with vivid red, hair whipping outward, tattered elegant black priestess robes, high collar, a large inverted cross sigil on her chest, small inverted cross pendant,

dark stone cult hall, tall carved stone pillars, deep shadows, restrained crimson rim light from behind, low drifting fog at her feet,

seductive yet terrifying atmosphere, deep crimson and black palette, vertical composition
```

## 네거티브 프롬프트 v3

```text
visible eyes, eyes showing, no bandages, neat tidy hair, blonde hair,
latin cross, upright cross, holy symbol, crucifix,
altar, candles, glowing runes, magic circle, ornate robes, heavy jewelry,
from below, from above, dutch angle, looking to the side, profile,
old, wrinkles, aged skin, gaunt, hollow cheeks, harsh masculine face, ugly,
crowd, 2girls, multiple girls, multiple views,
text, watermark, signature, logo,
extra arms, extra fingers, deformed hands, bad anatomy
```

## 네거티브 프롬프트 v2

```text
3d, realistic, photorealistic, rendered, cgi, volumetric lighting, soft airbrush shading, smooth gradient shading, glossy skin, shiny highlights, subsurface scattering, depth of field, bokeh,
visible eyes, eyes showing, no bandages, neat tidy hair, blonde hair,
altar, candles, glowing runes, magic circle, ornate robes, heavy jewelry,
from below, from above, dutch angle, looking to the side, profile,
old, wrinkles, aged skin, gaunt, hollow cheeks, harsh masculine face, ugly,
crowd, 2girls, multiple girls, multiple views,
text, watermark, signature, logo,
extra arms, extra fingers, deformed hands, bad anatomy
```

## 네거티브 프롬프트 (Negative Prompt)

> ⚠️ `altar, candles, glowing runes` 는 **계속 막는다.** 배경은 건축(기둥·홀)만 살렸다.
>
> ⚠️ **미형화는 네거티브로만 한다.** 포지티브에 `beautiful young woman, delicate refined
> features` 를 넣어봤더니 오히려 인상이 어색해졌다.
> `old, wrinkles, aged skin, gaunt, hollow cheeks, harsh masculine face, ugly` 를
> **억제하는 것만으로 충분하다.**
> ⚠️ `from below, from above` 를 넣어 **정면 눈높이**를 지킨다. 각도가 흔들리면
> 다른 캐릭터와의 대비가 사라진다.
> ⚠️ `extra arms` 필수 — 두 팔을 벌리는 자세는 팔이 늘어나기 쉽다.

```text
visible eyes, eyes showing, no bandages, neat tidy hair, blonde hair,
altar, candles, glowing runes, magic circle, ornate robes, heavy jewelry,
from below, from above, dutch angle, looking to the side, profile,
old, wrinkles, aged skin, gaunt, hollow cheeks, harsh masculine face, ugly,
crowd, 2girls, multiple girls, multiple views,
text, watermark, signature, logo,
extra arms, extra fingers, deformed hands, bad anatomy
```
