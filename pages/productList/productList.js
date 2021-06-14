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
    vtabs: [],
    activeTab: 0,
    pageNum: 1,
    pageSize:10
  },

  onLoad() {
    var that = this;
    wx.request({
      url: app.nativeUrlPre+"product/listProductCats",
      success: function(res){
        that.setData({ vtabs: res.data.productCats });
      }
    })
  },

  onTabClick(e) {
    const index = e.detail.index;
    var that = this;
    wx.request({
      url: app.nativeUrlPre+"product/listProduct?pageNum="+this.data.pageNum+"&pageSize="+this.data.pageSize+"&categoryId="+this.data.vtabs[index].catId,
      method: 'get',
      success: function(res){
        console.log(res);
        that.setData({ productList: res.data.productList});
        console.log(that.data.productList);
      }
    })
  },

  onChange(e) {
    const index = e.detail.index
    console.log('change', index)
  },
  handleClick() {
    wx.navigateTo({
      url: '../tabs/webview',
    })
  }
})
