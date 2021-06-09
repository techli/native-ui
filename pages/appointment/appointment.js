//action.js
//获取应用实例
var app = getApp()
Page({
  data: {
    num:1,
    minusStatus:'disable',
    phoneError: false
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '15138244113', 
    })
  },
  checkPhone: function(e){
    console.log(e);
    if(!(/^1\d{10}$/.test(e.detail.value))){
      console.log("aaaaa");
      this.setData({phoneError:true});
    }else{
      console.log("bbbb");
      this.setData({phoneError:false});
    }
  },
  formSubmit: function(e){
    var errorMsg,nameError,phoneError,goodNameError,addressError;
    let value = {...e.detail.value};
    var name=value.name.trim(),
    phone=value.phone.trim(),
    goodName =value.goodName.trim(),
    goodQuantity =value.goodQuantity.trim(),
    address =value.address.trim(),
    remark =value.remark.trim();

    if(!name||name.length ==0){
      nameError = true;
      errorMsg = '姓名不能为空';
    } else if(!phone||phone.length ==0){
      phoneError=true;
      errorMsg = '电话号码不能为空';
    } else if(!(/^1\d{10}$/.test(phone))){ 
      phoneError=true;
      errorMsg = "电话号码只能以1开头的11位数字";  
    }else if(!goodName||goodName.length ==0){
      goodNameError=true;
      errorMsg = '物品名称不能为空';
    }else if(!address||address.length==0){
      addressError = true;
      errorMsg = '上门地址不能为空';
    };

    if(errorMsg){
      wx.showToast({
        title: errorMsg,
        icon: 'none',
        duration: 2000//持续的时间
      })
    }
  },
  getUserLocation: function (options){
    var that = this;
    wx.chooseLocation({
      success(res) {
        console.log(res);
        that.setData({address:res.address+res.name});
      }
    });
  }
});