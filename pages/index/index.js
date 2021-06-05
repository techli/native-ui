//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    appointment: '../../image/预约.png',
    recycllist: '../../image/价格列表.png',
    contactUs: '../../image/联系我们.png',
    shopImg: '../../image/二手商品.png',
    signupimg:'../../image/signup.png',
    bingxiang:'../../image/冰箱.png',
    caidian:'../../image/彩电.png',
    kongtiao:'../../image/空调2.png',
    feijiujinshu:'../../image/废旧金属.png',
    diandongche:'../../image/电动车.png',
    diannao:'../../image/电脑.png',
    xianlan:'../../image/线缆.png',
    luntai:'../../image/轮胎.png',
    xiyiji:'../../image/洗衣机.png',
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
