"use strict";
const common_vendor = require("../../common/vendor.js");
const IndexSwiper = () => "../../components/index/IndexSwiper.js";
const Card = () => "../../components/common/Card.js";
const CommodityList = () => "../../components/common/CommodityList.js";
const _sfc_main = {
  data() {
    return {};
  },
  components: {
    IndexSwiper,
    Card,
    CommodityList
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _component_IndexSwiper = common_vendor.resolveComponent("IndexSwiper");
  const _component_Card = common_vendor.resolveComponent("Card");
  const _component_CommodityList = common_vendor.resolveComponent("CommodityList");
  (_component_IndexSwiper + _component_Card + _component_CommodityList)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      cardTitle: "热销爆品"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/developer/mini/tc-mall-mini/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
