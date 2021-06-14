//about.js
//获取应用实例
var app = getApp()
Page({
  submitProblem: function (e) {
    let value = {...e.detail.value};
    let content = value.content.trim();
    if(content.length==0){
      wx.showToast({
        title: '反馈内容不能为空',
        icon: 'none',
        duration: 2000//持续的时间
      })
    }

    wx.request({
      url: app.nativeUrlPre+'feedback/create',
      method: 'post',
      data: {content: content},
      success: function(res){
        wx.navigateTo({
          url: '../result/result?result=true&message=反馈成功，我们会尽快处理',
        })
      },
      fail: function(res){
        wx.showToast({
          title: '系统错误，请稍后重试！',
          icon: 'none',
          duration: 2000//持续的时间
        })
      }
    })
  },
})
