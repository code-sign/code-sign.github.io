(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(181),o=a(55),c=(a(26),a(182),a(224)),s=a(183),u=a(169),l=a.n(u),d=function(e){var t=e.data.site.siteMetadata.author;return r.a.createElement("div",{className:l.a.author},r.a.createElement("p",{className:l.a.author__bio},t.bio,r.a.createElement("a",{className:l.a["author__bio-twitter"],href:Object(s.a)("twitter",t.contacts.twitter),rel:"noopener noreferrer",target:"_blank"},r.a.createElement("strong",null,t.name)," on Twitter")))},f=function(e){return r.a.createElement(o.StaticQuery,{query:"2015307863",render:function(t){return r.a.createElement(d,Object.assign({},e,{data:t}))},data:c})},m=a(225),p=a(226),h=a.n(p),v=function(e){var t=e.data,a=e.postTitle,n=e.postSlug,i=t.site.siteMetadata,o=i.siteUrl,c=i.disqusShortname;return c?r.a.createElement(h.a,{shortname:c,identifier:a,title:a,url:o+n}):null},g=function(e){return r.a.createElement(o.StaticQuery,{query:"1989642023",render:function(t){return r.a.createElement(v,Object.assign({},e,{data:t}))},data:m})},b=a(170),E=a.n(b),y=function(e){var t=e.body,a=e.title;return r.a.createElement("div",{className:E.a.content},r.a.createElement("h1",{className:E.a.content__title},a),r.a.createElement("div",{className:E.a.content__body,dangerouslySetInnerHTML:{__html:t}}))},w=a(193),_=a.n(w),N=a(171),k=a.n(N),M=function(e){var t=e.date;return r.a.createElement("div",{className:k.a.meta},r.a.createElement("p",{className:k.a.meta__date},"Published ",_()(t).format("D MMM YYYY")))},O=a(172),S=a.n(O),T=function(e){var t=e.tags,a=e.tagSlugs;return r.a.createElement("div",{className:S.a.tags},r.a.createElement("ul",{className:S.a.tags__list},a.map(function(e,a){return r.a.createElement("li",{className:S.a["tags__list-item"],key:t[a]},r.a.createElement(o.Link,{to:e,className:S.a["tags__list-item-link"]},t[a]))})))},j=a(173),q=a.n(j),P=function(e){var t=e.post,a=t.frontmatter,n=a.tags,i=a.title,c=a.date,s=t.html,u=t.fields.tagSlugs;return r.a.createElement("div",{className:q.a.post},r.a.createElement(o.Link,{className:q.a["post__home-button"],to:"/"},"All Articles"),r.a.createElement("div",{className:q.a.post__content},r.a.createElement(y,{body:s,title:i})),r.a.createElement("div",{className:q.a.post__footer},r.a.createElement(M,{date:c}),r.a.createElement(T,{tags:n,tagSlugs:u}),r.a.createElement(f,null)),r.a.createElement("div",{className:q.a.post__comments},r.a.createElement(g,{postSlug:t.fields.slug,postTitle:t.frontmatter.title})))};a.d(t,"query",function(){return D});var D="2204190620";t.default=function(e){var t=e.data,a=t.site.siteMetadata,n=a.title,o=a.subtitle,c=t.markdownRemark.frontmatter,s=c.title,u=c.description,l=null!==u?u:o;return r.a.createElement(i.a,{title:s+" - "+n,description:l},r.a.createElement(P,{post:t.markdownRemark}))}},180:function(e,t,a){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"}},r={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"};a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(189),o=a.n(i),c=a(154),s=a.n(c),u=function(e){var t=e.children,a=e.title,n=e.description;return r.a.createElement("div",{className:s.a.layout},r.a.createElement(o.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n})),t)};a.d(t,"a",function(){return u})},183:function(e,t,a){"use strict";var n=a(180),r=function(e){var t;switch(e){case"twitter":t=n.a.TWITTER;break;case"github":t=n.a.GITHUB;break;case"email":t=n.a.EMAIL;break;case"rss":t=n.a.RSS;break;default:t={}}return t},i=function(e,t){var a;switch(e){case"twitter":a="https://www.twitter.com/"+t;break;case"github":a="https://github.com/"+t;break;case"email":a="mailto:"+t;break;default:a=t}return a};a.d(t,"b",function(){return r}),a.d(t,"a",function(){return i})},224:function(e){e.exports={data:{site:{siteMetadata:{author:{name:"Code-sign",bio:"UI Developer & Designer",contacts:{twitter:"#"}}}}}}},225:function(e){e.exports={data:{site:{siteMetadata:{disqusShortname:"",url:"https://code-sign.netlify.com"}}}}},226:function(e,t,a){"use strict";e.exports=a(227)},227:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=c(a(0)),o=c(a(1));function c(e){return e&&e.__esModule?e:{default:e}}var s=["shortname","identifier","title","url","category_id","onNewComment","language"],u=!1;function l(e,t){var a=t.onNewComment,n=t.language,r=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["onNewComment","language"]);for(var i in r)e.page[i]=r[i];e.language=n,a&&(e.callbacks={onNewComment:[a]})}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,a){return s.some(function(e){return e===a})?t:n({},t,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},a,e.props[a]))},{});return i.default.createElement("div",t,i.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!u){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),u=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};s.forEach(function(a){"shortname"!==a&&e.props[a]&&(t[a]=e.props[a])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){l(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){l(this,t)},this.addDisqusScript())}}]),t}();d.displayName="DisqusThread",d.propTypes={id:o.default.string,shortname:o.default.string.isRequired,identifier:o.default.string,title:o.default.string,url:o.default.string,category_id:o.default.string,onNewComment:o.default.func,language:o.default.string},d.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=d}}]);