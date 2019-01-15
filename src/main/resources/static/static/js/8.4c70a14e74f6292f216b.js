webpackJsonp([8],{EuIK:function(t,e,a){var l=a("YAfS");"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);a("rjj0")("35325d15",l,!0)},PVvz:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:24}},[a("el-col",{attrs:{span:4}},[a("el-input",{attrs:{placeholder:"标题"},model:{value:t.searchForm.title,callback:function(e){t.$set(t.searchForm,"title",e)},expression:"searchForm.title"}})],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"新闻类型",clearable:""},model:{value:t.searchForm.sort,callback:function(e){t.$set(t.searchForm,"sort",e)},expression:"searchForm.sort"}},t._l(t.sortOptions,function(t){return a("el-option",{key:t.label,attrs:{label:t.label,value:t.label}})}))],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-button",{attrs:{loading:t.loading,icon:"el-icon-search"},on:{click:t.query}},[t._v("搜索")]),t._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleCreate}},[t._v("添加")])],1)],1),t._v(" "),a("el-table",{attrs:{data:t.news,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"80",type:"index"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"100",align:"center",label:"标题"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.title))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"100px",align:"center",label:"分类"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.sort))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"100px",align:"center",label:"缩略图"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.thumbnail))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"100px",align:"center",label:"核心词"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.coreWord))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"100px",align:"center",label:"发布日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.date))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作","min-width":"80",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleUpdate(e.row)}}},[a("i",{staticClass:"el-icon-edit"})]),t._v(" "),a("el-button",{staticStyle:{color:"red"},attrs:{type:"text"},on:{click:function(a){t.openHandleDelete(e.row)}}},[a("i",{staticClass:"el-icon-delete"})])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"newsForm",staticClass:"small-space",staticStyle:{"margin-left":"30px","margin-right":"50px"},attrs:{model:t.formData,"label-position":"right","label-width":"120px"}},[a("el-form-item",{attrs:{label:"标题",prop:"title",rules:[{required:!0,message:"标题不能为空"}]}},[a("el-input",{model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"分类",prop:"date"}},[a("el-select",{attrs:{filterable:""},model:{value:t.formData.sort,callback:function(e){t.$set(t.formData,"sort",e)},expression:"formData.sort"}},t._l(t.sortOptions,function(e){return a("el-option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.value))])}))],1),t._v(" "),a("el-form-item",{attrs:{label:"缩略图",prop:"thumbnail"}},[a("el-input",{model:{value:t.formData.thumbnail,callback:function(e){t.$set(t.formData,"thumbnail",e)},expression:"formData.thumbnail"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"核心词",prop:"coreWord",rules:[{required:!0,message:"核心词不能为空"}]}},[a("el-input",{model:{value:t.formData.coreWord,callback:function(e){t.$set(t.formData,"coreWord",e)},expression:"formData.coreWord"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"发布日期",prop:"date",rules:[{required:!0,message:"发布日期不能为空"}]}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",editable:""},model:{value:t.formData.date,callback:function(e){t.$set(t.formData,"date",e)},expression:"formData.date"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"内容摘要",prop:"contentAbstract",rules:[{required:!0,message:"内容摘要不能为空"}]}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:t.formData.contentAbstract,callback:function(e){t.$set(t.formData,"contentAbstract",e)},expression:"formData.contentAbstract"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"内容描述",prop:"description",rules:[{required:!0,message:"内容描述不能为空"}]}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:20,maxRows:100},placeholder:"请输入内容"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.create}},[t._v("确定")]):a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.update}},[t._v("确定")])],1)],1)],1)},o=[],r={render:l,staticRenderFns:o};e.a=r},TpWb:function(t,e,a){"use strict";var l=a("Dd8w"),o=a.n(l),r=a("NYxO"),i=a("0xDb"),n={id:0,title:"",thumbnail:"",coreWord:"",contentAbstract:"",description:"",sort:"",date:""},s={page:0,size:20,title:"",sort:""},c=[{value:"媒体报道",label:"媒体报道"},{value:"行业热点",label:"行业热点"},{value:"疑惑解答",label:"疑惑解答"}];e.a={data:function(){return{loading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},formData:a.i(i.c)(n),searchForm:a.i(i.c)(s),news:[],sortOptions:c}},computed:o()({},a.i(r.b)(["news"])),mounted:function(){this.query()},methods:o()({},a.i(r.c)(["queryNews","createNews","updateNews","deleteNews"]),{query:function(){var t=this;this.loading=!0,this.queryNews(this.searchForm).then(function(){t.loading=!1}).catch(function(e){console.log(e),t.loading=!1})},handleCreate:function(){this.formData=a.i(i.c)(n),this.dialogStatus="create",this.dialogFormVisible=!0},handleUpdate:function(t){this.formData=a.i(i.c)(t),this.dialogStatus="update",this.dialogFormVisible=!0},openHandleDelete:function(t){var e=this;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.deleteNews(t).then(function(){a.i(i.d)(),e.query()}).catch(function(t){a.i(i.d)("",{type:"error"})})}).catch(function(){a.i(i.d)("已取消删除",{type:"info"})})},create:function(){var t=this;this.$refs.newsForm.validate(function(e){e&&(t.loading=!0,t.createNews(t.formData).then(function(){a.i(i.d)(),t.query(),t.dialogFormVisible=!1}).catch(function(t){a.i(i.d)("",{type:"error"})}).then(function(){t.loading=!1}))})},update:function(){var t=this;this.$refs.newsForm.validate(function(e){e&&(t.loading=!0,t.updateNews(t.formData).then(function(){a.i(i.d)(),t.query(),t.dialogFormVisible=!1}).catch(function(t){a.i(i.d)("",{type:"error"})}).then(function(){t.loading=!1}))})}})}},YAfS:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},"qP+p":function(t,e,a){"use strict";function l(t){a("EuIK")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("TpWb"),r=a("PVvz"),i=a("VU/8"),n=l,s=i(o.a,r.a,n,"data-v-5ce17b2e",null);e.default=s.exports}});