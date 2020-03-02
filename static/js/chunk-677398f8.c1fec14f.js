(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-677398f8"],{"440b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container"},[t._m(0),t._v(" "),n("div",{staticClass:"editor-container"},[n("el-tag",{staticClass:"tag-title"},[t._v("\n      Basic:\n    ")]),t._v(" "),n("markdown-editor",{attrs:{height:"300px"},model:{value:t.content1,callback:function(e){t.content1=e},expression:"content1"}})],1),t._v(" "),n("div",{staticClass:"editor-container"},[n("el-tag",{staticClass:"tag-title"},[t._v("\n      Markdown Mode:\n    ")]),t._v(" "),n("markdown-editor",{ref:"markdownEditor",attrs:{options:{hideModeSwitch:!0,previewStyle:"tab"},height:"200px"},model:{value:t.content2,callback:function(e){t.content2=e},expression:"content2"}})],1),t._v(" "),n("div",{staticClass:"editor-container"},[n("el-tag",{staticClass:"tag-title"},[t._v("\n      Customize Toolbar:\n    ")]),t._v(" "),n("markdown-editor",{attrs:{options:{toolbarItems:["heading","bold","italic"]}},model:{value:t.content3,callback:function(e){t.content3=e},expression:"content3"}})],1),t._v(" "),n("div",{staticClass:"editor-container"},[n("el-tag",{staticClass:"tag-title"},[t._v("\n      I18n:\n    ")]),t._v(" "),n("el-alert",{attrs:{closable:!1,title:"You can change the language of the admin system to see the effect",type:"success"}}),t._v(" "),n("markdown-editor",{ref:"markdownEditor",attrs:{language:t.language,height:"300px"},model:{value:t.content4,callback:function(e){t.content4=e},expression:"content4"}})],1),t._v(" "),n("el-button",{staticStyle:{"margin-top":"80px"},attrs:{type:"primary",icon:"el-icon-document"},on:{click:t.getHtml}},[t._v("\n    Get HTML\n  ")]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.html)}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",[t._v("Markdown is based on\n    "),n("a",{attrs:{href:"https://github.com/nhnent/tui.editor",target:"_blank"}},[t._v("tui.editor")]),t._v(" ，simply wrapped with Vue.\n    "),n("a",{attrs:{target:"_blank",href:"https://panjiachen.github.io/vue-element-admin-site/feature/component/markdown-editor.html"}},[t._v("\n      Documentation ")])])}],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:t.id}})},a=[],s=(n("5ab2"),n("6d57"),n("e10e"),n("289c")),c=(n("e5d4"),n("550e0"),n("233f"),n("d341")),d=n.n(c),l={minHeight:"200px",previewStyle:"vertical",useCommandShortcut:!0,useDefaultHTMLSanitizer:!0,usageStatistics:!1,hideModeSwitch:!1,toolbarItems:["heading","bold","italic","strike","divider","hr","quote","divider","ul","ol","task","indent","outdent","divider","table","image","link","divider","code","codeblock"]};function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g={name:"MarkdownEditor",props:{value:{type:String,default:""},id:{type:String,required:!1,default:function(){return"markdown-editor-"+ +new Date+(1e3*Math.random()).toFixed(0)}},options:{type:Object,default:function(){return l}},mode:{type:String,default:"markdown"},height:{type:String,required:!1,default:"300px"},language:{type:String,required:!1,default:"en_US"}},data:function(){return{editor:null}},computed:{editorOptions:function(){var t=Object.assign({},l,this.options);return t.initialEditType=this.mode,t.height=this.height,t.language=this.language,t}},watch:{value:function(t,e){t!==e&&t!==this.editor.getValue()&&this.editor.setValue(t)},language:function(t){this.destroyEditor(),this.initEditor()},height:function(t){this.editor.height(t)},mode:function(t){this.editor.changeMode(t)}},mounted:function(){this.initEditor()},destroyed:function(){this.destroyEditor()},methods:{initEditor:function(){var t=this;this.editor=new d.a(h({el:document.getElementById(this.id)},this.editorOptions)),this.value&&this.editor.setValue(this.value),this.editor.on("change",(function(){t.$emit("input",t.editor.getValue())}))},destroyEditor:function(){this.editor&&(this.editor.off("change"),this.editor.remove())},setValue:function(t){this.editor.setValue(t)},getValue:function(){return this.editor.getValue()},setHtml:function(t){this.editor.setHtml(t)},getHtml:function(){return this.editor.getHtml()}}},m=g,p=n("623f"),f=Object(p["a"])(m,r,a,!1,null,null,null),v=f.exports,b="\n**This is test**\n\n* vue\n* element\n* webpack\n\n",w={name:"MarkdownDemo",components:{MarkdownEditor:v},data:function(){return{content1:b,content2:b,content3:b,content4:b,html:"",languageTypeList:{en:"en_US",zh:"zh_CN",es:"es_ES"}}},computed:{language:function(){return this.languageTypeList["en"]}},methods:{getHtml:function(){this.html=this.$refs.markdownEditor.getHtml(),console.log(this.html)}}},_=w,y=(n("9089"),Object(p["a"])(_,i,o,!1,null,"44f9dad6",null));e["default"]=y.exports},9089:function(t,e,n){"use strict";var i=n("e83e"),o=n.n(i);o.a},e83e:function(t,e,n){}}]);