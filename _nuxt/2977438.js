(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{267:function(t,e,l){"use strict";l.r(e);var r={name:"PlanSelector",props:{option:{type:Object,required:!0},selected:{type:Boolean,default:!1}}},c=l(26),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"cursor-pointer bg-white border-4 border-white rounded-xl shadow-lg h-full w-full",class:{"border-4 border-primary shadow-primary":t.selected},on:{click:function(e){return t.$emit("click")}}},[l("div",{staticClass:"h-full px-6 py-4"},[l("div",{staticClass:"flex justify-between"},[l("h2",{staticClass:"uppercase text-lg font-semibold tracking-wider",class:t.selected?"text-primary":"text-muted",staticStyle:{margin:"0 !important"}},[t._v("\n        "+t._s(t.option.label)+"\n      ")]),t._v(" "),l("div",{staticClass:"grid items-center justify-items-center border-2 border-white rounded-full h-8 w-8",class:{"border-primary bg-primary shadow-lg shadow-primary":t.selected},attrs:{checked:t.selected,role:"radio"},on:{click:function(t){t.preventDefault()}}},[t.selected?l("img",{staticClass:"h-4 w-4",staticStyle:{margin:"0 !important"},attrs:{src:"icons/check.svg"}}):t._e()])]),t._v(" "),l("div",{staticClass:"mt-2 flex justify-between items-center"},[l("p",[l("span",{staticClass:"font-bold text-3xl"},[t._v(t._s(t.option.data/1e3))]),l("span",{staticClass:"font-bold text-xl ml-2"},[t._v("TB")]),t._v(" "),l("span",{staticClass:"text-xl text-muted ml-1"},[t._v("of storage")])]),t._v(" "),l("p",{staticClass:"tracking-wide font-semibold"},[t._v("$"+t._s(t.option.price)+" / mo")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);