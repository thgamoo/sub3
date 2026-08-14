# sub3 — 삼류 악녀는 싫어!

> 본격! 한국풍 로판 클리셰 전략 보드게임.
> 이 저장소는 게임의 **기획·설정 문서**와 **캐릭터/일러스트 리소스**를 담는다.

이 파일은 **SoT 인덱스 + 문서 거버넌스**다. (구 `specification.md` 를 흡수했다 — 2026-08-14)

> **프로젝트 요약 (49자)**
> 로판 속 조연 빌런으로 환생한 당신! 운명을 거슬러 엔딩을 개척해 나가는 전략형 보드게임

---

## 문서 거버넌스 — 규칙을 고치기 전에

1. **규칙·수치·설정의 정본은 아래 「정본」 표의 문서다.** 충돌하면 언제나 정본이 이긴다.
2. **이 파일에 규칙·수치를 옮겨 적지 않는다.** 여기는 *어디에 무엇이 있는지*만 가리키는 색인이다.
   숫자를 적는 순간 파생본이 하나 더 늘어나고, 그게 정확히 지금 관리하려는 문제다.
3. **정본을 먼저 고치고, 파생본을 같은 작업 안에서 맞춘다.** 순서가 뒤집히면 드리프트가 난다.

### 정본 — 여기를 고친다

| 고치려는 것 | 파일 |
| --- | --- |
| 턴/라운드(막) 진행 · NPC 운용 · 잔느 조우 | [`docs/rules/phases.md`](docs/rules/phases.md) |
| 플레이어 행동 8종 · 상태이상 | [`docs/rules/actions.md`](docs/rules/actions.md) |
| 카드·토큰 구성품 수량 | [`docs/rules/tokens.md`](docs/rules/tokens.md) |
| 플레이 인원 · 난이도 5단계 | [`docs/rules/difficulty.md`](docs/rules/difficulty.md) |
| 셋업 절차 | [`docs/rules/setup.md`](docs/rules/setup.md) |
| 세계 진실 물건 카드 (승천엔딩 조건) | [`docs/rules/truth-clues.md`](docs/rules/truth-clues.md) |
| 엔딩 5종 · 종료 조건 | [`docs/endings/`](docs/endings/) |
| 각성 / 고유능력 | [`docs/superpowers/overall.md`](docs/superpowers/overall.md) |
| 대륙·지역·이동·세력·세계의 진실·통치권 매핑 | [`docs/world/overall.md`](docs/world/overall.md) |
| 주인공·남주·메인 빌런·플레이어 캐릭터 | [`docs/characters/`](docs/characters/) |
| 운명 카드 시나리오 (초/중/후반) | [`docs/scenario.md`](docs/scenario.md) |
| 재앙 카드 10종 | [`docs/omens.md`](docs/omens.md) |
| 특성 카드 | [`docs/traits.md`](docs/traits.md) — 요약표와 카드 상세가 다르면 **카드 상세**가 정본 |
| 도입 스토리 / 컨셉 | [`docs/story.md`](docs/story.md) |

### 파생본 — 정본을 고치면 따라가야 한다

| 파생본 | 무엇이 실려 있나 |
| --- | --- |
| [`docs/rulebook.md`](docs/rulebook.md) | 인쇄용 룰북 원고 20쪽. `docs/rules/` 를 플레이 순서로 추린 것 |
| `demo/index.html` | **간단 룰 웹페이지** (배포본 — 휴대폰에서 게임 중에 보는 용도). 낱말 사전이 이 안에 있다 |
| `demo/simulator.html` | 밸런스 시뮬레이터. **막 수·덱 구성이 코드에 하드코딩**되어 있다 |
| `demo/summary-card.html` | 행동 요약 카드 |
| [`README.md`](README.md) | 저장소 소개. 개요·행동·엔딩·카드 구성을 요약해 싣는다 |
| [`proposal.md`](proposal.md) | 텀블벅 펀딩 페이지 원고 |
| [`TODO.md`](TODO.md) | 미결 사항 추적 |
| `../handeck/example/project.json` | 시제품 카드 데이터. **이 저장소 밖**이라 가장 놓치기 쉽다 |

### 재생성물 — 손으로 고치지 않는다

`docs/_export/*.tsv` · `*.txt` 는 `scripts/extract-*.mjs` 의 산출물이다. 정본을 고친 뒤 다시 돌린다.

| 스크립트 | 입력(정본) → 출력 |
| --- | --- |
| `extract-fate.mjs` | `docs/scenario.md` → `fate-cards.*` |
| `extract-items.mjs` | `docs/rules/tokens.md` → `item-cards.*` |
| `extract-omens.mjs` | `docs/omens.md` → `omen-cards.*` |
| `extract-traits.mjs` | `docs/traits.md` → `trait-cards.*` |
| `extract-characters.mjs` | `docs/characters/*.md` → `character-cards.*` |

### 정합성 점검 (요청 시 수행)

전파는 자동이 아니다. **"정합성 점검해줘" 라고 하면** 아래를 수행한다.

1. 바뀐 수치의 **옛 값**을 저장소 전체에서 훑는다 — 예: `grep -rn "18막\|20장" --include=*.md --include=*.html .`
2. 위 「파생본」 표를 위에서 아래로 대조한다. `../handeck/example/project.json` 을 빠뜨리지 않는다
3. 재생성물은 대조가 아니라 `scripts/extract-*.mjs` 재실행으로 맞춘다
4. 발견한 불일치는 **정본 기준으로** 고치고, 정본 자체가 미정이면 `TODO.md` 에 올린다

---

## 관련 문서 — 역할 구분

| 문서 | 역할 | 독자 |
| --- | --- | --- |
| **이 파일** | 정본이 어디 있고 무엇이 파생본인지 (색인·거버넌스) | 작업자 |
| [`README.md`](README.md) | 저장소가 무엇인지 소개 + 게임 개요 요약 | 저장소 방문자 |
| [`TODO.md`](TODO.md) | **아직 정해지지 않은 것**의 추적. 결정·정보·제작 대기 항목 | 작업자 |
| [`proposal.md`](proposal.md) | **정해진 것을 파는 글.** 펀딩 페이지 원고, 홍보 톤으로 각색 | 후원자 |

- `TODO.md` 와 `proposal.md` 는 **같은 빈칸의 양면**이다 — TODO 의 「🟢 펀딩·구성품」 항목이
  proposal 의 `[채움필요]` 자리와 대응한다. 확정되면 proposal 을 채우고 TODO 를 닫는다.
- `proposal.md` 는 홍보 톤이라 **표현은 각색해도 사실은 정본을 따른다.**

## 리소스

| 경로 | 내용 |
| --- | --- |
| [`images/chars/`](images/chars/) | 캐릭터 확정 일러스트 17종 (캐릭터 카드 앞면에 사용) |
| [`docs/world/map-prompt.md`](docs/world/map-prompt.md) | 보드판 지도 생성 프롬프트 |
| [`docs/prompts/`](docs/prompts/) | 박스 커버·목업·카드 프레임 생성 프롬프트 |
| `docs/*_art.md` | 카드 아트 프롬프트 (생성 파이프라인은 상위 `imggen/CLAUDE.md` 참조) |
