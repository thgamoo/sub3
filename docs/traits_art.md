# 남주 성향 카드 아트

성향 카드 20종의 이미지 생성 프롬프트. 내용·조건은 [traits.md](traits.md) 의 **카드 상세** 기준.

## 확정 사항

1. **화풍: chibi / SD** — 2등신, 큰 머리와 작은 몸, 점 눈, 굵은 외곽선, 플랫 셀셰이딩
2. **캐릭터: 지크프리트** — 흑발 · 적안 · 은색 자수 검은 군복 코트 · **큰 퍼 칼라**
3. **구성: turbo + LoRA 없음** — steps 10 / CFG 1.0
4. 성향은 **자세 · 소품 · 표정**이 전달한다

### 왜 이 구성인가 (실측 근거)

- **화풍** — 실루엣 노선은 옷질감·음영이 계속 새어나왔고, 실사풍은 덱의 다른 카드보다 톤이 무거웠다.
  chibi 가 표현력과 통일감 양쪽에서 가장 나았다.
- **turbo + LoRA 없음** — `base + LoRA` 는 얼굴로 프레임이 쏠려 몸이 잘리고,
  노력가는 인물이 둘로 늘었다. turbo 는 전신이 들어오고 소품도 제대로 그려진다.
  게다가 **장당 4초로 5배 빠르다**. 비교: `_ab_chibi.png`
  > ⚠️ 단, **실루엣에서는 정반대**였다 — LoRA 를 빼면 형태가 뭉개졌다 (`_ab_lora_turbo.png`).
  > LoRA 요부는 화풍마다 다시 판단해야 한다.
- **지크프리트** — 가이우스는 **월계관이 매번 위치·형태가 달라져** chibi 축약에 불리했다.
  지크프리트의 퍼 칼라는 chibi 실루엣에서도 특징적으로 읽히고, 검은 옷이라 배경 분리도 좋다.
  비교: `_ab_chibi_char.png`

### 등장 인물 정리

| 카드 | 등장 |
|---|---|
| 4. 집착 | 지크프리트 + **새장 속 샬롯** |
| 8. 외모지상주의 | 지크프리트 + **샬롯** (꽃다발을 받음) |
| 16. 악성 | 지크프리트 + 애원하는 작은 인물 (특정 없음) |
| 그 외 17종 | 지크프리트 혼자 |

> ⚠️ **한 명만 나오는 카드는 개별 네거티브로 복제를 막아야 한다.**
> 공통 네거티브에서 `two people` 을 뺐기 때문(위 3종이 두 명 필요).
> 실제로 사디즘·상냥함이 두 명으로 복제돼 개별 네거티브를 붙였다.

### 익명성은 포기한다 — 지크프리트를 고정 마스코트로 쓴다

성향 카드는 네 남주에게 랜덤 배치되므로 원래는 특정 남주를 그리면 안 됐다.
그래서 익명성을 지키는 방법을 세 번 시도했고 **세 번 다 표현력을 잃었다.**

| 시도 | 익명성 확보 방법 | 잃은 것 |
|---|---|---|
| 익명 인물 | 얼굴을 그림자·역광으로 가림 | **표정이 통째로 사라짐** — 20종이 다 밋밋해짐 |
| 흑백 실루엣 | 얼굴 자체를 없앰 | 옷질감·음영이 계속 새어나오고, LoRA 를 빼면 형태가 무너짐 |
| 밋밋한 얼굴 | 이목구비를 평범하게 | 덱의 다른 카드보다 톤이 무겁고 사실적으로 기울어짐 |

→ **익명성 요구가 표현력과 정면으로 충돌한다.** 익명성을 버리고
**지크프리트를 성향 카드 전체의 고정 마스코트**로 쓴다.
어느 남주에게 배치되든 그림은 지크프리트이며, 카드는 *성향*을 나타내지 *그 남주*를 나타내지 않는다.

> 이 결정 덕분에 표정·포즈·소품을 자유롭게 쓸 수 있고, 20종이 한 캐릭터의 시리즈로 읽힌다.

## 카드 규격 · 생성 설정

**1024 × 1024 (1:1)** — 프레임·텍스트는 나중에 위에 얹는다.

| 항목 | 값 |
|---|---|
| 모델 | `anima-turbo-v1.0` |
| LoRA | **없음** (`--no-lora`) |
| 샘플링 | **10 steps / CFG 1.0** / `er_sde` / `simple` |
| 품질 태그 | base 접두 |

```powershell
.\ComfyUI\venv\Scripts\python.exe .\scripts\gen_cards.py `
  --src "sub3\docs\traits_art.md" --outdir sub3-traits --subdir traits `
  --model turbo --no-lora --steps 10 --cfg 1.0 --seeds 1001 2002 3003 4004
```

### 공통 절

모든 프롬프트에 들어간다:

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, a tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

### 공통 네거티브

