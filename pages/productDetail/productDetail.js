var app = getApp()
Page({
  data: {
    productUrl: ''
  },
  onLoad(options) {
    var that = this;
    wx.request({
      url: app.nativeUrlPre+"product/getProductDetail?appId="+options.appId+"&productId="+options.productId,
      success: function(res){
        that.setData({
          productUrl:res.data.list[0].shareInfo.promotionUrl
        });
      }
    });
  }
})
