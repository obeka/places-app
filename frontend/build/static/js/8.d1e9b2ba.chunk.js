(this.webpackJsonpplaces=this.webpackJsonpplaces||[]).push([[8],{46:function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(49);t.a=function(e){return c.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},49:function(e,t,a){},57:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(44),c=a.n(n),r=a(45),i=a(10),l=a(0),s=a.n(l),o=a(1),p=a(55),u=a(43),d=a(54),m=(a(57),a(58)),v=a(46),f=a(48),b=a(11),h=a(47),E=a(15);t.default=function(){var e=Object(l.useContext)(b.a),t=Object(o.h)().placeId,a=Object(f.a)(),n=a.isLoading,j=a.error,O=a.sendRequest,k=a.clearError,x=Object(l.useState)(),V=Object(i.a)(x,2),y=V[0],w=V[1],C=Object(o.g)(),N=Object(m.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),T=Object(i.a)(N,3),I=T[0],P=T[1],g=T[2];Object(l.useEffect)((function(){(function(){var e=Object(r.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("".concat("https://places-app-obeka.herokuapp.com/api","/places/").concat(t));case 3:a=e.sent,w(a.place),g({title:{value:a.place.title,isValid:!0},description:{value:a.place.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[O,t,g]);var A=function(){var a=Object(r.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,O("".concat("https://places-app-obeka.herokuapp.com/api","/places/").concat(t),"PATCH",JSON.stringify({title:I.inputs.title.value,description:I.inputs.description.value,creator:e.userId}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token});case 4:C.push("/".concat(e.userId,"/places")),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(1);case 9:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(e){return a.apply(this,arguments)}}();return n?s.a.createElement("div",{className:"center"},s.a.createElement(E.a,null)):y||j?s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{error:j,onClear:k}),!n&&y&&s.a.createElement("form",{className:"place-form",onSubmit:A},s.a.createElement(p.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(d.c)()],errorText:"Please enter a valid title.",onInput:P,initialValue:y.title,initialValid:!0}),s.a.createElement(p.a,{id:"description",element:"textarea",label:"Description",validators:[Object(d.c)()],errorText:"Please enter a valid description (min 5 characters).",onInput:P,initialValue:y.description,initialValid:!0}),s.a.createElement(u.a,{type:"submit",disabled:!I.isValid},"UPDATE PLACE"))):s.a.createElement("div",{className:"center"},s.a.createElement(v.a,null,s.a.createElement("h2",null,"Could not find the place!")))}}}]);
//# sourceMappingURL=8.d1e9b2ba.chunk.js.map