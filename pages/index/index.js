//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imageUrlPre: app.imageUrlPre,
    appointment: '../../image/预约.png',
    priceList: '../../image/回收价格.png',
    minishop:'../../image/微信小商店.png',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000 
  },
  onLoad: function(){
    var that = this;
    wx.request({
      url: app.imageUrlPre+'/index/imageList',
      success (res) {
        that.setData({recycleList: res.data.recycleList});
        that.setData({galleryList: res.data.galleryList});
      }
    })
  }
})
