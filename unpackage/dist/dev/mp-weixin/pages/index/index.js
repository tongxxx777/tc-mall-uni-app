"use strict";
const common_vendor = require("../../common/vendor.js");
const IndexSwiper = () => "../../components/index/IndexSwiper.js";
const Icons = () => "../../components/index/Icons.js";
const Card = () => "../../components/common/Card.js";
const Hot = () => "../../components/index/Hot.js";
const _sfc_main = {
  data() {
    return {};
  },
  methods: {},
  components: {
    IndexSwiper,
    Icons,
    Card,
    Hot
  }
};
if (!Array) {
  const _component_IndexSwiper = common_vendor.resolveComponent("IndexSwiper");
  const _component_Icons = common_vendor.resolveComponent("Icons");
  const _component_Card = common_vendor.resolveComponent("Card");
  const _component_Hot = common_vendor.resolveComponent("Hot");
  (_component_IndexSwiper + _component_Icons + _component_Card + _component_Hot)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      cardTitle: "热销爆品"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/developer/tc-mall-uni-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
