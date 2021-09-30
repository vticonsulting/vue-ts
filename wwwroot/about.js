import{s as n,o as s,i as a,D as t}from"./vendor.js";var p={};const o={class:"prose prose-sm mr-auto text-left max-w-none"},e=[t('<pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">MenuItem</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  title<span class="token operator">:</span> <span class="token builtin">string</span>\n  href<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>\n  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>\n  hidden<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n  child<span class="token operator">?</span><span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">useMenuItem</span><span class="token punctuation">(</span><span class="token punctuation">{</span> hidden<span class="token punctuation">,</span> title<span class="token punctuation">,</span> icon<span class="token punctuation">,</span> child<span class="token punctuation">,</span> href <span class="token punctuation">}</span><span class="token operator">:</span> MenuItem<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>child <span class="token operator">&amp;&amp;</span> child<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> hidden<span class="token punctuation">,</span> title<span class="token punctuation">,</span> icon<span class="token punctuation">,</span> child<span class="token punctuation">,</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    hidden<span class="token punctuation">,</span>\n    href<span class="token operator">:</span> href <span class="token operator">??</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">,</span>\n    title<span class="token punctuation">,</span>\n    icon<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>',2)],c={setup(t,{expose:p}){p({frontmatter:{title:"About",meta:[{property:"og:title",content:"About"}]}});return n({title:"About",meta:[{property:"og:title",content:"About"}]}),(n,t)=>(s(),a("div",o,e))}};"function"==typeof p&&p(c);export{c as default};
//# sourceMappingURL=about.js.map