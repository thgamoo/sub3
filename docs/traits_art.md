# 남주 성향 카드 아트

성향 카드 20종의 이미지 생성 프롬프트. 내용·조건은 [traits.md](traits.md) 의 **카드 상세** 기준.

## 개정 이력

- **v1** — 구 목록(경건주의자·결벽주의자 등) 기준. 폐기.
- **v2** — 신 목록 20종, **얼굴이 식별되지 않는 익명 인물** 방식.
  → **표현력이 안 살아서 폐기.** 성격은 얼굴이 실어주는데 익명성 제약이 그걸 막아버려,
  자세와 소품만으로 20종을 구분하려니 전부 밋밋해졌다.
- **v3 (현행)** — **아이콘 방식.** 인물을 아예 빼면 익명성 문제가 사라지고,
  상징물 하나로 성향을 굵게 전달할 수 있다.

## 공통 규칙

### 아이콘 방식 — 능력 카드와 같은 언어

[abilities_art.md](abilities_art.md) 의 v2 방식을 그대로 쓴다. 덱 안에서 아이콘 언어가 통일된다.

- **플랫 셀셰이딩**, 굵은 외곽선, 광택·입체 렌더 금지
- **완전 균일한 흰 배경** → BiRefNet 으로 배경 제거해 **투명 PNG** 로 저장
- 오브젝트 하나만 정중앙, 프레임에 닿지 않게 여백 확보

> 능력 카드와 **상징물이 겹치지 않게** 한다.
> 능력 카드가 이미 검·부채·마법서·핏방울·십자가·독약병·어둠 구체를 쓰고 있으므로,
> 무투파는 검 대신 **건틀렛**, 책벌레는 마법서 대신 **안경 얹힌 책더미**,
> 독실은 십자가 대신 **묵주**, 광혈도는 핏방울 대신 **피가 담긴 성배**를 쓴다.

### 카드 규격

**1024 × 1024 (1:1)** — 프레임·텍스트 레이어는 나중에 위에 얹는다.

### 생성 설정

| 항목 | 값 |
|---|---|
| 모델 | `anima-base-v1.0` |
| LoRA | `AnimaMythP0rtr4itStyleV1`, strength 1.0 |
| 품질 태그 | base (`masterpiece, best quality, score_7, safe, ` 접두) |
| 샘플링 | 30 steps / CFG 4.0 / `er_sde` / `simple` |
| 배경 제거 | `--remove-bg` (BiRefNet) |
| 후보 | 성향당 **2장** |

### 공통 절

```text
flat cel-shaded anime illustration, cute simplified icon style, clean bold outlines, flat colors with only minimal soft shading, no gloss, no specular highlights, no realistic reflections, no 3D rendering, one single object at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette
```

### 공통 네거티브

```text
3d render, cgi, photorealistic, glossy, high gloss, specular highlight, shiny reflection, gradient background, radial glow, glowing background, vignette, dark background, colored background, drop shadow, cast shadow, cropped, cut off, touching the edge, person, people, human figure, face, portrait, character, multiple objects, several items, cluttered composition, frame, border, gore, worst quality, low quality, score_1, score_2, score_3, text, watermark, signature, logo, lowres, blurry, jpeg artifacts, chromatic aberration
```

### 공통 네거티브 v2 (실루엣판)

```text
detailed face, eyes, nose, eyebrows, facial features, hair detail, clothing detail, gradient fill, shading, texture, multiple colors, outline only, hollow figure, 3d render, photorealistic, background scenery, multiple figures, two people, cropped, cut off, touching the edge, frame, border, text, watermark, signature, logo, worst quality, low quality, lowres, blurry, jpeg artifacts, bad anatomy, deformed hands, extra fingers, extra limbs
```

---

## 1. aristocracy — 귀족주의

> "응당 귀족이라면 만 영지민을 보살펴야하는 법"

### 이미지 생성 프롬프트

```text
a single cute stylized heraldic crest shield icon, flat cel-shaded anime illustration, cute simplified icon style, one rounded kite shield with a simple engraved lion crest and a gold border, deep navy and gold flat colors, a small ribbon banner across its base, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single object at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, standing tall with one hand pressed flat over his chest and his chin lifted, a long mantle hanging from his shoulders, mouth a straight dignified line, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 2. sadism — 사디즘

> "착하지? 가만있어봐?"

### 이미지 생성 프롬프트

```text
a single cute stylized riding crop icon, flat cel-shaded anime illustration, cute simplified icon style, one slender leather riding crop standing upright with a small flat leather loop at the tip and a wrapped grip, dark crimson and black flat colors with a thin gold ferrule, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single object at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, standing with one hand on his hip and the other lowered holding a slender riding crop, weight shifted onto one leg, mouth curled up on one side in a cruel smirk, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 3. tsundere — 츤데레

