(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{o75l:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),o=function(){return function(){}}(),t=e("zl1X"),a=e("pMnS"),b=e("8KBR"),s=e("+Xo0"),c=e("0G9f"),i=e("6/Z3"),d=e("QkwE"),r=e("vAyd"),p=e("mrSG"),m=e("N+3j"),A='\n<clr-collapse-expand-section [clrIsCollapsed]="isCollapsed"\n                             (clrCollapsed)="onCollapsed()"\n                             (clrExpanded)="onExpanded()">\n    <ng-container clr-ces-title>Title</ng-container>\n    <ng-container clr-ces-content>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et\n        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est\n        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et\n        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est\n        Lorem ipsum dolor sit amet.\n    </ng-container>\n</clr-collapse-expand-section>         \n',g=function(l){function n(){var n=l.call(this,"collapse-expand-section")||this;return n.htmlExample=A,n.isCollapsed=!1,n}return Object(p.__extends)(n,l),n.prototype.onCollapsed=function(){console.log("Section collapsed!")},n.prototype.onExpanded=function(){console.log("Section expanded!")},n}(m.a),h=u.ob({encapsulation:2,styles:[],data:{}});function f(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,52,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,s.b,s.a)),u.pb(1,49152,null,0,c.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),u.qb(2,0,null,0,50,"article",[],null,null,null,null,null)),(l()(),u.qb(3,0,null,null,1,"h5",[["class","component-summary"],["id","generic-pager-header"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["The Collapse/Expand Section is a basic component that can be used to switch between hiding & showing content anywhere on your page."])),(l()(),u.qb(5,0,null,null,4,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),u.qb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Usage"])),(l()(),u.qb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" Use the Collapse/Expand Section whenever you want to show specific data only when a certain condition is met, e.g. the user deciding to open the section. Useful for hiding detail information. "])),(l()(),u.qb(10,0,null,null,42,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),u.qb(11,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Code & Examples"])),(l()(),u.qb(13,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" Following interactions are available: "])),(l()(),u.qb(15,0,null,null,29,"ul",[],null,null,null,null,null)),(l()(),u.qb(16,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" By setting the "])),(l()(),u.qb(18,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["[clrIsCollapsed]"])),(l()(),u.Kb(-1,null,[" input of the component, you can define if your section is collapsed or expanded when first opening the page. Default is "])),(l()(),u.qb(21,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["true"])),(l()(),u.Kb(-1,null,[". "])),(l()(),u.qb(24,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" By setting the "])),(l()(),u.qb(26,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["[clrDisableHeaderStyles]"])),(l()(),u.Kb(-1,null,[" input of the component, you can disable the default header styles to have complete control over the title. Default is "])),(l()(),u.qb(29,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["false"])),(l()(),u.Kb(-1,null,[". "])),(l()(),u.qb(32,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u.qb(33,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["(clrCollapsed)"])),(l()(),u.Kb(-1,null,[" is fired every time the component collapses. "])),(l()(),u.qb(36,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u.qb(37,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["(clrExpanded)"])),(l()(),u.Kb(-1,null,[" is fired every time the component expands. "])),(l()(),u.qb(40,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" You can optionally add a subtitle by adding any HTML with the attribute "])),(l()(),u.qb(42,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["clr-ces-subtitle"])),(l()(),u.Kb(-1,null,[", similar to the title. "])),(l()(),u.qb(45,0,null,null,5,"clr-collapse-expand-section",[],null,[[null,"clrCollapsed"],[null,"clrExpanded"]],(function(l,n,e){var u=!0,o=l.component;return"clrCollapsed"===n&&(u=!1!==o.onCollapsed()&&u),"clrExpanded"===n&&(u=!1!==o.onExpanded()&&u),u}),b.E,b.d)),u.pb(46,49152,null,0,i.g,[],{isCollapsed:[0,"isCollapsed"]},{collapsed:"clrCollapsed",expanded:"clrExpanded"}),(l()(),u.qb(47,0,null,0,1,null,null,null,null,null,null,null)),(l()(),u.Kb(-1,null,["Title"])),(l()(),u.qb(49,0,null,2,1,null,null,null,null,null,null,null)),(l()(),u.Kb(-1,null,["Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "])),(l()(),u.qb(51,0,null,null,1,"clr-code-snippet",[],null,null,null,d.b,d.a)),u.pb(52,4243456,null,0,r.a,[],{code:[0,"code"]},null)],(function(l,n){var e=n.component;l(n,1,0,e.title,e.newLayout,e.ui,e.ng),l(n,46,0,e.isCollapsed),l(n,52,0,e.htmlExample)}),(function(l,n){l(n,0,0,!0)}))}function y(l){return u.Mb(0,[(l()(),u.qb(0,0,null,null,1,"clr-collapse-expand-section-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,f,h)),u.pb(1,49152,null,0,g,[],null,null)],null,(function(l,n){l(n,0,0,!0,!0)}))}var q=u.mb("clr-collapse-expand-section-demo",g,y,{},{},[]),v=e("Ip0R"),x=e("gIcY"),w=e("xLE1"),K=e("XPsC"),C=e("ZYCi"),E=e("JsA7");e.d(n,"CollapseExpandSectionDemoModuleNgFactory",(function(){return L}));var L=u.nb(o,[],(function(l){return u.zb([u.Ab(512,u.j,u.Z,[[8,[t.ab,t.a,t.b,t.d,t.e,t.f,t.g,t.h,t.c,t.bb,t.cb,t.db,t.eb,a.a,b.a,q]],[3,u.j],u.v]),u.Ab(4608,v.s,v.r,[u.s,[2,v.K]]),u.Ab(4608,x.D,x.D,[]),u.Ab(4608,i.f,i.f,[]),u.Ab(1073742336,v.c,v.c,[]),u.Ab(1073742336,x.C,x.C,[]),u.Ab(1073742336,x.k,x.k,[]),u.Ab(1073742336,w.ib,w.ib,[]),u.Ab(1073742336,w.Uc,w.Uc,[]),u.Ab(1073742336,w.af,w.af,[]),u.Ab(1073742336,w.Z,w.Z,[]),u.Ab(1073742336,w.j,w.j,[]),u.Ab(1073742336,w.bb,w.bb,[]),u.Ab(1073742336,w.v,w.v,[]),u.Ab(1073742336,w.ed,w.ed,[]),u.Ab(1073742336,w.t,w.t,[]),u.Ab(1073742336,w.hd,w.hd,[]),u.Ab(1073742336,w.P,w.P,[]),u.Ab(1073742336,w.nb,w.nb,[]),u.Ab(1073742336,w.Db,w.Db,[]),u.Ab(1073742336,w.Ob,w.Ob,[]),u.Ab(1073742336,w.Sb,w.Sb,[]),u.Ab(1073742336,w.pc,w.pc,[]),u.Ab(1073742336,w.fb,w.fb,[]),u.Ab(1073742336,w.tb,w.tb,[]),u.Ab(1073742336,w.rd,w.rd,[]),u.Ab(1073742336,w.sd,w.sd,[]),u.Ab(1073742336,w.T,w.T,[]),u.Ab(1073742336,w.Yb,w.Yb,[]),u.Ab(1073742336,w.zd,w.zd,[]),u.Ab(1073742336,w.I,w.I,[]),u.Ab(1073742336,w.ec,w.ec,[]),u.Ab(1073742336,w.vc,w.vc,[]),u.Ab(1073742336,w.z,w.z,[]),u.Ab(1073742336,w.re,w.re,[]),u.Ab(1073742336,w.xb,w.xb,[]),u.Ab(1073742336,w.sb,w.sb,[]),u.Ab(1073742336,w.o,w.o,[]),u.Ab(1073742336,w.p,w.p,[]),u.Ab(1073742336,w.vb,w.vb,[]),u.Ab(1073742336,w.Ab,w.Ab,[]),u.Ab(1073742336,w.we,w.we,[]),u.Ab(1073742336,w.ye,w.ye,[]),u.Ab(1073742336,w.mc,w.mc,[]),u.Ab(1073742336,w.Ac,w.Ac,[]),u.Ab(1073742336,w.qb,w.qb,[]),u.Ab(1073742336,w.Vb,w.Vb,[]),u.Ab(1073742336,w.sc,w.sc,[]),u.Ab(1073742336,w.Hb,w.Hb,[]),u.Ab(1073742336,w.Ec,w.Ec,[]),u.Ab(1073742336,w.e,w.e,[]),u.Ab(1073742336,w.gc,w.gc,[]),u.Ab(1073742336,w.Lb,w.Lb,[]),u.Ab(1073742336,w.a,w.a,[]),u.Ab(1073742336,K.a,K.a,[]),u.Ab(1073742336,C.p,C.p,[[2,C.u],[2,C.l]]),u.Ab(1073742336,E.a,E.a,[]),u.Ab(1073742336,i.gb,i.gb,[]),u.Ab(1073742336,i.Q,i.Q,[]),u.Ab(1073742336,i.s,i.s,[]),u.Ab(1073742336,i.O,i.O,[]),u.Ab(1073742336,i.h,i.h,[]),u.Ab(1073742336,i.e,i.e,[]),u.Ab(1073742336,i.A,i.A,[]),u.Ab(1073742336,i.o,i.o,[]),u.Ab(1073742336,i.G,i.G,[]),u.Ab(1073742336,i.u,i.u,[]),u.Ab(1073742336,i.c,i.c,[]),u.Ab(1073742336,i.J,i.J,[]),u.Ab(1073742336,i.X,i.X,[]),u.Ab(1073742336,i.cb,i.cb,[]),u.Ab(1073742336,i.S,i.S,[]),u.Ab(1073742336,i.j,i.j,[]),u.Ab(1073742336,i.q,i.q,[]),u.Ab(1073742336,i.U,i.U,[]),u.Ab(1073742336,i.y,i.y,[]),u.Ab(1073742336,i.D,i.D,[]),u.Ab(1073742336,i.w,i.w,[]),u.Ab(1073742336,i.a,i.a,[]),u.Ab(1073742336,o,o,[]),u.Ab(256,w.Lc,!0,[]),u.Ab(1024,C.j,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);