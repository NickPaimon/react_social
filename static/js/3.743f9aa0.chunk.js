(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{259:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__YjUkT",textBlock:"Dialogs_textBlock__Icn4D",text:"Dialogs_text__1tgK_"}},260:function(e,a,s){e.exports={dialog_item:"DialogItem_dialog_item__2jv0o",link:"DialogItem_link__1BmIw",active:"DialogItem_active__3ceRy"}},261:function(e,a,s){e.exports={message:"Message_message__g7PQB"}},263:function(e,a,s){"use strict";s.r(a);s(1);var t=s(109),n=s(0),i=s(259),c=s.n(i),o=s(260),l=s.n(o),d=s(16),g=function(e){return Object(n.jsx)("div",{className:l.a.dialog_item,children:Object(n.jsx)(d.b,{className:l.a.link,activeClassName:l.a.active,to:"/dialogs/"+e.id,children:e.name})})},r=s(261),j=s.n(r),m=function(e){return Object(n.jsx)("div",{className:j.a.message,children:e.text})},u=s(10),x=function(e){var a=e.messagesPage,s=a.dialogs.map((function(e){return Object(n.jsx)(g,{name:e.name,id:e.id},e.id)})),t=a.messages.map((function(e){return Object(n.jsx)(m,{text:e.message},e.id)})),i=a.newMessageText;return e.isAuth?Object(n.jsxs)("div",{className:c.a.dialogs,children:[Object(n.jsx)("div",{className:c.a.dialog_items,children:s}),Object(n.jsxs)("div",{children:[t,Object(n.jsxs)("div",{className:c.a.textBlock,children:[Object(n.jsx)("textarea",{value:i,onChange:function(a){var s=a.target.value;e.addNewMessageText(s)},placeholder:"send message",className:c.a.text,children:" "}),Object(n.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})]})]})]}):Object(n.jsx)(u.a,{to:"/login"})},_=s(18),b=s(53),f=s(25);a.default=Object(f.d)(Object(_.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{addNewMessageText:function(a){e(Object(t.b)(a))},sendMessage:function(){e(Object(t.a)())}}})),b.a)(x)}}]);
//# sourceMappingURL=3.743f9aa0.chunk.js.map