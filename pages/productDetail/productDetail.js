var app = getApp()
Page({
  data: {
    productUrl: '',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    currentProduct: null
  },
  onLoad(options) {
    this.setData({currentProduct: app.globalData.currentProduct});
  },
  gotoProduct(e){
    var that = this;
    wx.navigateToMiniProgram({
      appId: that.data.currentProduct.shareInfo.appId,
      path: that.data.currentProduct.shareInfo.path,
      fail: (err) => { },
    });
  }
})
