//about.js
//获取应用实例
var app = getApp()
Page({
  data: {
    logosrc:'../../image/天天周边.png',
    wxImage: app.imageUrlPre+'index/微信.png',
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  preViewWX: function () {
    var that = this;
    wx.previewImage({
      current : that.data.wxImage,
      urls : [that.data.wxImage]
    })
  }
})
