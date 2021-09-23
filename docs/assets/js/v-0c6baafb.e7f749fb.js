"use strict";(self.webpackChunkvue_good_table_next=self.webpackChunkvue_good_table_next||[]).push([[3474],{7479:(n,a,s)=>{s.r(a),s.d(a,{default:()=>m});var t=s(6252);const e=(0,t._)("h1",{id:"search-options",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#search-options","aria-hidden":"true"},"#"),(0,t.Uk)(" Search Options")],-1),p=(0,t._)("p",null,"Vue-good-table supports two ways of filtering the table.",-1),l=(0,t._)("li",null,"A global search that searches through all records in the table",-1),o={href:"/guide/configuration/column-filter-options.md",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("Column filters"),u=(0,t.Uk)(" that filter based on a given column"),r=(0,t.uE)('<p>This section talks about how to configure global search options.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:search-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    trigger: <span class="token punctuation">&#39;</span>enter<span class="token punctuation">&#39;</span>,\n    skipDiacritics: true,\n    searchFn: mySearchFn,\n    placeholder: <span class="token punctuation">&#39;</span>Search this table<span class="token punctuation">&#39;</span>,\n    externalQuery: searchQuery\n    @on-search=<span class="token punctuation">&quot;</span></span><span class="token attr-name">onSearch&quot;</span>\n  <span class="token attr-name">}&quot;</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="enabled" tabindex="-1"><a class="header-anchor" href="#enabled" aria-hidden="true">#</a> enabled</h2><p>type: <code>Boolean (default: false)</code></p><p>Allows a single search input for the whole table</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Enabling this option disables column filters</p></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:search-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',7),i=(0,t.uE)('<h2 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger" aria-hidden="true">#</a> trigger</h2><p>type: <code>String (default: &#39;&#39;)</code></p><p>Allows you to specify if you want search to trigger on &#39;enter&#39; event of the input. By <strong>default table searches on key-up</strong>.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:search-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    trigger: <span class="token punctuation">&#39;</span>enter<span class="token punctuation">&#39;</span>\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',4),k=(0,t.uE)('<h2 id="skipdiacritics" tabindex="-1"><a class="header-anchor" href="#skipdiacritics" aria-hidden="true">#</a> skipDiacritics</h2><p>type: <code>boolean (default: false)</code></p><p>By default, search does a diacriticless comparison so you can search through accented characters. This however slows down the search to some extent. If your data doesn&#39;t have accented characters, you can skip this check and gain some performance.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:search-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    skipDiacritics: true,\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="searchfn" tabindex="-1"><a class="header-anchor" href="#searchfn" aria-hidden="true">#</a> searchFn</h2><p>type: <code>Function</code></p><p>Allows you to specify your own search function for the global search</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:search-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    searchFn: myFunc\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in js</span>\nmethods<span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> cellValue<span class="token punctuation">,</span> searchTerm</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> cellValue <span class="token operator">===</span> <span class="token string">&#39;my value&#39;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> placeholder</h2><p>type: <code>String (default: &#39;Search Table&#39;)</code></p><p>Text for global search input place holder</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:search-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    placeholder: <span class="token punctuation">&#39;</span>Search this table<span class="token punctuation">&#39;</span>,\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="externalquery" tabindex="-1"><a class="header-anchor" href="#externalquery" aria-hidden="true">#</a> externalQuery</h2><p>type: <code>String</code></p><p>If you want to use your own input for searching the table, you can use this property</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>searchTerm<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:search-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    externalQuery: searchTerm\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// and in data</span>\n<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    searchTerm<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// rows, columns etc...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',18),b={},m=(0,s(3744).Z)(b,[["render",function(n,a){const s=(0,t.up)("OutboundLink"),b=(0,t.up)("search-demo"),m=(0,t.up)("external-query");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,p,(0,t._)("ol",null,[l,(0,t._)("li",null,[(0,t._)("a",o,[c,(0,t.Wm)(s)]),u])]),r,(0,t.Wm)(b),i,(0,t.Wm)(b,{trigger:"enter"}),k,(0,t.Wm)(m)],64)}]])},8319:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-0c6baafb",path:"/guide/configuration/search-options.html",title:"Search Options",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"enabled",slug:"enabled",children:[]},{level:2,title:"trigger",slug:"trigger",children:[]},{level:2,title:"skipDiacritics",slug:"skipdiacritics",children:[]},{level:2,title:"searchFn",slug:"searchfn",children:[]},{level:2,title:"placeholder",slug:"placeholder",children:[]},{level:2,title:"externalQuery",slug:"externalquery",children:[]}],filePathRelative:"guide/configuration/search-options.md",git:{updatedTime:1585919622e3,contributors:[{name:"Akshay Anand",email:"aks9800@gmail.com",commits:3},{name:"Vincent Tang",email:"10290348+vincentntang@users.noreply.github.com",commits:1}]}}}}]);