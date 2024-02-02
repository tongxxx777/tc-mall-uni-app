"use strict";
const common_vendor = require("../../common/vendor.js");
const Banners = () => "../../components/index/Banners.js";
const Categories = () => "../../components/index/Categories.js";
const Card = () => "../../components/common/Card.js";
const Products = () => "../../components/common/Products.js";
const _sfc_main = {
  data() {
    return {
      banners: [],
      categories: [],
      products: []
    };
  },
  onLoad() {
    this._index();
  },
  methods: {
    _index() {
      common_vendor.index.request({
        url: "http://api.tc-mall.local/api/index",
        success: (res) => {
          let data = res.data.data;
          this.banners = data.banners;
          this.categories = data.categories;
          this.products = data.products;
        }
      });
    }
  },
  components: {
    Banners,
    Categories,
    Card,
    Products
  }
};
if (!Array) {
  const _component_Banners = common_vendor.resolveComponent("Banners");
  const _component_Categories = common_vendor.resolveComponent("Categories");
  const _component_Card = common_vendor.resolveComponent("Card");
  const _component_Products = common_vendor.resolveComponent("Products");
  (_component_Banners + _component_Categories + _component_Card + _component_Products)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      banners: $data.banners
    }),
    b: common_vendor.p({
      categories: $data.categories
    }),
    c: common_vendor.p({
      cardTitle: "热销爆品"
    }),
    d: common_vendor.p({
      products: $data.products
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/developer/tc-mall-uni-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
