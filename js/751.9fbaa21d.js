"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[751],{5751:function(t,i,e){e.r(i),e.d(i,{default:function(){return p}});var s=function(){var t=this,i=t._self._c;return i("div",[i("div",{staticClass:"infinite-list-wrapper",staticStyle:{overflow:"auto",position:"relative",top:"-20px",height:"760px","margin-top":"30px"}},[i("el-card",{staticClass:"good_card",staticStyle:{width:"90%",margin:"20px","margin-left":"50px"},attrs:{shadow:"hover"}},[i("el-button",{attrs:{type:"primary"},on:{click:function(i){return t.showdata(2)}}},[t._v("查看热门")]),i("el-button",{attrs:{type:"success"},on:{click:function(i){return t.showdata(1)}}},[t._v("查看最新")]),i("el-button",{attrs:{type:"info"},on:{click:function(i){t.dialogVisible=!0}}},[t._v("我要发表")]),i("el-input",{staticStyle:{width:"300px","margin-left":"200px"},attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.content,callback:function(i){t.content=i},expression:"content"}}),i("el-button",{attrs:{type:"warning"},on:{click:function(i){return t.showdata(3)}}},[t._v("搜索")]),i("el-dialog",{attrs:{title:"请注意您的言论",visible:t.dialogVisible,width:"60%","before-close":t.handleClose},on:{"update:visible":function(i){t.dialogVisible=i}}},[i("el-input",{staticStyle:{position:"relative",top:"-20px"},attrs:{placeholder:"请输入标题"},model:{value:t.title,callback:function(i){t.title=i},expression:"title"}}),i("br"),i("el-input",{attrs:{type:"textarea",rows:3,maxlength:"50",placeholder:"请输入内容"},model:{value:t.textarea,callback:function(i){t.textarea=i},expression:"textarea"}}),i("br"),i("el-upload",{staticClass:"upload-demo",attrs:{limit:3,"auto-upload":!0,action:"http://150.158.191.247:8088/api/common/upload","on-change":t.handleChange,"file-list":t.fileList,"on-success":t.handleAvatarSuccess}},[i("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传图片")]),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb,最多三张")])],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(i){t.dialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.addcomment}},[t._v("发 表")])],1)],1)],1),i("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"list",attrs:{"infinite-scroll-disabled":"disabled","infinite-scroll-delay":500,"infinite-scroll-immediate":!1}},t._l(t.count,(function(e){return i("li",{staticClass:"list-item"},[i("el-card",{staticClass:"good_card",staticStyle:{width:"90%",margin:"20px","margin-left":"50px"},attrs:{shadow:"hover"}},[i("div",{staticStyle:{float:"left"}},[i("el-image",{staticStyle:{width:"50px",height:"50px","border-radius":"50%"},attrs:{src:"http://150.158.191.247:8088/image/"+t.listData[e-1].img,fit:"fit"}})],1),i("div",{staticStyle:{float:"left","margin-left":"20px"}},[i("label",{staticStyle:{color:"white"}},[t._v(t._s(t.listData[e-1].title))]),i("br"),i("label",{staticStyle:{color:"#999999","font-size":"12px"}},[t._v(t._s(t.listData[e-1].name)+"    "+t._s(t.listData[e-1].time))]),i("p",{staticStyle:{color:"white","font-size":"15px"}},[t._v(t._s(t.listData[e-1].content))]),"nu"!=t.listData[e-1].imgSrc?i("el-image",{staticStyle:{width:"120px",height:"120px"},attrs:{src:"http://150.158.191.247:8088/image/"+t.listData[e-1].imgSrc,fit:"fit"}}):t._e(),"nu"!=t.listData[e-1].imgSrc1?i("el-image",{staticStyle:{width:"120px",height:"120px"},attrs:{src:"http://150.158.191.247:8088/image/"+t.listData[e-1].imgSrc1,fit:"fit"}}):t._e(),"nu"!=t.listData[e-1].imgSrc2?i("el-image",{staticStyle:{width:"120px",height:"120px"},attrs:{src:"http://150.158.191.247:8088/image/"+t.listData[e-1].imgSrc2,fit:"fit"}}):t._e(),i("br")],1),i("div",{staticStyle:{"text-align":"center",width:"100%",float:"right"}},[i("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-edit",circle:""}}),i("el-button",{staticStyle:{"margin-left":"20px"},attrs:{size:"small",type:"primary",icon:"el-icon-thumb",circle:""},on:{click:function(i){return t.post(t.listData[e-1])}}}),i("label",{staticStyle:{color:"#999999","font-size":"15px"}},[t._v(t._s(t.listData[e-1].post))]),t._v("​ ")],1)])],1)})),0),i("div",{staticStyle:{"text-align":"center"}},[t.loading?i("p",{staticStyle:{color:"white","font-size":"20px"}},[t._v("加载中...")]):t._e(),t.noMore?i("p",{staticStyle:{color:"white","font-size":"20px"}},[t._v("没有更多了")]):t._e()])],1)])},a=[],l=(e(7658),e(4481));function o(t){return l.Z.get("/acly/show",{params:t})}function n(t){return l.Z.put("/acly/addpost",t)}function c(t){return l.Z.post("/acly/addlist",t)}var r={data(){return{count:0,loading:!1,noMore:!1,url:"",content:"",listData:[],num0:0,dialogVisible:!1,textarea:"",fileList:[],files:[],title:"",userToken:"",userid:"",configType:0,imgSrc:[]}},methods:{async post(t){console.log(t);const{data:i,resultCode:e}=await n({uid:t.uid,comid:t.id});200==e&&(t["post"]=t["post"]+1)},async addcomment(){let t={content:this.textarea,title:this.title,imgSrc:void 0==this.imgSrc[0]?"nu":this.imgSrc[0],imgSrc1:void 0==this.imgSrc[1]?"nu":this.imgSrc[1],imgSrc2:void 0==this.imgSrc[2]?"nu":this.imgSrc[2]};const{data:i,resultCode:e}=await c(t);200==e&&(this.$message({message:"发表成功",type:"success"}),location.reload())},handleAvatarSuccess(t,i){this.imgSrc.push(t.message)},async handleChange(t,i){},handleClose(){},async showAcly(t){if(console.log(t),void 0==t&&3==this.configType)return;const{data:i,resultCode:e}=await o({ConfigType:this.configType,start:this.count,limit:3,content:t});this.listData=i,i.length<3?(this.loading=!1,this.noMore=!0,this.count=i.length):(this.loading=!0,this.count=3,this.load(),this.noMore=!1)},showdata(t){this.configType=t,this.count=0,3==t?this.showAcly(this.content):this.showAcly(),this.loading=!0,this.noMore=!1},async load(){if(this.count>=3){console.log("loading"),console.log(this.count);const{data:t,resultCode:i}=await o({ConfigType:this.configType,start:this.count,limit:3,content:3==this.configType?void 0==this.content?"":this.content:""});if(this.count>=3&&(this.loading=!0),0==t.length)this.noMore=!0,this.loading=!1;else{for(let i=0;i<t.length;i++)this.listData.push(t[i]);console.log(this.listData),setTimeout((()=>{this.count+=t.length,this.loading=!1}),2e3)}}}},computed:{noMore(){return this.count>=this.num0-1},disabled(){return this.loading||this.noMore}},watch:{noMore(t,i){console.log("watch"+t)}},mounted(){this.userid=this.$store.state.userObj["uid"],this.showAcly()}},h=r,d=e(1001),u=(0,d.Z)(h,s,a,!1,null,null,null),p=u.exports}}]);
//# sourceMappingURL=751.9fbaa21d.js.map