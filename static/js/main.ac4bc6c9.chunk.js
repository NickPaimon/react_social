(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{11:function(e,t,n){e.exports={about:"ProfileInfo_about__xOaeM",image:"ProfileInfo_image__hYHGz",description:"ProfileInfo_description__3pDDN",mainPhoto:"ProfileInfo_mainPhoto__1EX94",profileTitles:"ProfileInfo_profileTitles__11HAl",profileInfo:"ProfileInfo_profileInfo__3Ns_7",infoInputs:"ProfileInfo_infoInputs__2w9Mt"}},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n(14),s=n(2),r="ADD-MESSAGE",c="ADD-NEW-MESSAGE-TEXT",i={messages:[{id:1,message:"Hi!"},{id:2,message:"Whats up?"},{id:3,message:"How is your it camasutra"},{id:4,message:"Yo"},{id:5,message:"Yo yo "}],dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"}],newMessageText:"mess"},o=function(){return{type:r}},u=function(e){return{type:c,newText:e}};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:return Object(s.a)(Object(s.a)({},e),{},{newMessageText:"",messages:[].concat(Object(a.a)(e.messages),[{id:5,message:e.newMessageText}])});case c:return Object(s.a)(Object(s.a)({},e),{},{newMessageText:t.newText});default:return e}}},115:function(e,t,n){e.exports={preloader:"Preloader_preloader__1dHvZ"}},128:function(e,t,n){},129:function(e,t,n){},13:function(e,t,n){e.exports={nav:"Nav_nav__1QeKs",item:"Nav_item__27mAa",active:"Nav_active__3WHkV",friends_block:"Nav_friends_block__3TWey",friends_pic:"Nav_friends_pic__2IltO",br:"Nav_br__2t5iw",bg_pic:"Nav_bg_pic__1ghzx"}},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},258:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),r=n.n(s),c=n(55),i=n.n(c),o=(n(128),function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,262)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))}),u=(n.p,n(3)),l=n(4),p=n(8),j=n(9),d=(n(129),n(13)),f=n.n(d),b=n(16),h=n.p+"static/media/picture.f26377d9.svg",O=function(){return Object(a.jsxs)("nav",{className:f.a.nav,children:[Object(a.jsx)("div",{className:f.a.item,children:Object(a.jsx)(b.b,{to:"/profile",activeClassName:f.a.active,children:"Profile"})}),Object(a.jsx)("div",{className:f.a.item,children:Object(a.jsx)(b.b,{to:"/users",activeClassName:f.a.active,children:"Friends"})}),Object(a.jsx)("div",{className:f.a.item,children:Object(a.jsx)(b.b,{to:"/dialogs",activeClassName:f.a.active,children:"Messages"})}),Object(a.jsx)("div",{className:f.a.item,children:Object(a.jsx)(b.b,{to:"/news",activeClassName:f.a.active,children:"News"})}),Object(a.jsx)("div",{className:f.a.item,children:Object(a.jsx)(b.b,{to:"/music",activeClassName:f.a.active,children:"Music"})}),Object(a.jsx)("div",{className:f.a.br}),Object(a.jsx)("div",{className:f.a.item,children:Object(a.jsx)(b.b,{to:"/settings",activeClassName:f.a.active,children:"Settings"})}),Object(a.jsx)("div",{className:f.a.br}),Object(a.jsxs)("div",{className:f.a.friends_block,children:[Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"Quick message"})}),Object(a.jsxs)("div",{className:f.a.friends_pic,children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:"https://image.freepik.com/free-vector/chinese-girl-avatar_8500-16.jpg",alt:"pic_1"})}),Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:"https://image.freepik.com/free-vector/chinese-girl-avatar_8500-16.jpg",alt:"pic_2"})}),Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:"https://image.freepik.com/free-vector/chinese-girl-avatar_8500-16.jpg",alt:"pic_3"})})]})]}),Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:f.a.bg_pic,src:h,alt:"nice background picture"})})]})},g=n(10),m=(n(137),function(){return Object(a.jsx)("div",{children:"news"})}),x=(n(138),function(){return Object(a.jsx)("div",{children:"Music"})}),v=(n(139),function(){return Object(a.jsx)("div",{children:"Settings"})}),_=n(18),w=n(6),P=n.n(w),k=n(19),N=n(14),T=n(2),y=n(113),S=n.n(y).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"cd49187f-82a8-4960-90f6-9495d499b6b1"}}),C=function(){return S.get("auth/me").then((function(e){return e.data}))},U=function(e){return S.post("auth/login",{email:e.email,password:e.password,rememberMe:e.rememberMe,captcha:e.captcha}).then((function(e){return e.data}))},I=function(){return S.delete("auth/login").then((function(e){return e.data}))},E=function(e){return S.get("profile/"+e)},A=function(e){return S.get("/profile/status/"+e)},F=function(e){return S.put("/profile/status",{status:e})},M=function(e){var t=new FormData;return t.append("image",e),S.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},D=function(e){return S.put("/profile",e)},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return S.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},z=function(e){return S.delete("follow/".concat(e)).then((function(e){return e.data}))},B=function(e){return S.post("follow/".concat(e)).then((function(e){return e.data}))},R=function(){return S.get("security/get-captcha-url")},H="FOLLOW",W="UNFOLLOW",G="SET_USERS",J="SET_CURRENT_PAGE",V="SET_TOTAL_COUNT",Y="TOGGLE_IS_FETCHING",X="TOGGLE_IS_FOLLOWING_PROGRESS",Q={users:[],pageSize:10,currentPage:1,totalUsersCount:0,isFetching:!1,followingProgress:[]},q=function(e){return{type:J,currentPage:e}},K=function(e){return{type:Y,isFetching:e}},Z=function(e,t){return{type:X,isFetching:e,userId:t}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(T.a)(Object(T.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(T.a)(Object(T.a)({},e),{},{followed:!0}):e}))});case W:return Object(T.a)(Object(T.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(T.a)(Object(T.a)({},e),{},{followed:!1}):e}))});case G:return Object(T.a)(Object(T.a)({},e),{},{users:t.users});case J:return Object(T.a)(Object(T.a)({},e),{},{currentPage:t.currentPage});case V:return Object(T.a)(Object(T.a)({},e),{},{totalUsersCount:t.totalCount});case Y:return Object(T.a)(Object(T.a)({},e),{},{isFetching:t.isFetching});case X:return Object(T.a)(Object(T.a)({},e),{},{followingProgress:t.isFetching?[].concat(Object(N.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!==t.userId}))});default:return e}},ee=n(38),te=n(59),ne=n(15),ae=n(39),se=n.n(ae),re=n(114),ce=n.n(re),ie=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,c=e.onPageChanged,i=e.portionSize,o=void 0===i?10:i,u=Math.ceil(t/n),l=[],p=1;p<=u;p++)l.push(p);var j=Math.ceil(u/o),d=Object(s.useState)(1),f=Object(ne.a)(d,2),b=f[0],h=f[1],O=(b-1)*o+1,g=b*o;return Object(a.jsxs)("div",{className:se.a.paginator,children:[b>1&&Object(a.jsx)("button",{onClick:function(){h(b-1)},children:"PREV"}),l.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(a.jsx)("span",{className:ce()(Object(te.a)({},se.a.selected,r===e),se.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),j>b&&Object(a.jsx)("button",{onClick:function(){h(b+1)},children:"NEXT"}),Object(a.jsx)("span",{className:se.a.totalTitle,children:"Total Users Count: "}),Object(a.jsx)("span",{className:se.a.total,children:t})]})},oe=n(32),ue=n.n(oe),le=n.p+"static/media/without_avatar.bb32b6a3.jpg",pe=function(e){var t=e.user,n=Object(ee.a)(e,["user"]);return Object(a.jsxs)("div",{className:ue.a.user,children:[Object(a.jsxs)("div",{className:ue.a.photoButtonBlock,children:[Object(a.jsx)(b.b,{to:"/profile/"+t.id,children:Object(a.jsx)("img",{src:null!=t.photos.small?t.photos.small:le,alt:"ava",className:ue.a.user_photo})}),t.followed?Object(a.jsx)("button",{disabled:n.followingProgress.some((function(e){return e===t.id})),onClick:function(){n.unFollowThunk(t.id)},children:"Unfollow"}):Object(a.jsx)("button",{disabled:n.followingProgress.some((function(e){return e===t.id})),onClick:function(){n.followThunk(t.id)},children:"Follow"})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:ue.a.userTitle,children:"User Name: "}),t.name]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:ue.a.userTitle,children:"User Status: "}),t.status]})]})]})},je=function(e){var t=e.currentPage,n=e.onPageChanged,s=e.totalUsersCount,r=e.pageSize,c=e.users,i=Object(ee.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return Object(a.jsxs)("div",{className:ue.a.usersBlock,children:[Object(a.jsx)(ie,{currentPage:t,onPageChanged:n,totalItemsCount:s,pageSize:r}),Object(a.jsx)("div",{children:c.map((function(e){return Object(a.jsx)(pe,{user:e,followingProgress:i.followingProgress,unFollowThunk:i.unFollowThunk,followThunk:i.followThunk},e.id.toString())}))})]})},de=n.p+"static/media/preloader.4c15e740.svg",fe=n(115),be=n.n(fe),he=function(e){return Object(a.jsx)("img",{src:de,className:be.a.preloader})},Oe=n(56),ge=n(25),me=n(116),xe=Object(me.a)((function(e){return e.usersPage.users}),(function(e){return e})),ve=function(e){return e.usersPage.pageSize},_e=function(e){return e.usersPage.totalUsersCount},we=function(e){return e.usersPage.currentPage},Pe=function(e){return e.usersPage.isFetching},ke=function(e){return e.usersPage.followingProgress},Ne=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsersThunk(t,n)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsersThunk(t,n)}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[this.props.isFetching?Object(a.jsx)(he,{}):null,Object(a.jsx)(je,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,followingProgress:this.props.followingProgress,followThunk:this.props.followThunk,unFollowThunk:this.props.unFollowThunk})]})}}]),n}(r.a.Component),Te={setCurrentPage:q,toggleIsFollowingProgress:Z,getUsersThunk:function(e,t){return function(){var n=Object(k.a)(P.a.mark((function n(a){var s;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(K(!0)),a(q(e)),n.next=4,L(e,t);case 4:s=n.sent,a(K(!1)),a((c=s.items,{type:G,users:c})),a((r=s.totalCount,{type:V,totalCount:r}));case 8:case"end":return n.stop()}var r,c}),n)})));return function(e){return n.apply(this,arguments)}}()},followThunk:function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Z(!0,e)),t.next=3,B(e);case 3:0===t.sent.resultCode&&n({type:H,userId:e}),n(Z(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollowThunk:function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Z(!0,e)),t.next=3,z(e);case 3:0===t.sent.resultCode&&n({type:W,userId:e}),n(Z(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},ye=Object(ge.d)(Object(_.b)((function(e){return{users:xe(e),pageSize:ve(e),totalUsersCount:_e(e),currentPage:we(e),isFetching:Pe(e),followingProgress:ke(e)}}),Te),Oe.a)(Ne),Se=n(11),Ce=n.n(Se),Ue=n.p+"static/media/mainAvatar.b8f30eb5.png",Ie=n(63),Ee=n.n(Ie),Ae=function(e){var t=Object(s.useState)(!1),n=Object(ne.a)(t,2),r=n[0],c=n[1],i=Object(s.useState)(e.status),o=Object(ne.a)(i,2),u=o[0],l=o[1];Object(s.useEffect)((function(){l(e.status)}),[e.status]);return Object(a.jsxs)("div",{children:[!r&&Object(a.jsx)("div",{children:Object(a.jsxs)("p",{className:Ee.a.status,onDoubleClick:function(){c(!0)},children:["Status: ",Object(a.jsx)("span",{className:Ee.a.profileInfo,children:e.status||"no-status"})]})}),r&&Object(a.jsx)("div",{children:Object(a.jsx)("input",{className:Ee.a.status_input,onChange:function(e){l(e.currentTarget.value)},value:u,autoFocus:!0,type:"text",onBlur:function(){c(!1),e.updateUserStatus(u)}})})]})},Fe=function(e){var t=e.profile,n=e.saveProfileData,r=e.leaveEditMode,c=Object(s.useState)(t.fullName),i=Object(ne.a)(c,2),o=i[0],u=i[1],l=Object(s.useState)(t.lookingForAJob),p=Object(ne.a)(l,2),j=p[0],d=p[1],f=Object(s.useState)(t.aboutMe),b=Object(ne.a)(f,2),h=b[0],O=b[1],g=Object(s.useState)(t.lookingForAJobDescription),m=Object(ne.a)(g,2),x=m[0],v=m[1];return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:Ce.a.profileTitles,children:"Full Name:"}),Object(a.jsx)("input",{className:Ce.a.infoInputs,type:"text",value:o,onChange:function(e){u(e.currentTarget.value)}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:Ce.a.profileTitles,children:"Looking for a job : "}),Object(a.jsxs)("span",{onChange:function(e){d(e.target.value)},children:[Object(a.jsx)("input",{type:"radio",value:!0,defaultChecked:!0===j,name:"needJob"}),"Yes",Object(a.jsx)("input",{type:"radio",value:!1,defaultChecked:!1===j,name:"needJob"}),"No"]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:Ce.a.profileTitles,children:"My professional skills :"}),Object(a.jsx)("input",{className:Ce.a.infoInputs,type:"text",value:x,onChange:function(e){v(e.currentTarget.value)}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:Ce.a.profileTitles,children:"About me:"}),Object(a.jsx)("input",{className:Ce.a.infoInputs,type:"text",value:h,onChange:function(e){O(e.currentTarget.value)}})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(){n({aboutMe:h,lookingForAJob:j,lookingForAJobDescription:x,fullName:o}),r()},children:"Save"})})]})},Me=function(e){var t=e.profile,n=e.isOwner,s=e.goToEditMode,r=Object(ee.a)(e,["profile","isOwner","goToEditMode"]);return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsxs)("p",{className:Ce.a.profileTitles,children:["Full Name: ",Object(a.jsx)("span",{className:Ce.a.profileInfo,children:t.fullName})]})}),Object(a.jsx)("div",{children:Object(a.jsx)(Ae,{status:r.status,updateUserStatus:r.updateUserStatus})}),Object(a.jsx)("div",{children:Object(a.jsxs)("p",{className:Ce.a.profileTitles,children:["Looking for a job : ",Object(a.jsx)("span",{className:Ce.a.profileInfo,children:t.lookingForAJob?"Yes":"No"})]})}),Object(a.jsx)("div",{children:Object(a.jsxs)("p",{className:Ce.a.profileTitles,children:["My professional skills: ",Object(a.jsx)("span",{className:Ce.a.profileInfo,children:t.lookingForAJobDescription})]})}),Object(a.jsx)("div",{children:Object(a.jsxs)("p",{className:Ce.a.profileTitles,children:["About me: ",Object(a.jsx)("span",{className:Ce.a.profileInfo,children:t.aboutMe})]})}),Object(a.jsx)("div",{children:n&&Object(a.jsx)("button",{onClick:s,children:"Add"})})]})},De=function(e){var t=Object(s.useState)(!1),n=Object(ne.a)(t,2),r=n[0],c=n[1];return Object(a.jsxs)("div",{className:Ce.a.about,children:[Object(a.jsxs)("div",{className:Ce.a.image,children:[Object(a.jsx)("img",{src:e.profile.photos.large||Ue,alt:"ava",className:Ce.a.mainPhoto}),e.isOwner&&r&&Object(a.jsx)("input",{type:"file",className:Ce.a.updatePhoto,onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})]}),Object(a.jsx)("div",{className:Ce.a.description,children:r?Object(a.jsx)(Fe,{leaveEditMode:function(){c(!1)},saveProfileData:e.saveProfileData,profile:e.profile}):Object(a.jsx)(Me,{goToEditMode:function(){c(!0)},profile:e.profile,isOwner:e.isOwner,status:e.status,updateUserStatus:e.updateUserStatus})})]})},Le="ADD-POST",ze="ADD-NEW-POST-TEXT",Be="SET_USER_PROFILE",Re="SET_USER_STATUS",He="DELETE_POST",We="SAVE_PHOTO_SUCCESS",Ge={posts:[{id:1,message:"Hi, how are you?",likes:1},{id:2,message:"It's my first post",likes:3},{id:3,message:"It's my first post",likes:3}],newPostText:"",profile:null,status:""},Je=function(e){return{type:Re,status:e}},Ve=function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n){var a;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:a=t.sent,n((s=a.data,{type:Be,profile:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Le:return Object(T.a)(Object(T.a)({},e),{},{posts:[].concat(Object(N.a)(e.posts),[{id:5,message:e.newPostText,likes:0}]),newPostText:""});case ze:return Object(T.a)(Object(T.a)({},e),{},{newPostText:t.newText});case Be:return Object(T.a)(Object(T.a)({},e),{},{profile:t.profile});case Re:return Object(T.a)(Object(T.a)({},e),{},{status:t.status});case He:return Object(T.a)(Object(T.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case We:return Object(T.a)(Object(T.a)({},e),{},{profile:Object(T.a)(Object(T.a)({},e.profile),{},{photos:t.photos})});default:return e}},Xe=n(64),Qe=n.n(Xe),qe=n(40),Ke=n.n(qe),Ze=n.p+"static/media/ava.c3bc0a10.svg",$e=function(e){return Object(a.jsxs)("div",{className:Ke.a.item,children:[Object(a.jsx)("img",{src:Ze,alt:"avatar"}),Object(a.jsxs)("div",{className:Ke.a.post_text,children:[Object(a.jsx)("p",{className:Ke.a.name,children:"Name"}),Object(a.jsx)("div",{className:Ke.a.message,children:e.message}),Object(a.jsxs)("div",{className:Ke.a.likes,children:[Object(a.jsx)("span",{children:"Like"})," ",e.likes]})]})]})},et=r.a.memo((function(e){var t=r.a.createRef(),n=e.posts.map((function(e){return Object(a.jsx)($e,{likes:e.likes,message:e.message},e.id.toString())}));return Object(a.jsxs)("div",{className:Qe.a.my_posts_div,children:[Object(a.jsx)("h2",{children:"My posts"}),Object(a.jsxs)("div",{className:Qe.a.post_area,children:[Object(a.jsx)("h3",{children:"Create a new post"}),Object(a.jsx)("textarea",{onChange:function(){var n=t.current.value;e.addNewPostText(n)},ref:t,value:e.newPostText,placeholder:"Write something you think about"}),Object(a.jsx)("button",{onClick:function(){e.addPost()},children:"Post"})]}),Object(a.jsx)("div",{className:Qe.a.posts,children:n})]})})),tt=Object(_.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addNewPostText:function(t){e(function(e){return{type:ze,newText:e}}(t))},addPost:function(){e({type:Le})}}}))(et),nt=n(77),at=n.n(nt),st=function(e){var t=e.contactTitle,n=e.contactValue;return Object(a.jsx)("div",{children:Object(a.jsxs)("p",{className:at.a.contacts,children:[t,": ",n]})})},rt=function(e){return e.profile?Object(a.jsxs)("main",{children:[Object(a.jsx)(De,{saveProfileData:e.saveProfileData,savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),Object(a.jsx)(tt,{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:at.a.contactsTitle,children:"Contacts: "})," ",Object.keys(e.profile.contacts).map((function(t){return Object(a.jsx)(st,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))]})]}):Object(a.jsx)(he,{})},ct=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(a.jsx)(rt,Object(T.a)(Object(T.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto,saveProfileData:this.props.saveProfileData}))}}]),n}(r.a.Component),it=Object(ge.d)(Object(_.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:Ve,getUserStatus:function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n){var a;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e);case 2:a=t.sent,n(Je(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(e);case 2:0===t.sent.data.resultCode&&n(Je(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n){var a;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e);case 2:0===(a=t.sent).data.resultCode&&n((s=a.data.data.photos,{type:We,photos:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfileData:function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n,a){var s;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=a().auth.userId,t.next=3,D(e);case 3:0===t.sent.data.resultCode&&n(Ve(s));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),g.f,Oe.a)(ct),ot=n(45),ut=n.n(ot),lt=n.p+"static/media/icon.b169083b.svg",pt=function(e){return Object(a.jsxs)("header",{className:ut.a.header,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:lt,alt:"logo"}),Object(a.jsx)("h2",{className:ut.a.social,children:"Social network"})]}),Object(a.jsx)("div",{className:ut.a.loginBlock,children:e.isAuth?Object(a.jsxs)("div",{children:[e.login," ",Object(a.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(a.jsx)(b.b,{to:"/login",className:ut.a.loginLink,children:"Login"})})]})},jt="SET_USER_DATA",dt="SHOW_WRONG_EMAIL_OR_PASSWORD",ft="GET_CAPTCHA_URL_SUCCESS",bt={userId:null,email:null,login:null,isFetching:!1,isAuth:!1,correctPassword:null,captchaUrl:null},ht=function(e,t,n,a,s){return{type:jt,payload:{userId:e,email:t,login:n,isAuth:a,correctPassword:s}}},Ot=function(e){return{type:ft,payload:e}},gt=function(){return function(){var e=Object(k.a)(P.a.mark((function e(t){var n,a,s,r,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:0===(n=e.sent).resultCode&&(a=n.data,s=a.id,r=a.email,c=a.login,t(ht(s,r,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},mt=function(){return function(){var e=Object(k.a)(P.a.mark((function e(t){var n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:n=e.sent,a=n.data.url,t(Ot(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},xt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case jt:return Object(T.a)(Object(T.a)({},e),t.payload);case dt:return Object(T.a)(Object(T.a)({},e),{},{correctPassword:!0});case ft:return Object(T.a)(Object(T.a)({},e),{},{captchaUrl:t.payload});default:return e}},vt=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(pt,Object(T.a)({},this.props))}}]),n}(r.a.Component),_t=Object(_.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(k.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:0===e.sent.resultCode&&t(ht(null,null,null,!1,null));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(vt),wt=n(79),Pt=n(65),kt=n(46),Nt=n.n(kt),Tt=Object(_.b)((function(e){return{isAuth:e.auth.isAuth,correctPassword:e.auth.correctPassword,captchaUrl:e.auth.captchaUrl}}),{loginThunkCreator:function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n){var a;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(e);case 2:0===(a=t.sent).resultCode?n(gt()):(10===a.resultCode&&n(mt()),n({type:dt}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Pt.a().shape({email:Pt.b().email("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u044b\u0439 email").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),password:Pt.b().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e")});return e.isAuth?Object(a.jsx)(g.a,{to:"profile"}):Object(a.jsx)("div",{children:Object(a.jsx)(wt.b,{initialValues:{email:"",password:"",rememberMe:!1,captcha:""},validateOnBlur:!0,onSubmit:function(t){e.loginThunkCreator(t)},validationSchema:t,children:function(t){var n=t.values,s=t.errors,r=t.touched,c=t.handleChange,i=t.handleBlur,o=t.isValid,u=t.handleSubmit,l=t.dirty;return Object(a.jsxs)("form",{onSubmit:u,children:[Object(a.jsx)("input",{className:Nt.a.login_input,placeholder:"email",type:"text",name:"email",onChange:c,onBlur:i,value:n.email}),Object(a.jsx)("p",{children:s.email&&r.email&&s.email}),Object(a.jsx)("input",{className:Nt.a.login_input,placeholder:"password",type:"password",name:"password",onChange:c,onBlur:i,value:n.password}),Object(a.jsxs)("p",{children:[s.password&&r.password&&s.password,e.correctPassword?"Wrong email or password":null]}),Object(a.jsx)(wt.a,{type:"checkbox",name:"rememberMe"}),Object(a.jsx)("label",{htmlFor:"rememberMe",children:"Remember Me"}),Object(a.jsx)("button",{type:"submit",disabled:!o&&!l,onClick:u,children:"Login"}),Object(a.jsxs)("div",{children:[e.captchaUrl&&Object(a.jsx)("img",{src:e.captchaUrl,alt:"captcha"}),e.captchaUrl&&Object(a.jsx)("input",{type:"text",className:Nt.a.login_input,name:"captcha",placeholder:"captcha",value:n.captcha,onChange:c})]})]})}})})})),yt=function(e){return Object(a.jsxs)("div",{className:Nt.a.login_form_block,children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsx)(Tt,{})]})},St="SET_APP",Ct={initialized:!1},Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case St:return Object(T.a)(Object(T.a)({},e),{},{initialized:!0});default:return e}},It=n(110),Et=n(122),At=Object(ge.c)({profilePage:Ye,messagesPage:It.c,usersPage:$,auth:xt,app:Ut}),Ft=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ge.d,Mt=Object(ge.e)(At,Ft(Object(ge.a)(Et.a))),Dt=r.a.lazy((function(){return n.e(3).then(n.bind(null,263))})),Lt=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).catchAllUnhandledErrors=function(e){alert("Some Error Has Occurred")},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"app-wrapper",children:[Object(a.jsx)(_t,{}),Object(a.jsx)(O,{}),Object(a.jsx)("div",{className:"app-wrapper-content",children:Object(a.jsxs)(s.Suspense,{fallback:Object(a.jsx)(he,{}),children:[Object(a.jsx)(g.b,{path:"/login",render:function(){return Object(a.jsx)(yt,{})}}),Object(a.jsx)(g.b,{path:"/profile/:userId?",render:function(){return Object(a.jsx)(it,{})}}),Object(a.jsx)(g.b,{path:"/dialogs",render:function(){return Object(a.jsx)(Dt,{})}}),Object(a.jsx)(g.b,{path:"/users",render:function(){return Object(a.jsx)(ye,{})}}),Object(a.jsx)(g.b,{path:"/news",component:m}),Object(a.jsx)(g.b,{path:"/music",component:x}),Object(a.jsx)(g.b,{path:"/settings",component:v})]})})]})}):Object(a.jsx)(he,{})}}]),n}(r.a.Component),zt=Object(_.b)((function(e){return{initialized:e.app.initialized}}),{setAuthThunk:gt,initializeApp:function(){return function(e){var t=e(gt());Promise.all([t]).then((function(){e({type:St})}))}}})(Lt),Bt=function(){return Object(a.jsx)(b.a,{basename:"http://NickPaimon.github.io/react_social",children:Object(a.jsx)(_.a,{store:Mt,children:Object(a.jsx)(zt,{})})})};i.a.render(Object(a.jsx)(Bt,{}),document.getElementById("root")),o()},32:function(e,t,n){e.exports={user_photo:"Users_user_photo__3pKqQ",usersBlock:"Users_usersBlock__2t7du",user:"Users_user__Issyp",photoButtonBlock:"Users_photoButtonBlock__2unGN",userTitle:"Users_userTitle__17w9z"}},39:function(e,t,n){e.exports={pageNumber:"Paginator_pageNumber__1CWjJ",selected:"Paginator_selected__PM1Q5",paginator:"Paginator_paginator__1onIW",total:"Paginator_total__2fe6H",totalTitle:"Paginator_totalTitle__1pXDn"}},40:function(e,t,n){e.exports={item:"Post_item__3Rggc",post_text:"Post_post_text__3GC9m",message:"Post_message__wPc1w",name:"Post_name__3lBR8",likes:"Post_likes__pYep4"}},45:function(e,t,n){e.exports={header:"Header_header__3i4yG",social:"Header_social__1TakQ",loginBlock:"Header_loginBlock__VCJZn",loginLink:"Header_loginLink__2k-4x"}},46:function(e,t,n){e.exports={login_form_block:"Login_login_form_block__1INfx",login_input:"Login_login_input__Q4hla",login_error:"Login_login_error__28Fzc"}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(2),s=n(0),r=n(3),c=n(4),i=n(8),o=n(9),u=n(1),l=n.n(u),p=n(10),j=n(18),d=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(i.a)(u,t);var n=Object(o.a)(u);function u(){return Object(r.a)(this,u),n.apply(this,arguments)}return Object(c.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(s.jsx)(e,Object(a.a)({},this.props)):Object(s.jsx)(p.a,{to:"/login"})}}]),u}(l.a.Component);return Object(j.b)(d)(t)}},63:function(e,t,n){e.exports={status:"ProfileStatusWithHooks_status__3flru",profileInfo:"ProfileStatusWithHooks_profileInfo__1BEAx"}},64:function(e,t,n){e.exports={post_area:"MyPosts_post_area__3UzAx",posts:"MyPosts_posts__1traG"}},77:function(e,t,n){e.exports={contactsTitle:"Profile_contactsTitle__3gOYi",contacts:"Profile_contacts__2cjOx"}}},[[258,1,2]]]);
//# sourceMappingURL=main.ac4bc6c9.chunk.js.map