(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{225:function(t,e,n){var content=n(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("1b0ef6cc",content,!0,{sourceMap:!1})},234:function(t,e,n){"use strict";n(225)},235:function(t,e,n){(e=n(58)(!1)).push([t.i,'.mb__s[data-v-f4a5445e]{margin-bottom:8px!important}@media only screen and (min-device-width:769px){.mb__s[data-v-f4a5445e]{margin-bottom:16px!important}}.mb__m[data-v-f4a5445e]{margin-bottom:16px!important}@media only screen and (min-device-width:769px){.mb__m[data-v-f4a5445e]{margin-bottom:24px!important}}.mb__l[data-v-f4a5445e]{margin-bottom:24px!important}@media only screen and (min-device-width:769px){.mb__l[data-v-f4a5445e]{margin-bottom:32px!important}}.section__header[data-v-f4a5445e]{margin-bottom:32px}.section__content[data-v-f4a5445e]{background-color:#fff;box-shadow:0 4px 8px rgba(51,51,51,.2);line-height:1.8;margin-bottom:24px;padding:24px 16px}.section__content[data-v-f4a5445e]>:first-child{margin-top:0!important}.section__content[data-v-f4a5445e]>:last-child{margin-bottom:0!important}.section__content[data-v-f4a5445e] h2{font-size:1.5rem;font-weight:700;line-height:1.5;margin:32px 0 16px}.section__content[data-v-f4a5445e] p{margin-bottom:16px}.section__content[data-v-f4a5445e] a:active,.section__content[data-v-f4a5445e] a:focus,.section__content[data-v-f4a5445e] a:hover{text-decoration:none}.section__content[data-v-f4a5445e] blockquote{background-color:#f3f3f3;border-left:5px solid #ccc;padding:16px;margin-bottom:16px}.section__content[data-v-f4a5445e] blockquote>:first-child{margin-top:0!important}.section__content[data-v-f4a5445e] blockquote>:last-child{margin-bottom:0!important}.section__content[data-v-f4a5445e] pre{line-height:1.5;margin-bottom:16px}.section__content[data-v-f4a5445e] ul>li{padding-left:20px;position:relative;list-style:none}.section__content[data-v-f4a5445e] ul>li:before{content:"";display:block;position:absolute;top:calc(.9em - 2px);left:0;width:4px;height:4px;border-radius:50%;background-color:#333}@media only screen and (min-device-width:769px){.section__content[data-v-f4a5445e]{padding:48px 32px}.section__content[data-v-f4a5445e] h2{font-size:1.875rem}}.section__footer[data-v-f4a5445e]{padding:0 16px}@media only screen and (min-device-width:769px){.section__footer[data-v-f4a5445e]{padding:0}}.hero__detail-row .tags[data-v-f4a5445e]{margin-bottom:0;margin-left:16px}@media only screen and (min-device-width:769px){.hero__detail-row .tags[data-v-f4a5445e]{margin-left:24px}}',""]),t.exports=e},268:function(t,e,n){"use strict";n.r(e);n(10),n(34);var o=n(6),r=n(1).a.extend({components:{bMain:function(){return n.e(0).then(n.bind(null,274))},cButton:function(){return n.e(2).then(n.bind(null,270))},cBreadcrumb:function(){return n.e(13).then(n.bind(null,272))},cListShare:function(){return n.e(15).then(n.bind(null,277))},cHero:function(){return n.e(1).then(n.bind(null,269))},cTags:function(){return n.e(3).then(n.bind(null,273))}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,r=t.redirect,e.next=3,n("article",o.slug).fetch().catch((function(){r("/404")}));case 3:return article=e.sent,e.abrupt("return",{article:Array.isArray(article)?article[0]:article});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{}},computed:{breadcrumb:function(){var t,e;return[{text:null===(t=this.article)||void 0===t?void 0:t.title,to:"".concat(null===(e=this.article)||void 0===e?void 0:e.slug)}]}},head:function(){var t,e,n,o,r;return{titleTemplate:"".concat(null===(t=this.article)||void 0===t?void 0:t.title," - 青色の紙切れ"),meta:[{hid:"description",name:"description",content:"「".concat(null===(e=this.article)||void 0===e?void 0:e.title,"」についての記事です。")},{hid:"og:url",name:"og:url",content:"https://desto.me/blog/".concat(null===(n=this.article)||void 0===n?void 0:n.slug)},{hid:"og:description",name:"og:description",content:"「".concat(null===(o=this.article)||void 0===o?void 0:o.title,"」についての記事です。")},{hid:"og:image",name:"og:image",content:"".concat(this.$ogp(null===(r=this.article)||void 0===r?void 0:r.title))}],script:[{src:"https://platform.twitter.com/widgets.js",async:!0},{src:"https://b.st-hatena.com/js/bookmark_button.js",async:!0}]}}}),c=(n(234),n(33)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bMain",[n("cHero",{attrs:{title:t.article.title}},[n("div",{staticClass:"hero__detail--blog"},[n("div",{staticClass:"hero__detail-row"},[n("p",[t._v(t._s(t.article.timestamp))]),n("cTags",{attrs:{items:t.article.tags}})],1),n("div",{staticClass:"hero__detail-row"},[n("cListShare",[n("li",[n("a",{staticClass:"twitter-share-button",attrs:{href:"https://twitter.com/share?ref_src=twsrc%5Etfw","data-size":"large","data-text":t.article.title,"data-url":"https://desto.me/blog/"+t.article.slug,"data-lang":"ja","data-show-count":"false"}},[t._v("ツイート")])]),n("li",[n("iframe",{staticStyle:{border:"none",overflow:"hidden"},attrs:{src:"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=large&width=79&height=28&appId",width:"79",height:"28",scrolling:"no",frameborder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"}})]),n("li",[n("a",{staticClass:"hatena-bookmark-button",attrs:{href:"https://b.hatena.ne.jp/entry/","data-hatena-bookmark-layout":"basic-label","data-hatena-bookmark-lang":"ja","data-hatena-bookmark-height":"28",title:"このエントリーをはてなブックマークに追加"}},[n("img",{staticStyle:{border:"none"},attrs:{src:"https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png",alt:"このエントリーをはてなブックマークに追加",width:"20",height:"20"}})])])])],1)])]),n("section",{staticClass:"section"},[n("div",{staticClass:"section__header"},[n("cBreadcrumb",{attrs:{items:t.breadcrumb}})],1),n("div",{staticClass:"section__content"},[n("nuxtContent",{attrs:{document:t.article}})],1),n("div",{staticClass:"section__footer"},[n("p",[n("cButton",{attrs:{to:"/"}},[t._v("ブログトップへ戻る")])],1)])])],1)}),[],!1,null,"f4a5445e",null);e.default=component.exports}}]);