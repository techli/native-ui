var app = getApp()
Page({
  onShareAppMessage() {
    return {
      address: null,
      title: 'recycle-view',
      path: 'page/weui/example/recycle-view/recycle-view'
    }
  },
  data: {
    shopList:[]
  },
  onLoad(options) {
    this.setData({address: app.globalData.address});
    var that = this;
    wx.request({
      url: app.nativeUrlPre+"shop/listMyShop?openId="+app.globalData.openId,
      success: function(res){
        that.setData({shopList: res.data});
      }
    });  
  },
  gotoSetArea: function(e){
    var item = e.currentTarget.dataset.lockerid;
    var url = '/pages/area/area?appId='+item.appId;
    wx.navigateTo({
      url: url
    })
  },
  onReady() {
  },

})