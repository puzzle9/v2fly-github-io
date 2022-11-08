import{_ as s,r,o as d,c,a as e,b as t,d as o,w as i,e as a}from"./app.f77be7dd.js";const h={},u=a('<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><h2 id="supported-os-platforms" tabindex="-1"><a class="header-anchor" href="#supported-os-platforms" aria-hidden="true">#</a> Supported OS Platforms</h2><p>The following platforms are supported by V2Ray:</p><ul><li>Windows 7 and later（x86 / amd64 / arm32）</li><li>macOS 10.10 Yosemite and later（amd64）</li><li>Linux 2.6.23 and later（x86 / amd64 / arm / arm64 / mips64 / mips / ppc64 / s390x / riscv64） <ul><li>including but not limited to Debian 7 / 8, Ubuntu 12.04 / 14.04 and later, CentOS 6 / 7 and Arch Linux</li></ul></li><li>FreeBSD (x86 / amd64)</li><li>OpenBSD (x86 / amd64)</li><li>Dragonfly BSD (amd64)</li></ul><h2 id="download-v2ray" tabindex="-1"><a class="header-anchor" href="#download-v2ray" aria-hidden="true">#</a> Download V2Ray</h2><p>Compiled binary packages can be found via the following links.</p>',6),p={href:"https://github.com/v2fly/v2ray-core/releases",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.archlinux.org/packages/community/x86_64/v2ray/",target:"_blank",rel:"noopener noreferrer"},_=a('<p>All packages are in the .zip format. Look for the file matching your platform and unzip it to get started.</p><h2 id="package-integrity" tabindex="-1"><a class="header-anchor" href="#package-integrity" aria-hidden="true">#</a> Package Integrity</h2><p>The integrity of V2Ray can be validated in two ways:</p><ol><li>The SHA1 / SHA256 digest information can be found in the corresponding <code>.dgst</code> files.</li><li>Run <code>v2ctl verify --sig=Release example-file</code></li></ol><h2 id="windows-installation" tabindex="-1"><a class="header-anchor" href="#windows-installation" aria-hidden="true">#</a> Windows Installation</h2>',5),g=e("li",null,[t("Download and unpack the zip file, you will get an executable "),e("code",null,"v2ray.exe"),t(".")],-1),m={href:"https://scoop.sh/",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"scoop install v2ray",-1),b={href:"https://chocolatey.org/",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"choco install v2ray",-1),k=e("h2",{id:"macos-installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#macos-installation","aria-hidden":"true"},"#"),t(" macOS Installation")],-1),w=e("li",null,[t("Download and unpack the zip file, you will get an executable "),e("code",null,"v2ray"),t(".")],-1),x={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"brew install v2ray",-1),I={href:"https://github.com/v2ray/homebrew-v2ray",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"v2ray/v2ray",-1),D=e("h2",{id:"linux-distro-repository",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux-distro-repository","aria-hidden":"true"},"#"),t(" Linux Distro Repository")],-1),R=e("p",null,"Some distros may have included V2Ray to their repositories. It is recommended to use these repositories for better compatibility before using any installation script.",-1),T={href:"https://tracker.debian.org/pkg/golang-v2ray-core",target:"_blank",rel:"noopener noreferrer"},C=e("h2",{id:"installing-on-linux-by-script",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-on-linux-by-script","aria-hidden":"true"},"#"),t(" Installing on Linux by Script")],-1),L={href:"https://github.com/v2fly/fhs-install-v2ray",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/v2ray/v2ray-core/issues/2328",target:"_blank",rel:"noopener noreferrer"},A=e("p",null,"What's new?",-1),B=e("ul",null,[e("li",null,"Changed Installation Path V2Ray to comply with FHS."),e("li",null,"Stopped supporting stone age platforms, such as CentOS 6."),e("li",null,"Stopped supporting System V."),e("li",null,"Changed the service user from root to nobody.")],-1),P=e("h3",{id:"faq-in-chinese",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#faq-in-chinese","aria-hidden":"true"},"#"),t(" FAQ (In Chinese)")],-1),E={href:"https://github.com/v2fly/fhs-install-v2ray/wiki/Do-not-install-or-update-geoip.dat-and-geosite.dat",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/v2fly/fhs-install-v2ray/wiki/Insufficient-permissions-when-using-certificates",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/v2fly/fhs-install-v2ray/wiki/Migrate-from-the-old-script-to-this",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/v2fly/fhs-install-v2ray/wiki/Move-.dat-files-from-lib-directory-to-share-directory",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"lib",-1),H=e("code",null,"share",-1),N={href:"https://github.com/v2fly/fhs-install-v2ray/wiki/To-use-the-VLESS-protocol",target:"_blank",rel:"noopener noreferrer"},U=e("h2",{id:"docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),t(" Docker")],-1),W=e("p",null,"The V2Ray Docker Image is also available:",-1),q={href:"https://hub.docker.com/r/v2fly/v2fly-core",target:"_blank",rel:"noopener noreferrer"},Y=e("code",null,"latest",-1),j={href:"https://github.com/v2fly/docker-fly",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"4.27.0",-1),J=a("<p>The Structure of Docker Image:</p><ul><li><code>/etc/v2ray/config.json</code>: Config File</li><li><code>/usr/bin/v2ray/v2ray</code>: V2Ray Main Process</li><li><code>/usr/bin/v2ray/v2ctl</code>: V2Ctl Commandline Tools</li><li><code>/usr/bin/v2ray/geoip.dat</code>: GeoIP Data</li><li><code>/usr/bin/v2ray/geosite.dat</code>: GeoSite Data</li></ul>",2);function K(X,Z){const n=r("ExternalLinkIcon"),l=r("RouterLink");return d(),c("div",null,[u,e("ol",null,[e("li",null,[t("Github Release: "),e("a",p,[t("github.com/v2fly/v2ray-core"),o(n)])]),e("li",null,[t("Arch Linux: "),e("a",f,[t("packages/community/x86_64/v2ray/"),o(n)])])]),_,e("ul",null,[g,e("li",null,[t("Install via "),e("a",m,[t("Scoop"),o(n)]),t(" package manager: "),y]),e("li",null,[t("Install via "),e("a",b,[t("Chocolatey"),o(n)]),t(" package manager: "),v])]),e("p",null,[t("Then run V2Ray in "),o(l,{to:"/en_US/guide/command.html"},{default:i(()=>[t("command line")]),_:1}),t(".")]),k,e("ul",null,[w,e("li",null,[t("Install via "),e("a",x,[t("Homebrew"),o(n)]),t(" package manager: "),S,t("w "),e("ul",null,[e("li",null,[t("You can continue using "),e("a",I,[V,t(" Tap"),o(n)]),t(", however this is not recommended.")])])])]),e("p",null,[t("Then run V2Ray in "),o(l,{to:"/en_US/guide/command.html"},{default:i(()=>[t("command line")]),_:1}),t(".")]),D,R,e("ul",null,[e("li",null,[t("Debian: "),e("a",T,[t("golang-v2ray-core"),o(n)]),t(".")])]),C,e("p",null,[t("The original installation script is deprecated and replaced by "),e("a",L,[t("fhs-install-v2ray"),o(n)]),t(".")]),e("p",null,[t("Go to "),e("a",O,[t("#2328"),o(n)]),t(" for related discussions.")]),A,B,P,e("ul",null,[e("li",null,[e("a",E,[t("Install without updating geoip.dat and geosite.dat"),o(n)])]),e("li",null,[e("a",M,[t("Insufficient permissions when using certificates"),o(n)])]),e("li",null,[e("a",z,[t("Migrate from the old installation script"),o(n)])]),e("li",null,[e("a",F,[t("Move .dat files from "),G,t(" to "),H,t(" directory"),o(n)])]),e("li",null,[e("a",N,[t("Use the VLESS Protocol"),o(n)])])]),U,W,e("ul",null,[e("li",null,[e("a",q,[t("v2fly/v2fly-core"),o(n)]),t(": The "),Y,t(" tag will be updated following "),e("a",j,[t("v2fly"),o(n)]),t("'s latest release. Other versions will be released using the version's tag, e.g. "),Q,t(".")])]),J])}const ee=s(h,[["render",K],["__file","install.html.vue"]]);export{ee as default};
