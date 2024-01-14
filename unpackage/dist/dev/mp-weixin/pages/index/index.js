"use strict";
const common_vendor = require("../../common/vendor.js");
const IndexSwiper = () => "../../components/index/IndexSwiper.js";
const Card = () => "../../components/common/Card.js";
const CommodityList = () => "../../components/common/CommodityList.js";
const Icons = () => "../../components/index/Icons.js";
const Hot = () => "../../components/index/Hot.js";
const _sfc_main = {
  data() {
    return {
      topBarIndex: 0,
      topBar: [
        {
          name: "推荐"
        },
        {
          name: "电脑办公"
        },
        {
          name: "办公用品"
        },
        {
          name: "数码硬件"
        },
        {
          name: "数码软件"
        },
        {
          name: "配件"
        },
        {
          name: "其它"
        }
      ]
    };
  },
  components: {
    IndexSwiper,
    Card,
    CommodityList,
    Icons,
    Hot
  },
  onLoad() {
  },
  methods: {
    changeTab(index) {
      if (this.topBarIndex === index) {
        return;
      }
      this.topBarIndex = index;
    },
    onChangeTab(e) {
      this.changeTab(e.detail.current);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.topBar, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n($data.topBarIndex === index ? "f-active-color" : "f-color"),
        c: index,
        d: common_vendor.o(($event) => $options.changeTab(index), index)
      };
    }),
    b: common_vendor.f($data.topBar, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index
      };
    }),
    c: common_vendor.o((...args) => $options.onChangeTab && $options.onChangeTab(...args)),
    d: $data.topBarIndex
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/developer/mini/tc-mall-mini/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
