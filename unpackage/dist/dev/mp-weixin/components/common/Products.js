"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    products: Array
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.products, (product, index, i0) => {
      return {
        a: `https://image.baidu.com/search/down?url=${product.cover}`,
        b: common_vendor.t(product.name),
        c: common_vendor.t(product.price),
        d: common_vendor.t(product.sold_count),
        e: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e2338cc2"], ["__file", "E:/developer/tc-mall-uni-app/components/common/Products.vue"]]);
wx.createComponent(Component);