> ⚠️ 이 헤딩은 **반드시 `###`(h3)** 여야 한다. 파서가 h3 기준으로 공통 네거티브를 찾는다.

```text
realistic proportions, tall body, adult proportions, long legs, detailed face, photorealistic, 3d render, busy background, detailed scenery, crowd, gore, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

---

## 1. aristocracy — 귀족주의

### 이미지 생성 프롬프트

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, a tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, seen from a three quarter diagonal angle standing like a little sovereign issuing an order, one stubby arm thrust straight out forward with the hand open and palm flat, chin lifted high and mouth set in a firm commanding line, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

## 2. sadism — 사디즘

### 이미지 생성 프롬프트

> ⚠️ 인물이 둘로 복제되는 문제가 있었다. 공통 네거티브에서 `two people` 을 뺐기 때문
> (외모지상주의·악성만 두 명이 필요해서). **한 명만 나오는 카드에는 개별 네거티브로 막는다.**

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, one single tiny chibi young man entirely alone in the image with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, wearing a small masquerade eye mask that covers only around his eyes, one little hand lowered holding a slender riding crop and the other on his hip, grinning wide with mischief, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

### 네거티브 프롬프트

```text
two people, second person, another figure, duplicate figure, twins, clone, mirrored copy, pair, realistic proportions, tall body, adult proportions, long legs, detailed face, photorealistic, 3d render, busy background, detailed scenery, crowd, gore, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

## 3. tsundere — 츤데레

### 이미지 생성 프롬프트

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, one tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, entirely alone with nobody else present, his head turned sharply away with a big blush on his cheeks, one stubby arm shoved out to the side holding a small wrapped gift box while refusing to look at it, mouth in a sulky pout, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

## 4. obsession — 집착

### 이미지 생성 프롬프트

> 새장 속 소녀는 **샬롯** — 금발 트윈 롤빵 + 세로 롤, 아이스블루 눈, 제이드 그린 드레스.

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, a tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, hugging a small ornate birdcage tightly against his chest with both arms, its little door shut with a tiny padlock, and inside the cage one very small chibi noble girl with bright golden blonde hair in twin rolled buns with long ringlets and icy blue eyes wearing a jade green dress, standing and holding the bars, his eyes half lidded and his mouth a possessive little smile, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

## 5. chivalry — 기사도

### 이미지 생성 프롬프트

> ⚠️ "칼을 두 손에 받쳐 든다"고 쓰면 **일본도를 가로로 든** 그림이 나온다.
> 서양 기사식으로 **날 끝을 바닥으로 향하게 세워 잡는** 자세를 명시한다.

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, one single tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, kneeling on one knee like a knight taking an oath, both little hands gripping the hilt of a straight western knightly longsword held upright in front of him with the blade pointing straight down and its tip resting on the ground, a plain cruciform crossguard, head bowed and mouth a closed solemn smile, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

### 네거티브 프롬프트

```text
katana, japanese sword, curved blade, samurai, sword held horizontally, sword lying flat, sword on open palms, blade pointing up, blade pointing sideways, sheathed sword, two people, second person, duplicate figure, realistic proportions, tall body, adult proportions, detailed face, photorealistic, 3d render, busy background, crowd, gore, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, bad anatomy, deformed hands, extra fingers, extra limbs
```

## 6. chosen — 선민주의

### 이미지 생성 프롬프트

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, a tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, tilting his head back with an arrogant smug look, his left hand on his hip and his right hand raised holding one small burning orange fireball, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

## 7. materialism — 물질만능주의

### 이미지 생성 프롬프트

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, a tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, one stubby arm stretched straight up overhead and his head tilted back gazing vacantly at one shiny gold coin floating just above his open palm, mouth open in dazed longing with sparkles in his eyes, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

## 8. looksism — 외모지상주의

### 이미지 생성 프롬프트

> 상대는 **샬롯**. 잔느와 비교한 결과 샬롯 채택 — 잔느는 주인공이자 적대자라
> 남주가 꽃다발을 바치는 그림이 서사와 충돌한다. (비교: `_ab_looksism.png`)

