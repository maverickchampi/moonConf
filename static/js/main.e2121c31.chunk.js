(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/astronauta.24373f60.svg"},14:function(e,a,t){e.exports=t.p+"static/media/eclipse.bb799883.svg"},26:function(e,a,t){},40:function(e,a,t){e.exports=t.p+"static/media/Astronaut-bro.6114351a.svg"},43:function(e,a,t){e.exports=t.p+"static/media/Outer space-bro.53a129fc.svg"},44:function(e,a,t){e.exports=t.p+"static/media/luna.2ba8a27f.svg"},45:function(e,a,t){e.exports=t(89)},51:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(39),l=t.n(c),s=(t(50),t(51),t(3)),o=t(2),m=(t(26),t(14)),i=t.n(m),u=t(40),d=t.n(u);var p=function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row center"},r.a.createElement("div",{className:"Home__col col-12 col-md-4"},r.a.createElement("img",{src:i.a,alt:"Logo moonConf",className:"img-fluid mb-2 w-60"}),r.a.createElement("h1",null,"Speaker Management System"),r.a.createElement(s.b,{className:"btn btn-primary",to:"/moonConf/speakers"},"Start")),r.a.createElement("div",{className:"Home__col d-none d-md-block col-md-7"},r.a.createElement("img",{src:d.a,alt:"Astronauts",className:"img-fluid p-4"})))))},f=t(1),E=t.n(f),v=t(5),b=t(15),g=t(19),N=t(6),h=t(9),w=t.n(h),_=t(42),k=t.n(_);var j=function(e){var a=e.email,t=e.alt,n=k()(a);return r.a.createElement("img",{className:"Badge__avatar",src:"https://www.gravatar.com/avatar/".concat(n,"?d=identicon"),alt:t})},x=t(12),O=t.n(x);t(60);var y=function(e){var a=e.firstName,t=e.lastName,n=e.jobTitle,c=e.twitter,l=e.email;return r.a.createElement("div",{className:"Badge"},r.a.createElement("div",{className:"Badge__header"},r.a.createElement("img",{src:O.a,alt:"Logo de la conferencia"})),r.a.createElement("div",{className:"Badge__section-name"},r.a.createElement(j,{email:l,alt:"Avatar"}),r.a.createElement("h1",null,a,r.a.createElement("br",null)," ",t)),r.a.createElement("div",{className:"Badge__section-info"},r.a.createElement("p",null,n),r.a.createElement("p",null,"@",c)),r.a.createElement("div",{className:"Badge__footer"},"#moonConf"))};var B=function(e){var a=e.handleInput,t=e.onSubmit,n=e.form,c=e.link;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{onChange:a,className:"form-control",type:"text",name:"firstName",placeholder:"Ingrese nombre",value:n.firstName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{onChange:a,className:"form-control",type:"text",name:"lastName",placeholder:"Ingrese apellido",value:n.lastName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{onChange:a,className:"form-control",type:"email",name:"email",placeholder:"Ingrese email",value:n.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Job Title"),r.a.createElement("input",{onChange:a,className:"form-control",type:"text",name:"jobTitle",placeholder:"Ingrese profesi\xf3n",value:n.jobTitle})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Twitter"),r.a.createElement("input",{onChange:a,className:"form-control",type:"text",name:"twitter",placeholder:"Ingrese twitter",value:n.twitter})),r.a.createElement("button",{className:"btn btn-primary mt-3 mr-3"},"Save"),r.a.createElement(s.b,{to:c,className:"btn btn-warning mt-3"},"Back")))};t(61);var S=function(){return r.a.createElement("div",{className:"PageLoading"},r.a.createElement("div",{className:"lds-grid"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},C=t(16),T=t.n(C),I="https://6060930204b05d0017ba2b85.mockapi.io/api/v1/speakers";function L(){return F.apply(this,arguments)}function F(){return(F=Object(v.a)(E.a.mark(function e(){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T()({url:I,method:"GET"});case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error al llamar speakers : "+e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}function A(e){return D.apply(this,arguments)}function D(){return(D=Object(v.a)(E.a.mark(function e(a){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T()({url:I,method:"POST",data:a});case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error al crear speaker : "+e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}function M(e){return H.apply(this,arguments)}function H(){return(H=Object(v.a)(E.a.mark(function e(a){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T()({url:"".concat(I,"/").concat(a),method:"GET"});case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error al llamar speaker : "+e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}function R(e){return J.apply(this,arguments)}function J(){return(J=Object(v.a)(E.a.mark(function e(a){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T()({url:"".concat(I,"/").concat(a.id),method:"PUT",data:a});case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error al actualizar speaker : "+e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}function G(e){return P.apply(this,arguments)}function P(){return(P=Object(v.a)(E.a.mark(function e(a){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T()({url:"".concat(I,"/").concat(a),method:"DELETE"});case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error al eliminar speaker : "+e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}t(80);var Y=function(){var e=Object(o.f)(),a=Object(n.useState)(!1),t=Object(N.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)({firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}),m=Object(N.a)(s,2),u=m[0],d=m[1],p=function(){var a=Object(v.a)(E.a.mark(function a(t){var n;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),l(!0),a.prev=2,a.next=5,A(u);case 5:n=a.sent,l(!1),201===n.status?(w.a.fire({title:"Success",text:"Speaker successfully created",icon:"success"}),e.push("/badges")):w.a.fire({title:"Opps!",text:"Server error, try again",icon:"error"}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),console.log(a.t0);case 13:case"end":return a.stop()}},a,null,[[2,10]])}));return function(e){return a.apply(this,arguments)}}();return c?r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeNew__hero"},r.a.createElement("img",{className:"BadgeNew__hero-image img-fluid",src:i.a,alt:"Logo"})),r.a.createElement("div",{className:"container-main"},r.a.createElement("div",{className:"main-row"},r.a.createElement("div",{className:"main-column"},r.a.createElement(y,{firstname:u.firstName||"FIRST NAME",lastname:u.lastName||"LAST NAME",email:u.email||"EMAIL",jobTitle:u.jobTitle||"JOB TITLE",twitter:u.twitter||"TWITTER"})),r.a.createElement("div",{className:"main-column"},r.a.createElement("h1",null,"New Speaker"),r.a.createElement(B,{handleInput:function(e){d(Object(g.a)({},u,Object(b.a)({},e.target.name,e.target.value)))},onSubmit:p,form:u,link:"/moonConf/speakers"})))))};t(81);var W=function(){var e=Object(o.f)(),a=Object(o.g)().badgeId,t=Object(n.useState)({}),c=Object(N.a)(t,2),l=c[0],m=c[1],i=Object(n.useState)(!0),u=Object(N.a)(i,2),d=u[0],p=u[1],f=function(){var a=Object(v.a)(E.a.mark(function a(){var t;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p(!0),a.prev=1,a.next=4,G(l.id);case 4:t=a.sent,p(!1),200===t.status?w.a.fire({title:"Deleted!",text:"Speaker has been deleted",icon:"success"}):w.a.fire({title:"Opps!",text:"Speaker could not be removed",icon:"error"}),e.push("/moonConf/speakers"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),console.log(a.t0);case 13:case"end":return a.stop()}},a,null,[[1,10]])}));return function(){return a.apply(this,arguments)}}();return Object(n.useEffect)(function(){function t(){return(t=Object(v.a)(E.a.mark(function t(){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M(a);case 3:200===(n=t.sent).status?(m(n.data),p(!1)):(console.log(n),w.a.fire({title:"Opps!",text:"Speaker not found",icon:"error"}),e.push("/moonConf/speakers")),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},[]),d?r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null)):r.a.createElement("div",null,r.a.createElement("div",{className:"BadgeDetails__hero"},r.a.createElement("div",{className:"content"},r.a.createElement("img",{className:"BadgesDetails_conf-logo",src:O.a,alt:"Conferencia"}),r.a.createElement("div",{className:"BadgeDetails__hero-attendant-name"},r.a.createElement("h1",null,l.firstName," ",l.lastName)))),r.a.createElement("div",{className:"container-main"},r.a.createElement("div",{className:"main-row"},r.a.createElement("div",{className:"main-column"},r.a.createElement(y,{firstName:l.firstName,lastName:l.lastName,email:l.email,jobTitle:l.jobTitle,twitter:l.twitter})),r.a.createElement("div",{className:"main-column"},r.a.createElement("div",{className:"group-buttons"},r.a.createElement("div",null,r.a.createElement(s.b,{className:"btn btn-primary mb-2",to:"/moonConf/speakers".concat(l.id,"/edit")},"Edit")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return w.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(e){e.isConfirmed&&f()})},className:"btn btn-danger mb-2"},"Delete")),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/moonConf/speakers",className:"btn btn-warning"},"Back")))))))};t(82);var z=function(){var e=Object(o.f)(),a=Object(o.g)().badgeId,t=Object(n.useState)(!0),c=Object(N.a)(t,2),l=c[0],s=c[1],m=Object(n.useState)({firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}),u=Object(N.a)(m,2),d=u[0],p=u[1],f=function(){var a=Object(v.a)(E.a.mark(function a(t){var n;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),s(!0),a.prev=2,a.next=5,R(d);case 5:n=a.sent,s(!1),200===n.status?(w.a.fire({title:"Success",text:"Speaker successfully updated",icon:"success"}),e.push("/badges")):w.a.fire({title:"Opps!",text:"Server error, try again",icon:"error"}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),console.log(a.t0);case 13:case"end":return a.stop()}},a,null,[[2,10]])}));return function(e){return a.apply(this,arguments)}}();return Object(n.useEffect)(function(){function t(){return(t=Object(v.a)(E.a.mark(function t(){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M(a);case 3:200===(n=t.sent).status?(p(n.data),s(!1)):(console.log(n),w.a.fire({title:"Opps!",text:"Speaker not found",icon:"error"}),e.push("/badges")),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},[]),l?r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeEdit__hero"},r.a.createElement("img",{className:"BadgeEdit__hero-image img-fluid",src:i.a,alt:"Logo"})),r.a.createElement("div",{className:"container-main"},r.a.createElement("div",{className:"main-row"},r.a.createElement("div",{className:"main-column"},r.a.createElement(y,{firstname:d.firstName||"FIRST NAME",lastname:d.lastName||"LAST NAME",email:d.email||"EMAIL",jobTitle:d.jobTitle||"JOB TITLE",twitter:d.twitter||"TWITTER"})),r.a.createElement("div",{className:"main-column"},r.a.createElement("h1",null,"Edit Speaker"),r.a.createElement(B,{handleInput:function(e){p(Object(g.a)({},d,Object(b.a)({},e.target.name,e.target.value)))},onSubmit:f,form:d,link:"/moonConf/speakers/".concat(d.id)})))))},U=t(17),q=t.n(U);t(83);function K(e){var a=e.badge;return r.a.createElement("div",{className:"BadgesListItem"},r.a.createElement(j,{className:"BadgesListItem__avatar",email:a.email,alt:"".concat(a.firstName," ").concat(a.lastName)}),r.a.createElement("div",null,r.a.createElement("strong",null,a.firstName," ",a.lastName),r.a.createElement("br",null),"@",a.twitter,r.a.createElement("br",null),a.jobTitle))}var Q=function(e){var a=function(e){var a=Object(n.useState)(""),t=Object(N.a)(a,2),r=t[0],c=t[1],l=Object(n.useState)([]),s=Object(N.a)(l,2),o=s[0],m=s[1];return Object(n.useMemo)(function(){var a=e.slice(0).reverse().filter(function(e){return"".concat(e.firstName," ").concat(e.lastName," ").concat(e.twitter," ").concat(e.jobTitle).toLowerCase().includes(r.toLowerCase())});m(a)},[e,r]),{filter:r,setFilter:c,filteredResults:o}}(e.badges),t=a.filter,c=a.setFilter,l=a.filteredResults;return r.a.createElement("div",{className:"BadgesList"},r.a.createElement("div",{className:"form-group filter"},r.a.createElement("label",null,"Filter Speakers"),r.a.createElement("input",{type:"text",className:"form-control",value:t,onChange:function(e){c(e.target.value)}})),r.a.createElement("ul",{className:"list-unstyled list-grid"},0!==l.length?l.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(s.b,{className:"text-reset text-decoration-none",to:"/moonConf/speakers/".concat(e.id)},r.a.createElement(K,{badge:e})))}):r.a.createElement("h3",null,"No badges were found")))};t(84);var V=function(){var e=Object(n.useState)([]),a=Object(N.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!0),o=Object(N.a)(l,2),m=o[0],i=o[1];if(Object(n.useEffect)(function(){function e(){return(e=Object(v.a)(E.a.mark(function e(){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:200===(a=e.sent).status&&(c(a.data),i(!1));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),m)return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges"},r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("img",{className:"Badges_conf-logo",src:O.a,alt:"Conferencia"})))),r.a.createElement("div",{className:"Badge__container"},r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement(s.b,{to:"/moonConf/speakers/new",className:"btn btn-primary"},"New Speaker"))),r.a.createElement("div",{className:"Badges__list"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("div",{className:"BadgesList"},r.a.createElement("ul",{className:"list-unstyled list-grid"},[1,2,3,4,5,6,7,8,9].map(function(e){return r.a.createElement("li",{key:e},r.a.createElement("div",{className:"BadgesListItem"},r.a.createElement("img",{className:"BadgesListItem__avatar",src:q.a,alt:q.a}),r.a.createElement("div",{style:{width:"80%"}},r.a.createElement(q.a,null),r.a.createElement(q.a,null),r.a.createElement(q.a,null))))}))))));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges"},r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("img",{className:"Badges_conf-logo",src:O.a,alt:"Conferencia"})))),r.a.createElement("div",{className:"Badge__container"},r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement(s.b,{to:"/moonConf/speakers/new",className:"btn btn-primary"},"New Speaker"))),r.a.createElement("div",{className:"Badges__list"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement(Q,{badges:t}))))},X=t(43),Z=t.n(X);var $=function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"Home__col col-12 col-md-4"},r.a.createElement("h1",null,"404 : Not Found"),r.a.createElement("h2",null,"You're lost, but don't worry "),r.a.createElement(s.b,{className:"btn btn-primary",to:"/moonConf"},"Get Safe")),r.a.createElement("div",{className:"Home__col d-none d-md-block col-md-7"},r.a.createElement("img",{src:Z.a,alt:"Astronauts",className:"img-fluid p-4"})))))},ee=t(44),ae=t.n(ee);t(88);var te=function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(s.b,{className:"Navbar__brand",to:"/moonConf"},r.a.createElement("img",{className:"Navbar__brand-logo",src:ae.a,alt:"Logo"}),r.a.createElement("span",{className:"font-weight-light"},"moon"),r.a.createElement("span",{className:"font-weight-bold"},"Conf"))))};var ne=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,null),e.children)};var re=function(){return r.a.createElement(s.a,null,r.a.createElement(ne,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/moonConf",component:p}),r.a.createElement(o.a,{exact:!0,path:"/moonConf/speakers",component:V}),r.a.createElement(o.a,{exact:!0,path:"/moonConf/speakers/new",component:Y}),r.a.createElement(o.a,{exact:!0,path:"/moonConf/speakers/:badgeId",component:W}),r.a.createElement(o.a,{exact:!0,path:"/moonConf/speakers/:badgeId/edit",component:z}),r.a.createElement(o.a,{component:$}))))},ce=document.getElementById("app");l.a.render(r.a.createElement(re,null),ce)}},[[45,1,2]]]);
//# sourceMappingURL=main.e2121c31.chunk.js.map