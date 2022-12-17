import{_ as c,r as e,o as i,c as l,a as s,d as a,w as o,b as n,e as u}from"./app.0e49ca11.js";const r={},d=s("h1",{id:"新手上路",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#新手上路","aria-hidden":"true"},"#"),n(" 新手上路")],-1),v=u(`<h2 id="服务器" tabindex="-1"><a class="header-anchor" href="#服务器" aria-hidden="true">#</a> 服务器</h2><p>你需要一台防火墙外的服务器，来运行服务器端的 V2Ray。配置如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10086</span><span class="token punctuation">,</span> <span class="token comment">// 服务器监听端口</span>
            <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b831381d-6324-4d53-ad4f-8cda48b30811&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器的配置中需要确保 <code>id</code> 和端口与客户端一致，就可以正常连接了。</p><h2 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端" aria-hidden="true">#</a> 客户端</h2><p>在你的 PC（或手机）中，需要用以下配置运行 V2Ray ：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span> <span class="token comment">// SOCKS 代理端口，在浏览器中需配置代理并指向这个端口</span>
            <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;udp&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;server&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 服务器地址，请修改为你自己的服务器 ip 或域名</span>
                        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10086</span><span class="token punctuation">,</span> <span class="token comment">// 服务器端口</span>
                        <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b831381d-6324-4d53-ad4f-8cda48b30811&quot;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IPOnDemand&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;geoip:private&quot;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述配置唯一要更改的地方是你的服务器 IP，配置中已注明。上述配置会把除局域网（比如访问路由器）以外的所有流量转发至你的服务器。</p><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><ul><li>在 Windows 和 macOS 中，配置文件通常是 V2Ray 同目录下的 <code>config.json</code> 文件。直接运行 <code>v2ray</code> 或 <code>v2ray.exe</code> 即可。</li><li>在 Linux 中，配置文件通常位于 <code>/etc/v2ray/</code> 或 <code>/usr/local/etc/v2ray/</code> 目录下。运行 <code>v2ray run -c /etc/v2ray/config.json</code>，或使用 systemd 等工具将 V2Ray 作为服务在后台运行。</li></ul><blockquote><p>可以使用 <code>v2ray help</code> 查看具体命令。在 <code>5.*</code> 版本之前，运行 <code>v2ray --config=/etc/v2ray/config.json</code>.</p></blockquote>`,11),k={href:"https://guide.v2fly.org/",target:"_blank",rel:"noopener noreferrer"};function m(b,q){const t=e("RouterLink"),p=e("ExternalLinkIcon");return i(),l("div",null,[d,s("p",null,[a(t,{to:"/guide/install.html"},{default:o(()=>[n("下载并安装")]),_:1}),n(" 了 V2Ray 之后，你需要对它进行一下配置。为了演示，这里只介绍简单的配置方式，如需配置更复杂的功能，请参考后续的 "),a(t,{to:"/config/overview.html"},{default:o(()=>[n("配置文档")]),_:1}),n("。")]),v,s("p",null,[n("更多详细的说明可以参考 "),a(t,{to:"/config/overview.html"},{default:o(()=>[n("配置文档")]),_:1}),n(" 和 "),s("a",k,[n("新白话文指南"),a(p)]),n("。")])])}const g=c(r,[["render",m],["__file","start.html.vue"]]);export{g as default};
