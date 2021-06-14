//app.js
App({
  imageUrlPre: "http://47.101.151.58:8080/image/",
  nativeUrlPre: "http://127.0.0.1:8080/",
  openId: '',
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
    var that = this;
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: that.nativeUrlPre+'getOpenId',
            data: {
              code: res.code
            },
            success: function(res){
              console.log(res);
              console.log(that);
              that.openId = res.data;
            }
          })
        }
      }
    })
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})