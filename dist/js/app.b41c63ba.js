(function(e){function t(t){for(var r,a,c=t[0],i=t[1],u=t[2],d=0,p=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"aecc21ec"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"6bec7532"}[e]+".css",o=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],d=u.getAttribute("data-href");if(d===r||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],l.parentNode.removeChild(l),n(s)},l.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var p=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/studio88_frontend/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var l=d;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0af1":function(e,t,n){e.exports=n.p+"img/loading0.baeaf0c7.gif"},2242:function(e,t,n){e.exports=n.p+"img/loading2.df514763.gif"},"2b32":function(e,t,n){},"4c99":function(e,t,n){e.exports=n.p+"img/loading4.71c49b97.gif"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=(n("5c0b"),n("2877")),c={},i=Object(s["a"])(c,a,o,!1,null,null,null),u=i.exports,d=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Studio 88"}})],1)},l=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("div",{staticClass:"club__title"},[r("img",{staticClass:"responsive",attrs:{src:n("b6d9"),alt:""}}),r("div",{staticClass:"club__login"},[r("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[e.loginForm?r("log-in"):r("p",{staticClass:"club__link",attrs:{href:"#",target:"_blank",rel:"noopener"},on:{click:e.toggleLoginForm}},[e._v(" Log In ")])],1)],1)])])},m=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d"},[e.isLog?n("Loading",{key:"1",staticClass:"app-load",attrs:{pic:"loading1"}}):n("div",[n("form",{staticClass:"login__wrapper",attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.logIn()}}},[n("label",{attrs:{for:"username"}},[e._v("User name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.loginInput.email,expression:"loginInput.email"}],staticClass:"login_input",attrs:{type:"text",name:"username",required:""},domProps:{value:e.loginInput.email},on:{focus:e.clearErrors,input:function(t){t.target.composing||e.$set(e.loginInput,"email",t.target.value)}}}),n("label",{attrs:{for:"pass"}},[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.loginInput.password,expression:"loginInput.password"}],staticClass:"login_input",attrs:{type:"password",name:"pass",required:""},domProps:{value:e.loginInput.password},on:{focus:e.clearErrors,input:function(t){t.target.composing||e.$set(e.loginInput,"password",t.target.value)}}}),n("button",{staticClass:"login_btn",attrs:{type:"submit"}},[e._v(" Log In ")])]),0!=e.getErrors.length?n("p",{staticClass:"err"},[e._v(e._s(e.getErrors))]):e._e()])],1)},h=[],v=(n("96cf"),n("1da1")),w=n("5530"),b=n("2f62"),x=n("7d33"),O={name:"LogIn",components:{Loading:x["a"]},data:function(){return{type:"login",isLog:!1,loginInput:{email:"",password:""},user:{},notificationSystem:{options:{show:{theme:"dark",icon:"icon-person",position:"topCenter",progressBarColor:"rgb(0, 255, 184)"},error:{position:"center"}}}}},computed:Object(w["a"])({},Object(b["c"])(["getInputType","loggedUser","getErrors","isLogged"])),methods:Object(w["a"])(Object(w["a"])({},Object(b["b"])(["login","logout","signType","clearErrors"])),{},{logIn:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLog=!0,t.next=3,e.login(e.loginInput);case 3:e.getErrors.length&&(e.$toast.error("Greška! Pogrešan e-mail ili password "+e.getErrors,"OK",e.notificationSystem.options.error),e.clearErrors()),e.isLog=!1;case 5:case"end":return t.stop()}}),t)})))()}})},y=O,j=(n("70c3"),Object(s["a"])(y,g,h,!1,null,null,null)),R=j.exports,_={name:"HelloWorld",props:{msg:String},components:{LogIn:R},data:function(){return{loginForm:!1}},methods:{toggleLoginForm:function(){this.loginForm=!0}}},E=_,k=(n("cfe9"),Object(s["a"])(E,f,m,!1,null,"e3ae81a8",null)),C=k.exports,S={name:"Home",components:{HelloWorld:C}},P=S,A=Object(s["a"])(P,p,l,!1,null,null,null),U=A.exports;r["a"].use(d["a"]);var L=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("about").then(n.bind(null,"7277"))}}],T=new d["a"]({mode:"history",base:"/studio88_frontend/",routes:L}),I=T,F=(n("99af"),n("4de4"),n("d81d"),n("2909")),N=n("bc3a"),M=n.n(N),D="https://studio88.herokuapp.com/",G={client:{},clients:[],formType:"",clientsPage:1,clientsPageSize:10,fromForm:"clients"},$={getAllClients:function(e){return e.clients},getOneClient:function(e){return e.client},getFormType:function(e){return e.formType},getClientsPage:function(e){return e.clientsPage},getClientsPageSize:function(e){return e.clientsPageSize},getFromForm:function(e){return e.fromForm}},z={setClients:function(e,t){return e.clients=t},setClient:function(e,t){return e.client=t},setClientsPage:function(e,t){return e.clientsPage=t},setClientsPageSize:function(e,t){return e.clientsPageSize=t},setFromForm:function(e,t){return e.fromForm=t},clearClient:function(e){e.client={}},setFormType:function(e,t){return e.formType=t},addClient:function(e,t){e.clients=[t].concat(Object(F["a"])(e.clients))},updateClient:function(e,t){e.clients=Object(F["a"])(e.clients.map((function(e){return e._id!==t._id?e:Object(w["a"])(Object(w["a"])({},e),t)})))},deleteClient:function(e,t){e.clients=Object(F["a"])(e.clients.filter((function(e){return e._id!==t})))}},K={fetchClients:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,M.a.get(D+"clients");case 3:r=t.sent,n("setClients",r.data);case 5:case"end":return t.stop()}}),t)})))()},fetchClient:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.get(D+"clients/"+t._id,t);case 3:a=n.sent,r("setClient",a.data);case 5:case"end":return n.stop()}}),n)})))()},fetchClientsPage:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,r("setClientsPage",t);case 2:case"end":return n.stop()}}),n)})))()},fetchClientsPageSize:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,r("setClientsPageSize",t);case 2:case"end":return n.stop()}}),n)})))()},fetchFromForm:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,r("setFromForm",t);case 2:case"end":return n.stop()}}),n)})))()},clientAdd:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.post(D+"clients",t).then((function(e){r("addClient",e.data.client)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},clientUpdate:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.put(D+"clients/"+t._id,t).then((function(e){r("updateClient",e.data)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},clientDelete:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.delete(D+"clients/"+t._id,t).then((function(e){r("deleteClient",e.data._id)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},clientClear:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,n("clearClient");case 2:case"end":return t.stop()}}),t)})))()},formTypeChange:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,r("setFormType",t);case 2:case"end":return n.stop()}}),n)})))()}},H={state:G,getters:$,actions:K,mutations:z},J="https://studio88.herokuapp.com/",q={schedule:{},schedules:[],notClients:[]},B={getAllSchedules:function(e){return e.schedules},getOneSchedule:function(e){return e.schedule},getNotClients:function(e){return e.notClients}},W={setSchedules:function(e,t){return e.schedules=t},setSchedule:function(e,t){return e.schedule=t},setNotClients:function(e,t){return e.notClients=t},clearSchedule:function(e){e.schedule={}},addSchedule:function(e,t){e.schedules=[t].concat(Object(F["a"])(e.schedules))},updateSchedule:function(e,t){e.schedules=Object(F["a"])(e.schedules.map((function(e){return e._id!==t._id?e:Object(w["a"])(Object(w["a"])({},e),t)})))},deleteSchedule:function(e,t){e.schedules=Object(F["a"])(e.schedules.filter((function(e){return e._id!==t})))}},Q={fetchSchedules:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,M.a.get(J+"schedules");case 3:r=t.sent,n("setSchedules",r.data);case 5:case"end":return t.stop()}}),t)})))()},fetchSchedule:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.get(J+"schedules/"+t._id,t);case 3:a=n.sent,r("setSchedule",a.data);case 5:case"end":return n.stop()}}),n)})))()},fetchNotClients:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.get(J+"schedules/clientsnot/"+t._id,t);case 3:a=n.sent,r("setNotClients",a.data);case 5:case"end":return n.stop()}}),n)})))()},scheduleAdd:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.post(J+"schedules",t).then((function(e){r("addSchedule",e.data.schedule)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},scheduleUpdate:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.put(J+"schedules/"+t._id,t).then((function(e){r("updateSchedule",e.data)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},scheduleDelete:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.delete(J+"schedules/"+t._id,t).then((function(e){r("deleteSchedule",e.data._id)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},scheduleClear:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,n("clearSchedule");case 2:case"end":return t.stop()}}),t)})))()}},V={state:q,getters:B,actions:Q,mutations:W},X="https://studio88.herokuapp.com/",Y={payment:{},payments:[]},Z={getAllPayments:function(e){return e.payments},getOnePayment:function(e){return e.payment}},ee={setPayments:function(e,t){return e.payments=t},setPayment:function(e,t){return e.payment=t},clearPayment:function(e){e.payment={}},addPayment:function(e,t){e.payments=[t].concat(Object(F["a"])(e.payments))},updatePayment:function(e,t){e.payments=Object(F["a"])(e.payments.map((function(e){return e._id!==t._id?e:Object(w["a"])(Object(w["a"])({},e),t)})))},deletePayment:function(e,t){e.payments=Object(F["a"])(e.payments.filter((function(e){return e._id!==t})))}},te={fetchPayments:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,M.a.get(X+"payments");case 3:r=t.sent,n("setPayments",r.data);case 5:case"end":return t.stop()}}),t)})))()},fetchPayment:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.get(X+"payments/"+t._id,t);case 3:a=n.sent,r("setPayment",a.data);case 5:case"end":return n.stop()}}),n)})))()},paymentAdd:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.post(X+"payments",t).then((function(e){r("addPayment",e.data.payment)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},paymentUpdate:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.put(X+"payments/"+t._id,t).then((function(e){r("updatePayment",e.data)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},paymentDelete:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.delete(X+"payments/"+t._id,t).then((function(e){r("deletePayment",e.data._id)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},paymentClear:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,n("clearPayment");case 2:case"end":return t.stop()}}),t)})))()}},ne={state:Y,getters:Z,actions:te,mutations:ee},re=M.a.create({withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});re.interceptors.request.use((function(e){var t=Le.getters.getAuthKey;return e.headers["Authorization"]="Bearer "+t,e}));var ae=re;function oe(e){localStorage.setItem("studio88_user",JSON.stringify(e))}function se(){return JSON.parse(localStorage.getItem("studio88_user"))}function ce(){localStorage.removeItem("studio88_user")}function ie(e){var t=JSON.parse(localStorage.getItem("studio88_user"));t.user=e,localStorage.setItem("studio88_user",JSON.stringify(t))}var ue="https://studio88.herokuapp.com/",de={authKey:"",user:{},users:[],selectedUser:{},logged:!1,loading:!0,inputType:"",price:0,errors:[]},pe={getAuthKey:function(e){return e.authKey},allUsers:function(e){return e.users},loggedUser:function(e){return e.user},loadingState:function(e){return e.loading},isLogged:function(e){return e.logged},getInputType:function(e){return e.inputType},getErrors:function(e){return e.errors},getSelectedUser:function(e){return e.selectedUser},getPrice:function(e){return e.price}},le={setToken:function(e,t){return e.authKey=t},setUsers:function(e,t){return e.users=t},setUser:function(e,t){return e.user=t},setSelectedUser:function(e,t){return e.selectedUser=t},setPrice:function(e,t){return e.price=t},clearSelectedUser:function(e){return e.selectedUser={}},updateUser:function(e,t){e.user=t},changeLoadingState:function(e,t){e.loading=t},setSignType:function(e,t){e.inputType=t},setLogged:function(e,t){e.logged=t},setErrors:function(e,t){e.errors=t}},fe={initialState:function(e,t){var n=e.commit,r=se();r&&(n("setToken",r.token),n("setUser",r.user),n("setLogged",!0),n("setPrice",t),n("changeLoadingState",!1))},setLoadingState:function(e,t){var n=e.commit;n("changeLoadingState",t)},signType:function(e,t){var n=e.commit;n("setSignType",t)},signup:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.post(ue+"users/signup",t).then((function(e){r("setUser",e.data.user),r("setToken",e.data.token),r("setLogged",!0),I.push("/")})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},login:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.post(ue+"users/login",t).then((function(e){oe(e.data),r("setUser",e.data.user),r("setToken",e.data.token),r("setLogged",!0),I.push("/dashboard")})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},logout:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,ae.post(ue+"users/me/logout",t).then((function(e){r("setUser",e.data.user),r("setToken",e.data.token),r("setLogged",!1),ce(),I.push("/")})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},fetchUsers:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,M.a.get(ue+"users");case 3:r=t.sent,n("setUsers",r.data);case 5:case"end":return t.stop()}}),t)})))()},fetchUser:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,ae.get(ue+"users/me");case 3:r=t.sent,n("setUser",r.data),n("setLogged",!0),n("changeLoadingState",!1);case 7:case"end":return t.stop()}}),t)})))()},fetchSelectedUser:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,r("setSelectedUser",t);case 2:case"end":return n.stop()}}),n)})))()},userUpdate:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,ae.put(ue+"users/"+t._id,t).then((function(e){r("updateUser",e.data),ie(t),I.push("/")})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},clearErrors:function(e){var t=e.commit;t("setErrors",[])}},me={state:de,getters:pe,actions:fe,mutations:le},ge="https://studio88.herokuapp.com/",he={attendance:{},attendances:[]},ve={getAllAttendances:function(e){return e.attendances},getOneAttendance:function(e){return e.attendance}},we={setAttendances:function(e,t){return e.attendances=t},setAttendance:function(e,t){return e.attendance=t},clearAttendance:function(e){e.attendance={}},addAttendance:function(e,t){e.attendances=[t].concat(Object(F["a"])(e.attendances))},updateAttendance:function(e,t){e.attendances=Object(F["a"])(e.attendances.map((function(e){return e._id!==t._id?e:Object(w["a"])(Object(w["a"])({},e),t)})))},deleteAttendance:function(e,t){e.attendances=Object(F["a"])(e.attendances.filter((function(e){return e._id!==t})))}},be={fetchAttendances:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,M.a.get(ge+"attendances");case 3:r=t.sent,n("setAttendances",r.data);case 5:case"end":return t.stop()}}),t)})))()},fetchAttendance:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.get(ge+"attendances/"+t._id,t);case 3:a=n.sent,r("setAttendance",a.data);case 5:case"end":return n.stop()}}),n)})))()},attendanceAdd:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.post(ge+"attendances",t).then((function(e){r("addAttendance",e.data.attendance)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},attendanceUpdate:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.put(ge+"attendances/"+t._id,t).then((function(e){r("updateAttendance",e.data)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},attendanceDelete:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.delete(ge+"attendances/"+t._id,t).then((function(e){r("deleteAttendance",e.data._id)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},attendanceClear:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,n("clearAttendance");case 2:case"end":return t.stop()}}),t)})))()}},xe={state:he,getters:ve,actions:be,mutations:we},Oe="https://studio88.herokuapp.com/",ye={expense:{},expenses:[]},je={getAllExpenses:function(e){return e.expenses},getOneExpense:function(e){return e.expense}},Re={setExpenses:function(e,t){return e.expenses=t},setExpense:function(e,t){return e.expense=t},clearExpense:function(e){e.expense={}},addExpense:function(e,t){e.expenses=[t].concat(Object(F["a"])(e.expenses))},updateExpense:function(e,t){e.expenses=Object(F["a"])(e.expenses.map((function(e){return e._id!==t._id?e:Object(w["a"])(Object(w["a"])({},e),t)})))},deleteExpense:function(e,t){e.expenses=Object(F["a"])(e.expenses.filter((function(e){return e._id!==t})))}},_e={fetchExpenses:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,M.a.get(Oe+"expenses");case 3:r=t.sent,n("setExpenses",r.data);case 5:case"end":return t.stop()}}),t)})))()},fetchExpense:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.get(Oe+"expenses/"+t._id,t);case 3:a=n.sent,r("setExpense",a.data);case 5:case"end":return n.stop()}}),n)})))()},expenseAdd:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.post(Oe+"expenses",t).then((function(e){r("addExpense",e.data.expense)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},expenseUpdate:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.put(Oe+"expenses/"+t._id,t).then((function(e){r("updateExpense",e.data)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},expenseDelete:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.delete(Oe+"expenses/"+t._id,t).then((function(e){r("deleteExpense",e.data._id)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},expenseClear:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,n("clearExpense");case 2:case"end":return t.stop()}}),t)})))()}},Ee={state:ye,getters:je,actions:_e,mutations:Re},ke=(n("c975"),"https://studio88.herokuapp.com/"),Ce={general:{}},Se={getGeneral:function(e){return e.general}},Pe={setGeneral:function(e,t){return e.general=t[0]},addGeneral:function(e,t){e.general=t},updateGeneral:function(e,t){e.general=Object(w["a"])({},t)},addPrice:function(e,t){var n=e.general.map((function(e){return e._id})).indexOf(t._id);Object.assign(e.general[n],{prices:t.prices})}},Ae={fetchGenerals:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,M.a.get(ke+"generals");case 3:r=t.sent,n("setGeneral",r.data);case 5:case"end":return t.stop()}}),t)})))()},generalAdd:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.post(ke+"generals",t).then((function(e){r("addGeneral",e.data.general)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},generalUpdate:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,M.a.put(ke+"generals/"+t._id,t).then((function(e){r("updateGeneral",e.data)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()}},Ue={state:Ce,getters:Se,actions:Ae,mutations:Pe};r["a"].use(b["a"]);var Le=new b["a"].Store({modules:{clientModule:H,scheduleModule:V,paymentModule:ne,attendanceModule:xe,expenseModule:Ee,userModule:me,generalModule:Ue}}),Te=n("e399"),Ie=n.n(Te),Fe=(n("2068"),n("eb2e")),Ne=n.n(Fe);r["a"].use(Ie.a),r["a"].component("jw-pagination",Ne.a),r["a"].config.productionTip=!1,new r["a"]({router:I,store:Le,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},7033:function(e,t,n){e.exports=n.p+"img/loading3.b09822a6.gif"},"70c3":function(e,t,n){"use strict";var r=n("2b32"),a=n.n(r);a.a},7550:function(e,t,n){var r={"./loading0.gif":"0af1","./loading1.gif":"a57a","./loading2.gif":"2242","./loading3.gif":"7033","./loading4.gif":"4c99","./loading5.gif":"ea22"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="7550"},"7d33":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("img",{staticClass:"loading",attrs:{src:e.getPngUrl(),alt:""}}),n("p",{staticClass:"loading__text"},[e._v("loading ...")])])},a=[],o={name:"Loading",props:{pic:String},methods:{getPngUrl:function(){return n("7550")("./loading"+Math.floor(5*Math.random())+".gif")}}},s=o,c=(n("dfc8"),n("2877")),i=Object(c["a"])(s,r,a,!1,null,null,null);t["a"]=i.exports},"96bc":function(e,t,n){},"9c0c":function(e,t,n){},a57a:function(e,t,n){e.exports=n.p+"img/loading1.0c28087b.gif"},b6d9:function(e,t,n){e.exports=n.p+"img/studio881.45bc547c.png"},cfe9:function(e,t,n){"use strict";var r=n("e941"),a=n.n(r);a.a},dfc8:function(e,t,n){"use strict";var r=n("96bc"),a=n.n(r);a.a},e941:function(e,t,n){},ea22:function(e,t,n){e.exports=n.p+"img/loading5.7956ffe5.gif"}});
//# sourceMappingURL=app.b41c63ba.js.map