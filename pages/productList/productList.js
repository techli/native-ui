import CustomPage from '../base/CustomPage'
var app = getApp()
CustomPage({
  onShareAppMessage() {
    return {
      title: 'vtabs',
      path: 'page/weui/example/vtabs/vtabs'
    }
  },
  data: {
    appId: '',
    vtabs: [],
    index: 0,
    rowCount: 0,
    activeTab: 0,
    productUrl: '',
    productList:[],
    catsList:[],
    pageNum: 1
  },

  onLoad(options) {
    var that = this;
    wx.setNavigationBarTitle({
      title:  app.globalData.address
    });
    wx.request({
      url: app.nativeUrlPre+"product/listProductCats",
      success: function(res){
        that.setData({ catsList: res.data});
      }
    });    
    wx.request({
      url: app.nativeUrlPre+"product/listProduct?pageNum="+that.data.pageNum+"&index=0&lat="+app.globalData.lat+"&lng="+app.globalData.lng,
      success: function(res){
        that.setData({ productList: res.data.productList });
        that.setData({ rowCount: res.data.total });
      }
    });
  },
  onRefresh(){
    wx.showNavigationBarLoading(); 
    this.loadProduct();
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
  },
  loadProduct: function(e){
    app.getUserAddress().then(res=>{
      wx.setNavigationBarTitle({
        title:  res
      });
      wx.request({
        url: app.nativeUrlPre+"product/listProduct?pageNum="+that.data.pageNum+"&index=0&lat="+app.globalData.lat+"&lng="+app.globalData.lng,
        success: function(res){
          that.setData({ productList: res.data.productList });
          that.setData({ rowCount: res.data.total });
        }
      });
    });
  },
  onReachBottom: function(e){
    if(this.data.productList.length==this.data.rowCount){
      return false;
    }
    this.setData({pageNum: this.data.pageNum+1});
    var that = this;
    wx.request({
      url: app.nativeUrlPre+"product/listProduct?pageNum="+that.data.pageNum+"&index="+this.data.index+"&lat="+app.globalData.lat+"&lng="+app.globalData.lng,
      success: function(res){
        that.setData({rowCount: that.data.total});
        that.setData({productList: that.data.productList.concat(res.data.productList)});
      }
    })
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
    })
    
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
  onTabClick(e) {
    const index = e.detail.index;
    this.setData({index: index});
    this.setData({pageNum: 1});
    this.setData({rowCount: 0});
    var that = this;
    wx.request({
      url: app.nativeUrlPre+"product/listProduct?pageNum="+that.data.pageNum+"&index="+index+"&lat="+app.globalData.lat+"&lng="+app.globalData.lng,
      success: function(res){
        that.setData({rowCount: that.data.total});
        that.setData({productList: res.data.productList});
      }
    })
  },

  onChange(e) {
    const index = e.detail.index
  },
  handleClick() {
    wx.navigateTo({
      url: '../tabs/webview',
    })
  }
})
