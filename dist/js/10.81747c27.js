(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"7htp":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{"append-to-body":t.append,"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":t.closeDialog,title:t.dialog.title,visible:t.dialog.visible,width:"400px"},on:{"update:visible":function(e){t.$set(t.dialog,"visible",e)}}},[i("el-form",{ref:"infoForm",staticClass:"l-margin-r",attrs:{"label-width":"90px",model:t.dialog.data,rules:t.dialog.rules},nativeOn:{submit:function(t){t.preventDefault()},keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.submitDialog(e):null}}},[i("el-form-item",{attrs:{label:"部门名称",prop:"name"}},[i("el-input",{attrs:{maxlength:50},model:{value:t.dialog.data.name,callback:function(e){t.$set(t.dialog.data,"name",e)},expression:"dialog.data.name"}})],1),i("el-form-item",{attrs:{label:"备注",prop:"remark"}},[i("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:t.dialog.data.remark,callback:function(e){t.$set(t.dialog.data,"remark",e)},expression:"dialog.data.remark"}})],1)],1),i("span",{staticClass:"l-margin-r-m",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{white:""},on:{click:function(e){t.closeDialog()}}},[t._v("取消")]),i("el-button",{attrs:{type:"primary",loading:t.dialog.loading},on:{click:t.submitDialog}},[t._v(t._s(t.dialog.loading?"提交中...":"确定提交"))])],1)],1)},l=[],o=(i("91GP"),i("VRzm"),{name:"dialog-department",props:{visible:{type:Boolean,default:!1},formType:{type:String,default:"new"},formData:Object,append:{type:Boolean,default:!1}},data:function(){return{dialog:{title:"新增部门",visible:!1,loading:!1,rules:{name:[{required:!0,message:"必选项",trigger:"blur"}]},data:{parentId:null,id:null,name:"",remark:""}}}},watch:{visible:{immediate:!0,handler:function(t){t&&this.showDialog()}}},methods:{showDialog:function(){"edit"===this.formType?(this.dialog.title="修改部门",this.$utils.copyObj(this.dialog.data,this.formData)):(this.dialog.title="新增部门",this.$utils.copyObj(this.dialog.data,"")),this.dialog.visible=!0},closeDialog:function(t){t?t():this.dialog.visible=!1,this.$emit("update:visible",this.dialog.visible)},submitDialog:function(){var t=this;this.$refs.infoForm.validate(function(e){if(e){var i=Object.assign({},t.dialog.data),a="edit"==t.formType?t.$api.department.edit(i):t.$api.department.add(i);t.dialog.loading=!0,a.then(function(e){var i=e.data;t.$message.success(t.dialog.title+"成功"),t.$emit("change",i),t.closeDialog()}).finally(function(){t.dialog.loading=!1})}else t.$message.error("请完善表单信息")})}}}),n=o,s=(i("JRIF"),i("KHd+")),r=Object(s["a"])(n,a,l,!1,null,"1a74a212",null);e["a"]=r.exports},CFoE:function(t,e,i){"use strict";var a=i("tQH2"),l=i.n(a);l.a},Idqg:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{"append-to-body":t.append,"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":t.closeDialog,title:t.dialog.title,visible:t.dialog.visible,width:"400px"},on:{"update:visible":function(e){t.$set(t.dialog,"visible",e)}}},[i("el-form",{ref:"infoForm",staticClass:"l-dialog-form l-margin-r",attrs:{"label-width":"90px",model:t.dialog.data,rules:t.dialog.rules},nativeOn:{submit:function(t){t.preventDefault()},keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.submitDialog(e):null}}},[i("el-form-item",{attrs:{label:"所属部门",prop:"parentId"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择部门"},model:{value:t.dialog.data.parentId,callback:function(e){t.$set(t.dialog.data,"parentId",e)},expression:"dialog.data.parentId"}},t._l(t.departmentList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),i("el-form-item",{attrs:{label:"岗位名称",prop:"name"}},[i("el-input",{attrs:{maxlength:50},model:{value:t.dialog.data.name,callback:function(e){t.$set(t.dialog.data,"name",e)},expression:"dialog.data.name"}})],1),i("el-form-item",{attrs:{label:"备注",prop:"remark"}},[i("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:t.dialog.data.remark,callback:function(e){t.$set(t.dialog.data,"remark",e)},expression:"dialog.data.remark"}})],1)],1),i("span",{staticClass:"l-margin-r-m",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{white:""},on:{click:function(e){t.closeDialog()}}},[t._v("取消")]),i("el-button",{attrs:{type:"primary",loading:t.dialog.loading},on:{click:t.submitDialog}},[t._v(t._s(t.dialog.loading?"提交中...":"确定提交"))])],1)],1)},l=[],o=(i("91GP"),i("xfY5"),i("VRzm"),{name:"dialog-position",props:{visible:{type:Boolean,default:!1},formType:{type:String,default:"new"},formData:Object,parentId:[String,Number],append:{type:Boolean,default:!1}},data:function(){return{departmentList:[],dialog:{title:"新增岗位",visible:!1,loading:!1,rules:{parentId:[{required:!0,message:"必选项",trigger:"blur"}],name:[{required:!0,message:"必选项",trigger:"blur"}]},data:{parentId:null,id:null,name:"",remark:""}}}},watch:{visible:{immediate:!0,handler:function(t){t&&this.showDialog()}}},methods:{getDepartmentList:function(){var t=this;return this.$api.department.getDownList().then(function(e){var i=e.data;return t.departmentList=i,Promise.resolve(i)})},showDialog:function(){var t=this;this.getDepartmentList().finally(function(){"edit"===t.formType?(t.dialog.title="修改岗位",t.$utils.copyObj(t.dialog.data,t.formData)):(t.dialog.title="新增岗位",t.$utils.copyObj(t.dialog.data,""),t.dialog.data.parentId=t.parentId),t.dialog.visible=!0})},closeDialog:function(t){t?t():this.dialog.visible=!1,this.$emit("update:visible",this.dialog.visible)},submitDialog:function(){var t=this;this.$refs.infoForm.validate(function(e){if(e){var i=Object.assign({},t.dialog.data),a="edit"==t.formType?t.$api.department.edit(i):t.$api.department.add(i);t.dialog.loading=!0,a.then(function(e){var i=e.data;t.$message({type:"success",message:t.dialog.title+"成功"}),t.$emit("change",i),t.closeDialog()}).finally(function(){t.dialog.loading=!1})}else t.$message({type:"error",message:"请完善表单信息"})})}}}),n=o,s=(i("wfFR"),i("KHd+")),r=Object(s["a"])(n,a,l,!1,null,"e098ecb2",null);e["a"]=r.exports},JRIF:function(t,e,i){"use strict";var a=i("q3GG"),l=i.n(a);l.a},PYnm:function(t,e,i){},UXut:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",{staticClass:"l-h100"},[i("el-header",{staticClass:"l-padding-0 l-bg-white",attrs:{height:"auto"}},[i("div",{staticClass:"l-filter-top"},[i("ul",{staticClass:"l-tab-tit"},[i("li",{staticClass:"_active2"},[t._v("账号列表")]),i("li",{on:{click:function(e){t.$router.push("/department/list")}}},[t._v("部门岗位管理")])]),i("el-form",{ref:"listFilter",staticClass:"l-filter-form",attrs:{inline:"",model:t.list.filter,rules:t.list.rules},nativeOn:{submit:function(t){t.preventDefault()},keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null}}},[i("el-form-item",{staticClass:"l-margin-r"},[i("el-input",{staticStyle:{width:"320px"},attrs:{placeholder:"请输入姓名/手机号码/电子邮箱"},model:{value:t.list.filter.keywords,callback:function(e){t.$set(t.list.filter,"keywords",e)},expression:"list.filter.keywords"}})],1),i("el-form-item",{staticClass:"l-margin-r"},[i("el-button",{attrs:{type:"success"},nativeOn:{click:function(e){t.search()}}},[t._v("查询")])],1),i("el-form-item",[i("el-button",{attrs:{type:"warning"},nativeOn:{click:function(e){t.showDialogInfo("new")}}},[t._v("新增账号")])],1)],1)],1)]),i("el-main",[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.list.loading,expression:"list.loading"}],staticClass:"l-table-01",attrs:{"element-loading-spinner":"el-icon-loading","element-loading-text":"拼命加载中","highlight-current-row":"",data:t.list.data}},[i("el-table-column",{attrs:{prop:"id",align:"center",label:"ID",width:"80"}}),i("el-table-column",{attrs:{prop:"userName",align:"center",label:"姓名",width:"110"}}),i("el-table-column",{attrs:{prop:"phone",align:"center",label:"手机号码",width:"110"}}),i("el-table-column",{attrs:{prop:"email",align:"center",label:"电子邮箱",width:"200"}}),i("el-table-column",{attrs:{prop:"name",align:"center",label:"部门-岗位",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.department)+" - "+t._s(e.row.position)+"\n        ")]}}])}),i("el-table-column",{attrs:{prop:"role",align:"center",label:"账号角色",width:"150"}}),i("el-table-column",{attrs:{prop:"createTime",align:"center",label:"创建时间",width:"150"}}),i("el-table-column",{attrs:{prop:"stateName",align:"center",label:"状态",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{class:1===e.row.state?"l-txt-ok":"l-txt-error"},[t._v(t._s(e.row.stateName))])]}}])}),i("el-table-column",{attrs:{"min-width":"1"}}),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{directives:[{name:"show",rawName:"v-show",value:e.row.doing,expression:"scope.row.doing"}],staticClass:"l-txt-gray"},[i("i",{staticClass:"el-icon-loading"}),t._v(" 操作中")]),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.row.doing,expression:"!scope.row.doing"}]},[i("el-button",{attrs:{white:"",size:"mini"},nativeOn:{click:function(i){t.showDialogInfo("edit",e.row)}}},[t._v("编辑")]),1===e.row.state?i("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(i){t.enable(0,e.row)}}},[t._v("禁用")]):i("el-button",{attrs:{type:"success",size:"mini"},nativeOn:{click:function(i){t.enable(1,e.row)}}},[t._v("启用")])],1)]}}])})],1),i("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":t.closeDialogInfo,title:t.dialogInfo.title,visible:t.dialogInfo.visible,width:"600px"},on:{"update:visible":function(e){t.$set(t.dialogInfo,"visible",e)}}},[i("el-form",{ref:"infoForm",staticClass:"l-dialog-form",attrs:{"label-width":"90px",inline:"",model:t.dialogInfo.data,rules:t.dialogInfo.rules},nativeOn:{submit:function(t){t.preventDefault()},keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.submitDialogInfo(e):null}}},[i("el-form-item",{attrs:{label:"姓名",prop:"userName"}},[i("el-input",{attrs:{maxlength:50},model:{value:t.dialogInfo.data.userName,callback:function(e){t.$set(t.dialogInfo.data,"userName",e)},expression:"dialogInfo.data.userName"}})],1),i("br"),i("el-form-item",{attrs:{label:"手机号码",prop:"phone"}},[i("el-input",{attrs:{placeholder:"请输入手机号码",maxlength:11},model:{value:t.dialogInfo.data.phone,callback:function(e){t.$set(t.dialogInfo.data,"phone",e)},expression:"dialogInfo.data.phone"}})],1),i("el-form-item",[i("span",{staticClass:"l-margin-l l-txt-gray l-fs-xs"},[t._v("作为系统登录账号")])]),i("el-form-item",{attrs:{label:"电子邮箱",prop:"email"}},[i("el-input",{attrs:{placeholder:"请输入常用电子邮箱",maxlength:100},model:{value:t.dialogInfo.data.email,callback:function(e){t.$set(t.dialogInfo.data,"email",e)},expression:"dialogInfo.data.email"}})],1),i("el-form-item",[i("span",{staticClass:"l-margin-l l-txt-gray l-fs-xs"},[t._v("用于找回密码、接收文件或重要通知等")])]),i("el-form-item",{attrs:{label:"部门",prop:"departmentId"}},[i("el-select",{attrs:{placeholder:"请选择部门"},on:{change:t.departChange},model:{value:t.dialogInfo.data.departmentId,callback:function(e){t.$set(t.dialogInfo.data,"departmentId",e)},expression:"dialogInfo.data.departmentId"}},t._l(t.department.list,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),i("el-form-item",[i("a",{staticClass:"l-txt-link l-margin-l",on:{click:function(e){t.department.visible=!0}}},[t._v("新增部门")])]),i("el-form-item",{attrs:{label:"岗位",prop:"positionId"}},[i("el-select",{attrs:{placeholder:"请选择岗位"},model:{value:t.dialogInfo.data.positionId,callback:function(e){t.$set(t.dialogInfo.data,"positionId",e)},expression:"dialogInfo.data.positionId"}},t._l(t.position.list,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),i("el-form-item",[i("a",{staticClass:"l-txt-link l-margin-l",on:{click:function(e){t.position.visible=!0}}},[t._v("新增岗位")])]),i("el-form-item",{attrs:{label:"账号角色",prop:"roleCode"}},[i("el-select",{attrs:{multiple:"",placeholder:"请选择角色"},model:{value:t.dialogInfo.data.roleCode,callback:function(e){t.$set(t.dialogInfo.data,"roleCode",e)},expression:"dialogInfo.data.roleCode"}},t._l(t.roleList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.code}})}))],1)],1),i("span",{staticClass:"l-margin-r-m",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{white:""},on:{click:function(e){t.closeDialogInfo()}}},[t._v("取消")]),i("el-button",{attrs:{type:"primary",loading:t.dialogInfo.loading},on:{click:t.submitDialogInfo}},[t._v("确定提交")])],1)],1),i("dialog-department",{attrs:{append:"",visible:t.department.visible},on:{"update:visible":function(e){t.$set(t.department,"visible",e)},change:t.departFormChange}}),i("dialog-position",{attrs:{append:"",visible:t.position.visible,"parent-id":t.dialogInfo.data.departmentId},on:{"update:visible":function(e){t.$set(t.position,"visible",e)},change:t.positionFormChange}})],1),i("el-footer",{staticClass:"l-flex-vhc",attrs:{height:"40px"}},[i("pagination",{attrs:{pager:t.list.pager},on:{change:t.getList,"update:pager":function(e){t.$set(t.list,"pager",e)}}})],1)],1)},l=[],o=(i("f3/d"),i("91GP"),i("rGqo"),i("yt8O"),i("KKXr"),i("VRzm"),i("ZAdF")),n=i("7htp"),s=i("Idqg"),r={name:"user-list",components:{dialogDepartment:n["a"],dialogPosition:s["a"],pagination:o["a"]},data:function(){return{list:{filter:{keywords:"",state:""},rules:{keywords:[],state:[]},pager:{page:1,rows:10,total:0},loading:!1,data:[]},roleList:[],department:{visible:!1,list:[]},position:{visible:!1,list:[]},dialogInfo:{type:"new",title:"新增账号",visible:!1,loading:!1,rules:{userName:[{required:!0,message:"必选项",trigger:"blur"}],phone:[{required:!0,message:"必填项",trigger:"blur"},{pattern:/^1\d{10}$/,message:"请输入正确的手机号码",trigger:"blur"}],email:[{required:!0,message:"必选项",trigger:"blur"}],departmentId:[{required:!0,message:"必选项",trigger:"change"}],positionId:[{required:!0,message:"必选项",trigger:"change"}],roleCode:[{required:!0,message:"必填项",trigger:"blur"}]},data:{id:null,userName:"",phone:"",email:"",departmentId:"",department:"",positionId:"",position:"",roleCode:[]}}}},methods:{getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.list.pager.page,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.list.pager.rows;this.list.loading=!0,this.$api.user.getList(this.list.filter,e,i).then(function(a){var l=a.data;t.$utils.copyObj(t.list.pager,l,{page:e,rows:i}),t.list.data=l.list.map(function(t){return t.doing=!1,t})}).finally(function(){t.list.loading=!1})},getDepartmentList:function(){var t=this;return this.$api.department.getDownList().then(function(e){var i=e.data;return t.department.list=i,i})},departChange:function(t){return this.dialogInfo.data.positionId="",this.getPositionList(t)},departFormChange:function(){this.getDepartmentList()},positionFormChange:function(){this.dialogInfo.data.departmentId&&this.getPositionList(this.dialogInfo.data.departmentId)},getPositionList:function(t){var e=this;return this.$api.department.getPositionList(t).then(function(t){var i=t.data;return e.position.list=i,i})},getRoleList:function(){var t=this;return this.$api.role.getDownList().then(function(e){var i=e.data;return t.roleList=i,i})},search:function(){this.getList(1)},clear:function(){this.$refs.listFilter&&this.$refs.listFilter.resetFields(),this.getList(1)},showDialogInfo:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"new",i=arguments.length>1?arguments[1]:void 0;this.dialogInfo.type=e;var a=this.getDepartmentList(),l=this.getRoleList(),o=[a,l];if("edit"===e){this.dialogInfo.title="编辑账号信息";var n=this.$api.user.getInfo(i.id).then(function(e){var i=e.data;return i.roleCode=i.roleCode?i.roleCode.split(","):[],t.departChange(i.departmentId).then(function(){t.$utils.copyObj(t.dialogInfo.data,i)})});o.push(n)}else this.dialogInfo.title="新增账号";var s=this.$loading();Promise.all(o).then(function(){t.dialogInfo.visible=!0}).finally(function(){s.close()})},closeDialogInfo:function(t){t?t():this.dialogInfo.visible=!1,this.resetDialogInfo()},resetDialogInfo:function(){this.$refs.infoForm&&this.$refs.infoForm.resetFields(),this.$utils.copyObj(this.dialogInfo.data,"")},submitDialogInfo:function(){var t=this;this.$refs.infoForm.validate(function(e){if(e){var i=Object.assign({},t.dialogInfo.data);i.roleCode=i.roleCode.join(","),i.department=t.department.list.filter(function(t){return t.id===i.departmentId})[0].name,i.position=t.position.list.filter(function(t){return t.id===i.positionId})[0].name;var a="edit"==t.dialogInfo.type?t.$api.user.edit(i):t.$api.user.add(i);t.dialogInfo.loading=!0,a.then(function(){t.$message.success(("edit"===t.dialogInfo.type?"修改":"新增")+"账号成功"),t.closeDialogInfo(),t.getList()}).finally(function(){t.dialogInfo.loading=!1})}else t.$message.error("请完善表单信息")})},enable:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=arguments.length>1?arguments[1]:void 0;this.$confirm("是否确定"+(1===e?"启用":"禁用")+"该账号？").then(function(){i.doing=!0,t.$api.user.enable(i.id,e).then(function(){i.state=e,t.$message.success("操作成功")}).finally(function(){i.doing=!1})})}},mounted:function(){this.getList()}},d=r,u=i("KHd+"),g=Object(u["a"])(d,a,l,!1,null,null,null);e["default"]=g.exports},ZAdF:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.pager.total>0,expression:"pager.total > 0"}],attrs:{layout:"total, sizes, prev, pager, next, jumper","page-sizes":t.$api.pageSizes,"page-size":t.pager.rows,"current-page":t.pager.page,total:t.pager.total},on:{"size-change":t.sizeChange,"current-change":t.pageChange,"update:pageSize":function(e){t.$set(t.pager,"rows",e)},"update:currentPage":function(e){t.$set(t.pager,"page",e)}}})},l=[],o=(i("xfY5"),i("pIFo"),{name:"pagination",components:{},props:{pager:{type:Object,default:function(){return{page:1,rows:10,total:0}}}},data:function(){return{}},methods:{sizeChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;this.$storage.local.set(this.$route.path+"-table_rows",t),this.$emit("change",1,t)},pageChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$utils.history.replace(this.$utils.url.setArgs(this.$route.fullPath,"_page",t)),this.$emit("change",t,this.pager.rows)},initPager:function(){var t=this.$storage.local.get(this.$route.path+"-table_rows"),e=Number(this.$route.query._page)||1;t&&(this.pager.rows=t),e&&(this.pager.page=e)}},mounted:function(){this.initPager()}}),n=o,s=(i("CFoE"),i("KHd+")),r=Object(s["a"])(n,a,l,!1,null,"d7519360",null);e["a"]=r.exports},q3GG:function(t,e,i){},tQH2:function(t,e,i){},wfFR:function(t,e,i){"use strict";var a=i("PYnm"),l=i.n(a);l.a}}]);
//# sourceMappingURL=10.81747c27.js.map