"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    cardTitle: String
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.cardTitle)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aea130cd"], ["__file", "E:/developer/mini/tc-mall-mini/components/common/Card.vue"]]);
wx.createComponent(Component);
