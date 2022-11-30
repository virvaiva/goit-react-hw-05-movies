"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[196],{76:function(n,t,e){e.d(t,{Fb:function(){return l},IQ:function(){return h},V0:function(){return x},_L:function(){return u},jS:function(){return m}});var r=e(861),a=e(757),i=e.n(a),o=e(44),c="0e93aabbe6940ffc57eaa3a18a147920",s="https://api.themoviedb.org/3/";function u(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(i().mark((function n(){var t,e,r,a,u=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:1,e="".concat(s,"/trending/movie/day?api_key=").concat(c,"&page=").concat(t),n.next=4,o.ZP.get(e);case 4:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 7:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"?api_key=").concat(c),n.next=3,o.ZP.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/search/movie?api_key=").concat(c,"&language=en-US&query=").concat(t),n.next=3,o.ZP.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(c),n.next=3,o.ZP.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(c),n.next=3,o.ZP.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u()},196:function(n,t,e){e.r(t),e.d(t,{default:function(){return I}});var r,a,i,o,c,s,u,p,l,d,x,f=e(885),h=e(689),v=e(791),m=e(168),g=e(444),b=e(731),Z=g.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 28px;\n  font-size: 32px;\n  color: #010101;\n  /* width: 1200px; */\n  margin-top: 20px;\n  border-bottom: 1px solid black;\n"]))),w=g.ZP.section(a||(a=(0,m.Z)(["\n  padding: 120px 20px;\n  margin: 0 auto;\n  max-width: 1280px;\n  border-bottom: 1px solid black;\n"]))),j=g.ZP.div(i||(i=(0,m.Z)(["\n  padding: 20px;\n  margin: 0 auto;\n  max-width: 1280px;\n  border-bottom: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),k=(0,g.ZP)(b.rU)(o||(o=(0,m.Z)(["\n  text-decoration: none;\n  color: black;\n  font-weight: 700;\n  background-color: #218657;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),\n    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n  &.active {\n    color: #fff;\n  }\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: #fff;\n  }\n"]))),y=g.ZP.h1(c||(c=(0,m.Z)(["\n  margin: 0 0 24px;\n  font-size: 54px;\n"]))),P=g.ZP.p(s||(s=(0,m.Z)(["\n  margin: 0 0 20px;\n  font-size: 28px;\n"]))),_=g.ZP.h2(u||(u=(0,m.Z)(["\n  margin: 0 0 16px;\n  font-size: 32px;\n"]))),z=g.ZP.h3(p||(p=(0,m.Z)(["\n  margin: 0 0 16px;\n  font-size: 28px;\n"]))),U=g.ZP.ul(l||(l=(0,m.Z)(["\n  margin: 0 auto;\n  font-size: 24px;\n  /* padding-left: 0; */\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),F=g.ZP.li(d||(d=(0,m.Z)([""]))),C=(0,g.ZP)(b.rU)(x||(x=(0,m.Z)(["\n  font-size: 24px;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  color: #000;\n  :hover,\n  :focus {\n    color: #218657;\n    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),S=e(76),G=e(184);function I(){var n,t,e,r,a,i,o=(0,h.UO)().movieId,c=(0,h.TH)(),s=(0,v.useState)(),u=(0,f.Z)(s,2),p=u[0],l=u[1];if((0,v.useEffect)((function(){(0,S.Fb)(o).then(l)}),[o]),!p)return null;var d=p.release_date,x=new Date(d);return(0,G.jsx)("main",{children:(0,G.jsxs)(w,{children:[(0,G.jsx)(k,{to:null!==(n=null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",children:"Go back"}),(0,G.jsxs)(Z,{children:[(0,G.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+p.poster_path,alt:p.title,width:"300",loading:"lazy"}),(0,G.jsxs)("div",{children:[(0,G.jsxs)(y,{children:[p.title," (",x.getFullYear(),")"]}),(0,G.jsx)(P,{children:"User score: ".concat((10*p.vote_average).toFixed(2),"%")}),(0,G.jsx)(_,{children:"Overview:"}),(0,G.jsx)(P,{children:p.overview}),(0,G.jsx)(_,{children:"Genres:"}),(0,G.jsx)(P,{children:p.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,G.jsxs)(j,{children:[(0,G.jsx)(z,{children:"Additional information"}),(0,G.jsxs)(U,{children:[(0,G.jsx)(F,{children:(0,G.jsx)(C,{to:"cast",state:{from:null!==(e=null===(r=c.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"movies"},children:"Cast"})}),(0,G.jsx)(F,{children:(0,G.jsx)(C,{to:"reviews",state:{from:null!==(a=null===(i=c.state)||void 0===i?void 0:i.from)&&void 0!==a?a:"/movies"},children:"Reviews"})})]})]}),(0,G.jsx)(h.j3,{})]})})}}}]);
//# sourceMappingURL=196.7bdb299e.chunk.js.map