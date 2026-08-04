# 남부의 보석 - 루크레치아 (Lucrezia)

## 기본 정보

- 구분: 빌런 (메인 악녀)
- 시작지점: 남부
- 모티프: 루크레치아 (Lucrezia Borgia)

## 설정

- 남부 교회 세력권의 메인 악녀.
- `전처녀 - 제노비아`를 몰래 빼돌려 자신의 사냥개로 부리고, `성녀후보 - 이레네`를 전담 성직자로 두는 등 교회의 어둠을 이용해 메살리나와 암투를 벌인다.
- 컨셉: 최대한 예쁘고 치명적이고 매력적이게.

## 외모

- 냉혈한
- 실눈
- 롤 머리, 금발
- 벽안

## 이미지 생성 프롬프트

> 구도: **어깨 너머로 돌아보기.** 등을 보인 채 정원 길을 걸어가다 흘깃 돌아본다.
> 앞선 셋과 각도가 겹치지 않게 잡은 것 —
> roxana(아래→위) · messalina(위→아래) · jezebel(정면 대칭) · **lucrezia(뒤→돌아봄)**.
>
> "볼일 끝났다"는 태도가 냉혈·계산적 성격에 맞고,
> **세로 롤 금발이 뒤에서 볼 때 실루엣으로 더 산다.**
>
> ✅ **채택됨 — `lucrezia_09.png` (seed 9109).**
> `from behind` 는 CLAUDE.md 구도 시트에서 Turbo 에서 약했던 태그인데
> **Base v1.0 + LoRA 에서는 제대로 먹었다.** 등을 완전히 돌린 채 어깨 너머로 돌아보고,
> 세로 롤이 등을 타고 흘러내리며 부채까지 들린 채로 나왔다.
> `facing away` 억제가 얼굴을 살린 것으로 보인다.

```text
from behind, looking back, looking at viewer, turning head, over-the-shoulder view, Lucrezia fills the frame,

Lucrezia, a cold-blooded beautiful noble villainess, walking away down a sunlit rose garden path and glancing back over her shoulder,

cowboy shot, seen from behind, her back toward the viewer, head turned over her shoulder, holding an ornate jeweled folding fan in one hand,

narrow half-closed icy blue eyes, faint cruel smile, calculating and detached,

golden blonde hair in elegant vertical drill curls falling down her back, jeweled tiara-like hair ornament, luxurious pale violet southern noble gown with lace, pearls and blue gemstones, long trailing skirt, bare nape,

sunlit renaissance garden, pale roses, stone arches, dappled light,

elegant, calculating and lethal atmosphere, vertical composition
```

## 이미지 생성 프롬프트 v2

> **화풍 검증용 — 포지티브는 v1 와 완전히 동일하고 네거티브에만 3D 억제를 더한 것.**
> 입체감이 네거티브의 `3d, realistic` 계열 부재 때문인지 확인한다.

```text
from behind, looking back, looking at viewer, turning head, over-the-shoulder view, Lucrezia fills the frame,

Lucrezia, a cold-blooded beautiful noble villainess, walking away down a sunlit rose garden path and glancing back over her shoulder,

cowboy shot, seen from behind, her back toward the viewer, head turned over her shoulder, holding an ornate jeweled folding fan in one hand,

narrow half-closed icy blue eyes, faint cruel smile, calculating and detached,

golden blonde hair in elegant vertical drill curls falling down her back, jeweled tiara-like hair ornament, luxurious pale violet southern noble gown with lace, pearls and blue gemstones, long trailing skirt, bare nape,

sunlit renaissance garden, pale roses, stone arches, dappled light,

elegant, calculating and lethal atmosphere, vertical composition
```

## 네거티브 프롬프트 v2

```text
3d, realistic, photorealistic, rendered, cgi, volumetric lighting, soft airbrush shading, smooth gradient shading, glossy skin, shiny highlights, subsurface scattering, depth of field, bokeh,
facing away, front view, back of head only, faceless,
poison vial, potion bottle, dark hair, red hair, wide open eyes, straight hair,
dark gown, weapons, modern clothing,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```

## 네거티브 프롬프트 (Negative Prompt)

> ⚠️ **`facing away` 는 반드시 억제한다** — 그건 "얼굴이 안 보이는 뒷모습"(37k) 이라
> 돌아보는 구도가 통째로 죽는다. 우리가 원하는 건 `from behind` + `looking back` 이다.
>
> ⚠️ `facing viewer` 는 네거티브에 넣지 말 것. 포지티브의 `looking at viewer` 와
> 문자열이 비슷해 같이 죽을 위험이 있다. `front view` 만 쓴다.

```text
facing away, front view, back of head only, faceless,
poison vial, potion bottle, dark hair, red hair, wide open eyes, straight hair,
dark gown, weapons, modern clothing,
2girls, multiple girls, multiple views,
text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy
```
