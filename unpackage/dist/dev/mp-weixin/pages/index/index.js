"use strict";
const common_vendor = require("../../common/vendor.js");
const IndexSwiper = () => "../../components/index/IndexSwiper.js";
const Icons = () => "../../components/index/Icons.js";
const Card = () => "../../components/common/Card.js";
const Hot = () => "../../components/index/Hot.js";
const _sfc_main = {
  data() {
    return {
      // 选中的索引
      topBarIndex: 0,
      // 顶栏跟随的索引ID值
      scrollIntoIndex: "top0",
      // 内容块的高度值
      clentHeight: 0,
      // 顶栏数据
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
    Icons,
    Card,
    Hot
  },
  onLoad() {
  },
  onReady() {
    let view = common_vendor.index.createSelectorQuery().select(".home-data");
    view.boundingClientRect((data) => {
      this.clentHeight = data.height;
    }).exec();
  },
  methods: {
    changeTab(index) {
      if (this.topBarIndex === index) {
        return;
      }
      this.topBarIndex = index;
      this.scrollIntoIndex = "top" + index;
    },
    onChangeTab(e) {
      this.changeTab(e.detail.current);
    }
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
    a: common_vendor.f($data.topBar, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n($data.topBarIndex === index ? "f-active-color" : "f-color"),
        c: "top" + index,
        d: index,
        e: common_vendor.o(($event) => $options.changeTab(index), index)
      };
    }),
    b: $data.scrollIntoIndex,
    c: common_vendor.f($data.topBar, (item, index, i0) => {
      return {
        a: "1cf27b2a-0-" + i0,
        b: "1cf27b2a-1-" + i0,
        c: "1cf27b2a-2-" + i0,
        d: "1cf27b2a-3-" + i0,
        e: index
      };
    }),
    d: common_vendor.p({
      cardTitle: "热销爆品"
    }),
    e: common_vendor.o((...args) => $options.onChangeTab && $options.onChangeTab(...args)),
    f: $data.topBarIndex,
    g: common_vendor.s("height:" + $data.clentHeight + "px;")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/developer/tc-mall-uni-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
