import{_ as e,c as t,o as d,a as o}from"./app.3b6acc86.js";const b=JSON.parse('{"title":"Command Line Interface (CLI)","description":"","frontmatter":{},"headers":[{"level":2,"title":"rindo build","slug":"rindo-build"},{"level":2,"title":"rindo test","slug":"rindo-test"},{"level":2,"title":"rindo","slug":"rindo"},{"level":2,"title":"rindo generate <sub-folder>","slug":"rindo-generate-sub-folder"}],"relativePath":"guide/cli.md"}'),r={name:"guide/cli.md"},i=o('<h1 id="command-line-interface-cli" tabindex="-1">Command Line Interface (CLI) <a class="header-anchor" href="#command-line-interface-cli" aria-hidden="true">#</a></h1><h2 id="rindo-build" tabindex="-1"><code>rindo build</code> <a class="header-anchor" href="#rindo-build" aria-hidden="true">#</a></h2><p>Builds a Rindo project. The flags below are the available options for the <code>build</code> command.</p><table><thead><tr><th>Flag</th><th>Description</th><th>Alias</th></tr></thead><tbody><tr><td><code>--ci</code></td><td>Run a build using recommended settings for a Continuous Integration (CI) environment. Defaults the number of workers to 4, allows for extra time if taking screenshots via the tests and modifies the console logs.</td><td></td></tr><tr><td><code>--config</code></td><td>Path to the <code>rindo.config.ts</code> file. This flag is not needed in most cases since Rindo will find the config. Additionally, a Rindo config is not required.</td><td><code>-c</code></td></tr><tr><td><code>--debug</code></td><td>Adds additional runtime code to help debug, and sets the log level for more verbose output.</td><td></td></tr><tr><td><code>--dev</code></td><td>Runs a development build.</td><td></td></tr><tr><td><code>--docs-readme</code></td><td>Generate <code>readme.md</code> docs based on the component types, properties, methods, events, JSDocs, CSS Custom Properties, etc.</td><td></td></tr><tr><td><code>--es5</code></td><td>Creates an ES5 compatible build. By default ES5 builds are not created during development in order to improve build times. However, ES5 builds are always created during production builds. Use this flag to create ES5 builds during development.</td><td></td></tr><tr><td><code>--log</code></td><td>Write logs for the <code>rindo build</code> into <code>rindo-build.log</code>. The log file is written in the same location as the config.</td><td></td></tr><tr><td><code>--prerender</code></td><td>Prerender the application using the <code>www</code> output target after the build has completed.</td><td></td></tr><tr><td><code>--prod</code></td><td>Runs a production build which will optimize each file, improve bundling, remove unused code, minify, etc. A production build is the default, this flag is only used to override the <code>--dev</code> flag.</td><td></td></tr><tr><td><code>--max-workers</code></td><td>Max number of workers the compiler should use. Defaults to use the same number of CPUs the Operating System has available.</td><td></td></tr><tr><td><code>--next</code></td><td>Opt-in to test the &quot;next&quot; Rindo compiler features.</td><td></td></tr><tr><td><code>--no-cache</code></td><td>Disables using the cache.</td><td></td></tr><tr><td><code>--no-open</code></td><td>By default the <code>--serve</code> command will open a browser window. Using the <code>--no-open</code> command will not automatically open a browser window.</td><td></td></tr><tr><td><code>--port</code></td><td>Port for the <a href="./dev-server.html">Integrated Dev Server</a>. Defaults to <code>3333</code>.</td><td><code>-p</code></td></tr><tr><td><code>--serve</code></td><td>Starts the <a href="./dev-server.html">Integrated Dev Server</a>.</td><td></td></tr><tr><td><code>--stats</code></td><td>Write stats about the project to <code>rindo-stats.json</code>. The stats file is written in the same location as the config.</td><td></td></tr><tr><td><code>--verbose</code></td><td>Logs additional information about each step of the build.</td><td></td></tr><tr><td><code>--watch</code></td><td>Watches files during development and triggers a rebuild when files are updated.</td><td></td></tr></tbody></table><h2 id="rindo-test" tabindex="-1"><code>rindo test</code> <a class="header-anchor" href="#rindo-test" aria-hidden="true">#</a></h2><p>Tests a Rindo project. The flags below are the available options for the <code>test</code> command.</p><table><thead><tr><th>Flag</th><th>Description</th></tr></thead><tbody><tr><td><code>--spec</code></td><td>Tests <code>.spec.ts</code> files using <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">Jest</a>.</td></tr><tr><td><code>--e2e</code></td><td>Tests <code>.e2e.ts</code> files using <a href="https://developers.google.com/web/tools/puppeteer" target="_blank" rel="noopener noreferrer">Puppeteer</a> and <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">Jest</a>.</td></tr><tr><td><code>--no-build</code></td><td>Skips build process before running the tests. (You are expected to have built it beforehand).</td></tr></tbody></table><h2 id="rindo" tabindex="-1"><code>rindo</code> <a class="header-anchor" href="#rindo" aria-hidden="true">#</a></h2><table><thead><tr><th>Flag</th><th>Description</th></tr></thead><tbody><tr><td><code>--help</code></td><td>Display the help output explaining the different flags.</td></tr><tr><td><code>--version</code></td><td>Prints the current Rindo version.</td></tr></tbody></table><h2 id="rindo-generate-sub-folder" tabindex="-1"><code>rindo generate &lt;sub-folder&gt;</code> <a class="header-anchor" href="#rindo-generate-sub-folder" aria-hidden="true">#</a></h2><p>Starts the interactive component generator. You can specify one or more sub-folders to generate the component in.</p>',11),a=[i];function n(s,c,l,h,u,p){return d(),t("div",null,a)}const m=e(r,[["render",n]]);export{b as __pageData,m as default};
