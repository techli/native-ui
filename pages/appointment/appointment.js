//action.js
//获取应用实例
var app = getApp()
Page({
  data: {
    phoneError: false,
    openId: ''
  },
  onLoad: function(){
    if(app.getUserOpenId.length==0){
      app.getUserOpenId().then(res=>{
        this.setData({openId:res});
      })
    }
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '15138244113', 
    })
  },
  formSubmit: function(e){
    let value = {...e.detail.value};
    var name=value.name.trim(),
    phone=value.phone.trim(),
    goodName =value.goodName.trim(),
    goodQuantity =value.goodQuantity.trim(),
    address =value.address.trim(),
    remark =value.remark.trim();

    var errorMsg;
    if(!name||name.length ==0){
      errorMsg = '联系人姓名不能为空';
    } else if(!phone||phone.length ==0){
      errorMsg = '电话号码不能为空';
    } else if(!(/^1\d{10}$/.test(phone))){ 
      errorMsg = "电话号码只能以1开头的11位数字";  
    }else if(!goodName||goodName.length ==0){
      errorMsg = '物品名称不能为空';
    }else if(!address||address.length==0){
      errorMsg = '上门地址不能为空';
    };
        
    if(errorMsg){
      wx.showToast({
        title: errorMsg,
        icon: 'none',
        duration: 2000//持续的时间
      })
    }

    var data = {
      "openId": this.data.openId,
      "serviceId":value.serviceId,
      "name":name,
      "phone":phone,
      "goodName":goodName,
      "goodQuantity":goodQuantity,
      "address":address,
      "remark":remark
    }
    this.submitAppointment(data);
  },
  
  submitAppointment: function(data){
    wx.request({
      url: app.nativeUrlPre+'appointment/createApply',
      method: 'post',
      data: data,
      success: function(res){
        wx.navigateTo({
          url: '../result/result?result=true&url=/pages/myAppointment/myAppointment&message=预约结果到“我的->我的预约”中查看',
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

  getUserLocation: function (options){
    var that = this;
    wx.chooseLocation({
      success(res) {
        that.setData({address:res.address+res.name});
      }
    });
  }
});