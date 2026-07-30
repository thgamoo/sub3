# 남주 성향 카드 아트

성향 카드 20종의 이미지 생성 프롬프트. 내용·조건은 [traits.md](traits.md) 의 **카드 상세** 기준.

> 이전 시도(아이콘판 · 익명 인물판 · 남색 실루엣판)는 모두 폐기하고,
> **확정 사항만 반영한 단일 프롬프트**로 정리했다. 버전 번호는 두지 않는다.

## 확정 사항

1. **흑백 실루엣** — 인물과 **들고 있는 소품까지 전부** 순수 검정 단색. 흰 배경.
   남색은 쓰지 않는다 (음영이 섞여 보였다).
2. **포인트색만 예외** — 아래 5종에만 색이 들어간다. 그 외에는 검정과 흰색뿐.
3. **표정은 흰 여백** — 눈·입을 검정 실루엣 위에 흰색 도형으로 얹는다.
4. **음영 전면 금지** — 그림자·명암·옷주름·근육선·소품 반사 전부 없음. 종이를 오려붙인 느낌.

| 포인트색이 있는 카드 | 색 |
|---|---|
| 6. 선민주의 | 파이어볼 **주황** |
| 7. 물질만능주의 | 금화 **금색** |
| 13. 광혈도 | 피 구체 **빨강** |
| 15. 재능주의 | 파이어볼 **주황** |
| 20. 진심을 준다면 | 하트 **분홍** |

> ⚠️ **소품을 빼먹으면 거기에 음영이 진다.** alcoholic 의 와인잔이 그랬다.
> "인물"이 아니라 **"인물과 모든 소품"** 을 단색으로 지정해야 한다.

## 카드 규격 · 생성 설정

**1024 × 1024 (1:1)** — 프레임·텍스트는 나중에 위에 얹는다.

| 항목 | 값 |
|---|---|
| 모델 | `anima-base-v1.0` |
| LoRA | `AnimaMythP0rtr4itStyleV1`, strength 1.0 |
| 품질 태그 | base (`masterpiece, best quality, score_7, safe, ` 접두) |
| 샘플링 | 30 steps / CFG 4.0 / `er_sde` / `simple` |
| 배경 제거 | `--remove-bg` (BiRefNet) → 투명 PNG |
| 후처리 | `clean_alpha.py` 로 알파 노이즈 제거 |

```powershell
.\ComfyUI\venv\Scripts\python.exe .\scripts\gen_cards.py `
  --src "sub3\docs\traits_art.md" --outdir sub3-traits-sil --subdir traits_sil `
  --remove-bg --seeds 1001 2002
```

### 공통 네거티브

> ⚠️ 이 헤딩은 **반드시 `###`(h3)** 여야 한다. `gen_cards.py` 파서가 h3 기준으로 공통 네거티브를 찾는다.
> h2 로 두면 파싱되지 않아 네거티브가 비어버린다.

```text
shading, shadow, cast shadow, gradient, gradient fill, tonal variation, two tone, cel shading, highlights, reflection, glossy, glass transparency, cloth folds, fabric wrinkles, fabric texture, muscle definition, body contour lines, interior lines, outline only, hollow figure, navy, blue tint, grey, skin tone, skin color, flesh color, colored face, full color character, colored eyes, iris, pupil, eyelashes, hair color, lips, extra colors, colored background, 3d render, photorealistic, background scenery, cropped, cut off, touching the edge, frame, border, text, watermark, signature, logo, worst quality, low quality, lowres, blurry, jpeg artifacts, bad anatomy, deformed hands, extra fingers, extra limbs
```

---

## 1. aristocracy — 귀족주의

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, the entire figure and every object he holds filled with one single solid pure black, absolutely no shading and no interior lines anywhere, it reads as one flat black paper cutout, the only mark is one small white firm straight line for a commanding mouth, a young nobleman seen from a three quarter diagonal angle standing like a dictator issuing an order, one arm thrust straight out forward and upward with the hand open and the palm flat and all fingers extended, chin lifted, a mantle hanging in one unbroken flat shape, the only colors in the entire image are black and white, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

## 2. sadism — 사디즘

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, the entire figure and every object he holds including the whip filled with one single solid pure black, absolutely no shading and no interior lines anywhere, it reads as one flat black paper cutout, the only mark is one wide white grin, a young nobleman wearing a masquerade eye mask that covers only the area around his eyes and leaves the rest of his face bare, one hand lowered holding a long slender whip that coils loosely on the ground, his other hand on his hip, the only colors in the entire image are black and white, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

## 3. tsundere — 츤데레

### 이미지 생성 프롬프트

> ⚠️ **한 명만** 나와야 한다. "선물을 내민다"고만 쓰면 받는 사람이 생겨 두 사람이 주고받는 그림이 된다.

