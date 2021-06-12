var app = getApp()
Page({
  data: {
    imageUrlPre: app.imageUrlPre,
    recycleList: []
  },
  onLoad(options) {
    var that = this;
    wx.request({
      url: app.imageUrlPre+'/index/imageList',
      success (res) {
        that.setData({recycleList: res.data.recycleList});
      }
    })
  }
});