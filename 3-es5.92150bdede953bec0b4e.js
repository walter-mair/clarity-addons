function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"4YJ1":function(e,t,n){"use strict";n.r(t),n.d(t,"SidebarpageLayoutDemoModule",(function(){return p}));var a,r,o=n("ofXK"),c=n("tyNb"),i=n("8MG2"),l=n("6Y1o"),b=n("fXoL"),u=n("2HPr"),s=((a=function(){function e(t){_classCallCheck(this,e),this.router=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.id=this.collectRouteData("id")[0]}},{key:"collectRouteData",value:function(e){for(var t=this.router.routerState.snapshot.root,n=[];t;)t.data&&t.data[e]&&n.push(t.data[e]),t=t.firstChild;return n}}]),e}()).\u0275fac=function(e){return new(e||a)(b.Mb(c.d))},a.\u0275cmp=b.Gb({type:a,selectors:[["clr-sidebarpage-layout-demo"]],decls:29,vars:6,consts:[[1,"content-header"],[1,"command-bar",3,"clrMenuPosition"],[3,"clrInMenu"],[1,"content-container"],[1,"content-area"],[1,"sidenav",3,"clr-nav-level","clrVerticalNavCollapsible"],["routerLink","/full-page-layouts/sidebarpage-layout/one","routerLinkActive","active",1,"nav-link"],[1,"nav-text"],["routerLink","/full-page-layouts/sidebarpage-layout/two","routerLinkActive","active",1,"nav-link"],["routerLink","/full-page-layouts/sidebarpage-layout/three","routerLinkActive","active",1,"nav-link"]],template:function(e,t){1&e&&(b.Sb(0,"clr-main-container"),b.Nb(1,"clr-demo-menu"),b.Sb(2,"div",0),b.Nb(3,"clr-back-button"),b.Sb(4,"h2"),b.Ec(5,"Sidebar Pagelayout"),b.Rb(),b.Sb(6,"clr-button-group",1),b.Sb(7,"clr-button"),b.Ec(8,"Command1"),b.Rb(),b.Sb(9,"clr-button"),b.Ec(10,"Command2"),b.Rb(),b.Sb(11,"clr-button",2),b.Ec(12,"Command3"),b.Rb(),b.Sb(13,"clr-button",2),b.Ec(14,"Command4"),b.Rb(),b.Rb(),b.Rb(),b.Sb(15,"div",3),b.Sb(16,"div",4),b.Sb(17,"h3"),b.Ec(18),b.Rb(),b.Rb(),b.Sb(19,"clr-vertical-nav",5),b.Sb(20,"a",6),b.Sb(21,"span",7),b.Ec(22,"Item 1"),b.Rb(),b.Rb(),b.Sb(23,"a",8),b.Sb(24,"span",7),b.Ec(25,"Item 2"),b.Rb(),b.Rb(),b.Sb(26,"a",9),b.Sb(27,"span",7),b.Ec(28,"Item 3"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&e&&(b.Ab(6),b.kc("clrMenuPosition","bottom-right"),b.Ab(5),b.kc("clrInMenu",!0),b.Ab(2),b.kc("clrInMenu",!0),b.Ab(5),b.Gc("Item ",t.id," - Content Area"),b.Ab(1),b.kc("clr-nav-level",2)("clrVerticalNavCollapsible",!0))},directives:[i.F,i.S,u.a,l.b,i.e,i.d,i.R,i.G,c.f,c.e],encapsulation:2}),a),d=n("fTK2"),p=((r=function e(){_classCallCheck(this,e)}).\u0275mod=b.Kb({type:r}),r.\u0275inj=b.Jb({factory:function(e){return new(e||r)},imports:[[o.c,i.a,l.a,d.a,c.g.forChild([{path:"",component:s,outlet:"fullpage"}])]]}),r)}}]);