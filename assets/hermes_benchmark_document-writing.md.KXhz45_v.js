import{_ as s,o as n,c as p,a2 as l}from"./chunks/framework.DvFsUg-r.js";const m=JSON.parse('{"title":"CAT-02. 문서 작성 & 분석","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"hermes/benchmark/document-writing.md","filePath":"hermes/benchmark/document-writing.md","lastUpdated":1781092690000}'),e={name:"hermes/benchmark/document-writing.md"};function i(t,a,c,r,o,d){return n(),p("div",null,[...a[0]||(a[0]=[l(`<h1 id="cat-02-문서-작성-분석" tabindex="-1">CAT-02. 문서 작성 &amp; 분석 <a class="header-anchor" href="#cat-02-문서-작성-분석" aria-label="Permalink to &quot;CAT-02. 문서 작성 &amp; 분석&quot;">​</a></h1><blockquote><p><strong>평가 핵심</strong>: 에이전트가 기술 문서, 분석 보고서, 의사결정 자료를 <strong>구조적이고 설득력 있게</strong> 작성할 수 있는가?</p></blockquote><h2 id="난이도-범례" tabindex="-1">난이도 범례 <a class="header-anchor" href="#난이도-범례" aria-label="Permalink to &quot;난이도 범례&quot;">​</a></h2><table tabindex="0"><thead><tr><th>레벨</th><th>의미</th><th>예상 소요</th></tr></thead><tbody><tr><td>⭐</td><td>기초 — 단일 문서, 정해진 형식</td><td>2~3분</td></tr><tr><td>⭐⭐</td><td>중급 — 분석 필요, 복수 산출물</td><td>3~5분</td></tr><tr><td>⭐⭐⭐</td><td>고급 — 깊은 리서치, 다면적 분석</td><td>5~10분</td></tr></tbody></table><hr><h2 id="dw-01-기술-의사결정-문서-adr" tabindex="-1">DW-01. 기술 의사결정 문서 (ADR) ⭐⭐ <a class="header-anchor" href="#dw-01-기술-의사결정-문서-adr" aria-label="Permalink to &quot;DW-01. 기술 의사결정 문서 (ADR) :star::star:&quot;">​</a></h2><h3 id="시나리오-배경" tabindex="-1">시나리오 배경 <a class="header-anchor" href="#시나리오-배경" aria-label="Permalink to &quot;시나리오 배경&quot;">​</a></h3><p>Architecture Decision Record는 팀의 기술 선택을 기록하는 핵심 문서다. 맥락·대안 비교·근거를 포함한 ADR 작성 능력을 평가.</p><h3 id="프롬프트" tabindex="-1">프롬프트 <a class="header-anchor" href="#프롬프트" aria-label="Permalink to &quot;프롬프트&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>우리 팀이 메시지 큐 시스템을 도입하려고 해. ADR(Architecture Decision Record)을 작성해줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>배경:</span></span>
<span class="line"><span>- B2B SaaS 서비스 (월 MAU 50만)</span></span>
<span class="line"><span>- 현재 모놀리식 Django 앱에서 마이크로서비스로 전환 중</span></span>
<span class="line"><span>- 주문 처리, 알림 발송, 리포트 생성이 동기 처리되어 지연 발생</span></span>
<span class="line"><span>- 팀 규모: 백엔드 5명, DevOps 1명</span></span>
<span class="line"><span>- 인프라: AWS 사용 중, K8s 운영 경험 있음</span></span>
<span class="line"><span>- 예산: 메시지 큐 관련 월 $500 이내</span></span>
<span class="line"><span></span></span>
<span class="line"><span>비교 대상: RabbitMQ, Apache Kafka, AWS SQS+SNS, Redis Streams</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ADR 형식:</span></span>
<span class="line"><span>1. 제목</span></span>
<span class="line"><span>2. 상태 (제안됨)</span></span>
<span class="line"><span>3. 컨텍스트 — 현재 상황과 문제점</span></span>
<span class="line"><span>4. 의사결정 드라이버 — 우리에게 중요한 기준 (순서대로)</span></span>
<span class="line"><span>5. 고려한 대안 — 각각의 장단점을 표로 정리</span></span>
<span class="line"><span>6. 결정 — 선택한 기술과 이유</span></span>
<span class="line"><span>7. 결과 — 이 결정으로 예상되는 긍정적/부정적 영향</span></span>
<span class="line"><span>8. 마이그레이션 계획 — 3단계로 나누어 구체적인 단계</span></span>
<span class="line"><span>9. 참고자료</span></span>
<span class="line"><span></span></span>
<span class="line"><span>파일명: \`docs/adr/ADR-001-message-queue.md\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>한국어로 작성하되, 기술 용어는 영문 유지.</span></span>
<span class="line"><span>설득력이 핵심이야 — 읽는 CTO가 &quot;합리적이다&quot;라고 느낄 수준으로.</span></span></code></pre></div><h3 id="평가-포인트" tabindex="-1">평가 포인트 <a class="header-anchor" href="#평가-포인트" aria-label="Permalink to &quot;평가 포인트&quot;">​</a></h3><ul><li>[ ] 4가지 대안의 비교 정확성 (기술적 사실 오류 여부)</li><li>[ ] 의사결정 드라이버의 합리성 (팀 규모, 예산, 인프라 고려)</li><li>[ ] 최종 결정의 논리적 일관성</li><li>[ ] 마이그레이션 계획의 구체성</li><li>[ ] 전체 문서의 설득력</li><li>[ ] ADR 형식 준수</li></ul><hr><h2 id="dw-02-장애-보고서-post-mortem" tabindex="-1">DW-02. 장애 보고서 (Post-mortem) ⭐⭐ <a class="header-anchor" href="#dw-02-장애-보고서-post-mortem" aria-label="Permalink to &quot;DW-02. 장애 보고서 (Post-mortem) :star::star:&quot;">​</a></h2><h3 id="시나리오-배경-1" tabindex="-1">시나리오 배경 <a class="header-anchor" href="#시나리오-배경-1" aria-label="Permalink to &quot;시나리오 배경&quot;">​</a></h3><p>실제 장애 시나리오를 주고, blameless 문화 기반의 장애 보고서를 작성하게 한다.</p><h3 id="프롬프트-1" tabindex="-1">프롬프트 <a class="header-anchor" href="#프롬프트-1" aria-label="Permalink to &quot;프롬프트&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>아래 장애 상황에 대한 Post-mortem 보고서를 작성해줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>장애 상황:</span></span>
<span class="line"><span>- 서비스: 온라인 결제 플랫폼 (하루 거래 5만 건)</span></span>
<span class="line"><span>- 일시: 2024-03-15 (금) 14:23 ~ 15:47 (1시간 24분)</span></span>
<span class="line"><span>- 증상: 결제 API 응답시간 30초 이상 → 타임아웃 → 전체 결제 실패</span></span>
<span class="line"><span>- 영향: 약 2,300건 결제 실패, 추정 매출 손실 약 4억 7천만원</span></span>
<span class="line"><span>- 원인 (알려줄 것): 금요일 오후 배포에서 DB 커넥션 풀 설정이 </span></span>
<span class="line"><span>  production 환경이 아닌 staging 설정으로 배포됨 (max_pool: 5 → 정상: 50)</span></span>
<span class="line"><span>- 감지: 고객 문의 3건 접수 후 수동 확인 (모니터링 알림 누락)</span></span>
<span class="line"><span>- 복구: 설정 롤백 후 DB 커넥션 풀 재시작</span></span>
<span class="line"><span></span></span>
<span class="line"><span>보고서 포함 내용:</span></span>
<span class="line"><span>1. 요약 (Executive Summary) — 3줄 이내</span></span>
<span class="line"><span>2. 타임라인 — 분 단위로 상세하게 (감지~복구 사이에 무슨 일이 있었는지 합리적으로 추정)</span></span>
<span class="line"><span>3. 근본 원인 분석 (5 Whys 기법 적용)</span></span>
<span class="line"><span>4. 영향 범위 분석</span></span>
<span class="line"><span>5. 잘한 점 / 개선할 점</span></span>
<span class="line"><span>6. 액션 아이템 — 담당자(가상), 기한, 우선순위 포함</span></span>
<span class="line"><span>7. 교훈 (Lessons Learned)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>톤: Blameless — 특정 개인을 비난하지 않고 시스템/프로세스 개선에 초점</span></span>
<span class="line"><span>파일명: \`docs/postmortem/PM-2024-03-15-payment-outage.md\`</span></span></code></pre></div><h3 id="평가-포인트-1" tabindex="-1">평가 포인트 <a class="header-anchor" href="#평가-포인트-1" aria-label="Permalink to &quot;평가 포인트&quot;">​</a></h3><ul><li>[ ] 타임라인의 현실성 (실제 장애 대응 흐름과 부합)</li><li>[ ] 5 Whys 분석의 깊이 (설정 오류 → 배포 프로세스 → 리뷰 부재 → ...)</li><li>[ ] blameless 톤 유지</li><li>[ ] 액션 아이템의 구체성과 실행 가능성</li><li>[ ] 모니터링 알림 누락에 대한 개선 제안 여부</li><li>[ ] 전반적인 문서 구조와 가독성</li></ul><hr><h2 id="dw-03-기술-비교-분석서" tabindex="-1">DW-03. 기술 비교 분석서 ⭐⭐⭐ <a class="header-anchor" href="#dw-03-기술-비교-분석서" aria-label="Permalink to &quot;DW-03. 기술 비교 분석서 :star::star::star:&quot;">​</a></h2><h3 id="시나리오-배경-2" tabindex="-1">시나리오 배경 <a class="header-anchor" href="#시나리오-배경-2" aria-label="Permalink to &quot;시나리오 배경&quot;">​</a></h3><p>프레임워크/기술 선택 시 팀에게 공유할 비교 분석서. 단순 나열이 아닌 <strong>맥락에 맞는 추천</strong>이 핵심.</p><h3 id="프롬프트-2" tabindex="-1">프롬프트 <a class="header-anchor" href="#프롬프트-2" aria-label="Permalink to &quot;프롬프트&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>프론트엔드 프레임워크 비교 분석서를 작성해줘. 의사결정자(비개발 임원 포함)가 읽을 수 있어야 해.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>프로젝트 상황:</span></span>
<span class="line"><span>- B2C 이커머스 리뉴얼 (기존 jQuery → 현대적 SPA)</span></span>
<span class="line"><span>- 팀: 프론트엔드 3명 (React 경험 2명, Vue 경험 1명, Angular 경험 0명)</span></span>
<span class="line"><span>- 요구사항: SSR/SEO 필수, 국제화(i18n), 접근성(a11y), 실시간 재고 표시</span></span>
<span class="line"><span>- 일정: MVP 3개월</span></span>
<span class="line"><span>- 기존 백엔드: REST API (Django)</span></span>
<span class="line"><span>- 트래픽: 일 PV 200만, 피크 시 동시접속 5,000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>비교 대상: Next.js (React), Nuxt (Vue), SvelteKit, Angular Universal</span></span>
<span class="line"><span></span></span>
<span class="line"><span>분석 항목:</span></span>
<span class="line"><span>1. 기술 역량 매칭 (우리 팀이 얼마나 빨리 생산성을 낼 수 있는가)</span></span>
<span class="line"><span>2. SSR/SEO 성숙도</span></span>
<span class="line"><span>3. 이커머스 생태계 (결제, 장바구니, 검색 관련 라이브러리)</span></span>
<span class="line"><span>4. 성능 벤치마크 (번들 크기, TTI, LCP)</span></span>
<span class="line"><span>5. 채용 시장 (한국 기준 개발자 수급)</span></span>
<span class="line"><span>6. 장기 유지보수 (커뮤니티 크기, 메이저 버전 호환성 역사)</span></span>
<span class="line"><span>7. 리스크 분석</span></span>
<span class="line"><span></span></span>
<span class="line"><span>산출물:</span></span>
<span class="line"><span>- \`docs/analysis/frontend-framework-comparison.md\` — 전체 분석서</span></span>
<span class="line"><span>- 마지막에 최종 추천과 근거 요약 (한 페이지 분량)</span></span>
<span class="line"><span>- 비개발자도 이해할 수 있는 요약 표 포함</span></span></code></pre></div><h3 id="평가-포인트-2" tabindex="-1">평가 포인트 <a class="header-anchor" href="#평가-포인트-2" aria-label="Permalink to &quot;평가 포인트&quot;">​</a></h3><ul><li>[ ] 비개발자 관점의 설명이 포함되어 있는지</li><li>[ ] 팀 상황(React 경험 2명)이 추천에 반영되는지</li><li>[ ] 한국 채용 시장에 대한 현실적 분석</li><li>[ ] 벤치마크 데이터의 신뢰성</li><li>[ ] 최종 추천의 논리적 일관성</li><li>[ ] 전체 분량과 구조의 적절성</li></ul><hr><h2 id="dw-04-api-문서화" tabindex="-1">DW-04. API 문서화 ⭐⭐ <a class="header-anchor" href="#dw-04-api-문서화" aria-label="Permalink to &quot;DW-04. API 문서화 :star::star:&quot;">​</a></h2><h3 id="시나리오-배경-3" tabindex="-1">시나리오 배경 <a class="header-anchor" href="#시나리오-배경-3" aria-label="Permalink to &quot;시나리오 배경&quot;">​</a></h3><p>코드에서 API 스펙을 추출하여 개발자 친화적인 문서를 자동 생성하는 능력 평가.</p><h3 id="프롬프트-3" tabindex="-1">프롬프트 <a class="header-anchor" href="#프롬프트-3" aria-label="Permalink to &quot;프롬프트&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>아래 Express 라우터 코드를 보고 완전한 API 문서를 만들어줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>먼저 \`api_routes.js\` 파일을 아래 내용으로 생성해:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`javascript</span></span>
<span class="line"><span>const router = require(&#39;express&#39;).Router();</span></span>
<span class="line"><span>const auth = require(&#39;../middleware/auth&#39;);</span></span>
<span class="line"><span>const rateLimit = require(&#39;../middleware/rateLimit&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.post(&#39;/teams&#39;, auth(&#39;admin&#39;), async (req, res) =&gt; {</span></span>
<span class="line"><span>  // body: { name, description?, maxMembers? (default 10, max 50) }</span></span>
<span class="line"><span>  // 201: { id, name, description, maxMembers, createdAt, owner: req.user.id }</span></span>
<span class="line"><span>  // 400: name 누락 or maxMembers &gt; 50</span></span>
<span class="line"><span>  // 409: name 중복</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.get(&#39;/teams&#39;, auth(), async (req, res) =&gt; {</span></span>
<span class="line"><span>  // query: page, limit (default 20, max 100), search?, sortBy (name|createdAt|memberCount)</span></span>
<span class="line"><span>  // 200: { data: [...], pagination: { page, limit, total, totalPages } }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.get(&#39;/teams/:teamId&#39;, auth(), async (req, res) =&gt; {</span></span>
<span class="line"><span>  // 200: { ...team, members: [{ id, name, role, joinedAt }], stats: { projectCount, taskCount } }</span></span>
<span class="line"><span>  // 403: 팀 멤버가 아닌 경우</span></span>
<span class="line"><span>  // 404: 존재하지 않는 팀</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.post(&#39;/teams/:teamId/members&#39;, auth(&#39;admin&#39;, &#39;teamLead&#39;), async (req, res) =&gt; {</span></span>
<span class="line"><span>  // body: { userId, role: &#39;member&#39;|&#39;teamLead&#39; }</span></span>
<span class="line"><span>  // 201: { teamId, userId, role, joinedAt }</span></span>
<span class="line"><span>  // 400: 이미 멤버인 경우</span></span>
<span class="line"><span>  // 403: 권한 없음</span></span>
<span class="line"><span>  // 422: maxMembers 초과</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.delete(&#39;/teams/:teamId/members/:userId&#39;, auth(&#39;admin&#39;, &#39;teamLead&#39;), async (req, res) =&gt; {</span></span>
<span class="line"><span>  // 204: 성공</span></span>
<span class="line"><span>  // 403: teamLead가 다른 teamLead를 제거하려는 경우</span></span>
<span class="line"><span>  // 404: 멤버가 아닌 경우</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.post(&#39;/teams/:teamId/projects&#39;, auth(&#39;teamLead&#39;), rateLimit(10, &#39;1h&#39;), async (req, res) =&gt; {</span></span>
<span class="line"><span>  // body: { name, description?, deadline? (ISO 8601), priority: &#39;low&#39;|&#39;medium&#39;|&#39;high&#39;|&#39;critical&#39; }</span></span>
<span class="line"><span>  // 201: { id, name, teamId, priority, deadline, createdBy, createdAt }</span></span>
<span class="line"><span>  // 429: rate limit 초과</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>문서 요구사항:</p><ul><li>Markdown 형식, <code>docs/api/teams-api.md</code>에 저장</li><li>각 엔드포인트별: HTTP 메서드, URL, 인증 요구사항, 요청/응답 예시 (JSON)</li><li>에러 코드별 응답 예시 모두 포함</li><li>인증 방식 설명 (Bearer Token 가정)</li><li>Rate Limit 정책 설명</li><li>cURL 예시 포함 (각 엔드포인트 1개씩)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] 주석에서 스펙을 정확히 추출했는지</span></span>
<span class="line"><span>- [ ] 요청/응답 JSON 예시의 완성도</span></span>
<span class="line"><span>- [ ] 에러 응답 커버리지</span></span>
<span class="line"><span>- [ ] cURL 예시의 정확성 (실행 가능 수준)</span></span>
<span class="line"><span>- [ ] 인증, Rate Limit 등 횡단 관심사 문서화</span></span>
<span class="line"><span>- [ ] 문서의 일관된 구조</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## DW-05. 온보딩 가이드 작성 :star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>새로운 팀원이 프로젝트에 빠르게 적응할 수 있는 온보딩 문서 작성 능력 평가.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>우리 프로젝트에 새로 합류한 백엔드 개발자를 위한 온보딩 가이드를 만들어줘.</p><p>프로젝트 정보:</p><ul><li>서비스명: CloudNote (클라우드 기반 노트 앱)</li><li>스택: Go (Gin), PostgreSQL, Redis, gRPC (내부 통신), Docker, K8s</li><li>아키텍처: 마이크로서비스 6개 (auth, note, search, notification, billing, gateway)</li><li>레포: 모노레포 (각 서비스가 /services/{name}/ 아래)</li><li>CI/CD: GitHub Actions → ArgoCD</li><li>환경: local (Docker Compose), staging, production</li></ul><p>가이드에 포함할 내용:</p><ol><li>Day 1 — 개발환경 셋업 (필요한 도구 목록, 설치 순서, 환경변수 설정)</li><li>Day 2~3 — 코드베이스 탐색 가이드 (어디서부터 읽을지, 핵심 파일 경로, 데이터 흐름)</li><li>Day 4~5 — 첫 번째 태스크 (간단한 API 추가 task를 step-by-step으로)</li><li>Week 2 — 심화 (gRPC 통신 이해, DB 마이그레이션 절차, 로깅 컨벤션)</li><li>자주 하는 실수 &amp; 트러블슈팅 (경험에서 나올 법한 것들)</li><li>핵심 연락처 &amp; 리소스 (가상의 Slack 채널, Wiki 링크 등)</li></ol><p>파일명: <code>docs/onboarding/backend-dev-guide.md</code> 톤: 친근하지만 정확하게. 주니어 개발자도 따라할 수 있도록 구체적으로.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] Day별 구성의 현실성</span></span>
<span class="line"><span>- [ ] 명령어 수준의 구체성 (복붙으로 따라할 수 있는지)</span></span>
<span class="line"><span>- [ ] 모노레포 + 마이크로서비스 구조에 맞는 탐색 가이드</span></span>
<span class="line"><span>- [ ] &quot;자주 하는 실수&quot;의 현실성 (실제 개발 경험 반영)</span></span>
<span class="line"><span>- [ ] 톤의 적절성 (너무 딱딱하지도, 너무 가볍지도 않게)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## DW-06. 기술 블로그 포스트 :star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>기술 블로그 포스트 작성. 기술적 정확성과 readability의 균형이 핵심.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>기술 블로그 포스트를 작성해줘.</p><p>주제: &quot;우리 팀이 Redis를 잘못 쓰고 있었던 3가지&quot;</p><p>요구사항:</p><ul><li>독자: 주니어~미드 레벨 백엔드 개발자</li><li>톤: 경험에서 나온 교훈을 공유하는 느낌 (겸손하면서도 인사이트 있게)</li><li>분량: 약 2000~3000자 (한국어 기준)</li><li>구조: <ol><li>도입 — Redis를 캐시로만 쓰던 우리 팀의 이야기</li><li>실수 1: 캐시 만료 정책 없이 무한정 쌓기 (메모리 OOM 장애)</li><li>실수 2: 분산 락으로 Redis 쓰면서 TTL 설정 안 함 (데드락)</li><li>실수 3: Redis를 Primary DB처럼 의존 (재시작 시 데이터 유실)</li><li>각 실수별: 뭐가 문제였는지 → 어떻게 터졌는지 → 어떻게 고쳤는지</li><li>결론: Redis를 올바르게 쓰기 위한 체크리스트</li></ol></li><li>코드 예시 포함 (잘못된 코드 vs 개선된 코드)</li><li>SEO를 위한 메타 설명(description) 1줄도 추가</li></ul><p>파일명: <code>docs/blog/redis-mistakes.md</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] 기술적 사실의 정확성</span></span>
<span class="line"><span>- [ ] 스토리텔링 품질 (읽는 재미)</span></span>
<span class="line"><span>- [ ] 코드 예시의 현실성</span></span>
<span class="line"><span>- [ ] 체크리스트의 실용성</span></span>
<span class="line"><span>- [ ] 한국어 문장 품질 (자연스러움)</span></span>
<span class="line"><span>- [ ] 적절한 분량 (2000~3000자)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## DW-07. 변경 영향도 분석서 :star::star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>대규모 변경(마이그레이션, 의존성 업그레이드 등) 전 영향도를 분석하는 문서. 리스크 식별과 완화 방안이 핵심.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>Python 2 → Python 3 마이그레이션 영향도 분석서를 작성해줘.</p><p>상황:</p><ul><li>서비스: 6년된 데이터 파이프라인 (ETL)</li><li>코드 규모: Python 파일 약 350개, 총 8만 라인</li><li>주요 의존성: pandas 0.24, SQLAlchemy 1.2, boto3, paramiko, xlrd</li><li>스케줄: crontab으로 매일 50개 이상의 잡 실행</li><li>팀: Python 개발자 4명 (3 → 마이그레이션 작업, 1 → 기존 유지보수)</li><li>마이그레이션 기한: 3개월 (Python 2 EOL 대응 지연)</li></ul><p>분석 항목:</p><ol><li>영향 범위 — 주요 호환성 이슈 카테고리별 정리 (print문, unicode, dict 메서드, 나눗셈, import 변경 등)</li><li>의존성 호환성 매트릭스 — 각 패키지의 Python 3 호환 버전</li><li>리스크 등급 (상/중/하) 별 이슈 분류</li><li>마이그레이션 전략 — Big Bang vs 점진적, 추천 근거</li><li>테스트 전략 — 무엇을 어떻게 검증할 것인가</li><li>롤백 계획 — 마이그레이션 실패 시 복구 방법</li><li>일정 계획 — 3개월을 주 단위로 세분화</li><li>비용 산정 — 인건비, 다운타임, 리스크 비용 추정</li></ol><p>파일명: <code>docs/analysis/python2-migration-impact.md</code> 비개발자 이해관계자(PO, PM)도 리스크 섹션은 이해할 수 있어야 함.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] Python 2→3 호환성 이슈의 정확성과 포괄성</span></span>
<span class="line"><span>- [ ] 의존성 호환 매트릭스의 정확성</span></span>
<span class="line"><span>- [ ] 리스크 분류의 합리성</span></span>
<span class="line"><span>- [ ] 마이그레이션 전략 추천의 논리성</span></span>
<span class="line"><span>- [ ] 일정의 현실성 (3개월 4인 팀으로 8만 라인)</span></span>
<span class="line"><span>- [ ] 비개발자 대상 소통 능력</span></span></code></pre></div>`,57)])])}const u=s(e,[["render",i]]);export{m as __pageData,u as default};
