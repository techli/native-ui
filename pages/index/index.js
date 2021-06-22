//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imageUrlPre: app.imageUrlPre,
    isIndex: true,
    appointment: '../../image/预约.png',
    priceList: '../../image/回收价格.png',
    minishop:'../../image/微信小商店.png',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20 , 
  },
  onLoad: function(){
    var that = this;
    var barData = {
      title: '首页',
      isIndex: true,
      address: app.globalData.address
    }
    that.setData({
      navbarData: barData
    });
    if(app.globalData.address.length==0){
      console.log('enenene');
      app.getUserAddress().then(res=>{
        console.log(res);
        barData.address = res.result.address_reference.business_area.title;
        that.setData({
          navbarData: barData
        });
      });
    }else{
      that.setData({
        navbarData: barData
      })
    }
    wx.request({
      url: app.imageUrlPre+'/index/imageList',
      success (res) {
        that.setData({recycleList: res.data.recycleList});
        that.setData({galleryList: res.data.galleryList});
      }
    })
  }
})