```text
chibi super deformed style, cute two heads tall proportions with big round heads and tiny bodies, simple dot eyes and simple small mouths, exactly two figures, on the right a tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, leaning forward and offering a small bouquet of flowers held in both hands with a pleased little smile, on the left a tiny chibi noble girl with bright golden blonde hair in twin rolled buns with long ringlets at the sides and icy blue eyes, wearing an elegant jade green and cream noble dress, receiving the bouquet with a proud haughty look, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

## 9. martial — 무투파

### 이미지 생성 프롬프트

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, a tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, turned to the side flexing one stubby arm upward in a proud bicep pose with his other hand on his hip, grinning confidently, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

## 10. bookworm — 책벌레

### 이미지 생성 프롬프트

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, a tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, holding a big open book up in both little hands close to his face and tilting his head down into it, completely absorbed, mouth a flat neutral line with no smile, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

## 11. devout — 독실

### 이미지 생성 프롬프트

> ⚠️ 묵주가 그냥 구슬 줄로만 나와 뭔지 안 읽혔다. **끝에 십자가를 명시**한다.

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, seen from the side, one single tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, kneeling on both knees in prayer with his little hands clasped together before his chest, and a rosary hanging down from between his clasped fingers with a clearly visible cross pendant dangling at the end of the strand of beads, head bowed and mouth a calm closed line, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

### 네거티브 프롬프트

```text
no cross, missing cross, plain bead string, necklace without pendant, hidden rosary, two people, second person, duplicate figure, realistic proportions, tall body, adult proportions, detailed face, photorealistic, 3d render, busy background, crowd, gore, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, bad anatomy, deformed hands, extra fingers, extra limbs
```

## 12. masochism — 마조히즘

### 이미지 생성 프롬프트

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, a tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, kneeling submissively with a thick wide dog collar clearly visible and prominent around his neck and a leash hanging loosely from its ring, both little hands resting on his thighs and his chin tilted up, eyes squeezed shut in delight with a happy grin, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

## 13. blood_fanatic — 광혈도

### 이미지 생성 프롬프트

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, a tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, standing with both stubby arms flung up in worship and his head tilted back, mouth open in delight, and floating directly above his head one single big round sphere of dark red blood with a drop trickling from its underside, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

## 14. alcoholic — 알코홀릭

### 이미지 생성 프롬프트

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, a tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, slumped face down over a desk that is far too big for him, one little hand still holding up a wine glass at a tilt, cheeks flushed pink and a woozy spiral over his head, a few empty bottles beside him, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

## 15. meritocracy — 재능주의

### 이미지 생성 프롬프트

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, a tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, standing facing forward with both stubby arms out to the sides, one small orange fireball hovering above his left hand, one small sword held upright in his right hand, and exactly one single cross floating just above his head, grinning broadly, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

## 16. malice — 악성

### 이미지 생성 프롬프트

```text
chibi super deformed style, cute two heads tall proportions with big round heads and tiny bodies, simple dot eyes and simple small mouths, a tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, seated with his little legs crossed and his chin propped on one hand, his other hand dangling a small stolen trinket by its chain, wearing a wicked grin, and on the ground in front of his feet a second smaller chibi figure kneeling with both arms reached up begging for it back, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

## 17. collector — 수집가

### 이미지 생성 프롬프트

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, a tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, leaning in close and peering through a jeweler's loupe held to one eye while examining a small antique vase held up in his other hand, mouth a small focused line, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

## 18. diligence — 노력가

> ⚠️ **목검이 땅에 박힌 대검으로 바뀌는 문제가 있었다.**
> "작은 목검을 두 손으로 꽉 쥐고 휘두르는 중"임을 명시하고, 네거티브로 대검·박힌 검을 차단한다.

### 이미지 생성 프롬프트

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, seen in side view profile, a tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, gripping a short wooden practice sword firmly in both little hands and swinging it down through the air in front of himself, the sword small and clearly held in his grip, motion lines showing the downward swing, a sweat drop flying off his head and his mouth open with effort, nothing else in the image, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

### 네거티브 프롬프트

```text
giant sword, greatsword, oversized weapon, sword stuck in the ground, sword planted in the ground, sword standing upright on its own, swing set, rope, standing still, not swinging, target, training dummy, realistic proportions, tall body, adult proportions, detailed face, photorealistic, 3d render, busy background, crowd, two people, gore, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, bad anatomy, deformed hands, extra fingers, extra limbs
```

## 19. kindness — 상냥함

### 이미지 생성 프롬프트

> ⚠️ "양팔 벌린 포옹"이 **두 사람이 껴안는 그림**으로 나왔다. 개별 네거티브로 한 명만 나오게 막는다.

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, one single tiny chibi young man entirely alone in the image with nobody to hug, with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, standing with both stubby arms opened wide toward the viewer inviting a hug and leaning slightly forward, big gentle round eyes and a soft warm smile, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```

### 네거티브 프롬프트

```text
two people, second person, another figure, duplicate figure, twins, clone, mirrored copy, pair, hugging someone, embracing another person, realistic proportions, tall body, adult proportions, long legs, detailed face, photorealistic, 3d render, busy background, detailed scenery, crowd, gore, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, bad anatomy, deformed hands, extra fingers, extra limbs, malformed face
```

## 20. sincerity — 진심을 준다면

### 이미지 생성 프롬프트

```text
chibi super deformed style, cute two heads tall proportions with a big round head and a tiny body, simple dot eyes and a simple small mouth, a tiny chibi young man with jet black tousled hair and crimson red eyes wearing a black military style coat with silver embroidery and a large fur trimmed collar, holding up one small glowing pink heart on both of his open palms and offering it forward, head slightly bowed toward it with a shy earnest closed smile, thick clean outlines, flat cel shading, simple uncluttered background, square composition, no text, no watermark
```
