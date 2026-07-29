# 보드게임 지도 생성 프롬프트

보드게임판이 될 판 로만티카 대륙 지도의 이미지 생성 프롬프트. 지역 구성은 [overall.md](overall.md)의 "대륙과 지역" 참고.

## 지도에 반드시 들어가야 하는 요소

- **중부(E)**: 아카데미 도시 + 중앙 마탑 (신성한 성역 — 은은하게 빛나는 연출). 대륙 중앙의 기준점.
- **북부(D)**: 프로스트하임 공국 — 설산, 설원, 요새 성벽, 성.
- **동부(A)**: 율리우스 제국 — 숲과 황금빛 제국 수도, 로마풍 궁전. 오른쪽의 동부 바다(F)와만 해상 경로로 이어짐.
- **남부(C)**: 루멘교 왕국연합 — 교회/왕국 도시, 백색과 금색 대성당, 곡창지대 또는 평야.
- **서부(B)**: 무법지대 — 사막, 척박한 황야, 투기장.
- **동부 바다(F)**: 동부(A)의 오른쪽 해역. 대륙 밖으로 나가는 중간 노드이며, A와 G 사이에 위치.
- **극동의 섬(G)**: 동부 바다(F) 너머 더 동쪽의 외딴 섬. 한국적인 전통 색감과 건축/지형 모티프를 은은하게 반영.
- **북동부 자유도시는 이번 지도 일러스트에서 제외한다.** 이동 가능한 지역이 아니므로 별도 검은 도시, 불길한 성, 추가 노드로 그리지 않는다.
- 지역 노드는 총 7개(A-G)에 해당하지만, 이미지에는 알파벳이나 지역명을 넣지 않는다. 노드와 경로만 그린다.
- 이동 그래프는 `overall.md`의 인접 관계를 따른다. 대륙 내부의 동·서·남·북·중 5개 지역은 완전그래프처럼 서로 이어지고, 동부에서 동부 바다로, 동부 바다에서 극동의 섬으로 이어진다.
- 지역 노드 위치에는 각 지역의 대표 이미지를 배치한다: 북부=성/설산, 동부=제국/숲, 남부=교회·왕국/평야, 서부=사막·투기장, 중부=아카데미·마탑, 동부 바다=해역/선박, 극동=한국풍 섬.

## 보드게임 노드 구조

텍스트 라벨 없이 아래 구조가 읽혀야 한다.

```text
        북부(D)
       /  |  \
서부(B)--중부(E)--동부(A)--동부 바다(F)--극동의 섬(G)
       \  |  /
        남부(C)
```

경로 제약:

- 대륙 내부 5개 지역(A 동부, B 서부, C 남부, D 북부, E 중부)은 서로 모두 인접한다.
- 이미지상으로는 복잡해 보이지 않도록 다이아몬드 + 대각선 구조로 정리한다.
- 동부 바다(F)는 동부(A)와 극동의 섬(G)에만 연결된다.
- 극동의 섬(G)은 동부 바다(F)에만 연결된다.
- 북동부 자유도시 또는 다른 추가 지역 노드/경로를 만들지 않는다.

## 이미지 생성 프롬프트

```text
A top-down fantasy board game map of Pan Romantica, a romance-fantasy webnovel continent, hand-painted illustrated cartography style on aged parchment, clean board game region nodes and route lines.

The playable map has exactly seven unlabeled circular region nodes, with no letters and no text labels.

Node layout:
North node: Frostheim northern duchy, snowy mountains, fortress castle, icy walls.
West node: lawless western badlands, desert, barren wasteland, gladiator arena.
Center node: central academy city with a tall mage tower, softly glowing sacred sanctuary.
East node: Julius Empire, forested land, Roman-inspired golden imperial capital with marble palaces.
South node: Lumen church kingdoms, white-and-gold cathedral cities, fertile plains and farmland.
Eastern sea node: ocean region immediately east of the eastern empire, blue sea with a pirate ship.
Far eastern island node: isolated island farther east beyond the sea, misty but elegant, with subtle traditional Korean color palette and architecture motifs.

Route graph:
The five continental nodes East, West, South, North, and Center are all connected to each other as a complete graph, shown cleanly as a diamond with diagonals around the central academy node.
The eastern sea node connects only to the eastern empire node and the far eastern island node.
The far eastern island node connects only to the eastern sea node.
Use elegant printed board-game route lines between the nodes. Do not create many small movement spaces or bead paths.

Important exclusions:
Do not draw the northeast free city. Do not draw a black ominous city beside the northern snowy region. Do not add any extra playable region, extra node, or extra route.
No text, no alphabet letters, no region names, no labels, no watermark.

Visual style: ornate map frame, decorative compass rose, soft warm storybook colors, high detail, premium romance-fantasy board game map art, readable node graph, clear regional environmental identity.
```

> 참고: 텍스트 라벨은 이미지에 넣지 않고(no text, no labels), 한글 지역명은 후편집으로 얹는 것을 전제로 한 프롬프트다.
