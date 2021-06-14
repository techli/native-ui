//action.js
//获取应用实例
var app = getApp()
Page({
  data:{
    openId: '',
    showDialog: false,
    pageNum: 1,
    pageSize: 5,
    status: 'PENDING',
    rowCount: 0,
    appointmentList: []
  },
  statusChange: function(e){
    this.setData({status:e.currentTarget.dataset.lockerid});
    this.setData({appointmentList:[]});
    this.getAppointmentList();
  },
  reasonBlur: function(e){
    this.setData({reason:e.detail.value});
  },
  handleApply: function(e){
    var auditStatus = e.currentTarget.dataset.lockerid;
    var paramData = null;
    if(auditStatus=='FINISHED'){
      paramData = {
        "id": this.data.item.id,
        "reason": this.data.reason,
        "status":auditStatus
      };
    }else{
      paramData = {
        "id": this.data.item.id,
        "reason": this.data.reason,
        "auditStatus":auditStatus
      };
      if(auditStatus=='CANCLE'){
        paramData.status = 'FINISHED';
      }
    }
    console.log(paramData);
    var that = this;
    wx.request({
      url: app.nativeUrlPre+"appointment/updateStatus",
      method: 'post',
      data: paramData,
      success: function(res){
        that.setData({appointmentList:[]});
        that.getAppointmentList();
      },
      fail: function(res){
        wx.showToast({
          title: res.data,
          icon: 'none',
          duration: 2000//持续的时间
        })
        that.setData({showDialog:false});
      },
      complete: function(res){
        that.setData({reason:''});
      }
    })
    this.setData({showDialog:false});
  },
  showAndroidDialog1:function(e){
    this.setData({showDialog:true});
    this.setData({item:e.currentTarget.dataset.lockerid});
  },

  onLoad: function(e){
    this.setData({openId:app.openId});
    this.getAppointmentList();
  },

  onReachBottom: function(e){
    if(this.data.appointmentList.length==this.data.rowCount){
      return false;
    }
    this.setData({pageNum: this.data.pageNum+1});
    this.getAppointmentList();
  },

  getAppointmentList: function(e){
    var that = this;
    var param = "pageNum="+this.data.pageNum+"&pageSize="+this.data.pageSize+"&openId="+app.openId+"&status="+this.data.status;
    wx.request({
      url: app.nativeUrlPre+"appointment/listApply?"+param,
      success: function(res){
        that.setData({rowCount: res.data.total});
        that.setData({appointmentList: that.data.appointmentList.concat(res.data.list)});
      }
    })
  }
});