webpackJsonp([12],{186:function(t,e,a){a(531);var o=a(82)(a(396),a(569),null,null);t.exports=o.exports},219:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},created:function(){},computed:{},methods:{}}},220:function(t,e,a){e=t.exports=a(181)(!1),e.push([t.i,'.allcover{position:absolute;top:0;right:0}.ctt{left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{-webkit-transform:translateY(-50%);transform:translateY(-50%)}.lr{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.qf{*zoom:1}.qf:after{content:"";display:table;clear:both}.header_container{background-color:#eff2f7;height:60px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:20px}.avator{width:36px;height:36px;border-radius:50%;margin:6px 18px 0 0}.el-dropdown-menu__item{text-align:center}',""])},222:function(t,e,a){var o=a(220);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(182)("789fcc94",o,!0)},223:function(t,e,a){t.exports=a.p+"static/img/timg.61ac1eb.jpg"},224:function(t,e,a){a(222);var o=a(82)(a(219),a(225),null,null);t.exports=o.exports},225:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header_container"},[o("el-breadcrumb",{staticStyle:{"line-height":"3"},attrs:{separator:"/"}},[o("img",{staticClass:"avator",staticStyle:{float:"left","margin-right":"15px",height:"40px"},attrs:{src:a(223)}}),t._v(" "),o("el-breadcrumb-item",{attrs:{to:{path:"/manage"}}},[t._v("早上好，XXX")]),t._v(" "),t._l(t.$route.meta,function(e,a){return o("el-breadcrumb-item",{key:"index"},[t._v(t._s(e))])})],2)],1)},staticRenderFns:[]}},396:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(47),l=a.n(o),r=a(46),i=a.n(r),s=a(224),n=a.n(s);e.default={data:function(){return{imageUrl:"",tableData:[{date:"2016-10-14",name:"张三",address:"备注信息 1518 弄"},{date:"2016-10-14",name:"李四",address:"备注信息 1517 弄"}],loginForm:[],loginList:[],selectTable:{},dialogFormVisible1:!0,dialogFormVisible2:!1}},components:{headTop:n.a},created:function(){this.initData()},methods:{initData:function(){var t=this;return i()(l.a.mark(function e(){var a,o,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=[],o="http://localhost:3000/verifyForm",r=t,t.$http.get(o,{}).then(function(t){for(var e=0;e<t.data.length;e++){var o={};o.userid=t.data[e].user_id,o.username=t.data[e].user_name,o.password=t.data[e].pass_word,a[e]=o}console.log(a),r.loginForm=a,console.log(r.loginForm),r.loginList=r.loginForm}).catch(function(t){console.log(t)});case 4:case"end":return e.stop()}},e,t)}))()},handleAdd:function(t){this.dialogFormVisible1=!0},handleEdit:function(t){this.dialogFormVisible2=!0},handleDelete:function(t,e){console.log(t,e)},handleAvatarSuccess:function(t,e){this.imageUrl=URL.createObjectURL(e.raw)},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,a=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&a}}}},433:function(t,e,a){e=t.exports=a(181)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{-webkit-transform:translateY(-50%);transform:translateY(-50%)}.lr{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.admin_set{width:60%;background-color:#f9fafc;min-height:400px;margin:20px auto 0;border-radius:10px}.admin_set ul>li{padding:20px}.admin_set ul>li span{color:#666}.admin_title{margin-top:20px;font-size:24px;color:#666;text-align:center}.avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#20a0ff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:178px;height:178px;line-height:178px;text-align:center}.avatar{width:178px;height:178px;display:block}",""])},531:function(t,e,a){var o=a(433);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(182)("572c4dc6",o,!0)},569:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fillcontain"},[a("head-top"),t._v(" "),a("header",{staticClass:"admin_title"},[t._v("管理员信息")]),t._v(" "),a("div",{staticClass:"table_container"},[[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{label:"日期",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-icon",{attrs:{name:"time"}}),t._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.date))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"姓名",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("p",[t._v("姓名: "+t._s(e.row.name))]),t._v(" "),a("p",[t._v("备注: "+t._s(e.row.address))]),t._v(" "),a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",[t._v(t._s(e.row.name))])],1)])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],t._v(" "),a("div",{staticClass:"tablebottom",staticStyle:{position:"relative",left:"996px","margin-top":"10px"}},[a("el-button",{attrs:{type:"info"},on:{click:function(e){t.handleAdd(t.scope.$index,t.scope.row)}}},[t._v("新增管理员")]),t._v(" "),a("el-dialog",{attrs:{title:"修改管理员信息"},model:{value:t.dialogFormVisible1,callback:function(e){t.dialogFormVisible1=e},expression:"dialogFormVisible1"}},[a("el-form",{attrs:{model:t.selectTable}},[a("el-form-item",{attrs:{label:"用户名","label-width":"100px"}},[a("el-input",{attrs:{"auto-complete":"off"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"密码","label-width":"100px"}},[a("el-input")],1),t._v(" "),a("el-form-item",{attrs:{label:"上传头像","label-width":"100px"}},[a("el-upload")],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"}},[t._v("添 加")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialogFormVisible1=!1}}},[t._v("取 消")])],1)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"修改管理员信息"},model:{value:t.dialogFormVisible2,callback:function(e){t.dialogFormVisible2=e},expression:"dialogFormVisible2"}},[a("el-form",{attrs:{model:t.selectTable}},[a("el-form-item",{attrs:{label:"用户名","label-width":"100px"}},[a("el-input",{attrs:{"auto-complete":"off"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"密码","label-width":"100px"}},[a("el-input")],1),t._v(" "),a("el-form-item",{attrs:{label:"上传头像","label-width":"100px"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible2=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("确 定")])],1)],1)],2)],1)},staticRenderFns:[]}}});