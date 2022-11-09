import{_ as e,c as a,o as r,a as t}from"./app.3b6acc86.js";const m=JSON.parse('{"title":"Versioning","description":"","frontmatter":{},"headers":[{"level":2,"title":"Release Schedule","slug":"release-schedule"},{"level":3,"title":"Major Release","slug":"major-release"},{"level":3,"title":"Minor Release","slug":"minor-release"},{"level":3,"title":"Patch Release","slug":"patch-release"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"guide/versioning.md"}'),n={name:"guide/versioning.md"},s=t('<h1 id="versioning" tabindex="-1">Versioning <a class="header-anchor" href="#versioning" aria-hidden="true">#</a></h1><p>Rindo follows the <a href="https://semver.org/" target="_blank">Semantic Versioning (SemVer)</a> convention: <code>major.minor.patch.</code> Incompatible API changes increment the <code>major</code> version, adding backwards-compatible functionality increments the <code>minor</code> version, and backwards-compatible bug fixes increment the <code>patch</code> version.</p><h2 id="release-schedule" tabindex="-1">Release Schedule <a class="header-anchor" href="#release-schedule" aria-hidden="true">#</a></h2><h3 id="major-release" tabindex="-1">Major Release <a class="header-anchor" href="#major-release" aria-hidden="true">#</a></h3><p>A major release will be published when there is a breaking change introduced in the API. Major releases will occur roughly every <strong>6 months</strong> and may contain breaking changes. Release candidates will be published prior to a major release in order to get feedback before the final release. An outline of what is changing and why will be included with the release candidates.</p><h3 id="minor-release" tabindex="-1">Minor Release <a class="header-anchor" href="#minor-release" aria-hidden="true">#</a></h3><p>A minor release will be published when a new feature is added or API changes that are non-breaking are introduced. We will heavily test any changes so that we are confident with the release, but with new code comes the potential for new issues*. Minor releases are scheduled to occur at least <strong>once a month</strong>, although this cadence may vary according to team priorities.</p><p>* This statement applies to the Rindo team upgrading its version of TypeScript as well. For more information, please see the team&#39;s <a href="./support-policy.html#typescript-support">support policy regarding TypeScript</a></p><h3 id="patch-release" tabindex="-1">Patch Release <a class="header-anchor" href="#patch-release" aria-hidden="true">#</a></h3><p>A patch release will be published when bug fixes were included, but the API has not changed and no breaking changes were introduced. Patch releases are scheduled to occur at least <strong>once a month</strong>, although this cadence may vary according to team priorities. There may be times where patch releases need to released more often than scheduled.</p><h2 id="changelog" tabindex="-1">Changelog <a class="header-anchor" href="#changelog" aria-hidden="true">#</a></h2><p>To see a list of all notable changes to Rindo, please refer to the <a href="https://github.com/navify/rindo/releases" target="_blank" rel="noreferrer noopener">releases page</a>. This contains an ordered list of all bug fixes and new features under each release.</p>',12),i=[s];function o(l,h,c,d,g,p){return r(),a("div",null,i)}const f=e(n,[["render",o]]);export{m as __pageData,f as default};
