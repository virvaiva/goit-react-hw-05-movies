"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[483],{76:function(n,t,e){e.d(t,{Fb:function(){return f},IQ:function(){return x},V0:function(){return h},_L:function(){return u},jS:function(){return m}});var r=e(861),a=e(757),c=e.n(a),i=e(44),o="0e93aabbe6940ffc57eaa3a18a147920",s="https://api.themoviedb.org/3/";function u(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(c().mark((function n(){var t,e,r,a,u=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:1,e="".concat(s,"/trending/movie/day?api_key=").concat(o,"&page=").concat(t),n.next=4,i.ZP.get(e);case 4:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 7:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"?api_key=").concat(o),n.next=3,i.ZP.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t),n.next=3,i.ZP.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o),n.next=3,i.ZP.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o),n.next=3,i.ZP.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u()},483:function(n,t,e){e.r(t),e.d(t,{default:function(){return C}});var r,a,c,i,o,s,u,p,f,d=e(885),h=e(791),l=e(689),x=e(76),g=e(168),m=e(444),v=e(731),Z=m.ZP.section(r||(r=(0,g.Z)(["\n  padding: 20px 20px;\n  margin: 0 auto;\n  max-width: 1280px;\n"]))),w=m.ZP.h1(a||(a=(0,g.Z)(["\n  text-align: center;\n  text-transform: uppercase;\n  border-radius: 10px;\n  text-shadow: 2px 2px 4px rgb(255 255 255 / 50%);\n  gap: 4px;\n  padding: 8px;\n  color: #2a2a2a;\n  font-size: 32px;\n  font-weight: 700;\n"]))),y=m.ZP.ul(c||(c=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n"]))),b=m.ZP.li(i||(i=(0,g.Z)(["\n  width: 250px;\n  :hover,\n  :focus {\n    scale: 1.1;\n    transition: all 0.8s 0s ease-in-out;\n  }\n"]))),k=(0,m.ZP)(v.rU)(o||(o=(0,g.Z)(["\n  font-size: 24px;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  color: #000;\n  :hover,\n  :focus {\n    color: #fff;\n    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),P=m.ZP.img(s||(s=(0,g.Z)(["\n  width: 100%;\n  height: auto;\n  display: block;\n  border-radius: 5px;\n"]))),_=m.ZP.div(u||(u=(0,g.Z)(["\n  padding-top: 8px;\n  width: 200px;\n"]))),j=m.ZP.h3(p||(p=(0,g.Z)(["\n  margin: 0 0 10px 0;\n  font-size: 20px;\n"]))),z=m.ZP.p(f||(f=(0,g.Z)(["\n  margin: 0 0 10px 0;\n  font-size: 15px;\n"]))),S=e(184);function C(){var n=(0,h.useState)([]),t=(0,d.Z)(n,2),e=t[0],r=t[1],a=(0,l.TH)();return(0,h.useEffect)((function(){(0,x._L)().then(r)}),[]),(0,S.jsxs)(Z,{children:[(0,S.jsx)(w,{children:"Popular movies today"}),(0,S.jsx)(y,{children:e.map((function(n){var t=n.id,e=n.poster_path,r=n.title,c=n.vote_average;return(0,S.jsx)(b,{children:(0,S.jsxs)(k,{to:"/movies/".concat(t),state:{from:a},children:[(0,S.jsx)(P,{src:e?"https://image.tmdb.org/t/p/w500"+e:"https://dummyimage.com/200x300/858585/fff.jpg&text=No+photo",alt:r,width:"200",height:"240"}),(0,S.jsxs)(_,{children:[(0,S.jsxs)(j,{children:[r," "]}),0!==c&&(0,S.jsxs)(z,{children:["Rating: ",c.toFixed(1)]})]})]})},t)}))})]})}}}]);
//# sourceMappingURL=483.5d568156.chunk.js.map