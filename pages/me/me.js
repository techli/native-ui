//about.js
//获取应用实例
var app = getApp()
Page({
  data: {
    touxiang: app.imageUrlPre+'index/头像.png',
    userInfo: {}, 
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  toProblemSubmit: function (el) {
    wx.navigateTo({
      url: '../problem/problem?toTab='+el.target.dataset.totab
    })
  },
  toAboutUs: function (el) {
    wx.navigateTo({
      url: '../about/about?toTab='+el.target.dataset.totab
    })
  },
  toMyAppointment: function (el) {
    wx.navigateTo({
      url: '../myAppointment/myAppointment?toTab='+el.target.dataset.totab
    })
  }
})
