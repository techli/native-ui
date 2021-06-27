//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imageUrlPre: app.imageUrlPre,
    appointment: app.imageUrlPre+'/index/预约.png',
    priceList: app.imageUrlPre+'/index/回收价格.png',
    minishop: app.imageUrlPre+'/index/微信小商店.png',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  gotoShopUrl(e){
    var item = e.currentTarget.dataset.lockerid;
    wx.request({
      url: app.nativeUrlPre+"product/getProductDetail?appId="+item.shopInfo.appId+"&productId="+item.productId,
      success: function(res){
        wx.navigateTo({
          url: res.data.list[0].shareInfo.path,
        });
      }
    });
  },
  onLoad: function(){
    var that = this;
    app.getUserAddress().then(res=>{
      wx.setNavigationBarTitle({
        title:  res
      });
    });
    wx.request({
      url: app.nativeUrlPre+"product/listProduct?pageNum=1&index=0",
      success: function(res){
        that.setData({productList: res.data.productList});
      }
    });
    wx.request({
      url: app.imageUrlPre+'/index/imageList',
      success (res) {
        that.setData({recycleList: res.data.recycleList});
        that.setData({galleryList: res.data.galleryList});
      }
    })
  }
})
