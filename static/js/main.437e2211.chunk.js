(this["webpackJsonpuniversal-router-redict"]=this["webpackJsonpuniversal-router-redict"]||[]).push([[0],{8:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),a=n(4),s=n(0),o=(n(2),n(5)),i=n(6),u=n(7),p=Object(u.a)(),h=function(){function e(e){e.preventDefault(),p.push({pathname:e.target.pathname})}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("a",{href:"/",onClick:e,children:"A"})," ","|"," ",Object(s.jsx)("a",{href:"/b",onClick:e,children:"B"}),Object(s.jsx)("hr",{})]})},j=[{path:"/",action:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(h,{}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"A"})]})}},{path:"/b",action:function(e){return"A"===e.mode?(console.log("redirected to /A"),{redirect:"/"}):fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(h,{}),Object(s.jsx)("br",{}),e.map((function(e){return Object(s.jsxs)("p",{children:[" ",e.email]},e.id)}))]})}))}}],l=new i.a(j,{context:{mode:"B"}}),b=document.getElementById("root");function d(e){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.resolve({pathname:t.pathname});case 3:if(!(n=e.sent).redirect){e.next=6;break}return e.abrupt("return",p.push({pathname:n.redirect}));case 6:return e.abrupt("return",Object(o.render)(n,b));case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}p.listen((function(e){return d(e.location)})),d(p.location)}},[[8,1,2]]]);
//# sourceMappingURL=main.437e2211.chunk.js.map