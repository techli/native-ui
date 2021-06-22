//app.js
App({
  imageUrlPre: "https://www.techli.top:8443/image/",
  nativeUrlPre: "https://www.techli.top:8443/native-api/",
  onLaunch: function () {
    var that = this;
    this.getUserAddress().then(res=>{
      that.globalData.address = res.result.address_reference.business_area.title;
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
            url: 'http://apis.map.qq.com/ws/geocoder/v1/',
            data: {
              "key": "QNIBZ-CSNEO-UYQWW-SPOQZ-XEAM5-5AFKA",
              "location": locationString
            },
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