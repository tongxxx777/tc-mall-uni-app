"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    dataList: Array,
    itemW: {
      type: String,
      default: "375rpx"
    },
    bigH: {
      type: String,
      default: "375rpx"
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.dataList, (item, index, i0) => {
      return {
        a: item.imgUrl,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.price),
        d: common_vendor.t(item.volume),
        e: index
      };
    }),
    b: common_vendor.s("height:" + $props.bigH + ";"),
    c: common_vendor.s("width:" + $props.itemW + ";")
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cb28c60"], ["__file", "E:/developer/tc-mall-uni-app/components/common/Commodity.vue"]]);
wx.createComponent(Component);
