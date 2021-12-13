(this["webpackJsonpclass-32-solution-todo"]=this["webpackJsonpclass-32-solution-todo"]||[]).push([[0],{349:function(e,t,n){},373:function(e,t,n){},542:function(e,t,n){"use strict";n.r(t);var a=n(115),c=n(116),r=n(126),i=n(124),s=n(0),l=n.n(s),o=n(15),d=n.n(o),u=n(268),j=n(23),b=n(117),f=n(41),m=function(e){var t=Object(s.useState)({}),n=Object(j.a)(t,2),a=n[0],c=n[1];return{handleChange:function(e){e.persist(),c((function(t){return Object(f.a)(Object(f.a)({},t),{},Object(b.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t&&t.preventDefault(),e(a)},values:a}},p=(n(349),n(557)),O=n(4),h=l.a.createContext(),x={display:!0,numberOfItems:2,defaultSortField:"id"},y=function(e,t){switch(t.type){case"display":return Object(f.a)(Object(f.a)({},e),{},{display:t.payload});case"numberOfItems":return Object(f.a)(Object(f.a)({},e),{},{numberOfItems:t.payload});case"defaultSortField":return Object(f.a)(Object(f.a)({},e),{},{defaultSortField:t.payload});default:return e}},g=function(e){var t=Object(s.useReducer)(y,{}),n=Object(j.a)(t,2),a=n[0],c=n[1];return Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("settings"))||x,t=e.display,n=e.numberOfItems,a=e.defaultSortField;c({type:"numberOfItems",payload:n}),c({type:"display",payload:t}),c({type:"defaultSortField",payload:a})}),[]),Object(s.useEffect)((function(){localStorage.setItem("settings",JSON.stringify(a))}),[a]),Object(O.jsx)(h.Provider,{value:{state:a,dispatch:c},children:e.children})},v=n(552),I=n(52);var F=function(e){var t=e.list,n=e.toggleComplete,a=e.setIncomplete,c=e.incomplete,r=Object(s.useContext)(h),i=Object(s.useState)(r.state.numberOfItems),l=Object(j.a)(i,2),o=l[0],d=l[1],u=function(e){return Object(O.jsxs)(v.b,{interactive:!0,elevation:I.a.TWO,style:{width:"100%",maxHeight:"80%",minHeight:"40%",margin:"0.5rem"},children:[Object(O.jsx)("div",{onClick:function(){return n(e.id)},className:"".concat(e.complete?"Complete":"notComplete"," isComplete"),children:Object(O.jsx)("span",{children:e.complete?"Complete":"pending"})}),Object(O.jsx)("p",{className:"assignee",children:e.assignee}),Object(O.jsx)("p",{className:"task",children:e.text}),Object(O.jsx)("p",{className:"Difficulty",children:Object(O.jsxs)("small",{children:["Difficulty: ",e.difficulty]})})]},e.id)};return Object(s.useEffect)((function(){var e=t.filter((function(e){return!e.complete}));a(e.length),document.title="To Do List: ".concat(c)}),[t]),Object(s.useEffect)((function(){d(r.state.numberOfItems)}),[r.state.numberOfItems]),Object(O.jsxs)("div",{children:[r.state.display?t.sort((function(e,t){return e[r.state.defaultSortField]-t[r.state.defaultSortField]})).slice(o-r.state.numberOfItems,o).map((function(e){return u(e)})):t.filter((function(e){return!e.complete})).sort((function(e,t){return e[r.state.defaultSortField]-t[r.state.defaultSortField]})).slice(o-r.state.numberOfItems,o).map((function(e){return u(e)})),Object(O.jsx)("div",{children:function(e,t,n){var a=[],c=[];c=n?e.filter((function(e){return!1===e.complete})):e;for(var r=function(e){a.push(Object(O.jsx)(v.a,{onClick:function(){d((e+1)*t)},children:e+1},e))},i=0;i<c.length/t;i++)r(i);return a}(t.filter((function(e){return!e.complete})).sort((function(e,t){return e[r.state.defaultSortField]-t[r.state.defaultSortField]})),r.state.numberOfItems,r.state.display)})]})},S=n(83),C=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)([]),r=Object(j.a)(c,2),i=r[0],l=r[1],o=Object(s.useState)(3),d=Object(j.a)(o,2),b=d[0],f=d[1],h=m((function(e){e.id=Object(p.a)()+(new Date).getTime(),e.complete=!1,e.difficulty=e.difficulty?e.difficulty:b,a([].concat(Object(u.a)(n),[e]))})),x=h.handleChange,y=h.handleSubmit;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v.e,{className:"bp3-navbar bp3-dark",style:{height:"4rem",margin:"0 auto",width:"80%",marginTop:"1rem"},align:S.a.LEFT,children:Object(O.jsxs)(v.e.Heading,{className:"bp3-navbar-group bp3-align-left",style:{fontSize:"1.5rem"},children:["To Do List: ",i," items pending"]})}),Object(O.jsxs)("div",{className:"todo-container",children:[Object(O.jsx)("div",{className:"todo-form",children:Object(O.jsxs)("form",{onSubmit:y,children:[Object(O.jsx)("h2",{children:"Add To Do Item"}),Object(O.jsxs)(v.c,{helperText:"To Do Item details...",FormGroup:"To Do Item",FormGroupFor:"ToDoItem",FormGroupInfo:"(required)",children:[Object(O.jsx)("span",{children:"To Do Item"}),Object(O.jsx)(v.d,{id:"ToDoItem",onChange:x,name:"text",type:"text",placeholder:"Item Details"})]}),Object(O.jsx)(v.c,{helperText:"Assigned To",FormGroup:"Assigned To",FormGroupFor:"Assigned To",FormGroupInfo:"(required)",children:Object(O.jsx)(v.d,{onChange:x,name:"assignee",type:"text",placeholder:"Assignee Name"})}),Object(O.jsx)(v.c,{helperText:"Difficulty",FormGroup:"Difficulty",FormGroupFor:"Difficulty",FormGroupInfo:"(required)",children:Object(O.jsx)(v.d,{onChange:function(e){f(e.target.value),x(e)},value:b,type:"range",min:1,max:5,name:"difficulty",placeholder:"Difficulty"})}),Object(O.jsx)(v.a,{type:"submit",children:"Add Item"})]})}),Object(O.jsx)("div",{className:"todo-list",children:Object(O.jsx)(F,{list:n,toggleComplete:function(e){var t=n.map((function(t){return t.id==e&&(t.complete=!t.complete),t}));a(t)},setIncomplete:l,incomplete:i})})]})]})},T=(n(373),n(90));var D=function(){return Object(O.jsxs)(v.e,{className:"bp3-navbar",style:{height:"4rem",backgroundColor:"#227BFF"},align:S.a.LEFT,children:[Object(O.jsx)(v.e.Heading,{className:"bp3-navbar-group bp3-align-left",style:{fontSize:"1.5rem"},children:Object(O.jsx)(T.b,{style:{color:"#fff"},to:"/",children:"home"})}),Object(O.jsx)(v.e.Heading,{className:"bp3-navbar-group bp3-align-left",style:{fontSize:"1.5rem"},children:Object(O.jsx)(T.b,{style:{color:"#fff"},to:"/settings",children:"settings"})})]})},N=n(8),G=n(560),k=n(553),w=n(554),E=n(558),L=n(555),A=n(559),H=n(556),z=(n(374),[{label:"assigned",value:"assigned",role:"assigned"},{label:"id",value:"id",role:"id"},{label:"difficulty",value:"difficulty",role:"difficulty"}]);var J=function(){var e=Object(s.useContext)(h),t=e.state,n=e.dispatch;return Object(O.jsx)("div",{children:Object(O.jsxs)(G.a,{justify:"space-around",align:"middle",children:[Object(O.jsx)(G.a.Item,{colspan:9,children:Object(O.jsxs)(k.a,{fluid:!0,style:{marginTop:"10px"},onSubmit:function(e){e.preventDefault()},children:[Object(O.jsxs)(k.a.Group,{controlId:"filter",children:[Object(O.jsx)(k.a.ControlLabel,{children:"Filter by: "}),Object(O.jsx)(w.a,{data:z,style:{width:224},name:"filter",onChange:function(e){n({type:"defaultSortField",payload:e})},value:t.defaultSortField})]}),Object(O.jsxs)(k.a.Group,{controlId:"display",children:[Object(O.jsx)(k.a.ControlLabel,{children:"display complete To Do: "}),Object(O.jsx)(E.a,{onChange:function(e){n({type:"display",payload:e})},name:"display",checked:t.display,value:t.display})]}),Object(O.jsxs)(k.a.Group,{controlId:"slider",children:[Object(O.jsx)(k.a.ControlLabel,{children:"show Item: "}),Object(O.jsx)(L.a,{min:1,step:1,max:10,graduated:!0,progress:!0,renderMark:function(e){return e},value:t.numberOfItems,onChange:function(e){n({type:"numberOfItems",payload:e})},name:"slider"})]})]})}),Object(O.jsx)(G.a.Item,{colspan:6,children:Object(O.jsx)(A.a,{header:"your settings",bordered:!0,children:Object(O.jsxs)(H.a,{size:"sm",children:[Object(O.jsxs)(H.a.Item,{index:3,children:["sort by: ",t.defaultSortField]},3),Object(O.jsxs)(H.a.Item,{index:1,children:["display complete To Do: ",t.display?"\u2714\ufe0f":"\u274c"]},1),Object(O.jsxs)(H.a.Item,{index:2,children:["number of Todo's in the same label: ",t.numberOfItems]},2)]})})})]})})},q=(n(541),function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(T.a,{children:[Object(O.jsx)(D,{}),Object(O.jsxs)(N.c,{children:[Object(O.jsx)(N.a,{path:"/",element:Object(O.jsx)(g,{children:Object(O.jsx)(C,{})})}),Object(O.jsx)(N.a,{path:"/settings",element:Object(O.jsx)(g,{children:Object(O.jsx)(J,{})})})]})]})}}]),n}(l.a.Component)),B=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(O.jsx)(q,{})}}]),n}(l.a.Component),M=document.getElementById("root");d.a.render(Object(O.jsx)(B,{}),M)}},[[542,1,2]]]);
//# sourceMappingURL=main.81f8d5fe.chunk.js.map