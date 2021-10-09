import{q as a,o as t,i as p,M as o}from"./vendor.js";var n={};const e={class:"prose prose-sm mr-auto text-left max-w-none"},c=o(`<pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">MenuItem</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  href<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  hidden<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  child<span class="token operator">?</span><span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><pre class="language-ts"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">useMenuItem</span><span class="token punctuation">(</span><span class="token punctuation">{</span> hidden<span class="token punctuation">,</span> title<span class="token punctuation">,</span> icon<span class="token punctuation">,</span> child<span class="token punctuation">,</span> href <span class="token punctuation">}</span><span class="token operator">:</span> MenuItem<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>child <span class="token operator">&amp;&amp;</span> child<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> hidden<span class="token punctuation">,</span> title<span class="token punctuation">,</span> icon<span class="token punctuation">,</span> child<span class="token punctuation">,</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    hidden<span class="token punctuation">,</span>
    href<span class="token operator">:</span> href <span class="token operator">??</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">,</span>
    title<span class="token punctuation">,</span>
    icon<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>`,2),l=[c],u={setup(i,{expose:s}){return s({frontmatter:{title:"About",meta:[{property:"og:title",content:"About"}]}}),a({title:"About",meta:[{property:"og:title",content:"About"}]}),(d,h)=>(t(),p("div",e,l))}};typeof n=="function"&&n(u);export{u as default};
//# sourceMappingURL=about.js.map
