import{_ as p,r as c,o as i,c as l,a as s,b as n,d as o,w as e,e as a}from"./app.0e49ca11.js";const u={},r=a('<h1 id="reverse-反向代理" tabindex="-1"><a class="header-anchor" href="#reverse-反向代理" aria-hidden="true">#</a> Reverse 反向代理</h1><p>反向代理是一个 V2Ray 的附加功能，可以把服务器端的流量向客户端转发，即逆向流量转发。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>反向代理功能在 V2Ray 4.0+ 可用。目前处于测试阶段，可能会有一些问题。</p></div><p>反向代理的大致工作原理如下:</p><ul><li>假设在主机 A 中有一个网页服务器，这台主机没有公网 IP，无法在公网上直接访问。另有一台主机 B，它可以由公网访问。现在我们需要把 B 作为入口，把流量从 B 转发到 A。</li><li>在主机 A 中配置一个 V2Ray，称为<code>bridge</code>，在 B 中也配置一个 V2Ray，称为 <code>portal</code>。</li><li><code>bridge</code> 会向 <code>portal</code> 主动建立连接，此连接的目标地址可以自行设定。<code>portal</code> 会收到两种连接，一是由 <code>bridge</code> 发来的连接，二是公网用户发来的连接。<code>portal</code> 会自动将两类连接合并。于是 <code>bridge</code> 就可以收到公网流量了。</li><li><code>bridge</code> 在收到公网流量之后，会将其原封不动地发给主机 A 中的网页服务器。当然，这一步需要路由的协作。</li><li><code>bridge</code> 会根据流量的大小进行动态的负载均衡。</li></ul>',5),d={class:"custom-container warning"},v=s("p",{class:"custom-container-title"},"WARNING",-1),k=a(`<h2 id="reverseobject" tabindex="-1"><a class="header-anchor" href="#reverseobject" aria-hidden="true">#</a> ReverseObject</h2><p><code>ReverseObject</code> 对应配置文件的 <code>reverse</code> 项。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;bridges&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bridge&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.v2fly.org&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;portals&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.v2fly.org&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>bridges</code>: [<a href="#bridgeobject">BridgeObject</a>]</p></blockquote><p>一个数组，每一项表示一个 <code>bridge</code>。每个 <code>bridge</code> 的配置是一个 <a href="#bridgeobject">BridgeObject</a>。</p><blockquote><p><code>portals</code>: [<a href="#portalobject">PortalObject</a>]</p></blockquote><p>一个数组，每一项表示一个 <code>portal</code>。每个 <code>portal</code> 的配置是一个 <a href="#bridgeobject">PortalObject</a>。</p><h2 id="bridgeobject" tabindex="-1"><a class="header-anchor" href="#bridgeobject" aria-hidden="true">#</a> BridgeObject</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bridge&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.v2fly.org&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>tag</code>: string</p></blockquote>`,10),b=s("code",null,"bridge",-1),q=s("code",null,"inboundTag",-1),m=a(`<blockquote><p><code>domain</code>: string</p></blockquote><p>一个域名。<code>bridge</code> 向 <code>portal</code> 建立的连接，都会使用这个域名进行发送。这个域名只作为 <code>bridge</code> 和 <code>portal</code> 的通信用途，不必真实存在。</p><h2 id="portalobject" tabindex="-1"><a class="header-anchor" href="#portalobject" aria-hidden="true">#</a> PortalObject</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.v2fly.org&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>tag</code>: string</p></blockquote>`,5),g=s("code",null,"portal",-1),y=s("code",null,"outboundTag",-1),h=s("code",null,"portal",-1),j=a(`<blockquote><p><code>domain</code>: string</p></blockquote><p>一个域名。当 <code>portal</code> 接收到流量时，如果流量的目标域名是此域名，则 <code>portal</code> 认为当前连接上 <code>bridge</code> 发来的通信连接。而其它流量则会被当成需要转发的流量。<code>portal</code> 所做的工作就是把这两类连接进行识别并拼接。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>和其它配置一样，一个 V2Ray 既可以作为 <code>bridge</code>，也可以作为 <code>portal</code>，也可以同时两者，以适用于不同的场景需要。</p></div><h2 id="完整配置样例" tabindex="-1"><a class="header-anchor" href="#完整配置样例" aria-hidden="true">#</a> 完整配置样例</h2><p><code>bridge</code> 通常需要两个出站代理，一个用于连接 <code>portal</code>，另一个用于发送实际的流量。也就是说，你需要用路由区分两种流量。</p><p>反向代理配置:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;bridges&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bridge&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.v2fly.org&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出站代理:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;out&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:80&quot;</span> <span class="token comment">// 将所有流量转发到网页服务器</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal 的 IP 地址&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
                <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;27848739-7e62-4138-9fd3-098a63964b6b&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;interconn&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由配置:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;bridge&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;full:test.v2fly.org&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;interconn&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;bridge&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;out&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>portal</code> 通常需要两个入站代理，一个用于接收 <code>bridge</code> 的连接，另一个用于接收实际的流量。同时你也需要用路由区分两种流量。</p><p>反向代理配置:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;portals&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.v2fly.org&quot;</span> <span class="token comment">// 必须和 bridge 的配置一样</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>入站代理:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;external&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token comment">// 开放 80 端口，用于接收外部的 HTTP 访问</span>
    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dokodemo-door&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// 用于接收 bridge 的连接</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;interconn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;27848739-7e62-4138-9fd3-098a63964b6b&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由配置:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;external&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;interconn&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>在运行过程中，建议先启用 <code>bridge</code>，再启用 <code>portal</code>。</p></div>`,19);function _(f,x){const t=c("RouterLink");return i(),l("div",null,[r,s("div",d,[v,s("p",null,[n("反向代理默认已开启 "),o(t,{to:"/config/mux.html"},{default:e(()=>[n("Mux")]),_:1}),n("，请不要在其用到的出站代理上再次开启 Mux。")])]),k,s("p",null,[n("一个标识，所有由 "),b,n(" 发出的连接，都会带有这个标识。可以在 "),o(t,{to:"/config/routing.html"},{default:e(()=>[n("路由")]),_:1}),n(" 中使用 "),q,n(" 进行识别。")]),m,s("p",null,[g,n(" 的标识。在 "),o(t,{to:"/config/routing.html"},{default:e(()=>[n("路由")]),_:1}),n(" 中使用 "),y,n(" 将流量转发到这个 "),h,n("。")]),j])}const R=p(u,[["render",_],["__file","reverse.html.vue"]]);export{R as default};