```text
a monochrome black and white silhouette illustration, the entire figure and the gift box filled with one single solid pure black, absolutely no shading and no interior lines anywhere, it reads as one flat black paper cutout, the only mark is one small white wavering embarrassed mouth, one single young nobleman entirely alone in the image with nobody else present anywhere, standing awkwardly with his head turned sharply away toward the empty side, one arm held out stiffly to the side holding a small wrapped gift box and refusing to look at it, his other arm rigid at his side, shoulders tense, as if insisting he just happened to pick it up, the only colors in the entire image are black and white, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

### 네거티브 프롬프트

```text
two people, second person, another figure, recipient, receiving hands, someone taking the gift, handing over to someone, couple, facing each other, shading, shadow, gradient, tonal variation, cel shading, cloth folds, fabric wrinkles, fabric texture, interior lines, navy, blue tint, grey, skin tone, colored face, full color character, extra colors, colored background, 3d render, photorealistic, background scenery, cropped, cut off, touching the edge, frame, border, text, watermark, signature, logo, worst quality, low quality, lowres, blurry, jpeg artifacts, bad anatomy, deformed hands, extra fingers, extra limbs
```

## 4. obsession — 집착

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, the cage and the figure inside it filled with one single solid pure black, absolutely no shading and no interior lines anywhere, it reads as one flat black paper cutout, an ornate domed birdcage standing alone with its little door shut, and inside it one small girl figure standing and holding the bars, no hands and no other person anywhere in the image, only the cage and the girl inside it, the only colors in the entire image are black and white, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

## 5. chivalry — 기사도

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, the entire armoured figure and the sword filled with one single solid pure black, absolutely no shading and no interior lines anywhere, it reads as one flat black paper cutout, no eyes, no nose and no mouth, a heavily armoured knight in full plate standing upright, both gauntleted hands gripping the hilt of a long sword held point down in front of him with the blade angled toward the ground, helmet visor closed, the only colors in the entire image are black and white, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

## 6. chosen — 선민주의

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, the entire figure filled with one single solid pure black, absolutely no shading and no interior lines anywhere, it reads as one flat black paper cutout, the only mark is one small white smug curve for a mouth, a young nobleman looking down at the viewer from a slightly high angle with an arrogant tilt of the head, his left hand resting on his hip and his right hand raised holding one burning fireball, the only colors in the entire image are black, white, and the flat orange of the fireball, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

## 7. materialism — 물질만능주의

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, the entire figure filled with one single solid pure black, absolutely no shading and no interior lines anywhere, it reads as one flat black paper cutout, the only mark is one small white open mouth in dazed longing, a young nobleman with his right arm stretched straight up overhead and his head tilted back gazing vacantly upward at one single gold coin floating just above his open palm, his left arm hanging slack, the only colors in the entire image are black, white, and the flat gold of the coin, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

## 8. looksism — 외모지상주의

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, both figures and the bouquet filled with one single solid pure black, absolutely no shading and no interior lines anywhere, they read as flat black paper cutouts, the only mark is one small white pleased smile on the man, two figures, on the right a young nobleman leaning forward offering a bouquet of flowers held out in both hands, on the left a beautiful young woman with long hair standing receiving it, the only colors in the entire image are black and white, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

## 9. martial — 무투파

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, the entire figure filled with one single solid pure black with absolutely no muscle definition, no shading and no interior lines anywhere, it reads as one flat black paper cutout, the only mark is one small white open grin, a young nobleman turned to the side flexing one arm upward in a bicep pose, his other hand on his hip, the muscle shown by outline shape alone, the only colors in the entire image are black and white, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

## 10. bookworm — 책벌레

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, the entire figure and the book filled with one single solid pure black, absolutely no shading and no interior lines anywhere, it reads as one flat black paper cutout, the only mark is one small white flat neutral line for a mouth with no smile, a young nobleman standing absorbed in reading, holding an open book up in both hands close to his face and his head tilted down into it, shoulders squared, the only colors in the entire image are black and white, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

## 11. devout — 독실

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, the entire figure and the rosary filled with one single solid pure black, absolutely no shading and no interior lines anywhere, it reads as one flat black paper cutout, the only mark is one small white calm closed line for a mouth, a young nobleman seen entirely from the side kneeling on both knees in prayer, hands clasped together before his chest with a rosary of round beads hanging down from between his fingers, head bowed, the only colors in the entire image are black and white, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

## 12. masochism — 마조히즘

### 이미지 생성 프롬프트

> 수정: 맞는 이펙트(채찍·충격선)는 빼고 **개목걸이를 주역**으로 부각한다.

```text
a monochrome black and white silhouette illustration, the entire figure and the collar and the leash filled with one single solid pure black, absolutely no shading and no interior lines anywhere, it reads as one flat black paper cutout, the only marks are two small upward curved white arcs for happily squeezed shut eyes and one small white grin below them, one single young nobleman kneeling submissively on both knees with a thick wide dog collar clearly visible and prominent around his neck as the focal point of the image, a leash hanging down loosely from the ring on the collar, both hands resting on his thighs, chin tilted slightly up, delighted and willingly submissive, no whip and no impact lines anywhere, the only colors in the entire image are black and white, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

### 네거티브 프롬프트

