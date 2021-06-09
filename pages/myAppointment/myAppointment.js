//action.js
//获取应用实例
var app = getApp()
Page({
  data:{
    showDialog: false
  },
  showAndroidDialog1:function(e){
    this.setData({showDialog:true});
  }
});