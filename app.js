//app.js
App({
  imageUrlPre: "https://www.techli.top/images/",
  nativeUrlPre: "https://www.techli.top/native-api/",
  onLaunch: function () {
    var that = this;
     this.getUserAddress().then(res=>{
       that.globalData.address = res;
     });
    this.getUserOpenId().then(res=>{
      that.globalData.openId = res;
    })
  },

  getUserAddress: function(){
    return new Promise((reslove, reject) => {
      wx.getLocation({
        type: 'wgs84',
        isHighAccuracy: true,
        success (res) {
          var locationString = res.latitude + "," + res.longitude;
          wx.request({
            url: 'http://127.0.0.1:8080/address/currentAddress',
            method: 'GET',
            success: function (res) {
              //输出一下位置信息
              reslove(res.data, res);
            },
            fail: (msg) => {
              reject('请求失败');
            }
          });
        }
      });
    });
  },

  getUserOpenId: function(){
    var that = this;
    return new Promise((reslove, reject) => {
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
                //输出一下位置信息
                reslove(res.data, res);
              },
              fail: (msg) => {
                reject('请求失败');
              }
            })
          }
        }
      });
    });
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
    share: false,  // 分享默认为false
    height: 20,
    openId: null,
    address: '',
    userInfo: null
  }
})