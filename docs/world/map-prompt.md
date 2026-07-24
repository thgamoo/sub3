# 보드게임 지도 생성 프롬프트

보드게임판이 될 판 로만티카 대륙 지도의 이미지 생성 프롬프트. 지역 구성은 [overall.md](overall.md)의 "대륙과 지역" 참고.

## 지도에 반드시 들어가야 하는 요소

- **중부**: 아카데미 도시 + 중앙 마탑 (불살령의 성역 — 은은하게 빛나는 연출)
- **북부**: 프로스트하임 공국 — 설원, 요새 성벽, 성벽 너머의 야만인 땅
- **북동부**: 공국과 제국 국경 사이의 자유도시 (화려하지만 어딘가 불길한 분위기)
- **동부**: 율리우스 제국의 수도 (로마풍 황금 궁전) + 동부 바다와 해적선
- **극동**: 동부 바다 건너의 안개에 싸인 작은 땅
- **남부**: 루멘교 대성당과 왕국연합의 도시들 (백색과 금색)
- **서부**: 척박한 무법지대 + 투기장
- 지역 간 이동이 보드게임 칸처럼 보이도록, 지역 경계와 인접 지역을 잇는 경로 표시

## 이미지 생성 프롬프트

```text
A top-down fantasy board game map of a single continent, romance fantasy webnovel world, hand-painted illustrated cartography style on aged parchment, clean region borders designed for a board game.
Center: a grand white academy city with a tall central mage tower, softly glowing as a sacred sanctuary where no life can be taken.
North: a snowy grand duchy of a noble house with a great fortress wall, icy mountains, and dark barbarian wastes beyond the wall.
Northeast: a glamorous walled free city standing on the border between the northern duchy and the eastern empire, beautiful but subtly ominous.
East: a Roman-inspired golden imperial capital with marble palaces; along its coast an eastern sea with a pirate galleon sailing.
Far east: a small mysterious island-land across the eastern sea, half hidden in mist.
South: white-and-gold cathedral cities of a holy church and its allied kingdoms.
West: barren lawless badlands with a large gladiator arena and scattered battle camps.
Distinct region areas with clear borders and travel routes connecting adjacent regions like board game spaces, decorative compass rose, ornate map frame, soft warm storybook colors, high detail, no text, no labels, no watermark
```

> 참고: 텍스트 라벨은 이미지에 넣지 않고(no text, no labels), 한글 지역명은 후편집으로 얹는 것을 전제로 한 프롬프트다.
