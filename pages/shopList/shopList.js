var app = getApp()
Page({
  onShareAppMessage() {
    return {
      title: 'recycle-view',
      path: 'page/weui/example/recycle-view/recycle-view'
    }
  },
  data: {
    pageNum: 1,
    rowCount: 0,
    shopList:[]
  },
  onLoad(options) {
    var that = this;
    wx.request({
      url: app.nativeUrlPre+"shop/listShop?pageNum="+this.data.pageNum,
      success: function(res){
        that.setData({rowCount: res.data.total});
        that.setData({shopList: res.data.list});
      }
    });  
  },
  onReachBottom: function(e){
    if(this.data.shopList.length==this.data.rowCount){
      return false;
    }
    this.setData({pageNum: this.data.pageNum+1});
    var that = this;
    wx.request({
      url: app.nativeUrlPre+"shop/listShop?pageNum="+that.data.pageNum,
      success: function(res){
        that.setData({rowCount: that.data.total});
        that.setData({shopList: that.data.shopList.concat(res.data.productList)});
      }
    })
  },
  gotoProductList: function(e){
    var item = e.currentTarget.dataset.lockerid;
    wx.navigateTo({
      url: '/pages/shopDetail/shopDetail?appId='+item.appId,
    })
  },
  onReady() {
  },

})