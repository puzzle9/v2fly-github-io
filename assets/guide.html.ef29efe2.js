import{_ as n,r,o as s,c as l,a as e,b as a,d as i,e as t}from"./app.f77be7dd.js";const d={},c=t('<h1 id="step-3-start-development" tabindex="-1"><a class="header-anchor" href="#step-3-start-development" aria-hidden="true">#</a> Step 3: Start development</h1><h2 id="basic" tabindex="-1"><a class="header-anchor" href="#basic" aria-hidden="true">#</a> Basic</h2><h3 id="version-control" tabindex="-1"><a class="header-anchor" href="#version-control" aria-hidden="true">#</a> version control</h3><p>Git</p><h3 id="branch-branch" tabindex="-1"><a class="header-anchor" href="#branch-branch" aria-hidden="true">#</a> Branch (Branch)</h3><p>This project only uses one branch, namely master. All changes are submitted to the master, and make sure that the master is compilable and usable at any time.</p><h3 id="release" tabindex="-1"><a class="header-anchor" href="#release" aria-hidden="true">#</a> Release</h3><p>Try to use automated tools to release, such as v2ray-core using Travis-ci as an automated compilation and release tool.</p><h3 id="reference-other-projects" tabindex="-1"><a class="header-anchor" href="#reference-other-projects" aria-hidden="true">#</a> Reference other projects</h3><ul><li>Golang <ul><li>The product code can only use the golang standard library, that is, the package whose name does not contain any URL;</li><li>The test code can use golang.org/x/...;</li><li>If you need to reference other projects, please create an Issue in advance for discussion;</li></ul></li><li>other <ul><li>As long as the agreement between the two parties is not violated (this project is MIT), and tools that are helpful to the project can be used.</li></ul></li></ul><h2 id="development-process" tabindex="-1"><a class="header-anchor" href="#development-process" aria-hidden="true">#</a> Development Process</h2><h3 id="before-writing-code" tabindex="-1"><a class="header-anchor" href="#before-writing-code" aria-hidden="true">#</a> Before writing code</h3><p>If you find any problems, or have any ideas about the project, please create an Issue discussion immediately to reduce duplication of work and time spent on the code.</p><h3 id="modify-the-code" tabindex="-1"><a class="header-anchor" href="#modify-the-code" aria-hidden="true">#</a> Modify the code</h3>',14),h={href:"https://golang.org/doc/effective_go.html",target:"_blank",rel:"noopener noreferrer"},u=e("li",null,"Please run before every commit: gofmt -w v2ray.com/core/",-1),m=e("li",null,"Before each commit, please make sure that the test passes: go test v2ray.com/core/...",-1),f=e("li",null,"Before submitting a PR, please ensure that the newly added code has more than 70% code coverage.",-1),p=e("li",null,[a("other "),e("ul",null,[e("li",null,"Please pay attention to the readability of the code")])],-1),b=e("h3",{id:"pull-request",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pull-request","aria-hidden":"true"},"#"),a(" Pull Request")],-1),g=e("li",null,[a("Please run "),e("code",null,"git pull"),a(" before submitting the PR to ensure that the merge can proceed smoothly;")],-1),v=e("li",null,"A PR only does one thing. If there are multiple bug fixes, please submit a PR for each bug;",-1),y=t("<li>Fork this project first and create your own github.com/your/v2ray-core;</li><li>Run in your Go workspace: <code>go get -u v2ray.com/core/...</code>;</li><li>Run in the v2ray-core directory created by go get: <code>git remote add fork https://github.com/you/cooltool.git</code>;</li><li>Then you can modify the code in v2ray-core. Since this is a v2ray clone, the import path will not be affected;</li><li>After the modification is completed, run: <code>git push fork</code>;</li><li>Then go to your fork (that is, v2ray.com/core) and send a PR;</li>",6),_={href:"http://blog.campoy.cat/2014/03/github-and-go-forking-pull-requests-and.html",target:"_blank",rel:"noopener noreferrer"},w=t(`<h3 id="modifications-to-the-code" tabindex="-1"><a class="header-anchor" href="#modifications-to-the-code" aria-hidden="true">#</a> Modifications to the code</h3><h4 id="functional-issues" tabindex="-1"><a class="header-anchor" href="#functional-issues" aria-hidden="true">#</a> Functional issues</h4><p>Please submit at least one test case (Test Case) to verify the changes to existing functions.</p><h4 id="performance-related" tabindex="-1"><a class="header-anchor" href="#performance-related" aria-hidden="true">#</a> Performance related</h4><p>Please submit the necessary test data to prove the performance defects of the existing code or the performance improvement of the new code.</p><h4 id="new-function" tabindex="-1"><a class="header-anchor" href="#new-function" aria-hidden="true">#</a> new function</h4><ul><li>If the new function does not affect the existing function, please provide a switch (such as flag) that can be turned on/off, and keep the new function closed by default;</li><li>Before developing a large new feature (such as adding a new protocol), please submit an issue first, and then develop it after the discussion.</li></ul><h4 id="other" tabindex="-1"><a class="header-anchor" href="#other" aria-hidden="true">#</a> other</h4><p>As the case may be.</p><h2 id="v2ray-coding-standard" tabindex="-1"><a class="header-anchor" href="#v2ray-coding-standard" aria-hidden="true">#</a> V2Ray coding standard</h2><p>The following content applies to Golang code in V2Ray.</p><h3 id="code-structure" tabindex="-1"><a class="header-anchor" href="#code-structure" aria-hidden="true">#</a> Code structure</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>v2ray-core
├── app // application module
│ ├── router // routing
├── common // common code
├── proxy // communication protocol
│ ├── blackhole
│ ├── dokodemo-door
│ ├── freedom
│ ├── socks
│ ├── vmess
├── transport // Transport module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="coding-standards" tabindex="-1"><a class="header-anchor" href="#coding-standards" aria-hidden="true">#</a> Coding Standards</h3><p>It is basically the same as the official Golang recommended practice, with some exceptions. I write it here so that everyone is familiar with Golang.</p><h4 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h4><ul><li>Try to use a single English word for file and directory names, such as hello.go; <ul><li>If there is no way, the directory uses a connecting line/file name to connect two (or more words) with an underscore, such as hello-world/hello_again.go;</li><li>The test code ends with _test.go;</li></ul></li><li>The type uses Pascal nomenclature, such as ConnectionHandler; <ul><li>Lower case is not mandatory for abbreviations, that is, HTML does not have to be written as Html;</li></ul></li><li>Public member variables also use Pascal nomenclature;</li><li>Private member variables [small camel nomenclature] (https://zh.wikipedia.org/wiki/%E9%A7%9D%E5%B3%B0%E5%BC%8F%E5%A4%A7%E5%B0%8F%E5%AF%AB), such as <code>privateAttribute</code>;</li><li>In order to facilitate refactoring, it is recommended that all methods use Pascal nomenclature; <ul><li>Although Golang distinguishes between public and private methods by case, it is not convenient in practice.</li><li>Put completely private types into <code>internal</code>.</li></ul></li></ul><h4 id="content-organization" tabindex="-1"><a class="header-anchor" href="#content-organization" aria-hidden="true">#</a> Content organization</h4><ul><li>A file contains a main type, and its related private functions, etc.;</li><li>Test-related files, such as tools such as Mock, are placed in the testing subdirectory;</li></ul>`,19);function x(k,P){const o=r("ExternalLinkIcon");return s(),l("div",null,[c,e("ul",null,[e("li",null,[a("Golang "),e("ul",null,[e("li",null,[a("Please refer to "),e("a",h,[a("Effective Go"),i(o)]),a(";")]),u,m,f])]),p]),b,e("ul",null,[g,v,e("li",null,[a("Due to Golang's special requirements (Package path), the PR process of the Go project is different from other projects: "),e("ol",null,[y,e("li",null,[a("The above content is modified from "),e("a",_,[a("this article"),i(o)]),a(".")])])])]),w])}const B=n(d,[["render",x],["__file","guide.html.vue"]]);export{B as default};
