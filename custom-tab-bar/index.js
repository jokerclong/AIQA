Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      text: "首页",
      iconPath: "/static/icon/logistics-warehouse.png",
      selectedIconPath: "/static/icon/logistics-warehouse-fill.png"
    },
    {
      pagePath: "/pages/history/history",
      text: "历史",
      iconPath: "/static/icon/order.png",
      selectedIconPath: "/static/icon/order-fill.png"
    },
    {
      pagePath: "/pages/store/store",
      text: "商城",
      iconPath: "/static/icon/cart-full.png",
      selectedIconPath: "/static/icon/cart-full-fill.png"
    },
    {
      pagePath: "/pages/mypage/mypage",
      text: "我的",
      iconPath: "/static/icon/customer-center.png",
      selectedIconPath: "/static/icon/customer-fill.png"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})