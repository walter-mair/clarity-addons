!function(){function l(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{ycT4:function(c,r,o){"use strict";o.r(r),o.d(r,"FormsLayoutDemoModule",(function(){return N}));var n,e,t=o("ofXK"),a=o("tyNb"),b=o("8MG2"),s=o("6Y1o"),i=o("fTK2"),p=o("XPsC"),u=o("fXoL"),m=o("2HPr"),d=o("vAyd"),g=((e=function c(){l(this,c),this.codeExample='\n<form clrForm [clrLayout]="\'horizontal\'" class="clr-row">\n    <h4 class="clr-col-12">Personal Data</h4>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">First name</label>\n        <input clrInput type="text" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-input-container>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Last name</label>\n        <input clrInput type="text" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-input-container>\n    <clr-radio-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Gender</label>\n        <clr-radio-wrapper>\n            <label>Male</label>\n            <input clrRadio class="clr-col-12 clr-col-sm-4 clr-col-lg-6" type="radio" name="gender"/>\n        </clr-radio-wrapper>\n        <clr-radio-wrapper>\n            <label>Female</label>\n            <input clrRadio class="clr-col-12 clr-col-sm-4 clr-col-lg-6" type="radio" name="gender"/>\n        </clr-radio-wrapper>\n    </clr-radio-container>\n    <clr-select-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Country</label>\n        <select clrSelect class="clr-col-12 clr-col-sm-3 clr-col-lg-5">\n            <option>Austria</option>\n            <option>Germany</option>\n            <option>United States of America</option>\n        </select>\n    </clr-select-container>\n    <clr-date-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Date of Birth</label>\n        <input clrDate type="text" class="clr-col-12 clr-col-sm-6 clr-col-lg-6"/>\n    </clr-date-container>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">E-Mail</label>\n        <input clrInput type="text" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-input-container>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Phone</label>\n        <input clrInput type="text" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-input-container>\n\n    <h4 class="clr-col-12">User Data</h4>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Username</label>\n        <input clrInput type="text" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-input-container>\n    <clr-password-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Password</label>\n        <input clrPassword type="password" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-password-container>\n\n    <h4 class="clr-col-12">Other Data</h4>\n    <clr-date-time-container class="clr-col-12 clr-col-lg-6 clr-row">\n        <clr-date-container>\n            <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Start date & time</label>\n            <input clrDate type="text" class="clr-col-12 clr-col-sm-10 clr-col-lg-9"/>\n        </clr-date-container>\n        <input clrTime type="time" />\n    </clr-date-time-container>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">End time</label>\n        <input clrInput type="time" class="clr-col-12 clr-col-sm-3 clr-col-lg-5"/>\n    </clr-input-container>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Daily Donation</label>\n        <input clrInput clrNumeric [clrUnit]="\'\u20ac\'" type="text" class="clr-col-12 clr-col-sm-3 clr-col-lg-5"/>\n    </clr-input-container>\n    <clr-checkbox-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Newsletter Subscriptions</label>\n        <clr-checkbox-wrapper>\n            <label>Weekly</label>\n            <input clrCheckbox class="clr-col-12 clr-col-sm-6 clr-col-lg-6" type="checkbox"/>\n        </clr-checkbox-wrapper>\n        <clr-checkbox-wrapper>\n            <label>Monthly</label>\n            <input clrCheckbox class="clr-col-12 clr-col-sm-6 clr-col-lg-6" type="checkbox"/>\n        </clr-checkbox-wrapper>\n    </clr-checkbox-container>\n    <clr-textarea-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Comment / Feedback</label>\n        <textarea clrTextarea type="text" class="clr-col-12 clr-col-sm-10 clr-col-lg-9"></textarea>\n    </clr-textarea-container>\n</form>\n'}).\u0275fac=function(l){return new(l||e)},e.\u0275cmp=u.Cb({type:e,selectors:[["clr-forms-layout-demo"]],decls:97,vars:3,consts:[[1,"content-header"],[1,"content-container"],[1,"content-area"],["clrForm","",1,"clr-row",3,"clrLayout"],[1,"clr-col-12"],[1,"clr-col-12","clr-col-lg-6"],[1,"clr-col-12","clr-col-sm-2","clr-col-lg-3"],["clrInput","","type","text",1,"clr-col-12","clr-col-sm-4","clr-col-lg-6"],["clrRadio","","type","radio","name","gender",1,"clr-col-12","clr-col-sm-4","clr-col-lg-6"],["clrSelect","",1,"clr-col-12","clr-col-sm-3","clr-col-lg-5"],["clrDate","","type","text",1,"clr-col-12","clr-col-sm-6","clr-col-lg-6"],["clrPassword","","type","password",1,"clr-col-12","clr-col-sm-4","clr-col-lg-6"],[1,"clr-col-12","clr-col-lg-6","clr-row"],["clrDate","","type","text",1,"clr-col-12","clr-col-sm-10","clr-col-lg-9"],["clrTime","","type","time"],["clrInput","","type","time",1,"clr-col-12","clr-col-sm-3","clr-col-lg-5"],["clrInput","","clrNumeric","","type","text",1,"clr-col-12","clr-col-sm-3","clr-col-lg-5",3,"clrUnit"],["clrCheckbox","","type","checkbox",1,"clr-col-12","clr-col-sm-6","clr-col-lg-6"],["clrTextarea","","type","text",1,"clr-col-12","clr-col-sm-10","clr-col-lg-9"],[1,"clr-row"],[1,"clr-col-8",3,"clrCode"]],template:function(l,c){1&l&&(u.Ob(0,"clr-main-container"),u.Jb(1,"clr-demo-menu"),u.Ob(2,"div",0),u.Jb(3,"clr-back-button"),u.Ob(4,"h2"),u.Bc(5,"Forms Layout"),u.Nb(),u.Nb(),u.Ob(6,"div",1),u.Ob(7,"div",2),u.Ob(8,"form",3),u.Ob(9,"h4",4),u.Bc(10,"Personal Data"),u.Nb(),u.Ob(11,"clr-input-container",5),u.Ob(12,"label",6),u.Bc(13,"First name"),u.Nb(),u.Jb(14,"input",7),u.Nb(),u.Ob(15,"clr-input-container",5),u.Ob(16,"label",6),u.Bc(17,"Last name"),u.Nb(),u.Jb(18,"input",7),u.Nb(),u.Ob(19,"clr-radio-container",5),u.Ob(20,"label",6),u.Bc(21,"Gender"),u.Nb(),u.Ob(22,"clr-radio-wrapper"),u.Ob(23,"label"),u.Bc(24,"Male"),u.Nb(),u.Jb(25,"input",8),u.Nb(),u.Ob(26,"clr-radio-wrapper"),u.Ob(27,"label"),u.Bc(28,"Female"),u.Nb(),u.Jb(29,"input",8),u.Nb(),u.Nb(),u.Ob(30,"clr-select-container",5),u.Ob(31,"label",6),u.Bc(32,"Country"),u.Nb(),u.Ob(33,"select",9),u.Ob(34,"option"),u.Bc(35,"Austria"),u.Nb(),u.Ob(36,"option"),u.Bc(37,"Germany"),u.Nb(),u.Ob(38,"option"),u.Bc(39,"United States of America"),u.Nb(),u.Nb(),u.Nb(),u.Ob(40,"clr-date-container",5),u.Ob(41,"label",6),u.Bc(42,"Date of Birth"),u.Nb(),u.Jb(43,"input",10),u.Nb(),u.Ob(44,"clr-input-container",5),u.Ob(45,"label",6),u.Bc(46,"E-Mail"),u.Nb(),u.Jb(47,"input",7),u.Nb(),u.Ob(48,"clr-input-container",5),u.Ob(49,"label",6),u.Bc(50,"Phone"),u.Nb(),u.Jb(51,"input",7),u.Nb(),u.Ob(52,"h4",4),u.Bc(53,"User Data"),u.Nb(),u.Ob(54,"clr-input-container",5),u.Ob(55,"label",6),u.Bc(56,"Username"),u.Nb(),u.Jb(57,"input",7),u.Nb(),u.Ob(58,"clr-password-container",5),u.Ob(59,"label",6),u.Bc(60,"Password"),u.Nb(),u.Jb(61,"input",11),u.Nb(),u.Ob(62,"h4",4),u.Bc(63,"Other Data"),u.Nb(),u.Ob(64,"clr-date-time-container",12),u.Ob(65,"clr-date-container"),u.Ob(66,"label",6),u.Bc(67,"Start date & time"),u.Nb(),u.Jb(68,"input",13),u.Nb(),u.Jb(69,"input",14),u.Nb(),u.Ob(70,"clr-input-container",5),u.Ob(71,"label",6),u.Bc(72,"End time"),u.Nb(),u.Jb(73,"input",15),u.Nb(),u.Ob(74,"clr-input-container",5),u.Ob(75,"label",6),u.Bc(76,"Daily Donation"),u.Nb(),u.Jb(77,"input",16),u.Nb(),u.Ob(78,"clr-checkbox-container",5),u.Ob(79,"label",6),u.Bc(80,"Newsletter Subscriptions"),u.Nb(),u.Ob(81,"clr-checkbox-wrapper"),u.Ob(82,"label"),u.Bc(83,"Weekly"),u.Nb(),u.Jb(84,"input",17),u.Nb(),u.Ob(85,"clr-checkbox-wrapper"),u.Ob(86,"label"),u.Bc(87,"Monthly"),u.Nb(),u.Jb(88,"input",17),u.Nb(),u.Nb(),u.Ob(89,"clr-textarea-container",5),u.Ob(90,"label",6),u.Bc(91,"Comment / Feedback"),u.Nb(),u.Jb(92,"textarea",18),u.Nb(),u.Nb(),u.Ob(93,"h3"),u.Bc(94,"Source Code"),u.Nb(),u.Ob(95,"div",19),u.Jb(96,"clr-code-snippet",20),u.Nb(),u.Nb(),u.Nb(),u.Nb()),2&l&&(u.xb(8),u.fc("clrLayout","horizontal"),u.xb(69),u.fc("clrUnit","\u20ac"),u.xb(19),u.fc("clrCode",c.codeExample))},directives:[b.G,b.U,m.a,s.c,b.w,b.F,b.D,b.E,s.T,b.C,b.N,b.O,b.M,b.Q,b.P,b.q,b.r,b.L,b.K,s.k,s.J,s.A,b.g,b.h,b.f,b.S,b.R,d.a],encapsulation:2}),e),N=((n=function c(){l(this,c)}).\u0275mod=u.Gb({type:n}),n.\u0275inj=u.Fb({factory:function(l){return new(l||n)},imports:[[t.c,b.a,i.a,a.g.forChild([{path:"",component:g,outlet:"fullpage"}]),s.b,p.a]]}),n)}}])}();