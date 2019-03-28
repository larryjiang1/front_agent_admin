(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{CFoE:function(t,e,l){"use strict";var a=l("tQH2"),s=l.n(a);s.a},ZAdF:function(t,e,l){"use strict";var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.pager.total>0,expression:"pager.total > 0"}],attrs:{layout:"total, sizes, prev, pager, next, jumper","page-sizes":t.$api.pageSizes,"page-size":t.pager.rows,"current-page":t.pager.page,total:t.pager.total},on:{"size-change":t.sizeChange,"current-change":t.pageChange,"update:pageSize":function(e){t.$set(t.pager,"rows",e)},"update:currentPage":function(e){t.$set(t.pager,"page",e)}}})},s=[],i=(l("xfY5"),l("pIFo"),{name:"pagination",components:{},props:{pager:{type:Object,default:function(){return{page:1,rows:10,total:0}}}},data:function(){return{}},methods:{sizeChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;this.$storage.local.set(this.$route.path+"-table_rows",t),this.$emit("change",1,t)},pageChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$utils.history.replace(this.$utils.url.setArgs(this.$route.fullPath,"_page",t)),this.$emit("change",t,this.pager.rows)},initPager:function(){var t=this.$storage.local.get(this.$route.path+"-table_rows"),e=Number(this.$route.query._page)||1;t&&(this.pager.rows=t),e&&(this.pager.page=e)}},mounted:function(){this.initPager()}}),r=i,n=(l("CFoE"),l("KHd+")),o=Object(n["a"])(r,a,s,!1,null,"d7519360",null);e["a"]=o.exports},jSHF:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-container",{staticClass:"l-h100"},[l("el-header",{staticClass:"l-padding-0 l-bg-white",attrs:{height:"auto"}},[l("div",{staticClass:"l-filter-top"},[l("div"),l("el-form",{ref:"listFilter",staticClass:"l-filter-form",attrs:{inline:"",model:t.list.filter,rules:t.list.rules},nativeOn:{submit:function(t){t.preventDefault()},keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null}}},[l("el-form-item",{staticStyle:{width:"420px"},attrs:{label:"申请日期",prop:"dateRange"}},[l("el-date-picker",{attrs:{type:"daterange","range-separator":"到","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"yyyy-MM-dd","picker-options":t.$config.dateOptions},on:{change:t.dateChange},model:{value:t.list.dateRange,callback:function(e){t.$set(t.list,"dateRange",e)},expression:"list.dateRange"}})],1),l("el-form-item",[l("el-input",{staticStyle:{width:"320px"},attrs:{placeholder:"请输入垫资单号/门店名称"},model:{value:t.list.filter.keywords,callback:function(e){t.$set(t.list.filter,"keywords",e)},expression:"list.filter.keywords"}})],1),l("el-form-item",{staticClass:"l-margin-l"},[l("el-button",{attrs:{type:"success"},nativeOn:{click:function(e){t.search()}}},[t._v("查询")])],1)],1)],1)]),l("el-main",[l("div",{staticClass:"l-bg-white l-zoom l-margin-b"},[l("ul",{staticClass:"l-tab-tit"},t._l(t.tabList,function(e,a){return l("li",{key:e.label,class:{_active1:t.tabActive===a},on:{click:function(e){t.tabClick(a)}}},[t._v(t._s(e.label))])}))]),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.list.loading,expression:"list.loading"}],staticClass:"l-table-01",attrs:{"element-loading-spinner":"el-icon-loading","element-loading-text":"拼命加载中",data:t.list.data}},[l("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"80"}}),l("el-table-column",{attrs:{prop:"orderId",label:"垫资单号",width:"200"}}),"admin"===t.$router.platform?[l("el-table-column",{attrs:{prop:"orgName",label:"汽贸店名称",width:"250"}}),l("el-table-column",{attrs:{label:"垫资金额(元)",align:"center",width:"130",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.adjustAmount||e.row.amount)+"\n          ")]}}])}),l("el-table-column",{attrs:{label:"保证金(元)",align:"center",width:"120",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.adjustBond||e.row.bond)+"\n          ")]}}])})]:t._e(),l("el-table-column",{attrs:{prop:"shopName",label:"销售商名称",width:"250"}}),"shop"===t.$router.platform?[l("el-table-column",{attrs:{prop:"userName",label:"客户姓名",align:"center",width:"120"}}),l("el-table-column",{attrs:{prop:"phone",label:"客户手机号",align:"center",width:"120"}}),l("el-table-column",{attrs:{label:"垫资金额(元)",align:"center",width:"130",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.status>0?e.row.adjustAmount:e.row.amount)+"\n          ")]}}])}),l("el-table-column",{attrs:{label:"保证金(元)",align:"center",width:"120",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.status>0?e.row.adjustBond:e.row.bond)+"\n          ")]}}])})]:t._e(),l("el-table-column",{attrs:{prop:"createTime",label:"申请时间",align:"center",width:"170"}}),l("el-table-column",{attrs:{"min-width":"1"}}),l("el-table-column",{attrs:{prop:"stateName",label:"状态",align:"center",width:"150",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",{class:t.getState(e.row.state).css},[l("i",{class:t.getState(e.row.state).icon}),t._v("\n            "+t._s(t.getState(e.row.state).label)+"\n          ")])]}}])}),l("el-table-column",{attrs:{prop:"statusName",label:"待操作",align:"center",width:"150",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[[0,3,4,6].includes(e.row.state)?l("span",{class:t.statusList[e.row.status].css},[t._v(t._s(t.statusList[e.row.status].label))]):l("span",[t._v("--")])]}}])}),l("el-table-column",{attrs:{align:"center",label:"",width:"120",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{white:"",size:"mini"},nativeOn:{click:function(l){t.showDetails(e.row.id)}}},[t._v("查看详情")])]}}])})],2)],1),l("el-footer",{staticClass:"l-flex-vhc",attrs:{height:"40px"}},[l("pagination",{attrs:{pager:t.list.pager},on:{change:t.getList,"update:pager":function(e){t.$set(t.list,"pager",e)}}})],1)],1)},s=[],i=(l("xfY5"),l("OG14"),l("91GP"),l("VRzm"),l("ZAdF")),r={name:"order-list",components:{pagination:i["a"]},data:function(){return{exceling:!1,tabActive:0,stateList:[{label:"全部",value:"",css:""},{label:"待受理",value:0,css:"l-txt-warn",icon:"el-icon-warning"},{label:"待收保证金",value:2,css:"l-txt-error",icon:"el-icon-warning"},{label:"待物流装车",value:3,css:"l-txt-bold",icon:"el-icon-warning"},{label:"途中待入库",value:4,css:"l-txt-bold",icon:"el-icon-warning"},{label:"车辆已入库",value:5,css:"l-txt-bold"},{label:"结算申请",value:6,css:"l-txt-ok",icon:"el-icon-warning"},{label:"待出票证",value:7,css:"l-txt-bold"},{label:"已逾期",value:8,css:"l-txt-error"},{label:"已完成",value:9,css:"l-txt-ok",icon:"el-icon-success"},{label:"不受理",value:-2,css:"l-txt-gray"},{label:"不同意放车",hidden:!0,value:-9,css:"l-txt-gray"},{label:"订单异常",hidden:!0,value:-10,css:"l-txt-error"},{label:"已关闭",value:-11,css:"l-txt-gray"}],statusList:{"-1":{label:"总经理打回重审"},0:{label:"订单审核中"},1:{label:"待签署合同"},2:{label:"待录入物流信息"},4:{label:"待录入验车信息"},6:{label:"待汽贸店允许提车"},8:{label:"待总经理同意打款 "},10:{label:"待财务打款给4S店"},12:{label:"待录入装车信息"},14:{label:"待录入入库信息"},16:{label:"待汽贸店申请结算"},18:{label:"待审核结算申请"},20:{label:"待财务确认结算"},22:{label:"待汽贸店付款提车"},24:{label:"待财务确认收款"},26:{label:"待总经理确认放车"}},list:{dateRange:[],filter:{startDate:"",endDate:"",keywords:"",state:"",status:"",isOverDue:""},rules:{startDate:[],endDate:[],keywords:[],state:[],status:[]},pager:{page:1,rows:10,total:0},loading:!1,data:[]},dialogInfo:{type:"new",title:"新增账号",visible:!1,loading:!1,rules:{userName:[{required:!0,message:"必选项",trigger:"blur"}],phone:[{required:!0,message:"必填项",trigger:"blur"},{pattern:/^1\d{10}$/,message:"请输入正确的手机号码",trigger:"blur"}],email:[{required:!0,message:"必选项",trigger:"blur"}],departmentId:[{required:!0,message:"必选项",trigger:"change"}],positionId:[{required:!0,message:"必选项",trigger:"change"}],roleCode:[{required:!0,message:"必填项",trigger:"blur"}]},data:{id:"",userName:"",phone:"",email:"",departmentId:"",positionId:"",roleCode:""}}}},computed:{tabList:function(){var t=this.stateList.filter(function(t){return!t.hidden});return t[t.length-1]=Object.assign({},t[t.length-1],{value:"-9, -10, -11"}),t}},methods:{getState:function(t){return this.stateList.filter(function(e){return e.value===t})[0]||{}},tabClick:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.tabActive=t,this.list.filter.state=this.tabList[t].value,this.getList(1)},dateChange:function(t){t&&t.length>0?(this.list.filter.startDate=t[0],this.list.filter.endDate=t[1]||""):(this.list.filter.startDate="",this.list.filter.endDate=""),this.search()},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.list.pager.rows;this.list.loading=!0,this.$api.order.getList(this.list.filter,e,l).then(function(a){var s=a.data;t.$utils.copyObj(t.list.pager,s,{page:e,rows:l}),t.list.data=s.list}).finally(function(){t.list.filter.status="",t.list.filter.isOverDue="",t.list.loading=!1})},search:function(){this.getList()},clear:function(){this.$refs.listFilter&&this.$refs.listFilter.resetFields(),this.getList()},showDetails:function(t){this.$router.push("/order/info?id="+t)}},mounted:function(){var t=Number(this.$route.query.tab);this.list.filter.status=this.$route.query.stu||"",this.list.filter.isOverDue=this.$route.query.overdue||"",this.tabClick(isNaN(t)?0:t),"shop"===this.$router.platform&&(this.stateList[2].label="待付保证金",this.stateList[3].label="资方提车中",this.stateList[7].label="待收票证",this.stateList[11].label="未放车",this.statusList={"-1":{label:"订单审核中"},0:{label:"订单审核中"},1:{label:"待签署合同"},2:{label:"物流信息录入中"},4:{label:"验车信息录入中"},6:{label:"待允许提车",css:"l-txt-warn"},8:{label:"资方打款中"},10:{label:"资方打款中"},12:{label:"资方装车中"},14:{label:"车辆入库中"},16:{label:"待申请结算"},18:{label:"订单结算中"},20:{label:"订单结算中"},22:{label:"待付款提车"},24:{label:"已付款待放车"},26:{label:"已付款待放车"}})}},n=r,o=l("KHd+"),u=Object(o["a"])(n,a,s,!1,null,null,null);e["default"]=u.exports},tQH2:function(t,e,l){}}]);
//# sourceMappingURL=17.2f498f4b.js.map