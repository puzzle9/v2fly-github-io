(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{417:function(e,t,o){"use strict";o.r(t);var a=o(18),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"common-problem"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#common-problem"}},[e._v("#")]),e._v(" common problem")]),e._v(" "),o("p",[e._v("Weird questions and answers")]),e._v(" "),o("h2",{attrs:{id:"general-question"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#general-question"}},[e._v("#")]),e._v(" General question")]),e._v(" "),o("h3",{attrs:{id:"what-is-the-purpose-of-making-v2ray"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-purpose-of-making-v2ray"}},[e._v("#")]),e._v(" What is the purpose of making V2Ray")]),e._v(" "),o("p",[e._v("People have the right to freely obtain legal information that has been disclosed. At the same time, the people also have the right to freedom of speech.")]),e._v(" "),o("h3",{attrs:{id:"whether-to-oppose-regulation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#whether-to-oppose-regulation"}},[e._v("#")]),e._v(" Whether to oppose regulation")]),e._v(" "),o("p",[e._v("No objection to regulation. In fact, everything needs to be regulated to reduce the cost of living of the public, such as milk powder. But supervision needs to have laws to follow and evidence to follow. The supervision method recognized by the public is also reasonable and acceptable.")]),e._v(" "),o("h3",{attrs:{id:"who-will-lead-the-development-of-project-v"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#who-will-lead-the-development-of-project-v"}},[e._v("#")]),e._v(" Who will lead the development of Project V")]),e._v(" "),o("p",[e._v("We are a group of people who love freedom. Due to policy pressure, we tend to remain anonymous and try not to disclose any identity information.")]),e._v(" "),o("h2",{attrs:{id:"v2ray-usage-related"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-usage-related"}},[e._v("#")]),e._v(" V2Ray usage related")]),e._v(" "),o("h3",{attrs:{id:"how-to-upgrade-v2ray"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-upgrade-v2ray"}},[e._v("#")]),e._v(" How to upgrade V2Ray")]),e._v(" "),o("ul",[o("li",[e._v("Download the installation package again.")]),e._v(" "),o("li",[e._v("If you use the installation script to install, just re-run the installation script.")])]),e._v(" "),o("h3",{attrs:{id:"v2ray-crashes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-crashes"}},[e._v("#")]),e._v(" V2Ray crashes")]),e._v(" "),o("ul",[o("li",[e._v("If you use Linux and open systemd, you can use "),o("code",[e._v("journalctl -u v2ray")]),e._v(" to view the log when V2Ray exits.")]),e._v(" "),o("li",[e._v("Generally, you can manually run "),o("code",[e._v("v2ray -config= <config-file> -test")]),e._v(" to view the error message.")])]),e._v(" "),o("h2",{attrs:{id:"v2ray-error-message"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-error-message"}},[e._v("#")]),e._v(" V2Ray error message")]),e._v(" "),o("h3",{attrs:{id:"vmess-invalid-user"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vmess-invalid-user"}},[e._v("#")]),e._v(" VMess: Invalid User")]),e._v(" "),o("p",[e._v("possible reason:")]),e._v(" "),o("ol",[o("li",[e._v("The user IDs on the client and server do not match.")]),e._v(" "),o("li",[e._v("The user alterId on the client and server do not match.")]),e._v(" "),o("li",[e._v("The time of the client and the server do not match, and the error exceeds 90 seconds.")])]),e._v(" "),o("h3",{attrs:{id:"shadowsocks-unknown-address-type"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocks-unknown-address-type"}},[e._v("#")]),e._v(" Shadowsocks: Unknown address type")]),e._v(" "),o("p",[e._v("possible reason:")]),e._v(" "),o("ul",[o("li",[e._v("The encryption method or password of the Shadowsocks protocol does not match.")])]),e._v(" "),o("h3",{attrs:{id:"socks-unknown-socks-version-67"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#socks-unknown-socks-version-67"}},[e._v("#")]),e._v(" Socks: Unknown Socks version: 67")]),e._v(" "),o("p",[e._v("possible reason:")]),e._v(" "),o("ul",[o("li",[e._v("You turned on the Socks proxy, but configured an HTTP proxy in your browser.")])]),e._v(" "),o("p",[e._v("solution:")]),e._v(" "),o("ul",[o("li",[e._v("Configure an HTTP inbound proxy in V2Ray, and then point the browser settings to this proxy.")])]),e._v(" "),o("h2",{attrs:{id:"other-software-errors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-software-errors"}},[e._v("#")]),e._v(" Other software errors")]),e._v(" "),o("h3",{attrs:{id:"when-accessing-google-the-browser-shows-an-invalid-certificate"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#when-accessing-google-the-browser-shows-an-invalid-certificate"}},[e._v("#")]),e._v(" When accessing Google, the browser shows an invalid certificate")]),e._v(" "),o("p",[e._v("Wrong information: The attacker may be trying to steal your information from www.google.com (e.g. password, communication content, or credit card information). Learn more NET::ERR_CERT_COMMON_NAME_INVALID")]),e._v(" "),o("p",[e._v("Reason: Your DNS cache may be contaminated.")]),e._v(" "),o("p",[e._v("solution:")]),e._v(" "),o("ul",[o("li",[e._v("You need to clear the cache and re-crawl DNS data when using a proxy.")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("sniffing")]),e._v(" function can be used in V2Ray to overcome some DNS pollution.")])]),e._v(" "),o("h2",{attrs:{id:"project-authorization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#project-authorization"}},[e._v("#")]),e._v(" Project authorization")]),e._v(" "),o("p",[e._v("Project V uses the following methods for authorization.")]),e._v(" "),o("h3",{attrs:{id:"v2ray"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v2ray"}},[e._v("#")]),e._v(" V2Ray")]),e._v(" "),o("p",[e._v("The source code is an officially released installation package, licensed under the MIT agreement. Including the source code and installation package in the following code repository:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.github.com/v2fly/v2ray-core/",target:"_blank",rel:"noopener noreferrer"}},[e._v("v2fly/v2ray-core"),o("OutboundLink")],1)])]),e._v(" "),o("h3",{attrs:{id:"official-website"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#official-website"}},[e._v("#")]),e._v(" Official website")]),e._v(" "),o("p",[e._v("The official website ("),o("a",{attrs:{href:"https://www.v2fly.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("v2fly.org"),o("OutboundLink")],1),e._v(") is under the "),o("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creative Commons Attribution 4.0 International License Agreement"),o("OutboundLink")],1),e._v(" Agreement authorization.")]),e._v(" "),o("ul",[o("li",[e._v("Including all visible text and pictures on the website.")]),e._v(" "),o("li",[e._v("Include Project V icon files.")]),e._v(" "),o("li",[e._v("Including the source code used to generate the website, namely "),o("a",{attrs:{href:"https://github.com/v2fly/v2fly-github-io",target:"_blank",rel:"noopener noreferrer"}},[e._v("v2fly/v2fly-github-io"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h3",{attrs:{id:"software-screenshots-and-other-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#software-screenshots-and-other-files"}},[e._v("#")]),e._v(" Software screenshots and other files")]),e._v(" "),o("p",[e._v("The copyright of the content created by a third party belongs to its creator. Project V waives ownership of this content.")]),e._v(" "),o("ul",[o("li",[e._v("Including screenshots of Project V in use.")]),e._v(" "),o("li",[e._v("Including the configuration files required to run Project V.")]),e._v(" "),o("li",[e._v("Including the log files generated when Project V is running.")])]),e._v(" "),o("h3",{attrs:{id:"other-content"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-content"}},[e._v("#")]),e._v(" Other content")]),e._v(" "),o("p",[e._v("The copyright of the content not mentioned above depends on the specific situation.")])])}),[],!1,null,null,null);t.default=r.exports}}]);