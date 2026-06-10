import{_ as a,o as n,c as i,a2 as p}from"./chunks/framework.DvFsUg-r.js";const c=JSON.parse('{"title":"CAT-07. 프로젝트 관리 & 자율 에이전트","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"hermes/benchmark/autonomous-agent.md","filePath":"hermes/benchmark/autonomous-agent.md","lastUpdated":1781092690000}'),l={name:"hermes/benchmark/autonomous-agent.md"};function e(t,s,h,k,r,E){return n(),i("div",null,[...s[0]||(s[0]=[p(`<h1 id="cat-07-프로젝트-관리-자율-에이전트" tabindex="-1">CAT-07. 프로젝트 관리 &amp; 자율 에이전트 <a class="header-anchor" href="#cat-07-프로젝트-관리-자율-에이전트" aria-label="Permalink to &quot;CAT-07. 프로젝트 관리 &amp; 자율 에이전트&quot;">​</a></h1><blockquote><p><strong>평가 핵심</strong>: 에이전트가 모호한 지시에서도 <strong>스스로 계획을 세우고, 판단하고, 완결된 결과</strong>를 만들 수 있는가?</p></blockquote><h2 id="난이도-범례" tabindex="-1">난이도 범례 <a class="header-anchor" href="#난이도-범례" aria-label="Permalink to &quot;난이도 범례&quot;">​</a></h2><table tabindex="0"><thead><tr><th>레벨</th><th>의미</th><th>예상 소요</th></tr></thead><tbody><tr><td>⭐</td><td>기초 — 명확한 지시, 단일 산출물</td><td>2~3분</td></tr><tr><td>⭐⭐</td><td>중급 — 일부 모호함, 판단 필요</td><td>3~5분</td></tr><tr><td>⭐⭐⭐</td><td>고급 — 매우 모호, 전체 프로세스 자율 설계</td><td>5~10분</td></tr></tbody></table><hr><h2 id="aa-01-프로젝트-부트스트랩" tabindex="-1">AA-01. 프로젝트 부트스트랩 ⭐⭐⭐ <a class="header-anchor" href="#aa-01-프로젝트-부트스트랩" aria-label="Permalink to &quot;AA-01. 프로젝트 부트스트랩 :star::star::star:&quot;">​</a></h2><h3 id="시나리오-배경" tabindex="-1">시나리오 배경 <a class="header-anchor" href="#시나리오-배경" aria-label="Permalink to &quot;시나리오 배경&quot;">​</a></h3><p>&quot;프로젝트 시작해줘&quot;라는 모호한 지시에서 에이전트가 얼마나 완성도 높은 초기 세팅을 하는지 본다.</p><h3 id="프롬프트" tabindex="-1">프롬프트 <a class="header-anchor" href="#프롬프트" aria-label="Permalink to &quot;프롬프트&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>새 프로젝트를 시작해줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>사내 직원용 휴가 관리 시스템이야.</span></span>
<span class="line"><span>스택은 너가 적절하게 골라줘.</span></span>
<span class="line"><span>실제로 동작하는 MVP까지 만들어줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>요구사항만 알려줄게:</span></span>
<span class="line"><span>- 직원이 휴가를 신청하면 매니저가 승인/반려</span></span>
<span class="line"><span>- 연차, 반차, 병가, 특별휴가 구분</span></span>
<span class="line"><span>- 잔여 휴가 일수 자동 계산</span></span>
<span class="line"><span>- 팀별 휴가 현황 캘린더 뷰</span></span>
<span class="line"><span>- 공휴일 자동 제외</span></span>
<span class="line"><span></span></span>
<span class="line"><span>디자인이나 UI는 신경 안 써도 돼. 기능이 돌아가면 됨.</span></span></code></pre></div><h3 id="평가-포인트" tabindex="-1">평가 포인트 <a class="header-anchor" href="#평가-포인트" aria-label="Permalink to &quot;평가 포인트&quot;">​</a></h3><ul><li>[ ] 기술 스택 선택의 합리성 (이유 설명 여부)</li><li>[ ] 프로젝트 구조의 완성도</li><li>[ ] 데이터 모델 설계의 적절성</li><li>[ ] 핵심 비즈니스 로직 구현 (잔여일수 계산, 승인 플로우)</li><li>[ ] 공휴일 처리 로직</li><li>[ ] 실제 실행 가능 여부 (서버 시작 → API 호출 가능)</li><li>[ ] README나 실행 가이드 자발적 생성 여부</li></ul><hr><h2 id="aa-02-코드-리뷰-에이전트" tabindex="-1">AA-02. 코드 리뷰 에이전트 ⭐⭐ <a class="header-anchor" href="#aa-02-코드-리뷰-에이전트" aria-label="Permalink to &quot;AA-02. 코드 리뷰 에이전트 :star::star:&quot;">​</a></h2><h3 id="시나리오-배경-1" tabindex="-1">시나리오 배경 <a class="header-anchor" href="#시나리오-배경-1" aria-label="Permalink to &quot;시나리오 배경&quot;">​</a></h3><p>에이전트가 다른 코드를 리뷰하는 능력. PR 리뷰어처럼 행동할 수 있는지.</p><h3 id="프롬프트-1" tabindex="-1">프롬프트 <a class="header-anchor" href="#프롬프트-1" aria-label="Permalink to &quot;프롬프트&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>아래 Pull Request의 코드를 리뷰해줘. 시니어 개발자 수준으로.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PR 제목: &quot;feat: 사용자 프로필 이미지 업로드 기능 추가&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>변경 파일들을 아래 내용으로 만들어:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`routes/profile.js\`:</span></span>
<span class="line"><span>\`\`\`javascript</span></span>
<span class="line"><span>const express = require(&#39;express&#39;);</span></span>
<span class="line"><span>const multer = require(&#39;multer&#39;);</span></span>
<span class="line"><span>const path = require(&#39;path&#39;);</span></span>
<span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>const router = express.Router();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const upload = multer({</span></span>
<span class="line"><span>  dest: &#39;uploads/&#39;,</span></span>
<span class="line"><span>  limits: { fileSize: 10 * 1024 * 1024 }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.post(&#39;/profile/avatar&#39;, upload.single(&#39;avatar&#39;), async (req, res) =&gt; {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    const file = req.file;</span></span>
<span class="line"><span>    const ext = path.extname(file.originalname);</span></span>
<span class="line"><span>    const newPath = \`uploads/avatars/\${req.user.id}\${ext}\`;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    fs.renameSync(file.path, newPath);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    await db.query(</span></span>
<span class="line"><span>      \`UPDATE users SET avatar_url = &#39;\${newPath}&#39; WHERE id = \${req.user.id}\`</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    res.json({ avatar_url: newPath });</span></span>
<span class="line"><span>  } catch (err) {</span></span>
<span class="line"><span>    res.status(500).json({ error: err.message });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.get(&#39;/profile/avatar/:userId&#39;, async (req, res) =&gt; {</span></span>
<span class="line"><span>  const user = await db.query(</span></span>
<span class="line"><span>    \`SELECT avatar_url FROM users WHERE id = \${req.params.userId}\`</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>  if (user.avatar_url) {</span></span>
<span class="line"><span>    res.sendFile(path.resolve(user.avatar_url));</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    res.status(404).send(&#39;No avatar&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.delete(&#39;/profile/avatar&#39;, async (req, res) =&gt; {</span></span>
<span class="line"><span>  const user = await db.query(</span></span>
<span class="line"><span>    \`SELECT avatar_url FROM users WHERE id = \${req.user.id}\`</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>  if (user.avatar_url) {</span></span>
<span class="line"><span>    fs.unlinkSync(user.avatar_url);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  await db.query(</span></span>
<span class="line"><span>    \`UPDATE users SET avatar_url = NULL WHERE id = \${req.user.id}\`</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>  res.json({ message: &#39;Avatar deleted&#39; });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = router;</span></span></code></pre></div><p>리뷰 결과를 <code>CODE_REVIEW.md</code>에 작성:</p><ol><li>전체 요약 (1~2줄, 머지 가능/수정 필요/반려 판단)</li><li>보안 이슈 (severity: critical/high/medium/low)</li><li>버그 (확실한 것과 잠재적인 것 구분)</li><li>코드 품질 개선 제안</li><li>빠진 기능 또는 엣지 케이스</li><li>각 이슈에 대한 수정 코드 제안</li></ol><p>시니어 리뷰어답게: 사소한 스타일 지적은 최소화하고, 정말 중요한 이슈에 집중해줘.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] SQL Injection 발견 (3곳)</span></span>
<span class="line"><span>- [ ] Path Traversal 취약점 발견 (파일 경로 조작)</span></span>
<span class="line"><span>- [ ] 파일 타입 미검증 (이미지 아닌 파일 업로드 가능)</span></span>
<span class="line"><span>- [ ] 에러 메시지 노출 (err.message → 내부 정보 유출)</span></span>
<span class="line"><span>- [ ] 동기 파일 I/O (renameSync, unlinkSync) 지적</span></span>
<span class="line"><span>- [ ] 리뷰 톤의 적절성 (건설적이고 blameless)</span></span>
<span class="line"><span>- [ ] 수정 코드 제안의 품질</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## AA-03. 모호한 버그 리포트 해결 :star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>실제 사용자가 보내는 모호한 버그 리포트를 받고, 원인을 추론하고 해결.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>사용자한테 이런 버그 리포트가 왔어. 해결해줘.</p><p>버그 리포트: &quot;로그인이 가끔 안 돼요. 새로고침하면 되는데 처음에는 안 됩니다. 모바일에서 더 자주 그러는 것 같아요. 아이디 비밀번호는 맞는데...&quot;</p><p>관련 코드를 아래 내용으로 만들어:</p><p><code>auth.js</code>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> jwt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;jsonwebtoken&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bcrypt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bcrypt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> csrfToken </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> generateCsrfToken</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> generateCsrfToken</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">36</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 매 시간 CSRF 토큰 갱신</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  csrfToken </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> generateCsrfToken</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3600000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> login</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">email</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">csrf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> req.body;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (csrf </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> csrfToken) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">403</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ error: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Invalid session&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> db.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(email);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">401</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ error: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Invalid credentials&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (password </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user.password_hash) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> jwt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ id: user.id }, process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JWT_SECRET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cookie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;token&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, token);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ success: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">401</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ error: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Invalid credentials&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { login, csrfToken };</span></span></code></pre></div><p><code>login.html</code> (프론트엔드):</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> token </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api/csrf-token&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { token </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data.token; });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;loginForm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;submit&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">preventDefault</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> email</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;email&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).value;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> password</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;password&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).value;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api/login&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;POST&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      headers: { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Content-Type&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;application/json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ email, password, csrf: token })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (res.ok) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      window.location.href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/dashboard&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;로그인 실패&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>수행할 작업:</p><ol><li>버그 리포트와 코드를 분석해서 가능한 원인을 모두 나열 (<code>BUG_ANALYSIS.md</code>)</li><li>각 원인의 가능성 순위 매기기</li><li>수정된 코드 작성 (<code>fixed_auth.js</code>, <code>fixed_login.html</code>)</li><li>왜 &quot;모바일에서 더 자주&quot; 발생하는지 설명</li><li>왜 &quot;새로고침하면 되는지&quot; 설명</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] CSRF 토큰 race condition 식별 (페이지 로드 vs 토큰 갱신 타이밍)</span></span>
<span class="line"><span>- [ ] bcrypt compare 미사용 발견 (\`password === hash\`는 항상 false)</span></span>
<span class="line"><span>- [ ] JWT 만료 시간 미설정 발견</span></span>
<span class="line"><span>- [ ] 쿠키 설정 미비 (httpOnly, secure, sameSite 없음)</span></span>
<span class="line"><span>- [ ] 모바일에서 더 빈번한 이유 설명 (느린 네트워크 → fetch 지연 → CSRF 불일치)</span></span>
<span class="line"><span>- [ ] 새로고침하면 되는 이유 설명 (새로운 CSRF 토큰 fetch)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## AA-04. 기술 스택 마이그레이션 계획 :star::star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>의사결정과 계획 수립 능력. 코드 작성보다 전략적 판단이 핵심.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>우리 팀 상황을 보고 기술 스택 마이그레이션 계획을 세워줘.</p><p>현재 상황:</p><ul><li>서비스: 3년된 커뮤니티 플랫폼 (게시판, 채팅, 알림)</li><li>현재 스택: PHP 7.4 (Laravel 6), jQuery, MySQL 5.7, 단일 서버</li><li>문제: <ul><li>PHP 7.4 EOL 지남, Laravel 6도 지원 종료</li><li>DAU 1만 → 10만으로 성장 예상 (6개월 내)</li><li>채팅 기능 실시간성 부족 (폴링 방식)</li><li>배포: FTP로 수동 업로드 (매번 긴장)</li><li>테스트 코드 없음</li><li>팀: 백엔드 3명 (Laravel 숙련), 프론트 2명 (jQuery만 경험), DevOps 0명</li></ul></li></ul><p>제약:</p><ul><li>서비스 중단 최소화 (점진적 마이그레이션 필수)</li><li>6개월 이내 핵심 마이그레이션 완료</li><li>추가 채용 예산: 1명 (풀스택 or DevOps)</li></ul><p>만들어야 할 문서:</p><ol><li><p><code>MIGRATION_STRATEGY.md</code></p><ul><li>목표 아키텍처 (현실적으로)</li><li>&quot;지금 당장&quot;과 &quot;이상적&quot;을 구분</li><li>단계별 마이그레이션 로드맵 (6개월을 2주 스프린트로)</li><li>각 단계의 리스크와 완화 방안</li><li>스택 선택 근거 (팀 역량 대비)</li></ul></li><li><p><code>PRIORITY_MATRIX.md</code></p><ul><li>무엇을 먼저 해야 하는가? (영향도 × 긴급도 매트릭스)</li><li>PHP 업그레이드 vs 새 스택 도입 — 어떤 순서?</li><li>채팅 실시간화 vs 배포 자동화 — 어느 쪽 먼저?</li></ul></li><li><p><code>HIRING_RECOMMENDATION.md</code></p><ul><li>1명 추가 채용한다면 어떤 역할?</li><li>JD(Job Description) 초안</li><li>왜 그 역할이 최우선인지 근거</li></ul></li></ol><p>현실적으로 판단해줘. &quot;다 바꿔야 합니다&quot;는 답이 아니야. 팀이 소화할 수 있는 속도를 고려해.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] 현실적인 목표 설정 (전면 재작성 vs 점진적 개선)</span></span>
<span class="line"><span>- [ ] 팀 역량 고려 (Laravel→다른 프레임워크 전환 비용)</span></span>
<span class="line"><span>- [ ] PHP 8.x + Laravel 10 업그레이드를 먼저 추천하는지</span></span>
<span class="line"><span>- [ ] 배포 자동화 우선순위의 합리성</span></span>
<span class="line"><span>- [ ] 스프린트별 로드맵의 구체성</span></span>
<span class="line"><span>- [ ] 채용 추천의 논리성 (DevOps 우선 가능성)</span></span>
<span class="line"><span>- [ ] 리스크 식별의 현실성</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## AA-05. 자동화 워크플로우 설계 :star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>반복 업무를 자동화하는 스크립트/워크플로우 설계 능력.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>우리 팀의 릴리스 프로세스를 자동화해줘.</p><p>현재 수동 프로세스 (매주 화요일):</p><ol><li>develop 브랜치에서 release/vX.Y.Z 브랜치 생성</li><li>CHANGELOG.md 업데이트 (이번 주 머지된 PR 목록)</li><li>package.json 버전 범프</li><li>PR 생성 (release → main)</li><li>PR 머지 후 main에서 태그 생성</li><li>GitHub Release 작성 (CHANGELOG 내용 복사)</li><li>Slack #releases 채널에 릴리스 알림</li><li>Jira에서 이번 릴리스에 포함된 티켓 상태를 &quot;Released&quot;로 변경</li></ol><p>이걸 자동화하는 도구를 만들어줘:</p><p><code>release.sh</code> — 대화형 릴리스 스크립트:</p><ul><li>버전 범프 타입 물어봄 (major/minor/patch)</li><li>이전 태그 이후 머지된 PR 목록 자동 수집 (git log + GitHub API)</li><li>Conventional Commits 기반으로 CHANGELOG 자동 생성 <ul><li>feat: → &quot;새 기능&quot;</li><li>fix: → &quot;버그 수정&quot;</li><li>docs: → &quot;문서&quot;</li><li>chore: → &quot;기타&quot;</li></ul></li><li>생성될 CHANGELOG 미리보기 후 확인</li><li>package.json 버전 업데이트</li><li>release 브랜치 생성 + 커밋 + 푸시</li><li>GitHub PR 자동 생성 (gh cli)</li><li>PR 머지 후 실행할 <code>post-merge.sh</code>: <ul><li>태그 생성 + 푸시</li><li>GitHub Release 생성</li><li>Slack 웹훅으로 알림 (curl)</li></ul></li></ul><p>추가:</p><ul><li>dry-run 모드 (--dry-run: 실제 git/API 호출 없이 미리보기만)</li><li>이전 릴리스 히스토리 기반으로 다음 버전 자동 추천</li><li>에러 발생 시 이전 상태로 롤백 (생성한 브랜치 삭제 등)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] git log 파싱의 정확성</span></span>
<span class="line"><span>- [ ] Conventional Commits 분류 구현</span></span>
<span class="line"><span>- [ ] CHANGELOG 포맷의 완성도</span></span>
<span class="line"><span>- [ ] 대화형 인터페이스의 사용성</span></span>
<span class="line"><span>- [ ] dry-run 모드 구현</span></span>
<span class="line"><span>- [ ] 에러 시 롤백 로직</span></span>
<span class="line"><span>- [ ] gh CLI 활용</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## AA-06. 기술 부채 정량화 :star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>코드베이스의 기술 부채를 분석하고 정량화하는 능력.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>기술 부채를 정량화하는 분석 도구를 만들어줘.</p><p><code>tech_debt_analyzer.py</code>:</p><p>분석 대상: 지정된 디렉토리의 소스 코드</p><p>측정 항목:</p><ol><li><p>코드 복잡도</p><ul><li>파일별 라인 수 (500줄 이상 → 경고)</li><li>함수별 길이 (50줄 이상 → 경고)</li><li>중첩 깊이 (3단계 이상 → 경고)</li><li>주석 비율 (10% 미만 or 50% 이상 → 경고)</li></ul></li><li><p>의존성 건강도</p><ul><li>package.json / requirements.txt 파싱</li><li>deprecated 패키지 감지 (패키지 이름으로 npm/pypi API는 시뮬레이션)</li><li>직접 의존성 vs 간접 의존성 수</li><li>라이센스 검사 (GPL 의존성 경고)</li></ul></li><li><p>코드 중복</p><ul><li>연속 6줄 이상 동일한 코드 블록 찾기</li><li>유사도 80% 이상인 함수 쌍 찾기</li></ul></li><li><p>TODO/FIXME/HACK 분석</p><ul><li>파일별 TODO 수</li><li>가장 오래된 TODO (git blame 활용)</li><li>우선순위 분류 (FIXME &gt; HACK &gt; TODO)</li></ul></li><li><p>테스트 커버리지 (추정)</p><ul><li>테스트 파일 존재 비율</li><li>테스트 함수 수 / 소스 함수 수</li></ul></li></ol><p>출력:</p><ul><li>콘솔에 컬러 리포트</li><li><code>tech_debt_report.md</code> — 상세 리포트</li><li><code>tech_debt_score.json</code> — 정량 점수 (0~100, 높을수록 건강)</li><li>각 항목별 개선 우선순위 추천</li></ul><p>테스트를 위해, 의도적으로 기술 부채가 있는 샘플 프로젝트 디렉토리도 만들어줘. (5~10개 파일, 다양한 문제 포함)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] 코드 복잡도 분석의 정확성</span></span>
<span class="line"><span>- [ ] 코드 중복 탐지 알고리즘</span></span>
<span class="line"><span>- [ ] TODO/FIXME 분석과 git blame 활용</span></span>
<span class="line"><span>- [ ] 점수 산출 방식의 합리성</span></span>
<span class="line"><span>- [ ] 리포트의 실용성 (개선 우선순위)</span></span>
<span class="line"><span>- [ ] 샘플 프로젝트의 다양한 기술 부채 반영</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## AA-07. 컨텍스트 이해 &amp; 질문 능력 :star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>모호한 지시를 받았을 때, 적절한 질문을 하는 능력. &quot;바로 작업 시작&quot;보다 &quot;명확화 후 정확한 작업&quot;이 더 나은 상황.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>데이터베이스 최적화 좀 해줘.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>이 시나리오는 **의도적으로 모호**하다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>좋은 에이전트의 반응:</span></span>
<span class="line"><span>- [ ] 바로 작업하지 않고 먼저 질문하는가</span></span>
<span class="line"><span>- [ ] 질문의 품질: &quot;어떤 데이터베이스?&quot;, &quot;어떤 쿼리가 느린가?&quot;, &quot;현재 성능 지표는?&quot; 등</span></span>
<span class="line"><span>- [ ] 맥락 파악 시도: 현재 디렉토리에 DB 설정 파일이 있는지 확인</span></span>
<span class="line"><span>- [ ] 가정을 한다면 명시적으로 &quot;~라고 가정하겠습니다&quot;라고 선언하는가</span></span>
<span class="line"><span></span></span>
<span class="line"><span>나쁜 에이전트의 반응:</span></span>
<span class="line"><span>- 아무 가정 없이 MySQL 튜닝 스크립트를 바로 작성</span></span>
<span class="line"><span>- &quot;알겠습니다&quot; 하고 적당히 인덱스 추가 제안</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## AA-08. 전체 프로세스 자율 수행 :star::star::star:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 시나리오 배경</span></span>
<span class="line"><span>가장 어려운 시나리오. 최소한의 지시로 에이전트가 전체 프로세스를 스스로 설계하고 완수하는지 본다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 프롬프트</span></span></code></pre></div><p>이 디렉토리에 있는 코드를 분석해서 개선해줘. 개선이 끝나면 뭘 했는지 알려줘.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 전제 조건</span></span>
<span class="line"><span>이 시나리오를 실행하기 전에 아래 파일들을 미리 생성해둔다:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`app.py\`, \`utils.py\`, \`config.py\`, \`test_app.py\`를 만들어 — 의도적으로 여러 문제를 포함:</span></span>
<span class="line"><span>- 보안 취약점 2개 (SQL injection, 하드코딩된 시크릿)</span></span>
<span class="line"><span>- 성능 문제 1개 (비효율적 루프)</span></span>
<span class="line"><span>- 코드 스멜 3개 (긴 함수, 중복 코드, 매직 넘버)</span></span>
<span class="line"><span>- 실패하는 테스트 1개</span></span>
<span class="line"><span>- 누락된 에러 처리 2개</span></span>
<span class="line"><span></span></span>
<span class="line"><span>위 파일 생성 스크립트를 \`setup_aa08.sh\`로 만들어줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 평가 포인트</span></span>
<span class="line"><span>- [ ] 코드 분석부터 시작하는가 (바로 수정하지 않고)</span></span>
<span class="line"><span>- [ ] 발견한 문제의 수와 정확도</span></span>
<span class="line"><span>- [ ] 개선 우선순위 설정의 합리성</span></span>
<span class="line"><span>- [ ] 보안 이슈를 최우선으로 처리하는가</span></span>
<span class="line"><span>- [ ] 테스트를 실행하고 통과시키는가</span></span>
<span class="line"><span>- [ ] 최종 보고의 명확성 (뭘 했고, 왜 했고, 어떤 효과)</span></span>
<span class="line"><span>- [ ] 원본 백업 또는 git 활용 여부</span></span></code></pre></div>`,63)])])}const o=a(l,[["render",e]]);export{c as __pageData,o as default};
