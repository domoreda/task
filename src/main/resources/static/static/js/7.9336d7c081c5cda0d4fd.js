webpackJsonp([7],{"0dQZ":function(t,e,a){var l=a("1FIX");"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);a("rjj0")("01a6b337",l,!0)},"1FIX":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},D8YN:function(t,e,a){"use strict";var l=a("Dd8w"),i=a.n(l),o=a("NYxO"),n=a("0xDb"),s={id:0,title:"",thumbnail:"",coreWord:"",contentAbstract:"",description:"",classify:"",date:""},r={page:0,size:20,classify:""},c=[{value:"媒体报道",label:"媒体报道"},{value:"行业热点",label:"行业热点"},{value:"疑惑解答",label:"疑惑解答"}];e.a={data:function(){return{loading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},formData:a.i(n.c)(s),searchForm:a.i(n.c)(r),classifyOptions:c,photoDialogVisible:!1,selectedPhotoAttachmentOptions:[],thumbnailFileList:[]}},computed:i()({},a.i(o.b)(["news"])),mounted:function(){this.query()},methods:i()({},a.i(o.c)(["queryNews","createNews","updateNews","deleteNews"]),{query:function(){var t=this;this.loading=!0,this.queryNews(this.searchForm).then(function(){t.loading=!1}).catch(function(e){console.log(e),t.loading=!1})},handleCreate:function(){this.formData=a.i(n.c)(s),this.dialogStatus="create",this.dialogFormVisible=!0},handleUpdate:function(t){this.formData=a.i(n.c)(t),this.dialogStatus="update",this.dialogFormVisible=!0;var e=this.formData.thumbnail;this.previewPhotoAttachment(e,"thumbnail")},handleThumbnailFileRemove:function(t){var e=this.formData.thumbnail,a=e.replace(t.name+",","");if(a!==e)this.formData.thumbnail=a;else{var l=e.replace(t.name,"");this.formData.thumbnail=l}},handleThumbnailUploadFileSuccess:function(t,e,a){this.formData.thumbnail=t[0]},handleExceed:function(t,e){a.i(n.d)("最多可上传1张照片",{type:"warning"})},previewPhotoAttachment:function(t,e){if(e||(this.photoDialogVisible=!0),t){this.selectedPhotoAttachmentOptions=[],this.fileList=[];var a=t.indexOf(":")>-1,l=t.split(",");if(!a)for(var i=0;i<l.length;i++)if(l[i]){var o="/api/resource/download/"+l[i],n={name:l[i],photoAttachment:o};this.selectedPhotoAttachmentOptions.push(n),this.thumbnailFileList.push(n)}}},previewPhotoAttachmentClose:function(){this.selectedPhotoAttachmentOptions=[]},openHandleDelete:function(t){var e=this;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.deleteNews(t).then(function(){a.i(n.d)(),e.query()}).catch(function(t){a.i(n.d)("",{type:"error"})})}).catch(function(){a.i(n.d)("已取消删除",{type:"info"})})},create:function(){var t=this;this.$refs.newsForm.validate(function(e){e&&(t.loading=!0,t.createNews(t.formData).then(function(){a.i(n.d)(),t.query(),t.dialogFormVisible=!1}).catch(function(t){a.i(n.d)("",{type:"error"})}).then(function(){t.loading=!1}))})},update:function(){var t=this;this.$refs.newsForm.validate(function(e){e&&(t.loading=!0,t.updateNews(t.formData).then(function(){a.i(n.d)(),t.query(),t.dialogFormVisible=!1}).catch(function(t){a.i(n.d)("",{type:"error"})}).then(function(){t.loading=!1}))})}})}},lmIt:function(t,e,a){"use strict";function l(t){a("0dQZ")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("D8YN"),o=a("pzXd"),n=a("VU/8"),s=l,r=n(i.a,o.a,s,"data-v-6be90750",null);e.default=r.exports},pzXd:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:24}},[a("el-col",{attrs:{span:4}},[a("el-input",{attrs:{placeholder:"标题"},model:{value:t.searchForm.title,callback:function(e){t.$set(t.searchForm,"title",e)},expression:"searchForm.title"}})],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"新闻类型",clearable:""},model:{value:t.searchForm.classify,callback:function(e){t.$set(t.searchForm,"classify",e)},expression:"searchForm.classify"}},t._l(t.classifyOptions,function(t){return a("el-option",{key:t.label,attrs:{label:t.label,value:t.label}})}))],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-button",{attrs:{loading:t.loading,icon:"el-icon-search"},on:{click:t.query}},[t._v("搜索")]),t._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleCreate}},[t._v("添加")])],1)],1),t._v(" "),a("el-table",{attrs:{data:t.news,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"80",type:"index"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"100",align:"center",label:"标题"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.title))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"100px",align:"center",label:"分类"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.classify))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"缩略图","min-width":"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.thumbnail?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.previewPhotoAttachment(e.row.thumbnail)}}},[t._v("查看照片")]):a("span",[t._v("暂无照片")])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"100px",align:"center",label:"核心词"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.coreWord))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"100px",align:"center",label:"发布日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.date))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作","min-width":"80",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleUpdate(e.row)}}},[a("i",{staticClass:"el-icon-edit"})]),t._v(" "),a("el-button",{staticStyle:{color:"red"},attrs:{type:"text"},on:{click:function(a){t.openHandleDelete(e.row)}}},[a("i",{staticClass:"el-icon-delete"})])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"照片预览",visible:t.photoDialogVisible},on:{"update:visible":function(e){t.photoDialogVisible=e},close:t.previewPhotoAttachmentClose}},[0===!t.selectedPhotoAttachmentOptions.length?a("p",[t._v("没有上传照片附件")]):t._l(t.selectedPhotoAttachmentOptions,function(t){return a("img",{key:t.photoAttachment,staticStyle:{width:"100%"},attrs:{src:t.photoAttachment}})})],2),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"newsForm",staticClass:"small-space",staticStyle:{width:"700px","margin-left":"50px","margin-right":"50px"},attrs:{model:t.formData,"label-position":"right","label-width":"120px"}},[a("el-form-item",{attrs:{label:"标题",prop:"title",rules:[{required:!0,message:"标题不能为空"}]}},[a("el-input",{model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"分类",prop:"date"}},[a("el-select",{attrs:{filterable:""},model:{value:t.formData.classify,callback:function(e){t.$set(t.formData,"classify",e)},expression:"formData.classify"}},t._l(t.classifyOptions,function(e){return a("el-option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.value))])}))],1),t._v(" "),a("el-form-item",{attrs:{label:"缩略图",prop:"thumbnail"}},[a("el-upload",{attrs:{action:"/api/resource/upload","on-remove":t.handleThumbnailFileRemove,"on-success":t.handleThumbnailUploadFileSuccess,limit:1,"on-exceed":t.handleExceed,"file-list":t.thumbnailFileList}},[a("el-button",{attrs:{size:"small",type:"warning",icon:"el-icon-upload"}},[t._v("上传照片")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"核心词",prop:"coreWord",rules:[{required:!0,message:"核心词不能为空"}]}},[a("el-input",{model:{value:t.formData.coreWord,callback:function(e){t.$set(t.formData,"coreWord",e)},expression:"formData.coreWord"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"发布日期",prop:"date",rules:[{required:!0,message:"发布日期不能为空"}]}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",editable:""},model:{value:t.formData.date,callback:function(e){t.$set(t.formData,"date",e)},expression:"formData.date"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"内容摘要",prop:"contentAbstract",rules:[{required:!0,message:"内容摘要不能为空"}]}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:t.formData.contentAbstract,callback:function(e){t.$set(t.formData,"contentAbstract",e)},expression:"formData.contentAbstract"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"内容描述",prop:"description",rules:[{required:!0,message:"内容描述不能为空"}]}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:20,maxRows:100},placeholder:"请输入内容"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.create}},[t._v("确定")]):a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.update}},[t._v("确定")])],1)],1)],1)},i=[],o={render:l,staticRenderFns:i};e.a=o}});