(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{K1Ga:function(t,e,n){},"a/7s":function(t,e,n){"use strict";var r=n("gu+S");n.n(r).a},aqZ5:function(t,e,n){"use strict";var r=n("K1Ga");n.n(r).a},"gu+S":function(t,e,n){},so6H:function(t,e,n){"use strict";n.r(e);function r(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"page"},[n.topicId&&n.detail?r("ScrollView",{attrs:{useLoadMore:!1},on:{onRefresh:n.onRefresh}},[r("div",{staticClass:"header"},[r("h2",{staticClass:"title"},[n._v(n._s(n.title))]),n._v(" "),r("p",{staticClass:"sc-title"},[r("span",[n._v(n._s(n.createTime))]),n._v(" "),r("span",[n._v(n._s(n.authorName))]),n._v(" "),r("span",[n._v(n._s(n.visitCount))])])]),n._v(" "),r("div",{staticClass:"content-html",domProps:{innerHTML:n._s(n.content)}}),n._v(" "),n.replyCount?r("div",{staticClass:"main"},[r("div",{staticClass:"comment-header"},[r("p",[n._v(n._s(n.replyCount)+"条回复")])]),n._v(" "),r("ul",{staticClass:"comments"},n._l(n.comments,function(t,e){return r("li",{key:e},[r("img",{staticClass:"avatar",attrs:{src:t.author.avatar_url}}),n._v(" "),r("div",{staticClass:"comment-content"},[r("p",{staticClass:"comment-title"},[n._v("\n                            "+n._s(t.author.loginname)+"\n                            "+n._s(n.getCreateTime(t.create_at))+"\n                        ")]),n._v(" "),r("div",{staticClass:"comment-html",domProps:{innerHTML:n._s(t.content)}})])])}),0)]):n._e()]):r("Loading")],1)}r._withStripped=!0;var o,i,a=n("bm2v"),c=n("iQd6"),s=n("o0nx"),u=n("xqZi"),l=n("t06s"),p=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;0<=c;c--)(o=t[c])&&(a=(i<3?o(a):3<i?o(e,n,a):o(e,n))||a);return 3<i&&a&&Object.defineProperty(e,n,a),a},d=function(i,a,c,s){return new(c||(c=Promise))(function(t,e){function n(t){try{o(s.next(t))}catch(t){e(t)}}function r(t){try{o(s.throw(t))}catch(t){e(t)}}function o(e){e.done?t(e.value):new c(function(t){t(e.value)}).then(n,r)}o((s=s.apply(i,a||[])).next())})},h=function(n,r){var o,i,a,t,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(a=2&e[0]?i.return:e[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,e[1])).done)return a;switch(i=0,a&&(e=[2&e[0],a.value]),e[0]){case 0:case 1:a=e;break;case 4:return c.label++,{value:e[1],done:!1};case 5:c.label++,i=e[1],e=[0];continue;case 7:e=c.ops.pop(),c.trys.pop();continue;default:if(!(a=0<(a=c.trys).length&&a[a.length-1])&&(6===e[0]||2===e[0])){c=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){c.label=e[1];break}if(6===e[0]&&c.label<a[1]){c.label=a[1],a=e;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(e);break}a[2]&&c.ops.pop(),c.trys.pop();continue}e=r.call(n,c)}catch(t){e=[6,t],i=0}finally{o=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}};function y(){return null!==i&&i.apply(this,arguments)||this}var b=(i=a.a,p(y,i),Object.defineProperty(y.prototype,"topicId",{get:function(){return this.$route.params.id},enumerable:!0,configurable:!0}),y.prototype.mounted=function(){this.onLoad()},y.prototype.onLoad=function(){var t=this;return this.getDetailById(this.topicId).then(function(){return document.title=t.title})},y.prototype.onRefresh=function(n){return d(this,void 0,void 0,function(){var e;return h(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.onLoad()];case 1:return t.sent(),[3,3];case 2:return e=t.sent(),console.log(e),[3,3];case 3:return n(),[2]}})})},Object.defineProperty(y.prototype,"detail",{get:function(){return this.details[this.topicId]},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"content",{get:function(){return this.detail.content},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"title",{get:function(){var t=this.detail.title;return void 0===t?"":t},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"comments",{get:function(){return this.detail.replies},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"createTime",{get:function(){var t=this.detail.create_at;return"发布于 "+Object(l.a)(t)},enumerable:!0,configurable:!0}),y.prototype.getCreateTime=function(t){return Object(l.a)(t)},Object.defineProperty(y.prototype,"authorName",{get:function(){return"作者 "+this.detail.author.loginname},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"visitCount",{get:function(){return this.detail.visit_count+" 次浏览"},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"replyCount",{get:function(){return this.detail.reply_count},enumerable:!0,configurable:!0}),f([Object(s.a)(u.a)],y.prototype,"getDetailById",void 0),f([Object(s.b)(function(t){return t.details.detail})],y.prototype,"details",void 0),y=f([c.a],y)),v=(n("a/7s"),n("aqZ5"),n("F8we")),m=Object(v.a)(b,r,[],!1,null,"32280780",null);m.options.__file="src/views/details/main.vue";var _=m.exports;e.default=_}}]);