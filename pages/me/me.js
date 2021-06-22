//about.js
//获取应用实例
var app = getApp()
Page({
  data: {
    touxiang: '../../image/头像.png',
    userInfo: {},
    // 组件所需的参数
    navbarData: {
      title: '我的', //导航栏 中间的标题
      isIndex: false
    },
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20 , 
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
