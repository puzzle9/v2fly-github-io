import{_ as o,r as n,o as r,c as a,a as s,b as e,d,w as i,e as c}from"./app.f77be7dd.js";const l={},u=c('<h1 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> DNS</h1><h2 id="dns-outbound" tabindex="-1"><a class="header-anchor" href="#dns-outbound" aria-hidden="true">#</a> DNS Outbound</h2><ul><li>Name: <code>dns</code></li><li>Type: Outbound Protocol</li><li>ID: <code>outbound.dns</code></li></ul><p>DNS is an outbound protocol to intercept and forward DNS queries. It can only accept DNS traffic(including TCP and UDP based DNS). Other protocols will not be processed.</p>',4);function h(_,f){const t=n("RouterLink");return r(),a("div",null,[u,s("p",null,[e("The DNS requests will be sent to built-in "),d(t,{to:"/en_US/v5/config/dns.html"},{default:i(()=>[e("DNS Server")]),_:1}),e(" if it is requesting for an IP(A or AAAA), other queries will not be intercepted and thus send to the origin server as is.")])])}const b=o(l,[["render",h],["__file","dns.html.vue"]]);export{b as default};
