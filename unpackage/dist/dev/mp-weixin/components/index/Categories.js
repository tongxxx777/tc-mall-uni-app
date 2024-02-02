"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    categories: Array
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.categories, (category, index, i0) => {
      return {
        a: `/static/img/${category.icon}`,
        b: common_vendor.t(category.name),
        c: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-82c6e118"], ["__file", "E:/developer/tc-mall-uni-app/components/index/Categories.vue"]]);
wx.createComponent(Component);
