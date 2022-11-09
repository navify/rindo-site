import{_ as t,c as e,o as n,a as i}from"./app.3b6acc86.js";const u=JSON.parse('{"title":"Support Policy","description":"","frontmatter":{},"headers":[{"level":2,"title":"Community Maintenance","slug":"community-maintenance"},{"level":2,"title":"Rindo Maintenance and Support Status","slug":"rindo-maintenance-and-support-status"},{"level":3,"title":"Rindo Support Details","slug":"rindo-support-details"},{"level":2,"title":"TypeScript Support","slug":"typescript-support"},{"level":2,"title":"Compatibility Recommendations","slug":"compatibility-recommendations"},{"level":3,"title":"JavaScript Runtime","slug":"javascript-runtime"},{"level":3,"title":"Testing Libraries","slug":"testing-libraries"}],"relativePath":"guide/support-policy.md"}'),a={name:"guide/support-policy.md"},r=i('<h1 id="support-policy" tabindex="-1">Support Policy <a class="header-anchor" href="#support-policy" aria-hidden="true">#</a></h1><h2 id="community-maintenance" tabindex="-1">Community Maintenance <a class="header-anchor" href="#community-maintenance" aria-hidden="true">#</a></h2><p>Rindo is a 100% open source (MIT) project. Developers can ensure Rindo is the right choice for building web components through Navify\u2019s community maintenance strategy. The Rindo team regularly ships new releases, bug fixes, and is welcoming to community pull requests.</p><h2 id="rindo-maintenance-and-support-status" tabindex="-1">Rindo Maintenance and Support Status <a class="header-anchor" href="#rindo-maintenance-and-support-status" aria-hidden="true">#</a></h2><p>Given the reality of time and resource constraints as well as the desire to keep innovating in the frontend development space, over time it becomes necessary for the Rindo team to shift focus to newer versions of the library. However, the Rindo team will do everything it can to make the transition to newer versions as smooth as possible. The Rindo team recommends updating to the newest version of the Rindo for the latest features, improvements and stability updates.</p><p>The current status of each Rindo version is:</p><table><thead><tr><th style="text-align:center;">Version</th><th style="text-align:center;">Status</th><th style="text-align:center;">Released</th><th style="text-align:center;">Maintenance Ends</th><th style="text-align:center;">Ext. Support Ends</th></tr></thead><tbody><tr><td style="text-align:center;">V2</td><td style="text-align:center;"><strong>Active</strong></td><td style="text-align:center;">Aug 11, 2022</td><td style="text-align:center;">TBD</td><td style="text-align:center;">TBD</td></tr><tr><td style="text-align:center;">V1</td><td style="text-align:center;">End of Support</td><td style="text-align:center;">Oct 14, 2022</td><td style="text-align:center;">Nov 04, 2022</td><td style="text-align:center;">Nov 04, 2022</td></tr></tbody></table><p><strong>Maintenance Period</strong>: Only critical bug and security fixes. No major feature improvements.</p><p><strong>Extended Support Period</strong>: For teams and organizations that require additional long term support, Navify has extended support options available.</p><h3 id="rindo-support-details" tabindex="-1">Rindo Support Details <a class="header-anchor" href="#rindo-support-details" aria-hidden="true">#</a></h3><p>Starting with Rindo v2, the Rindo team is adopting a newly revised maintenance policy. When a new major version of Rindo is released, the previous major version release will enter maintenance mode. While a version of Rindo is in maintenance mode, only critical bug &amp; security fixes will be applied to that version, and no major feature improvements will be added. The maintenance period shall last six months from the release of the new major version.</p><p>Once the maintenance period has ended for a version of Rindo, that version enters the extended support period. During the extended support period, only critical bug and security fixes will be applied for teams and organizations using Rindo&#39;s Enterprise offerings. The extended support period lasts for six months from the release of the new major version.]</p><h2 id="typescript-support" tabindex="-1">TypeScript Support <a class="header-anchor" href="#typescript-support" aria-hidden="true">#</a></h2><p>Rindo acts as a compiler for a project&#39;s web components, and works closely with the TypeScript compiler to transform TSX to vanilla JavaScript. To ensure compatibility between the two, Rindo takes an opinionated stance on which version of the TypeScript compiler must be used.</p><p>Rindo includes a recent copy of the TypeScript compiler in its distributable* to guarantee this compatibility. The Rindo team is committed to keeping its version of TypeScript up to date and, as of Rindo v2.16.0, attempts to be within one minor version of the latest TypeScript release.</p><p>The table below describes recent versions of Rindo and the version of TypeScript each version shipped with.</p><table><thead><tr><th style="text-align:center;">Rindo Version</th><th style="text-align:center;">TypeScript Version</th></tr></thead><tbody><tr><td style="text-align:center;">v2.16.0</td><td style="text-align:center;">v4.5.4</td></tr></tbody></table><p>The TypeScript team releases a new minor version of the TypeScript compiler approximately once every three months. To accomplish its goal of staying within one minor version of the latest release, Rindo will update its version of TypeScript once every three months as well. Updates to the version of TypeScript will often, but not always, occur in a <a href="./versioning.html#minor-release">minor version release</a> of Rindo.</p><p>The Rindo team acknowledges that TypeScript minor version releases may contain breaking changes. The Rindo team will do everything in its power to avoid propagating breaking changes to its user base.</p><p>* The TypeScript compiler is never included in the output of your Rindo project, and is only used for compilation and type checking purposes.</p><h2 id="compatibility-recommendations" tabindex="-1">Compatibility Recommendations <a class="header-anchor" href="#compatibility-recommendations" aria-hidden="true">#</a></h2><p>Rindo is in many regards an opinionated library, and includes much of the software necessary to get users building web components as quickly as possible. There are a few pieces of software that Rindo allows users to choose to best fit their team, organizational structure, and existing technical stack. The Rindo team has compiled a series of compatibility tables to describe the interoperability requirements of these pieces of software and Rindo.</p><h3 id="javascript-runtime" tabindex="-1">JavaScript Runtime <a class="header-anchor" href="#javascript-runtime" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Rindo Version</th><th style="text-align:center;">Node v10</th><th style="text-align:center;">Node v12</th><th style="text-align:center;">Node v14</th><th style="text-align:center;">Node v16</th><th style="text-align:center;">Node v18</th></tr></thead><tbody><tr><td style="text-align:center;">V2</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:center;">V1</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u274C</td></tr></tbody></table><h3 id="testing-libraries" tabindex="-1">Testing Libraries <a class="header-anchor" href="#testing-libraries" aria-hidden="true">#</a></h3><h4 id="jest" tabindex="-1">Jest <a class="header-anchor" href="#jest" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:center;">Rindo Version</th><th style="text-align:center;">Jest v24</th><th style="text-align:center;">Jest v25</th><th style="text-align:center;">Jest v26</th><th style="text-align:center;">Jest v27</th><th style="text-align:center;">Jest v28*</th></tr></thead><tbody><tr><td style="text-align:center;">V2</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:center;">V1</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td></tr></tbody></table><p>* Support for Jest 28 will be released in an upcoming version of Rindo.</p><h4 id="puppeteer" tabindex="-1">Puppeteer <a class="header-anchor" href="#puppeteer" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:center;">Rindo Version</th><th style="text-align:center;">Puppeteer v5</th><th style="text-align:center;">Puppeteer v6</th><th style="text-align:center;">Puppeteer v7</th><th style="text-align:center;">Puppeteer v8</th><th style="text-align:center;">Puppeteer v9</th><th style="text-align:center;">Puppeteer v10</th></tr></thead><tbody><tr><td style="text-align:center;">V2</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td></tr><tr><td style="text-align:center;">V1</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u274C</td></tr></tbody></table>',30),s=[r];function o(l,d,c,p,h,y){return n(),e("div",null,s)}const m=t(a,[["render",o]]);export{u as __pageData,m as default};
