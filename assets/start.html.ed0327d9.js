import{_ as i,r as o,o as c,c as r,a as s,b as a,w as t,d as n,e as u}from"./app.5178c638.js";const l={},d=s("h1",{id:"novice-guide",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#novice-guide","aria-hidden":"true"},"#"),n(" Novice Guide")],-1),v=n("Download and install"),k=n(" After V2Ray is installed, you need to configure it. For demonstration, only simple configuration methods are introduced here. If you need to configure more complex functions, please refer to the subsequent "),m=n("Configuration Document"),b=n("."),q=u(`<h2 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server</h2><p>You need a server outside the firewall to run V2Ray on the server side. The configuration is as follows:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10086</span><span class="token punctuation">,</span> <span class="token comment">// server listening port</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To successfully connect, you need to make sure that the <code>id</code> and port are consistent with the client in the server configuration.</p><h2 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> Client</h2><p>In your PC (or mobile phone), you need to run V2Ray with the following configuration:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span> <span class="token comment">// SOCKS proxy port, you need to configure the proxy in the browser and point to this port</span>
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
                        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;server&quot;</span><span class="token punctuation">,</span> <span class="token comment">// server address, please modify it to your own server ip or domain name</span>
                        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10086</span><span class="token punctuation">,</span> <span class="token comment">// server port</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The only place to change the above configuration is your server IP, which is indicated in the configuration. The above configuration will forward all traffic except the local area network (such as access router) to your server.</p><h2 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> run</h2><ul><li>In Windows and macOS, the configuration file is usually the <code>config.json</code> file in the same directory of V2Ray. Just run <code>v2ray</code> or <code>v2ray.exe</code> directly.</li><li>In Linux, the configuration file is usually located in the <code>/etc/v2ray/</code> or <code>/usr/local/etc/v2ray/</code> directory. Run <code>v2ray --config=/etc/v2ray/config.json</code>, or use tools such as systemd to run V2Ray as a service in the background.</li></ul>`,10),h=n("For more detailed instructions, please refer to "),y=n("Configuration Document"),g=n(" and "),f={href:"https://guide.v2fly.org/",target:"_blank",rel:"noopener noreferrer"},_=n("New Vernacular Guide"),x=n(".");function w(V,j){const e=o("RouterLink"),p=o("ExternalLinkIcon");return c(),r("div",null,[d,s("p",null,[a(e,{to:"/en_US/guide/install.html"},{default:t(()=>[v]),_:1}),k,a(e,{to:"/en_US/config/overview.html"},{default:t(()=>[m]),_:1}),b]),q,s("p",null,[h,a(e,{to:"/en_US/config/overview.html"},{default:t(()=>[y]),_:1}),g,s("a",f,[_,a(p)]),x])])}const R=i(l,[["render",w],["__file","start.html.vue"]]);export{R as default};
