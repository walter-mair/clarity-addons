function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var r,n=_getPrototypeOf(t);if(e){var i=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{lJe0:function(t,e,r){"use strict";r.r(e),r.d(e,"HistoryDemoModule",(function(){return S}));var n,i,o=r("ofXK"),c=r("8MG2"),a=r("6Y1o"),b=r("N+3j"),s=r("fXoL"),l=r("0G9f"),d=r("tyNb"),p=r("vAyd"),u=((n=function(t){_inherits(r,t);var e=_createSuper(r);function r(t){var n;return _classCallCheck(this,r),(n=e.call(this,"history")).historyService=t,n.htmlExample='\n<clr-history [clrUsername]=""admin"" [clrContext]="context"></clr-history>\n',n.htmlExamplePinned='\n<clr-history-pinned [clrUsername]=""admin"" [clrContext]="context"></clr-history-pinned>\n',n.angularExample='\nconst historyEntry1: ClrHistoryModel = {username: "admin", pageName: "DocPage",\nurl: "https://porscheinformatik.github.io/clarity-addons/documentation/latest/get-started", title: "DocPage",\ncontext: {\n    applicationName: "ADDONS"\n}};\nthis.historyService.addHistoryEntry(historyEntry1);\nconst historyEntry2: ClrHistoryModel = {username: "admin", pageName: "SourcePage",\nurl: "https://porscheinformatik.github.io/clarity-addons/documentation/latest/get-started", title: "SourcePage",\ncontext: {\n    applicationName: "ADDONS"\n}};\nthis.historyService.addHistoryEntry(historyEntry2);',n.angularExampleContext='\ncontext = {["applicationName"] : "ADDONS"};\n',n.context={applicationName:"ADDONS"},n}return _createClass(r,[{key:"ngOnInit",value:function(){this.historyService.addHistoryEntry({username:"admin",pageName:"DocPage",url:"https://porscheinformatik.github.io/clarity-addons/documentation/latest/get-started",title:"DocPage",context:{applicationName:"ADDONS"}},"porscheinformatik.github.io"),this.historyService.addHistoryEntry({username:"admin",pageName:"SourcePage",url:"https://github.com/porscheinformatik/clarity-addons",title:"SourcePage",context:{applicationName:"ADDONS"}},"porscheinformatik.github.io"),this.historyService.addHistoryEntry({username:"admin",pageName:"GitHub",url:"https://github.com/porscheinformatik/clarity-addons",title:"GitHub",context:{applicationName:"ADDONS"}},"porscheinformatik.github.io")}}]),r}(b.a)).\u0275fac=function(t){return new(t||n)(s.Nb(a.t))},n.\u0275cmp=s.Hb({type:n,selectors:[["clr-history-demo"]],hostVars:4,hostBindings:function(t,e){2&t&&s.Eb("content-area",!0)("dox-content-panel",!0)},features:[s.Ab([a.t]),s.yb],decls:170,vars:16,consts:[[3,"ng","ui","title","newLayout"],["id","generic-pager-header",1,"component-summary"],["id","design-guidelines"],[1,"row"],[1,"clr-col-md-12","clr-col-lg-6"],[1,"clrweb-DoxMedia"],[1,"clrweb-DoxMedia-block"],[1,"clrweb-DoxMedia-img"],["routerLink","/full-page-layouts/content-with-history","routerLinkActive","active","clrMainNavGroupItem","",1,"nav-link"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["id","code-examples"],["id","examples"],[1,"clr-code"],[3,"clrCode","clrLanguage"],[1,"clrweb-DoxMedia-img","history-demo"],[3,"clrUsername","clrContext","clrDomain"],[3,"clrCode"]],template:function(t,e){1&t&&(s.Tb(0,"clr-doc-wrapper",0),s.Tb(1,"article"),s.Tb(2,"h5",1),s.Fc(3," History is used to navigate back to last viewed pages. It's like a browser history, but only manually added pages are available in the history. It must be pointet out, that a history is "),s.Tb(4,"strong"),s.Fc(5,"not"),s.Sb(),s.Fc(6," a breadcrumb! "),s.Sb(),s.Tb(7,"div",2),s.Tb(8,"h3"),s.Fc(9,"Usage"),s.Sb(),s.Tb(10,"p"),s.Fc(11,"The history provides a pinned feature. The pinned feature can be activate through clrPinActive. If active you can add the clr-history-pinned component. The normal history component is delivered as a dropdown. The pinned version is a list of links."),s.Sb(),s.Tb(12,"h3"),s.Fc(13,"Note"),s.Sb(),s.Tb(14,"p"),s.Fc(15,"The last added/current page is not displayed to avoid a link to the current page. Circles are handled by ignoring equal pages. History entries are filtered for the user and the same context. "),s.Sb(),s.Sb(),s.Tb(16,"div",3),s.Tb(17,"div",4),s.Tb(18,"div",5),s.Tb(19,"div",6),s.Tb(20,"div",7),s.Tb(21,"a",8),s.Fc(22,"See -> Content Panel Layout with History"),s.Sb(),s.Sb(),s.Sb(),s.Tb(23,"p"),s.Fc(24," The history should be placed in the header on the right side! "),s.Sb(),s.Sb(),s.Sb(),s.Tb(25,"div",4),s.Tb(26,"div",5),s.Tb(27,"div",6),s.Tb(28,"div",7),s.Tb(29,"a",8),s.Fc(30,"See -> Content Panel Layout with History"),s.Sb(),s.Sb(),s.Sb(),s.Tb(31,"p"),s.Fc(32," The pinned history should be placed over the header left aligned! "),s.Sb(),s.Sb(),s.Sb(),s.Tb(33,"h3"),s.Fc(34,"Summary of Options"),s.Sb(),s.Tb(35,"table",9),s.Tb(36,"thead"),s.Tb(37,"tr"),s.Tb(38,"th",10),s.Fc(39,"Input"),s.Sb(),s.Tb(40,"th",11),s.Fc(41,"Values"),s.Sb(),s.Tb(42,"th",12),s.Fc(43,"Default"),s.Sb(),s.Tb(44,"th",10),s.Fc(45,"Effect"),s.Sb(),s.Sb(),s.Sb(),s.Tb(46,"tbody"),s.Tb(47,"tr"),s.Tb(48,"td",10),s.Tb(49,"b"),s.Fc(50,"[clrUsername]"),s.Sb(),s.Tb(51,"div",13),s.Fc(52,"Type: String"),s.Sb(),s.Tb(53,"div",13),s.Fc(54,"empty"),s.Sb(),s.Sb(),s.Tb(55,"td",11),s.Fc(56,"string"),s.Sb(),s.Tb(57,"td",12),s.Fc(58,"empty"),s.Sb(),s.Tb(59,"td",10),s.Fc(60,"The current username."),s.Sb(),s.Sb(),s.Tb(61,"tr"),s.Tb(62,"td",10),s.Tb(63,"b"),s.Fc(64,"[clrContext]"),s.Sb(),s.Tb(65,"div",13),s.Fc(66,"List of key:string/value:string"),s.Sb(),s.Ob(67,"div",13),s.Sb(),s.Tb(68,"td",11),s.Fc(69,"List of key:string/value:string"),s.Sb(),s.Ob(70,"td",12),s.Tb(71,"td",10),s.Fc(72,"A map of context attributes. You can define any param you want. The history entries are saved/filtered by context."),s.Sb(),s.Sb(),s.Tb(73,"tr"),s.Tb(74,"td",10),s.Tb(75,"b"),s.Fc(76,"[clrPinActive]"),s.Sb(),s.Tb(77,"div",13),s.Fc(78,"boolean"),s.Sb(),s.Tb(79,"div",13),s.Fc(80,"true"),s.Sb(),s.Sb(),s.Tb(81,"td",11),s.Fc(82,"boolean"),s.Sb(),s.Tb(83,"td",12),s.Fc(84,"true"),s.Sb(),s.Tb(85,"td",10),s.Fc(86,"If true, the pinned history feature is available."),s.Sb(),s.Sb(),s.Tb(87,"tr"),s.Tb(88,"td",10),s.Tb(89,"b"),s.Fc(90,"[clrDropdownHeader]"),s.Sb(),s.Tb(91,"div",13),s.Fc(92,"string"),s.Sb(),s.Tb(93,"div",13),s.Fc(94,"History"),s.Sb(),s.Sb(),s.Tb(95,"td",11),s.Fc(96,"string"),s.Sb(),s.Tb(97,"td",12),s.Fc(98,"History"),s.Sb(),s.Tb(99,"td",10),s.Fc(100,"The header text in the dropdonw. You can provide your own translated text."),s.Sb(),s.Sb(),s.Tb(101,"tr"),s.Tb(102,"td",10),s.Tb(103,"b"),s.Fc(104,"[clrDropdownPin]"),s.Sb(),s.Tb(105,"div",13),s.Fc(106,"string"),s.Sb(),s.Tb(107,"div",13),s.Fc(108,"Pin History"),s.Sb(),s.Sb(),s.Tb(109,"td",11),s.Fc(110,"string"),s.Sb(),s.Tb(111,"td",12),s.Fc(112,"Pin History"),s.Sb(),s.Tb(113,"td",10),s.Fc(114,"The pin histoy text in the dropdonw. You can provide your own translated text. "),s.Sb(),s.Sb(),s.Tb(115,"tr"),s.Tb(116,"td",10),s.Tb(117,"b"),s.Fc(118,"[clrDropdownUnpin]"),s.Sb(),s.Tb(119,"div",13),s.Fc(120,"string"),s.Sb(),s.Tb(121,"div",13),s.Fc(122,"History"),s.Sb(),s.Sb(),s.Tb(123,"td",11),s.Fc(124,"string"),s.Sb(),s.Tb(125,"td",12),s.Fc(126,"History"),s.Sb(),s.Tb(127,"td",10),s.Fc(128,"The unpin histoy text in the dropdonw. You can provide your own translated text."),s.Sb(),s.Sb(),s.Tb(129,"tr"),s.Tb(130,"td",10),s.Tb(131,"b"),s.Fc(132,"[clrHideLaste]"),s.Sb(),s.Tb(133,"div",13),s.Fc(134,"boolean"),s.Sb(),s.Tb(135,"div",13),s.Fc(136,"true"),s.Sb(),s.Sb(),s.Tb(137,"td",11),s.Fc(138,"boolean"),s.Sb(),s.Tb(139,"td",12),s.Fc(140,"true"),s.Sb(),s.Tb(141,"td",10),s.Fc(142,"If false, also the last entry is shown. This is used if you only show the history and don't add a new entry on a page."),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(143,"div",14),s.Tb(144,"h3",15),s.Fc(145,"Code & Examples"),s.Sb(),s.Tb(146,"p"),s.Fc(147," To set the history, the service "),s.Tb(148,"code",16),s.Fc(149,"ClrHistoryService"),s.Sb(),s.Fc(150," in conjunction with "),s.Tb(151,"code",16),s.Fc(152,"ClrHistoryModel"),s.Sb(),s.Fc(153," has to be used. "),s.Sb(),s.Ob(154,"clr-code-snippet",17),s.Ob(155,"clr-code-snippet",17),s.Tb(156,"div",5),s.Tb(157,"div",6),s.Tb(158,"div",18),s.Ob(159,"clr-history",19),s.Sb(),s.Sb(),s.Sb(),s.Tb(160,"p"),s.Fc(161," To display the history simply place the angular component. "),s.Sb(),s.Ob(162,"clr-code-snippet",20),s.Tb(163,"div",5),s.Tb(164,"div",6),s.Tb(165,"div",18),s.Ob(166,"clr-history-pinned",19),s.Sb(),s.Sb(),s.Sb(),s.Tb(167,"p"),s.Fc(168," To use the pinned feature simply place the angular component. "),s.Sb(),s.Ob(169,"clr-code-snippet",20),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.lc("ng",e.ng)("ui",e.ui)("title",e.title)("newLayout",e.newLayout),s.Bb(154),s.lc("clrCode",e.angularExample)("clrLanguage","typescript"),s.Bb(1),s.lc("clrCode",e.angularExampleContext)("clrLanguage","typescript"),s.Bb(4),s.lc("clrUsername","admin")("clrContext",e.context)("clrDomain","porscheinformatik.github.io"),s.Bb(3),s.lc("clrCode",e.htmlExample),s.Bb(4),s.lc("clrUsername","admin")("clrContext",e.context)("clrDomain","porscheinformatik.github.io"),s.Bb(3),s.lc("clrCode",e.htmlExamplePinned))},directives:[l.a,d.f,d.e,a.w,p.a,a.r,a.s],styles:[".history-demo[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] { display: block; margin-top: -12px; }",".clrweb-DoxMedia-block[_ngcontent-%COMP%] { min-height: 60px; }"]}),n),h=r("JsA7"),y=r("XPsC"),S=((i=function t(){_classCallCheck(this,t)}).\u0275mod=s.Lb({type:i}),i.\u0275inj=s.Kb({factory:function(t){return new(t||i)},imports:[[o.c,y.a,h.a,d.g.forChild([{path:"",component:u}]),c.a,a.b]]}),i)}}]);