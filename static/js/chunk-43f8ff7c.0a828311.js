(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43f8ff7c"],{4:function(n,t){},5:function(n,t){},cddd:function(n,t,c){"use strict";c.r(t),c.d(t,"export_txt_to_zip",(function(){return f}));c("2b45"),c("6d57");var o=c("d72d"),e=c("8423"),i=c.n(e);function f(n,t,c,e){var f=new i.a,a=c||"file",r=e||"file",u=t,d="".concat(n,"\r\n");u.forEach((function(n){var t="";t=n.toString(),d+="".concat(t,"\r\n")})),f.file("".concat(a,".txt"),d),f.generateAsync({type:"blob"}).then((function(n){Object(o["saveAs"])(n,"".concat(r,".zip"))}),(function(n){alert("导出失败")}))}}}]);