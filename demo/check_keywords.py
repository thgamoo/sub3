#!/usr/bin/env python3
"""간단 룰 페이지의 낱말 링크 확인.

    python3 demo/check_keywords.py

본문의 `<k>낱말</k>` 이 전부 사전(또는 별칭)에 있는지 본다.
없으면 그 낱말은 **눌러도 아무 일이 안 일어나는데 화면에서는 티가 안 난다** —
밑줄만 사라지고 글은 그대로라, 뽑아보기 전에는 모른다. 그래서 배포 전에 잡는다.

거꾸로 «사전에만 있고 본문에 없는 항목» 도 알려준다. 그건 오류는 아니고,
글을 고치다 낱말을 빼먹었다는 신호다 (실패로 치지는 않는다).
"""

import re
import sys
from pathlib import Path

HTML = Path(__file__).with_name('index.html')


def main() -> int:
    s = HTML.read_text(encoding='utf-8')

    keys = set(re.findall(r"^\s*'([^']+)':\s*\{ tag:", s, re.M))
    alias_src = s[s.index('const ALIAS'):s.index('/* ── 탭 ──')]
    alias = dict(re.findall(r"'([^']+)':'([^']+)'", alias_src))
    words = {w.strip() for w in re.findall(r'<k>(.*?)</k>', s, re.S)}

    if not keys:
        print('FAIL  사전을 못 찾았습니다 — 파일 구조가 바뀌었는지 확인하세요')
        return 1

    dead = sorted(w for w in words if w not in keys and alias.get(w) not in keys)
    broken = sorted(a for a, t in alias.items() if t not in keys)
    unused = sorted(k for k in keys if k not in words and k not in alias.values())

    print(f'사전 {len(keys)}항목 · 별칭 {len(alias)}개 · 본문 낱말 {len(words)}종')
    if unused:
        print('· 사전에만 있고 본문에 안 쓰인 항목:', ', '.join(unused))

    fail = False
    if dead:
        print('FAIL  사전에 없는 낱말 (눌러도 안 열립니다):', ', '.join(dead))
        fail = True
    if broken:
        print('FAIL  가리키는 곳이 없는 별칭:', ', '.join(broken))
        fail = True
    if not fail:
        print('OK  모든 낱말이 열립니다')
    return 1 if fail else 0


if __name__ == '__main__':
    sys.exit(main())
