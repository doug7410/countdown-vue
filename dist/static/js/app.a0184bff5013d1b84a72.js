webpackJsonp([1],[,,,,,,function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return r});var a=n(7),o="https://countdown-api.herokuapp.com/",r=function(){return{Accept:"application/json",Authorization:"Bearer "+a.a.getters.accessToken}}},function(t,e,n){"use strict";var a=n(4),o=n(3),r=n(50),i=n(51),s=n(52),u=n(53);a.a.use(o.a),e.a=new o.a.Store({modules:{auth:r.a,countdown:i.a,imageManager:s.a},plugins:[n.i(u.a)({blacklist:["route"]})]})},,function(t,e,n){"use strict";var a=n(30),o=n.n(a),r=n(6),i=o.a.create({baseURL:r.b});e.a=i},,,,,,,,,,,,,,,,function(t,e,n){"use strict";var a=n(4),o=n(127),r=n(7),i=n(114),s=n.n(i),u=n(110),c=n.n(u),d=n(108),l=n.n(d),m=n(109),v=n.n(m),f=n(107),p=n.n(f),_=n(111),g=n.n(_);a.a.use(o.a);var h=new o.a({routes:[{path:"/",name:"LoginPage",component:s.a},{path:"/dashboard",name:"dashboard",component:c.a,meta:{requiresAuth:!0},children:[{path:"home",name:"countdownList",component:v.a,meta:{requiresAuth:!0}},{path:"countdown/create",name:"createCountdown",component:l.a,meta:{requiresAuth:!0}},{path:"countdown/:id/update",name:"updateCountdown",component:g.a,meta:{requiresAuth:!0}}]},{path:"/countdown/:id",name:"countdownView",component:p.a,meta:{requiresAuth:!0}}]});h.beforeEach(function(t,e,n){"LoginPage"===t.name&&r.a.getters.accessToken&&n({name:"countdownList"}),t.meta.requiresAuth&&(r.a.getters.accessToken?n():n({name:"LoginPage"})),n()}),e.a=h},,,function(t,e,n){function a(t){n(96)}var o=n(1)(n(54),n(119),a,null,null);t.exports=o.exports},,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o});var a="2",o="WgUFaCF5ydGLkPnrnycb4pL1ZosNpQ0kteXOqQZk"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),o=n(28),r=n.n(o),i=n(25),s=n(29),u=n(7);try{window.$=window.jQuery=n(5),n(27),n(26)}catch(t){}a.a.config.productionTip=!1,a.a.use(s.a),a.a.use(s.a),new a.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a},store:u.a})},function(t,e,n){"use strict";var a=n(48),o=n(6),r=n(9);e.a={state:{email:null,name:null,accessToken:null,refreshToken:null,id:null},getters:{accessToken:function(t){return t.accessToken}},actions:{requestLogin:function(t,e){var i=t.commit,s=e.email,u=e.password,c={grant_type:"password",client_id:a.a,client_secret:a.b,username:s,password:u,scope:""};return r.a.post("oauth/token",c).then(function(t){if(200===t.status)return i("SAVE_TOKEN",t.data),r.a.get("api/user",{headers:n.i(o.a)()}).then(function(t){i("SET_USER",t.data)})})},logoutUser:function(t){(0,t.commit)("LOGOUT_USER"),window.localStorage.clear()}},mutations:{SAVE_TOKEN:function(t,e){t.accessToken=e.access_token,t.refreshToken=e.refresh_token},SET_USER:function(t,e){var n=e.email,a=e.name,o=e.id;t.name=a,t.email=n,t.id=o},LOGOUT_USER:function(t){t.accessToken=null,t.refreshToken=null,t.name=null,t.email=null}}}},function(t,e,n){"use strict";var a=n(9),o=n(6);e.a={state:{currentCountdown:{},countdowns:{}},getters:{currentCountdown:function(t){return t.currentCountdown},countdowns:function(t){return t.countdowns}},actions:{createCountdown:function(t,e){var r=t.commit;return a.a.post("/api/countdown",e,{headers:n.i(o.a)()}).then(function(t){r("SET_CURRENT_COUNTDOWN",t.data)})},updateCountdown:function(t,e){var r=t.commit;return a.a.put("/api/countdown",e,{headers:n.i(o.a)()}).then(function(t){r("UPDATE_CURRENT_COUNTDOWN",t.data)})},getCountdown:function(t,e){var r=t.commit;return a.a.get("/api/countdown/"+e,{headers:n.i(o.a)()}).then(function(t){r("SET_CURRENT_COUNTDOWN",t.data)})},getCountdowns:function(t){var e=t.commit;return a.a.get("/api/countdowns",{headers:n.i(o.a)()}).then(function(t){e("SET_USER_COUNTDOWNS",t.data)})},getImages:function(t){var e=t.commit,r=t.getters;return a.a.get("/api/countdown/"+r.currentCountdown.id+"/images",{headers:n.i(o.a)()}).then(function(t){e("SET_IMAGES",t.data)})}},mutations:{SET_CURRENT_COUNTDOWN:function(t,e){t.currentCountdown=e},SET_IMAGES:function(t,e){t.currentCountdown.images=e},SET_USER_COUNTDOWNS:function(t,e){t.countdowns=e},UPDATE_CURRENT_COUNTDOWN:function(t,e){var n=e.date,a=e.name;t.currentCountdown.name=a,t.currentCountdown.date=n},REMOVE_IMAGE_FROM_COUNTDOWN:function(t,e){t.currentCountdown.images.splice(e,1)}}}},function(t,e,n){"use strict";var a=n(2),o=n.n(a),r=n(9),i=n(6);e.a={state:{image:null},actions:{uploadImage:function(t,e){var a=t.commit,s=t.getters,u=new FormData;u.append("image",e),u.append("countdown_id",s.currentCountdown.id),r.a.post("api/images",u,{headers:o()({},n.i(i.a)(),{"content-type":"multipart/form-data"})}).then(function(t){a("SET_IMAGES",t.data)})},removeImage:function(t,e){var a=t.getters,o=t.commit;return r.a.delete("api/images/"+e,{headers:n.i(i.a)()}).then(function(){a.currentCountdown.images.forEach(function(t,n){t.id===e&&o("REMOVE_IMAGE_FROM_COUNTDOWN",n)})})}},mutations:{}}},function(t,e,n){"use strict";function a(t){var e=t.blacklist,n=void 0===e?[]:e;return function(t){var e=JSON.parse(window.localStorage.getItem("vuex")),a=s()({},t.state,e);t.replaceState(a),t.subscribe(function(t,e){var a=s()({},e);n.forEach(function(t){delete a[t]}),window.localStorage.setItem("vuex",r()(a))})}}e.a=a;var o=n(20),r=n.n(o),i=n(2),s=n.n(i)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n.n(a),r=n(3);e.default={name:"app",computed:o()({},n.i(r.b)(["accessToken"]))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),o=n(105),r=n.n(o);a.a.use(r.a),e.default={data:function(){return{timeRemaining:{},clockInterval:null}},destroyed:function(){clearInterval(this.clockInterval)},props:["tripDate"],created:function(){var t=this;this.clockInterval=setInterval(function(){t.timeRemaining=t.getTimeRemaining(t.tripDate)},1e3)},methods:{getTimeRemaining:function(t){var e=new Date,n=Date.parse(t)-Date.parse(e),a=Math.floor(n/1e3%60).toString(),o=Math.floor(n/1e3/60%60).toString(),r=Math.floor(n/36e5%24).toString();return{total:n,days:Math.floor(n/864e5).toString(),hours:r,minutes:o,seconds:a}}}},a.a.filter("two_digits",function(t){if(t)return t.toString().length<=1?"0"+t.toString():t.toString()})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n.n(a),r=n(106),i=n.n(r),s=n(3),u=n(4);e.default={name:"countdown-wrapper",data:function(){return{currentImageNumber:0,currentImage:null,imageRunner:null}},created:function(){this.getCountdown(this.$route.params.id),this.currentImage=this.getImageUrl(this.currentCountdown.images),this.runImages()},destroyed:function(){clearInterval(this.imageRunner)},computed:o()({},n.i(s.b)(["currentCountdown"])),methods:o()({},n.i(s.c)(["getCountdown"]),{runImages:function(){var t=this;this.imageRunner=setInterval(function(){t.currentImageNumber===t.currentCountdown.images.length&&(t.currentImageNumber=0),t.currentImage=t.getImageUrl(t.currentCountdown.images),t.currentImageNumber++},6e3)},getImageUrl:function(t){return"url("+t[this.currentImageNumber].path+")"}}),components:{Clock:i.a}},u.a.filter("formatDate",function(t){var e=new Date(t),n=e.getDate();return e.getMonth()+1+"/"+n+"/"+e.getFullYear()})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n.n(a),r=n(5),i=n.n(r),s=n(3);e.default={name:"countdown-form",created:function(){var t=this;i()(document).ready(function(){i()("#date").datepicker().on("changeDate",function(){t.date=i()("#date").val()})})},data:function(){return{name:null,date:null}},computed:o()({},n.i(s.b)(["currentCountdown"])),methods:o()({},n.i(s.c)(["createCountdown"]),{create:function(){var t=this;this.createCountdown({name:this.name,date:this.date}).then(function(){t.$router.push({name:"updateCountdown",params:{id:t.currentCountdown.id}})})}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n.n(a),r=n(3);e.default={name:"countdown-list",created:function(){this.getCountdowns()},computed:o()({},n.i(r.b)(["countdowns"])),methods:o()({},n.i(r.c)(["getCountdowns"]))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(115),o=n.n(a);e.default={name:"dashboard",components:{TopMenu:o.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n.n(a),r=n(5),i=n.n(r),s=n(3),u=n(112),c=n.n(u);e.default={created:function(){var t=this;i()(document).ready(function(){i()("#date").datepicker().on("changeDate",function(){t.date=i()("#date").val()})}),this.name=this.currentCountdown.name,this.date=this.currentCountdown.date,this.getImages()},data:function(){return{name:null,date:null}},computed:o()({},n.i(s.b)(["currentCountdown"]),{formattedDate:function(){var t=new Date(this.date),e=t.getDate();return t.getMonth()+1+"/"+e+"/"+t.getFullYear()}}),methods:o()({},n.i(s.c)(["updateCountdown","getImages"]),{update:function(){this.updateCountdown({id:this.currentCountdown.id,name:this.name,date:this.formattedDate})}}),components:{ImageManager:c.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n.n(a),r=n(20),i=n.n(r),s=n(3),u=n(113),c=n.n(u);e.default={data:function(){return{image:null}},props:{countdown:Object},computed:{imageName:function(){i()(this.image)}},methods:o()({},n.i(s.c)(["uploadImage","removeImage"]),{addImage:function(){this.uploadImage(this.image)}}),components:{FileSelect:c.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"file-select",props:{value:File},methods:{handleFileChange:function(t){this.$emit("input",t.target.files[0])}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n.n(a),r=n(3);e.default={name:"login-page",data:function(){return{login:{email:"doug@email.com",password:"password"}}},methods:o()({},n.i(r.c)(["requestLogin"]),{handleLoginFormSubmit:function(){var t=this;this.requestLogin(this.login).then(function(){t.$router.push({name:"countdownList"})})}}),created:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n.n(a),r=n(3);e.default={name:"top-menu",methods:o()({},n.i(r.c)(["logoutUser"]),{logout:function(){this.logoutUser(),this.$router.push({name:"LoginPage"})}})}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,function(t,e,n){function a(t){n(100)}var o=n(1)(n(55),n(125),a,null,null);t.exports=o.exports},function(t,e,n){function a(t){n(99)}var o=n(1)(n(56),n(123),a,"data-v-756259a7",null);t.exports=o.exports},function(t,e,n){function a(t){n(98)}var o=n(1)(n(57),n(122),a,"data-v-62247802",null);t.exports=o.exports},function(t,e,n){var a=n(1)(n(58),n(117),null,null,null);t.exports=a.exports},function(t,e,n){var a=n(1)(n(59),n(121),null,null,null);t.exports=a.exports},function(t,e,n){function a(t){n(94)}var o=n(1)(n(60),n(116),a,"data-v-00179bd6",null);t.exports=o.exports},function(t,e,n){function a(t){n(97)}var o=n(1)(n(61),n(120),a,"data-v-4b5b4bd8",null);t.exports=o.exports},function(t,e,n){function a(t){n(95)}var o=n(1)(n(62),n(118),a,"data-v-1f90e23a",null);t.exports=o.exports},function(t,e,n){function a(t){n(101)}var o=n(1)(n(63),n(126),a,"data-v-fdb53dd2",null);t.exports=o.exports},function(t,e,n){var a=n(1)(n(64),n(124),null,null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-header"},[n("h3",[t._v("Edit Countdown "+t._s(t.currentCountdown.name))]),t._v(" "),n("router-link",{attrs:{to:{name:"countdownView",params:{id:t.currentCountdown.id}}}},[t._v("View")])],1),t._v(" "),n("form",{staticClass:"form-inline"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"countdown-name"}},[t._v("Countdown Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"countdown-name",placeholder:"Iceland"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"date"}},[t._v("Date")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formattedDate,expression:"formattedDate"}],staticClass:"form-control",attrs:{type:"email",id:"date"},domProps:{value:t.formattedDate},on:{input:function(e){e.target.composing||(t.formattedDate=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-default",attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.update(e)}}},[t._v("Update")])]),t._v(" "),n("hr"),t._v(" "),n("image-manager",{attrs:{countdown:t.currentCountdown}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticClass:"page-header"},[t._v("Your Countdowns")]),t._v(" "),t._l(t.countdowns,function(e){return n("ul",[n("li",[t._v("\n      "+t._s(e.name)+" - "+t._s(e.date)+"\n      "),n("router-link",{attrs:{to:{name:"countdownView",params:{id:e.id}}}},[t._v("View")]),t._v(" -\n      "),n("router-link",{attrs:{to:{name:"updateCountdown",params:{id:e.id}}}},[t._v("Edit")])],1)])})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"file-select"},[n("div",{staticClass:"select-button"},[t.value?n("span",[t._v("Selected File: "+t._s(t.value.name))]):n("span",[t._v("Select File")])]),t._v(" "),n("input",{attrs:{type:"file"},on:{change:t.handleFileChange}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-list"},[n("file-select",{model:{value:t.image,callback:function(e){t.image=e},expression:"image"}}),t._v(" "),n("button",{staticClass:"btn btn-default",on:{click:function(e){t.addImage()}}},[t._v("Add Image")]),t._v(" "),t._l(t.countdown.images,function(e){return n("ul",[n("li",[n("span",{on:{click:function(n){t.removeImage(e.id)}}},[t._v("X")]),t._v(" "),n("img",{attrs:{src:e.path}})])])})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("top-menu"),t._v(" "),n("div",{staticClass:"container"},[n("router-link",{staticClass:"btn btn-sm btn-default",attrs:{to:{name:"createCountdown"}}},[t._v("\n      + Create Countdown\n    ")]),t._v(" "),n("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("form",{staticClass:"form-inline"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"countdown-name"}},[t._v("Countdown Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"countdown-name",placeholder:"Iceland"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"date"}},[t._v("Date")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"email",id:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-default",attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.create(e)}}},[t._v("Create")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header"},[n("h3",[t._v("Create a new Countdown")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"countdown-wrapper",style:{backgroundImage:t.currentImage}},[n("div",{staticClass:"countdown-menu"},[n("router-link",{attrs:{to:{name:"countdownList"}}},[t._v("Countdown List")]),t._v(" -\n    "),n("router-link",{attrs:{to:{name:"updateCountdown",params:{id:t.currentCountdown.id}}}},[t._v("Edit")])],1),t._v(" "),n("div",{staticClass:"countdown-info"},[n("h1",[t._v(t._s(t.currentCountdown.name))]),t._v(" "),n("h3",[t._v(t._s(t._f("formatDate")(t.currentCountdown.date)))])]),t._v(" "),n("div",{staticClass:"clock-wrapper"},[n("clock",{attrs:{"trip-date":t.currentCountdown.date}}),t._v(" "),t._l(t.currentCountdown.images,function(t){return n("div",{staticClass:"hidden"},[n("img",{attrs:{src:t.path}})])})],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-default"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"countdownList"}}},[t._v("Dashboard")])],1),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[n("ul",{staticClass:"nav navbar-nav navbar-right"},[n("li",[n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.logout()}}},[t._v("Logout")])]),t._v(" "),t._m(1)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"dropdown"},[n("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Dropdown "),n("span",{staticClass:"caret"})]),t._v(" "),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("a",{attrs:{href:"#"}},[t._v("Action")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v("Another action")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v("Something else here")])]),t._v(" "),n("li",{staticClass:"divider",attrs:{role:"separator"}}),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v("Separated link")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"countdown"}},[n("div",{staticClass:"block"},[n("div",{staticClass:"number"},[t._v(t._s(t._f("two_digits")(t.timeRemaining.days)))]),t._v(" "),n("div",{staticClass:"text"},[t._v("Days")])]),t._v(" "),n("div",{staticClass:"spacer"},[t._v(":")]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"number"},[t._v(t._s(t._f("two_digits")(t.timeRemaining.hours)))]),t._v(" "),n("div",{staticClass:"text"},[t._v("Hours")])]),t._v(" "),n("div",{staticClass:"spacer"},[t._v(":")]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"number"},[t._v(t._s(t._f("two_digits")(t.timeRemaining.minutes)))]),t._v(" "),n("div",{staticClass:"text"},[t._v("Minutes")])]),t._v(" "),n("div",{staticClass:"spacer"},[t._v(":")]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"number"},[t._v(t._s(t._f("two_digits")(t.timeRemaining.seconds)))]),t._v(" "),n("div",{staticClass:"text"},[t._v("Seconds")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"card card-container"},[n("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),t._v(" "),n("p",{staticClass:"profile-name-card",attrs:{id:"profile-name"}}),t._v(" "),n("form",{staticClass:"form-signin",on:{submit:function(e){e.preventDefault(),t.handleLoginFormSubmit()}}},[n("span",{staticClass:"reauth-email",attrs:{id:"reauth-email"}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||(t.login.email=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||(t.login.password=e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),n("button",{staticClass:"btn btn-lg btn-primary btn-block btn-signin",attrs:{type:"submit"}},[t._v("Sign in")])]),t._v(" "),n("a",{staticClass:"forgot-password",attrs:{href:"#"}},[t._v("\n      Forgot the password?\n    ")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"checkbox",attrs:{id:"remember"}},[n("label",[n("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" Remember me\n        ")])])}]}},,,,function(t,e){}],[49]);
//# sourceMappingURL=app.a0184bff5013d1b84a72.js.map