(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{214:function(e,n,t){__NEXT_REGISTER_PAGE("/post",function(){return e.exports=t(215),{page:e.exports.default}})},215:function(e,n,t){"use strict";t.r(n);var r=t(25),o=t.n(r),a=t(0),c=t.n(a),u=(t(216),t(31));function s(e,n,t,r,o,a,c){try{var u=e[a](c),s=u.value}catch(e){return void t(e)}u.done?n(s):Promise.resolve(s).then(r,o)}var i=function(e){return c.a.createElement(u.a,null,c.a.createElement("h1",null,e.show.name),c.a.createElement("p",null,e.show.summary.replace(/<[\/]?p>/g,"")),c.a.createElement("img",{src:e.show.image.medium}))};i.getInitialProps=function(){var e,n=(e=o.a.mark(function e(n){var t,r,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.id,e.next=3,fetch("https://api.tvmaze.com/shows/".concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,console.log("Fetched show ".concat(a.name)),e.abrupt("return",{show:a});case 9:case"end":return e.stop()}},e,this)}),function(){var n=this,t=arguments;return new Promise(function(r,o){var a=e.apply(n,t);function c(e){s(a,r,o,c,u,"next",e)}function u(e){s(a,r,o,c,u,"throw",e)}c(void 0)})});return function(e){return n.apply(this,arguments)}}(),n.default=i},216:function(e,n,t){e.exports=t(39)},25:function(e,n,t){e.exports=t(68)}},[[214,1,0]]]);