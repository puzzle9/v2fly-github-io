import{_ as l,r as p,o as c,c as i,a as n,b as o,d as e,w as s,e as a}from"./app.f77be7dd.js";const u={},r=a(`<h1 id="inbounds" tabindex="-1"><a class="header-anchor" href="#inbounds" aria-hidden="true">#</a> Inbounds</h1><p>inbound</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span><span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sniffing&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>protocol</code>: name of <code>&lt;inbound&gt;</code></p></blockquote>`,4),d=n("blockquote",null,[n("p",null,[n("code",null,"settings"),o(": settings of "),n("code",null,"<inbound>")])],-1),h=a('<blockquote><p><code>port</code>: string</p></blockquote><p>The listening port for the inbound.</p><p>It can be <code>&quot;443&quot;</code> or <code>&quot;20-21&quot;</code> or <code>&quot;22,3389&quot;</code> .</p><blockquote><p><code>listen</code>: string</p></blockquote><p>The listening IP address for the inbound.</p><blockquote><p><code>tag</code>: string</p></blockquote><p>The Tag of the inbound. This is used as an identifier for outbounds.</p><blockquote><p><code>sniffing</code>: <a href="#SniffingObject">SniffingObject</a></p></blockquote><p>The sniffing settings for the inbound. It allows the connection to be routed based on its content and metadata.</p>',9),f=n("code",null,"streamSettings",-1),b=n("p",null,"The stream settings for the inbound. This determine how the protocol data is transferred.",-1),k=n("h2",{id:"supported-proxy-protocol",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#supported-proxy-protocol","aria-hidden":"true"},"#"),o(" Supported Proxy Protocol")],-1),_=n("h2",{id:"sniffingobject",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sniffingobject","aria-hidden":"true"},"#"),o(" SniffingObject")],-1),g=n("blockquote",null,[n("p",null,[n("code",null,"enabled"),o(": true | false")])],-1),m=n("blockquote",null,[n("p",null,[n("code",null,"destOverride"),o(": [ string ]")])],-1),q=n("blockquote",null,[n("p",null,[n("code",null,"metadataOnly"),o(": true | false")])],-1);function v(x,S){const t=p("RouterLink");return c(),i("div",null,[r,n("p",null,[o("The name of the inbound "),e(t,{to:"/en_US/v5/config/proxy.html"},{default:s(()=>[o("proxy")]),_:1}),o(" protocol.")]),d,n("p",null,[o("The settings for the inbound "),e(t,{to:"/en_US/v5/config/proxy.html"},{default:s(()=>[o("proxy")]),_:1}),o(" protocol.")]),h,n("blockquote",null,[n("p",null,[f,o(": "),e(t,{to:"/en_US/v5/config/stream.html"},{default:s(()=>[o("StreamObject")]),_:1})])]),b,k,n("ul",null,[n("li",null,[e(t,{to:"/en_US/v5/config/proxy/socks.html"},{default:s(()=>[o("SOCKS")]),_:1})]),n("li",null,[e(t,{to:"/en_US/v5/config/proxy/vmess.html"},{default:s(()=>[o("VMess")]),_:1})]),n("li",null,[e(t,{to:"/en_US/v5/config/proxy/vlite.html"},{default:s(()=>[o("VLite")]),_:1})]),n("li",null,[e(t,{to:"/en_US/v5/config/proxy/shadowsocks.html"},{default:s(()=>[o("Shadowsocks")]),_:1})]),n("li",null,[e(t,{to:"/en_US/v5/config/proxy/http.html"},{default:s(()=>[o("HTTP")]),_:1})]),n("li",null,[e(t,{to:"/en_US/v5/config/proxy/dokodemo.html"},{default:s(()=>[o("Dokodemo")]),_:1})]),n("li",null,[e(t,{to:"/en_US/v5/config/proxy/trojan.html"},{default:s(()=>[o("Trojan")]),_:1})]),n("li",null,[e(t,{to:"/en_US/v5/config/proxy/vless.html"},{default:s(()=>[o("VLESS")]),_:1})])]),_,g,m,q])}const T=l(u,[["render",v],["__file","inbound.html.vue"]]);export{T as default};
