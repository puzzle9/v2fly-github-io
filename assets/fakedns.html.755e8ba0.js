import{_ as c,r as t,o as i,c as l,a as s,b as n,d as e,w as u,e as a}from"./app.defb07fa.js";const d={},r=a(`<h1 id="fakedns" tabindex="-1"><a class="header-anchor" href="#fakedns" aria-hidden="true">#</a> FakeDNS</h1><h2 id="fakednsobject" tabindex="-1"><a class="header-anchor" href="#fakednsobject" aria-hidden="true">#</a> FakeDnsObject</h2><p><code>FakeDnsObject</code> 对应配置文件的 <code>fakedns</code> 项。(4.38.1+)</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;ipPool&quot;</span><span class="token operator">:</span> <span class="token string">&quot;198.18.0.0/15&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;poolSize&quot;</span><span class="token operator">:</span> <span class="token number">65535</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;ipPool&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fc00::/18&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;poolSize&quot;</span><span class="token operator">:</span> <span class="token number">65535</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>ipPool</code>: string: CIDR</p></blockquote><p>FakeDNS 分配 IP 的地址空间。由 FakeDNS 分配的地址会符合这个 CIDR 表达式。</p><blockquote><p><code>poolSize</code>: number</p></blockquote>`,7),k={href:"https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)",target:"_blank",rel:"noopener noreferrer"},v=a('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>poolSize 必须小于或等于 ipPool 的地址总数，否则将无法启动。</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>自 v4.38.1 起，若配置文件中的 <code>dns</code> 项显式设置了 <code>fakedns</code>，而配置文件中没有显式设置 <code>fakedns</code> 项，V2Ray 会根据 DNS 组件中 <code>queryStrategy</code> 项的值来初始化 <code>fakedns</code> 项的配置，即 FakeDNS 是否支持对不同类型 DNS 查询（A 记录和 AAAA 记录）返回相应的 IPv4 或 IPv6 类型的 IP 地址。</p><p><code>queryStrategy</code> 为 <code>UseIPv4</code> 时，默认的 <code>ipPool</code> 为 <code>198.18.0.0/15</code>、<code>poolSize</code> 为 <code>65535</code>。</p><p><code>queryStrategy</code> 为 <code>UseIPv6</code> 时，默认的 <code>ipPool</code> 为 <code>fc00::/18</code>，<code>poolSize</code> 为 <code>65535</code>。</p><p><code>queryStrategy</code> 为 <code>UseIP</code> 时，默认用于 IPv4 的 <code>ipPool</code> 为 <code>198.18.0.0/15</code>、<code>poolSize</code> 为 <code>32768</code>；用于 IPv6 的 <code>ipPool</code> 为 <code>fc00::/18</code>、<code>poolSize</code> 为 <code>32768</code>。</p></div><h2 id="运行机制及配置方式" tabindex="-1"><a class="header-anchor" href="#运行机制及配置方式" aria-hidden="true">#</a> 运行机制及配置方式</h2>',3),m={href:"https://tools.ietf.org/html/rfc3089",target:"_blank",rel:"noopener noreferrer"},b=a(`<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>FakeDNS 尽管有很多优点，但是会污染本地程序的 DNS 缓存，当代理断开之后的一段时间内设备可能无法访问网络。</p></div><h3 id="步骤一-拦截-dns-流量" tabindex="-1"><a class="header-anchor" href="#步骤一-拦截-dns-流量" aria-hidden="true">#</a> 步骤一：拦截 DNS 流量</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;fakedns&quot;</span><span class="token punctuation">,</span> <span class="token comment">// fakedns 排在首位</span>
            <span class="token string">&quot;8.8.8.8&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dns&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dns-out&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;tproxy-in&quot;</span> <span class="token comment">// 只劫持来自透明代理入站的 DNS 流量。</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">53</span><span class="token punctuation">,</span>
                <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dns-out&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当外部 DNS 请求进入 FakeDNS 组件时，它会返回位于自己 <code>ipPool</code> 内的 IP 地址作为域名的虚构解析结果，并记录该域名与虚构解析结果之间的映射关系。</p><h3 id="步骤二-还原虚构地址" tabindex="-1"><a class="header-anchor" href="#步骤二-还原虚构地址" aria-hidden="true">#</a> 步骤二：还原虚构地址</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;::&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">3346</span><span class="token punctuation">,</span>
            <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dokodemo-door&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 流量入口，可以是其他协议</span>
            <span class="token property">&quot;sniffing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">&quot;destOverride&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;fakedns&quot;</span><span class="token punctuation">,</span>       <span class="token comment">// 二选一</span>
                    <span class="token string">&quot;fakedns+others&quot;</span> <span class="token comment">// 二选一</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;metadataOnly&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp,udp&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;followRedirect&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;sockopt&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;tproxy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tproxy&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tproxy-in&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面给出了一个透明代理入站使用 FakeDNS 的例子。你也可以将其他入站协议配合 FakeDNS 使用。</p>`,7),q=s("code",null,"fakedns",-1),g=a(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果在使用 FakeDNS 时遇到了直连空解析的问题，可以尝试在 <code>freedom</code> 出站设置 <code>domainStrategy</code> 为 <code>UseIP</code>、<code>UseIPv4</code> 或 <code>UseIPv6</code>。</p></div><h2 id="与其他类型-dns-搭配使用" tabindex="-1"><a class="header-anchor" href="#与其他类型-dns-搭配使用" aria-hidden="true">#</a> 与其他类型 DNS 搭配使用</h2><h3 id="与-dns-分流共存" tabindex="-1"><a class="header-anchor" href="#与-dns-分流共存" aria-hidden="true">#</a> 与 DNS 分流共存</h3><p>当使用 DNS 分流时，为了让 <code>fakedns</code> 拥有高优先级，需要增加与其他类型 DNS 相同的 <code>domains</code> 配置。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fakedns&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;geosite:cn&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;223.5.5.5&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;geosite:cn&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expectIPs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;geoip:cn&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&quot;8.8.8.8&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fakedns-黑名单机制" tabindex="-1"><a class="header-anchor" href="#fakedns-黑名单机制" aria-hidden="true">#</a> FakeDNS 黑名单机制</h3><p>若希望某些域名不使用 FakeDNS，则可在其他类型的 DNS 中增加 <code>domains</code> 配置，使其在匹配该域名时，拥有比 FakeDNS 更高的优先级，从而实现 FakeDNS 的黑名单机制。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;fakedns&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;223.5.5.5&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;domain:not-use-fakedns.com&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;geosite:cn&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&quot;8.8.8.8&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fakedns-白名单机制" tabindex="-1"><a class="header-anchor" href="#fakedns-白名单机制" aria-hidden="true">#</a> FakeDNS 白名单机制</h3><p>若只希望某些域名使用 FakeDNS，则可在 FakeDNS 中增加 <code>domains</code> 配置，使 FakeDNS 在匹配该域名时，拥有比其他类型的 DNS 更高的优先级，从而实现 FakeDNS 的白名单机制。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;8.8.8.8&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fakedns&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;domain:use-fakedns.com&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;geosite:geolocation-!cn&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function h(y,f){const o=t("ExternalLinkIcon"),p=t("RouterLink");return i(),l("div",null,[r,s("p",null,[n("FakeDNS 所记忆的「IP - 域名映射」数量。当域名数量超过此数值时，会依据 "),s("a",k,[n("LRU"),e(o)]),n(" 规则淘汰老旧域名。")]),v,s("p",null,[n("FakeDNS，有时也叫 Fake IP，是解决 DNS 污染、防止 DNS 泄露、减低延时的技术手段（"),s("a",m,[n("RFC3089"),e(o)]),n("）。对于透明代理和三层代理（例如 Android VPNService）而言，在数据发送之前，被代理的程序需要先发出 DNS 请求，以获取目标主机/域名的 IP 地址。")]),b,s("p",null,[n("当客户端程序基于之前解析结果请求连接这个 IP 所指向的主机时，对应 "),e(p,{to:"/config/inbounds.html"},{default:u(()=>[n("入站连接")]),_:1}),n(" 的 "),q,n(" 流量侦测模块会将目标地址还原为对应的域名。")]),g])}const N=c(d,[["render",h],["__file","fakedns.html.vue"]]);export{N as default};
