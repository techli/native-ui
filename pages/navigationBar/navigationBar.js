const app = getApp()
Component({
  properties: {
    navbarData: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {}
    }
  },
  data: {
    height: ''
  },
  attached: function () {
    // 获取是否是通过分享进入的小程序
    this.setData({
      share: app.globalData.share
    })
    // 定义导航栏的高度   方便对齐
    this.setData({
      height: app.globalData.height
    })
  },
  methods: {
    _reloadAddress() {
      var that = this;
      var barData = {
        title: '首页',
        isIndex: true,
        address: app.globalData.address
      }
      app.getUserAddress().then(res=>{
        barData.address = res.result.address_reference.business_area.title;
        that.setData({
          navbarData: barData
        })
      });   
     },
  }

}) 