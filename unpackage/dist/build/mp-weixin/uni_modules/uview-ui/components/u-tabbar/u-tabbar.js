(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-tabbar/u-tabbar"],{"0093":function(t,e,n){},2128:function(t,e,n){"use strict";n.r(e);var u=n("819c"),i=n("77a4");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("3cde");var r=n("f0c5"),c=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,"2a5dc234",null,!1,u["a"],void 0);e["default"]=c.exports},"3cde":function(t,e,n){"use strict";var u=n("0093"),i=n.n(u);i.a},"77a4":function(t,e,n){"use strict";n.r(e);var u=n("9696"),i=n.n(u);for(var a in u)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(a);e["default"]=i.a},"819c":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return u}));var u={uSafeBottom:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-safe-bottom/u-safe-bottom")]).then(n.bind(null,"3b01"))}},i=function(){var t=this.$createElement,e=(this._self._c,this.__get_style([this.tabbarStyle]));this.$mp.data=Object.assign({},{$root:{s0:e}})},a=[]},9696:function(t,e,n){"use strict";(function(t){var u=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("2eee")),a=u(n("c973")),r=u(n("dca7")),c={name:"u-tabbar",mixins:[t.$u.mpMixin,t.$u.mixin,r.default],data:function(){return{placeholderHeight:0}},computed:{tabbarStyle:function(){var e={zIndex:this.zIndex};return t.$u.deepMerge(e,t.$u.addStyle(this.customStyle))},updateChild:function(){return[this.value,this.activeColor,this.inactiveColor]},updatePlaceholder:function(){return[this.fixed,this.placeholder]}},watch:{updateChild:function(){this.updateChildren()},updatePlaceholder:function(){this.setPlaceholderHeight()}},created:function(){this.children=[]},mounted:function(){this.setPlaceholderHeight()},methods:{updateChildren:function(){this.children.length&&this.children.map((function(t){return t.updateFromParent()}))},setPlaceholderHeight:function(){var e=this;return(0,a.default)(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.fixed&&e.placeholder){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,t.$u.sleep(20);case 4:e.$uGetRect(".u-tabbar__content").then((function(t){var n=t.height,u=void 0===n?50:n;e.placeholderHeight=u}));case 5:case"end":return n.stop()}}),n)})))()}}};e.default=c}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-tabbar/u-tabbar-create-component',
    {
        'uni_modules/uview-ui/components/u-tabbar/u-tabbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2128"))
        })
    },
    [['uni_modules/uview-ui/components/u-tabbar/u-tabbar-create-component']]
]);
