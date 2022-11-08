import{_ as c}from"./dns_flowchart_20210418.c4d2d3a7.js";import{_ as n,r as t,o as d,c as l,a as e,b as o,d as s,w as u,e as r}from"./app.f77be7dd.js";const h={},p=e("h1",{id:"dns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dns","aria-hidden":"true"},"#"),o(" DNS")],-1),m=e("p",null,"service.dns",-1),b=e("p",null,"V2Ray has a built-in DNS server, which has two main purposes: matching routing rules according to the IP resolved from a domain, and traditional DNS function—resolving the target address to connect.",-1),f={class:"custom-container tip"},q=e("p",{class:"custom-container-title"},"TIP",-1),v={href:"https://coredns.io",target:"_blank",rel:"noopener noreferrer"},S=r('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>For <code>outbound</code>s with <code>freedom</code> protocol, the default value of <code>domainStrategy</code> is <code>AsIs</code>, therefore the DNS settings will not be applied to this outbound by default. If necessary, it should be configured as<code>UseIP</code>.</p></div><h2 id="dns-processing-flow" tabindex="-1"><a class="header-anchor" href="#dns-processing-flow" aria-hidden="true">#</a> DNS processing flow</h2><p>When a domain name list assigned by a DNS server matches the domain name currently being queried, V2Ray will use this DNS server first, otherwise, it will query from top to bottom, and only return the IP list which matches expectIPs. The processing flow diagram of the DNS server is as follows:</p><p><img src="'+c+'" alt=""></p><blockquote><p><code>nameServer</code>: [ <a href="#NameServerObject">NameServerObject</a> ]</p></blockquote><p>A list of name servers.</p><blockquote><p><code>staticHosts</code>: [ <a href="#StaticHostsObject">StaticHostsObject</a> ]</p></blockquote><p>Host Mapping rules. This can be used to manually define DNS resolution results or transform DNS resolutions.</p><blockquote><p><code>tag</code>: string</p></blockquote><p>The inbound tag for traffic initiated by the dns module.</p><blockquote><p><code>disableCache</code>: true|false</p></blockquote><p>Disable built in caching for DNS. Otherwise the DNS result will be cached for 10 mins.</p><blockquote><p><code>queryStrategy</code>: <code>USE_IP</code> | <code>USE_IP4</code> | <code>USE_IP6</code></p></blockquote><p>The type of network address requested by dns.</p><blockquote><p><code>disableFallback</code>: true|false</p></blockquote><p>Disable the fallback query step.</p><blockquote><p><code>disableFallbackIfMatch</code>: bool</p></blockquote><p>Disable the fallback query step if there is a server with prioritizedDomain matches.</p><h2 id="nameserverobject" tabindex="-1"><a class="header-anchor" href="#nameserverobject" aria-hidden="true">#</a> NameServerObject</h2><blockquote><p><code>address</code>: string</p></blockquote><p>The network address or URL of Domain Name Service Service Server.</p><p>Following Types are supported:</p><ul><li>Standard DNS: An address like <code>1.0.0.1:53</code> specifies an UDP DNS Server. This the most common type of DNS Server.</li><li>DNS over TCP: An address like <code>tcp://host:port</code> specifies an TCP DNS Server. Currently DNS over TCP in V2Ray have performance implications.</li><li>DNS over Local TCP: An address like <code>tcp+local://host:port</code> specifies a TCP DNS Server send over local network. The communication with remote DNS server will be send from client&#39;s network environment directly without dispatch over routing component.</li><li>DNS over HTTPS: An address like <code>https://host:port/dns-query</code> specifies an DNS over HTTPS Server.</li><li>DNS over Local HTTPS: An address like <code>https+local://host:port/dns-query</code> specifies an DNS over HTTPS Server over local network. The communication with remote DNS server will be send from client&#39;s network environment directly without dispatch over routing component.</li><li>DNS over Local QUIC: An address like <code>quic+local://host:port/</code> specifies an DNS over QUIC Server over local network. The communication with remote DNS server will be send from client&#39;s network environment directly without dispatch over routing component.</li></ul><blockquote><p><code>clientIp</code>: string</p></blockquote><p>The client IP address indication send to the DNS Server. The server may return a localised result based on this address.</p><blockquote><p><code>skipFallback</code>: true | false</p></blockquote><p>Prevent fallback to this DNS Server.</p><blockquote><p><code>prioritizedDomain</code>: [ <a href="#PrioritizedDomainObject">PrioritizedDomainObject</a> ]</p></blockquote><p>The domains that should be send to this server. If the domain being queried match one of the specification, then the query will be send to this server first.</p>',29),k=e("code",null,"geoip",-1),g=r('<p>The IP address expected from this server. If the result is not from the given IP address range, it will be discarded.</p><h2 id="statichostsobject" tabindex="-1"><a class="header-anchor" href="#statichostsobject" aria-hidden="true">#</a> StaticHostsObject</h2><blockquote><p><code>type</code>: <code>Full</code> | <code>Subdomain</code> | <code>Keyword</code> | <code>Regex</code></p></blockquote><p>Static Hosts supports different types of matching method.</p><ul><li>Full: Requires an exact match. When this domain name completely matches the target domain name, the rule takes effect. For example, &quot;v2ray.com&quot; matches &quot;v2ray.com&quot; but not &quot;www.v2ray.com&quot;.</li><li>Subdomain: Matches a domain and all its subdomain. This rule takes effect when the domain name is the target domain name or its subdomain name. For example, &quot;v2ray.com&quot; matches &quot;www.v2ray.com&quot;, &quot;v2ray.com&quot;, but not &quot;xv2ray.com&quot;.</li><li>Keyword: Matches any domain with a keyword. When this string matches any part of the target domain name, the rule takes effect. For example, &quot;sina.com&quot; can match &quot;sina.com&quot;, &quot;sina.com.cn&quot; and &quot;www.sina.com&quot; but not &quot;sina.cn&quot;.</li><li>Regex: Matches domain based on Regular Expression. When this regular expression matches the target domain name, the rule takes effect. For example, &quot;\\\\.goo.*\\\\.com$&quot; matches &quot;www.google.com&quot; and &quot;fonts.googleapis.com&quot; but not &quot;google.com&quot;.</li></ul><blockquote><p><code>domain</code>: string</p></blockquote><p>The domain matching specification. Its interpretation is based on the <code>type</code> of the rule.</p><blockquote><p><code>ip</code>: string</p></blockquote><p>The static host IP address. If configured, this IP address will be used as the domain name resolution result for matching domains.</p><blockquote><p><code>proxiedDomain</code>: string</p></blockquote><p>The replacement domain. If configured, this domain name&#39;s resolution result will be used as the domain name resolution result for mathcing domains.</p>',11);function w(y,D){const a=t("ExternalLinkIcon"),i=t("RouterLink");return d(),l("div",null,[p,m,b,e("div",f,[q,e("p",null,[o("Due to the complexity of DNS protocol, V2Ray only supports basic IP query function (A and AAAA records). In order to have a complete DNS experience, you may want to use an dedicated DNS serverware, such as "),e("a",v,[o("CoreDNS"),s(a)]),o(", together with V2Ray's builtin DNS features.")])]),S,e("blockquote",null,[e("p",null,[k,o(": [ "),s(i,{to:"/en_US/v5/config/geo.html#GeoIPObject"},{default:u(()=>[o("GeoIPObject")]),_:1}),o(" ]")])]),g])}const T=n(h,[["render",w],["__file","dns.html.vue"]]);export{T as default};
