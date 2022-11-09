import{_ as s,c as o,o as a,a as n}from"./app.3b6acc86.js";const d=JSON.parse('{"title":"Rindo CLI telemetry","description":"","frontmatter":{},"headers":[{"level":3,"title":"Why Is Telemetry Collected?","slug":"why-is-telemetry-collected"},{"level":3,"title":"What Is Being Collected?","slug":"what-is-being-collected"},{"level":3,"title":"What about Sensitive Data (e.g. Secrets)?","slug":"what-about-sensitive-data-e-g-secrets"},{"level":3,"title":"Will This Data Be Shared?","slug":"will-this-data-be-shared"},{"level":3,"title":"How Do I Opt-Out?","slug":"how-do-i-opt-out"}],"relativePath":"guide/telemetry.md"}'),e={name:"guide/telemetry.md"},l=n(`<h1 id="rindo-cli-telemetry" tabindex="-1">Rindo CLI telemetry <a class="header-anchor" href="#rindo-cli-telemetry" aria-hidden="true">#</a></h1><p>As of version 2.16.0, Rindo collects anonymous telemetry data about usage of our command line interface. Participation in this program is optional, and <a href="#how-do-i-opt-out">you may opt-out</a> if you&#39;d prefer not to share any information.</p><h3 id="why-is-telemetry-collected" tabindex="-1">Why Is Telemetry Collected? <a class="header-anchor" href="#why-is-telemetry-collected" aria-hidden="true">#</a></h3><p>Navify continues to invest in Rindo to make it the best web component compiler in the market. We spend hundreds of hours every year engaging with our community to learn how we can improve the product and create a more streamlined developer experience.</p><p>However, qualitative conversations are only half the picture. To fully understand the behavior of our users, we also need to look at quantitative data. Telemetry allows us to accurately gauge Rindo feature usage. The combination of qualitative and quantitative data helps us generate the most informed roadmap possible, ensuring Rindo\u2019s growth for years to come.</p><h3 id="what-is-being-collected" tabindex="-1">What Is Being Collected? <a class="header-anchor" href="#what-is-being-collected" aria-hidden="true">#</a></h3><p>We track command line usage including commands and options. Specifically, we track the following anonymously:</p><ul><li>Command invoked (eg: rindo generate, rindo build, etc) with arguments</li><li>Versions of Rindo and other dependencies like TypeScript</li><li>Output targets</li><li>Rindo packages</li><li>General machine information like OS</li></ul><p>An example telemetry event looks like this:</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yarn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">duration</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">2762</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">componentCount</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">13</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">targets</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [ </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">www</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dist-lazy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">docs-readme</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">docs-vscode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">packages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [ </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@jigra/cli@^3.7.0-rc.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@jigra/core@^3.7.0-rc.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@rindo/core@latest</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@rindo/store@latest</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">arguments</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [ </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--debug</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">task</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rindo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2.16.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">system</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node 16.4.2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">os_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">darwin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">os_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">20.5.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cpu_model</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Apple M1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">20210714145743</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">typescript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">4.2.3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rollup</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2.42.3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="what-about-sensitive-data-e-g-secrets" tabindex="-1">What about Sensitive Data (e.g. Secrets)? <a class="header-anchor" href="#what-about-sensitive-data-e-g-secrets" aria-hidden="true">#</a></h3><p>We do not collect any metrics which may contain sensitive data. This includes, but is not limited to: environment variables, file paths, contents of files, logs, or serialized JavaScript errors.</p><h3 id="will-this-data-be-shared" tabindex="-1">Will This Data Be Shared? <a class="header-anchor" href="#will-this-data-be-shared" aria-hidden="true">#</a></h3><p>No. Data collected will not be shared outside of Navify. The data collected is anonymous, not traceable to the source, and only meaningful in aggregate form. We take your privacy and our security very seriously.</p><h3 id="how-do-i-opt-out" tabindex="-1">How Do I Opt-Out? <a class="header-anchor" href="#how-do-i-opt-out" aria-hidden="true">#</a></h3><p>You may opt-out by running the following command in the root of your project directory:</p><p><code>npx rindo telemetry off</code></p><p>You may check the status of telemetry collection at any time by running the command with no arguments in the root of your project directory:</p><p><code>npx rindo telemetry</code></p><p>You may re-enable telemetry if you&#39;d like to re-join the program by running the following in the root of your project directory:</p><p><code>npx rindo telemetry on</code></p>`,21),t=[l];function p(r,c,i,y,F,D){return a(),o("div",null,t)}const h=s(e,[["render",p]]);export{d as __pageData,h as default};
