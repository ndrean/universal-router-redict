(this["webpackJsonpuniversal-router-redict"]=this["webpackJsonpuniversal-router-redict"]||[]).push([[0],{8:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(2),u=r(0),s=(r(4),r(6)),i=r(5),o=r(7),p=Object(o.a)(),j=function(){function e(e){e.preventDefault(),p.push({pathname:e.target.pathname})}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("a",{href:"/",onClick:e,children:"A"})," ","|"," ",Object(u.jsx)("a",{href:"/b",onClick:e,children:"B"}),Object(u.jsx)("hr",{})]})},h=[{path:"/",action:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"A"})]})}},{path:"/b",action:function(e){return Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("A"!==e.mode){t.next=4;break}return console.log("redirected to /A"),t.abrupt("return",{redirect:"/"});case 4:return t.abrupt("return",fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{}),Object(u.jsx)("br",{}),e.map((function(e){return Object(u.jsxs)("p",{children:[" ",e.email]},e.id)}))]})})));case 5:case"end":return t.stop()}}),t)})))()}}],b=function(e){var t=e.children;function r(e){e.preventDefault(),p.push({pathname:e.target.pathname})}return Object(u.jsxs)("div",{children:[Object(u.jsx)("a",{href:"/",onClick:r,children:"A"})," ","|"," ",Object(u.jsx)("a",{href:"/b",onClick:r,children:"B"}),Object(u.jsx)("hr",{}),t]})},f=(new i.a([{path:"",action:function(e){return Object(a.a)(c.a.mark((function t(){var r,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.next,t.next=3,r(!0);case 3:return n=t.sent,t.abrupt("return",n&&Object(u.jsx)(b,{children:n}));case 5:case"end":return t.stop()}}),t)})))()},children:[{path:"/",action:function(){return Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"A"})]}));case 1:case"end":return e.stop()}}),e)})))()}},{path:"/b",action:function(e){return Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("A"!==e.mode){t.next=3;break}return t.abrupt("return",{redirect:""});case 3:return t.abrupt("return",Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:" B "})]}));case 4:case"end":return t.stop()}}),t)})))()}}]}]),new i.a(h,{context:{mode:"B"}})),l=document.getElementById("root");function d(e){return x.apply(this,arguments)}function x(){return(x=Object(a.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.resolve({pathname:t.pathname});case 3:if(!(r=e.sent).redirect){e.next=6;break}return e.abrupt("return",p.push({pathname:r.redirect}));case 6:return e.abrupt("return",Object(s.render)(r,l));case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}p.listen((function(e){return d(e.location)})),d(p.location)}},[[8,1,2]]]);
//# sourceMappingURL=main.449879ca.chunk.js.map