```text
whip, lash, impact lines, motion lines, being struck, cowering, hands shielding face, thin necklace, choker jewelry, shading, shadow, gradient, tonal variation, cel shading, cloth folds, fabric wrinkles, fabric texture, interior lines, navy, blue tint, grey, skin tone, colored face, full color character, extra colors, colored background, 3d render, photorealistic, background scenery, cropped, cut off, touching the edge, frame, border, text, watermark, signature, logo, worst quality, low quality, lowres, blurry, jpeg artifacts, bad anatomy, deformed hands, extra fingers, extra limbs
```

## 13. blood_fanatic — 광혈도

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, the entire figure filled with one single solid pure black, absolutely no shading and no interior lines anywhere, it reads as one flat black paper cutout, the only mark is one small white open mouth in rapture, a young nobleman standing with both arms spread wide and raised in worship and his head tilted back looking upward, and directly above his head one single large perfectly round sphere made of blood floating in the air, clearly one big round ball of blood and not scattered droplets, the only colors in the entire image are black, white, and the flat deep red of the blood sphere, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

## 14. alcoholic — 알코홀릭

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, the entire figure and the desk and the wine glass all filled with one single solid pure black, absolutely no shading, no reflection, no glass transparency and no interior lines anywhere, everything reads as one flat black paper cutout, the only mark is one small white slack lopsided mouth, a young nobleman slumped sideways collapsed over a desk with his cheek down on it, one arm sprawled out still holding up a wine glass at a tilt, body limp and woozy, the only colors in the entire image are black and white, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

## 15. meritocracy — 재능주의

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, the entire figure and the sword and the cross filled with one single solid pure black, absolutely no shading and no interior lines anywhere, it reads as one flat black paper cutout, the only mark is one small white open grin, a young nobleman standing facing forward with both arms out to the sides, one burning fireball held in his left hand, one sword held upright in his right hand, and exactly one single cross floating directly above his head, the only colors in the entire image are black, white, and the flat orange of the fireball, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

## 16. malice — 악성

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, both figures and the stolen trinket filled with one single solid pure black, absolutely no shading and no interior lines anywhere, they read as flat black paper cutouts, the only mark is one small white cruel curve for a mouth, a young nobleman seated with his legs crossed and his chin propped on one hand, his other hand dangling a stolen trinket by its chain, and on the ground in front of his feet a second smaller figure kneeling with both arms reached up begging for it back, the only colors in the entire image are black and white, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

## 17. collector — 수집가

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, the entire figure and the loupe and the vase filled with one single solid pure black, absolutely no shading and no interior lines anywhere, it reads as one flat black paper cutout, the only mark is one small white focused line for a mouth, a young nobleman leaning in close and peering through a jeweler's loupe held to one eye, examining a small antique vase held up in his other hand, the only colors in the entire image are black and white, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

## 18. diligence — 노력가

### 이미지 생성 프롬프트

> ⚠️ 허수아비를 두면 **짚 색(황갈색)** 이 들어와 흑백이 깨진다. 대상 없이 허공에 내려치는 자세로만 간다.

```text
a monochrome black and white silhouette illustration, the entire figure and the wooden sword filled with one single solid pure black, absolutely no shading and no interior lines anywhere, everything reads as one flat black paper cutout, no eyes, no nose and no mouth, a strict side view profile of one single young nobleman mid swing bringing a wooden practice sword straight down through empty air in front of him, front foot planted and body fully committed to the downward cut, practicing the same strike over and over, nothing else anywhere in the image, no target and no dummy, the only colors in the entire image are black and white, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

### 네거티브 프롬프트

```text
straw dummy, training dummy, target, training post, straw, hay, tan, brown, beige, wood color, shading, shadow, gradient, tonal variation, cel shading, cloth folds, fabric wrinkles, fabric texture, interior lines, navy, blue tint, grey, skin tone, colored face, full color character, extra colors, colored background, 3d render, photorealistic, background scenery, cropped, cut off, touching the edge, frame, border, text, watermark, signature, logo, worst quality, low quality, lowres, blurry, jpeg artifacts, bad anatomy, deformed hands, extra fingers, extra limbs
```

## 19. kindness — 상냥함

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, the entire figure filled with one single solid pure black, absolutely no shading and no interior lines anywhere, it reads as one flat black paper cutout, the only marks are two small round solid white dots for large gentle eyes and one small white upward curve for a soft smile, a young nobleman standing with both arms opened wide for an embrace, leaning slightly forward in welcome, the only colors in the entire image are black and white, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```

## 20. sincerity — 진심을 준다면

### 이미지 생성 프롬프트

```text
a monochrome black and white silhouette illustration, the hand and forearm filled with one single solid pure black, absolutely no shading and no interior lines anywhere, it reads as one flat black paper cutout, an extreme close up of one single open hand and forearm only, palm up and fingers relaxed, with one small heart resting on the palm, no head, no face and no body anywhere in the image, the only colors in the entire image are black, white, and the flat pink of the heart, on a plain pure white background with generous empty margin on every side and nothing touching the image edges, no text, no watermark
```