> "착각하지 마. 그냥 지나가는 길이었을 뿐이니까."

### 이미지 생성 프롬프트

```text
a single cute stylized icon of a small warm flame frozen inside a block of ice, flat cel-shaded anime illustration, cute simplified icon style, one angular pale blue ice cube with a tiny orange flame clearly visible burning at its core, pale cyan and warm orange flat colors in contrast, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single object at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, standing with arms crossed tightly over his chest and his head turned away to the left, shoulders slightly raised, mouth pushed into a small sulky pout, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 4. obsession — 집착

> "어디 갔었지. 내 눈 앞에서 절대 사라지지 말도록."

### 이미지 생성 프롬프트

```text
a single cute stylized birdcage icon, flat cel-shaded anime illustration, cute simplified icon style, one small ornate domed birdcage hanging from a ring, its little door shut and fastened with a tiny padlock, a single stray feather resting on its floor, deep violet and tarnished gold flat colors, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single object at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, leaning forward with shoulders hunched and both hands closed into grasping fists in front of his chest, head pushed toward the viewer, mouth a hard flat line, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 5. chivalry — 기사도

> "레이디를 위해서라면 기꺼이 칼이 되드리죠."

### 이미지 생성 프롬프트

```text
a single cute stylized icon of a rose laid across a sheathed sword, flat cel-shaded anime illustration, cute simplified icon style, one sheathed sword lying horizontally with a single red rose resting diagonally across its scabbard, silver and deep blue scabbard with a red rose and green leaves, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single arrangement at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, kneeling on one knee with one hand laid over his heart and his head bowed, a short cape falling behind him, mouth a closed gentle smile, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 6. chosen — 선민주의

> "마력이 있다는 건 선택받았다는 뜻이지."

### 이미지 생성 프롬프트

```text
a single cute stylized icon of a star floating above a magic circle, flat cel-shaded anime illustration, cute simplified icon style, one flat violet arcane circle seen at a slight angle with a single bright eight pointed star hovering just above its center, violet and pale gold flat colors, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single arrangement at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, standing with both arms spread outward and slightly raised, chin high and chest out, mouth slightly open as if proclaiming, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 7. materialism — 물질만능주의

> "세상 모든 건 값을 메길 수 있다. 사람도 마찬가지고."

### 이미지 생성 프롬프트

```text
a single cute stylized balance scale icon, flat cel-shaded anime illustration, cute simplified icon style, one small brass balance scale with two shallow pans, a stack of gold coins piled on one pan tipping it down, warm gold and dark brass flat colors, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single object at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, standing with one hand extended forward palm up as if weighing something invisible and the other tucked behind his back, mouth a small satisfied curve, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 8. looksism — 외모지상주의

> "보기에 좋은 떡이 먹기도 좋은 법인데."

### 이미지 생성 프롬프트

```text
a single cute stylized hand mirror icon, flat cel-shaded anime illustration, cute simplified icon style, one ornate oval hand mirror standing upright with a scrolled gold handle, its glass a plain flat pale rose surface with no reflection drawn in it, rose pink and gold flat colors, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single object at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, seen in profile with one hand sweeping his hair back and one hip cocked, mouth a pleased self admiring smile, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 9. martial — 무투파

> "말은 됐고. 검을 들어."

### 이미지 생성 프롬프트

```text
a single cute stylized armored gauntlet icon, flat cel-shaded anime illustration, cute simplified icon style, one steel plate gauntlet clenched into a fist, seen from the side, chunky friendly plating with a few rivets, steel blue and dark leather flat colors, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single object at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, standing with legs apart leaning forward, one fist smacked into his other open palm, mouth wide open shouting, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 10. bookworm — 책벌레

> "빙계마법은사실수계마법보다는시간계마법에더높은연관성이있다는가설에대해서너도동의하지?"

### 이미지 생성 프롬프트

```text
a single cute stylized icon of round glasses resting on a stack of books, flat cel-shaded anime illustration, cute simplified icon style, three or four thick books stacked slightly askew with a pair of round wire rimmed glasses folded on top, muted teal and warm cream flat colors with cream page edges, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single arrangement at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, leaning forward with one index finger raised in explanation and a book held in his other hand, mouth open mid sentence still talking, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 11. devout — 독실

> "(두 손을 모으며) 빛의 은총이 있길."

### 이미지 생성 프롬프트

```text
a single cute stylized rosary icon, flat cel-shaded anime illustration, cute simplified icon style, one looped strand of round prayer beads hanging in a simple teardrop loop with a small plain pendant at the bottom, warm ivory beads with pale gold links, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single object at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, standing with both hands clasped together before his chest and his head bowed, mouth closed and serene, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 12. masochism — 마조히즘

> "날 더 옭아매줘. 너의 것으로 만들어줘."

### 이미지 생성 프롬프트

```text
a single cute stylized icon of a silk ribbon tied in a binding knot, flat cel-shaded anime illustration, cute simplified icon style, one long dark violet silk ribbon wound around itself into a tight decorative knot with two loose tails trailing down, deep violet and plum flat colors, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single object at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, standing with both wrists drawn together behind his back and his head tilted far back, mouth slightly parted, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 13. blood_fanatic — 광혈도

