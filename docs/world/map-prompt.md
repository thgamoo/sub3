# 보드게임 지도 생성 프롬프트

판 로만티카의 보드게임판 지도 생성 기준. 이미지에는 알파벳과 지역명을 넣지 않지만, 프롬프트와 검수에서는 A–G 식별자를 사용한다.

## 노드와 지역

- **A 동부:** 율리우스 제국. 숲과 황금빛 수도, 넓은 포룸, 삼각 박공의 기둥 신전, 개선문, 콜로네이드, 수로교, 원형극장, 직선 대로 등 명백한 세속 고대 로마식 건축물. 붉은 테라코타 지붕은 허용하지만 십자가·교회 첨탑·대성당형 실루엣은 사용하지 않는다.
- **B 서부:** 무법지대. 사막, 척박한 황야, 투기장.
- **C 남부:** 루멘교 왕국연합. 오래된 바티칸풍 교회도시, 장축형 대성당, 십자형 신랑, 종탑, 수도원, 회랑과 순례 광장, 비옥한 평야와 곡창지대. 모든 돔 꼭대기에는 십자가를 달고, 모든 돔 지붕은 오래되어 녹청이 슨 청동색으로 표현한다. 밝은 금색 돔은 사용하지 않는다.
- **D 북부:** 프로스트하임 공국. 설산, 설원, 요새 성벽과 성.
- **E 중앙:** 아카데미 도시와 높은 마탑. 은은하게 빛나는 신성한 성역. 반드시 대륙 중앙에 둔다.
- **F 바다:** A의 오른쪽 바다. 원형 노드는 바다 위의 배 한 척을 중심으로 둔다.
- **G 극동:** F보다 더 동쪽에 떨어진 외딴 섬. 오직 이 섬만 은은한 한국 전통 색감·기와지붕·누각·산세 모티프를 사용한다.

한국식 요소는 G에만 사용한다. A 동부 제국과 다른 대륙 지역에는 한국식 지붕이나 궁궐을 사용하지 않는다.

## 지형과 랜드마크의 가독성

- 하나의 자연스러운 연속 지도이되, 보드판을 일반적인 거리에서 보았을 때 각 지역이 즉시 구분되어야 한다.
- 북부는 눈의 흰색·청회색, 서부는 따뜻한 황토색·적갈색, 중앙은 청색 지붕·보랏빛 마탑, 동부는 짙은 숲과 따뜻한 대리석, 남부는 재배지의 선명한 녹색과 녹청색 청동 돔, 바다는 깨끗한 청색, 극동은 안개 낀 암석섬으로 구별한다.
- 경계선을 인위적으로 긋지 않고 산맥·강·숲·농경지·해안 같은 자연 지형 변화로 구분한다.
- 주요 랜드마크 주변의 잔 디테일을 줄이고 국부 대비와 여백을 확보해 실루엣이 묻히지 않게 한다.

## 정확한 노드 배치

```text
                 D 북부
                /|\
               / | \
       B 서부 —  E 중앙  — A 동부 — F 바다 — G 극동 섬
               \ | /       /
                \|/       /
                 C 남부
```

이미지에는 위 문자와 지역명을 표시하지 않는다. 위치와 지역 그림으로만 구분한다.

## 보드 형태와 노드 표현

- 완성 보드는 **56cm × 56cm, 1:1 정사각형**이다.
- 지역 풍경은 원형 확대 그림이나 메달 안에 넣지 않고, 하나의 연속된 자연 지도에 직접 그린다.
- 7개 노드는 미플 하나를 올려놓을 수 있는 **작은 검은색 원형 자리**로 표시한다. 얇은 고금색 테두리는 허용한다.
- 검은 원형 자리 바깥의 지역 일러스트는 자연스럽게 이어져야 한다.
- 오른쪽 변 중점에서 보드 중심까지 수평 절개선을 둔다. 사분면은 중심 둘레에서 앞–뒤–앞으로 접혀 네 겹이 된다.
- 생성 이미지에는 절개선과 접힘선을 인쇄하지 않는다. 인쇄용 다이라인은 별도 후편집한다.

## 정확한 간선 목록

아래 10개 선만 그린다.

```text
A-E
A-C
A-D
A-F
F-G
B-E
B-C
B-D
C-E
D-E
```

검수용 인접 목록:

- A는 E, C, D, F에 연결.
- B는 E, C, D에 연결.
- C는 A, B, E에 연결.
- D는 A, B, E에 연결.
- E는 A, B, C, D에 연결.
- F는 A, G에만 연결.
- G는 F에만 연결.

`A-B`, `C-D`, `E-F`, `A-G`는 연결하지 않는다. 위 목록에 없는 선은 절대 추가하지 않는다. 별 모양, 오각별, 완전그래프, 방사형 허브, 작은 칸이 반복되는 이동 트랙으로 그리지 않는다.

