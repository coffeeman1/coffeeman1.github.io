import{_ as n,o as i,c as p,a2 as a,j as l}from"./chunks/framework.DvFsUg-r.js";const E=JSON.parse('{"title":"스킬 예시집 · 분석 리포트 자동화 5종","description":"","frontmatter":{},"headers":[],"relativePath":"hermes/reusability/skill-examples-report.md","filePath":"hermes/reusability/skill-examples-report.md","lastUpdated":1781092690000}'),t={name:"hermes/reusability/skill-examples-report.md"};function e(h,s,k,r,d,c){return i(),p("div",null,[...s[0]||(s[0]=[a(`<h1 id="스킬-예시집-·-분석-리포트-자동화-5종" tabindex="-1">스킬 예시집 · 분석 리포트 자동화 5종 <a class="header-anchor" href="#스킬-예시집-·-분석-리포트-자동화-5종" aria-label="Permalink to &quot;스킬 예시집 · 분석 리포트 자동화 5종&quot;">​</a></h1><div class="badge-box"><span class="badge-red">Report Automation</span><span class="badge-teal">Pipeline</span><span class="badge-gold">VLM + Template</span></div><blockquote><p><strong>사용자 질문의 request ID → JSON 메타 fetch → 이미지 배치 VLM 분석 → 템플릿 기반 종합 리포트 → 파일 경로 보고</strong>까지 이어지는 분석 보고서 자동화 파이프라인을 스킬 5개로 분해해 구현합니다. 각 스킬은 단독으로도 쓸 수 있고, 최상위 합성 스킬로 한 번에 묶어 실행할 수도 있습니다.</p></blockquote><h2 id="목표-시나리오" tabindex="-1">목표 시나리오 <a class="header-anchor" href="#목표-시나리오" aria-label="Permalink to &quot;목표 시나리오&quot;">​</a></h2><p>사용자가 다음처럼 요청하면:</p><blockquote><p>&quot;REQ-2026-04-12-0031 분석 보고서 만들어줘&quot;</p></blockquote><p>에이전트가 다음을 자동 수행:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. REQ-2026-04-12-0031 인식 (request_id 추출)</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>2. 메타 URL에서 JSON 목록 fetch</span></span>
<span class="line"><span>   → 요청 배경·시료 정보 파싱</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>3. 이미지 목록 URL에서 이미지 경로 수집</span></span>
<span class="line"><span>   → 각 이미지를 VLM으로 개별 해석 (3줄 요약 x N개)</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>4. 템플릿 파일을 기반으로 종합 리포트 작성</span></span>
<span class="line"><span>   → 배경 + 시료 + 이미지 해석 + 결론</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>5. 저장된 파일 경로 보고</span></span>
<span class="line"><span>   → &quot;보고서 저장: /reports/REQ-2026-04-12-0031.md&quot;</span></span></code></pre></div><h2 id="파이프라인-아키텍처" tabindex="-1">파이프라인 아키텍처 <a class="header-anchor" href="#파이프라인-아키텍처" aria-label="Permalink to &quot;파이프라인 아키텍처&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│  사용자 요청                                                      │</span></span>
<span class="line"><span>│  &quot;REQ-2026-04-12-0031 분석 보고서 만들어줘&quot;                       │</span></span>
<span class="line"><span>└──────────────────────────┬──────────────────────────────────────┘</span></span>
<span class="line"><span>                           ▼</span></span>
<span class="line"><span>               ┌──────────────────────┐</span></span>
<span class="line"><span>               │ #1 request-id-extract│  ← 정규식·패턴 매칭</span></span>
<span class="line"><span>               └──────────┬───────────┘</span></span>
<span class="line"><span>                          │ request_id: &quot;REQ-2026-04-12-0031&quot;</span></span>
<span class="line"><span>                          ▼</span></span>
<span class="line"><span>               ┌──────────────────────┐</span></span>
<span class="line"><span>               │ #2 metadata-fetcher  │  ← URL에서 JSON fetch</span></span>
<span class="line"><span>               │                      │     배경·시료 정보 추출</span></span>
<span class="line"><span>               └──────────┬───────────┘</span></span>
<span class="line"><span>                          │ { background, sample_info, image_list_url }</span></span>
<span class="line"><span>                          ▼</span></span>
<span class="line"><span>               ┌──────────────────────┐</span></span>
<span class="line"><span>               │ #3 image-batch-      │  ← 각 이미지 VLM 분석</span></span>
<span class="line"><span>               │    analyzer          │     3줄 해석 리스트</span></span>
<span class="line"><span>               └──────────┬───────────┘</span></span>
<span class="line"><span>                          │ [{url, caption, interpretation[3]}, ...]</span></span>
<span class="line"><span>                          ▼</span></span>
<span class="line"><span>               ┌──────────────────────┐</span></span>
<span class="line"><span>               │ #4 report-composer   │  ← 템플릿 렌더링</span></span>
<span class="line"><span>               │                      │     종합 문서 생성</span></span>
<span class="line"><span>               └──────────┬───────────┘</span></span>
<span class="line"><span>                          │ /reports/{request_id}.md</span></span>
<span class="line"><span>                          ▼</span></span>
<span class="line"><span>               ┌──────────────────────┐</span></span>
<span class="line"><span>               │ 최종: 파일 경로 보고  │</span></span>
<span class="line"><span>               └──────────────────────┘</span></span></code></pre></div><p>5개 스킬이 차례로 체이닝됩니다. 상위 합성 스킬 <code>#5 analysis-report-flow</code>가 이 흐름을 한 번의 호출로 오케스트레이션합니다.</p><hr><h2 id="사용-방법-—-먼저-보기" tabindex="-1">사용 방법 — 먼저 보기 <a class="header-anchor" href="#사용-방법-—-먼저-보기" aria-label="Permalink to &quot;사용 방법 — 먼저 보기&quot;">​</a></h2><p>구현을 보기 전에 <strong>어떻게 쓰는지</strong> 먼저 이해하면 나머지가 명확해집니다.</p><h3 id="방법-1-·-자연어-권장" tabindex="-1">방법 1 · 자연어 (권장) <a class="header-anchor" href="#방법-1-·-자연어-권장" aria-label="Permalink to &quot;방법 1 · 자연어 (권장)&quot;">​</a></h3><p>가장 단순한 호출. 합성 스킬이 자동 라우팅됩니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; &quot;REQ-2026-04-12-0031 분석 보고서 만들어줘&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>에이전트: [analysis-report-flow 스킬 감지 → 5단계 실행]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  [1/5] request-id 추출 중... ✓ REQ-2026-04-12-0031</span></span>
<span class="line"><span>  [2/5] 메타데이터 fetch 중... ✓ 시료 3개, 이미지 12장 식별</span></span>
<span class="line"><span>  [3/5] 이미지 분석 중 (12장)... ✓ 각 3줄 해석 완료</span></span>
<span class="line"><span>  [4/5] 리포트 생성 중... ✓ 템플릿 적용</span></span>
<span class="line"><span>  [5/5] 검증 중... ✓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  📄 보고서 저장:</span></span>
<span class="line"><span>     /reports/REQ-2026-04-12-0031.md (8.2 KB)</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>  요약: 시료 3개의 XRD·SEM 분석 결과 통합. 이상 소견 1건.</span></span></code></pre></div><h3 id="방법-2-·-슬래시-명령-명시적-매개변수" tabindex="-1">방법 2 · 슬래시 명령 + 명시적 매개변수 <a class="header-anchor" href="#방법-2-·-슬래시-명령-명시적-매개변수" aria-label="Permalink to &quot;방법 2 · 슬래시 명령 + 명시적 매개변수&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; /analysis-report-flow request_id=REQ-2026-04-12-0031</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; /analysis-report-flow \\</span></span>
<span class="line"><span>    request_id=REQ-2026-04-12-0031 \\</span></span>
<span class="line"><span>    metadata_url=https://lab.example.com/api/requests \\</span></span>
<span class="line"><span>    template_path=./templates/analysis-report.md \\</span></span>
<span class="line"><span>    output_dir=./reports</span></span></code></pre></div><h3 id="방법-3-·-개별-스킬로-단계-제어" tabindex="-1">방법 3 · 개별 스킬로 단계 제어 <a class="header-anchor" href="#방법-3-·-개별-스킬로-단계-제어" aria-label="Permalink to &quot;방법 3 · 개별 스킬로 단계 제어&quot;">​</a></h3><p>중간에 검토가 필요하면 각 스킬을 따로 호출할 수 있습니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; /metadata-fetcher request_id=REQ-2026-04-12-0031</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  → 메타 출력. 사용자가 확인.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; &quot;방금 메타 기반으로 이미지 분석만 먼저&quot;</span></span>
<span class="line"><span>&gt; /image-batch-analyzer image_list_url=&lt;위에서 받은 URL&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  → VLM 해석 결과 출력. 사용자가 검토.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; &quot;이제 이걸로 리포트 만들어줘. template은 default로&quot;</span></span>
<span class="line"><span>&gt; /report-composer request_id=REQ-2026-04-12-0031 template_path=default</span></span></code></pre></div><h3 id="방법-4-·-크론-무인-자동화" tabindex="-1">방법 4 · 크론 무인 자동화 <a class="header-anchor" href="#방법-4-·-크론-무인-자동화" aria-label="Permalink to &quot;방법 4 · 크론 무인 자동화&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ~/.hermes/cron/daily-reports.yaml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;매일 오전 6시에 /pending-requests API를 조회하여</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 아직 처리되지 않은 request_id 목록을 받고,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 각각에 대해 analysis-report-flow를 실행해 리포트를 생성한 후</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slack #lab-reports 채널에 결과 파일 경로 목록을 공유&quot;</span></span></code></pre></div><h3 id="방법-5-·-api-서버-web-ui" tabindex="-1">방법 5 · API 서버 / Web UI <a class="header-anchor" href="#방법-5-·-api-서버-web-ui" aria-label="Permalink to &quot;방법 5 · API 서버 / Web UI&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:8080/v1/chat/completions</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -H</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Content-Type: application/json&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -H</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;X-Hermes-Session-Id: report-job-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$REQUEST_ID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;model&quot;: &quot;default&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;messages&quot;: [{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;content&quot;: &quot;/analysis-report-flow request_id=&#39;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$REQUEST_ID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }&#39;</span></span></code></pre></div><hr><h2 id="_1-request-id-extractor" tabindex="-1">#1 request-id-extractor <a class="header-anchor" href="#_1-request-id-extractor" aria-label="Permalink to &quot;#1 request-id-extractor&quot;">​</a></h2><p>사용자 자연어 입력에서 <strong>request ID를 정규식으로 추출</strong>합니다. 다양한 표기 형태를 수용하고, 모호한 경우 재질의.</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">request-id-extractor</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  사용자의 자연어 입력에서 분석 요청 ID(request_id)를 인식하여 추출한다.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  REQ-YYYY-MM-DD-NNNN, RQ-NNNNN, 요청번호 NNNNN 등 여러 형식을 지원하며</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  모호한 경우 사용자에게 확인을 요청한다. 결과는 정규화된 ID 문자열.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">author</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">template</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">license</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MIT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">category</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Research</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">report</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">extraction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">parsing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">korean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">triggers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  keywords</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">request id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">요청 id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">요청번호</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">리포트 번호</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">REQ-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RQ-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  intent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">extraction</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">requires</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  tools</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">parameters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">user_input</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">string</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    required</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;원본 사용자 질문 텍스트&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">id_format</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">enum</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    values</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">strict-req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">strict-rq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">numeric</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">auto</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;인식 모드. auto면 알려진 패턴 모두 시도&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">allow_fallback</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">boolean</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;매칭 실패 시 사용자에게 재질의할지 여부&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">safety</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  approval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">auto</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  side_effects</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  reversible</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># Request ID Extractor</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 목표</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`user_input\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">에서 request_id를 인식해 정규화된 형태로 반환한다.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 지원 패턴</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">다음 정규식을 </span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**순차적으로**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 시도하여 첫 매칭을 사용한다.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **strict-req**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`REQ-\\d{4}-\\d{2}-\\d{2}-\\d{4}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> — 예: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`REQ-2026-04-12-0031\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **strict-rq**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`RQ-\\d{5,6}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> — 예: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`RQ-102345\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **verbose**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`요청\\s*(번호|ID)\\s*[:\\-]?\\s*(\\d{5,})\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> — 예: &quot;요청 번호: 102345&quot;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **loose-req**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`REQ[-_]?\\d{4,}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> — 예: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`REQ2026\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`REQ_0031\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">5.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **numeric**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`#(\\d{5,})\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> — 예: &quot;#102345&quot;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">6.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **순수 숫자**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 문장 전체에 5자리 이상 숫자 단 하나만 있으면 그것</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 절차</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **입력 정리**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 전체 소문자 변환은 하지 </span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**않는다**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (대소문자 유지가 ID 일부일 수 있음)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 양 끝 공백 제거</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **패턴 매칭**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`id_format\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">이 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`auto\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">면 위 6개 패턴을 차례로 시도</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 특정 모드 지정되었으면 그 패턴만 시도</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 매칭이 여러 개면 </span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**첫 번째**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 사용, 경고 로그</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **정규화**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`REQ-2026-4-12-31\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`REQ-2026-04-12-0031\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (zero-pad)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`rq-12345\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`RQ-12345\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (prefix 대문자)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 언더스코어 → 하이픈 통일</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **검증**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 날짜 부분이 있으면 실제 날짜인지 (YYYY 2000–2030, MM 01–12, DD 01–31)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 접미 번호가 0000 이면 경고</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 길이가 비정상적으로 짧으면 재질의 대상</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">5.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **결과 반환**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 성공: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`{&quot;request_id&quot;: &quot;REQ-2026-04-12-0031&quot;, &quot;confidence&quot;: 0.95, &quot;pattern&quot;: &quot;strict-req&quot;}\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 모호: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`{&quot;candidates&quot;: [&quot;REQ-...&quot;, &quot;REQ-...&quot;], &quot;reason&quot;: &quot;multiple matches&quot;}\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 실패: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`{&quot;request_id&quot;: null, &quot;reason&quot;: &quot;not found&quot;}\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">6.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **재질의 조건**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`allow_fallback: true\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">일 때)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 매칭 실패 → &quot;분석 요청 ID를 알려주세요. 예: REQ-2026-04-12-0031&quot;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 다중 매칭 → 후보 제시 후 선택 요청</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 낮은 신뢰도 (&lt; 0.7) → 확인 요청</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 실패 기준 (do-not)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 자동 추론으로 </span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**없는 ID를 지어내지 않는다**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 불확실하면 </span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**정답인 척하지 말고 재질의**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 재질의 시 친절한 한국어 사용</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 숫자가 여러 개면 임의로 하나 선택하지 않음</span></span></code></pre></div><h3 id="사용-예" tabindex="-1">사용 예 <a class="header-anchor" href="#사용-예" aria-label="Permalink to &quot;사용 예&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; &quot;REQ-2026-04-12-0031번 분석 결과 리포트로 만들어줘&quot;</span></span>
<span class="line"><span>→ request_id: &quot;REQ-2026-04-12-0031&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; &quot;요청번호 102345 처리해줘&quot;</span></span>
<span class="line"><span>→ request_id: &quot;RQ-102345&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; &quot;어제 들어온 분석 요청 만들어&quot;</span></span>
<span class="line"><span>→ &quot;어떤 요청인가요? 예: REQ-2026-04-12-0031&quot;</span></span></code></pre></div><hr><h2 id="_2-metadata-fetcher" tabindex="-1">#2 metadata-fetcher <a class="header-anchor" href="#_2-metadata-fetcher" aria-label="Permalink to &quot;#2 metadata-fetcher&quot;">​</a></h2><p>URL에서 JSON 메타데이터를 fetch하여 <strong>요청 배경 + 시료 정보 + 이미지 URL 목록</strong>을 추출합니다.</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">metadata-fetcher</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  지정된 URL의 JSON 리스트 데이터를 가져와 특정 request_id의 항목을 찾고,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  배경 설명·시료 정보·이미지 리스트 URL을 추출해 구조화된 객체로 반환한다.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  분석 리포트 자동화 파이프라인의 2번째 단계.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">author</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">template</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">license</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MIT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">category</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Research</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">report</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lab</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">triggers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  keywords</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">metadata fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">메타데이터</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">시료 정보</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">요청 배경</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  intent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">data-retrieval</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">requires</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  tools</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">web-browse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">file-read</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">file-write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  env_vars</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LAB_API_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">parameters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">request_id</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">string</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    required</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;조회할 request ID (정규화된 형태)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">metadata_url</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">string</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://lab.example.com/api/requests&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;JSON 리스트가 제공되는 엔드포인트&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">auth_header</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">string</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bearer \${LAB_API_KEY}&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;인증 헤더. 환경 변수 치환 지원&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cache_dir</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">path</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;~/.hermes/cache/metadata&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;JSON 캐시 디렉토리 (선택)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cache_ttl_minutes</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">integer</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">safety</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  approval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">auto</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  side_effects</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">network</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">local_write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  reversible</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># Metadata Fetcher</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 목표</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`metadata_url\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">에서 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`request_id\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">에 해당하는 항목을 찾아</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**배경 / 시료 정보 / 이미지 URL**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">을 구조화하여 반환한다.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 절차</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 1. 캐시 확인 (선택)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`cache_dir/{request_id}.json\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">이 존재하고 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`cache_ttl_minutes\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 이내면 재사용</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 캐시 히트 시 네트워크 호출 생략, &quot;cached&quot; 플래그 표시</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 2. JSON 리스트 fetch</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`web-browse\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 또는 HTTP 도구로 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`metadata_url\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 요청</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 헤더: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`auth_header\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 포함 (환경 변수 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`\${LAB_API_KEY}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 런타임 치환)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 타임아웃 30초, 재시도 2회</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 응답 코드 비정상 시 에러 리턴 (401/403/404/5xx 구분)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 3. request_id 항목 추출</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">응답 JSON이 리스트이면 각 항목에서 다음 키 중 하나로 매칭:</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`request_id\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`requestId\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`id\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`reqId\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">예상 스키마:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;request_id&quot;: &quot;REQ-2026-04-12-0031&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;status&quot;: &quot;ready&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;request_body&quot;: &quot;XRD + SEM 분석 요청. 시료 3종에 대해 결정 구조와 미세 형상 분석 필요.&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;samples&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {&quot;id&quot;: &quot;S-001&quot;, &quot;name&quot;: &quot;샘플 A&quot;, &quot;material&quot;: &quot;Cu-Al alloy&quot;, &quot;preparation&quot;: &quot;연마 후 폴리싱&quot;},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;image_list_url&quot;: &quot;https://lab.example.com/api/images?req=REQ-2026-04-12-0031&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;analyst&quot;: &quot;kim@lab&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;created_at&quot;: &quot;2026-04-12T09:23:00Z&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="_4-배경·시료·이미지-url-추출" tabindex="-1">4. 배경·시료·이미지 URL 추출 <a class="header-anchor" href="#_4-배경·시료·이미지-url-추출" aria-label="Permalink to &quot;4. 배경·시료·이미지 URL 추출&quot;">​</a></h3><p><strong>배경 (background)</strong> — <code>request_body</code> 필드에서:</p><ul><li>요청 목적 (분석 유형, 기대 결과)</li><li>시료 수와 개략 설명</li><li>특별 요구사항 (우선순위, 마감)</li></ul><p><strong>시료 정보 (samples)</strong> — <code>samples</code> 배열에서:</p><ul><li>각 시료의 id, name, material, preparation</li><li>누락 필드는 &quot;[정보 없음]&quot;으로 표시</li></ul><p><strong>이미지 URL</strong> — <code>image_list_url</code> 그대로 다음 스킬로 전달</p><h3 id="_5-결과-구조화" tabindex="-1">5. 결과 구조화 <a class="header-anchor" href="#_5-결과-구조화" aria-label="Permalink to &quot;5. 결과 구조화&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;request_id&quot;: &quot;REQ-2026-04-12-0031&quot;,</span></span>
<span class="line"><span>  &quot;status&quot;: &quot;ready&quot;,</span></span>
<span class="line"><span>  &quot;background&quot;: {</span></span>
<span class="line"><span>    &quot;purpose&quot;: &quot;XRD와 SEM 분석을 통한 결정 구조/미세 형상 파악&quot;,</span></span>
<span class="line"><span>    &quot;sample_count&quot;: 3,</span></span>
<span class="line"><span>    &quot;priority&quot;: &quot;normal&quot;,</span></span>
<span class="line"><span>    &quot;raw_request&quot;: &quot;&lt;request_body 전체&gt;&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;samples&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;id&quot;: &quot;S-001&quot;,</span></span>
<span class="line"><span>      &quot;name&quot;: &quot;샘플 A&quot;,</span></span>
<span class="line"><span>      &quot;material&quot;: &quot;Cu-Al alloy&quot;,</span></span>
<span class="line"><span>      &quot;preparation&quot;: &quot;연마 후 폴리싱&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;image_list_url&quot;: &quot;https://lab.example.com/api/images?req=REQ-2026-04-12-0031&quot;,</span></span>
<span class="line"><span>  &quot;analyst&quot;: &quot;kim@lab&quot;,</span></span>
<span class="line"><span>  &quot;created_at&quot;: &quot;2026-04-12T09:23:00Z&quot;,</span></span>
<span class="line"><span>  &quot;fetched_at&quot;: &quot;&lt;now&gt;&quot;,</span></span>
<span class="line"><span>  &quot;cached&quot;: false</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_6-캐시-저장" tabindex="-1">6. 캐시 저장 <a class="header-anchor" href="#_6-캐시-저장" aria-label="Permalink to &quot;6. 캐시 저장&quot;">​</a></h3><ul><li><code>cache_dir/{request_id}.json</code>에 저장</li><li>민감 필드 (auth_header, 개인정보)는 저장 전 제거</li></ul><h3 id="_7-보고" tabindex="-1">7. 보고 <a class="header-anchor" href="#_7-보고" aria-label="Permalink to &quot;7. 보고&quot;">​</a></h3><ul><li>성공: 구조화 결과 + &quot;시료 N개, 이미지 URL 확인됨&quot;</li><li>실패: HTTP 상태 + 원인 + 재시도 제안</li></ul><h2 id="의사결정-분기" tabindex="-1">의사결정 분기 <a class="header-anchor" href="#의사결정-분기" aria-label="Permalink to &quot;의사결정 분기&quot;">​</a></h2><ul><li><strong>status ≠ &quot;ready&quot;</strong> → 경고 + 진행 여부 확인</li><li><strong>samples 배열이 비어있음</strong> → 에러 (파이프라인 중단)</li><li><strong>image_list_url 누락</strong> → 경고 + 이미지 없이 진행할지 확인</li><li><strong>request_body가 100자 미만</strong> → 배경 정보 부족 경고</li></ul><h2 id="실패-기준-do-not" tabindex="-1">실패 기준 (do-not) <a class="header-anchor" href="#실패-기준-do-not" aria-label="Permalink to &quot;실패 기준 (do-not)&quot;">​</a></h2><ul><li>API 키를 로그·캐시·출력에 <strong>절대 노출 금지</strong></li><li>응답 JSON을 <strong>임의로 수정하지 않음</strong> (원본 보존)</li><li>추론으로 missing 필드 채우지 않음 — &quot;[정보 없음]&quot;</li><li>네트워크 에러를 &quot;성공&quot;으로 보고하지 않음</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 사용 예</span></span></code></pre></div><blockquote><p>/metadata-fetcher request_id=REQ-2026-04-12-0031</p></blockquote><p>📥 메타 fetch 중... ✓ 메타데이터 수신 (cached: false) 요청 목적: XRD와 SEM 분석을 통한 결정 구조/미세 형상 파악 시료: 3개 (S-001 Cu-Al, S-002 Ni-Ti, S-003 Fe-C) 이미지 목록: <a href="https://lab.example.com/api/images?req=REQ-2026-04-12-0031" target="_blank" rel="noreferrer">https://lab.example.com/api/images?req=REQ-2026-04-12-0031</a> 담당: kim@lab</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## #3 image-batch-analyzer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>이미지 URL 목록을 받아 **각 이미지를 VLM으로 개별 분석**하고 **3줄 해석 리스트**를 생성합니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`\`markdown</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>name: image-batch-analyzer</span></span>
<span class="line"><span>version: 1.0.0</span></span>
<span class="line"><span>description: |</span></span>
<span class="line"><span>  이미지 리스트 URL에서 이미지 경로를 수집하고, 각 이미지를 비전 모델(VLM)로 개별 분석하여</span></span>
<span class="line"><span>  3줄 요약 해석을 생성한다. 서브에이전트 병렬 처리로 다수 이미지를 효율적으로 처리.</span></span>
<span class="line"><span>  분석 리포트 자동화 파이프라인의 3번째 단계.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>author: template</span></span>
<span class="line"><span>license: MIT</span></span>
<span class="line"><span>category: Research</span></span>
<span class="line"><span>tags: [report, image, vlm, vision, analysis]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>triggers:</span></span>
<span class="line"><span>  keywords: [image analysis, 이미지 분석, VLM 해석, 이미지 일괄]</span></span>
<span class="line"><span>  intent: vision-analysis</span></span>
<span class="line"><span></span></span>
<span class="line"><span>requires:</span></span>
<span class="line"><span>  tools: [web-browse, image-analysis, spawn-subagent, file-write]</span></span>
<span class="line"><span>  auxiliary_models:</span></span>
<span class="line"><span>    vision:</span></span>
<span class="line"><span>      provider: anthropic</span></span>
<span class="line"><span>      model: claude-3-5-sonnet-20241022</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parameters:</span></span>
<span class="line"><span>  - name: image_list_url</span></span>
<span class="line"><span>    type: string</span></span>
<span class="line"><span>    required: true</span></span>
<span class="line"><span>    description: &quot;이미지 목록 JSON이 있는 URL&quot;</span></span>
<span class="line"><span>  - name: request_id</span></span>
<span class="line"><span>    type: string</span></span>
<span class="line"><span>    required: true</span></span>
<span class="line"><span>    description: &quot;캐시·로그에 사용할 request ID&quot;</span></span>
<span class="line"><span>  - name: parallel_workers</span></span>
<span class="line"><span>    type: integer</span></span>
<span class="line"><span>    default: 4</span></span>
<span class="line"><span>    description: &quot;동시 VLM 호출 수 (서브에이전트)&quot;</span></span>
<span class="line"><span>  - name: analysis_mode</span></span>
<span class="line"><span>    type: enum</span></span>
<span class="line"><span>    values: [technical, descriptive, both]</span></span>
<span class="line"><span>    default: technical</span></span>
<span class="line"><span>    description: &quot;분석 관점: 기술적(수치·패턴)·기술(장면)·둘다&quot;</span></span>
<span class="line"><span>  - name: max_images</span></span>
<span class="line"><span>    type: integer</span></span>
<span class="line"><span>    default: 20</span></span>
<span class="line"><span>    description: &quot;안전장치. 이 수 초과 시 경고 후 확인&quot;</span></span>
<span class="line"><span>  - name: cache_dir</span></span>
<span class="line"><span>    type: path</span></span>
<span class="line"><span>    default: &quot;~/.hermes/cache/vlm-analysis&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>safety:</span></span>
<span class="line"><span>  approval: auto</span></span>
<span class="line"><span>  side_effects: [network]</span></span>
<span class="line"><span>  reversible: true</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Image Batch Analyzer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 목표</span></span>
<span class="line"><span>\`image_list_url\`의 이미지들을 VLM으로 분석해 각각의 **3줄 해석**을 리스트로 수집.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 절차</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 1. 이미지 목록 수집</span></span>
<span class="line"><span>- \`web-browse\` 또는 HTTP 도구로 \`image_list_url\` fetch</span></span>
<span class="line"><span>- 예상 스키마:</span></span></code></pre></div><p>{ &quot;request_id&quot;: &quot;REQ-2026-04-12-0031&quot;, &quot;images&quot;: [ {&quot;id&quot;: &quot;IMG-001&quot;, &quot;url&quot;: &quot;...&quot;, &quot;label&quot;: &quot;S-001 XRD&quot;, &quot;type&quot;: &quot;xrd&quot;}, {&quot;id&quot;: &quot;IMG-002&quot;, &quot;url&quot;: &quot;...&quot;, &quot;label&quot;: &quot;S-001 SEM x5000&quot;, &quot;type&quot;: &quot;sem&quot;}, ... ] }</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- 이미지 수가 \`max_images\` 초과 시 사용자 확인</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 2. 배치 준비</span></span>
<span class="line"><span>- 이미지 리스트를 \`parallel_workers\` 크기 그룹으로 분할</span></span>
<span class="line"><span>- 각 그룹마다 서브에이전트 스폰 준비</span></span>
<span class="line"><span>- 캐시 조회: \`cache_dir/{request_id}/{IMG-XXX}.json\` 존재 여부</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 3. 서브에이전트 병렬 실행</span></span>
<span class="line"><span></span></span>
<span class="line"><span>각 이미지에 대해 독립 서브에이전트 호출:</span></span></code></pre></div>`,58),l("p",{analysis_mode:""},'spawn-subagent( task=f"다음 이미지를 분석하여 3줄 해석을 만드세요: URL: {image.url} 라벨: {image.label} 타입: {image.type} 분석 관점:',-1),a(`<pre><code>형식:
1. 가장 먼저 보이는 핵심 특징
2. 기술적 해석 또는 측정값 추정
3. 이상 유무 또는 특이점&quot;,
</code></pre><p>toolset=&quot;read-only + vision&quot;, model=&quot;auxiliary.vision&quot;, max_turns=5, timeout_seconds=60, return_format=&quot;structured&quot; )</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 4. 개별 이미지 해석 형식</span></span>
<span class="line"><span></span></span>
<span class="line"><span>각 서브에이전트는 다음 구조로 반환:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;image_id&quot;: &quot;IMG-001&quot;,</span></span>
<span class="line"><span>  &quot;image_url&quot;: &quot;...&quot;,</span></span>
<span class="line"><span>  &quot;label&quot;: &quot;S-001 XRD&quot;,</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;xrd&quot;,</span></span>
<span class="line"><span>  &quot;interpretation&quot;: [</span></span>
<span class="line"><span>    &quot;주요 회절 피크가 38.5°, 44.7°, 65.1°에서 관찰됨&quot;,</span></span>
<span class="line"><span>    &quot;Cu의 (111), (200), (220) 면에 해당하는 전형적 FCC 구조&quot;,</span></span>
<span class="line"><span>    &quot;피크 폭이 약간 넓어 결정립 크기 50nm 전후로 추정, 이상 없음&quot;</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;confidence&quot;: 0.92,</span></span>
<span class="line"><span>  &quot;flags&quot;: []</span><span>  // &quot;blurry&quot;, &quot;incomplete&quot;, &quot;anomaly&quot; 등</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 5. 결과 수집 및 검증</span></span>
<span class="line"><span>- 모든 서브에이전트 완료 대기 (부분 실패는 재시도 1회)</span></span>
<span class="line"><span>- 각 해석이 정확히 3줄인지 검증</span></span>
<span class="line"><span>- 빈 해석·에러는 \`flags: [&quot;failed&quot;]\`로 표시</span></span>
<span class="line"><span>- 이상 소견(\`anomaly\`) flag 항목은 별도 집계</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 6. 최종 리포트 객체</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;request_id&quot;: &quot;REQ-2026-04-12-0031&quot;,</span></span>
<span class="line"><span>  &quot;total_images&quot;: 12,</span></span>
<span class="line"><span>  &quot;analyzed&quot;: 12,</span></span>
<span class="line"><span>  &quot;failed&quot;: 0,</span></span>
<span class="line"><span>  &quot;images&quot;: [</span></span>
<span class="line"><span>    { ... },</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;anomalies&quot;: [</span></span>
<span class="line"><span>    { &quot;image_id&quot;: &quot;IMG-008&quot;, &quot;reason&quot;: &quot;피크 강도 비정상&quot; }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;analysis_duration_seconds&quot;: 47,</span></span>
<span class="line"><span>  &quot;cached_count&quot;: 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 7. 캐시 저장</span></span>
<span class="line"><span>- 개별 이미지 해석을 \`cache_dir/{request_id}/{IMG-XXX}.json\`로 저장</span></span>
<span class="line"><span>- 다음 실행 시 캐시 히트로 비용 절약</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 의사결정 분기</span></span>
<span class="line"><span>- **이미지 &gt; 20** → 비용·시간 경고, 사용자 확인</span></span>
<span class="line"><span>- **VLM 타임아웃** → 해당 이미지만 \`flags: [&quot;timeout&quot;]\`로 표시, 계속 진행</span></span>
<span class="line"><span>- **이미지 로드 실패** → \`flags: [&quot;unreachable&quot;]\`, 해석은 &quot;[이미지 접근 불가]&quot;</span></span>
<span class="line"><span>- **type 필드 없음** → VLM에 일반 관점 분석 지시</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 실패 기준 (do-not)</span></span>
<span class="line"><span>- 보지 않은 이미지에 대해 **해석을 지어내지 않는다**</span></span>
<span class="line"><span>- 3줄 형식을 **엄격히** 지킴 (4줄 또는 2줄 금지)</span></span>
<span class="line"><span>- 숫자·측정값은 **추정**임을 명시 (&quot;약&quot;, &quot;추정&quot;, &quot;전후&quot;)</span></span>
<span class="line"><span>- 이미지 URL에 인증 토큰이 포함되어 있으면 캐시에 저장 금지</span></span>
<span class="line"><span>- 이상 소견을 과장하거나 축소하지 않음</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 사용 예</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>&gt; /image-batch-analyzer \\</span></span>
<span class="line"><span>    image_list_url=https://lab.example.com/api/images?req=REQ-... \\</span></span>
<span class="line"><span>    request_id=REQ-2026-04-12-0031 \\</span></span>
<span class="line"><span>    analysis_mode=technical</span></span>
<span class="line"><span></span></span>
<span class="line"><span>🔍 이미지 목록 수신: 12장</span></span>
<span class="line"><span>🧠 VLM 분석 중 (병렬 4 워커)...</span></span>
<span class="line"><span>  [IMG-001] S-001 XRD ✓</span></span>
<span class="line"><span>  [IMG-002] S-001 SEM x5000 ✓</span></span>
<span class="line"><span>  [IMG-003] S-002 XRD ✓</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  [IMG-008] S-002 SEM x5000 ⚠ 이상 소견 감지</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  [IMG-012] S-003 EDS ✓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✓ 완료: 12/12 성공, 이상 소견 1건 (47초)</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## #4 report-composer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>메타데이터·이미지 해석·템플릿을 받아 **종합 리포트를 Markdown으로 생성**합니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`\`markdown</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>name: report-composer</span></span>
<span class="line"><span>version: 1.0.0</span></span>
<span class="line"><span>description: |</span></span>
<span class="line"><span>  request_id, 메타데이터 객체, 이미지 해석 리스트, 템플릿 파일을 받아</span></span>
<span class="line"><span>  종합 분석 리포트를 Markdown으로 생성해 저장하고 파일 경로를 반환한다.</span></span>
<span class="line"><span>  분석 리포트 자동화 파이프라인의 4번째 단계.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>author: template</span></span>
<span class="line"><span>license: MIT</span></span>
<span class="line"><span>category: Research</span></span>
<span class="line"><span>tags: [report, composition, template, markdown]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>triggers:</span></span>
<span class="line"><span>  keywords: [report compose, 리포트 작성, 분석 보고서 생성]</span></span>
<span class="line"><span>  intent: documentation</span></span>
<span class="line"><span></span></span>
<span class="line"><span>requires:</span></span>
<span class="line"><span>  tools: [file-read, file-write]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parameters:</span></span>
<span class="line"><span>  - name: request_id</span></span>
<span class="line"><span>    type: string</span></span>
<span class="line"><span>    required: true</span></span>
<span class="line"><span>  - name: metadata</span></span>
<span class="line"><span>    type: object</span></span>
<span class="line"><span>    required: true</span></span>
<span class="line"><span>    description: &quot;metadata-fetcher가 반환한 객체&quot;</span></span>
<span class="line"><span>  - name: image_analysis</span></span>
<span class="line"><span>    type: object</span></span>
<span class="line"><span>    required: true</span></span>
<span class="line"><span>    description: &quot;image-batch-analyzer가 반환한 객체&quot;</span></span>
<span class="line"><span>  - name: template_path</span></span>
<span class="line"><span>    type: path</span></span>
<span class="line"><span>    required: true</span></span>
<span class="line"><span>    description: &quot;템플릿 Markdown 파일 경로. &#39;default&#39;면 내장 기본 템플릿&quot;</span></span>
<span class="line"><span>  - name: output_dir</span></span>
<span class="line"><span>    type: path</span></span>
<span class="line"><span>    default: &quot;./reports&quot;</span></span>
<span class="line"><span>  - name: include_raw_images</span></span>
<span class="line"><span>    type: boolean</span></span>
<span class="line"><span>    default: true</span></span>
<span class="line"><span>    description: &quot;리포트에 이미지 링크 포함 여부&quot;</span></span>
<span class="line"><span>  - name: language</span></span>
<span class="line"><span>    type: enum</span></span>
<span class="line"><span>    values: [ko, en]</span></span>
<span class="line"><span>    default: ko</span></span>
<span class="line"><span></span></span>
<span class="line"><span>safety:</span></span>
<span class="line"><span>  approval: auto</span></span>
<span class="line"><span>  side_effects: [local_write]</span></span>
<span class="line"><span>  reversible: true</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Report Composer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 목표</span></span>
<span class="line"><span>구조화된 입력을 템플릿에 주입하여 최종 리포트를 \`{{output_dir}}/{{request_id}}.md\`에 저장.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 절차</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 1. 템플릿 로드</span></span>
<span class="line"><span>- \`template_path\`가 파일이면 \`file-read\`로 로드</span></span>
<span class="line"><span>- &quot;default&quot;이면 내장 기본 템플릿 사용 (아래 섹션 참조)</span></span>
<span class="line"><span>- 템플릿 파일 없음 → 에러</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 2. 템플릿 플레이스홀더 인식</span></span>
<span class="line"><span></span></span>
<span class="line"><span>지원하는 플레이스홀더 (이중 중괄호):</span></span>
<span class="line"><span>- \`{{REQUEST_ID}}\` — request ID</span></span>
<span class="line"><span>- \`{{DATE}}\` — 현재 날짜 (YYYY-MM-DD)</span></span>
<span class="line"><span>- \`{{ANALYST}}\` — metadata.analyst</span></span>
<span class="line"><span>- \`{{BACKGROUND}}\` — metadata.background.purpose</span></span>
<span class="line"><span>- \`{{RAW_REQUEST}}\` — metadata.background.raw_request</span></span>
<span class="line"><span>- \`{{SAMPLES_TABLE}}\` — samples 배열을 Markdown 테이블로</span></span>
<span class="line"><span>- \`{{SAMPLE_COUNT}}\` — 시료 수</span></span>
<span class="line"><span>- \`{{IMAGE_ANALYSES}}\` — 이미지별 3줄 해석을 섹션으로</span></span>
<span class="line"><span>- \`{{IMAGE_COUNT}}\` — 이미지 수</span></span>
<span class="line"><span>- \`{{ANOMALIES}}\` — 이상 소견 요약</span></span>
<span class="line"><span>- \`{{ANOMALY_COUNT}}\` — 이상 소견 개수</span></span>
<span class="line"><span>- \`{{CONCLUSION}}\` — 자동 생성된 결론 (LLM)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 3. 각 플레이스홀더 렌더링</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**SAMPLES_TABLE**:</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>| ID | 이름 | 재질 | 준비 방법 |</span></span>
<span class="line"><span>|-----|------|------|---------|</span></span>
<span class="line"><span>| S-001 | 샘플 A | Cu-Al alloy | 연마 후 폴리싱 |</span></span>
<span class="line"><span>| S-002 | 샘플 B | Ni-Ti | 화학 에칭 |</span></span>
<span class="line"><span>| S-003 | 샘플 C | Fe-C | 열처리 |</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**IMAGE_ANALYSES** (이미지별로):</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>### IMG-001 · S-001 XRD</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(이미지 링크 삽입)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 주요 회절 피크가 38.5°, 44.7°, 65.1°에서 관찰됨</span></span>
<span class="line"><span>2. Cu의 (111), (200), (220) 면에 해당하는 전형적 FCC 구조</span></span>
<span class="line"><span>3. 피크 폭이 약간 넓어 결정립 크기 50nm 전후로 추정, 이상 없음</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**ANOMALIES**:</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>## ⚠ 이상 소견</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1건의 이상 소견이 감지되었습니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 이미지 | 시료 | 이유 |</span></span>
<span class="line"><span>|--------|------|------|</span></span>
<span class="line"><span>| IMG-008 | S-002 | 피크 강도 비정상 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>담당자의 추가 검토가 필요합니다.</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**CONCLUSION** (자동 생성):</span></span>
<span class="line"><span>전체 맥락을 종합해 LLM이 3–5문장 결론 작성. 포함 요소:</span></span>
<span class="line"><span>- 분석 목적 달성 여부</span></span>
<span class="line"><span>- 시료별 핵심 발견</span></span>
<span class="line"><span>- 이상 소견에 대한 대응 제안</span></span>
<span class="line"><span>- 후속 작업 제안</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 4. 템플릿 렌더링</span></span>
<span class="line"><span>- 치환은 **순수 문자열 교체** (Jinja2 같은 복잡한 엔진 불필요)</span></span>
<span class="line"><span>- 플레이스홀더가 누락되면 &quot;[정보 없음]&quot;으로 대체</span></span>
<span class="line"><span>- 알 수 없는 플레이스홀더는 경고 로그 + 원본 유지</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 5. 저장</span></span>
<span class="line"><span>- 디렉토리 없으면 생성</span></span>
<span class="line"><span>- 파일명: \`{{output_dir}}/{{request_id}}.md\`</span></span>
<span class="line"><span>- 이미 존재하면 \`.1\`, \`.2\` 접미</span></span>
<span class="line"><span>- UTF-8 인코딩</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 6. 검증</span></span>
<span class="line"><span>- 파일 크기 &gt; 0</span></span>
<span class="line"><span>- Markdown 구조 무결 (헤딩 레벨, 테이블 정합성)</span></span>
<span class="line"><span>- 플레이스홀더 잔여 여부 (모두 치환되었는지)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 7. 결과 반환</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;status&quot;: &quot;success&quot;,</span></span>
<span class="line"><span>  &quot;output_path&quot;: &quot;/reports/REQ-2026-04-12-0031.md&quot;,</span></span>
<span class="line"><span>  &quot;size_bytes&quot;: 8421,</span></span>
<span class="line"><span>  &quot;word_count&quot;: 1203,</span></span>
<span class="line"><span>  &quot;sections&quot;: 8,</span></span>
<span class="line"><span>  &quot;anomaly_count&quot;: 1,</span></span>
<span class="line"><span>  &quot;rendered_at&quot;: &quot;2026-04-12T10:45:23Z&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 내장 기본 템플릿 (\`template_path=default\`)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span># 분석 보고서: {{REQUEST_ID}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**작성일**: {{DATE}}</span></span>
<span class="line"><span>**담당자**: {{ANALYST}}</span></span>
<span class="line"><span>**요청 ID**: {{REQUEST_ID}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 1. 요청 배경</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{{BACKGROUND}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 원본 요청</span></span>
<span class="line"><span>&gt; {{RAW_REQUEST}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 2. 시료 정보</span></span>
<span class="line"><span></span></span>
<span class="line"><span>총 {{SAMPLE_COUNT}}종의 시료가 분석되었습니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{{SAMPLES_TABLE}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 3. 이미지 분석 결과</span></span>
<span class="line"><span></span></span>
<span class="line"><span>총 {{IMAGE_COUNT}}장의 이미지에 대해 비전 분석을 수행하였습니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{{IMAGE_ANALYSES}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 4. 이상 소견 요약</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{{ANOMALIES}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 5. 결론 및 제언</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{{CONCLUSION}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>*본 보고서는 에이전트 기반 자동화 파이프라인(analysis-report-flow)으로 생성되었습니다.*</span></span>
<span class="line"><span>*원본 이미지와 상세 데이터는 사내 LIMS에서 확인하세요.*</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 실패 기준 (do-not)</span></span>
<span class="line"><span>- 템플릿에 없는 섹션을 **임의로 추가하지 않는다**</span></span>
<span class="line"><span>- 해석 데이터를 **수정·보강하지 않는다** — 이미지 분석 결과 그대로</span></span>
<span class="line"><span>- 이상 소견을 결론에서 **축소·생략하지 않음**</span></span>
<span class="line"><span>- 저장 실패 시 &quot;성공&quot;으로 보고하지 않음</span></span>
<span class="line"><span>- 템플릿 파일 경로가 디렉토리 밖(\`..\`, 절대경로 탈출)이면 거부</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 사용 예</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>&gt; /report-composer \\</span></span>
<span class="line"><span>    request_id=REQ-2026-04-12-0031 \\</span></span>
<span class="line"><span>    metadata=&lt;metadata-fetcher 결과&gt; \\</span></span>
<span class="line"><span>    image_analysis=&lt;image-batch-analyzer 결과&gt; \\</span></span>
<span class="line"><span>    template_path=./templates/lab-report.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>📝 리포트 생성 중...</span></span>
<span class="line"><span>  템플릿 로드: ./templates/lab-report.md ✓</span></span>
<span class="line"><span>  플레이스홀더 치환: 12개 ✓</span></span>
<span class="line"><span>  결론 자동 생성 중... ✓</span></span>
<span class="line"><span>  파일 검증 ✓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✓ 저장 완료: /reports/REQ-2026-04-12-0031.md</span></span>
<span class="line"><span>  크기: 8.2 KB · 단어 수: 1,203 · 섹션: 8 · 이상 소견: 1건</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## #5 analysis-report-flow (합성)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>위 4개 스킬을 **한 번의 호출로** 오케스트레이션하는 상위 스킬.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`\`markdown</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>name: analysis-report-flow</span></span>
<span class="line"><span>version: 1.0.0</span></span>
<span class="line"><span>description: |</span></span>
<span class="line"><span>  사용자 요청에서 request_id를 인식해 메타데이터·이미지 분석·리포트 생성까지</span></span>
<span class="line"><span>  전 과정을 자동 실행하는 합성 스킬. request-id-extractor → metadata-fetcher</span></span>
<span class="line"><span>  → image-batch-analyzer → report-composer 순으로 체이닝한다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>author: template</span></span>
<span class="line"><span>license: MIT</span></span>
<span class="line"><span>category: Research</span></span>
<span class="line"><span>tags: [report, automation, pipeline, composite]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>triggers:</span></span>
<span class="line"><span>  keywords: [분석 보고서, analysis report, 리포트 자동 생성, 분석 자동화]</span></span>
<span class="line"><span>  intent: report-generation</span></span>
<span class="line"><span></span></span>
<span class="line"><span>requires:</span></span>
<span class="line"><span>  skills:</span></span>
<span class="line"><span>    - request-id-extractor</span></span>
<span class="line"><span>    - metadata-fetcher</span></span>
<span class="line"><span>    - image-batch-analyzer</span></span>
<span class="line"><span>    - report-composer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parameters:</span></span>
<span class="line"><span>  - name: user_input</span></span>
<span class="line"><span>    type: string</span></span>
<span class="line"><span>    required: true</span></span>
<span class="line"><span>    description: &quot;사용자 원본 요청 (request_id 포함)&quot;</span></span>
<span class="line"><span>  - name: metadata_url</span></span>
<span class="line"><span>    type: string</span></span>
<span class="line"><span>    default: &quot;https://lab.example.com/api/requests&quot;</span></span>
<span class="line"><span>  - name: template_path</span></span>
<span class="line"><span>    type: path</span></span>
<span class="line"><span>    default: &quot;default&quot;</span></span>
<span class="line"><span>  - name: output_dir</span></span>
<span class="line"><span>    type: path</span></span>
<span class="line"><span>    default: &quot;./reports&quot;</span></span>
<span class="line"><span>  - name: parallel_image_workers</span></span>
<span class="line"><span>    type: integer</span></span>
<span class="line"><span>    default: 4</span></span>
<span class="line"><span>  - name: notify_on_complete</span></span>
<span class="line"><span>    type: boolean</span></span>
<span class="line"><span>    default: false</span></span>
<span class="line"><span>    description: &quot;완료 시 메시징 플랫폼으로 알림 (v0.8.0+)&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>safety:</span></span>
<span class="line"><span>  approval: auto</span></span>
<span class="line"><span>  side_effects: [network, local_write]</span></span>
<span class="line"><span>  reversible: true</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Analysis Report Flow (Composite Skill)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 목표</span></span>
<span class="line"><span>사용자 자연어 요청 하나를 받아 분석 보고서 생성의 전 과정을 자동화.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 파이프라인</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Step 1/4 · Request ID 추출</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>result_1 = {{&gt; request-id-extractor user_input=$user_input}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if result_1.request_id is null:</span></span>
<span class="line"><span>  return &quot;요청 ID를 인식하지 못했습니다. 예: REQ-2026-04-12-0031&quot;</span></span></code></pre></div><h3 id="step-2-4-·-메타데이터-fetch" tabindex="-1">Step 2/4 · 메타데이터 fetch <a class="header-anchor" href="#step-2-4-·-메타데이터-fetch" aria-label="Permalink to &quot;Step 2/4 · 메타데이터 fetch&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>result_2 = {{&gt; metadata-fetcher </span></span>
<span class="line"><span>              request_id=$result_1.request_id</span></span>
<span class="line"><span>              metadata_url=$metadata_url}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if result_2.status != &quot;ready&quot;:</span></span>
<span class="line"><span>  return &quot;요청 상태가 처리 중이 아닙니다: &quot; + result_2.status</span></span></code></pre></div><h3 id="step-3-4-·-이미지-배치-분석" tabindex="-1">Step 3/4 · 이미지 배치 분석 <a class="header-anchor" href="#step-3-4-·-이미지-배치-분석" aria-label="Permalink to &quot;Step 3/4 · 이미지 배치 분석&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>result_3 = {{&gt; image-batch-analyzer</span></span>
<span class="line"><span>              image_list_url=$result_2.image_list_url</span></span>
<span class="line"><span>              request_id=$result_1.request_id</span></span>
<span class="line"><span>              parallel_workers=$parallel_image_workers}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if result_3.failed &gt; 0:</span></span>
<span class="line"><span>  warn(&quot;일부 이미지 분석 실패: &quot; + result_3.failed + &quot;건&quot;)</span></span></code></pre></div><h3 id="step-4-4-·-리포트-합성" tabindex="-1">Step 4/4 · 리포트 합성 <a class="header-anchor" href="#step-4-4-·-리포트-합성" aria-label="Permalink to &quot;Step 4/4 · 리포트 합성&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>result_4 = {{&gt; report-composer</span></span>
<span class="line"><span>              request_id=$result_1.request_id</span></span>
<span class="line"><span>              metadata=$result_2</span></span>
<span class="line"><span>              image_analysis=$result_3</span></span>
<span class="line"><span>              template_path=$template_path</span></span>
<span class="line"><span>              output_dir=$output_dir}}</span></span></code></pre></div><h3 id="최종-보고" tabindex="-1">최종 보고 <a class="header-anchor" href="#최종-보고" aria-label="Permalink to &quot;최종 보고&quot;">​</a></h3><p>에이전트는 각 단계의 진행을 사용자에게 실시간 표시하고, 완료 시 다음을 보고한다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>📄 보고서 저장 완료</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  경로:     /reports/REQ-2026-04-12-0031.md</span></span>
<span class="line"><span>  크기:     8.2 KB</span></span>
<span class="line"><span>  단어 수:   1,203</span></span>
<span class="line"><span>  이미지:    12장 분석 (이상 1건)</span></span>
<span class="line"><span>  시료:     3종</span></span>
<span class="line"><span>  소요 시간: 54초</span></span>
<span class="line"><span></span></span>
<span class="line"><span>다음 단계:</span></span>
<span class="line"><span>  - 보고서 확인: cat /reports/REQ-2026-04-12-0031.md</span></span>
<span class="line"><span>  - 이상 소견 검토 필요: IMG-008 (S-002)</span></span>
<span class="line"><span>  - 담당자(kim@lab)에게 공유</span></span></code></pre></div><h2 id="실패-시-복구-전략" tabindex="-1">실패 시 복구 전략 <a class="header-anchor" href="#실패-시-복구-전략" aria-label="Permalink to &quot;실패 시 복구 전략&quot;">​</a></h2><table tabindex="0"><thead><tr><th>단계</th><th>실패 원인</th><th>복구</th></tr></thead><tbody><tr><td>1</td><td>ID 인식 실패</td><td>재질의</td></tr><tr><td>2</td><td>401/403</td><td>API 키 확인 요청</td></tr><tr><td>2</td><td>404</td><td>request_id 오타 확인</td></tr><tr><td>2</td><td>5xx</td><td>지수 백오프 재시도 (최대 3회)</td></tr><tr><td>3</td><td>개별 이미지 실패</td><td>해당 이미지만 flag + 계속 진행</td></tr><tr><td>3</td><td>전체 실패</td><td>이미지 없이 리포트 생성 옵션 제시</td></tr><tr><td>4</td><td>템플릿 없음</td><td>default 템플릿으로 폴백</td></tr><tr><td>4</td><td>저장 실패</td><td>임시 디렉토리로 대체 + 경로 보고</td></tr></tbody></table><h2 id="백그라운드-알림-v0-8-0" tabindex="-1">백그라운드 알림 (v0.8.0+) <a class="header-anchor" href="#백그라운드-알림-v0-8-0" aria-label="Permalink to &quot;백그라운드 알림 (v0.8.0+)&quot;">​</a></h2><p><code>notify_on_complete: true</code>이면 작업을 백그라운드로 시작하고 완료 시 능동적으로 알림:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>에이전트: &quot;분석 요청 REQ-2026-04-12-0031 처리 시작했습니다.</span></span>
<span class="line"><span>         평균 1분 정도 소요됩니다. 다른 일 먼저 하실 수 있습니다.&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[54초 후 자동 알림]</span></span>
<span class="line"><span>에이전트: &quot;요청하신 REQ-2026-04-12-0031 분석 보고서가 완료되었습니다.</span></span>
<span class="line"><span>         경로: /reports/REQ-2026-04-12-0031.md</span></span>
<span class="line"><span>         ⚠ 이상 소견 1건 감지 — IMG-008 확인 필요&quot;</span></span></code></pre></div><h2 id="실패-기준-do-not-1" tabindex="-1">실패 기준 (do-not) <a class="header-anchor" href="#실패-기준-do-not-1" aria-label="Permalink to &quot;실패 기준 (do-not)&quot;">​</a></h2><ul><li>중간 단계 실패를 <strong>건너뛰지 않음</strong> — 복구 또는 명시적 중단</li><li>실패를 부분 성공으로 <strong>포장하지 않음</strong></li><li>사용자 승인 없이 <strong>이전 리포트를 덮어쓰지 않음</strong></li><li>4단계 모두 통과하지 않으면 &quot;완료&quot; 메시지 금지</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 호출 방법</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### A. 자연어 (가장 일반적)</span></span></code></pre></div><p>사용자: &quot;REQ-2026-04-12-0031 분석 보고서 만들어줘&quot;</p><p>에이전트: [analysis-report-flow 라우팅] [1/4] request-id 추출... ✓ [2/4] 메타 fetch... ✓ [3/4] 이미지 12장 VLM 분석... ✓ [4/4] 리포트 생성... ✓</p><p>📄 /reports/REQ-2026-04-12-0031.md</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>#### B. 슬래시 + 인자</span></span></code></pre></div><p>/analysis-report-flow user_input=&quot;REQ-2026-04-12-0031 처리&quot; /analysis-report-flow user_input=&quot;REQ-2026-04-12-0031&quot; template_path=./templates/full.md</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>#### C. 크론 무인 실행</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`yaml</span></span>
<span class="line"><span># ~/.hermes/cron/hourly-reports.yaml</span></span>
<span class="line"><span>- name: pending-reports-hourly</span></span>
<span class="line"><span>  schedule: &quot;0 * * * *&quot;</span></span>
<span class="line"><span>  task: |</span></span>
<span class="line"><span>    /pending-requests API에서 request_id 목록을 받아</span></span>
<span class="line"><span>    각각에 대해 /analysis-report-flow 실행.</span></span>
<span class="line"><span>    완료된 보고서 경로 목록을 Slack #lab-automation에 게시.</span></span></code></pre></div><h4 id="d-api-서버-호출" tabindex="-1">D. API 서버 호출 <a class="header-anchor" href="#d-api-서버-호출" aria-label="Permalink to &quot;D. API 서버 호출&quot;">​</a></h4><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> openai </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OpenAI</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OpenAI(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">base_url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://localhost:8080/v1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">api_key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hermes-local&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">resp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> client.chat.completions.create(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    messages</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;role&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/analysis-report-flow user_input=&#39;REQ-2026-04-12-0031&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }],</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    extra_headers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;X-Hermes-Session-Id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;auto-report-job-12345&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(resp.choices[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].message.content)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># → /reports/REQ-2026-04-12-0031.md</span></span></code></pre></div><h4 id="e-웹훅-트리거" tabindex="-1">E. 웹훅 트리거 <a class="header-anchor" href="#e-웹훅-트리거" aria-label="Permalink to &quot;E. 웹훅 트리거&quot;">​</a></h4><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 외부 시스템이 LIMS 웹훅으로 request ID를 보내면 자동 처리</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">gateway</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  webhook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    endpoints</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/lab/new-request</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/analysis-report-flow user_input=&#39;\${payload.request_id}&#39;&quot;</span></span></code></pre></div><hr><h2 id="지시-방법-치트시트" tabindex="-1">지시 방법 치트시트 <a class="header-anchor" href="#지시-방법-치트시트" aria-label="Permalink to &quot;지시 방법 치트시트&quot;">​</a></h2><p>같은 목적을 여러 방식으로 표현할 수 있습니다. 라우터가 모두 <code>analysis-report-flow</code>로 매핑합니다.</p><table tabindex="0"><thead><tr><th>표현 방식</th><th>예시</th></tr></thead><tbody><tr><td><strong>간단 지시</strong></td><td>&quot;REQ-2026-04-12-0031 분석 보고서 만들어줘&quot;</td></tr><tr><td><strong>명령형</strong></td><td>&quot;REQ-2026-04-12-0031 처리해줘&quot;</td></tr><tr><td><strong>요청형</strong></td><td>&quot;이 요청 리포트 부탁해. REQ-2026-04-12-0031&quot;</td></tr><tr><td><strong>복수</strong></td><td>&quot;REQ-2026-04-12-0031, REQ-2026-04-12-0032 둘 다 처리&quot;</td></tr><tr><td><strong>슬래시</strong></td><td><code>/analysis-report-flow user_input=&quot;REQ-2026-04-12-0031&quot;</code></td></tr><tr><td><strong>숏컷</strong></td><td><code>/report REQ-2026-04-12-0031</code> (alias 설정 시)</td></tr><tr><td><strong>영어</strong></td><td>&quot;Generate analysis report for REQ-2026-04-12-0031&quot;</td></tr></tbody></table><h3 id="추가-옵션-지정" tabindex="-1">추가 옵션 지정 <a class="header-anchor" href="#추가-옵션-지정" aria-label="Permalink to &quot;추가 옵션 지정&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; &quot;REQ-2026-04-12-0031 영문 보고서로 만들어줘&quot;</span></span>
<span class="line"><span>  → language=en</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; &quot;REQ-2026-04-12-0031 템플릿 full로&quot;</span></span>
<span class="line"><span>  → template_path=./templates/full.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; &quot;REQ-2026-04-12-0031 빠르게 처리해줘. 이미지는 병렬 8로&quot;</span></span>
<span class="line"><span>  → parallel_image_workers=8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; &quot;REQ-2026-04-12-0031 백그라운드로. 끝나면 알려줘&quot;</span></span>
<span class="line"><span>  → notify_on_complete=true</span></span></code></pre></div><h3 id="디버깅·부분-실행" tabindex="-1">디버깅·부분 실행 <a class="header-anchor" href="#디버깅·부분-실행" aria-label="Permalink to &quot;디버깅·부분 실행&quot;">​</a></h3><p>파이프라인 전체가 아니라 특정 단계만 돌려보고 싶을 때:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; &quot;REQ-2026-04-12-0031 메타데이터만 확인&quot;</span></span>
<span class="line"><span>  → /metadata-fetcher request_id=REQ-2026-04-12-0031</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; &quot;방금 메타의 이미지만 분석해봐&quot;</span></span>
<span class="line"><span>  → /image-batch-analyzer &lt;URL from previous&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; &quot;그 분석 결과로 리포트 생성&quot;</span></span>
<span class="line"><span>  → /report-composer &lt;previous outputs&gt;</span></span></code></pre></div><hr><h2 id="설치-스크립트" tabindex="-1">설치 스크립트 <a class="header-anchor" href="#설치-스크립트" aria-label="Permalink to &quot;설치 스크립트&quot;">​</a></h2><p>5개 스킬을 한 번에 설치:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># install-report-skills.sh</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SKILLS_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.hermes/skills&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$SKILLS_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> skill </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  request-id-extractor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  metadata-fetcher</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  image-batch-analyzer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  report-composer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  analysis-report-flow</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$SKILLS_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$skill</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;→ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$skill</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">: SKILL.md 본문을 복사해 붙여넣으세요&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;   파일: </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$SKILLS_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$skill</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/SKILL.md&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">done</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 검증</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hermes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> skills</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> request-id-extractor</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hermes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> skills</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> metadata-fetcher</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hermes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> skills</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> image-batch-analyzer</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hermes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> skills</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> report-composer</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hermes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> skills</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> analysis-report-flow</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 최종 테스트</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;테스트 실행:&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hermes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> skills</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> analysis-report-flow</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --dry-run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  user_input=&quot;REQ-2026-04-12-0031 테스트&quot;</span></span></code></pre></div><p>팀 공유용 레포 배포:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./my-lab-project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .hermes/skills</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.hermes/skills/{request-id-extractor,metadata-fetcher,image-batch-analyzer,report-composer,analysis-report-flow}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      .hermes/skills/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .hermes/skills</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;chore: 분석 리포트 자동화 스킬 5종 추가&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre></div><p>팀원이 <code>git pull</code> 하면 즉시 같은 파이프라인을 쓸 수 있습니다.</p><hr><h2 id="확장-아이디어" tabindex="-1">확장 아이디어 <a class="header-anchor" href="#확장-아이디어" aria-label="Permalink to &quot;확장 아이디어&quot;">​</a></h2><p>이 기본 5종 위에 얹을 수 있는 추가 스킬:</p><div class="gallery-grid cols-2"><div class="gcard"><span class="gcard-tag">확장</span><div class="gcard-icon">📊</div><h3>report-quality-check</h3><p>생성된 리포트가 템플릿 요구사항을 충족하는지 검증. 필수 섹션, 길이, 수치 일관성 확인.</p></div><div class="gcard"><span class="gcard-tag">확장</span><div class="gcard-icon">📧</div><h3>report-distributor</h3><p>완성된 리포트를 담당자 이메일·Slack·담당 팀에 자동 배포. 첨부 파일 형태.</p></div><div class="gcard"><span class="gcard-tag">확장</span><div class="gcard-icon">📈</div><h3>anomaly-tracker</h3><p>이상 소견이 있는 리포트를 별도 DB에 누적 기록. 추세 분석·알림.</p></div><div class="gcard"><span class="gcard-tag">확장</span><div class="gcard-icon">🔄</div><h3>report-revision-manager</h3><p>동일 request_id에 대한 재분석 요청 시 버전 관리 (v1, v2). diff 생성.</p></div><div class="gcard"><span class="gcard-tag">확장</span><div class="gcard-icon">🌐</div><h3>report-translator</h3><p>생성된 한국어 리포트를 영어로 번역. 해외 협력사 공유용.</p></div><div class="gcard"><span class="gcard-tag">확장</span><div class="gcard-icon">📦</div><h3>bulk-report-runner</h3><p>여러 request_id를 배치로 처리. 진행률·실패 목록·재시도 관리.</p></div></div><hr><h2 id="자주-묻는-질문" tabindex="-1">자주 묻는 질문 <a class="header-anchor" href="#자주-묻는-질문" aria-label="Permalink to &quot;자주 묻는 질문&quot;">​</a></h2><h3 id="q-request-id가-없는-요청도-처리할-수-있나요" tabindex="-1">Q. request_id가 없는 요청도 처리할 수 있나요? <a class="header-anchor" href="#q-request-id가-없는-요청도-처리할-수-있나요" aria-label="Permalink to &quot;Q. request_id가 없는 요청도 처리할 수 있나요?&quot;">​</a></h3><p>A. <code>request-id-extractor</code>가 실패하면 파이프라인이 중단되고 사용자에게 재질의합니다. 다른 식별자(시료 ID, 날짜 등)로도 처리하려면 <code>metadata-fetcher</code>에 대체 lookup 로직을 추가해야 합니다.</p><h3 id="q-이미지가-너무-많으면-비용이-걱정됩니다" tabindex="-1">Q. 이미지가 너무 많으면 비용이 걱정됩니다. <a class="header-anchor" href="#q-이미지가-너무-많으면-비용이-걱정됩니다" aria-label="Permalink to &quot;Q. 이미지가 너무 많으면 비용이 걱정됩니다.&quot;">​</a></h3><p>A. <code>max_images</code> 파라미터로 안전장치가 있습니다. 또한 <a href="/hermes/guide/model-selection#보조-모델-게이팅-v0-8-0">보조 모델 게이팅</a>으로 VLM을 저렴한 <code>mimo-v2-pro</code>로 지정하면 비용이 크게 줄어듭니다.</p><h3 id="q-템플릿을-여러-개-두고-상황에-따라-선택할-수-있나요" tabindex="-1">Q. 템플릿을 여러 개 두고 상황에 따라 선택할 수 있나요? <a class="header-anchor" href="#q-템플릿을-여러-개-두고-상황에-따라-선택할-수-있나요" aria-label="Permalink to &quot;Q. 템플릿을 여러 개 두고 상황에 따라 선택할 수 있나요?&quot;">​</a></h3><p>A. 가능합니다. <code>template_path</code>를 조건 매개변수로 받거나, 상위 스킬에서 <code>metadata.analysis_type</code>에 따라 다른 템플릿을 지정하도록 본문을 수정하면 됩니다.</p><h3 id="q-리포트-생성-후-자동으로-pdf로-바꾸고-싶습니다" tabindex="-1">Q. 리포트 생성 후 자동으로 PDF로 바꾸고 싶습니다. <a class="header-anchor" href="#q-리포트-생성-후-자동으로-pdf로-바꾸고-싶습니다" aria-label="Permalink to &quot;Q. 리포트 생성 후 자동으로 PDF로 바꾸고 싶습니다.&quot;">​</a></h3><p>A. <code>report-composer</code> 후단에 <code>markdown-render</code> 도구 호출을 추가하거나, 확장 아이디어의 <code>report-distributor</code> 스킬에 PDF 변환 단계를 넣으세요.</p><h3 id="q-서브에이전트-병렬-처리가-실제로-얼마나-빠른가요" tabindex="-1">Q. 서브에이전트 병렬 처리가 실제로 얼마나 빠른가요? <a class="header-anchor" href="#q-서브에이전트-병렬-처리가-실제로-얼마나-빠른가요" aria-label="Permalink to &quot;Q. 서브에이전트 병렬 처리가 실제로 얼마나 빠른가요?&quot;">​</a></h3><p>A. 이미지 12장 기준 순차 처리가 약 3분, 병렬 4워커는 약 50초입니다(각 이미지 분석이 10초 전후일 때). 이미지 수가 많을수록 차이가 커집니다.</p><hr><div class="tip custom-block"><p class="custom-block-title">다음 단계</p><ul><li><a href="/hermes/reusability/skill-cookbook">스킬 쿡북</a> — 여기에 나온 스킬들을 <strong>본인 도메인에 맞게 재구성</strong>하는 방법</li><li><a href="/hermes/reusability/skill-examples">스킬 예시집 (문서 작성)</a> — 다른 주제의 예시 12종</li><li><a href="/hermes/advanced/subagents">서브에이전트</a> — <code>#3 image-batch-analyzer</code>의 병렬 처리 심화</li><li><a href="/hermes/features/cron">크론 스케줄러</a> — 무인 자동 실행 상세</li><li><a href="/hermes/integration/web-ui">통합 패턴 · Web UI</a> — 브라우저 기반 리포트 요청 UI</li></ul></div>`,64)])])}const g=n(t,[["render",e]]);export{E as __pageData,g as default};
