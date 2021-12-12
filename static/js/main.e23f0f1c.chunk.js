(this["webpackJsonpclass-32-solution-todo"]=this["webpackJsonpclass-32-solution-todo"]||[]).push([[0],{112:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var c=n(20),o=n(21),r=n(25),i=n(24),a=n(0),s=n.n(a),l=n(8),u=n.n(l),j=n(53),d=n(12),m=n(23),b=n(32),p=function(e){var t=Object(a.useState)({}),n=Object(d.a)(t,2),c=n[0],o=n[1];return{handleChange:function(e){e.persist(),console.log(e.target.name),o((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(m.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t&&t.preventDefault(),e(c)},values:c}},O=(n(112),n(144)),f=n(1),h=s.a.createContext(),x={display:!0,numberOfItems:2,defaultSortField:"id"},g=function(e){return Object(f.jsx)(h.Provider,{value:x,children:e.children})},v=n(143),y=n(10);var T=function(e){var t=e.list,n=e.toggleComplete,c=e.setIncomplete,o=e.incomplete,r=Object(a.useContext)(h),i=Object(a.useState)(r.numberOfItems),s=Object(d.a)(i,2),l=s[0],u=s[1];return Object(a.useEffect)((function(){var e=t.filter((function(e){return!e.complete})).length;c(e),document.title="To Do List: ".concat(o)}),[t]),console.log(t),Object(f.jsxs)("div",{children:[t.slice(l-r.numberOfItems,l).map((function(e){return Object(f.jsxs)(v.b,{interactive:!0,elevation:y.a.TWO,children:[Object(f.jsx)("div",{onClick:function(){return n(e.id)},className:"".concat(e.complete?"Complete":"notComplete"," isComplete"),children:Object(f.jsx)("span",{children:e.complete?"Complete":"pending"})}),Object(f.jsx)("p",{className:"assignee",children:e.assignee}),Object(f.jsx)("p",{className:"task",children:e.text}),Object(f.jsx)("p",{className:"Difficulty",children:Object(f.jsxs)("small",{children:["Difficulty: ",e.difficulty]})})]},e.id)})),Object(f.jsx)("div",{children:function(e,t){for(var n=[],c=function(e){n.push(Object(f.jsx)(v.a,{onClick:function(){u((e+1)*t)},children:e+1}))},o=0;o<e.length/t;o++)c(o);return n}(t,r.numberOfItems)})]})},C=n(17),F=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),r=Object(d.a)(o,2),i=r[0],s=r[1],l=p((function(e){console.log(e),e.id=Object(O.a)()+(new Date).getTime(),e.complete=!1,c([].concat(Object(j.a)(n),[e]))})),u=l.handleChange,m=l.handleSubmit;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(v.e,{className:"bp3-navbar bp3-dark",style:{height:"4rem",margin:"0 auto",width:"80%",marginTop:"1rem"},align:C.a.LEFT,children:Object(f.jsxs)(v.e.Heading,{className:"bp3-navbar-group bp3-align-left",style:{fontSize:"1.5rem"},children:["To Do List: ",i," items pending"]})}),Object(f.jsxs)("div",{className:"todo-container",children:[Object(f.jsx)("div",{className:"todo-form",children:Object(f.jsxs)("form",{onSubmit:m,children:[Object(f.jsx)("h2",{children:"Add To Do Item"}),Object(f.jsxs)(v.c,{helperText:"To Do Item details...",FormGroup:"To Do Item",FormGroupFor:"ToDoItem",FormGroupInfo:"(required)",children:[Object(f.jsx)("span",{children:"To Do Item"}),Object(f.jsx)(v.d,{id:"ToDoItem",onChange:u,name:"text",type:"text",placeholder:"Item Details"})]}),Object(f.jsx)(v.c,{helperText:"Assigned To",FormGroup:"Assigned To",FormGroupFor:"Assigned To",FormGroupInfo:"(required)",children:Object(f.jsx)(v.d,{onChange:u,name:"assignee",type:"text",placeholder:"Assignee Name"})}),Object(f.jsx)(v.c,{helperText:"Difficulty",FormGroup:"Difficulty",FormGroupFor:"Difficulty",FormGroupInfo:"(required)",children:Object(f.jsx)(v.d,{onChange:u,defaultValue:3,type:"range",min:1,max:5,name:"difficulty"})}),Object(f.jsx)(v.a,{type:"submit",children:"Add Item"})]})}),Object(f.jsx)("div",{className:"todo-list",children:Object(f.jsx)(T,{list:n,toggleComplete:function(e){var t=n.map((function(t){return t.id==e&&(t.complete=!t.complete),t}));c(t)},setIncomplete:s,incomplete:i})})]})]})};n(138);var I=function(){return Object(f.jsx)(v.e,{className:"bp3-navbar",style:{height:"4rem",backgroundColor:"#227BFF"},align:C.a.LEFT,children:Object(f.jsx)(v.e.Heading,{className:"bp3-navbar-group bp3-align-left",style:{fontSize:"1.5rem"},children:"home"})})},D=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(g,{children:[Object(f.jsx)(I,{}),Object(f.jsx)(F,{})]})}}]),n}(s.a.Component),N=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)(D,{})}}]),n}(s.a.Component),S=document.getElementById("root");u.a.render(Object(f.jsx)(N,{}),S)}},[[139,1,2]]]);
//# sourceMappingURL=main.e23f0f1c.chunk.js.map