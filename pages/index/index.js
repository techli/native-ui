//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    appointment: '../../image/预约.png',
    recycllist: '../../image/回收列表.png',
    contactUs: '../../image/联系我们.png',
    shopImg: '../../image/二手商品.png',
    signupimg:'../../image/signup.png',
    imgsrc:'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&quality=120&wh_rate=0&size=f648_364&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=1619440b1bc5580ece1e18c556a408d7&src=http%3A%2F%2Ft12.baidu.com%2Fit%2Fu%3D2318927072%2C2551034291%26fm%3D175%26s%3DF9E09B544C2154095A6098DF030090F1%26w%3D660%26h%3D370%26img.JPEG',
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
