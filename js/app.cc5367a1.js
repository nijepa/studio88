(function(e){function t(t){for(var r,a,c=t[0],u=t[1],i=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"22969239"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"db3aa5a1"}[e]+".css",o=u.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var i=s[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],l=i.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],p.parentNode.removeChild(p),n(s)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2b32":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=(n("5c0b"),n("2877")),c={},u=Object(s["a"])(c,a,o,!1,null,null,null),i=u.exports,l=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Studio 88"}})],1)},p=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("div",{staticClass:"club__title"},[r("img",{staticClass:"responsive",attrs:{src:n("b6d9"),alt:""}}),r("div",{staticClass:"club__login"},[r("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[e.loginForm?r("log-in"):r("p",{staticClass:"club__link",attrs:{href:"#",target:"_blank",rel:"noopener"},on:{click:e.toggleLoginForm}},[e._v(" Log In ")])],1)],1)])])},f=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d"},[n("form",{staticClass:"login__wrapper",attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.logIn()}}},[n("label",{attrs:{for:"username"}},[e._v("User name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.loginInput.email,expression:"loginInput.email"}],staticClass:"login_input",attrs:{type:"text",name:"username",required:""},domProps:{value:e.loginInput.email},on:{focus:e.clearErrors,input:function(t){t.target.composing||e.$set(e.loginInput,"email",t.target.value)}}}),n("label",{attrs:{for:"pass"}},[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.loginInput.password,expression:"loginInput.password"}],staticClass:"login_input",attrs:{type:"password",name:"pass",required:""},domProps:{value:e.loginInput.password},on:{focus:e.clearErrors,input:function(t){t.target.composing||e.$set(e.loginInput,"password",t.target.value)}}}),n("button",{staticClass:"login_btn",attrs:{type:"submit"}},[e._v(" Log In ")])]),0!=e.getErrors.length?n("p",{staticClass:"err"},[e._v(e._s(e.getErrors))]):e._e()])},h=[],v=n("5530"),b=n("2f62"),w={name:"LogIn",data:function(){return{type:"login",loginInput:{email:"",password:""},user:{},notificationSystem:{options:{show:{theme:"dark",icon:"icon-person",position:"topCenter",progressBarColor:"rgb(0, 255, 184)"},ballon:{balloon:!0,position:"bottomCenter"},info:{position:"bottomLeft"},success:{position:"center"},warning:{position:"topLeft"},error:{position:"center"},question:{timeout:2e4,close:!1,overlay:!0,toastOnce:!0,id:"question",zindex:999,position:"center"}}}}},computed:Object(v["a"])({},Object(b["c"])(["getInputType","loggedUser","getErrors","isLogged"])),methods:Object(v["a"])(Object(v["a"])({},Object(b["b"])(["login","logout","signType","clearErrors"])),{},{logIn:function(){this.login(this.loginInput),this.getErrors.length&&(this.$toast.error("Greška! Pogrešan e-mail ili password "+this.getErrors,"OK",this.notificationSystem.options.error),this.clearErrors())}})},y=w,O=(n("70c3"),Object(s["a"])(y,g,h,!1,null,null,null)),j=O.exports,x={name:"HelloWorld",props:{msg:String},components:{LogIn:j},data:function(){return{loginForm:!1}},methods:{toggleLoginForm:function(){this.loginForm=!0}}},_=x,R=(n("7779"),Object(s["a"])(_,m,f,!1,null,"78b53b44",null)),k=R.exports,E={name:"Home",components:{HelloWorld:k}},S=E,C=Object(s["a"])(S,d,p,!1,null,null,null),A=C.exports;r["a"].use(l["a"]);var U=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("about").then(n.bind(null,"7277"))}}],P=new l["a"]({base:"/",routes:U}),T=P,L=(n("99af"),n("4de4"),n("d81d"),n("96cf"),n("1da1")),I=n("2909"),N=n("bc3a"),F=n.n(N),M="https://studio88.herokuapp.com/",D={client:{},clients:[],formType:""},$={getAllClients:function(e){return e.clients},getOneClient:function(e){return e.client},getFormType:function(e){return e.formType}},q={setClients:function(e,t){return e.clients=t},setClient:function(e,t){return e.client=t},clearClient:function(e){e.client={}},setFormType:function(e,t){return e.formType=t},addClient:function(e,t){e.clients=[t].concat(Object(I["a"])(e.clients))},updateClient:function(e,t){e.clients=Object(I["a"])(e.clients.map((function(e){return e._id!==t._id?e:Object(v["a"])(Object(v["a"])({},e),t)})))},deleteClient:function(e,t){e.clients=Object(I["a"])(e.clients.filter((function(e){return e._id!==t})))}},K={fetchClients:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,F.a.get(M+"clients");case 3:r=t.sent,n("setClients",r.data);case 5:case"end":return t.stop()}}),t)})))()},fetchClient:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.get(M+"clients/"+t._id,t);case 3:a=n.sent,r("setClient",a.data);case 5:case"end":return n.stop()}}),n)})))()},clientAdd:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.post(M+"clients",t).then((function(e){r("addClient",e.data.client)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},clientUpdate:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.put(M+"clients/"+t._id,t).then((function(e){r("updateClient",e.data)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},clientDelete:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.delete(M+"clients/"+t._id,t).then((function(e){r("deleteClient",e.data._id)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},clientClear:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,n("clearClient");case 2:case"end":return t.stop()}}),t)})))()},formTypeChange:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,r("setFormType",t);case 2:case"end":return n.stop()}}),n)})))()}},H={state:D,getters:$,actions:K,mutations:q},J="https://studio88.herokuapp.com/",B={schedule:{},schedules:[],notClients:[]},W={getAllSchedules:function(e){return e.schedules},getOneSchedule:function(e){return e.schedule},getNotClients:function(e){return e.notClients}},z={setSchedules:function(e,t){return e.schedules=t},setSchedule:function(e,t){return e.schedule=t},setNotClients:function(e,t){return e.notClients=t},clearSchedule:function(e){e.schedule={}},addSchedule:function(e,t){e.schedules=[t].concat(Object(I["a"])(e.schedules))},updateSchedule:function(e,t){e.schedules=Object(I["a"])(e.schedules.map((function(e){return e._id!==t._id?e:Object(v["a"])(Object(v["a"])({},e),t)})))},deleteSchedule:function(e,t){e.schedules=Object(I["a"])(e.schedules.filter((function(e){return e._id!==t})))}},G={fetchSchedules:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,F.a.get(J+"schedules");case 3:r=t.sent,n("setSchedules",r.data);case 5:case"end":return t.stop()}}),t)})))()},fetchSchedule:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.get(J+"schedules/"+t._id,t);case 3:a=n.sent,r("setSchedule",a.data);case 5:case"end":return n.stop()}}),n)})))()},fetchNotClients:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.get(J+"schedules/clientsnot/"+t._id,t);case 3:a=n.sent,r("setNotClients",a.data);case 5:case"end":return n.stop()}}),n)})))()},scheduleAdd:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.post(J+"schedules",t).then((function(e){r("addSchedule",e.data.schedule)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},scheduleUpdate:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.put(J+"schedules/"+t._id,t).then((function(e){r("updateSchedule",e.data)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},scheduleDelete:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.delete(J+"schedules/"+t._id,t).then((function(e){r("deleteSchedule",e.data._id)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},scheduleClear:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,n("clearSchedule");case 2:case"end":return t.stop()}}),t)})))()}},Q={state:B,getters:W,actions:G,mutations:z},V="https://studio88.herokuapp.com/",X={payment:{},payments:[]},Y={getAllPayments:function(e){return e.payments},getOnePayment:function(e){return e.payment}},Z={setPayments:function(e,t){return e.payments=t},setPayment:function(e,t){return e.payment=t},clearPayment:function(e){e.payment={}},addPayment:function(e,t){e.payments=[t].concat(Object(I["a"])(e.payments))},updatePayment:function(e,t){e.payments=Object(I["a"])(e.payments.map((function(e){return e._id!==t._id?e:Object(v["a"])(Object(v["a"])({},e),t)})))},deletePayment:function(e,t){e.payments=Object(I["a"])(e.payments.filter((function(e){return e._id!==t})))}},ee={fetchPayments:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,F.a.get(V+"payments");case 3:r=t.sent,n("setPayments",r.data);case 5:case"end":return t.stop()}}),t)})))()},fetchPayment:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.get(V+"payments/"+t._id,t);case 3:a=n.sent,r("setPayment",a.data);case 5:case"end":return n.stop()}}),n)})))()},paymentAdd:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.post(V+"payments",t).then((function(e){r("addPayment",e.data.payment)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},paymentUpdate:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.put(V+"payments/"+t._id,t).then((function(e){r("updatePayment",e.data)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},paymentDelete:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.delete(V+"payments/"+t._id,t).then((function(e){r("deletePayment",e.data._id)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},paymentClear:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,n("clearPayment");case 2:case"end":return t.stop()}}),t)})))()}},te={state:X,getters:Y,actions:ee,mutations:Z},ne=F.a.create({withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});ne.interceptors.request.use((function(e){var t=ye.getters.getAuthKey;return e.headers["Authorization"]="Bearer "+t,e}));var re=ne;function ae(e){localStorage.setItem("studio88_user",JSON.stringify(e))}function oe(){return JSON.parse(localStorage.getItem("studio88_user"))}function se(){localStorage.removeItem("studio88_user")}function ce(e){var t=JSON.parse(localStorage.getItem("studio88_user"));t.user=e,localStorage.setItem("studio88_user",JSON.stringify(t))}var ue="https://studio88.herokuapp.com/",ie={authKey:"",user:{},users:[],selectedUser:{},logged:!1,loading:!0,inputType:"",errors:[]},le={getAuthKey:function(e){return e.authKey},allUsers:function(e){return e.users},loggedUser:function(e){return e.user},loadingState:function(e){return e.loading},isLogged:function(e){return e.logged},getInputType:function(e){return e.inputType},getErrors:function(e){return e.errors},getSelectedUser:function(e){return e.selectedUser}},de={setToken:function(e,t){return e.authKey=t},setUsers:function(e,t){return e.users=t},setUser:function(e,t){return e.user=t},setSelectedUser:function(e,t){return e.selectedUser=t},clearSelectedUser:function(e){return e.selectedUser={}},updateUser:function(e,t){e.user=t},changeLoadingState:function(e,t){e.loading=t},setSignType:function(e,t){e.inputType=t},setLogged:function(e,t){e.logged=t},setErrors:function(e,t){e.errors=t}},pe={initialState:function(e){var t=e.commit,n=oe();n&&(t("setToken",n.token),t("setUser",n.user),t("setLogged",!0),t("changeLoadingState",!1))},setLoadingState:function(e,t){var n=e.commit;n("changeLoadingState",t)},signType:function(e,t){var n=e.commit;n("setSignType",t)},signup:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.post(ue+"users/signup",t).then((function(e){r("setUser",e.data.user),r("setToken",e.data.token),r("setLogged",!0),T.push("/")})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},login:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.post(ue+"users/login",t).then((function(e){ae(e.data),r("setUser",e.data.user),r("setToken",e.data.token),r("setLogged",!0),T.push("/dashboard")})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},logout:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,re.post(ue+"users/me/logout",t).then((function(e){r("setUser",e.data.user),r("setToken",e.data.token),r("setLogged",!1),se(),T.push("/")})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},fetchUsers:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,F.a.get(ue+"users");case 3:r=t.sent,n("setUsers",r.data);case 5:case"end":return t.stop()}}),t)})))()},fetchUser:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,re.get(ue+"users/me");case 3:r=t.sent,n("setUser",r.data),n("setLogged",!0),n("changeLoadingState",!1);case 7:case"end":return t.stop()}}),t)})))()},fetchSelectedUser:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,r("setSelectedUser",t);case 2:case"end":return n.stop()}}),n)})))()},userUpdate:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,re.put(ue+"users/"+t._id,t).then((function(e){r("updateUser",e.data),ce(t),T.push("/")})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},clearErrors:function(e){var t=e.commit;t("setErrors",[])}},me={state:ie,getters:le,actions:pe,mutations:de},fe="https://studio88.herokuapp.com/",ge={attendance:{},attendances:[]},he={getAllAttendances:function(e){return e.attendances},getOneAttendance:function(e){return e.attendance}},ve={setAttendances:function(e,t){return e.attendances=t},setAttendance:function(e,t){return e.attendance=t},clearAttendance:function(e){e.attendance={}},addAttendance:function(e,t){e.attendances=[t].concat(Object(I["a"])(e.attendances))},updateAttendance:function(e,t){e.attendances=Object(I["a"])(e.attendances.map((function(e){return e._id!==t._id?e:Object(v["a"])(Object(v["a"])({},e),t)})))},deleteAttendance:function(e,t){e.attendances=Object(I["a"])(e.attendances.filter((function(e){return e._id!==t})))}},be={fetchAttendances:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,F.a.get(fe+"attendances");case 3:r=t.sent,n("setAttendances",r.data);case 5:case"end":return t.stop()}}),t)})))()},fetchAttendance:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.get(fe+"attendances/"+t._id,t);case 3:a=n.sent,r("setAttendance",a.data);case 5:case"end":return n.stop()}}),n)})))()},attendanceAdd:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.post(fe+"attendances",t).then((function(e){r("addAttendance",e.data.attendance)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},attendanceUpdate:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.put(fe+"attendances/"+t._id,t).then((function(e){console.log("uuu"),r("updateAttendance",e.data)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},attendanceDelete:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.a.delete(fe+"attendances/"+t._id,t).then((function(e){r("deleteAttendance",e.data._id)})).catch((function(e){e.response?r("setErrors",e.response.data.error):r("setErrors",e)}));case 3:case"end":return n.stop()}}),n)})))()},attendanceClear:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,n("clearAttendance");case 2:case"end":return t.stop()}}),t)})))()}},we={state:ge,getters:he,actions:be,mutations:ve};r["a"].use(b["a"]);var ye=new b["a"].Store({modules:{clientModule:H,scheduleModule:Q,paymentModule:te,attendanceModule:we,userModule:me}}),Oe=n("e399"),je=n.n(Oe),xe=(n("2068"),n("eb2e")),_e=n.n(xe);r["a"].use(je.a),r["a"].component("jw-pagination",_e.a),r["a"].config.productionTip=!1,new r["a"]({router:T,store:ye,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"70c3":function(e,t,n){"use strict";var r=n("2b32"),a=n.n(r);a.a},7779:function(e,t,n){"use strict";var r=n("a0be"),a=n.n(r);a.a},"9c0c":function(e,t,n){},a0be:function(e,t,n){},b6d9:function(e,t,n){e.exports=n.p+"img/studio881.45bc547c.png"}});
//# sourceMappingURL=app.cc5367a1.js.map