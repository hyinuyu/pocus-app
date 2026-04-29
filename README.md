# POCUS Report App

응급의학과 POCUS 기록 및 자동 판독 보조 웹앱

## GitHub Pages 배포 방법

1. 이 저장소를 GitHub에 만들고 파일들을 업로드
2. Settings → Pages → Branch: main / root → Save
3. `https://[username].github.io/[repo-name]` 으로 접속

## 파일 구조

```
index.html     ← 메인 앱
manifest.json  ← PWA 설정
sw.js          ← 오프라인 지원 (Service Worker)
icon-192.png   ← 앱 아이콘
icon-512.png   ← 앱 아이콘 (대)
```

## 앱으로 설치하기

- **iPhone/iPad**: Safari에서 열기 → 공유 버튼 → '홈 화면에 추가'
- **Android**: Chrome에서 열기 → 우상단 메뉴 → '앱 설치'

## 기능

- 자동 Impression 추천 (5가지 패턴)
- 모든 항목 📐 측정법 가이드
- RWMA (Regional Wall Motion Abnormality) with 관상동맥 territory
- 의무기록 복사 (서식 포함)
- 오프라인 사용 가능
