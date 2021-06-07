//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    myList: [
      {mySrc:'../../image/冰箱.png', myLabel:'冰箱'},
      {mySrc:'../../image/彩电.png', myLabel:'彩电'},
      {mySrc:'../../image/空调.png', myLabel:'空调'},
      {mySrc:'../../image/电脑.png', myLabel:'电脑'},
      {mySrc:'../../image/洗衣机.png', myLabel:'洗衣机'},
      {mySrc:'../../image/电动车.png', myLabel:'电动车'},
      {mySrc:'../../image/废旧金属.png', myLabel:'铜铁铝'},
      {mySrc:'../../image/线缆.png', myLabel:'线缆'},
      {mySrc:'../../image/轮胎.png', myLabel:'橡胶轮胎'},
    ],
    appointment: '../../image/预约.png',
    priceList: '../../image/回收价格.png',
    contactUs: '../../image/联系我们.png',
    shopImg: '../../image/二手商品.png',
    signupimg:'../../image/signup.png',
    woyaogujia:'../../image/我要估价.png',
    minishop:'../../image/微信小商店.png',
    iconsrc:'../../image/usercount.png',
    jtsrc:'../../image/icon-jt.png',
    imgUrls: [
      '../../image/轮播图1.png',
      '../../image/轮播图2.png',
      '../../image/轮播图3.png',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000 
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '教育模板首页',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
        console.log("转发成功")
      },
      fail: function (res) {
        // 转发失败
        onsole.log("转发失败")
      }
    }
  }
})
