(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-notice-bar/u-notice-bar"],{"0f01":function(n,t,e){"use strict";var i=e("279b"),u=e.n(i);u.a},"279b":function(n,t,e){},"2f3e":function(n,t,e){"use strict";e.r(t);var i=e("d617"),u=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=u.a},a1d1:function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}));var i={uColumnNotice:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-column-notice/u-column-notice")]).then(e.bind(null,"00d9"))},uRowNotice:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-row-notice/u-row-notice")]).then(e.bind(null,"2f06"))}},u=function(){var n=this.$createElement,t=(this._self._c,this.show?this.__get_style([{backgroundColor:this.bgColor},this.$u.addStyle(this.customStyle)]):null);this.$mp.data=Object.assign({},{$root:{s0:t}})},o=[]},d323:function(n,t,e){"use strict";e.r(t);var i=e("a1d1"),u=e("2f3e");for(var o in u)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(o);e("0f01");var c=e("f0c5"),r=Object(c["a"])(u["default"],i["b"],i["c"],!1,null,"6862e5d8",null,!1,i["a"],void 0);t["default"]=r.exports},d617:function(n,t,e){"use strict";(function(n){var i=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(e("00ad")),o={name:"u-notice-bar",mixins:[n.$u.mpMixin,n.$u.mixin,u.default],data:function(){return{show:!0}},methods:{click:function(n){this.$emit("click",n),this.url&&this.linkType&&this.openPage()},close:function(){this.show=!1,this.$emit("close")}}};t.default=o}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-notice-bar/u-notice-bar-create-component',
    {
        'uni_modules/uview-ui/components/u-notice-bar/u-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d323"))
        })
    },
    [['uni_modules/uview-ui/components/u-notice-bar/u-notice-bar-create-component']]
]);
