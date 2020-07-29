(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"I4/O":function(e,i,n){"use strict";n.r(i),n.d(i,"ProgressSpinnerDemoModule",(function(){return m}));var t=n("3Pt+"),o=n("ofXK"),r=n("8MG2"),s=n("N+3j"),c=n("fXoL"),a=n("0G9f"),l=n("6Y1o"),b=n("vAyd");let d=(()=>{class e extends s.a{constructor(){super("progress-spinner"),this.htmlExample='\n<div class="clr-row">\n    <div class="clr-col-6">\n        <div class="card">\n            <clr-progress-spinner [clrShowSpinner]="cardLoadingState"></clr-progress-spinner>\n            ...\n        </div>\n    </div>\n</div>\n<button class="btn btn-primary" (click)="cardLoadingState = !cardLoadingState">Toggle Loading</button>\n',this.htmlExample2='\n<div>\n  <clr-progress-spinner [clrShowSpinner]="loadingState" clrSize="md"></clr-progress-spinner>\n  <h2>Content Title</h2>\n    <p>...</p>\n</div>\n\n<button class="btn btn-primary" (click)="loadingState = !loadingState">Toggle Loading</button>\n'}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["clr-progress-spinner-demo"]],hostVars:4,hostBindings:function(e,i){2&e&&c.Eb("content-area",!0)("dox-content-panel",!0)},features:[c.yb],decls:85,vars:8,consts:[[3,"ng","ui","title","newLayout"],[1,"component-summary"],["id","design-guidelines"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["id","code-examples"],["id","examples"],[1,"clr-row"],[1,"clr-col-6"],[1,"card"],[3,"clrShowSpinner"],[1,"card-header"],[1,"card-block"],[1,"card-title"],[1,"card-text"],[1,"card-footer"],[1,"btn","btn-primary",3,"click"],[3,"clrCode"],[2,"position","relative","background-color","#ddd","padding","1rem","margin-top","1rem"],["clrSize","md",3,"clrShowSpinner"],[2,"margin-top","0"]],template:function(e,i){1&e&&(c.Tb(0,"clr-doc-wrapper",0),c.Tb(1,"article"),c.Tb(2,"h5",1),c.Fc(3,"The progress spinner of Clarity Addons extends the default progress spinner by an Angular Component which allows the developer to toggle the loading state depending on a boolean input."),c.Sb(),c.Tb(4,"div",2),c.Tb(5,"h3"),c.Fc(6,"Summary of Options"),c.Sb(),c.Tb(7,"table",3),c.Tb(8,"thead"),c.Tb(9,"tr"),c.Tb(10,"th",4),c.Fc(11,"Input"),c.Sb(),c.Tb(12,"th",5),c.Fc(13,"Values"),c.Sb(),c.Tb(14,"th",6),c.Fc(15,"Default"),c.Sb(),c.Tb(16,"th",4),c.Fc(17,"Effect"),c.Sb(),c.Sb(),c.Sb(),c.Tb(18,"tbody"),c.Tb(19,"tr"),c.Tb(20,"td",4),c.Tb(21,"b"),c.Fc(22,"clrShowSpinner"),c.Sb(),c.Tb(23,"div",7),c.Fc(24,"Type: boolean"),c.Sb(),c.Tb(25,"div",7),c.Fc(26,"Default: false"),c.Sb(),c.Sb(),c.Tb(27,"td",5),c.Fc(28,"true, false"),c.Sb(),c.Tb(29,"td",6),c.Fc(30,"false"),c.Sb(),c.Tb(31,"td",4),c.Fc(32,"Controls if the spinner is shown"),c.Sb(),c.Sb(),c.Tb(33,"tr"),c.Tb(34,"td",4),c.Tb(35,"b"),c.Fc(36,"clrSize"),c.Sb(),c.Tb(37,"div",7),c.Fc(38,"Type: String"),c.Sb(),c.Tb(39,"div",7),c.Fc(40,'Default: "sm"'),c.Sb(),c.Sb(),c.Tb(41,"td",5),c.Fc(42,"sm, md, lg"),c.Sb(),c.Tb(43,"td",6),c.Fc(44,'"sm"'),c.Sb(),c.Tb(45,"td",4),c.Fc(46,"Defines the size of progress spinner"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(47,"div",8),c.Tb(48,"h3",9),c.Fc(49,"Code & Examples"),c.Sb(),c.Tb(50,"h4"),c.Fc(51,"The progress spinner on top of any card"),c.Sb(),c.Tb(52,"p"),c.Fc(53,"When having multiple cards which can be loaded independently, it is possible show a progress spinner on any specific card:"),c.Sb(),c.Tb(54,"div",10),c.Tb(55,"div",11),c.Tb(56,"div",12),c.Ob(57,"clr-progress-spinner",13),c.Tb(58,"div",14),c.Fc(59,"Header"),c.Sb(),c.Tb(60,"div",15),c.Tb(61,"div",16),c.Fc(62," Block "),c.Sb(),c.Tb(63,"div",17),c.Fc(64," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officiis temporibus quod inventore, minus commodi similique corrupti repellat saepe facere aliquam minima deserunt esse nemo, vel illum optio necessitatibus deleniti. "),c.Sb(),c.Sb(),c.Tb(65,"div",18),c.Fc(66," Footer "),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(67,"button",19),c.bc("click",(function(){return i.cardLoadingState=!i.cardLoadingState})),c.Fc(68,"Toggle Loading"),c.Sb(),c.Ob(69,"clr-code-snippet",20),c.Tb(70,"h4"),c.Fc(71,"The progress spinner on top of any content"),c.Sb(),c.Tb(72,"p"),c.Fc(73,"When having multiple areas in your applicatoin which can be loaded indepedently, it is possible to show a progress spinner on any specific area:"),c.Sb(),c.Tb(74,"div",21),c.Ob(75,"clr-progress-spinner",22),c.Tb(76,"h2",23),c.Fc(77,"Content Title"),c.Sb(),c.Tb(78,"p"),c.Fc(79,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officiis temporibus quod inventore, minus commodi similique corrupti repellat saepe facere aliquam minima deserunt esse nemo, vel illum optio necessitatibus deleniti."),c.Sb(),c.Tb(80,"p"),c.Fc(81,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officiis temporibus quod inventore, minus commodi similique corrupti repellat saepe facere aliquam minima deserunt esse nemo, vel illum optio necessitatibus deleniti."),c.Sb(),c.Sb(),c.Tb(82,"button",19),c.bc("click",(function(){return i.loadingState=!i.loadingState})),c.Fc(83,"Toggle Loading"),c.Sb(),c.Ob(84,"clr-code-snippet",20),c.Sb(),c.Sb(),c.Sb()),2&e&&(c.lc("ng",i.ng)("ui",i.ui)("title",i.title)("newLayout",i.newLayout),c.Bb(57),c.lc("clrShowSpinner",i.cardLoadingState),c.Bb(12),c.lc("clrCode",i.htmlExample),c.Bb(6),c.lc("clrShowSpinner",i.loadingState),c.Bb(9),c.lc("clrCode",i.htmlExample2))},directives:[a.a,l.J,b.a],encapsulation:2}),e})();var p=n("JsA7"),u=n("tyNb"),S=n("XPsC");let m=(()=>{class e{}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(i){return new(i||e)},imports:[[o.c,t.h,r.a,S.a,p.a,u.g.forChild([{path:"",component:d}]),l.b]]}),e})()}}]);