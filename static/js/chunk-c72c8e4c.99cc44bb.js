(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c72c8e4c"],{c361:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"components-container"},[l("el-drag-select",{staticStyle:{width:"500px"},attrs:{multiple:"",placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),l("div",{staticStyle:{"margin-top":"30px"}},e._l(e.value,(function(t){return l("el-tag",{key:t,staticStyle:{"margin-right":"15px"}},[e._v("\n      "+e._s(t)+"\n    ")])})),1)],1)},n=[],c=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-select",e._g(e._b({ref:"dragSelect",staticClass:"drag-select",attrs:{multiple:""},model:{value:e.selectVal,callback:function(t){e.selectVal=t},expression:"selectVal"}},"el-select",e.$attrs,!1),e.$listeners),[e._t("default")],2)},s=[],r=l("0bbb"),u=l("e7e2"),i=l.n(u),o={name:"DragSelect",props:{value:{type:Array,required:!0}},computed:{selectVal:{get:function(){return Object(r["a"])(this.value)},set:function(e){this.$emit("input",Object(r["a"])(e))}}},mounted:function(){this.setSort()},methods:{setSort:function(){var e=this,t=this.$refs.dragSelect.$el.querySelectorAll(".el-select__tags > span")[0];this.sortable=i.a.create(t,{ghostClass:"sortable-ghost",setData:function(e){e.setData("Text","")},onEnd:function(t){var l=e.value.splice(t.oldIndex,1)[0];e.value.splice(t.newIndex,0,l)}})}}},p=o,v=(l("d996"),l("623f")),d=Object(v["a"])(p,c,s,!1,null,"4d6de2c1",null),b=d.exports,f={name:"DragSelectDemo",components:{ElDragSelect:b},data:function(){return{value:["Apple","Banana","Orange"],options:[{value:"Apple",label:"Apple"},{value:"Banana",label:"Banana"},{value:"Orange",label:"Orange"},{value:"Pear",label:"Pear"},{value:"Strawberry",label:"Strawberry"}]}}},g=f,m=Object(v["a"])(g,a,n,!1,null,null,null);t["default"]=m.exports},c3ec:function(e,t,l){},d996:function(e,t,l){"use strict";var a=l("c3ec"),n=l.n(a);n.a}}]);