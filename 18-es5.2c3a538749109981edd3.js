!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=a(e);if(t){var c=a(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return r(this,n)}}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{ISuI:function(r,a,o){"use strict";o.r(a),o.d(a,"LetterAvatarDemoModule",function(){return y});var c,i,b=o("3Pt+"),l=o("ofXK"),s=o("8MG2"),d=o("N+3j"),f=o("fXoL"),u=o("0G9f"),p=o("6Y1o"),h=o("vAyd"),v=((c=function(r){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}(o,r);var a=n(o);function o(){var t;return e(this,o),(t=a.call(this,"letter-avatar")).htmlExample='\n<div class="parent">\n    <clr-letter-avatar class="demo-avatar" clrName="John Doe"></clr-letter-avatar>\n    <span>John Doe</span>\n</div>\n\n.parent {\n    display: flex;\n    align-items: center;\n}\n\n.demo-avatar {\n    margin-right: .5rem;\n}\n',t.htmlExample2='\n<div class="parent">\n    <clr-letter-avatar class="demo-avatar avatar-large" clrName="John Doe" clrSize="48"></clr-letter-avatar>\n    <span>John Doe</span>\n</div>\n\n.avatar-large {\n    font-size: 1rem;\n}\n',t}return o}(d.a)).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=f.Db({type:c,selectors:[["clr-letter-avatar-demo"]],hostVars:4,hostBindings:function(e,t){2&e&&f.Bb("content-area",!0)("dox-content-panel",!0)},features:[f.vb],decls:73,vars:3,consts:[[3,"title"],[1,"component-summary"],["id","design-guidelines"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["id","code-examples"],["id","examples"],[2,"display","flex"],[1,"parent"],["clrName","John Doe",1,"demo-avatar"],["href","#"],[3,"clrCode"],[1,"clr-code"],["clrName","John Doe","clrSize","48",1,"demo-avatar","avatar-large"]],template:function(e,t){1&e&&(f.Pb(0,"clr-doc-wrapper",0),f.Pb(1,"article"),f.Pb(2,"h5",1),f.Ac(3,"The letter avatar is used to display initials of a name."),f.Ob(),f.Pb(4,"div",2),f.Pb(5,"h3"),f.Ac(6,"Summary of Options"),f.Ob(),f.Pb(7,"table",3),f.Pb(8,"thead"),f.Pb(9,"tr"),f.Pb(10,"th",4),f.Ac(11,"Input"),f.Ob(),f.Pb(12,"th",5),f.Ac(13,"Values"),f.Ob(),f.Pb(14,"th",6),f.Ac(15,"Default"),f.Ob(),f.Pb(16,"th",4),f.Ac(17,"Effect"),f.Ob(),f.Ob(),f.Ob(),f.Pb(18,"tbody"),f.Pb(19,"tr"),f.Pb(20,"td",4),f.Pb(21,"b"),f.Ac(22,"clrName"),f.Ob(),f.Pb(23,"div",7),f.Ac(24,"Type: string"),f.Ob(),f.Pb(25,"div",7),f.Ac(26,"Default: undefined"),f.Ob(),f.Ob(),f.Pb(27,"td",5),f.Ac(28,"String"),f.Ob(),f.Pb(29,"td",6),f.Ac(30,"undefined"),f.Ob(),f.Pb(31,"td",4),f.Ac(32,"The full name from which the initials are generated"),f.Ob(),f.Ob(),f.Pb(33,"tr"),f.Pb(34,"td",4),f.Pb(35,"b"),f.Ac(36,"clrSize"),f.Ob(),f.Pb(37,"div",7),f.Ac(38,"Type: Number"),f.Ob(),f.Pb(39,"div",7),f.Ac(40,"Default: 24"),f.Ob(),f.Ob(),f.Pb(41,"td",5),f.Ac(42,"Number"),f.Ob(),f.Pb(43,"td",6),f.Ac(44,"24"),f.Ob(),f.Pb(45,"td",4),f.Ac(46,"Defines the size of the letter avatar in px"),f.Ob(),f.Ob(),f.Ob(),f.Ob(),f.Ob(),f.Pb(47,"div",8),f.Pb(48,"h3",9),f.Ac(49,"Code & Examples"),f.Ob(),f.Pb(50,"h4"),f.Ac(51,"Standard behaviour"),f.Ob(),f.Pb(52,"p"),f.Ac(53,"The letter avatar gets a hover effect when hovering over anything inside his direct parent. See it in action by hovering over the name."),f.Ob(),f.Pb(54,"div",10),f.Pb(55,"div",11),f.Kb(56,"clr-letter-avatar",12),f.Pb(57,"a",13),f.Ac(58,"John Doe"),f.Ob(),f.Ob(),f.Ob(),f.Kb(59,"clr-code-snippet",14),f.Pb(60,"h4"),f.Ac(61,"Larger size"),f.Ob(),f.Pb(62,"p"),f.Ac(63,"For a larger size of the avatar set the "),f.Pb(64,"code",15),f.Ac(65,"clrSize"),f.Ob(),f.Ac(66," attribute and adapt the font-size of the avatar accordingly."),f.Ob(),f.Pb(67,"div",10),f.Pb(68,"div",11),f.Kb(69,"clr-letter-avatar",16),f.Pb(70,"a",13),f.Ac(71,"John Doe"),f.Ob(),f.Ob(),f.Ob(),f.Kb(72,"clr-code-snippet",14),f.Ob(),f.Ob(),f.Ob()),2&e&&(f.gc("title",t.title),f.yb(59),f.gc("clrCode",t.htmlExample),f.yb(13),f.gc("clrCode",t.htmlExample2))},directives:[u.a,p.s,h.a],styles:[".parent[_ngcontent-%COMP%]{cursor:pointer;display:flex;align-items:center}.demo-avatar[_ngcontent-%COMP%]{margin-right:.5rem}.avatar-large[_ngcontent-%COMP%]{font-size:1rem}"]}),c),O=o("JsA7"),P=o("tyNb"),m=o("XPsC"),y=((i=function t(){e(this,t)}).\u0275fac=function(e){return new(e||i)},i.\u0275mod=f.Hb({type:i}),i.\u0275inj=f.Gb({imports:[[l.c,b.h,s.a,m.a,O.a,P.g.forChild([{path:"",component:v}]),p.b]]}),i)}}])}();