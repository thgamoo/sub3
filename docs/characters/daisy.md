# 어둠의 시녀 - 데이지 (Daisy)

## 기본 정보

- 구분: 서브 빌런 (플레이어 캐릭터)
- 시작지점: 동부
- 시작자원: 금화 1, 매력 1, 어둠 2
- 모티프: 데이지 벨 (Daisy Bell)

## 외모

- 메이드복
- 머리를 묶어 올린 시녀
- 갈색 머리, 갈색 눈

## 원래 운명

`제국의 장미 - 메살리나`의 수족으로 활동하며 수많은 더러운 건을 처리하다가 주인공 일행에게 죽게 된다.

## 가능한 각성 능력

- 일반 각성 능력 전부

## 숨겨진 과거

그녀의 피에는 반물질유전공학을 통해 고통받았던 선조의 아픔이 담겨 있다. 실험실에서 도망쳐 나온 한 쌍의 소년소녀는 머릿속 칩에 입력되어 있던 유일한 노래를 부르며 소녀의 이름을 데이지로, 소년의 이름을 벨로 지었다. 그들은 죽음을 맞이할 때 뇌속의 칩을 꺼내 자손에게 건네주며, 모든 자손의 이름을 여자면 데이지, 남자면 벨이라 짓도록 유언을 남겼다. 많은 전승이 유실되었지만 놀랍게도 그들의 이름만큼은 이어져 내려온 것이다.

이들의 어둠친화적인 특성을 이교도의 증표로 여긴 교회는 그들의 마을 주민들을 아이들을 제외하고 몰살했고, 아이들은 여러 교회지부로 보내졌다. 데이지에게는 태어나자마자 생이별한 오빠가 있다. 오빠는 여동생을 돌려받기 위해 암살자로 이용당하다 죽었지만, 데이지는 아직 오빠의 존재조차 모르고 있다.

## 과거의 단서

- "메모리 칩"
- "벨의 단검" ('내 사랑하는 여동생 데이지를 생각하며'가 각인된 단검)
- "교회 7094지부의 인명부"
- "교황칙서 (말살 - HAL, ZEN 이 적혀있음)"

## 이미지 생성 프롬프트

```text
A quiet and mysterious young maid, romance fantasy webnovel style, detailed anime character portrait, brown hair neatly tied up in a bun, calm brown eyes hiding sorrow, classic black and white victorian maid uniform with a small frilled headdress, very faint dark shadow magic around one hand, subtle ancient memory-chip glow at her nape, muted dark neutral gradient background with no corridor, melancholic and secretive atmosphere, clean half body portrait, high detail, no text, no watermark
```

## 이미지 생성 프롬프트 v2

> 구도: **측면(profile).** 지금 채택본이 이미 측면 + 시선 내리깔기인데 아무도 안 쓴 각도다. 수족·시녀라 앞에 나서지 않는 성격과도 맞는다. cowboy shot 으로 넓히기만 한다.

```text
from side, profile, cowboy shot, eye level, looking down,

Daisy, a quiet and mysterious young maid seen from the side, standing still with her hands folded in front of her,

 brown hair neatly tied up in a bun, calm brown eyes hiding sorrow, classic black and white victorian maid uniform with a small frilled headdress, very faint dark shadow magic around one hand, subtle ancient memory-chip glow at her nape, muted dark neutral gradient background with no corridor, melancholic and secretive atmosphere, vertical composition
```

## 이미지 생성 프롬프트 v3

> **v2(측면) 기준에서 세 가지 수정.** `daisy_11` 의 어두운 표정이 맞는 방향이었다.
>
> 1. **어둠이 손을 삼키게** — v2 는 `very faint dark shadow magic around one hand` 라
>    두 손으로 **구슬을 받쳐 드는** 그림이 나왔다. 이제 손 자체가 먹히도록 서술하고,
>    네거티브에 `holding an orb, cupped hands, ball of shadow, sphere of darkness` 를 넣는다.
> 2. **금화 제거** — 어둠 한가운데 발광체가 박혀 나왔다. 원인으로 보이는
>    `subtle ancient memory-chip glow at her nape` 를 지우고,
>    네거티브에 `gold coin, coin, medallion, glowing gem, glowing orb, ember, glowing core` 추가.
> 3. **어두운 표정 명시** — `downcast eyes lowered to the floor, gloomy sorrowful expression,
>    shadow across her eyes, lips pressed thin`.

```text
from side, profile, cowboy shot, eye level, looking down,

Daisy, a quiet and mysterious young maid seen from the side, standing still with her hands folded in front of her,

 brown hair neatly tied up in a bun, downcast eyes lowered to the floor, gloomy sorrowful expression, shadow across her eyes, lips pressed thin, classic black and white victorian maid uniform with a small frilled headdress, her lowered hand swallowed by black shadow, the darkness devouring her fingers and creeping up her forearm, ragged black tendrils dripping from her hand, muted dark neutral gradient background with no corridor, melancholic and secretive atmosphere, vertical composition
```

## 네거티브 프롬프트 v3

```text
holding an orb, holding a ball, cupped hands, ball of shadow, sphere of darkness,
gold coin, coin, medallion, glowing gem, glowing orb, ember, spark, glowing core,
smiling, cheerful, bright expression, looking at viewer,
facing viewer, front view, three-quarter view, looking at viewer, back view,
blonde hair, colored hair, loose long hair, elaborate gown, heavy jewelry, bright cheerful expression, detailed corridor background, weapons, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

## 네거티브 프롬프트 v2

```text
facing viewer, front view, three-quarter view, looking at viewer, back view,
blonde hair, colored hair, loose long hair, elaborate gown, heavy jewelry, bright cheerful expression, detailed corridor background, weapons, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```

## 네거티브 프롬프트 (Negative Prompt)

```text
blonde hair, colored hair, loose long hair, elaborate gown, heavy jewelry, bright cheerful expression, detailed corridor background, weapons, text, watermark, signature, logo, extra fingers, deformed hands, bad anatomy, lowres, blurry
```
