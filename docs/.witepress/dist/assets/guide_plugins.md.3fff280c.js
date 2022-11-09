import{_ as s,c as n,o as l,a}from"./app.3b6acc86.js";const A=JSON.parse('{"title":"Plugins","description":"","frontmatter":{},"headers":[{"level":2,"title":"Rindo plugins","slug":"rindo-plugins"},{"level":2,"title":"Rollup plugins","slug":"rollup-plugins"},{"level":3,"title":"Related Plugins","slug":"related-plugins"},{"level":2,"title":"Node Polyfills","slug":"node-polyfills"}],"relativePath":"guide/plugins.md"}'),o={name:"guide/plugins.md"},e=a(`<h1 id="plugins" tabindex="-1">Plugins <a class="header-anchor" href="#plugins" aria-hidden="true">#</a></h1><h2 id="rindo-plugins" tabindex="-1">Rindo plugins <a class="header-anchor" href="#rindo-plugins" aria-hidden="true">#</a></h2><p>By default, Rindo does not come with <code>Sass</code> or <code>PostCss</code> support. However, either can be added using the <code>plugins</code> array.</p><div class="language-tsx"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Config</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rindo/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sass</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rindo/sass</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Config</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">sass</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="rollup-plugins" tabindex="-1">Rollup plugins <a class="header-anchor" href="#rollup-plugins" aria-hidden="true">#</a></h2><p>The <code>rollupPlugins</code> config can be used to add your own <a href="https://rollupjs.org" target="_blank" rel="noopener noreferrer">Rollup</a> plugins. Under the hood, rindo ships with some built-in plugins including <code>node-resolve</code> and <code>commonjs</code>, since the execution order of rollup plugins is important, rindo provides an API to inject custom plugin <strong>before node-resolve</strong> and after <strong>commonjs transform</strong>:</p><div class="language-tsx"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">rollupPlugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">before</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// Plugins injected before rollupNodeResolve()</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">resolvePlugin</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">after</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// Plugins injected after commonjs()</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">nodePolyfills</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="related-plugins" tabindex="-1">Related Plugins <a class="header-anchor" href="#related-plugins" aria-hidden="true">#</a></h3><ul><li><a href="https://www.npmjs.com/package/@rindo/sass" target="_blank" rel="noopener noreferrer">@rindo/sass</a></li><li><a href="https://www.npmjs.com/package/@rindo-community/postcss" target="_blank" rel="noopener noreferrer">@rindo-community/postcss</a></li><li>(Deprecated) <a href="https://www.npmjs.com/package/@rindo/less" target="_blank" rel="noopener noreferrer">@rindo/less</a></li><li>(Deprecated) <a href="https://www.npmjs.com/package/@rindo/stylus" target="_blank" rel="noopener noreferrer">@rindo/stylus</a></li></ul><h2 id="node-polyfills" tabindex="-1">Node Polyfills <a class="header-anchor" href="#node-polyfills" aria-hidden="true">#</a></h2><p>See the <a href="./module-bundling.html#node-polyfills">Node Polyfills in Module bundling</a> for other examples.</p>`,11),p=[e];function r(t,c,i,d,y,D){return l(),n("div",null,p)}const F=s(o,[["render",r]]);export{A as __pageData,F as default};
