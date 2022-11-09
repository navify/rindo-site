import{_ as e,c as o,o as s,a as t}from"./app.3b6acc86.js";const y=JSON.parse('{"title":"Typed Components","description":"","frontmatter":{},"headers":[{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"Required Properties","slug":"required-properties"}],"relativePath":"guide/typed-components.md"}'),n={name:"guide/typed-components.md"},a=t(`<h1 id="typed-components" tabindex="-1">Typed Components <a class="header-anchor" href="#typed-components" aria-hidden="true">#</a></h1><p>Web Components generated with Rindo come with type declaration files automatically generated by the Rindo compiler.</p><p>In general, Typescript declarations provide strong guarantees when consuming components:</p><ul><li>Ensuring that proper values are passed down as properties</li><li>Code autocompletion in modern IDEs such as VSCode</li><li>Events&#39; details</li><li>Signature of components&#39; methods</li></ul><p>These public types are automatically generated by Rindo in <code>src/component.d.ts</code>. This file allows for strong typing in JSX (just like React) and <code>HTMLElement</code> interfaces for each component.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>It is recommended that this file be checked in with the rest of your code in source control .</p></div><p>Because Web Components generated by Rindo are just vanilla Web Components, they extend the <code>HTMLElement</code> interface. For each component a type named <code>HTML{CamelCaseTag}Element</code> is registered at the global scope. This means developers DO NOT have to import them explicitly, just like <code>HTMLElement</code> or <code>HTMLScriptElement</code> are not imported.</p><ul><li><code>nav-button</code> =&gt; <code>HTMLNavButtonElement</code></li><li><code>nav-menu-controller</code> =&gt; <code>HTMLNavMenuControllerElement</code></li></ul><div class="language-tsx"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> button</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLNavButtonElement</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">queryElement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nav-button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">button</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fill </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">outline</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>IMPORTANT</strong>: always use the <code>HTML{}Element</code> interfaces in order to hold references to components.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><p>This section has moved to <a href="./properties.html#types">Property Types</a></p><h3 id="required-properties" tabindex="-1">Required Properties <a class="header-anchor" href="#required-properties" aria-hidden="true">#</a></h3><p>This section has moved to <a href="./properties.html#required-properties">Required Properties</a></p>`,14),p=[a];function r(l,c,i,d,m,h){return s(),o("div",null,p)}const D=e(n,[["render",r]]);export{y as __pageData,D as default};