import{_ as a,o as n,c as p,a2 as i}from"./chunks/framework.DvFsUg-r.js";const k=JSON.parse('{"title":"CAT-06. API & 외부 통합","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"hermes/benchmark/api-integration.md","filePath":"hermes/benchmark/api-integration.md","lastUpdated":1781092690000}'),l={name:"hermes/benchmark/api-integration.md"};function e(t,s,r,c,h,o){return n(),p("div",null,[...s[0]||(s[0]=[i(`<h1 id="cat-06-api-외부-통합" tabindex="-1">CAT-06. API &amp; 외부 통합 <a class="header-anchor" href="#cat-06-api-외부-통합" aria-label="Permalink to &quot;CAT-06. API &amp; 외부 통합&quot;">​</a></h1><blockquote><p><strong>평가 핵심</strong>: 에이전트가 REST API를 설계하고, 외부 서비스와 안전하게 연동할 수 있는가?</p></blockquote><h2 id="난이도-범례" tabindex="-1">난이도 범례 <a class="header-anchor" href="#난이도-범례" aria-label="Permalink to &quot;난이도 범례&quot;">​</a></h2><table tabindex="0"><thead><tr><th>레벨</th><th>의미</th><th>예상 소요</th></tr></thead><tbody><tr><td>⭐</td><td>기초 — 단일 API, 단순 CRUD</td><td>2~3분</td></tr><tr><td>⭐⭐</td><td>중급 — 인증, 에러 처리, 복수 엔드포인트</td><td>3~5분</td></tr><tr><td>⭐⭐⭐</td><td>고급 — 외부 연동, 비동기, 복합 플로우</td><td>5~10분</td></tr></tbody></table><hr><h2 id="ai-01-openapi-스펙-→-서버-클라이언트" tabindex="-1">AI-01. OpenAPI 스펙 → 서버 + 클라이언트 ⭐⭐⭐ <a class="header-anchor" href="#ai-01-openapi-스펙-→-서버-클라이언트" aria-label="Permalink to &quot;AI-01. OpenAPI 스펙 → 서버 + 클라이언트 :star::star::star:&quot;">​</a></h2><h3 id="시나리오-배경" tabindex="-1">시나리오 배경 <a class="header-anchor" href="#시나리오-배경" aria-label="Permalink to &quot;시나리오 배경&quot;">​</a></h3><p>OpenAPI 스펙을 기반으로 서버와 클라이언트를 동시에 생성하는 능력.</p><h3 id="프롬프트" tabindex="-1">프롬프트 <a class="header-anchor" href="#프롬프트" aria-label="Permalink to &quot;프롬프트&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>아래 OpenAPI 3.0 스펙을 작성하고, 이 스펙으로부터 서버와 클라이언트를 만들어줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>서비스: 온라인 설문조사(Survey) API</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1단계] \`openapi.yaml\` 작성</span></span>
<span class="line"><span>엔드포인트:</span></span>
<span class="line"><span>- POST /surveys — 설문 생성 (제목, 설명, 질문 목록)</span></span>
<span class="line"><span>  - 질문 타입: single_choice, multiple_choice, text, rating(1-5)</span></span>
<span class="line"><span>- GET /surveys — 목록 (pagination, status 필터)</span></span>
<span class="line"><span>- GET /surveys/{id} — 상세 (질문+응답 통계 포함)</span></span>
<span class="line"><span>- POST /surveys/{id}/publish — 게시 (draft→published, 게시 후 질문 수정 불가)</span></span>
<span class="line"><span>- POST /surveys/{id}/responses — 응답 제출</span></span>
<span class="line"><span>  - 필수 질문 미응답 시 400</span></span>
<span class="line"><span>  - 이미 응답한 user는 409</span></span>
<span class="line"><span>- GET /surveys/{id}/results — 통계 (질문별 응답 분포, 총 응답자 수)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>인증: Bearer Token (JWT)</span></span>
<span class="line"><span>에러 형식: RFC 7807 Problem Details</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[2단계] 서버 구현 (\`server/\`)</span></span>
<span class="line"><span>- Node.js + Express</span></span>
<span class="line"><span>- 메모리 저장소 (Map 기반, DB 없이)</span></span>
<span class="line"><span>- openapi.yaml과 정확히 일치하는 요청/응답</span></span>
<span class="line"><span>- 입력 유효성 검사 (ajv 또는 직접 구현)</span></span>
<span class="line"><span>- JWT 검증 미들웨어 (실제 검증은 시뮬레이션)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[3단계] 클라이언트 SDK (\`client/\`)</span></span>
<span class="line"><span>- TypeScript 클라이언트 라이브러리</span></span>
<span class="line"><span>- 각 엔드포인트에 대응하는 메서드</span></span>
<span class="line"><span>- 타입 정의 (Survey, Question, Response, SurveyResult 등)</span></span>
<span class="line"><span>- 에러 처리 (SurveyApiError 클래스)</span></span>
<span class="line"><span>- 사용 예제 (\`client/example.ts\`)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[4단계] 통합 테스트</span></span>
<span class="line"><span>- 서버를 띄우고 클라이언트로 전체 플로우 테스트:</span></span>
<span class="line"><span>  설문 생성 → 게시 → 응답 제출 3건 → 결과 조회</span></span></code></pre></div><h3 id="평가-포인트" tabindex="-1">평가 포인트 <a class="header-anchor" href="#평가-포인트" aria-label="Permalink to &quot;평가 포인트&quot;">​</a></h3><ul><li>[ ] OpenAPI 스펙의 완성도 (스키마, 에러 정의, 예시)</li><li>[ ] 서버가 스펙과 정확히 일치하는지</li><li>[ ] 클라이언트 타입 정의의 정확성</li><li>[ ] RFC 7807 에러 형식 준수</li><li>[ ] 통합 테스트의 커버리지</li><li>[ ] 전체 파이프라인 실행 가능성</li></ul><hr><h2 id="ai-02-인증-플로우-구현" tabindex="-1">AI-02. 인증 플로우 구현 ⭐⭐⭐ <a class="header-anchor" href="#ai-02-인증-플로우-구현" aria-label="Permalink to &quot;AI-02. 인증 플로우 구현 :star::star::star:&quot;">​</a></h2><h3 id="시나리오-배경-1" tabindex="-1">시나리오 배경 <a class="header-anchor" href="#시나리오-배경-1" aria-label="Permalink to &quot;시나리오 배경&quot;">​</a></h3><p>실전 수준의 인증/인가 시스템 구현.</p><h3 id="프롬프트-1" tabindex="-1">프롬프트 <a class="header-anchor" href="#프롬프트-1" aria-label="Permalink to &quot;프롬프트&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>JWT 기반 인증 시스템을 Node.js로 구현해줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>기능:</span></span>
<span class="line"><span>1. 회원가입 (POST /auth/register)</span></span>
<span class="line"><span>   - email + password (bcrypt 해시)</span></span>
<span class="line"><span>   - 비밀번호 강도 검사: 8자 이상, 대소문자+숫자+특수문자</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>2. 로그인 (POST /auth/login)</span></span>
<span class="line"><span>   - Access Token (15분) + Refresh Token (7일) 발급</span></span>
<span class="line"><span>   - Refresh Token은 httpOnly 쿠키로 설정</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>3. 토큰 갱신 (POST /auth/refresh)</span></span>
<span class="line"><span>   - Refresh Token으로 새 Access Token 발급</span></span>
<span class="line"><span>   - Refresh Token Rotation (사용된 RT는 즉시 무효화)</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>4. 로그아웃 (POST /auth/logout)</span></span>
<span class="line"><span>   - 해당 사용자의 모든 Refresh Token 무효화</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>5. 비밀번호 변경 (PUT /auth/password)</span></span>
<span class="line"><span>   - 현재 비밀번호 확인 필수</span></span>
<span class="line"><span>   - 변경 시 모든 세션 무효화 (다른 기기 로그아웃)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6. RBAC (Role-Based Access Control)</span></span>
<span class="line"><span>   - 역할: user, editor, admin</span></span>
<span class="line"><span>   - 미들웨어: requireRole(&#39;admin&#39;, &#39;editor&#39;)</span></span>
<span class="line"><span>   - 테스트용 보호된 엔드포인트 3개</span></span>
<span class="line"><span></span></span>
<span class="line"><span>보안 요구사항:</span></span>
<span class="line"><span>- Rate Limiting: 로그인 5회 실패 시 5분 잠금</span></span>
<span class="line"><span>- Token Blacklist: 로그아웃된 토큰으로 접근 시 401</span></span>
<span class="line"><span>- Timing-safe comparison (타이밍 공격 방지)</span></span>
<span class="line"><span>- 민감 정보 로깅 금지 (password 필드 마스킹)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>구조: auth/ 디렉토리에 모듈별로 분리</span></span>
<span class="line"><span>테스트: 각 시나리오별 통합 테스트 (supertest)</span></span>
<span class="line"><span>- 정상 플로우: 가입→로그인→보호된 리소스 접근→로그아웃</span></span>
<span class="line"><span>- 비정상 플로우: 만료된 토큰, 잘못된 비밀번호, 권한 없는 접근</span></span></code></pre></div><h3 id="평가-포인트-1" tabindex="-1">평가 포인트 <a class="header-anchor" href="#평가-포인트-1" aria-label="Permalink to &quot;평가 포인트&quot;">​</a></h3><ul><li>[ ] JWT 구현의 정확성 (Access + Refresh 분리)</li><li>[ ] Refresh Token Rotation 구현</li><li>[ ] bcrypt 해시 사용</li><li>[ ] Rate Limiting 구현</li><li>[ ] RBAC 미들웨어</li><li>[ ] 보안 요구사항 준수</li><li>[ ] 테스트의 시나리오 커버리지</li></ul><hr><h2 id="ai-03-웹훅-수신-서버" tabindex="-1">AI-03. 웹훅 수신 서버 ⭐⭐ <a class="header-anchor" href="#ai-03-웹훅-수신-서버" aria-label="Permalink to &quot;AI-03. 웹훅 수신 서버 :star::star:&quot;">​</a></h2><h3 id="시나리오-배경-2" tabindex="-1">시나리오 배경 <a class="header-anchor" href="#시나리오-배경-2" aria-label="Permalink to &quot;시나리오 배경&quot;">​</a></h3><p>외부 서비스의 웹훅을 수신하고 처리하는 서버 구현.</p><h3 id="프롬프트-2" tabindex="-1">프롬프트 <a class="header-anchor" href="#프롬프트-2" aria-label="Permalink to &quot;프롬프트&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GitHub/Stripe/Slack 등의 웹훅을 수신하는 범용 웹훅 서버를 만들어줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`webhook_server.py\` (FastAPI):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 웹훅 수신 엔드포인트</span></span>
<span class="line"><span>   - POST /webhooks/{provider} — provider: github, stripe, slack, generic</span></span>
<span class="line"><span>   - 각 provider별 서명 검증:</span></span>
<span class="line"><span>     - GitHub: X-Hub-Signature-256 (HMAC-SHA256)</span></span>
<span class="line"><span>     - Stripe: Stripe-Signature (타임스탬프 + 서명)</span></span>
<span class="line"><span>     - Slack: X-Slack-Signature (v0=sha256)</span></span>
<span class="line"><span>     - Generic: 서명 검증 없음</span></span>
<span class="line"><span>   - 서명 검증 실패 시 403</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 이벤트 라우팅</span></span>
<span class="line"><span>   - GitHub: push, pull_request, issues 이벤트 분기 처리</span></span>
<span class="line"><span>   - Stripe: payment_intent.succeeded, payment_intent.failed, customer.subscription.updated</span></span>
<span class="line"><span>   - 각 이벤트별 핸들러 함수 (console 출력으로 시뮬레이션)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 이벤트 저장</span></span>
<span class="line"><span>   - SQLite에 모든 수신 이벤트 기록</span></span>
<span class="line"><span>   - columns: id, provider, event_type, payload(JSON), received_at, signature_valid, processed</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 재시도 로직</span></span>
<span class="line"><span>   - 핸들러 실패 시 exponential backoff로 3회 재시도</span></span>
<span class="line"><span>   - 최종 실패 시 dead_letter 테이블에 저장</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 관리 API</span></span>
<span class="line"><span>   - GET /webhooks/events — 이벤트 이력 조회 (pagination, provider/type 필터)</span></span>
<span class="line"><span>   - GET /webhooks/events/{id}/replay — 이벤트 재처리</span></span>
<span class="line"><span>   - GET /webhooks/stats — provider별 성공/실패 통계</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6. 설정</span></span>
<span class="line"><span>   - 각 provider의 시크릿 키는 환경변수로 관리</span></span>
<span class="line"><span>   - \`config.py\`에서 로드</span></span>
<span class="line"><span></span></span>
<span class="line"><span>테스트:</span></span>
<span class="line"><span>- 각 provider의 서명 생성 → 검증 테스트</span></span>
<span class="line"><span>- 잘못된 서명 → 403 테스트</span></span>
<span class="line"><span>- 재시도 로직 테스트</span></span>
<span class="line"><span>- curl 예제 5개 (README에 포함)</span></span></code></pre></div><h3 id="평가-포인트-2" tabindex="-1">평가 포인트 <a class="header-anchor" href="#평가-포인트-2" aria-label="Permalink to &quot;평가 포인트&quot;">​</a></h3><ul><li>[ ] HMAC 서명 검증 구현 (3가지 provider)</li><li>[ ] 이벤트 라우팅의 확장성</li><li>[ ] Exponential backoff 재시도 구현</li><li>[ ] Dead letter queue 개념 구현</li><li>[ ] SQLite 스키마의 적절성</li><li>[ ] curl 예제의 실행 가능성</li></ul><hr><h2 id="ai-04-graphql-스키마-설계-구현" tabindex="-1">AI-04. GraphQL 스키마 설계 &amp; 구현 ⭐⭐ <a class="header-anchor" href="#ai-04-graphql-스키마-설계-구현" aria-label="Permalink to &quot;AI-04. GraphQL 스키마 설계 &amp; 구현 :star::star:&quot;">​</a></h2><h3 id="시나리오-배경-3" tabindex="-1">시나리오 배경 <a class="header-anchor" href="#시나리오-배경-3" aria-label="Permalink to &quot;시나리오 배경&quot;">​</a></h3><p>REST가 아닌 GraphQL API 설계 능력.</p><h3 id="프롬프트-3" tabindex="-1">프롬프트 <a class="header-anchor" href="#프롬프트-3" aria-label="Permalink to &quot;프롬프트&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>도서관 관리 시스템의 GraphQL API를 만들어줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>스키마:</span></span>
<span class="line"><span>\`\`\`graphql</span></span>
<span class="line"><span>type Book {</span></span>
<span class="line"><span>  id: ID!</span></span>
<span class="line"><span>  title: String!</span></span>
<span class="line"><span>  author: Author!</span></span>
<span class="line"><span>  isbn: String!</span></span>
<span class="line"><span>  publishedYear: Int</span></span>
<span class="line"><span>  genre: [String!]!</span></span>
<span class="line"><span>  copies: Int!</span></span>
<span class="line"><span>  availableCopies: Int!</span></span>
<span class="line"><span>  borrowHistory: [BorrowRecord!]!</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Author {</span></span>
<span class="line"><span>  id: ID!</span></span>
<span class="line"><span>  name: String!</span></span>
<span class="line"><span>  nationality: String</span></span>
<span class="line"><span>  books: [Book!]!</span></span>
<span class="line"><span>  totalBooks: Int!</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Member {</span></span>
<span class="line"><span>  id: ID!</span></span>
<span class="line"><span>  name: String!</span></span>
<span class="line"><span>  email: String!</span></span>
<span class="line"><span>  memberSince: String!</span></span>
<span class="line"><span>  currentBorrows: [BorrowRecord!]!</span></span>
<span class="line"><span>  borrowHistory: [BorrowRecord!]!</span></span>
<span class="line"><span>  overdueBooksCount: Int!</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type BorrowRecord {</span></span>
<span class="line"><span>  id: ID!</span></span>
<span class="line"><span>  book: Book!</span></span>
<span class="line"><span>  member: Member!</span></span>
<span class="line"><span>  borrowDate: String!</span></span>
<span class="line"><span>  dueDate: String!</span></span>
<span class="line"><span>  returnDate: String</span></span>
<span class="line"><span>  isOverdue: Boolean!</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>구현 (Node.js + Apollo Server 또는 graphql-yoga):</p><ol><li>위 스키마를 구현하되, 메모리 저장소 사용 (시드 데이터 포함) <ul><li>도서 30권, 저자 10명, 회원 15명, 대출 기록 50건</li></ul></li><li>Queries: <ul><li>books(filter: { genre, available, search }, pagination)</li><li>book(id)</li><li>authors(search)</li><li>member(id)</li><li>overdueBooks — 현재 연체 중인 도서 목록</li></ul></li><li>Mutations: <ul><li>borrowBook(memberId, bookId) — 대출 (재고 확인, 연체 3권 이상이면 거부)</li><li>returnBook(borrowId) — 반납</li><li>addBook(input)</li></ul></li><li>N+1 문제 해결 (DataLoader 사용)</li><li>에러 처리 (커스텀 에러 코드)</li><li>사용 예제 쿼리 10개를 <code>queries.graphql</code>에 작성</li></ol><p>테스트: 핵심 쿼리/뮤테이션 테스트</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] GraphQL 스키마의 정확성</span></span>
<span class="line"><span>- [ ] Resolver 구현의 완성도</span></span>
<span class="line"><span>- [ ] N+1 문제 인식 및 DataLoader 활용</span></span>
<span class="line"><span>- [ ] 비즈니스 로직 (연체 3권 → 대출 거부)</span></span>
<span class="line"><span>- [ ] 에러 처리</span></span>
<span class="line"><span>- [ ] 예제 쿼리의 다양성</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## AI-05. Rate Limiter 구현 :star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>알고리즘 이해와 API 보호 메커니즘 구현.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>4가지 알고리즘으로 Rate Limiter를 구현해줘.</p><p><code>rate_limiter.py</code>:</p><p>알고리즘:</p><ol><li>Fixed Window Counter — 고정 시간 윈도우 내 요청 수 제한</li><li>Sliding Window Log — 요청 타임스탬프 로그 기반</li><li>Sliding Window Counter — 이전 윈도우 + 현재 윈도우 가중 평균</li><li>Token Bucket — 토큰이 일정 속도로 충전, 요청마다 소비</li></ol><p>공통 인터페이스:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RateLimiter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ABC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, max_requests: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, window_seconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> allow_request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, client_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;요청 허용 여부 반환&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_remaining</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, client_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;남은 요청 수 반환&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_retry_after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, client_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;다음 요청까지 대기 시간(초) 반환&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        ...</span></span></code></pre></div><p>추가 구현:</p><ul><li>Express/FastAPI 미들웨어로 래핑 (응답 헤더에 X-RateLimit-* 포함)</li><li>클라이언트별 다른 제한 (tier: free=100/h, pro=1000/h, enterprise=10000/h)</li><li>IP + API Key 조합으로 클라이언트 식별</li></ul><p>테스트:</p><ul><li>각 알고리즘 단위 테스트 (limit 초과 시 reject, 윈도우 리셋 후 다시 allow)</li><li>벤치마크: 4가지 알고리즘의 메모리 사용량, 처리 속도 비교</li><li><code>COMPARISON.md</code>: 각 알고리즘의 장단점, 어떤 상황에 어떤 알고리즘이 적합한지</li></ul><p>시뮬레이션:</p><ul><li>1000명의 클라이언트가 랜덤 간격으로 요청하는 시뮬레이션</li><li>각 알고리즘별 허용/거부 비율, 오탐율(burst traffic에서) 비교</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] 4가지 알고리즘 구현의 정확성</span></span>
<span class="line"><span>- [ ] Token Bucket의 토큰 충전 로직</span></span>
<span class="line"><span>- [ ] Sliding Window Counter의 가중 평균 계산</span></span>
<span class="line"><span>- [ ] 미들웨어의 헤더 설정 (RateLimit-Remaining 등)</span></span>
<span class="line"><span>- [ ] 벤치마크의 공정성</span></span>
<span class="line"><span>- [ ] COMPARISON.md의 분석 깊이</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## AI-06. 이벤트 드리븐 아키텍처 시뮬레이션 :star::star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>이벤트 기반 시스템 설계와 구현.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>이커머스 주문 처리를 이벤트 드리븐 아키텍처로 구현해줘. 실제 메시지 큐 없이 in-process 이벤트 버스로 시뮬레이션.</p><p>이벤트 플로우:</p><ol><li>OrderCreated → 재고 차감 서비스, 결제 서비스에 전달</li><li>PaymentCompleted → 주문 상태 업데이트, 알림 서비스</li><li>PaymentFailed → 재고 복구, 주문 취소</li><li>InventoryReserved → (결제와 재고 모두 성공 시) 배송 준비</li><li>ShippingStarted → 알림 서비스, 주문 추적 업데이트</li></ol><p>구현 (<code>event_system/</code>):</p><ol><li><p><code>event_bus.py</code> — 이벤트 발행/구독 시스템</p><ul><li>publish(event_type, payload)</li><li>subscribe(event_type, handler)</li><li>핸들러 실패 시 dead letter queue</li><li>이벤트 순서 보장 (같은 aggregate ID 기준)</li></ul></li><li><p><code>events.py</code> — 이벤트 정의 (dataclass)</p><ul><li>모든 이벤트 공통: event_id, timestamp, correlation_id</li></ul></li><li><p><code>services/</code> — 각 서비스</p><ul><li>order_service.py (주문 생성, 상태 관리)</li><li>inventory_service.py (재고 관리, 예약/복구)</li><li>payment_service.py (결제 시뮬레이션, 30% 확률로 실패)</li><li>notification_service.py (이메일/SMS 시뮬레이션)</li><li>shipping_service.py (배송 시뮬레이션)</li></ul></li><li><p><code>saga.py</code> — OrderSaga (보상 트랜잭션)</p><ul><li>결제 실패 → 재고 복구 자동 실행</li><li>타임아웃 처리 (30초 이내 완료되지 않으면 취소)</li></ul></li><li><p><code>demo.py</code> — 주문 10건 시뮬레이션</p><ul><li>성공/실패 케이스 혼합</li><li>전체 이벤트 플로우를 시간순으로 로그 출력</li><li>최종 상태 요약 (성공 주문, 실패 주문, 각 서비스 상태)</li></ul></li><li><p><code>flow_diagram.md</code> — 이벤트 플로우 다이어그램 (Mermaid)</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] 이벤트 버스 pub/sub 구현의 정확성</span></span>
<span class="line"><span>- [ ] Saga 패턴 (보상 트랜잭션) 구현</span></span>
<span class="line"><span>- [ ] 결제 실패 → 재고 복구 플로우</span></span>
<span class="line"><span>- [ ] correlation_id를 통한 이벤트 추적</span></span>
<span class="line"><span>- [ ] 시뮬레이션의 현실성</span></span>
<span class="line"><span>- [ ] Mermaid 플로우 다이어그램의 정확성</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## AI-07. API Gateway 패턴 :star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>마이크로서비스 앞단의 API Gateway 구현.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>간단한 API Gateway를 Node.js로 구현해줘.</p><p>기능:</p><ol><li><p>라우팅 — 설정 기반으로 요청을 백엔드 서비스로 프록시</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">routes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/api/users/**</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://user-service:3001</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/api/orders/**</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://order-service:3002</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/api/products/**</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://product-service:3003</span></span></code></pre></div></li><li><p>미들웨어 체인 (설정으로 활성화/비활성화 가능):</p><ul><li>인증 검증 (JWT)</li><li>Rate Limiting (IP + API Key 기반)</li><li>Request Logging (요청/응답 기록)</li><li>CORS 처리</li><li>Request/Response 변환 (헤더 추가/제거, body 변환)</li><li>Circuit Breaker (백엔드 5회 연속 실패 → 30초간 fast-fail)</li><li>캐싱 (GET 요청, TTL 설정 가능)</li></ul></li><li><p>헬스 체크</p><ul><li>GET /gateway/health — 게이트웨이 상태</li><li>GET /gateway/health/backends — 각 백엔드 서비스 상태</li></ul></li><li><p>관리 API</p><ul><li>GET /gateway/stats — 라우트별 요청 수, 평균 응답시간, 에러율</li><li>POST /gateway/routes — 런타임에 라우트 추가/수정</li></ul></li></ol><p>구조:</p><ul><li>gateway/config.yaml — 라우팅 + 미들웨어 설정</li><li>gateway/index.js — 엔트리포인트</li><li>gateway/middleware/ — 각 미들웨어</li><li>gateway/proxy.js — 프록시 로직</li><li>gateway/circuit-breaker.js — 서킷 브레이커</li></ul><p>시뮬레이션을 위한 가짜 백엔드 서비스 3개도 만들어줘 (간단한 Express 서버). 전체를 docker-compose.yml로 묶어줘.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] YAML 기반 라우팅 구현</span></span>
<span class="line"><span>- [ ] 미들웨어 체인의 확장성</span></span>
<span class="line"><span>- [ ] Circuit Breaker 상태 전이 (closed→open→half-open)</span></span>
<span class="line"><span>- [ ] 캐싱 구현 (TTL, invalidation)</span></span>
<span class="line"><span>- [ ] 런타임 라우트 변경</span></span>
<span class="line"><span>- [ ] Docker Compose로 전체 실행 가능성</span></span></code></pre></div>`,64)])])}const u=a(l,[["render",e]]);export{k as __pageData,u as default};
