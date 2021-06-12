var app = getApp()
Page({
  onShareAppMessage() {
    return {
      title: 'recycle-view',
      path: 'page/weui/example/recycle-view/recycle-view'
    }
  },
  data: {
    lizhuyuanlogo: app.imageUrlPre+'serviceList/lizhuyuan/logo.png'
  },
  onLoad(options) {

  },
  onReady() {
  },

})