(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var s=n(13),r=n(2),a="ADD-MESSAGE",c="ADD-NEW-MESSAGE-TEXT",i={messages:[{id:1,message:"Hi!"},{id:2,message:"Whats up?"},{id:3,message:"How is your it camasutra"},{id:4,message:"Yo"},{id:5,message:"Yo yo "},{id:6,message:"pishov naher kozel!"}],dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"}],newMessageText:"mess"},o=function(){return{type:a}},u=function(e){return{type:c,newText:e}};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:return Object(r.a)(Object(r.a)({},e),{},{newMessageText:"",messages:[].concat(Object(s.a)(e.messages),[{id:5,message:e.newMessageText}])});case c:return Object(r.a)(Object(r.a)({},e),{},{newMessageText:t.newText});default:return e}}},112:function(e,t,n){e.exports={user_photo:"Users_user_photo__3pKqQ"}},113:function(e,t,n){e.exports={preloader:"Preloader_preloader__1dHvZ"}},12:function(e,t,n){e.exports={nav:"Nav_nav__1QeKs",item:"Nav_item__27mAa",active:"Nav_active__3WHkV",friends_block:"Nav_friends_block__3TWey",friends_pic:"Nav_friends_pic__2IltO",br:"Nav_br__2t5iw",bg_pic:"Nav_bg_pic__1ghzx"}},126:function(e,t,n){},127:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n(0),a=n.n(r),c=n(51),i=n.n(c),o=(n(126),function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,260)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))}),u=(n.p,n(3)),l=n(4),j=n(7),d=n(8),p=(n(127),n(12)),b=n.n(p),h=n(14),f=n.p+"static/media/picture.f26377d9.svg",O=function(){return Object(s.jsxs)("nav",{className:b.a.nav,children:[Object(s.jsx)("div",{className:b.a.item,children:Object(s.jsx)(h.b,{to:"/profile",activeClassName:b.a.active,children:"Profile"})}),Object(s.jsx)("div",{className:b.a.item,children:Object(s.jsx)(h.b,{to:"/users",activeClassName:b.a.active,children:"Friends"})}),Object(s.jsx)("div",{className:b.a.item,children:Object(s.jsx)(h.b,{to:"/dialogs",activeClassName:b.a.active,children:"Messages"})}),Object(s.jsx)("div",{className:b.a.item,children:Object(s.jsx)(h.b,{to:"/news",activeClassName:b.a.active,children:"News"})}),Object(s.jsx)("div",{className:b.a.item,children:Object(s.jsx)(h.b,{to:"/music",activeClassName:b.a.active,children:"Music"})}),Object(s.jsx)("div",{className:b.a.br}),Object(s.jsx)("div",{className:b.a.item,children:Object(s.jsx)(h.b,{to:"/settings",activeClassName:b.a.active,children:"Settings"})}),Object(s.jsx)("div",{className:b.a.br}),Object(s.jsxs)("div",{className:b.a.friends_block,children:[Object(s.jsx)("div",{children:Object(s.jsx)("p",{children:"Quick message"})}),Object(s.jsxs)("div",{className:b.a.friends_pic,children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:"https://image.freepik.com/free-vector/chinese-girl-avatar_8500-16.jpg",alt:"pic_1"})}),Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:"https://image.freepik.com/free-vector/chinese-girl-avatar_8500-16.jpg",alt:"pic_2"})}),Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:"https://image.freepik.com/free-vector/chinese-girl-avatar_8500-16.jpg",alt:"pic_3"})})]})]}),Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:b.a.bg_pic,src:f,alt:"nice background picture"})})]})},g=n(9),m=(n(135),function(){return Object(s.jsx)("div",{children:"news"})}),x=(n(136),function(){return Object(s.jsx)("div",{children:"Music"})}),v=(n(137),function(){return Object(s.jsx)("div",{children:"Settings"})}),_=n(16),w=n(10),P=n.n(w),k=n(21),y=n(13),N=n(2),S=n(110),T=n.n(S).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"cd49187f-82a8-4960-90f6-9495d499b6b1"}}),C=function(){return T.get("auth/me").then((function(e){return e.data}))},E=function(e){return T.post("auth/login",{email:e.email,password:e.password,rememberMe:!0}).then((function(e){return e.data}))},U=function(){return T.delete("auth/login").then((function(e){return e.data}))},A=function(e){return T.get("profile/"+e)},I=function(e){return T.get("/profile/status/"+e)},F=function(e){return T.put("/profile/status",{status:e})},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return T.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},L=function(e){return T.delete("follow/".concat(e)).then((function(e){return e.data}))},M=function(e){return T.post("follow/".concat(e)).then((function(e){return e.data}))},D="FOLLOW",R="UNFOLLOW",G="SET_USERS",W="SET_CURRENT_PAGE",H="SET_TOTAL_COUNT",B="TOGGLE_IS_FETCHING",V="TOGGLE_IS_FOLLOWING_PROGRESS",Q={users:[],pageSize:10,currentPage:1,totalUsersCount:0,isFetching:!1,followingProgress:[]},X=function(e){return{type:W,currentPage:e}},Y=function(e){return{type:B,isFetching:e}},J=function(e,t){return{type:V,isFetching:e,userId:t}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(N.a)(Object(N.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(N.a)(Object(N.a)({},e),{},{followed:!0}):e}))});case R:return Object(N.a)(Object(N.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(N.a)(Object(N.a)({},e),{},{followed:!1}):e}))});case G:return Object(N.a)(Object(N.a)({},e),{},{users:t.users});case W:return Object(N.a)(Object(N.a)({},e),{},{currentPage:t.currentPage});case H:return Object(N.a)(Object(N.a)({},e),{},{totalUsersCount:t.totalCount});case B:return Object(N.a)(Object(N.a)({},e),{},{isFetching:t.isFetching});case V:return Object(N.a)(Object(N.a)({},e),{},{followingProgress:t.isFetching?[].concat(Object(y.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!==t.userId}))});default:return e}},K=n(56),Z=n(55),$=n(24),ee=n(74),te=n.n(ee),ne=n(111),se=n.n(ne),re=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,i=e.portionSize,o=void 0===i?10:i,u=Math.ceil(t/n),l=[],j=1;j<=u;j++)l.push(j);var d=Math.ceil(u/o),p=Object(r.useState)(1),b=Object($.a)(p,2),h=b[0],f=b[1],O=(h-1)*o+1,g=h*o;return console.log(h),Object(s.jsxs)("div",{children:[h>1&&Object(s.jsx)("button",{onClick:function(){f(h-1)},children:"PREV"}),l.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(s.jsx)("span",{className:se()(Object(Z.a)({},te.a.selected,a===e),te.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),d>h&&Object(s.jsx)("button",{onClick:function(){f(h+1)},children:"NEXT"})]})},ae=n(112),ce=n.n(ae),ie=n.p+"static/media/without_avatar.bb32b6a3.jpg",oe=function(e){var t=e.user,n=Object(K.a)(e,["user"]);return Object(s.jsxs)("div",{children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(h.b,{to:"/profile/"+t.id,children:Object(s.jsx)("img",{src:null!=t.photos.small?t.photos.small:ie,alt:"ava",className:ce.a.user_photo})})}),Object(s.jsx)("div",{children:t.followed?Object(s.jsx)("button",{disabled:n.followingProgress.some((function(e){return e===t.id})),onClick:function(){n.unFollowThunk(t.id)},children:"Unfollow"}):Object(s.jsx)("button",{disabled:n.followingProgress.some((function(e){return e===t.id})),onClick:function(){n.followThunk(t.id)},children:"Follow"})})]}),Object(s.jsxs)("span",{children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("div",{children:t.name}),Object(s.jsx)("div",{children:t.status})]}),Object(s.jsxs)("span",{children:[Object(s.jsx)("div",{children:"u.location.country"}),Object(s.jsx)("div",{children:"u.location.city"})]})]})]})},ue=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.pageSize,c=e.users,i=Object(K.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return Object(s.jsxs)("div",{children:[Object(s.jsx)(re,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:a}),Object(s.jsx)("div",{children:c.map((function(e){return Object(s.jsx)(oe,{user:e,followingProgress:i.followingProgress,unFollowThunk:i.unFollowThunk,followThunk:i.followThunk},e.id.toString())}))})]})},le=n.p+"static/media/preloader.4c15e740.svg",je=n(113),de=n.n(je),pe=function(e){return Object(s.jsxs)("div",{children:[" something wrong",Object(s.jsx)("img",{src:le,className:de.a.preloader})]})},be=n(52),he=n(23),fe=n(114),Oe=Object(fe.a)((function(e){return e.usersPage.users}),(function(e){return e})),ge=function(e){return e.usersPage.pageSize},me=function(e){return e.usersPage.totalUsersCount},xe=function(e){return e.usersPage.currentPage},ve=function(e){return e.usersPage.isFetching},_e=function(e){return e.usersPage.followingProgress},we=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsersThunk(t,n)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsersThunk(t,n)}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[this.props.isFetching?Object(s.jsx)(pe,{}):null,Object(s.jsx)(ue,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,followingProgress:this.props.followingProgress,followThunk:this.props.followThunk,unFollowThunk:this.props.unFollowThunk})]})}}]),n}(a.a.Component),Pe={setCurrentPage:X,toggleIsFollowingProgress:J,getUsersThunk:function(e,t){return function(){var n=Object(k.a)(P.a.mark((function n(s){var r;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(Y(!0)),s(X(e)),n.next=4,z(e,t);case 4:r=n.sent,s(Y(!1)),s((c=r.items,{type:G,users:c})),s((a=r.totalCount,{type:H,totalCount:a}));case 8:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()},followThunk:function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(J(!0,e)),t.next=3,M(e);case 3:0===t.sent.resultCode&&n({type:D,userId:e}),n(J(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollowThunk:function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(J(!0,e)),t.next=3,L(e);case 3:0===t.sent.resultCode&&n({type:R,userId:e}),n(J(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},ke=Object(he.d)(Object(_.b)((function(e){return{users:Oe(e),pageSize:ge(e),totalUsersCount:me(e),currentPage:xe(e),isFetching:ve(e),followingProgress:_e(e)}}),Pe),be.a)(we),ye=n(41),Ne=n.n(ye),Se=n.p+"static/media/ava.c3bc0a10.svg",Te=function(e){var t=Object(r.useState)(!1),n=Object($.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(e.status),o=Object($.a)(i,2),u=o[0],l=o[1];Object(r.useEffect)((function(){l(e.status)}),[e.status]);return Object(s.jsxs)("div",{children:[!a&&Object(s.jsx)("div",{children:Object(s.jsx)("p",{onDoubleClick:function(){c(!0)},children:e.status||"no-status"})}),a&&Object(s.jsx)("div",{children:Object(s.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},value:u,autoFocus:!0,type:"text",onBlur:function(){c(!1),e.updateUserStatus(u)}})})]})},Ce=function(e){return Object(s.jsxs)("div",{className:Ne.a.about,children:[Object(s.jsx)("div",{className:Ne.a.image,children:Object(s.jsx)("img",{src:e.profile.photos.large?e.profile.photos.large:Se,alt:"ava",className:Ne.a.ava})}),Object(s.jsxs)("div",{className:Ne.a.description,children:[Object(s.jsx)("h1",{children:e.profile.fullName}),Object(s.jsx)(Te,{status:e.status,updateUserStatus:e.updateUserStatus})]})]})},Ee="ADD-POST",Ue="ADD-NEW-POST-TEXT",Ae="SET_USER_PROFILE",Ie="SET_USER_STATUS",Fe="DELETE_POST",ze={posts:[{id:1,message:"Hi, how are you?",likes:1},{id:2,message:"It's my first post",likes:3},{id:3,message:"It's my first post",likes:3}],newPostText:"Write something you think about",profile:null,status:""},Le=function(e){return{type:Ie,status:e}},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:return Object(N.a)(Object(N.a)({},e),{},{posts:[].concat(Object(y.a)(e.posts),[{id:5,message:e.newPostText,likes:0}]),newPostText:""});case Ue:return Object(N.a)(Object(N.a)({},e),{},{newPostText:t.newText});case Ae:return Object(N.a)(Object(N.a)({},e),{},{profile:t.profile});case Ie:return Object(N.a)(Object(N.a)({},e),{},{status:t.status});case Fe:return Object(N.a)(Object(N.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}},De=n(60),Re=n.n(De),Ge=n(36),We=n.n(Ge),He=function(e){return Object(s.jsxs)("div",{className:We.a.item,children:[Object(s.jsx)("img",{src:Se,alt:"avatar"}),Object(s.jsxs)("div",{className:We.a.post_text,children:[Object(s.jsx)("p",{className:We.a.name,children:"Name"}),Object(s.jsx)("div",{className:We.a.message,children:e.message}),Object(s.jsxs)("div",{className:We.a.likes,children:[Object(s.jsx)("span",{children:"Like"})," ",e.likes]})]})]})},Be=a.a.memo((function(e){var t=a.a.createRef(),n=e.posts.map((function(e){return Object(s.jsx)(He,{likes:e.likes,message:e.message},e.id.toString())}));return Object(s.jsxs)("div",{className:Re.a.my_posts_div,children:[Object(s.jsx)("h2",{children:"My posts"}),Object(s.jsxs)("div",{className:Re.a.post_area,children:[Object(s.jsx)("h3",{children:"Create a new post"}),Object(s.jsx)("textarea",{onChange:function(){var n=t.current.value;e.addNewPostText(n)},ref:t,value:e.newPostText}),Object(s.jsx)("button",{onClick:function(){e.addPost()},children:"Post"})]}),Object(s.jsx)("div",{className:Re.a.posts,children:n})]})})),Ve=Object(_.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addNewPostText:function(t){e(function(e){return{type:Ue,newText:e}}(t))},addPost:function(){e({type:Ee})}}}))(Be),Qe=function(e){return e.profile?Object(s.jsxs)("main",{children:[Object(s.jsx)(Ce,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),Object(s.jsx)(Ve,{})]}):Object(s.jsx)(pe,{})},Xe=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return Object(s.jsx)(Qe,Object(N.a)(Object(N.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))}}]),n}(a.a.Component),Ye=Object(he.d)(Object(_.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n){var s;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e);case 2:s=t.sent,n((r=s.data,{type:Ae,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n){var s;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(e);case 2:s=t.sent,n(Le(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(e);case 2:0===t.sent.data.resultCode&&n(Le(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),g.f,be.a)(Xe),Je=n(42),qe=n.n(Je),Ke=n.p+"static/media/icon.b169083b.svg",Ze=function(e){return Object(s.jsxs)("header",{className:qe.a.header,children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{src:Ke,alt:"logo"}),Object(s.jsx)("h2",{className:qe.a.social,children:"Social network"})]}),Object(s.jsx)("div",{className:qe.a.loginBlock,children:e.isAuth?Object(s.jsxs)("div",{children:[e.login," ",Object(s.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(s.jsx)(h.b,{to:"/login",className:qe.a.loginLink,children:"Login"})})]})},$e="SET_USER_DATA",et="SHOW_WRONG_EMAIL_OR_PASSWORD",tt={userId:null,email:null,login:null,isFetching:!1,isAuth:!1,correctPassword:null},nt=function(e,t,n,s,r){return{type:$e,payload:{userId:e,email:t,login:n,isAuth:s,correctPassword:r}}},st=function(){return function(){var e=Object(k.a)(P.a.mark((function e(t){var n,s,r,a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:0===(n=e.sent).resultCode&&(s=n.data,r=s.id,a=s.email,c=s.login,t(nt(r,a,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $e:return Object(N.a)(Object(N.a)({},e),t.payload);case et:return Object(N.a)(Object(N.a)({},e),{},{correctPassword:!0});default:return e}},at=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)(Ze,Object(N.a)({},this.props))}}]),n}(a.a.Component),ct=Object(_.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(k.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:0===e.sent.resultCode&&t(nt(null,null,null,!1,null));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(at),it=n(76),ot=n(62),ut=n(61),lt=n.n(ut),jt=Object(_.b)((function(e){return{isAuth:e.auth.isAuth,correctPassword:e.auth.correctPassword}}),{loginThunkCreator:function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:0===t.sent.resultCode?n(st()):n({type:et});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=ot.a().shape({email:ot.b().email("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u044b\u0439 email").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),password:ot.b().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e")});return e.isAuth?Object(s.jsx)(g.a,{to:"profile"}):Object(s.jsx)("div",{children:Object(s.jsx)(it.b,{initialValues:{email:"",password:"",rememberMe:!1},validateOnBlur:!0,onSubmit:function(t){e.loginThunkCreator(t)},validationSchema:t,children:function(t){var n=t.values,r=t.errors,a=t.touched,c=t.handleChange,i=t.handleBlur,o=t.isValid,u=t.handleSubmit,l=t.dirty;return Object(s.jsxs)("form",{onSubmit:u,children:[Object(s.jsx)("input",{className:lt.a.login_input,placeholder:"email",type:"text",name:"email",onChange:c,onBlur:i,value:n.email}),Object(s.jsx)("p",{children:r.email&&a.email&&r.email}),Object(s.jsx)("input",{className:lt.a.login_input,placeholder:"password",type:"password",name:"password",onChange:c,onBlur:i,value:n.password}),Object(s.jsxs)("p",{children:[r.password&&a.password&&r.password,e.correctPassword?"Wrong email or password":null]}),Object(s.jsx)(it.a,{type:"checkbox",name:"rememberMe"}),Object(s.jsx)("label",{htmlFor:"rememberMe",children:"Remember Me"}),Object(s.jsx)("button",{type:"submit",disabled:!o&&!l,onClick:u,children:"Login"})]})}})})})),dt=function(e){return Object(s.jsxs)("div",{className:lt.a.login_form,children:[Object(s.jsx)("h1",{children:"Login"}),Object(s.jsx)(jt,{})]})},pt="SET_APP",bt={initialized:!1},ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pt:return Object(N.a)(Object(N.a)({},e),{},{initialized:!0});default:return e}},ft=n(107),Ot=n(120),gt=Object(he.c)({profilePage:Me,messagesPage:ft.c,usersPage:q,auth:rt,app:ht}),mt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.d,xt=Object(he.e)(gt,mt(Object(he.a)(Ot.a))),vt=a.a.lazy((function(){return n.e(3).then(n.bind(null,261))})),_t=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"app-wrapper",children:[Object(s.jsx)(ct,{}),Object(s.jsx)(O,{}),Object(s.jsx)("div",{className:"app-wrapper-content",children:Object(s.jsxs)(r.Suspense,{fallback:Object(s.jsx)(pe,{}),children:[Object(s.jsx)(g.b,{path:"/login",render:function(){return Object(s.jsx)(dt,{})}}),Object(s.jsx)(g.b,{path:"/profile/:userId?",render:function(){return Object(s.jsx)(Ye,{})}}),Object(s.jsx)(g.b,{path:"/dialogs",render:function(){return Object(s.jsx)(vt,{})}}),Object(s.jsx)(g.b,{path:"/users",render:function(){return Object(s.jsx)(ke,{})}}),Object(s.jsx)(g.b,{path:"/news",component:m}),Object(s.jsx)(g.b,{path:"/music",component:x}),Object(s.jsx)(g.b,{path:"/settings",component:v})]})})]})}):Object(s.jsx)(pe,{})}}]),n}(a.a.Component),wt=Object(_.b)((function(e){return{initialized:e.app.initialized}}),{setAuthThunk:st,initializeApp:function(){return function(e){var t=e(st());Promise.all([t]).then((function(){e({type:pt})}))}}})(_t),Pt=function(){return Object(s.jsx)(h.a,{basename:"http://NickPaimon.github.io/react_social",children:Object(s.jsx)(_.a,{store:xt,children:Object(s.jsx)(wt,{})})})};i.a.render(Object(s.jsx)(Pt,{}),document.getElementById("root")),o()},36:function(e,t,n){e.exports={item:"Post_item__3Rggc",post_text:"Post_post_text__3GC9m",message:"Post_message__wPc1w",name:"Post_name__3lBR8",likes:"Post_likes__pYep4"}},41:function(e,t,n){e.exports={about:"ProfileInfo_about__xOaeM",image:"ProfileInfo_image__hYHGz",description:"ProfileInfo_description__3pDDN",ava:"ProfileInfo_ava__3psv2"}},42:function(e,t,n){e.exports={header:"Header_header__3i4yG",social:"Header_social__1TakQ",loginBlock:"Header_loginBlock__VCJZn",loginLink:"Header_loginLink__2k-4x"}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var s=n(2),r=n(1),a=n(3),c=n(4),i=n(7),o=n(8),u=n(0),l=n.n(u),j=n(9),d=n(16),p=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(i.a)(u,t);var n=Object(o.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(c.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(r.jsx)(e,Object(s.a)({},this.props)):Object(r.jsx)(j.a,{to:"/login"})}}]),u}(l.a.Component);return Object(d.b)(p)(t)}},60:function(e,t,n){e.exports={post_area:"MyPosts_post_area__3UzAx",posts:"MyPosts_posts__1traG"}},61:function(e,t,n){e.exports={login_form:"Login_login_form__2P73r",login_input:"Login_login_input__Q4hla",login_error:"Login_login_error__28Fzc"}},74:function(e,t,n){e.exports={pageNumber:"Paginator_pageNumber__1CWjJ",selected:"Paginator_selected__PM1Q5"}}},[[256,1,2]]]);
//# sourceMappingURL=main.7c047a82.chunk.js.map