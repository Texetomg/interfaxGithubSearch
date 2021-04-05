(this.webpackJsonpinterfax=this.webpackJsonpinterfax||[]).push([[0],{325:function(e,t,a){},326:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),i=a.n(r),o=a(102),s=a(59),l=a(196),j=a(22),u=a(45),d=a(180),b=a.n(d),h=a(376),O=a(34),x="SET_CURRENT_USER",m=function(e){return{type:x,payload:e}},g=function(e,t){return function(a){a(m(e)),localStorage.setItem("auth",JSON.stringify(e)),O.b.success("Success!"),t.push("/")}},p=a(140);p.a.initializeApp({apiKey:"AIzaSyA7L0aDWHAUoAQD86LKFxu6aE5_QUWOcms",authDomain:"interfax-git-search.firebaseapp.com",projectId:"interfax-git-search",storageBucket:"interfax-git-search.appspot.com",messagingSenderId:"603971026529",appId:"1:603971026529:web:140a81159330f23edbf420",measurementId:"G-SL3MFZ4STW"});var f=p.a,v=a(181),w=a.n(v),S=a(358),y=a(357),P=a(135),I=a(356),N=a(117),k=a(4),C=function(e){var t={};return e.login||(t.login="Required"),e.password||(t.password="Required"),t},R=function(e){var t=e.onSubmit;return Object(k.jsx)(N.b,{onSubmit:t,validate:C,render:function(e){var t=e.handleSubmit;return Object(k.jsx)("form",{onSubmit:t,children:Object(k.jsx)(I.a,{component:"main",maxWidth:"xs",children:Object(k.jsxs)(y.a,{container:!0,spacing:2,children:[Object(k.jsx)(y.a,{item:!0,xs:12,children:Object(k.jsx)(N.a,{required:!0,fullWidth:!0,name:"login",component:P.TextField,type:"text",label:"Login"})}),Object(k.jsx)(y.a,{item:!0,xs:12,children:Object(k.jsx)(N.a,{required:!0,fullWidth:!0,name:"password",component:P.TextField,type:"password",label:"Password"})}),Object(k.jsx)(y.a,{item:!0,xs:12,children:Object(k.jsx)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:"Sign In"})})]})})})}})},D=function(){var e=Object(u.b)(),t=Object(j.g)(),a={signInFlow:"popup",signInOptions:[f.auth.GoogleAuthProvider.PROVIDER_ID,f.auth.GithubAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(a){var n=a.displayName,c=a.photoURL;e(g({user:{login:n,avatar:c}},t))},signInFailure:function(){O.b.error("This is an error!")}}};return Object(k.jsxs)(h.a,{display:"flex",justifyContent:"center",flexDirection:"column",height:"90vh",children:[Object(k.jsx)(R,{onSubmit:function(a){var n=a.login;!function(e,t){return"admin"===e&&"123"===t}(n,a.password)?O.b.error("This is an error!"):e(g({user:{login:n,avatar:null}},t))}}),Object(k.jsx)(w.a,{uiConfig:a,firebaseAuth:f.auth()})]})},E=a(29),F=a(361),T=a(378),A=a(362),W=a(360),_=Object(W.a)({avatar:{width:60,height:60},login:{fontSize:20}}),L=function(e){var t=e.data,a=void 0===t?{}:t,n=e.loading,c=void 0===n||n,r=(e.userError,_());return Object(k.jsx)(F.a,{avatar:c?Object(k.jsx)(A.a,{animation:"wave",variant:"circle",width:60,height:60}):Object(k.jsx)(T.a,{className:r.avatar,src:a.avatar_url}),title:c?Object(k.jsx)(A.a,{animation:"wave",width:50,height:20}):Object(k.jsx)("span",{className:r.login,children:a.login})})},z=a(138),U=a.n(z),q=a(187),G=a(116),B=a.n(G),H=a(188),J=a.n(H),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(null),a=Object(E.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(null),o=Object(E.a)(i,2),l=o[0],j=o[1],u=Object(n.useState)(!1),d=Object(E.a)(u,2),b=d[0],h=d[1],x=Object(n.useMemo)((function(){return B.a.CancelToken.source()}),[]),m=Object(n.useCallback)(function(){var t=Object(q.a)(U.a.mark((function t(a){var n,c,i,o,l=arguments;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=l.length>1&&void 0!==l[1]?l[1]:{},a){t.next=3;break}return t.abrupt("return",null);case 3:return t.prev=3,h(!0),c=function(t){return B.a.get(t,Object(s.a)(Object(s.a)({cancelToken:x.token},e),n)).catch((function(e){B.a.isCancel(e)?(O.b.error("request cancelled: ".concat(e.message)),h(!1)):h(!1),j(e.response.status)}))},i=J.a.isArray(a)?Promise.all(a.map((function(e){return c(e)}))):c(a),t.next=9,i;case 9:if(o=t.sent){t.next=12;break}return t.abrupt("return",null);case 12:return r(o),h(!1),t.abrupt("return",o);case 17:t.prev=17,t.t0=t.catch(3),r(null),j(t.t0),h(!1);case 22:case"end":return t.stop()}}),t,null,[[3,17]])})));return function(e){return t.apply(this,arguments)}}(),[r,h]);return Object(n.useEffect)((function(){return function(){return x.cancel("Unmounted")}}),[]),[{data:c,loading:b,error:l},m]},Y=a(373),K=a(374),Q=a(69),V=a(363),Z=a(364),X=a(118),$=a(133),ee=a(189),te=a.n(ee),ae=Object(W.a)((function(e){return{title:Object(Q.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),avatar:{margin:"0 12px"}}})),ne=function(e){var t=e.user,a=e.handleLogout,n=ae();return Object(k.jsx)(V.a,{position:"static",children:Object(k.jsxs)(Z.a,{children:[Object(k.jsx)(X.a,{variant:"h6",className:n.title,children:"Github search"}),Object(k.jsx)("span",{children:t.login}),Object(k.jsx)(T.a,{className:n.avatar,src:t.avatar}),Object(k.jsx)($.a,{"aria-label":"search",color:"inherit",onClick:a,children:Object(k.jsx)(te.a,{})})]})})},ce=a(110),re=a(371),ie=a(365),oe=a(366),se=a(367),le=a(368),je=a(369),ue=a(375),de=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(A.a,{height:80}),Object(k.jsx)(A.a,{height:80}),Object(k.jsx)(A.a,{height:80}),Object(k.jsx)(A.a,{height:80}),Object(k.jsx)(A.a,{height:80}),Object(k.jsx)(A.a,{height:80}),Object(k.jsx)(A.a,{height:80})]})},be=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(A.a,{height:40}),Object(k.jsx)(A.a,{height:40}),Object(k.jsx)(A.a,{height:40})]})},he=a(370),Oe=a(192),xe=a.n(Oe),me=a(191),ge=a.n(me),pe=a(114),fe=a.n(pe),ve=function(e){var t=e.data,a=void 0===t?[]:t,n=e.columns,r=void 0===n?[]:n,i=e.loading,o=void 0!==i&&i,s=c.a.useState(0),l=Object(E.a)(s,2),j=l[0],u=l[1],d=c.a.useState(5),b=Object(E.a)(d,2),h=b[0],O=b[1];return o?Object(k.jsx)(be,{}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(ie.a,{size:"small","aria-label":"purchases",children:[Object(k.jsx)(oe.a,{children:Object(k.jsx)(se.a,{children:r.map((function(e){var t=e.id,a=e.label,n=e.width;return Object(k.jsx)(le.a,{width:n,children:a},t)}))})}),Object(k.jsx)(je.a,{children:a.slice(j*h,j*h+h).map((function(e,t){return Object(k.jsx)(se.a,{children:r.map((function(a,n){var c=a.id,r=a.format,i=fe()(e,c);return Object(k.jsx)(le.a,{children:r&&i?r(i):i||"\u2014"},"commit-row-col-".concat(t,"-").concat(n))}))},"commit-row-".concat(t))}))})]}),Object(k.jsx)(ue.a,{rowsPerPageOptions:[5,10],component:"div",count:a.length,rowsPerPage:h,page:j,onChangePage:function(e,t){u(t)},onChangeRowsPerPage:function(e){O(+e.target.value),u(0)}})]})},we=a(190),Se=a.n(we),ye=[{id:"collapse",label:"",width:"5%"},{id:"name",label:"Name",width:"15%"},{id:"language",label:"Lang",width:"5%"},{id:"description",label:"Description",width:"70%"},{id:"stargazers_count",label:"Stars",width:"5%"}],Pe=[{id:"commit.author.name",label:"Author",width:"30%"},{id:"sha",label:"Hash",width:"50%"},{id:"commit.author.date",label:"Date",format:function(e){return Se()(e).format("YYYY-MM-DD")},width:"20%"}],Ie=Object(W.a)({root:{width:"100%"},container:{height:500},mainRow:{"& > *":{borderBottom:"unset"}},title:{fontSize:"0.875rem",fontWeight:"500",lineHeight:"1.5rem"}}),Ne=function(e){var t=e.columns,a=e.data,c=e.i,r=Object(n.useState)(!1),i=Object(E.a)(r,2),o=i[0],s=i[1],l=Ie(),j=M(),u=Object(E.a)(j,2),d=u[0],b=d.data,O=(d.error,d.loading),x=u[1],m=function(){s(!o),!o&&x("".concat(a.url,"/commits"))};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(se.a,{className:l.mainRow,children:t.map((function(e,t){return Object(k.jsx)(le.a,{children:"collapse"===e.id?Object(k.jsx)($.a,{"aria-label":"expand row",size:"small",onClick:m,children:o?Object(k.jsx)(ge.a,{}):Object(k.jsx)(xe.a,{})}):fe()(a,e.id)||"\u2014"},"repo-row-col-".concat(c,"-").concat(t))}))}),Object(k.jsx)(se.a,{children:Object(k.jsx)(le.a,{style:{paddingBottom:0,paddingTop:0},colSpan:5,children:Object(k.jsx)(he.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(k.jsxs)(h.a,{margin:1,children:[Object(k.jsx)("span",{className:l.title,children:"Commits: "}),Object(k.jsx)(ve,{data:null===b||void 0===b?void 0:b.data,loading:O,columns:Pe})]})})})})]})},ke=Object(W.a)({root:{width:"100%"},container:{height:"60vh"}}),Ce=function(e){var t=e.data,a=void 0===t?[]:t,n=e.columns,r=void 0===n?[]:n,i=e.loading,o=ke(),s=c.a.useState(0),l=Object(E.a)(s,2),j=l[0],u=l[1],d=c.a.useState(10),b=Object(E.a)(d,2),h=b[0],O=b[1];return Object(k.jsx)(ce.a,{className:o.root,children:i?Object(k.jsx)(de,{}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(re.a,{className:o.container,children:Object(k.jsxs)(ie.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(k.jsx)(oe.a,{children:Object(k.jsx)(se.a,{children:r.map((function(e){var t=e.id,a=e.label,n=e.width;return Object(k.jsx)(le.a,{width:n,children:a},t)}))})}),Object(k.jsx)(je.a,{children:a.slice(j*h,j*h+h).map((function(e,t){return Object(k.jsx)(Ne,{columns:r,data:e,i:t},"repo-row-".concat(t))}))})]})}),Object(k.jsx)(ue.a,{rowsPerPageOptions:[10,25,100],component:"div",count:a.length,rowsPerPage:h,page:j,onChangePage:function(e,t){u(t)},onChangeRowsPerPage:function(e){O(+e.target.value),u(0)}})]})})},Re=a(372),De=a(193),Ee=a.n(De),Fe=Object(W.a)((function(){return{searchContainer:{height:55},search:{margin:"0 auto",maxWidth:400}}})),Te=function(e){var t=e.handleSearch,a=e.loading,n=void 0!==a&&a,c=Fe();return Object(k.jsxs)("div",{className:c.searchContainer,children:[Object(k.jsx)(Ee.a,{onRequestSearch:t,className:c.search}),n&&Object(k.jsx)(Re.a,{className:c.search})]})},Ae=Object(W.a)((function(){return{searchContainer:{height:45},search:{margin:"0 auto",maxWidth:800},container:{marginTop:20,height:"80vh"}}})),We=function(){var e=Object(u.b)(),t=Ae(),a=Object(u.c)((function(e){return e.auth.user})),c=M(),r=Object(E.a)(c,2),i=r[0],o=i.data,s=i.error,l=i.loading,j=r[1],d=M(),b=Object(E.a)(d,2),h=b[0],x=h.data,g=(h.error,h.loading),p=b[1];return Object(n.useEffect)((function(){404===s&&O.b.error("User not found.")}),[s]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(ne,{user:a,handleLogout:function(){return e((function(e){e(m({})),localStorage.removeItem("auth")}))}}),Object(k.jsxs)(I.a,{className:t.container,children:[Object(k.jsx)(Te,{handleSearch:function(e){return j("https://api.github.com/users/".concat(e)).then((function(e){var t;return(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.repos_url)&&p(e.data.repos_url)}))},loading:l||g}),o&&Object(k.jsxs)(Y.a,{className:t.container,children:[Object(k.jsx)(L,{data:null===o||void 0===o?void 0:o.data,loading:l,userError:s}),Object(k.jsx)(K.a,{children:Object(k.jsx)(Ce,{data:null===x||void 0===x?void 0:x.data,columns:ye,loading:g})})]})]})]})},_e=a.p+"static/media/404.4a407c66.jpeg",Le=function(){return Object(k.jsx)(h.a,{display:"flex",justifyContent:"center",height:"100vh",alignItems:"center",children:Object(k.jsx)("img",{src:_e,alt:"404 img",height:"60%"})})},ze=a(194),Ue=function(e){var t=e.component,a=Object(l.a)(e,["component"]),n=Object(u.c)((function(e){return e.auth})),c=!b()(null===n||void 0===n?void 0:n.user);return Object(k.jsx)(j.b,Object(s.a)(Object(s.a)({},a),{},{component:function(e){return c?Object(k.jsx)(t,Object(s.a)({},e)):Object(k.jsx)(j.a,{to:"/login"})}}))},qe=(Object(ze.a)(),function(){return Object(k.jsxs)(j.d,{children:[Object(k.jsx)(j.b,{path:"/login",component:D}),Object(k.jsx)(Ue,{path:"/",exact:!0,component:We}),Object(k.jsx)(Ue,{component:Le})]})}),Ge=function(){return Object(k.jsxs)(o.a,{children:[Object(k.jsx)(qe,{}),Object(k.jsx)(O.a,{})]})},Be=a(195),He=a(52),Je={user:function(e){var t=localStorage.getItem(e);return t?JSON.parse(t).user:{}}("auth")},Me=Object(He.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case x:return t.payload;default:return e}}}),Ye=(a(325),Object(He.e)(Me,Object(He.d)(Object(He.a)(Be.a))));i.a.render(Object(k.jsxs)(u.a,{store:Ye,children:[Object(k.jsx)(Ge,{}),Object(k.jsx)(O.a,{})]}),document.getElementById("root"))}},[[326,1,2]]]);
//# sourceMappingURL=main.ca08cc86.chunk.js.map