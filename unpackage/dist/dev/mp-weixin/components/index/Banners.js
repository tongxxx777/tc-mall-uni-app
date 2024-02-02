"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    banners: Array
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.banners, (banner, index, i0) => {
      return {
        a: `/static/img/${banner.image}`,
        b: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-03276fb3"], ["__file", "E:/developer/tc-mall-uni-app/components/index/Banners.vue"]]);
wx.createComponent(Component);
