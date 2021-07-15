//action.js
//获取应用实例
var app = getApp()
Page({
  data: {
    checkPass: false,
    appId: '',
    centerLat: '',
    centerLng: '',
    openId: ''
  },
  onLoad: function(){
    if(app.getUserOpenId.length==0){
      app.getUserOpenId().then(res=>{
        this.setData({openId:res});
      })
    }
  },
  formSubmit: function(e){
    let value = {...e.detail.value};
    let paramData={
      openId: app.globalData.openId,
      appId: value.appId,
      centerLat: this.data.centerLat,
      centerLng: this.data.centerLng
    }
    wx.request({
      url: app.nativeUrlPre+'shop/enter',
      method: 'post',
      data: paramData,
      success: function(res){
        wx.navigateTo({
          url: '../result/result?result=true&url=/pages/index/index',
        })
      },
      fail: function(res){
        wx.showToast({
          title: '系统错误，请稍后重试！',
          icon: 'none',
          duration: 2000//持续的时间
        })
      }
    })
  },
  checkData: function(e){
    if(e.detail.value && e.detail.value.trim().length>0){
      this.setData({appId:e.detail.value.trim()});
      if(this.data.centerLat!=''){
        this.setData({checkPass:true});
        return;
      }
    }
    this.setData({checkPass:false});
  },

  getServiceCenter: function (options){
    var that = this;
    wx.chooseLocation({
      success(res) {
        that.setData({centerLat:res.latitude});
        that.setData({centerLng:res.longitude});
        
        if(that.data.appId.length>0){
          that.setData({checkPass:true});
        }else{
          that.setData({checkPass:false});
        }
      }
    });
  }
});