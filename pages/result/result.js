//about.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  onLoad: function (options) {
    this.setData({result:options.result});
    this.setData({message:options.message});
    this.setData({url:options.url});
  }
})
