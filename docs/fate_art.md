# 운명 카드 아트

운명 카드의 이미지 생성 프롬프트. 내용은 [scenario.md](scenario.md) 참고.

> **초안 (v1)** — 우선 초반부 덱에서 성격이 다른 2종만 뽑아 톤을 확인한다.
> 확정 후 나머지로 확장한다.

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
