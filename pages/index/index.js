//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imageUrlPre: app.imageUrlPre,
    enter: app.imageUrlPre+'/index/入驻.png',
    area: app.imageUrlPre+'/index/区域.png',
    priceList: app.imageUrlPre+'/index/回收价格.png',
    noProduct: app.imageUrlPre+'/index/暂无热卖.png',
    zhinan: app.imageUrlPre+'/index/指南.png',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onPullDownRefresh(){
    //在当前页面显示导航条加载动画
    wx.showNavigationBarLoading(); 
    this.loadProduct();
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
  },
  gotoProduct(e){
    var item = e.currentTarget.dataset.lockerid;
    wx.request({
      url: app.nativeUrlPre+"product/getProductDetail?appId="+item.shopInfo.appId+"&productId="+item.productId,
      success: function(res){
        app.globalData.currentProduct = res.data.list[0];
        wx.navigateTo({
          url: '/pages/productDetail/productDetail?'
        });
      }
    });
  },
  onLoad: function(){
    var that = this;
    this.loadProduct();
    wx.request({
      url: app.imageUrlPre+'/index/imageList',
      success (res) {
        that.setData({recycleList: res.data.recycleList});
        that.setData({galleryList: res.data.galleryList});
      }
    });
    wx.request({
      url: app.nativeUrlPre+'shop/zhinan',
      success (res) {
        that.setData({zhinanUrl: res.data});
      }
    })
  },
  loadProduct: function(){
    var that = this;
    app.getUserAddress().then(res=>{
      wx.setNavigationBarTitle({
        title:  res
      });
      var url = app.nativeUrlPre+"product/listProduct?pageNum=1&index=0&lat="+app.globalData.lat+"&lng="+app.globalData.lng;
      wx.request({
        url: url,
        success: function(res){
          that.setData({productList: res.data.productList});
        }
      });
    });
  }
})