## 제외 요소

- 북동부 자유도시
- 북부 옆의 검은 도시나 불길한 성
- 8번째 지역 또는 추가 원형 노드
- 정확한 간선 목록에 없는 추가 경로
- 알파벳, 지역명, 숫자, 범례, 텍스트, 워터마크

## 이미지 생성 프롬프트

```text
Use case: stylized-concept
Asset type: standalone illustrated board-game map

Create a perfectly square 1:1 top-down fantasy board-game map of Pan Romantica for a finished 56 cm × 56 cm folding board. Use a premium hand-painted romance-fantasy cartography style on aged parchment.

Paint all regions directly into one continuous natural landscape. Do not use circular zoom-in pictures, enlarged medallions, inset illustrations, or portraits. Overlay exactly seven small, clearly countable, solid near-black circular meeple-placement spaces with thin muted antique-gold rims. Each black circle is only a practical space for one wooden meeple and is much smaller than the surrounding regional artwork. Do not print letters, names, numbers, or any text.

Node positions and environments:
- A, east continental node: Julius Empire. A secular forested imperial capital with unmistakable ancient Roman architecture: a broad open forum, long rectangular basilicas, marble columned temples with triangular pediments, triumphal arches, colonnades, aqueducts, amphitheaters, statues, and straight imperial avenues. Use warm cream travertine and restrained red terracotta roofs. No crosses, Christian spires, cathedral silhouette, dominant ecclesiastical dome, or Korean architecture.
- B, west continental node: lawless desert badlands with barren rock, sand, and a gladiator arena.
- C, south continental node: Lumen church kingdoms as an old Vatican-inspired ecclesiastical city surrounded by fertile plains, farms, and grain fields. Show a dominant cathedral with a long cruciform nave, ornate Christian façade, tall bell towers, cloisters, monasteries, chapels, and a formal colonnaded pilgrimage square. Every dome must have a clear cross finial. Every dome roof must be aged oxidized bronze with muted green-blue verdigris patina, never bright gold.
- D, north continental node: Frostheim snowy mountains, icy fortress walls, and a northern castle.
- E, center continental node: place this node at the geographic center of the continent, visibly over a grand academy city with a tall central mage tower and a softly glowing sacred sanctuary. The academy and mage tower must be unmistakable.
- F, sea node: place this node in the blue ocean immediately east of A, centered on one clearly visible sailing ship. The ship represents the sea region.
- G, far eastern node: place this node on a separate misty island farther east than F. Only this island uses subtle traditional Korean colors, tiled-roof pavilions, elegant mountain silhouettes, and Korean-inspired terrain motifs.

Draw only these ten direct route lines:
A-E, A-C, A-D, A-F, F-G, B-E, B-C, B-D, C-E, D-E.

Adjacency check:
A connects to E, C, D, F.
B connects to E, C, D.
C connects to A, B, E.
D connects to A, B, E.
E connects to A, B, C, D.
F connects only to A and G.
G connects only to F.

Do not connect A-B. Do not connect C-D. Do not connect E-F. Do not connect A-G. Do not add any line not explicitly listed. The continental paths must not form a five-pointed star, pentagram, radial star, or complete graph. Use simple elegant printed route lines with minimal crossings and no bead path.

Composition: true square board map with D above, B left, E at the center, C below, A right, then F over the ocean to the right of A, then G on the far eastern island. Keep all seven small black meeple spaces unobstructed and easy to count. The regional cities, academy, mage tower, Roman capital, ship, and Korean-inspired island remain natural map-scale scenery outside the black circles.

Regional readability: increase local contrast and simplify background clutter around each major landmark. Use natural geographic transitions rather than artificial borders. Make the north snowy white and blue-gray, west warm ochre and red-brown, center academy roofs blue with a violet tower glow, east forest deep green with warm marble plazas, south cultivated green with verdigris bronze church domes, sea clean blue, and far-eastern island misty and rocky.

Folding construction: the physical 56 cm square board will have a horizontal slit from the midpoint of the right edge to the exact center. Its four quadrants spiral-fold into four stacked layers using forward, backward, then forward folds. Do not visibly draw cut lines, fold guides, quadrant labels, or manufacturing marks in the artwork.

Style: ornate parchment frame, decorative compass rose away from the nodes, warm storybook colors, premium Korean romance-fantasy board-game illustration, clear regional identity, crisp readable routes.

Exclude the northeast free city, any ominous black city near the north, extra islands, extra playable regions, extra nodes, extra routes, labels, alphabet letters, numbers, text, legends, watermarks, compass roses that resemble nodes, enlarged circular regional art, and medallion-style node illustrations.
```

> 한글 지역명은 후편집으로 추가한다. 생성 이미지 자체에는 텍스트를 넣지 않는다.
