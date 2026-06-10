import{_ as a,o as n,c as i,a2 as p}from"./chunks/framework.DvFsUg-r.js";const E=JSON.parse('{"title":"CAT-05. 데이터 처리 & 분석","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"hermes/benchmark/data-analysis.md","filePath":"hermes/benchmark/data-analysis.md","lastUpdated":1781092690000}'),l={name:"hermes/benchmark/data-analysis.md"};function e(t,s,h,k,d,c){return n(),i("div",null,[...s[0]||(s[0]=[p(`<h1 id="cat-05-데이터-처리-분석" tabindex="-1">CAT-05. 데이터 처리 &amp; 분석 <a class="header-anchor" href="#cat-05-데이터-처리-분석" aria-label="Permalink to &quot;CAT-05. 데이터 처리 &amp; 분석&quot;">​</a></h1><blockquote><p><strong>평가 핵심</strong>: 에이전트가 비정형 데이터를 파싱·변환·분석하고, 의미 있는 인사이트를 도출할 수 있는가?</p></blockquote><h2 id="난이도-범례" tabindex="-1">난이도 범례 <a class="header-anchor" href="#난이도-범례" aria-label="Permalink to &quot;난이도 범례&quot;">​</a></h2><table tabindex="0"><thead><tr><th>레벨</th><th>의미</th><th>예상 소요</th></tr></thead><tbody><tr><td>⭐</td><td>기초 — 단일 형식, 단순 변환</td><td>2~3분</td></tr><tr><td>⭐⭐</td><td>중급 — 복수 형식, 통계 분석</td><td>3~5분</td></tr><tr><td>⭐⭐⭐</td><td>고급 — 복합 파이프라인, 시각화</td><td>5~10분</td></tr></tbody></table><hr><h2 id="da-01-csv-정제-통합" tabindex="-1">DA-01. CSV 정제 &amp; 통합 ⭐⭐ <a class="header-anchor" href="#da-01-csv-정제-통합" aria-label="Permalink to &quot;DA-01. CSV 정제 &amp; 통합 :star::star:&quot;">​</a></h2><h3 id="시나리오-배경" tabindex="-1">시나리오 배경 <a class="header-anchor" href="#시나리오-배경" aria-label="Permalink to &quot;시나리오 배경&quot;">​</a></h3><p>실무에서 가장 흔한 &quot;더러운 데이터&quot; 정리 작업.</p><h3 id="프롬프트" tabindex="-1">프롬프트 <a class="header-anchor" href="#프롬프트" aria-label="Permalink to &quot;프롬프트&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>3개의 CSV 파일을 정제하고 통합하는 Python 스크립트를 만들어줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>먼저 테스트용 CSV 파일 3개를 생성해:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. \`sales_2023.csv\` (500행)</span></span>
<span class="line"><span>   - columns: date, product_name, category, quantity, unit_price, customer_id</span></span>
<span class="line"><span>   - 더러운 데이터 포함: </span></span>
<span class="line"><span>     - 날짜 형식 혼재 (2023-01-15, 01/15/2023, Jan 15 2023)</span></span>
<span class="line"><span>     - quantity에 가끔 음수, 문자열(&quot;five&quot;), 빈 값</span></span>
<span class="line"><span>     - unit_price에 &quot;$1,234.56&quot; 형식과 &quot;1234.56&quot; 형식 혼재</span></span>
<span class="line"><span>     - 일부 행에 product_name이 대소문자 불일치 (&quot;iPhone&quot;, &quot;IPHONE&quot;, &quot;iphone&quot;)</span></span>
<span class="line"><span>     - customer_id에 가끔 NULL, N/A, - 등</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. \`sales_2024_q1.csv\` (200행)</span></span>
<span class="line"><span>   - 같은 컬럼이지만 컬럼명이 다름: date→sale_date, product_name→item, unit_price→price</span></span>
<span class="line"><span>   - UTF-8 BOM 인코딩</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. \`returns.csv\` (50행)</span></span>
<span class="line"><span>   - columns: return_date, order_date, product_name, quantity, reason</span></span>
<span class="line"><span>   - order_date가 sales의 date와 매칭됨</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`data_cleaner.py\`를 만들어:</span></span>
<span class="line"><span>1. 세 파일을 읽어서 컬럼명 통일</span></span>
<span class="line"><span>2. 데이터 정제:</span></span>
<span class="line"><span>   - 날짜를 YYYY-MM-DD로 통일</span></span>
<span class="line"><span>   - 수량: 음수→양수, 문자열→숫자 변환, 변환 불가→0</span></span>
<span class="line"><span>   - 가격: 통화 기호·쉼표 제거 후 float</span></span>
<span class="line"><span>   - 상품명: 소문자 통일 후 원래 케이스 매핑 테이블 적용</span></span>
<span class="line"><span>   - NULL 계열 값 통일 처리</span></span>
<span class="line"><span>3. 반품 데이터 조인 (판매 - 반품 = 순매출)</span></span>
<span class="line"><span>4. 정제 결과 요약 리포트:</span></span>
<span class="line"><span>   - 총 레코드 수 (원본 → 정제 후)</span></span>
<span class="line"><span>   - 수정된 값 수 (카테고리별)</span></span>
<span class="line"><span>   - 제거된 레코드 수와 이유</span></span>
<span class="line"><span>5. 정제된 데이터를 \`cleaned_sales.csv\`로 출력</span></span>
<span class="line"><span>6. 리포트를 \`cleaning_report.txt\`로 출력</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pandas 사용 가능하지만, 각 정제 단계를 함수로 분리해서 재사용 가능하게.</span></span></code></pre></div><h3 id="평가-포인트" tabindex="-1">평가 포인트 <a class="header-anchor" href="#평가-포인트" aria-label="Permalink to &quot;평가 포인트&quot;">​</a></h3><ul><li>[ ] 테스트 데이터 생성의 다양성 (실제 더러운 데이터를 잘 모사)</li><li>[ ] 날짜 파싱의 정확성 (3가지 형식 모두)</li><li>[ ] 컬럼명 매핑 로직</li><li>[ ] NULL 계열 값 통일 처리</li><li>[ ] 정제 리포트의 상세도</li><li>[ ] 함수 분리와 재사용 가능성</li></ul><hr><h2 id="da-02-json-로그-분석-대시보드" tabindex="-1">DA-02. JSON 로그 분석 &amp; 대시보드 ⭐⭐⭐ <a class="header-anchor" href="#da-02-json-로그-분석-대시보드" aria-label="Permalink to &quot;DA-02. JSON 로그 분석 &amp; 대시보드 :star::star::star:&quot;">​</a></h2><h3 id="시나리오-배경-1" tabindex="-1">시나리오 배경 <a class="header-anchor" href="#시나리오-배경-1" aria-label="Permalink to &quot;시나리오 배경&quot;">​</a></h3><p>대량의 JSON 로그를 분석하고 HTML 대시보드를 생성.</p><h3 id="프롬프트-1" tabindex="-1">프롬프트 <a class="header-anchor" href="#프롬프트-1" aria-label="Permalink to &quot;프롬프트&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>API 서버 로그를 분석하고 HTML 대시보드를 만들어줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1단계] \`generate_logs.py\` — 테스트 로그 생성</span></span>
<span class="line"><span>- 10,000건의 JSON 로그를 \`api_logs.jsonl\`에 생성 (JSON Lines 형식)</span></span>
<span class="line"><span>- 각 로그:</span></span>
<span class="line"><span>  \`\`\`json</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;timestamp&quot;: &quot;2024-03-15T09:30:45.123Z&quot;,</span></span>
<span class="line"><span>    &quot;method&quot;: &quot;GET|POST|PUT|DELETE&quot;,</span></span>
<span class="line"><span>    &quot;path&quot;: &quot;/api/users|/api/orders|/api/products|/api/auth/login|/api/search&quot;,</span></span>
<span class="line"><span>    &quot;status_code&quot;: 200|201|400|401|403|404|500|503,</span></span>
<span class="line"><span>    &quot;response_time_ms&quot;: 15~5000,</span></span>
<span class="line"><span>    &quot;user_id&quot;: &quot;user_1~user_500&quot; 또는 null,</span></span>
<span class="line"><span>    &quot;user_agent&quot;: &quot;다양한 브라우저/봇&quot;,</span></span>
<span class="line"><span>    &quot;request_size_bytes&quot;: 0~50000,</span></span>
<span class="line"><span>    &quot;response_size_bytes&quot;: 100~500000</span></span>
<span class="line"><span>  }</span></span></code></pre></div><ul><li>현실적 분포: 200이 70%, 404가 10%, 500이 5%, 나머지 15%</li><li>시간대별 트래픽: 오전 9~12시 피크, 새벽 2~5시 최저</li><li>가끔 500 에러 burst (연속 50건) 삽입 — 장애 시뮬레이션</li></ul><p>[2단계] <code>analyze_logs.py</code> — 분석 스크립트 분석 항목:</p><ol><li>전체 요약: 총 요청 수, 성공률, 평균/P50/P95/P99 응답시간</li><li>엔드포인트별: 요청 수, 평균 응답시간, 에러율</li><li>시간대별 트래픽 분포 (1시간 단위)</li><li>에러 분석: 상태코드별 빈도, 에러 집중 시간대</li><li>사용자 분석: 가장 활발한 사용자 TOP 10, 인증 없는 요청 비율</li><li>성능 이상 감지: 응답시간 P95 이상인 요청의 패턴</li><li>장애 구간 자동 감지: 500 에러가 1분 내 10건 이상 연속된 구간</li></ol><p>[3단계] <code>dashboard.html</code> — 분석 결과 시각화</p><ul><li>Chart.js 또는 순수 SVG로 차트 생성</li><li>포함할 차트: <ul><li>시간대별 요청 수 (라인 차트)</li><li>상태코드 분포 (도넛 차트)</li><li>엔드포인트별 응답시간 (바 차트)</li><li>장애 구간 하이라이트 (타임라인)</li></ul></li><li>다크 테마, 반응형</li><li>analyze_logs.py가 JSON으로 출력 → dashboard.html이 읽어서 렌더링</li></ul><p>모든 단계를 실행하는 <code>run.sh</code> 포함.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] 로그 생성의 현실적 분포</span></span>
<span class="line"><span>- [ ] P50/P95/P99 계산 정확성</span></span>
<span class="line"><span>- [ ] 장애 구간 자동 감지 알고리즘</span></span>
<span class="line"><span>- [ ] 차트의 정보 전달력</span></span>
<span class="line"><span>- [ ] HTML 대시보드의 완성도</span></span>
<span class="line"><span>- [ ] 파이프라인(생성→분석→시각화)의 연결성</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## DA-03. 정규표현식으로 비정형 데이터 추출 :star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>비정형 텍스트에서 구조화된 데이터를 추출.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>비정형 텍스트에서 구조화된 데이터를 추출하는 스크립트를 만들어줘.</p><p><code>sample_emails.txt</code>를 만들어 (가상의 이메일 10통 내용):</p><ul><li>주문 확인 이메일, 배송 추적 이메일, 청구서 이메일 등 혼합</li><li>각 이메일에는: 주문번호, 금액, 날짜, 주소, 연락처 등이 다양한 형식으로 포함</li><li>형식 예시: <ul><li>&quot;주문번호: ORD-2024-001234&quot;</li><li>&quot;Order #001234&quot;</li><li>&quot;주문번호 001234을 확인해주세요&quot;</li><li>&quot;₩1,234,567&quot;, &quot;$1,234.56&quot;, &quot;1234567원&quot;</li><li>&quot;010-1234-5678&quot;, &quot;01012345678&quot;, &quot;+82-10-1234-5678&quot;</li><li>&quot;2024년 3월 15일&quot;, &quot;2024-03-15&quot;, &quot;Mar 15, 2024&quot;</li></ul></li></ul><p><code>email_parser.py</code>를 만들어:</p><ol><li>각 이메일을 분리 (구분자: &quot;---&quot; 또는 &quot;From:&quot; 라인)</li><li>각 이메일에서 추출: <ul><li>주문번호 (다양한 형식 대응)</li><li>금액 (원화/달러, 다양한 포맷)</li><li>전화번호 (다양한 형식 → 010-XXXX-XXXX로 통일)</li><li>날짜 (다양한 형식 → YYYY-MM-DD로 통일)</li><li>이메일 주소</li></ul></li><li>추출 결과를 JSON과 CSV로 출력</li><li>추출 신뢰도 표시 (패턴 매칭 확실성에 따라 high/medium/low)</li><li>추출 못 한 필드는 null이 아닌 이유와 함께 표시</li></ol><p>테스트: 위 파서가 10통 모두에서 올바르게 추출하는지 검증하는 테스트 코드.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] 다양한 주문번호 형식 대응</span></span>
<span class="line"><span>- [ ] 금액 파싱의 정확성 (원화/달러, 쉼표/단위)</span></span>
<span class="line"><span>- [ ] 전화번호 정규화</span></span>
<span class="line"><span>- [ ] 날짜 형식 통일</span></span>
<span class="line"><span>- [ ] 신뢰도 표시의 합리성</span></span>
<span class="line"><span>- [ ] 테스트 커버리지</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## DA-04. SQL 쿼리 생성 &amp; 최적화 :star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>자연어 요구사항을 SQL로 변환하고 최적화하는 능력.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>아래 스키마와 요구사항으로 SQL 쿼리를 작성해줘. SQLite로 실행 가능해야 해.</p><p>먼저 <code>schema.sql</code>을 만들어:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> users</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INTEGER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TEXT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    email </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TEXT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> UNIQUE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    department </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TEXT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hire_date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    salary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DECIMAL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    manager_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INTEGER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> REFERENCES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users(id),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    is_active </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BOOLEAN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> DEFAULT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> projects</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INTEGER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TEXT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    department </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TEXT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    budget </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DECIMAL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    start_date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> DATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    end_date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    status</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TEXT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> CHECK</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">status</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> IN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;planning&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;completed&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cancelled&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> assignments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INTEGER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> REFERENCES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users(id),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    project_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INTEGER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> REFERENCES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> projects(id),</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TEXT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> CHECK</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> IN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;lead&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;member&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;reviewer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hours_allocated </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DECIMAL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (user_id, project_id)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timesheets</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INTEGER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INTEGER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> REFERENCES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users(id),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    project_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INTEGER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> REFERENCES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> projects(id),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    work_date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hours_worked </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DECIMAL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TEXT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>테스트 데이터도 생성: users 50명, projects 20개, assignments 100개, timesheets 1000개</p><p>그리고 아래 자연어 요구사항 각각에 대해 SQL 쿼리를 작성:</p><p>Q1. &quot;각 부서별로, 현재 활성화된 프로젝트 수와 해당 프로젝트에 배정된 인원 수를 보여줘. 프로젝트가 없는 부서도 포함.&quot;</p><p>Q2. &quot;매니저별로 직속 부하 중 가장 급여가 높은 사람과 낮은 사람의 차이를 구하고, 차이가 큰 순으로 정렬해줘. 매니저 이름도 같이 보여줘.&quot;</p><p>Q3. &quot;지난 3개월간, 프로젝트별로 배정된 시간(hours_allocated) 대비 실제 작업 시간(hours_worked)의 비율을 구해줘. 150% 이상인 프로젝트는 &#39;초과&#39;, 80% 미만은 &#39;미달&#39;로 표시.&quot;</p><p>Q4. &quot;한 번도 프로젝트에 참여하지 않은 활성 사용자 목록과, 3개 이상 프로젝트에 동시 참여 중인 사용자 목록을 각각 구해줘.&quot;</p><p>Q5. &quot;부서별 월별 총 작업시간 추이를 보여주는 pivot-like 결과를 만들어줘 (최근 6개월).&quot;</p><p>각 쿼리를 <code>queries.sql</code>에 작성하고:</p><ul><li>각 쿼리 위에 주석으로 설명</li><li>인덱스 추천 (이 쿼리를 자주 실행한다면 어떤 인덱스?)</li><li>실행 결과를 확인하는 <code>run_queries.py</code> 작성 (SQLite에서 실행, 결과 출력)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] SQL 문법 정확성 (SQLite 호환)</span></span>
<span class="line"><span>- [ ] Q1: LEFT JOIN 활용</span></span>
<span class="line"><span>- [ ] Q2: 셀프 조인 + 집계</span></span>
<span class="line"><span>- [ ] Q3: 비율 계산 + CASE 구분</span></span>
<span class="line"><span>- [ ] Q4: NOT EXISTS / HAVING COUNT &gt;= 3</span></span>
<span class="line"><span>- [ ] Q5: 피벗 쿼리 구현 (CASE WHEN 활용)</span></span>
<span class="line"><span>- [ ] 인덱스 추천의 합리성</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## DA-05. 시계열 데이터 이상 탐지 :star::star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>모니터링 데이터에서 이상을 자동 탐지하는 알고리즘 구현.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>서버 모니터링 메트릭에서 이상치를 탐지하는 Python 프로그램을 만들어줘.</p><p>[1단계] <code>generate_metrics.py</code> — 시계열 데이터 생성</p><ul><li>7일간의 서버 메트릭 (1분 간격 = 10,080 데이터 포인트)</li><li>메트릭: <ul><li>cpu_percent: 기본 20~40%, 주간(9~18시) 40~70%, 피크(점심) 60~80%</li><li>memory_percent: 서서히 증가 트렌드 (memory leak 시뮬레이션)</li><li>request_count: 시간대별 사인파 패턴</li><li>error_rate: 기본 0.1~0.5%, 가끔 스파이크(5~20%)</li><li>response_time_ms: 기본 50~200ms, CPU 높을 때 비례 증가</li></ul></li><li>의도적 이상 삽입 (각각 다른 날에): <ul><li>Day 2: CPU 급등 (95%+ 30분간)</li><li>Day 4: Memory 급증 (70→95% 2시간에 걸쳐)</li><li>Day 5: Error rate 폭발 (15%+ 1시간)</li><li>Day 6: Response time 점진적 악화 (2시간에 걸쳐 50ms→2000ms)</li></ul></li><li><code>metrics.csv</code>로 출력</li></ul><p>[2단계] <code>anomaly_detector.py</code> — 이상 탐지 3가지 알고리즘 구현:</p><ol><li>Z-Score 기반: 이동 평균 ± 3σ 벗어나면 이상</li><li>IQR 기반: 이동 윈도우의 Q1-1.5<em>IQR ~ Q3+1.5</em>IQR 밖이면 이상</li><li>변화율 기반: 이전 구간 대비 급격한 변화 (기울기) 감지</li></ol><p>각 알고리즘이:</p><ul><li>이상 구간의 시작/끝 시간</li><li>이상 심각도 (warning / critical)</li><li>영향받은 메트릭 을 출력</li></ul><p>[3단계] <code>report.py</code> — 분석 리포트</p><ul><li>각 알고리즘의 탐지 결과 비교</li><li>정밀도/재현율 계산 (의도적으로 삽입한 이상 = ground truth)</li><li>어떤 알고리즘이 어떤 유형의 이상에 강한지 분석</li><li>결과를 <code>anomaly_report.md</code>로 출력</li></ul><p>외부 패키지 최소화: numpy만 허용 (pandas, sklearn 등 사용 금지)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] 시계열 데이터 생성의 현실성</span></span>
<span class="line"><span>- [ ] 의도적 이상 삽입의 다양성</span></span>
<span class="line"><span>- [ ] Z-Score 이동 평균 구현 정확성</span></span>
<span class="line"><span>- [ ] IQR 기반 탐지 구현</span></span>
<span class="line"><span>- [ ] 변화율 감지 알고리즘</span></span>
<span class="line"><span>- [ ] 정밀도/재현율 계산의 정확성</span></span>
<span class="line"><span>- [ ] 알고리즘 비교 분석의 깊이</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## DA-06. 웹 스크레이핑 → 구조화 :star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>HTML 파싱과 데이터 구조화 능력. (실제 웹 접근 없이 HTML 파일로 시뮬레이션)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>HTML 페이지에서 데이터를 추출해서 구조화하는 스크립트를 만들어줘.</p><p>먼저 <code>sample_page.html</code>을 만들어 — 가상의 부동산 매물 목록 페이지:</p><ul><li>매물 20개 (아파트, 오피스텔, 빌라 혼합)</li><li>각 매물: 이름, 가격(3억 2,000만원 / 월세 50/30 형식), 면적(84㎡/25평), 위치, 층수, 방수/화장실수, 입주가능일, 특징 태그</li><li>일부 매물은 가격이 &quot;가격 문의&quot;</li><li>HTML 구조는 일관되지 않음: <ul><li>일부는 <code>&lt;div class=&quot;item&quot;&gt;</code>, 일부는 <code>&lt;article class=&quot;listing&quot;&gt;</code></li><li>가격 형식이 제각각</li><li>면적이 ㎡만 있거나 평만 있거나 둘 다</li></ul></li></ul><p><code>scraper.py</code>를 만들어 (BeautifulSoup 사용 가능):</p><ol><li>HTML에서 모든 매물 추출</li><li>데이터 정규화: <ul><li>가격: 모두 &quot;만원&quot; 단위 숫자로 (월세는 보증금/월세 분리)</li><li>면적: ㎡과 평 둘 다 계산 (1평 = 3.3058㎡)</li><li>입주가능일: YYYY-MM-DD 형식</li></ul></li><li>추출 결과를 JSON으로 저장 (<code>properties.json</code>)</li><li>간단한 분석: <ul><li>유형별 평균 가격</li><li>평당 가격 순위</li><li>지역별 매물 수</li></ul></li><li>분석 결과를 markdown 테이블로 출력</li></ol><p>비정형 HTML 대응 전략:</p><ul><li>두 가지 이상의 CSS 셀렉터를 시도</li><li>파싱 실패 시 해당 필드 건너뛰고 로그 출력</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] HTML 생성의 현실성 (비일관적 구조)</span></span>
<span class="line"><span>- [ ] 복수 CSS 셀렉터 대응</span></span>
<span class="line"><span>- [ ] 한국 부동산 가격 형식 파싱</span></span>
<span class="line"><span>- [ ] ㎡↔평 변환 정확성</span></span>
<span class="line"><span>- [ ] 파싱 실패 시 graceful 처리</span></span>
<span class="line"><span>- [ ] 분석 결과의 유용성</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## DA-07. 엑셀 리포트 자동 생성 :star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>데이터를 처리하여 서식이 적용된 엑셀 리포트를 생성하는 능력.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>월간 매출 리포트를 엑셀로 자동 생성하는 Python 스크립트를 만들어줘.</p><p>입력 데이터: <code>monthly_sales.json</code>을 만들어 (가상 데이터):</p><ul><li>12개월간 데이터</li><li>카테고리 5개 (전자제품, 의류, 식품, 가구, 스포츠)</li><li>지역 4개 (서울, 부산, 대구, 광주)</li><li>각 조합별: 매출액, 주문건수, 반품건수, 신규고객수</li></ul><p><code>generate_report.py</code> (openpyxl 사용):</p><p>Sheet 1 — &quot;요약&quot;:</p><ul><li>월별 총 매출 테이블 (서식: 헤더 파랑 배경, 숫자에 천단위 콤마, 음수는 빨강)</li><li>전월 대비 증감률 컬럼 (상승↑ 초록, 하락↓ 빨강)</li><li>하단에 연간 합계, 평균, 최대/최소 월</li></ul><p>Sheet 2 — &quot;카테고리별&quot;:</p><ul><li>카테고리 × 월 매트릭스</li><li>조건부 서식: 매출 상위 20% 셀 → 초록 배경, 하위 20% → 빨강 배경</li><li>각 카테고리별 연간 합계</li></ul><p>Sheet 3 — &quot;지역별&quot;:</p><ul><li>지역 × 카테고리 크로스탭</li><li>열 너비 자동 조정</li><li>테두리 적용</li></ul><p>Sheet 4 — &quot;트렌드&quot;:</p><ul><li>월별 총 매출 라인 차트</li><li>카테고리별 매출 스택 바 차트</li><li>차트 제목, 범례, 축 라벨 포함</li></ul><p>파일명: <code>monthly_report_2024.xlsx</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] 테스트 데이터 생성의 현실성</span></span>
<span class="line"><span>- [ ] 셀 서식 (색상, 폰트, 정렬) 적용</span></span>
<span class="line"><span>- [ ] 조건부 서식 구현</span></span>
<span class="line"><span>- [ ] 수식 사용 (SUM, AVERAGE 등)</span></span>
<span class="line"><span>- [ ] 차트 생성 및 설정</span></span>
<span class="line"><span>- [ ] 열 너비 자동 조정</span></span></code></pre></div>`,78)])])}const o=a(l,[["render",e]]);export{E as __pageData,o as default};
