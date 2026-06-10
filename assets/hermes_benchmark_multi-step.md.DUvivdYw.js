import{_ as i,o as a,c as n,a2 as p}from"./chunks/framework.DvFsUg-r.js";const c=JSON.parse('{"title":"CAT-04. 멀티스텝 추론 & 복합 태스크","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"hermes/benchmark/multi-step.md","filePath":"hermes/benchmark/multi-step.md","lastUpdated":1781092690000}'),l={name:"hermes/benchmark/multi-step.md"};function t(e,s,h,k,E,r){return a(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="cat-04-멀티스텝-추론-복합-태스크" tabindex="-1">CAT-04. 멀티스텝 추론 &amp; 복합 태스크 <a class="header-anchor" href="#cat-04-멀티스텝-추론-복합-태스크" aria-label="Permalink to &quot;CAT-04. 멀티스텝 추론 &amp; 복합 태스크&quot;">​</a></h1><blockquote><p><strong>평가 핵심</strong>: 에이전트가 <strong>여러 단계의 작업을 순서대로 계획·실행</strong>하고, 이전 단계의 결과를 다음 단계에 활용할 수 있는가?</p></blockquote><h2 id="난이도-범례" tabindex="-1">난이도 범례 <a class="header-anchor" href="#난이도-범례" aria-label="Permalink to &quot;난이도 범례&quot;">​</a></h2><table tabindex="0"><thead><tr><th>레벨</th><th>의미</th><th>예상 소요</th></tr></thead><tbody><tr><td>⭐</td><td>기초 — 2~3단계, 명확한 순서</td><td>2~3분</td></tr><tr><td>⭐⭐</td><td>중급 — 4~6단계, 조건부 분기 포함</td><td>3~5분</td></tr><tr><td>⭐⭐⭐</td><td>고급 — 7단계 이상, 동적 판단 필요</td><td>5~10분</td></tr></tbody></table><hr><h2 id="ms-01-코드베이스-분석-→-문서화-→-개선" tabindex="-1">MS-01. 코드베이스 분석 → 문서화 → 개선 ⭐⭐⭐ <a class="header-anchor" href="#ms-01-코드베이스-분석-→-문서화-→-개선" aria-label="Permalink to &quot;MS-01. 코드베이스 분석 → 문서화 → 개선 :star::star::star:&quot;">​</a></h2><h3 id="시나리오-배경" tabindex="-1">시나리오 배경 <a class="header-anchor" href="#시나리오-배경" aria-label="Permalink to &quot;시나리오 배경&quot;">​</a></h3><p>에이전트가 <strong>미지의 코드</strong>를 받아서 이해 → 문서화 → 개선까지 일관되게 수행하는지 본다.</p><h3 id="프롬프트" tabindex="-1">프롬프트 <a class="header-anchor" href="#프롬프트" aria-label="Permalink to &quot;프롬프트&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>아래 3단계를 순서대로 수행해줘. 각 단계의 결과가 다음 단계의 입력이야.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1단계: 코드 분석]</span></span>
<span class="line"><span>아래 코드를 \`mystery.py\`로 저장하고, 이 코드가 무엇을 하는지 분석해줘.</span></span>
<span class="line"><span>함수별로 무슨 역할인지, 전체 알고리즘이 뭔지 파악해.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>def f(s):</span></span>
<span class="line"><span>    t = {}</span></span>
<span class="line"><span>    for c in s:</span></span>
<span class="line"><span>        t[c] = t.get(c, 0) + 1</span></span>
<span class="line"><span>    return t</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def g(a, b):</span></span>
<span class="line"><span>    ta, tb = f(a), f(b)</span></span>
<span class="line"><span>    r = {}</span></span>
<span class="line"><span>    for k in set(ta) | set(tb):</span></span>
<span class="line"><span>        r[k] = max(ta.get(k, 0), tb.get(k, 0))</span></span>
<span class="line"><span>    return r</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def h(pool, target):</span></span>
<span class="line"><span>    need = f(target)</span></span>
<span class="line"><span>    have = f(pool)</span></span>
<span class="line"><span>    for k, v in need.items():</span></span>
<span class="line"><span>        if have.get(k, 0) &lt; v:</span></span>
<span class="line"><span>            return False</span></span>
<span class="line"><span>    return True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def solve(words, letters):</span></span>
<span class="line"><span>    from itertools import combinations</span></span>
<span class="line"><span>    best = []</span></span>
<span class="line"><span>    for r in range(1, len(words) + 1):</span></span>
<span class="line"><span>        for combo in combinations(words, r):</span></span>
<span class="line"><span>            used = {}</span></span>
<span class="line"><span>            for w in combo:</span></span>
<span class="line"><span>                used = g(&#39;&#39;.join(used.keys() * (lambda d: max(d.values()) if d else 0)(used)), w) if used else f(w)</span></span>
<span class="line"><span>            total = {}</span></span>
<span class="line"><span>            for w in combo:</span></span>
<span class="line"><span>                for c in w:</span></span>
<span class="line"><span>                    total[c] = total.get(c, 0) + 1</span></span>
<span class="line"><span>            if h(letters, &#39;&#39;.join(c * v for c, v in total.items())):</span></span>
<span class="line"><span>                score = sum(len(w) for w in combo)</span></span>
<span class="line"><span>                if score &gt; sum(len(w) for w in best):</span></span>
<span class="line"><span>                    best = list(combo)</span></span>
<span class="line"><span>    return best</span></span></code></pre></div><p>[2단계: 문서화] 1단계에서 분석한 내용을 바탕으로:</p><ul><li>각 함수에 docstring 추가</li><li>변수명을 의미 있게 리네이밍</li><li>전체 모듈의 목적을 설명하는 모듈 docstring 추가</li><li><code>documented_mystery.py</code>로 저장</li></ul><p>[3단계: 개선] 2단계 결과를 바탕으로:</p><ul><li>성능 문제 식별 (현재 시간 복잡도는?)</li><li>더 효율적인 알고리즘으로 <code>optimized_mystery.py</code> 작성</li><li>개선 전후를 비교하는 벤치마크 코드 포함</li><li>테스트 케이스 5개 이상 작성</li></ul><p>마지막에 <code>ANALYSIS.md</code>를 만들어서:</p><ul><li>각 단계에서 발견한 내용 요약</li><li>원본 → 문서화 → 최적화 과정의 변화 정리</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] 알고리즘 식별 정확성 (Scrabble-like 단어 조합 문제)</span></span>
<span class="line"><span>- [ ] 리네이밍의 적절성 (f→count_chars 등)</span></span>
<span class="line"><span>- [ ] 시간 복잡도 분석의 정확성 (O(2^n) 조합론적)</span></span>
<span class="line"><span>- [ ] 최적화 접근법의 합리성</span></span>
<span class="line"><span>- [ ] 단계 간 일관성 (2단계가 1단계 결과를 실제로 반영하는지)</span></span>
<span class="line"><span>- [ ] ANALYSIS.md의 단계별 요약 품질</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## MS-02. 데이터 마이그레이션 시뮬레이션 :star::star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>DB 스키마 변경 → 데이터 마이그레이션 → 검증의 전 과정을 수행.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>DB 마이그레이션 시뮬레이션을 해줘. SQLite를 사용할 거야.</p><p>[1단계: 기존 스키마 &amp; 데이터 생성] <code>old_schema.sql</code>을 만들어:</p><ul><li>users 테이블: id, name, email, address (전체 주소 한 컬럼)</li><li>orders 테이블: id, user_id, items (JSON 문자열: &quot;[{name, qty, price}]&quot;), total, created_at</li><li>테스트 데이터 50건씩 생성하는 <code>seed.py</code> 작성 (faker 없이 직접 생성, 한국 이름/주소)</li></ul><p>[2단계: 새 스키마 설계] 정규화된 <code>new_schema.sql</code>을 만들어:</p><ul><li>users: id, name, email</li><li>addresses: id, user_id, street, city, zipcode (address를 분리)</li><li>orders: id, user_id, status, created_at</li><li>order_items: id, order_id, product_name, quantity, unit_price (items JSON을 정규화)</li><li>적절한 인덱스, 외래키 제약조건 추가</li></ul><p>[3단계: 마이그레이션 스크립트] <code>migrate.py</code>를 만들어:</p><ul><li>old.db에서 new.db로 데이터 이동</li><li>address 파싱: &quot;서울시 강남구 역삼동 123-45&quot; → city=&quot;서울시 강남구&quot;, street=&quot;역삼동 123-45&quot; (다양한 주소 형식 대응)</li><li>items JSON 파싱 → order_items 레코드로 변환</li><li>파싱 실패 시 skip하지 말고 errors.log에 기록 후 계속</li><li>마이그레이션 진행률 표시 (프로그레스 바)</li></ul><p>[4단계: 검증] <code>validate.py</code>를 만들어:</p><ul><li>레코드 수 비교 (old vs new)</li><li>금액 합계 검증 (orders.total == sum of order_items)</li><li>누락 데이터 검출</li><li>검증 결과 리포트 출력</li></ul><p>전체를 실행하는 <code>run_all.sh</code>도 만들어줘.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] 한국 주소 파싱의 정확성</span></span>
<span class="line"><span>- [ ] JSON → 정규화 변환 로직</span></span>
<span class="line"><span>- [ ] 에러 핸들링 (파싱 실패 시 로깅)</span></span>
<span class="line"><span>- [ ] 검증 로직의 포괄성</span></span>
<span class="line"><span>- [ ] 4단계가 유기적으로 연결되는지</span></span>
<span class="line"><span>- [ ] run_all.sh의 단계별 실행과 에러 처리</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## MS-03. 장애 시나리오 분석 &amp; 대응 :star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>에이전트에게 장애 증상만 알려주고, 원인 추론 → 해결 → 예방을 수행하게 한다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>아래 장애 상황을 분석하고 대응해줘.</p><p>[증상]</p><ul><li>Node.js Express 서버가 배포 후 약 2시간 만에 응답 불가 상태</li><li>메모리 사용량이 배포 직후 200MB → 2시간 후 1.5GB까지 선형 증가</li><li>CPU는 정상 (5~10%)</li><li>에러 로그: &quot;FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory&quot;</li><li>배포에서 변경된 코드 (아래 파일 생성해):</li></ul><p><code>leaky_server.js</code>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> express</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;express&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> express</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cache</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> eventLog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  eventLog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    timestamp: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    method: req.method,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url: req.url,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    headers: req.headers,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ip: req.ip</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api/user/:id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> userId</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> req.params.id;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cache[userId]) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cache[userId] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      id: userId,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      data: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generateUserData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(userId),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      accessHistory: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  cache[userId].accessHistory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    timestamp: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    headers: req.headers</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cache[userId]);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> generateUserData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`User \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    preferences: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      key: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`pref_\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`value_\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}_\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Math</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">random</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">()</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>[요구사항] 1단계: 메모리 누수 원인을 모두 찾아서 <code>DIAGNOSIS.md</code>에 정리 2단계: 수정된 <code>fixed_server.js</code>를 만들어 (동일 기능 유지, 누수 제거) 3단계: 메모리 누수를 감지하는 헬스체크 미들웨어 추가 4단계: 향후 유사 문제를 예방하기 위한 모니터링 설정을 <code>monitoring_setup.md</code>로 작성</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] 메모리 누수 원인 식별 (eventLog 무한 증가, cache 무한 증가, accessHistory 무한 증가)</span></span>
<span class="line"><span>- [ ] headers 객체 저장 문제 인식 (거대한 객체 참조)</span></span>
<span class="line"><span>- [ ] 수정의 적절성 (TTL 캐시, 로그 로테이션, 크기 제한)</span></span>
<span class="line"><span>- [ ] 헬스체크의 메모리 모니터링 구현</span></span>
<span class="line"><span>- [ ] 예방 모니터링 제안의 현실성</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## MS-04. 설정 파일 생태계 구축 :star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>프로젝트 초기 설정 — 여러 도구의 설정 파일이 서로 정합성을 가져야 하는 상황.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>TypeScript + React 프로젝트의 개발 환경 설정 파일들을 만들어줘. 각 파일이 서로 모순 없이 일관되어야 해.</p><p>만들어야 할 파일:</p><ol><li><code>tsconfig.json</code> — strict 모드, path alias (@/로 src/ 매핑), JSX preserve</li><li><code>vite.config.ts</code> — tsconfig의 path alias를 resolve.alias에 동일하게 반영</li><li><code>.eslintrc.cjs</code> — TypeScript + React 규칙, import 순서 자동 정렬, unused vars는 에러, console.log는 warn, tsconfig path alias 인식</li><li><code>.prettierrc</code> — single quote, trailing comma all, print width 100</li><li><code>vitest.config.ts</code> — tsconfig path alias 반영, coverage 80% 이상 강제</li><li><code>.husky/pre-commit</code> — lint-staged 실행</li><li><code>.lintstagedrc</code> — staged 파일에 대해 eslint --fix + prettier --write</li><li><code>package.json</code> — 위 도구들의 의존성, scripts (dev, build, lint, format, test, test:coverage)</li></ol><p>일관성 체크리스트:</p><ul><li>path alias가 tsconfig ↔ vite ↔ vitest ↔ eslint에서 모두 동일한지</li><li>ESLint와 Prettier가 충돌하지 않는지 (eslint-config-prettier 설정)</li><li>TypeScript strict 설정이 ESLint 규칙과 호환되는지</li></ul><p>마지막에 <code>CONSISTENCY_CHECK.md</code>를 만들어서:</p><ul><li>각 설정 파일 간 의존 관계를 표로 정리</li><li>&quot;이 설정을 바꾸면 저 파일도 같이 바꿔야 한다&quot; 체크포인트 목록</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] path alias 일관성 (4개 파일에서 모두 동일)</span></span>
<span class="line"><span>- [ ] ESLint + Prettier 충돌 방지 설정</span></span>
<span class="line"><span>- [ ] package.json 의존성의 정확성 (버전 호환)</span></span>
<span class="line"><span>- [ ] husky + lint-staged 연동</span></span>
<span class="line"><span>- [ ] CONSISTENCY_CHECK.md의 유용성</span></span>
<span class="line"><span>- [ ] 전체 파일의 실제 동작 가능성</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## MS-05. 레거시 시스템 → 현대적 아키텍처 전환 계획 :star::star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>코드 분석 → 문제점 도출 → 마이그레이션 계획 → 일부 구현까지 이어지는 종합 태스크.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>아래 레거시 코드를 분석하고, 현대적 구조로 전환하는 작업을 해줘.</p><p><code>legacy_app.py</code>를 아래 내용으로 만들어:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flask </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Flask, request, jsonify</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sqlite3</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> smtplib</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> os</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Flask(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__name__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@app.route</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api/order&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">methods</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;POST&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create_order</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> request.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 재고 확인</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    conn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sqlite3.connect(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;shop.db&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> conn.cursor()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    c.execute(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SELECT stock FROM products WHERE id=?&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;product_id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c.fetchone()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">or</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;quantity&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        conn.close()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> jsonify({</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;error&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;out of stock&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">400</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 재고 차감</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    c.execute(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UPDATE products SET stock = stock - ? WHERE id=?&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              (data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;quantity&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;product_id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 주문 생성</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    c.execute(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;INSERT INTO orders (user_id, product_id, quantity, total) VALUES (?,?,?,?)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              (data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;user_id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;product_id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;quantity&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">               data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;quantity&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;price&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    order_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c.lastrowid</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    conn.commit()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    conn.close()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 이메일 발송</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> smtplib.SMTP(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;smtp.gmail.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">587</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        server.starttls()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        server.login(os.environ[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;EMAIL_USER&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], os.environ[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;EMAIL_PASS&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        msg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Subject: Order Confirmed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Your order #</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">order_id</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> has been placed.&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        server.sendmail(os.environ[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;EMAIL_USER&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;email&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], msg)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        server.quit()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    except</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        pass</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 이메일 실패해도 무시</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 로그</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;orders.log&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        f.write(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;user_id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">order_id</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;quantity&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> jsonify({</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;order_id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: order_id}), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">201</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __name__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;__main__&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    app.run(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">debug</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>수행할 작업:</p><ol><li><code>REVIEW.md</code> — 이 코드의 문제점을 최소 10개 찾아서 심각도별로 분류 (보안, 안정성, 유지보수성, 성능, 테스트 가능성 관점)</li><li>현대적 구조로 리팩토링: <ul><li>Repository 패턴 (DB 접근 분리)</li><li>Service 레이어 (비즈니스 로직)</li><li>이메일은 비동기 큐로 (간단한 in-memory queue 시뮬레이션)</li><li>적절한 예외 처리와 로깅 (logging 모듈)</li><li>환경 설정 분리 (config.py)</li><li>구조: app/, app/routes/, app/services/, app/repositories/, app/config/</li></ul></li><li>테스트 (pytest): <ul><li>Repository 단위 테스트 (SQLite in-memory)</li><li>Service 단위 테스트 (Repository mock)</li><li>API 통합 테스트 (Flask test client)</li></ul></li><li><code>MIGRATION_GUIDE.md</code> — 리뷰 결과를 바탕으로 한 마이그레이션 단계별 가이드</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] 문제점 10개 이상 도출 (SQL injection, race condition, 에러 무시 등)</span></span>
<span class="line"><span>- [ ] 심각도 분류의 합리성</span></span>
<span class="line"><span>- [ ] 리팩토링 구조의 적절성</span></span>
<span class="line"><span>- [ ] 비동기 큐 시뮬레이션 구현</span></span>
<span class="line"><span>- [ ] 테스트의 3계층 (단위/통합) 구현</span></span>
<span class="line"><span>- [ ] MIGRATION_GUIDE.md와 REVIEW.md의 일관성</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## MS-06. git 히스토리 분석 → 리포트 생성 :star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>git 명령어를 활용한 분석과 리포트 생성의 조합.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>현재 디렉토리에서 git 분석을 하고 리포트를 생성해줘.</p><p>[준비] 먼저 시뮬레이션용 git 레포를 만들어:</p><ul><li>git init sample-repo &amp;&amp; cd sample-repo</li><li>가상의 프로젝트 파일 10개 이상 생성 (src/, tests/, docs/)</li><li>서로 다른 author 3명으로 커밋 30개 이상 생성 (다양한 날짜에 분포) <ul><li>Alice: 주로 src/ 작업, 커밋 메시지 깔끔</li><li>Bob: src/와 tests/ 모두, 커밋 메시지 일관성 없음</li><li>Charlie: docs/ 위주, 가끔 hotfix</li></ul></li></ul><p>[분석 &amp; 리포트] git log와 git 명령어들을 활용해서 아래 항목을 분석하고 <code>GIT_REPORT.md</code>를 생성:</p><ol><li><p>기여도 분석</p><ul><li>작성자별 커밋 수, 추가/삭제 라인 수</li><li>작성자별 활동 시간대 분포</li></ul></li><li><p>코드 핫스팟</p><ul><li>가장 자주 수정된 파일 상위 5개</li><li>가장 많은 작성자가 수정한 파일 (충돌 위험 높은 파일)</li></ul></li><li><p>커밋 메시지 품질 분석</p><ul><li>평균 메시지 길이</li><li>Conventional Commits 형식 준수율</li><li>가장 짧은/긴 커밋 메시지</li></ul></li><li><p>프로젝트 건강도 점수</p><ul><li>커밋 빈도, 메시지 품질, 테스트 파일 비율 등을 종합한 0~100점</li></ul></li></ol><p>모든 분석은 git 명령어를 실행해서 실제 데이터 기반으로. 추정이나 가정 없이, 명령어 실행 결과를 파싱해서 리포트에 반영해.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] 시뮬레이션 레포 생성의 완성도 (다양한 author, 날짜)</span></span>
<span class="line"><span>- [ ] git log 파싱 정확성</span></span>
<span class="line"><span>- [ ] 분석 항목별 실제 git 명령어 활용</span></span>
<span class="line"><span>- [ ] 리포트의 데이터 기반 정확성 (추정 아닌 실측)</span></span>
<span class="line"><span>- [ ] 프로젝트 건강도 점수의 합리적 산출</span></span>
<span class="line"><span>- [ ] 전체 흐름의 자동화 수준</span></span></code></pre></div>`,56)])])}const g=i(l,[["render",t]]);export{c as __pageData,g as default};