> "오. 뱀파이어 퀸이시여. 부디 응답해주소서."

### 이미지 생성 프롬프트

```text
a single cute stylized chalice icon, flat cel-shaded anime illustration, cute simplified icon style, one ornate stemmed goblet filled to the brim with dark red blood, a single drop running down its outer side, tarnished silver cup with deep crimson contents, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single object at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, kneeling with both arms flung up and outward and his head thrown back, mouth wide open in rapture, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 14. alcoholic — 알코홀릭

> "...히끅! 그 병도 줘봐..."

### 이미지 생성 프롬프트

```text
a single cute stylized icon of a tipped wine bottle and glass, flat cel-shaded anime illustration, cute simplified icon style, one dark green wine bottle lying on its side with a small amount of amber liquid spilling toward a short tumbler beside it, muted green and warm amber flat colors, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single arrangement at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, staggering off balance with his body tilted and one hand raising a bottle overhead, mouth slack and lopsided, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 15. meritocracy — 재능주의

> "허. 천재로군."

### 이미지 생성 프롬프트

```text
a single cute stylized laurel wreath icon, flat cel-shaded anime illustration, cute simplified icon style, one open laurel wreath of two curved leafy branches meeting at the bottom with a small ribbon tie, warm gold leaves with a deeper gold outline, the center left empty, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single object at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, standing with arms folded and head tilted in a small nod of approval, mouth a small impressed round shape, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 16. malice — 악성

> "악마숭배교가 발호했다고? 이거 흥미롭군."

### 이미지 생성 프롬프트

```text
a single cute stylized horned mask icon, flat cel-shaded anime illustration, cute simplified icon style, one smooth black masquerade mask with two short curved horns rising from its upper corners and empty eye holes, glossless matte black with a sickly green inner rim, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single object at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, standing with one hand covering his mouth to stifle a laugh and his shoulders shaking, mouth grinning behind the hand, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 17. collector — 수집가

> "오. 그 반지 좀 볼 수 있겠나?"

### 이미지 생성 프롬프트

```text
a single cute stylized icon of a jeweler's loupe beside a gemstone ring, flat cel-shaded anime illustration, cute simplified icon style, one small brass jeweler's loupe standing open next to a single gold ring set with a blue gem, warm brass and sapphire blue flat colors, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single arrangement at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, leaning forward eagerly with one hand reaching out and fingers spread, mouth a small round shape of interest, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 18. diligence — 노력가

> "재능을 각성하는 건 아무나 하는 일은 아니지."

### 이미지 생성 프롬프트

```text
a single cute stylized hourglass icon, flat cel-shaded anime illustration, cute simplified icon style, one sturdy wooden framed hourglass standing upright with most of the sand already fallen through, warm sand and dark walnut frame with brass caps, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single object at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, bent over with both hands braced on his knees catching his breath, head hanging down, mouth open panting, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 19. kindness — 상냥함

> "어디 다친데는 없어?"

### 이미지 생성 프롬프트

```text
a single cute stylized icon of a folded handkerchief with a small wildflower on it, flat cel-shaded anime illustration, cute simplified icon style, one neatly folded clean white handkerchief with a delicate lace edge, a single small pale blue wildflower resting on top of it, soft cream and pale blue flat colors, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single arrangement at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```


### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, crouched down on one knee with one hand extended open toward the viewer and his head tilted kindly, mouth a soft small smile, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
## 20. sincerity — 진심을 준다면

> "내가 모든지 해줄게. 잔느? 그게 누구더라?"

### 이미지 생성 프롬프트

```text
a single cute stylized icon of a red heart offered on two open palms, flat cel-shaded anime illustration, cute simplified icon style, two cupped open hands seen from the front holding up one small glossless red heart, no face and no body beyond the wrists, warm rose and cream flat colors, clean bold outlines with only minimal soft shading, no gloss, no 3D rendering, one single arrangement at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no text, no watermark
```

### 이미지 생성 프롬프트 v2

```text
a single flat monochrome silhouette of a young man, filled entirely in one solid deep navy color with no shading and no interior detail, no eyes and no nose, the only facial feature is a small simple mouth in white negative space, standing with both hands offered forward from his chest palms up and his head slightly bowed, mouth a closed earnest smile, crisp clean silhouette edge, one single figure at the exact center with generous empty margin on every side, nothing touching the image edges, centered on a plain pure white background, completely flat uniform white with no gradient, no glow, no shadow, no vignette, no text, no watermark
```
