(this["webpackJsonptext-utils"]=this["webpackJsonptext-utils"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",style:{backgroundColor:"dark"===e.mode?"black":"white"},children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(o.jsx)("form",{className:"d-flex",children:Object(o.jsxs)("div",{className:"form-check form-switch",style:{backgroundColor:"dark"===e.mode?"black":"white",color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toogleMode}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})})]})]})})})}function d(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(0),i=Object(l.a)(r,2),d=i[0],b=i[1],j=Object(c.useState)(0),u=Object(l.a)(j,2),h=u[0],m=u[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{style:{color:"dark"===e.mode?"white":"black"},children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{value:n,style:{backgroundColor:"dark"===e.mode?"#080058":"white",color:"dark"===e.mode?"white":"black"},onChange:function(e){var t=e.target.value;s(t);var a=t.split(" ").filter((function(e,t,a){return""!==e}));b(a.length),m(.008*a.length)},className:"form-control",id:"exampleFormControlTextarea1",rows:"8"})}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Upper Case Done","success"),setTimeout((function(){e.setAlert(null)}),1500)},children:"UpperCase"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Lower Case Done","success"),setTimeout((function(){e.setAlert(null)}),1500)},children:"LowerCase"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){s(""),b(0),m(0),e.showAlert("Clear Text Done","success"),setTimeout((function(){e.setAlert(null)}),1500)},children:"Clear Text"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsxs)("p",{children:["Word Count = ",d]}),Object(o.jsxs)("p",{children:["Letter Count = ",n.length]}),Object(o.jsxs)("p",{children:["Time to Read = ",h]})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h3",{children:"Preview Text"}),Object(o.jsx)("p",{children:n})]})]})}function b(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(o.jsx)("strong",{children:e.alert.type})," : ",e.alert.message]})}i.defaultProps={title:"Enter Title"};var j=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),r=Object(l.a)(s,2),j=r[0],u=r[1],h=function(e,t){u({message:e,type:t})};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"Text-Utils",mode:a,toogleMode:function(){"dark"===a?(n("light"),document.body.style.backgroundColor="white",h("Light Mode Activated","success"),setTimeout((function(){u(null)}),1500)):(n("dark"),document.body.style.backgroundColor="#080058",h("Dark Mode Activated","success"),setTimeout((function(){u(null)}),1500))}}),Object(o.jsx)(b,{alert:j}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(d,{heading:"Enter Your Text",mode:a,showAlert:h,setAlert:u})})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),u()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.cf9e90f0.chunk.js.map