const CACHE = 'pocus-dynamic-cache';

// 설치 시 즉시 대기 상태 건너뛰기
self.addEventListener('install', e => {
  self.skipWaiting();
});

// 활성화 시 기존 클라이언트 즉시 제어
self.addEventListener('activate', e => {
  self.clients.claim();
});

// 핵심: Network-First (네트워크 먼저) 전략
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        // 인터넷 연결 정상: 최신 파일을 가져오고, 동시에 캐시도 몰래 최신화!
        const resClone = res.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, resClone));
        return res;
      })
      .catch(() => {
        // 인터넷 끊김 (오프라인): 에러 뱉지 말고 폰에 저장해둔 예전 파일 꺼내기!
        return caches.match(e.request);
      })
  );
});
