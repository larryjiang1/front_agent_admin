(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{CFoE:function(e,t,i){"use strict";var a=i("tQH2"),o=i.n(a);o.a},OnD5:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",{staticClass:"l-h100"},[i("el-header",{staticClass:"l-padding-0 l-bg-white",attrs:{height:"auto"}},[i("div",{staticClass:"l-filter-top"},[i("ul",{staticClass:"l-tab-tit"},[i("li",{on:{click:function(t){e.$router.replace("/menu/list")}}},[e._v("菜单列表")]),i("li",{staticClass:"_active2"},[e._v("角色列表")])]),i("el-form",{ref:"listFilter",staticClass:"l-filter-form",attrs:{inline:"",model:e.list.filter,rules:e.list.rules},nativeOn:{submit:function(e){e.preventDefault()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.search(t):null}}},[i("el-form-item",[i("el-input",{staticStyle:{width:"320px"},attrs:{placeholder:"请输入角色名称"},model:{value:e.list.filter.keywords,callback:function(t){e.$set(e.list.filter,"keywords",t)},expression:"list.filter.keywords"}})],1),i("el-form-item",{staticClass:"l-margin-r"},[i("el-button",{attrs:{type:"success"},nativeOn:{click:function(t){e.search()}}},[e._v("查询")])],1),i("el-form-item",[i("el-button",{attrs:{type:"warning"},nativeOn:{click:function(t){e.showDialogInfo("new")}}},[e._v("新增角色")])],1)],1)],1)]),i("el-main",[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.list.loading,expression:"list.loading"}],staticClass:"l-table-01",attrs:{"element-loading-spinner":"el-icon-loading","element-loading-text":"拼命加载中","highlight-current-row":"",data:e.list.data}},[i("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"80"}}),i("el-table-column",{attrs:{label:"角色名称",prop:"name",width:"150px"}}),i("el-table-column",{attrs:{label:"备注",prop:"remark","min-width":"150px"}}),i("el-table-column",{attrs:{label:"操作",align:"center",width:"200px",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{directives:[{name:"show",rawName:"v-show",value:t.row.doing,expression:"scope.row.doing"}],staticClass:"l-txt-gray"},[i("i",{staticClass:"el-icon-loading"}),e._v(" 操作中")]),i("span",{directives:[{name:"show",rawName:"v-show",value:!t.row.doing,expression:"!scope.row.doing"}]},[i("el-button",{staticClass:"l-txt-link",attrs:{type:"text",size:"small"},on:{click:function(i){e.showDialogInfo("edit",t.row)}}},[e._v("编辑")]),i("el-button",{staticClass:"l-txt-warn",attrs:{type:"text",size:"small"},on:{click:function(i){e.showDialogMenu(t.row)}}},[e._v("配置权限")]),i("el-button",{staticClass:"l-txt-error",attrs:{type:"text",size:"small"},on:{click:function(i){e.deleteInfo(t.row)}}},[e._v("删除")])],1)]}}])})],1),i("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":e.closeDialogInfo,title:e.dialogInfo.title,visible:e.dialogInfo.visible,width:"480px"},on:{"update:visible":function(t){e.$set(e.dialogInfo,"visible",t)}}},[i("el-form",{ref:"infoForm",staticStyle:{width:"432px"},attrs:{"label-width":"90px",model:e.dialogInfo.data,rules:e.dialogInfo.rules},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.submitDialogInfo(t):null}}},[i("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[i("el-input",{attrs:{placeholder:"请填写",maxlength:50},model:{value:e.dialogInfo.data.roleName,callback:function(t){e.$set(e.dialogInfo.data,"roleName",t)},expression:"dialogInfo.data.roleName"}})],1),i("el-form-item",{attrs:{label:"角色Code",prop:"roleCode"}},[i("el-input",{attrs:{placeholder:"请填写",maxlength:50},model:{value:e.dialogInfo.data.roleCode,callback:function(t){e.$set(e.dialogInfo.data,"roleCode",t)},expression:"dialogInfo.data.roleCode"}})],1),i("el-form-item",{attrs:{label:"备注信息",prop:"remark"}},[i("el-input",{attrs:{type:"textarea",maxlength:500},model:{value:e.dialogInfo.data.remark,callback:function(t){e.$set(e.dialogInfo.data,"remark",t)},expression:"dialogInfo.data.remark"}})],1)],1),i("span",{staticClass:"l-margin-r-m",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.closeDialogInfo()}}},[e._v("取消")]),i("el-button",{attrs:{type:"primary",loading:e.dialogInfo.loading},on:{click:e.submitDialogInfo}},[e._v("确定提交")])],1)],1),i("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":e.closeDialogMenu,title:e.dialogMenu.title,visible:e.dialogMenu.visible,width:"600px"},on:{"update:visible":function(t){e.$set(e.dialogMenu,"visible",t)}}},[i("div",{staticClass:"l-scroll",staticStyle:{"max-height":"400px",margin:"-20px 0"}},[i("el-tree",{ref:"menuTree",attrs:{"show-checkbox":"","default-expand-all":"","highlight-current":"","node-key":"id",data:e.dialogMenu.menuList,props:e.dialogMenu.props}})],1),i("span",{staticClass:"l-margin-r-m",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.closeDialogMenu()}}},[e._v("取消")]),i("el-button",{attrs:{type:"primary",loading:e.dialogMenu.loading},on:{click:e.submitDialogMenu}},[e._v("确定提交")])],1)])],1),i("el-footer",{staticClass:"l-flex-vhc",attrs:{height:"40px"}},[i("pagination",{attrs:{pager:e.list.pager},on:{change:e.getList,"update:pager":function(t){e.$set(e.list,"pager",t)}}})],1)],1)},o=[],l=(i("f3/d"),i("rGqo"),i("VRzm"),i("ZAdF"));function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[];return e.forEach(function(e){(e.checked||e.indeterminate)&&t.push(e.data.id),e.childNodes&&e.childNodes.length>0&&(t=t.concat(n(e.childNodes)))}),t}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[];return e&&e.forEach(function(e){e.children&&e.children.length>0?t=t.concat(s(e.children)):t.push(e.id)}),t}var r={name:"role-list",components:{pagination:l["a"]},data:function(){return{list:{filter:{keywords:""},rules:{keywords:[]},pager:{page:1,rows:10,total:0},loading:!1,data:[]},dialogInfo:{type:"new",title:"新增角色",visible:!1,loading:!1,rules:{roleName:[{required:!0,message:"必填项",trigger:"blur"}],roleCode:[{required:!0,message:"必填项",trigger:"blur"}],remark:[]},data:{id:null,roleName:"",roleCode:"",remark:""}},dialogMenu:{title:"配置权限",visible:!1,loading:!1,props:{children:"children",label:"name"},menuList:[],checkedList:[],data:{roleId:"",lists:""}}}},methods:{getList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.list.pager.page,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.list.pager.rows;this.list.loading=!0,this.$api.role.getList(this.list.filter,t,i).then(function(a){var o=a.data;e.$utils.copyObj(e.list.pager,o,{page:t,rows:i}),e.list.data=o.list.map(function(e){return e.roleName=e.name,e.roleCode=e.code,e.doing=!1,e})}).finally(function(){e.list.loading=!1})},search:function(){this.getList(1)},clear:function(){this.$refs.listFilter&&this.$refs.listFilter.resetFields(),this.getList(1)},showDialogInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"new",t=arguments.length>1?arguments[1]:void 0;this.dialogInfo.type=e,"edit"===e?(this.dialogInfo.title="修改角色",this.$utils.copyObj(this.dialogInfo.data,t)):(this.dialogInfo.title="新增角色",this.resetDialogInfo()),this.dialogInfo.visible=!0},closeDialogInfo:function(e){e?e():this.dialogInfo.visible=!1,this.resetDialogInfo()},resetDialogInfo:function(){this.$refs.infoForm&&this.$refs.infoForm.resetFields(),this.$utils.copyObj(this.dialogInfo.data,"")},submitDialogInfo:function(){var e=this;this.$refs.infoForm.validate(function(t){if(t){e.dialogInfo.loading=!0;var i="edit"===e.dialogInfo.type?e.$api.role.edit(e.dialogInfo.data):e.$api.role.add(e.dialogInfo.data);i.then(function(){e.$message.success(("edit"===e.dialogInfo.type?"修改":"新增")+"角色成功"),e.closeDialogInfo(),e.getList()}).finally(function(){e.dialogInfo.loading=!1})}})},getMenuList:function(e){var t=this;return new Promise(function(i,a){e?t.$api.role.getMenuList(e).then(function(e){var t=e.data;i(s(t))},a):0===t.dialogMenu.menuList.length?t.$api.role.getMenuList().then(function(e){var a=e.data;t.dialogMenu.menuList=a||[],i(t.dialogMenu.menuList)},a):i(t.dialogMenu.menuList)})},showDialogMenu:function(e){var t=this,i=this.$loading();this.dialogMenu.data.roleId=e.id,this.getMenuList(e.id).then(function(a){i.close(),t.dialogMenu.visible=!0,setTimeout(function(){t.dialogMenu.title="配置权限："+e.roleName,t.$refs.menuTree.setCheckedKeys(a)},50)}).catch(function(){i.close()})},closeDialogMenu:function(e){e?e():this.dialogMenu.visible=!1,this.$refs.menuTree.setCheckedKeys([])},submitDialogMenu:function(){var e=this;this.dialogMenu.data.lists=n(this.$refs.menuTree.root.childNodes).join(","),this.dialogMenu.data.lists?(this.dialogMenu.loading=!0,this.$api.role.setMenuList(this.dialogMenu.data).then(function(){e.closeDialogMenu(),e.$message.success("配置权限成功"),e.getList()}).finally(function(){e.dialogMenu.loading=!1})):this.$message.error("请配置权限")},deleteInfo:function(e){var t=this;this.$confirm("是否确定删除该角色？").then(function(){e.doing=!0,t.$api.role.del(e.id).then(function(){t.$message.success("删除角色成功"),t.getList()}).finally(function(){e.doing=!1})})}},mounted:function(){this.getMenuList(),this.getList()}},d=r,c=i("KHd+"),u=Object(c["a"])(d,a,o,!1,null,null,null);t["default"]=u.exports},ZAdF:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.pager.total>0,expression:"pager.total > 0"}],attrs:{layout:"total, sizes, prev, pager, next, jumper","page-sizes":e.$api.pageSizes,"page-size":e.pager.rows,"current-page":e.pager.page,total:e.pager.total},on:{"size-change":e.sizeChange,"current-change":e.pageChange,"update:pageSize":function(t){e.$set(e.pager,"rows",t)},"update:currentPage":function(t){e.$set(e.pager,"page",t)}}})},o=[],l=(i("xfY5"),i("pIFo"),{name:"pagination",components:{},props:{pager:{type:Object,default:function(){return{page:1,rows:10,total:0}}}},data:function(){return{}},methods:{sizeChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;this.$storage.local.set(this.$route.path+"-table_rows",e),this.$emit("change",1,e)},pageChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$utils.history.replace(this.$utils.url.setArgs(this.$route.fullPath,"_page",e)),this.$emit("change",e,this.pager.rows)},initPager:function(){var e=this.$storage.local.get(this.$route.path+"-table_rows"),t=Number(this.$route.query._page)||1;e&&(this.pager.rows=e),t&&(this.pager.page=t)}},mounted:function(){this.initPager()}}),n=l,s=(i("CFoE"),i("KHd+")),r=Object(s["a"])(n,a,o,!1,null,"d7519360",null);t["a"]=r.exports},tQH2:function(e,t,i){}}]);
//# sourceMappingURL=7.50320bb2.js.map