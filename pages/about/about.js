//about.js
//获取应用实例
var app = getApp()
Page({
  data: {
    logosrc:'../../image/logo.png',
    adrimg:'../../image/icon-address.png',
    clockimg: '../../image/icon-clock.png',
    comment: '../../image/聊天.png',
    phoneimg: '../../image/icon-phone.png',
    jtimg: '../../image/icon-jt.png',
    picimg: '../../image/icon-pic.png',
    contactUs: '../../image/联系我们.png',
    imgalist: ['../../image/微信.png'],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '15138244113', 
    })
  },
  preViewWX: function () {
    wx.previewImage({
      current : 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF',
      urls : ['https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF']
    })
  },
  getLocation: function (){
    wx.openLocation({
      latitude: 33.479216,
      longitude: 115.089585,
      name:"天天周边",
      address:"沈丘县白集镇李竹园村",
      scale: 28
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
