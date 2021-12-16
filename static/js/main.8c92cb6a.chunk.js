(this["webpackJsonpclass-32-solution-todo"]=this["webpackJsonpclass-32-solution-todo"]||[]).push([[0],{484:function(e,t,n){},492:function(e,t){},494:function(e,t){},508:function(e,t){},510:function(e,t){},538:function(e,t){},540:function(e,t){},541:function(e,t){},546:function(e,t){},548:function(e,t){},554:function(e,t){},556:function(e,t){},575:function(e,t){},587:function(e,t){},590:function(e,t){},732:function(e,t,n){},814:function(e,t,n){"use strict";n.r(t);var a=n(156),r=n(157),c=n(166),o=n(164),s=n(0),i=n.n(s),l=n(21),u=n.n(l),d=n(402),j=n(19),b=n(35),p=n.n(b),f=n(57),m=n(17),O=n(65),h=function(e){var t=Object(s.useState)({}),n=Object(m.a)(t,2),a=n[0],r=n[1];return{handleChange:function(e){e.persist(),r((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(O.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t&&t.preventDefault(),e(a)},values:a}},x=(n(484),n(828)),g=n(3),y=i.a.createContext(),v={display:!0,numberOfItems:2,defaultSortField:"id"},C=function(e,t){switch(t.type){case"display":return Object(j.a)(Object(j.a)({},e),{},{display:t.payload});case"numberOfItems":return Object(j.a)(Object(j.a)({},e),{},{numberOfItems:t.payload});case"defaultSortField":return Object(j.a)(Object(j.a)({},e),{},{defaultSortField:t.payload});default:return e}},I=function(e){var t=Object(s.useReducer)(C,{}),n=Object(m.a)(t,2),a=n[0],r=n[1];return Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("settings"))||v,t=e.display,n=e.numberOfItems,a=e.defaultSortField;r({type:"numberOfItems",payload:n}),r({type:"display",payload:t}),r({type:"defaultSortField",payload:a})}),[]),Object(s.useEffect)((function(){localStorage.setItem("settings",JSON.stringify(a))}),[a]),Object(g.jsx)(y.Provider,{value:{state:a,dispatch:r},children:e.children})},w=n(823),S=n(68),F=n(115),k=n.n(F),T=n(386),N=n.n(T),D=n(232),G=n.n(D),L=G.a.create({baseURL:"https://todo-jallad.herokuapp.com"}),E=G.a.create({baseURL:"https://todo-jallad.herokuapp.com",headers:{Authorization:"bearer ".concat(k.a.load("auth"))}}),U=n(387),A=Object(s.createContext)(),R=function(e){var t=i.a.useState({loggedIn:!1,can:function(e,t){var n;return null===e||void 0===e||null===(n=e.capabilities)||void 0===n?void 0:n.includes(t)},login:function(e,t){return c.apply(this,arguments)},logout:function(){l(!1,null,{})},sigIn:function(e,t,n,a){return s.apply(this,arguments)},user:{capabilities:[]}}),n=Object(m.a)(t,2),a=n[0],r=n[1];function c(){return(c=Object(f.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.post("/sign-in",{},{headers:{Authorization:"Basic ".concat(U.a.encode(t+":"+n))}});case 3:o(e.sent.data.token),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function o(e){try{l(!0,e,N.a.verify(e,"secret"))}catch(t){l(!1,null,{}),console.log("Token Validation Error",t)}}function s(){return(s=Object(f.a)(p.a.mark((function e(t,n,a,r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.post("/sign-up",{username:t,password:n,email:a,role:r});case 3:o(e.sent.data.token),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e,t,n){k.a.save("auth",t),r(Object(j.a)(Object(j.a)({},a),{},{token:t,loggedIn:e,user:n}))}return i.a.useEffect((function(){var e=new URLSearchParams(window.location.search),t=k.a.load("auth");o(e.get("token")||t||null)}),[]),Object(g.jsx)(A.Provider,{value:a,children:e.children})},z=(n(308),n(34)),H=function(e){var t=i.a.useContext(A),n=t.loggedIn,a=!e.capability||t.can(t.user,e.capability),r=n&&a;return Object(g.jsx)(z.d,{condition:r,children:e.children})},P=n(163);var J=function(e){var t=e.list,n=e.toggleComplete,a=e.setIncomplete,r=e.incomplete,c=e.deleteItem,o=Object(s.useContext)(y),i=Object(s.useContext)(A),l=Object(s.useState)(o.state.numberOfItems),u=Object(m.a)(l,2),d=u[0],j=u[1],b=function(e){return Object(g.jsxs)(w.b,{interactive:!0,elevation:S.a.TWO,style:{width:"100%",maxHeight:"80%",minHeight:"40%",margin:"0.5rem"},"aria-label":"".concat(e.text),children:[Object(g.jsxs)(z.b,{condition:i.can(i.user,"update"),children:[Object(g.jsx)(z.c,{children:Object(g.jsx)(P.a,{onClick:Object(f.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.put("/todo/"+e.id,{complete:!e.complete});case 2:n(e.id);case 3:case"end":return t.stop()}}),t)}))),className:"".concat(e.complete?"Complete":"notComplete"," isComplete"),children:Object(g.jsx)("span",{children:e.complete?"Complete":"pending"})})}),Object(g.jsx)(z.a,{children:Object(g.jsx)(P.a,{disabled:!0,className:"".concat(e.complete?"Complete":"notComplete"," isComplete"),children:Object(g.jsx)("span",{children:e.complete?"Complete":"pending"})})})]}),Object(g.jsx)("p",{className:"assignee",children:e.assignee}),Object(g.jsx)("p",{className:"task",children:e.text}),Object(g.jsx)("p",{className:"Difficulty",children:Object(g.jsxs)("small",{children:["Difficulty: ",e.difficulty]})}),Object(g.jsx)(H,{capability:"delete",children:Object(g.jsx)(P.a,{color:"red",appearance:"primary",onClick:Object(f.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(e.id),t.next=3,E.delete("/todo/"+e.id);case 3:case"end":return t.stop()}}),t)}))),children:"Delete"})})]},e.id)};Object(s.useEffect)((function(){var e=t.filter((function(e){return!e.complete}));a(e.length),document.title="To Do List: ".concat(r)}),[t]),Object(s.useEffect)((function(){j(o.state.numberOfItems)}),[o.state.numberOfItems]);var O=function(e,t){return t.state.display?e.sort((function(e,n){return e[t.state.defaultSortField]-n[t.state.defaultSortField]})).slice(d-t.state.numberOfItems,d).map((function(e){return b(e)})):e.filter((function(e){return!e.complete})).sort((function(e,n){return e[t.state.defaultSortField]-n[t.state.defaultSortField]})).slice(d-t.state.numberOfItems,d).map((function(e){return b(e)}))}(t,o);return Object(s.useEffect)((function(){0===O.length&&d>o.state.numberOfItems&&j(d-o.state.numberOfItems)}),[O.length]),Object(g.jsxs)("div",{children:[O,Object(g.jsx)("div",{children:function(e,t,n){var a=[],r=[];r=n?e.filter((function(e){return!1===e.complete})):e;for(var c=function(e){a.push(Object(g.jsx)(P.a,{color:"green",appearance:"".concat(d/t===e+1?"primary":"subtle"),onClick:function(){j((e+1)*t)},children:e+1},e))},o=0;o<r.length/t;o++)c(o);return a}(t.sort((function(e,t){return e[o.state.defaultSortField]-t[o.state.defaultSortField]})),o.state.numberOfItems,!o.state.display)})]})},q=n(112);var B=function(e){var t=e.handleChange,n=e.handleSubmit,a=e.range,r=e.setRange;return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:n,"aria-label":"todo-form",children:[Object(g.jsx)("h2",{children:"Add To Do Item"}),Object(g.jsxs)(w.c,{helperText:"To Do Item details...",FormGroup:"To Do Item",FormGroupFor:"ToDoItem",FormGroupInfo:"(required)",children:[Object(g.jsx)("span",{children:"To Do Item"}),Object(g.jsx)(w.d,{id:"ToDoItem",onChange:t,name:"text",type:"text",placeholder:"Item Details","aria-label":"text"})]}),Object(g.jsx)(w.c,{helperText:"Assigned To",FormGroup:"Assigned To",FormGroupFor:"Assigned To",FormGroupInfo:"(required)",children:Object(g.jsx)(w.d,{onChange:t,name:"assignee",type:"text",placeholder:"Assignee Name","aria-label":"assignee"})}),Object(g.jsx)(w.c,{helperText:"Difficulty",FormGroup:"Difficulty",FormGroupFor:"Difficulty",FormGroupInfo:"(required)",children:Object(g.jsx)(w.d,{onChange:function(e){r(e.target.value),t(e)},value:a,type:"range",min:1,max:5,name:"difficulty",placeholder:"Difficulty","aria-label":"range"})}),Object(g.jsx)(w.a,{type:"submit",children:"Add Item"})]})})},M=function(){var e=Object(s.useState)([]),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)([]),c=Object(m.a)(r,2),o=c[0],l=c[1],u=Object(s.useState)(3),b=Object(m.a)(u,2),O=b[0],y=b[1],v=h((function(e){return S.apply(this,arguments)})),C=v.handleChange,I=v.handleSubmit;i.a.useContext(A);function S(){return(S=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.id=Object(x.a)()+(new Date).getTime(),t.complete=!1,t.difficulty=t.difficulty?t.difficulty:O,e.next=6,E.post("/todo",t,{});case 6:a([].concat(Object(d.a)(n),[t])),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var F={handleChange:C,handleSubmit:I,range:O,setRange:y};return Object(s.useEffect)((function(){Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get("/todo");case 3:t=e.sent,a(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(w.e,{className:"bp3-navbar bp3-dark",style:{height:"4rem",margin:"0 auto",width:"80%",marginTop:"1rem"},align:q.a.LEFT,children:Object(g.jsxs)(w.e.Heading,{className:"bp3-navbar-group bp3-align-left",style:{fontSize:"1.5rem"},children:["To Do List: ",o," items pending"]})}),Object(g.jsxs)("div",{className:"todo-container",children:[Object(g.jsx)("div",{className:"todo-form",children:Object(g.jsx)(H,{capability:"create",children:Object(g.jsx)(B,Object(j.a)({},F))})}),Object(g.jsx)("div",{className:"todo-list",children:Object(g.jsx)(J,{list:n,toggleComplete:function(e){var t=n.map((function(t){return t.id==e&&(t.complete=!t.complete),t}));a(t)},setIncomplete:l,incomplete:o,deleteItem:function(e){var t=n.filter((function(t){return t.id!==e}));a(t)}})})]})]})},V=(n(732),n(120)),W=n(824),K=function(e){var t=e.createNewUser,n=i.a.useContext(A),a=i.a.useState({username:"",password:""}),r=Object(m.a)(a,2),c=r[0],o=r[1],s=function(e,t){o(Object(j.a)(Object(j.a)({},c),{},Object(O.a)({},t,e)))};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(z.d,{condition:n.loggedIn,children:Object(g.jsx)(P.a,{onClick:n.logout,children:"Log Out"})}),Object(g.jsx)(z.d,{condition:!n.loggedIn,children:Object(g.jsxs)(W.a,{layout:"inline",onSubmit:function(e){n.login(c.username,c.password)},children:[Object(g.jsxs)(W.a.Group,{controlId:"username",children:[Object(g.jsx)(W.a.ControlLabel,{children:"Username"}),Object(g.jsx)(W.a.Control,{style:{width:160},placeholder:"UserName",name:"username",onChange:function(e){return s(e,"username")}})]}),Object(g.jsxs)(W.a.Group,{controlId:"password",children:[Object(g.jsx)(W.a.ControlLabel,{children:"Password"}),Object(g.jsx)(W.a.Control,{name:"password",autoComplete:"off",style:{width:160},placeholder:"password",type:n.loggedIn?"text":"password",onChange:function(e){return s(e,"password")}})]}),Object(g.jsx)(P.a,{type:"submit",children:"Login"}),Object(g.jsx)(P.a,{onClick:function(){return t(!1)},children:"Sign in"})]})})]})},Q=n(829),X=n(825),Y=n(832),Z={display:"flex",justifyContent:"center",alignItems:"center"},$=[{label:"admin",value:"admin",role:"admin"},{label:"writer",value:"writer",role:"writer"},{label:"editor",value:"editor",role:"editor"},{label:"user",value:"user",role:"user"}],_=function(e){var t=e.createNewUser,n=i.a.useContext(A),a=i.a.useState({username:"",password:"",email:"",role:"user"}),r=Object(m.a)(a,2),c=r[0],o=r[1],s=function(e,t){o(Object(j.a)(Object(j.a)({},c),{},Object(O.a)({},t,e)))};return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(z.d,{condition:!n.loggedIn,children:Object(g.jsx)(Q.a,{style:Object(j.a)({},Z),children:Object(g.jsxs)(W.a,{onSubmit:function(e){n.sigIn(c.username,c.password,c.email,c.role)},children:[Object(g.jsxs)(W.a.Group,{controlId:"name",children:[Object(g.jsx)(W.a.ControlLabel,{children:"Username"}),Object(g.jsx)(W.a.Control,{name:"username",onChange:function(e){return s(e,"username")}})]}),Object(g.jsxs)(W.a.Group,{controlId:"email",children:[Object(g.jsx)(W.a.ControlLabel,{style:{color:"#000"},children:"email"}),Object(g.jsx)(W.a.Control,{name:"email",onChange:function(e){return s(e,"email")},type:"text"})]}),Object(g.jsxs)(W.a.Group,{controlId:"filter",children:[Object(g.jsxs)(W.a.ControlLabel,{style:{color:"#000"},children:["Role"," "]}),Object(g.jsx)(X.a,{placement:"leftStart",data:$,style:{width:224},name:"filter",onChange:function(e){return s(e,"role")},value:c.role})]}),Object(g.jsxs)(W.a.Group,{controlId:"password",children:[Object(g.jsx)(W.a.ControlLabel,{style:{color:"#000"},children:"Password"}),Object(g.jsx)(W.a.Control,{name:"password",onChange:function(e){return s(e,"password")},type:"password",autoComplete:"off"})]}),Object(g.jsx)(W.a.Group,{children:Object(g.jsxs)(Y.a,{children:[Object(g.jsx)(P.a,{appearance:"primary",type:"submit",children:"Submit"}),Object(g.jsx)(P.a,{appearance:"default",onClick:function(){return t(!0)},children:"Cancel"})]})})]})})})})};var ee=function(){var e=i.a.useState(!0),t=Object(m.a)(e,2),n=t[0],a=t[1];return Object(g.jsxs)(w.e,{className:"bp3-navbar",style:{height:"4rem",backgroundColor:"#227BFF"},align:q.a.LEFT,children:[Object(g.jsx)(w.e.Heading,{className:"bp3-navbar-group bp3-align-left",style:{fontSize:"1.5rem"},children:Object(g.jsx)(V.b,{style:{color:"#fff"},to:"/",children:"home"})}),Object(g.jsx)(w.e.Heading,{className:"bp3-navbar-group bp3-align-left",style:{fontSize:"1.5rem"},children:Object(g.jsx)(V.b,{style:{color:"#fff"},to:"/settings",children:"settings"})}),Object(g.jsx)(w.e.Heading,{className:"bp3-navbar-group bp3-align-right",style:{color:"#fff",alignItems:"baseline"},children:Object(g.jsxs)(z.b,{condition:n,children:[Object(g.jsx)(z.c,{children:Object(g.jsx)(K,{createNewUser:a})}),Object(g.jsx)(z.a,{children:Object(g.jsx)(_,{createNewUser:a})})]})})]})},te=n(10),ne=n(831),ae=n(830),re=n(826),ce=n(827),oe=[{label:"assigned",value:"assigned",role:"assigned"},{label:"id",value:"id",role:"id"},{label:"difficulty",value:"difficulty",role:"difficulty"}];var se=function(){var e=Object(s.useContext)(y),t=e.state,n=e.dispatch;return Object(g.jsx)("div",{children:Object(g.jsxs)(ne.a,{justify:"space-around",align:"middle",children:[Object(g.jsx)(ne.a.Item,{colspan:9,children:Object(g.jsxs)(W.a,{fluid:!0,style:{marginTop:"10px"},onSubmit:function(e){e.preventDefault()},children:[Object(g.jsxs)(W.a.Group,{controlId:"filter",children:[Object(g.jsx)(W.a.ControlLabel,{children:"Filter by: "}),Object(g.jsx)(X.a,{data:oe,style:{width:224},name:"filter",onChange:function(e){n({type:"defaultSortField",payload:e})},value:t.defaultSortField||v.defaultSortField})]}),Object(g.jsxs)(W.a.Group,{controlId:"display",children:[Object(g.jsx)(W.a.ControlLabel,{children:"display complete To Do: "}),Object(g.jsx)(ae.a,{onChange:function(e){n({type:"display",payload:e})},name:"display",checked:t.display,value:t.display||v.display})]}),Object(g.jsxs)(W.a.Group,{controlId:"slider",children:[Object(g.jsx)(W.a.ControlLabel,{children:"show Item: "}),Object(g.jsx)(re.a,{"data-testid":"slider",min:1,step:1,max:10,graduated:!0,progress:!0,renderMark:function(e){return e},value:t.numberOfItems||v.numberOfItems,onChange:function(e){n({type:"numberOfItems",payload:e})},name:"slider"})]})]})}),Object(g.jsx)(ne.a.Item,{colspan:6,children:Object(g.jsx)(Q.a,{header:"your settings",bordered:!0,children:Object(g.jsxs)(ce.a,{size:"sm",children:[Object(g.jsxs)(ce.a.Item,{index:3,children:["sort by: ",t.defaultSortField]},3),Object(g.jsxs)(ce.a.Item,{index:1,children:["display complete To Do: ",t.display?"\u2714\ufe0f":"\u274c"]},1),Object(g.jsxs)(ce.a.Item,{index:2,children:["number of Todo's in the same label: ",t.numberOfItems]},2)]})})})]})})},ie=(n(813),function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(g.jsx)(V.a,{children:Object(g.jsxs)(R,{children:[Object(g.jsx)(ee,{}),Object(g.jsxs)(te.c,{children:[Object(g.jsx)(te.a,{path:"/",element:Object(g.jsx)(H,{children:Object(g.jsx)(I,{children:Object(g.jsx)(M,{})})})}),Object(g.jsx)(te.a,{path:"/settings",element:Object(g.jsx)(H,{children:Object(g.jsx)(I,{children:Object(g.jsx)(se,{})})})})]})]})})}}]),n}(i.a.Component)),le=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(g.jsx)(ie,{})}}]),n}(i.a.Component),ue=document.getElementById("root");u.a.render(Object(g.jsx)(le,{}),ue)}},[[814,1,2]]]);
//# sourceMappingURL=main.8c92cb6a.chunk.js.map