import{_ as n,o as s,c as o,e}from"./app.f77be7dd.js";const a={},t=e(`<h1 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h1><ul><li>名称：<code>http</code></li><li>类型：入站／出站</li></ul><p>HTTP 的配置分为两部分，<code>InboundConfigurationObject</code> 和 <code>OutboundConfigurationObject</code>，分别对应入站和出站协议配置中的 <code>settings</code> 项。</p><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;accounts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-username&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-password&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;allowTransparent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;userLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>应该注意，虽然 <code>http inbound</code> 可以提供公共服务，但 http 协议没有对传输加密，不适宜经公网中传输，更容易成为被人用作攻击的肉鸡。<code>http inbound</code> 更有意义的用法是在局域网或本机环境下监听，为其他程序提供本地服务。</p></div><blockquote><p><code>timeout</code>: number</p></blockquote><p>从客户端读取数据的超时设置（秒），0 表示不限时。默认值为 300。 V2Ray 3.1 后等价于对应用户等级的 <code>connIdle</code> 策略。</p><blockquote><p><code>accounts</code>: [<a href="#accountobject">AccountObject</a>]</p></blockquote><p>一个数组，数组中每个元素为一个用户帐号。默认值为空。</p><p>当 <code>accounts</code> 非空时，HTTP 代理将对入站连接进行 Basic Authentication 验证。</p><blockquote><p><code>allowTransparent</code>: true | false</p></blockquote><p>当为 <code>true</code> 时，会转发所有 HTTP 请求，而非只是代理请求。若配置不当，开启此选项会导致死循环。</p><blockquote><p><code>userLevel</code>: number</p></blockquote><p>用户等级，所有连接使用这一等级。</p><h3 id="accountobject" tabindex="-1"><a class="header-anchor" href="#accountobject" aria-hidden="true">#</a> AccountObject</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-username&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-password&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>user</code>: string</p></blockquote><p>用户名，字符串类型。必填。</p><blockquote><p><code>pass</code>: string</p></blockquote><p>密码，字符串类型。必填。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>在 Linux 中使用以下环境变量即可在当前 session 使用全局 HTTP 代理（很多软件都支持这一设置，也有不支持的）。</p><ul><li><code>export http_proxy=http://127.0.0.1:8080/</code> (地址须改成你配置的 HTTP 入站代理地址)</li><li><code>export https_proxy=$http_proxy</code></li></ul></div><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192.168.108.1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">3128</span><span class="token punctuation">,</span>
            <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-username&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-password&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(V2Ray 4.21.0+)</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>应该注意，虽然 <code>http outbound</code> 可以作为对外访问的配置，但 <code>http proxy</code> 协议没有对传输加密，不适宜经公网中传输，且因不支持 udp 传输将会导致 core 功能受限（Routing 过程的的 DNS 查询不可用）。<code>http outbound</code> 更有意义的用法是在特殊情况下，只能使用 <code>http proxy</code> 对外访问内部网络中，作为为其他协议连接代理服务器的前置代理使用（见 <code>OutboundObject</code> 的 <code>ProxySettingsObject</code>）。另因 <code>http proxy</code> 只能代理 tcp 协议，udp 系的协议均不能通过。</p></div><p>(V2Ray 4.21.1+)</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>4.20.0 版本中引入了 http outbound 作为其他协议的前置代理用法中，缺乏了对 TLS 配置的支持。4.21.1 的补丁版本中对 <code>streamSettings</code> 中的 <code>security</code> 和 <code>tlsSettings</code> 保留生效。目前前置代理的用法中，vmess/tcp、vmess/tcp-tls 和 shadowsocks 等三种协议方式可使用，其他传输协议的前置代理用法需后续版本开发支持。</p></div><blockquote><p><code>servers</code>: 数组</p></blockquote><p>HTTP 代理服务器配置，若配置多个，循环使用 (RoundRobin)。</p><blockquote><p><code>address</code>: string</p></blockquote><p>HTTP 代理服务器地址，必填。</p><blockquote><p><code>port</code>: int</p></blockquote><p>HTTP 代理服务器端口，必填。</p><blockquote><p><code>user</code>: [<a href="#accountobject">AccountObject</a>]</p></blockquote><p>一个数组，数组中每个元素为一个用户帐号。默认值为空。</p>`,36),p=[t];function c(u,i){return s(),o("div",null,p)}const d=n(a,[["render",c],["__file","http.html.vue"]]);export{d as default};
