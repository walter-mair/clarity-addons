(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{HAsF:function(e,t,c){"use strict";c.r(t),c.d(t,"ViewEditSectionDemoModule",(function(){return x}));var n=c("ofXK"),i=c("3Pt+"),l=c("8MG2"),o=c("6Y1o"),b=c("N+3j"),r=c("fXoL"),d=c("0G9f"),a=c("vAyd");function s(e,t){if(1&e&&(r.Tb(0,"form",32),r.Tb(1,"div",33),r.Tb(2,"label",34),r.Fc(3,"First name"),r.Sb(),r.Tb(4,"span",35),r.Fc(5),r.Sb(),r.Sb(),r.Tb(6,"div",33),r.Tb(7,"label",34),r.Fc(8,"Last name"),r.Sb(),r.Tb(9,"span",35),r.Fc(10),r.Sb(),r.Sb(),r.Tb(11,"div",33),r.Tb(12,"label",34),r.Fc(13,"E-mail"),r.Sb(),r.Tb(14,"span",35),r.Fc(15),r.Sb(),r.Sb(),r.Sb()),2&e){const e=r.dc();r.Bb(5),r.Gc(e.first||"\xa0"),r.Bb(5),r.Gc(e.last||"\xa0"),r.Bb(5),r.Gc(e.email||"\xa0")}}function m(e,t){if(1&e){const e=r.Ub();r.Tb(0,"form",36),r.bc("submit",(function(){return r.xc(e),r.dc().onFormSubmit()})),r.Tb(1,"clr-input-container"),r.Tb(2,"label",37),r.Fc(3,"First name"),r.Sb(),r.Ob(4,"input",38),r.Tb(5,"clr-control-error"),r.Fc(6,"You must enter a first name."),r.Sb(),r.Sb(),r.Tb(7,"clr-input-container"),r.Tb(8,"label",37),r.Fc(9,"Last name"),r.Sb(),r.Ob(10,"input",39),r.Tb(11,"clr-control-error"),r.Fc(12,"You must enter a last name."),r.Sb(),r.Sb(),r.Tb(13,"clr-input-container"),r.Tb(14,"label",40),r.Fc(15,"E-mail"),r.Sb(),r.Ob(16,"input",41),r.Sb(),r.Ob(17,"input",42),r.Sb()}if(2&e){const e=r.dc();r.lc("formGroup",e.exampleForm)}}function u(e,t){if(1&e&&(r.Tb(0,"form",32),r.Tb(1,"div",33),r.Tb(2,"label",34),r.Fc(3,"Hobby"),r.Sb(),r.Tb(4,"span",35),r.Fc(5),r.Sb(),r.Sb(),r.Tb(6,"div",33),r.Tb(7,"label",34),r.Fc(8,"Driving licence number"),r.Sb(),r.Tb(9,"span",35),r.Fc(10),r.Sb(),r.Sb(),r.Sb()),2&e){const e=r.dc();r.Bb(5),r.Gc(e.hobby||"\xa0"),r.Bb(5),r.Gc(e.licence||"\xa0")}}const S=function(){return{updateOn:"blur"}};function T(e,t){if(1&e){const e=r.Ub();r.Tb(0,"form",43),r.bc("submit",(function(){return r.xc(e),r.dc().onAddFormSubmit()})),r.Tb(1,"clr-input-container"),r.Tb(2,"label",40),r.Fc(3,"Hobby"),r.Sb(),r.Tb(4,"input",44),r.bc("ngModelChange",(function(t){return r.xc(e),r.dc().editHobby=t})),r.Sb(),r.Sb(),r.Tb(5,"clr-input-container"),r.Tb(6,"label",40),r.Fc(7,"Driving licence number"),r.Sb(),r.Tb(8,"input",45),r.bc("ngModelChange",(function(t){return r.xc(e),r.dc().editLicence=t})),r.Sb(),r.Sb(),r.Ob(9,"input",42),r.Sb()}if(2&e){const e=r.dc();r.Bb(4),r.lc("ngModel",e.editHobby)("ngModelOptions",r.pc(4,S)),r.Bb(4),r.lc("ngModel",e.editLicence)("ngModelOptions",r.pc(5,S))}}function p(e,t){if(1&e){const e=r.Ub();r.Tb(0,"clr-dropdown-menu",49),r.Tb(1,"button",50),r.bc("click",(function(){return r.xc(e),r.dc(2).onEdit()})),r.Fc(2," Edit "),r.Sb(),r.Tb(3,"button",51),r.Fc(4," Duplicate "),r.Sb(),r.Tb(5,"button",51),r.Fc(6," Delete "),r.Sb(),r.Sb()}}function h(e,t){1&e&&(r.Tb(0,"clr-dropdown"),r.Tb(1,"button",46),r.Ob(2,"clr-icon",47),r.Sb(),r.Dc(3,p,7,0,"clr-dropdown-menu",48),r.Sb())}function f(e,t){if(1&e&&(r.Tb(0,"form",32),r.Tb(1,"div",33),r.Tb(2,"label",52),r.Fc(3,"Date of birth"),r.Sb(),r.Tb(4,"span",53),r.Fc(5),r.ec(6,"date"),r.Sb(),r.Sb(),r.Tb(7,"div",33),r.Tb(8,"label",54),r.Fc(9,"Gender"),r.Sb(),r.Tb(10,"span",53),r.Fc(11),r.Sb(),r.Sb(),r.Tb(12,"div",33),r.Tb(13,"label",55),r.Fc(14,"Status"),r.Sb(),r.Tb(15,"span",53),r.Fc(16),r.Sb(),r.Sb(),r.Tb(17,"div",33),r.Tb(18,"label",56),r.Fc(19,"Terms & Conditions"),r.Sb(),r.Tb(20,"span",53),r.Fc(21),r.Sb(),r.Sb(),r.Sb()),2&e){const e=r.dc();r.Bb(5),r.Gc(r.fc(6,4,e.birthdate||"")),r.Bb(6),r.Gc(e.gender||"\xa0"),r.Bb(5),r.Gc(e.status||"\xa0"),r.Bb(5),r.Gc(e.getTermsText())}}function F(e,t){if(1&e){const e=r.Ub();r.Tb(0,"form",43),r.bc("submit",(function(){return r.xc(e),r.dc().onCompFormSubmit()})),r.Tb(1,"clr-date-container",11),r.Tb(2,"label"),r.Fc(3,"Date of birth"),r.Sb(),r.Tb(4,"input",57),r.bc("ngModelChange",(function(t){return r.xc(e),r.dc().editBirthdate=t})),r.Sb(),r.Sb(),r.Tb(5,"clr-select-container"),r.Tb(6,"label"),r.Fc(7,"Gender"),r.Sb(),r.Tb(8,"select",58),r.bc("ngModelChange",(function(t){return r.xc(e),r.dc().editGender=t})),r.Tb(9,"option"),r.Fc(10,"male"),r.Sb(),r.Tb(11,"option"),r.Fc(12,"female"),r.Sb(),r.Sb(),r.Sb(),r.Tb(13,"clr-radio-container"),r.Tb(14,"label"),r.Fc(15,"Status"),r.Sb(),r.Tb(16,"clr-radio-wrapper"),r.Tb(17,"input",59),r.bc("ngModelChange",(function(t){return r.xc(e),r.dc().editStatus=t})),r.Sb(),r.Tb(18,"label"),r.Fc(19,"Active"),r.Sb(),r.Sb(),r.Tb(20,"clr-radio-wrapper"),r.Tb(21,"input",59),r.bc("ngModelChange",(function(t){return r.xc(e),r.dc().editStatus=t})),r.Sb(),r.Tb(22,"label"),r.Fc(23,"Inactive"),r.Sb(),r.Sb(),r.Sb(),r.Tb(24,"clr-checkbox-container"),r.Tb(25,"label"),r.Fc(26,"Terms & Conditions"),r.Sb(),r.Tb(27,"clr-checkbox-wrapper"),r.Tb(28,"label",21),r.Fc(29,"I agree to the terms and conditions"),r.Sb(),r.Tb(30,"input",60),r.bc("ngModelChange",(function(t){return r.xc(e),r.dc().editTerms=t})),r.Sb(),r.Sb(),r.Sb(),r.Ob(31,"input",42),r.Sb()}if(2&e){const e=r.dc();r.Bb(4),r.lc("ngModel",e.editBirthdate)("ngModelOptions",r.pc(8,S)),r.Bb(4),r.lc("ngModel",e.editGender),r.Bb(9),r.lc("value",1)("ngModel",e.editStatus),r.Bb(4),r.lc("value",2)("ngModel",e.editStatus),r.Bb(9),r.lc("ngModel",e.editTerms)}}function g(e,t){1&e&&(r.Tb(0,"form",32),r.Tb(1,"div",33),r.Tb(2,"label",61),r.Fc(3,"Hobby"),r.Sb(),r.Tb(4,"span",53),r.Fc(5,"Computer"),r.Sb(),r.Sb(),r.Tb(6,"div",33),r.Tb(7,"label",61),r.Fc(8,"Driving licence number"),r.Sb(),r.Tb(9,"span",53),r.Fc(10,"12345"),r.Sb(),r.Sb(),r.Sb())}function v(e,t){if(1&e&&(r.Tb(0,"form",32),r.Tb(1,"div",33),r.Tb(2,"label",52),r.Fc(3,"Date of birth"),r.Sb(),r.Tb(4,"span",53),r.Fc(5),r.ec(6,"date"),r.Sb(),r.Sb(),r.Tb(7,"div",33),r.Tb(8,"label",54),r.Fc(9,"Gender"),r.Sb(),r.Tb(10,"span",53),r.Fc(11),r.Sb(),r.Sb(),r.Tb(12,"div",33),r.Tb(13,"label",55),r.Fc(14,"Status"),r.Sb(),r.Tb(15,"span",53),r.Fc(16),r.Sb(),r.Sb(),r.Tb(17,"div",33),r.Tb(18,"label",56),r.Fc(19,"Terms & Conditions"),r.Sb(),r.Tb(20,"span",53),r.Fc(21),r.Sb(),r.Sb(),r.Sb()),2&e){const e=r.dc();r.Bb(5),r.Gc(r.fc(6,4,e.birthdate||"")),r.Bb(6),r.Gc(e.gender||"\xa0"),r.Bb(5),r.Gc(e.status||"\xa0"),r.Bb(5),r.Gc(e.getTermsText())}}function w(e,t){if(1&e){const e=r.Ub();r.Tb(0,"form",43),r.bc("submit",(function(){return r.xc(e),r.dc().onCompFormSubmit()})),r.Tb(1,"clr-date-container",11),r.Tb(2,"label"),r.Fc(3,"Date of birth"),r.Sb(),r.Tb(4,"input",57),r.bc("ngModelChange",(function(t){return r.xc(e),r.dc().editBirthdate=t})),r.Sb(),r.Sb(),r.Tb(5,"clr-select-container"),r.Tb(6,"label"),r.Fc(7,"Gender"),r.Sb(),r.Tb(8,"select",58),r.bc("ngModelChange",(function(t){return r.xc(e),r.dc().editGender=t})),r.Tb(9,"option"),r.Fc(10,"male"),r.Sb(),r.Tb(11,"option"),r.Fc(12,"female"),r.Sb(),r.Sb(),r.Sb(),r.Tb(13,"clr-radio-container"),r.Tb(14,"label"),r.Fc(15,"Status"),r.Sb(),r.Tb(16,"clr-radio-wrapper"),r.Tb(17,"input",59),r.bc("ngModelChange",(function(t){return r.xc(e),r.dc().editStatus=t})),r.Sb(),r.Tb(18,"label"),r.Fc(19,"Active"),r.Sb(),r.Sb(),r.Tb(20,"clr-radio-wrapper"),r.Tb(21,"input",59),r.bc("ngModelChange",(function(t){return r.xc(e),r.dc().editStatus=t})),r.Sb(),r.Tb(22,"label"),r.Fc(23,"Inactive"),r.Sb(),r.Sb(),r.Sb(),r.Tb(24,"clr-checkbox-container"),r.Tb(25,"label"),r.Fc(26,"Terms & Conditions"),r.Sb(),r.Tb(27,"clr-checkbox-wrapper"),r.Tb(28,"label",21),r.Fc(29,"I agree to the terms and conditions"),r.Sb(),r.Tb(30,"input",60),r.bc("ngModelChange",(function(t){return r.xc(e),r.dc().editTerms=t})),r.Sb(),r.Sb(),r.Sb(),r.Ob(31,"input",42),r.Sb()}if(2&e){const e=r.dc();r.Bb(4),r.lc("ngModel",e.editBirthdate)("ngModelOptions",r.pc(8,S)),r.Bb(4),r.lc("ngModel",e.editGender),r.Bb(9),r.lc("value",1)("ngModel",e.editStatus),r.Bb(4),r.lc("value",2)("ngModel",e.editStatus),r.Bb(9),r.lc("ngModel",e.editTerms)}}let E=(()=>{class e extends b.a{constructor(){super("view-edit-section"),this.htmlExampleSideBySide='\n<div class="clr-col-12 clr-col-lg-6">\n    <clr-view-edit-section [(clrEditMode)]="editMode1" [clrPreventModeChangeOnSave]="!exampleForm.valid" [clrTitle]="sectionTitle"\n        (clrSectionSubmitted)="sectionSubmitted()" (clrSectionEditCancelled)="sectionCancelled()"\n        [clrViewRef]="viewBlock1" [clrEditRef]="editBlock1">\n        <ng-template #viewBlock1>\n            <form clrForm clrLayout="horizontal">\n              <div class="clr-form-control clr-row">\n                  <label class="clr-col-md-4 clr-control-label">First name</label>\n                  <span class="text-truncate clr-col-md-8">{{first || "&nbsp;"}}</span>\n              </div>\n              <div class="clr-form-control clr-row">\n                  <label class="clr-col-md-4 clr-control-label">Last name</label>\n                  <span class="text-truncate clr-col-md-8">{{last || "&nbsp;"}}</span>\n              </div>\n              <div class="clr-form-control clr-row">\n                  <label class="clr-col-md-4 clr-control-label">E-mail</label>\n                  <span class="text-truncate clr-col-md-8">{{email || "&nbsp;"}}</span>\n              </div>\n            </form>\n        </ng-template>\n        <ng-template #editBlock1>\n            <form clrForm clrLayout="horizontal" [formGroup]="exampleForm" (submit)="onFormSubmit()">\n              <clr-input-container>\n                  <label class="clr-col-md-4 required">First name</label>\n                  <input class="clr-col-md-8" clrInput type="text" formControlName="editFirst" name="first"/>\n                  <clr-control-error>You must enter a first name.</clr-control-error>\n              </clr-input-container>\n              <clr-input-container>\n                  <label class="clr-col-md-4 required">Last name</label>\n                  <input class="clr-col-md-8" clrInput type="text" formControlName="editLast" name="last"/>\n                  <clr-control-error>You must enter a last name.</clr-control-error>\n              </clr-input-container>\n              <clr-input-container>\n                  <label class="clr-col-md-4">E-mail</label>\n                  <input class="clr-col-md-8" clrInput type="text" formControlName="editEmail" name="email"/>\n              </clr-input-container>\n              <input type="submit" style="display: none">\n            </form>\n        </ng-template>\n    </clr-view-edit-section>\n</div>\n',this.htmlExampleFullIcon='\n<div class="clr-col-12">\n    <clr-view-edit-section [clrTitle]="compSectionTitle" [clrEditIcon]="compEditIcon"\n    clrSaveText="Save it" clrCancelText="Cancel it" (clrSectionSubmitted)="compSectionSubmitted()"\n    (clrSectionEditCancelled)="compSectionCancelled()" [clrViewRef]="viewBlock5" [clrEditRef]="editBlock5">\n        <ng-template #viewBlock5>\n            ...\n        </ng-template>\n        <ng-template #editBlock5>\n            ...\n        </ng-template>\n    </clr-view-edit-section>\n</div>\n',this.htmlExampleFullIconAngular='\ncompEditIcon: string = "cog";\n',this.htmlExampleCustomActions='\n<clr-view-edit-section [(clrEditMode)]="editMode" [clrTitle]="customActionsTitle"\n    (clrSectionSubmitted)="compSectionSubmitted()" (clrSectionEditCancelled)="compSectionCancelled()"\n    [clrViewRef]="viewBlock3" [clrEditRef]="editBlock3">\n    <div action-block>\n        <clr-dropdown *ngIf="!editMode">\n          <button type="button" class="btn btn-icon btn-link ves-action dropdown-toggle" clrDropdownTrigger>\n            <clr-icon shape="ellipsis-vertical"></clr-icon>\n          </button>\n          <clr-dropdown-menu clrPosition="bottom-right" *clrIfOpen>\n            <button type="button" (click)="onEdit()" clrDropdownItem>\n              Edit\n            </button>\n            <button type="button" clrDropdownItem>\n              Duplicate\n            </button>\n            <button type="button" clrDropdownItem>\n              Delete\n            </button>\n          </clr-dropdown-menu>\n        </clr-dropdown>\n    </div>\n    ...\n</clr-view-edit-section>\n',this.htmlExampleNotEditable='\n<clr-view-edit-section clrTitle="Not Editable" [clrEditable]="false" [clrViewRef]="viewBlock4">\n    <ng-template #viewBlock4>\n        ...\n    </ng-template>\n</clr-view-edit-section>\n',this.htmlExampleFormSubmit='\n<clr-view-edit-section [(clrEditMode)]="editMode" (clrSectionSubmitted)="sectionSubmitted()" [clrEditRef]="editBlock">\n    ...\n    <ng-template #editBlock>\n        <form ... (submit)="onFormSubmit()">\n            ...\n            <input type="submit" style="display: none">\n        </form>\n    </ng-template>\n</clr-view-edit-section>\n',this.angularExampleFormSubmit="\neditMode = false;\n\nonFormSubmit() {\n    this.sectionSubmitted();\n    this.editMode = false;\n}\n",this.editMode1=!1,this.editMode2=!1,this.editMode3=!1,this.editMode4=!1,this.gender="male",this.status="Active",this.editBirthdate=this.birthdate,this.editGender=this.gender,this.editStatus=1,this.first="Max",this.last="Mustermann",this.email="m.mustermann@mail.com",this.compSectionTitle="Different components",this.sectionTitle="Personal Data",this.addSectionTitle="Additional Data",this.customActionsTitle="Example with multiple actions",this.compEditIcon="cog",this.exampleForm=new i.e({editFirst:new i.c(this.first,{validators:[i.y.required],updateOn:"blur"}),editLast:new i.c(this.last,{validators:[i.y.required],updateOn:"blur"}),editEmail:new i.c(this.email)})}onCompFormSubmit(){document.activeElement.blur(),this.compSectionSubmitted(),this.editMode3=!1,this.editMode4=!1}compSectionSubmitted(){this.birthdate=this.editBirthdate,this.gender=this.editGender,this.status=1===this.editStatus?"Active":"Inactive",this.terms=this.editTerms}compSectionCancelled(){this.editBirthdate=this.birthdate,this.editGender=this.gender,this.editStatus="Active"===this.status?1:2,this.editTerms=this.terms}getTermsText(){return this.terms?"I agreed":"I disagreed"}onFormSubmit(){document.activeElement.blur(),this.sectionSubmitted(),this.editMode1=!1}sectionSubmitted(){this.exampleForm.valid&&(this.first=this.exampleForm.value.editFirst,this.last=this.exampleForm.value.editLast,this.email=this.exampleForm.value.editEmail)}sectionCancelled(){this.exampleForm.reset({editFirst:this.first,editLast:this.last,editEmail:this.email})}onAddFormSubmit(){document.activeElement.blur(),this.addSectionSubmitted(),this.editMode2=!1}addSectionSubmitted(){this.hobby=this.editHobby,this.licence=this.editLicence}addSectionCancelled(){this.editHobby=this.hobby,this.editLicence=this.licence}onEdit(){this.editMode3=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Hb({type:e,selectors:[["clr-view-edit-section-demo"]],hostVars:4,hostBindings:function(e,t){2&e&&r.Eb("content-area",!0)("dox-content-panel",!0)},features:[r.yb],decls:269,vars:34,consts:[[3,"ng","ui","title","newLayout"],["id","view-edit-section-header",1,"component-summary"],["id","design-guidelines"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],[1,"clr-code"],["id","code-examples"],["id","examples"],[1,"clr-row"],[1,"clr-col-12","clr-col-lg-6"],[3,"clrEditMode","clrPreventModeChangeOnSave","clrTitle","clrViewRef","clrEditRef","clrEditModeChange","clrSectionSubmitted","clrSectionEditCancelled"],["viewBlock1",""],["editBlock1",""],[1,"crl-col-12","clr-col-lg-6"],[3,"clrEditMode","clrTitle","clrViewRef","clrEditRef","clrEditModeChange","clrSectionSubmitted","clrSectionEditCancelled"],["viewBlock2",""],["editBlock2",""],[3,"clrCode"],[1,"clr-col-12"],["action-block",""],[4,"ngIf"],["viewBlock3",""],["editBlock3",""],["clrTitle","Not Editable",3,"clrEditable","clrViewRef"],["viewBlock4",""],["clrSaveText","Save it","clrCancelText","Cancel it",3,"clrEditMode","clrTitle","clrEditIcon","clrViewRef","clrEditRef","clrEditModeChange","clrSectionSubmitted","clrSectionEditCancelled"],["viewBlock5",""],["editBlock5",""],[3,"clrCode","clrLanguage"],["clrForm","","clrLayout","horizontal"],[1,"clr-form-control","clr-row"],[1,"clr-col-md-4","clr-control-label"],[1,"text-truncate","clr-col-md-8"],["clrForm","","clrLayout","horizontal",3,"formGroup","submit"],[1,"clr-col-md-4","required"],["clrInput","","type","text","formControlName","editFirst","name","first",1,"clr-col-md-8"],["clrInput","","type","text","formControlName","editLast","name","last",1,"clr-col-md-8"],[1,"clr-col-md-4"],["clrInput","","type","text","formControlName","editEmail","name","email",1,"clr-col-md-8"],["type","submit",2,"display","none"],["clrForm","","clrLayout","horizontal",3,"submit"],["clrInput","","type","text","name","hobby",1,"clr-col-md-8",3,"ngModel","ngModelOptions","ngModelChange"],["clrInput","","type","text","name","licence",1,"clr-col-md-8",3,"ngModel","ngModelOptions","ngModelChange"],["type","button","clrDropdownTrigger","",1,"btn","btn-icon","btn-link","ves-action","dropdown-toggle"],["shape","ellipsis-vertical"],["clrPosition","bottom-right",4,"clrIfOpen"],["clrPosition","bottom-right"],["type","button","clrDropdownItem","",3,"click"],["type","button","clrDropdownItem",""],["for","birthdate",1,"clr-col-md-2","clr-control-label"],[1,"text-truncate","clr-col-md-10"],["for","gender",1,"clr-col-md-2","clr-control-label"],["for","status",1,"clr-col-md-2","clr-control-label"],["for","terms",1,"clr-col-md-2","clr-control-label"],["type","text","name","birthdate","clrDate","",3,"ngModel","ngModelOptions","ngModelChange"],["clrSelect","","name","gender",3,"ngModel","ngModelChange"],["clrRadio","","type","radio","name","status",3,"value","ngModel","ngModelChange"],["clrCheckbox","","type","checkbox","name","terms",3,"ngModel","ngModelChange"],[1,"clr-col-md-2","clr-control-label"]],template:function(e,t){if(1&e&&(r.Tb(0,"clr-doc-wrapper",0),r.Tb(1,"article"),r.Tb(2,"h5",1),r.Fc(3," The View-Edit Section (VES) is a basic component used to display and edit data. "),r.Ob(4,"br"),r.Fc(5," View-Edit Sections should semantically group information that belongs together, providing a meaningful information structure to the user. "),r.Sb(),r.Tb(6,"div",2),r.Tb(7,"h3"),r.Fc(8,"View-mode"),r.Sb(),r.Tb(9,"p"),r.Fc(10," In view-mode the section consists of label-value pairs to display data to user. The user can switch the mode of the section clicking the pencil-icon when editing data is required. "),r.Sb(),r.Tb(11,"h3"),r.Fc(12,"Edit-mode"),r.Sb(),r.Tb(13,"p"),r.Fc(14," In edit-mode the label-value pairs transform to label-input fields, a form, and can be edited. The changes can be saved or cancelled, which will return the VES back to view-mode. The ESC key also cancels the edit-mode. "),r.Sb(),r.Tb(15,"h3"),r.Fc(16,"Multiple View-Edit Sections"),r.Sb(),r.Tb(17,"p"),r.Fc(18,"There can be multiple View-Edit sections placed in the content area, multiple sections can be edited at once, no automatic inactivation of other View-Edit Sections should occur. "),r.Ob(19,"br"),r.Fc(20," The user needs to actively end the edit-mode by saving or cancelling the changes. "),r.Sb(),r.Tb(21,"h3"),r.Fc(22,"Summary of Options"),r.Sb(),r.Tb(23,"table",3),r.Tb(24,"thead"),r.Tb(25,"tr"),r.Tb(26,"th",4),r.Fc(27,"Property"),r.Sb(),r.Tb(28,"th",5),r.Fc(29,"Values"),r.Sb(),r.Tb(30,"th",6),r.Fc(31,"Default"),r.Sb(),r.Tb(32,"th",4),r.Fc(33,"Effect"),r.Sb(),r.Sb(),r.Sb(),r.Tb(34,"tbody"),r.Tb(35,"tr"),r.Tb(36,"td",4),r.Tb(37,"b"),r.Fc(38,"[(clrEditMode)]"),r.Sb(),r.Tb(39,"div",7),r.Fc(40,"Type: boolean"),r.Sb(),r.Tb(41,"div",7),r.Fc(42,"Default: false"),r.Sb(),r.Sb(),r.Tb(43,"td",5),r.Fc(44,"true, false"),r.Sb(),r.Tb(45,"td",6),r.Fc(46,"false"),r.Sb(),r.Tb(47,"td",4),r.Fc(48,"Controls whether edit mode is active or not"),r.Sb(),r.Sb(),r.Tb(49,"tr"),r.Tb(50,"td",4),r.Tb(51,"b"),r.Fc(52,"[clrViewRef]"),r.Sb(),r.Tb(53,"div",7),r.Fc(54,"Type: TemplateRef"),r.Sb(),r.Tb(55,"div",7),r.Fc(56,"Default: undefined"),r.Sb(),r.Sb(),r.Tb(57,"td",5),r.Fc(58,"any template reference"),r.Sb(),r.Tb(59,"td",6),r.Fc(60,"undefined"),r.Sb(),r.Tb(61,"td",4),r.Fc(62,"Template reference to the view block"),r.Sb(),r.Sb(),r.Tb(63,"tr"),r.Tb(64,"td",4),r.Tb(65,"b"),r.Fc(66,"[clrEditRef]"),r.Sb(),r.Tb(67,"div",7),r.Fc(68,"Type: TemplateRef"),r.Sb(),r.Tb(69,"div",7),r.Fc(70,"Default: undefined"),r.Sb(),r.Sb(),r.Tb(71,"td",5),r.Fc(72,"any template reference"),r.Sb(),r.Tb(73,"td",6),r.Fc(74,"undefined"),r.Sb(),r.Tb(75,"td",4),r.Fc(76,"Template reference to the edit block"),r.Sb(),r.Sb(),r.Tb(77,"tr"),r.Tb(78,"td",4),r.Tb(79,"b"),r.Fc(80,"[clrEditable]"),r.Sb(),r.Tb(81,"div",7),r.Fc(82,"Type: boolean"),r.Sb(),r.Tb(83,"div",7),r.Fc(84,"Default: true"),r.Sb(),r.Sb(),r.Tb(85,"td",5),r.Fc(86,"true, false"),r.Sb(),r.Tb(87,"td",6),r.Fc(88,"true"),r.Sb(),r.Tb(89,"td",4),r.Fc(90,"Controls whether the section is editable"),r.Sb(),r.Sb(),r.Tb(91,"tr"),r.Tb(92,"td",4),r.Tb(93,"b"),r.Fc(94,"[clrTitle]"),r.Sb(),r.Tb(95,"div",7),r.Fc(96,"Type: String"),r.Sb(),r.Tb(97,"div",7),r.Fc(98,'Default: ""'),r.Sb(),r.Sb(),r.Tb(99,"td",5),r.Fc(100,"any string"),r.Sb(),r.Tb(101,"td",6),r.Fc(102,'""'),r.Sb(),r.Tb(103,"td",4),r.Fc(104,"Defines the title of the View/Edit Section"),r.Sb(),r.Sb(),r.Tb(105,"tr"),r.Tb(106,"td",4),r.Tb(107,"b"),r.Fc(108,"[clrSaveText]"),r.Sb(),r.Tb(109,"div",7),r.Fc(110,"Type: String"),r.Sb(),r.Tb(111,"div",7),r.Fc(112,'Default: "Save"'),r.Sb(),r.Sb(),r.Tb(113,"td",5),r.Fc(114,"any string"),r.Sb(),r.Tb(115,"td",6),r.Fc(116,'"Save"'),r.Sb(),r.Tb(117,"td",4),r.Fc(118,"Defines the text of the submit button"),r.Sb(),r.Sb(),r.Tb(119,"tr"),r.Tb(120,"td",4),r.Tb(121,"b"),r.Fc(122,"[clrPreventModeChangeOnSave]"),r.Sb(),r.Tb(123,"div",7),r.Fc(124,"Type: boolean"),r.Sb(),r.Tb(125,"div",7),r.Fc(126,"Default: false"),r.Sb(),r.Sb(),r.Tb(127,"td",5),r.Fc(128,"true, false"),r.Sb(),r.Tb(129,"td",6),r.Fc(130,"false"),r.Sb(),r.Tb(131,"td",4),r.Fc(132,"Controls whether clicking the save button prevents change from edit to view mode (e.g.: for validation)"),r.Sb(),r.Sb(),r.Tb(133,"tr"),r.Tb(134,"td",4),r.Tb(135,"b"),r.Fc(136,"[clrCancelText]"),r.Sb(),r.Tb(137,"div",7),r.Fc(138,"Type: String"),r.Sb(),r.Tb(139,"div",7),r.Fc(140,'Default: "Cancel"'),r.Sb(),r.Sb(),r.Tb(141,"td",5),r.Fc(142,"any string"),r.Sb(),r.Tb(143,"td",6),r.Fc(144,'"Cancel"'),r.Sb(),r.Tb(145,"td",4),r.Fc(146,"Defines the text of the cancel button"),r.Sb(),r.Sb(),r.Tb(147,"tr"),r.Tb(148,"td",4),r.Tb(149,"b"),r.Fc(150,"[clrEditIcon]"),r.Sb(),r.Tb(151,"div",7),r.Fc(152,"Type: String"),r.Sb(),r.Tb(153,"div",7),r.Fc(154,'Default: "pencil"'),r.Sb(),r.Sb(),r.Tb(155,"td",5),r.Fc(156,"any shape of clr-icon"),r.Sb(),r.Tb(157,"td",6),r.Fc(158,'"pencil"'),r.Sb(),r.Tb(159,"td",4),r.Fc(160,"Defines the edit icon. Every shape of clr-icon can be used"),r.Sb(),r.Sb(),r.Tb(161,"tr"),r.Tb(162,"td",4),r.Tb(163,"b"),r.Fc(164,"(clrSectionSubmitted)"),r.Sb(),r.Tb(165,"div",7),r.Fc(166,"Type: EventEmitter"),r.Sb(),r.Ob(167,"div",7),r.Sb(),r.Ob(168,"td",5),r.Ob(169,"td",6),r.Tb(170,"td",4),r.Fc(171,"Will be triggered by submit clicks"),r.Sb(),r.Sb(),r.Tb(172,"tr"),r.Tb(173,"td",4),r.Tb(174,"b"),r.Fc(175,"(clrSectionEditCancelled)"),r.Sb(),r.Tb(176,"div",7),r.Fc(177,"Type: EventEmitter"),r.Sb(),r.Ob(178,"div",7),r.Sb(),r.Ob(179,"td",5),r.Ob(180,"td",6),r.Tb(181,"td",4),r.Fc(182,"Will be triggered by cancel/escape clicks"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(183,"p"),r.Fc(184," To define custom actions simply put the attribute "),r.Tb(185,"code",8),r.Fc(186,"action-block"),r.Sb(),r.Fc(187," to an element. "),r.Sb(),r.Sb(),r.Tb(188,"div",9),r.Tb(189,"h3",10),r.Fc(190,"Code & Examples"),r.Sb(),r.Tb(191,"h4"),r.Fc(192,"Side by side example with validation"),r.Sb(),r.Tb(193,"div",11),r.Tb(194,"div",12),r.Tb(195,"clr-view-edit-section",13),r.bc("clrEditModeChange",(function(e){return t.editMode1=e}))("clrSectionSubmitted",(function(){return t.sectionSubmitted()}))("clrSectionEditCancelled",(function(){return t.sectionCancelled()})),r.Dc(196,s,16,3,"ng-template",null,14,r.Ec),r.Dc(198,m,18,1,"ng-template",null,15,r.Ec),r.Sb(),r.Sb(),r.Tb(200,"div",16),r.Tb(201,"clr-view-edit-section",17),r.bc("clrEditModeChange",(function(e){return t.editMode2=e}))("clrSectionSubmitted",(function(){return t.addSectionSubmitted()}))("clrSectionEditCancelled",(function(){return t.addSectionCancelled()})),r.Dc(202,u,11,2,"ng-template",null,18,r.Ec),r.Dc(204,T,10,6,"ng-template",null,19,r.Ec),r.Sb(),r.Sb(),r.Sb(),r.Ob(206,"clr-code-snippet",20),r.Tb(207,"h4"),r.Fc(208,"Custom actions"),r.Sb(),r.Tb(209,"p"),r.Fc(210,"When using custom actions you may use css class "),r.Tb(211,"code",8),r.Fc(212,"ves-action"),r.Sb(),r.Fc(213," to remove the right margin/padding."),r.Ob(214,"br"),r.Fc(215," Additionally you need to show/hide those actions on your own in view/edit mode if you want to. In this example, all actions are hidden in edit mode."),r.Sb(),r.Tb(216,"div",11),r.Tb(217,"div",21),r.Tb(218,"clr-view-edit-section",17),r.bc("clrEditModeChange",(function(e){return t.editMode3=e}))("clrSectionSubmitted",(function(){return t.compSectionSubmitted()}))("clrSectionEditCancelled",(function(){return t.compSectionCancelled()})),r.Tb(219,"div",22),r.Dc(220,h,4,0,"clr-dropdown",23),r.Sb(),r.Dc(221,f,22,6,"ng-template",null,24,r.Ec),r.Dc(223,F,32,9,"ng-template",null,25,r.Ec),r.Sb(),r.Sb(),r.Sb(),r.Ob(225,"clr-code-snippet",20),r.Tb(226,"h4"),r.Fc(227,"Not editable"),r.Sb(),r.Tb(228,"div",11),r.Tb(229,"div",21),r.Tb(230,"clr-view-edit-section",26),r.Dc(231,g,11,0,"ng-template",null,27,r.Ec),r.Sb(),r.Sb(),r.Sb(),r.Ob(233,"clr-code-snippet",20),r.Tb(234,"h4"),r.Fc(235,"Custom icon and button texts"),r.Sb(),r.Tb(236,"div",11),r.Tb(237,"div",21),r.Tb(238,"clr-view-edit-section",28),r.bc("clrEditModeChange",(function(e){return t.editMode4=e}))("clrSectionSubmitted",(function(){return t.compSectionSubmitted()}))("clrSectionEditCancelled",(function(){return t.compSectionCancelled()})),r.Dc(239,v,22,6,"ng-template",null,29,r.Ec),r.Dc(241,w,32,9,"ng-template",null,30,r.Ec),r.Sb(),r.Sb(),r.Sb(),r.Ob(243,"clr-code-snippet",20),r.Ob(244,"clr-code-snippet",31),r.Tb(245,"h4"),r.Fc(246,"Submit form on enter"),r.Sb(),r.Tb(247,"p"),r.Fc(248,"As the save button is outside your form, following steps need to be done to enable form (edit-section) submit on 'enter'"),r.Sb(),r.Tb(249,"ul"),r.Tb(250,"li"),r.Fc(251,"Add hidden submit button to your form to activate 'enter' key handling in browser"),r.Sb(),r.Tb(252,"li"),r.Fc(253,"React to submit of form and switch section to view mode"),r.Sb(),r.Sb(),r.Ob(254,"clr-code-snippet",20),r.Ob(255,"clr-code-snippet",31),r.Tb(256,"h4"),r.Fc(257,"Tips"),r.Sb(),r.Tb(258,"ul"),r.Tb(259,"li"),r.Fc(260," Use class "),r.Tb(261,"code",8),r.Fc(262,"text-truncate"),r.Sb(),r.Fc(263," in view-block to prevent long texts from destroying your layout. "),r.Sb(),r.Tb(264,"li"),r.Fc(265," Use pipe "),r.Tb(266,"code",8),r.Fc(267,'|| "&nbsp;"'),r.Sb(),r.Fc(268," in view-block so the span element always has a correct height. "),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&e){const e=r.tc(197),c=r.tc(199),n=r.tc(203),i=r.tc(205),l=r.tc(222),o=r.tc(224),b=r.tc(232),d=r.tc(240),a=r.tc(242);r.lc("ng",t.ng)("ui",t.ui)("title",t.title)("newLayout",t.newLayout),r.Bb(195),r.lc("clrEditMode",t.editMode1)("clrPreventModeChangeOnSave",!t.exampleForm.valid)("clrTitle",t.sectionTitle)("clrViewRef",e)("clrEditRef",c),r.Bb(6),r.lc("clrEditMode",t.editMode2)("clrTitle",t.addSectionTitle)("clrViewRef",n)("clrEditRef",i),r.Bb(5),r.lc("clrCode",t.htmlExampleSideBySide),r.Bb(12),r.lc("clrEditMode",t.editMode3)("clrTitle",t.customActionsTitle)("clrViewRef",l)("clrEditRef",o),r.Bb(2),r.lc("ngIf",!t.editMode3),r.Bb(5),r.lc("clrCode",t.htmlExampleCustomActions),r.Bb(5),r.lc("clrEditable",!1)("clrViewRef",b),r.Bb(3),r.lc("clrCode",t.htmlExampleNotEditable),r.Bb(5),r.lc("clrEditMode",t.editMode4)("clrTitle",t.compSectionTitle)("clrEditIcon",t.compEditIcon)("clrViewRef",d)("clrEditRef",a),r.Bb(5),r.lc("clrCode",t.htmlExampleFullIcon),r.Bb(1),r.lc("clrCode",t.htmlExampleFullIconAngular)("clrLanguage","typescript"),r.Bb(10),r.lc("clrCode",t.htmlExampleFormSubmit),r.Bb(1),r.lc("clrCode",t.angularExampleFormSubmit)("clrLanguage","typescript")}},directives:[d.a,o.S,a.a,n.q,i.A,i.n,i.o,l.u,l.E,l.D,i.f,l.C,i.b,l.B,i.m,i.d,l.i,i.p,l.q,l.t,l.x,l.A,l.s,l.r,l.o,l.p,l.O,i.w,l.N,i.r,i.z,l.L,l.M,i.t,l.K,l.g,l.h,i.a,l.f],pipes:[n.f],encapsulation:2}),e})();var y=c("JsA7"),M=c("tyNb"),C=c("XPsC");let x=(()=>{class e{}return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)},imports:[[n.c,C.a,y.a,i.u,M.g.forChild([{path:"",component:E}]),i.h,l.v,l.a,o.b]]}),e})()}}]);