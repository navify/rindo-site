import{_ as e,c as t,o as a,a as o}from"./app.3b6acc86.js";const f=JSON.parse('{"title":"Rindo Goals And Objectives","description":"","frontmatter":{},"headers":[{"level":2,"title":"Web Standards","slug":"web-standards"},{"level":2,"title":"Automatic Optimizations","slug":"automatic-optimizations"},{"level":2,"title":"Future-Friendly","slug":"future-friendly"},{"level":2,"title":"Run-time Performance","slug":"run-time-performance"},{"level":2,"title":"Tiny API","slug":"tiny-api"},{"level":2,"title":"Framework Features During Development","slug":"framework-features-during-development"},{"level":2,"title":"Wide Browser Support","slug":"wide-browser-support"}],"relativePath":"guide/goals-and-objectives.md"}'),r={name:"guide/goals-and-objectives.md"},n=o('<h1 id="rindo-goals-and-objectives" tabindex="-1">Rindo Goals And Objectives <a class="header-anchor" href="#rindo-goals-and-objectives" aria-hidden="true">#</a></h1><p>Rindo aims to combine the best concepts of the most popular frontend frameworks into a compile-time tool rather than run-time tool. It&#39;s important to stress that Rindo&#39;s goal is to not become or be seen as a &quot;framework&quot;, but rather our goal is to provide a great developer experience and tooling expected from a framework, while using web-standards within the browser at run-time. In many cases, Rindo can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.</p><h2 id="web-standards" tabindex="-1">Web Standards <a class="header-anchor" href="#web-standards" aria-hidden="true">#</a></h2><p>Components generated by Rindo in the end are built on top of web components, so they work in any major framework or with no framework at all. Additionally, other standards heavily relied on include ES Modules and dynamic imports which have proven to replace traditional bundlers which add unnecessary complexities and run-time JavaScript. By using web-standards, developers can learn and adopt a standard API documented across the world, rather than custom framework APIs that continue to change.</p><h2 id="automatic-optimizations" tabindex="-1">Automatic Optimizations <a class="header-anchor" href="#automatic-optimizations" aria-hidden="true">#</a></h2><p>There are countless optimizations and tweaks developers must do to improve performance of components and websites. With a compiler, Rindo is able to analyze component code as an input, and generate optimized components as an output.</p><h2 id="future-friendly" tabindex="-1">Future-Friendly <a class="header-anchor" href="#future-friendly" aria-hidden="true">#</a></h2><p>As the world of software development continues to evolve, so too can the compiler. Instead of requiring complete rewrites of components, the compiler can continue to make optimizations using the standard component model as the common input. The compiler allows developers to create future-friendly components, while still staying up-to-date on the latest optimizations without starting over again and again. Additionally, if something changes about any API, the compiler is able to make automatic adjustments and notify the developer exactly what needs to be updated.</p><h2 id="run-time-performance" tabindex="-1">Run-time Performance <a class="header-anchor" href="#run-time-performance" aria-hidden="true">#</a></h2><p>Instead of writing custom client-side JavaScript which every user needs to download and parse for the app to work, Rindo instead prefers to use the already amazing APIs built directly within the browser. These APIs include Custom Elements</p><h2 id="tiny-api" tabindex="-1">Tiny API <a class="header-anchor" href="#tiny-api" aria-hidden="true">#</a></h2><p>Rindo purposely does not come with a large custom API which needs to be learned and re-learned, but rather heavily relies on, you guessed it, web-standards. Again, our goal is to not create yet-another-framework, but rather provide tooling for developers to generate future-friendly components using APIs already baked within the browser. The smaller the API, the easier to learn, and the less that can be broken.</p><h2 id="framework-features-during-development" tabindex="-1">Framework Features During Development <a class="header-anchor" href="#framework-features-during-development" aria-hidden="true">#</a></h2><p>If you haven&#39;t noticed already we think web-standards are great and offer many benefits. While using web-standards without any structure is certainly possible, and there are actually many use-cases where this would be appropriate, we found that as apps and teams scale it quickly becomes difficult to manage. Developers often gravitate to frameworks because of their great tooling, defined structure, and ability to allow developers to build apps quickly. One of the largest goals of Rindo is to be that intersection of having great framework features and first-class tooling during development but generating future-proof web-standard code, rather than custom framework specific code.</p><h2 id="wide-browser-support" tabindex="-1">Wide Browser Support <a class="header-anchor" href="#wide-browser-support" aria-hidden="true">#</a></h2><p>For the small minority of browsers that do not support modern browser features and APIs, Rindo will automatically polyfill them on-demand. What this means is that for browsers that already support the feature natively, they will not have to download and parse any unnecessary JavaScript. The great news is that in today&#39;s web landscape, most modern APIs are already shipping for what Rindo requires. Out-of-the-box browser support includes IE11 and up.</p>',16),i=[n];function s(d,l,h,u,c,p){return a(),t("div",null,i)}const w=e(r,[["render",s]]);export{f as __pageData,w as default};
