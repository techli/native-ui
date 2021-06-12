// pages/priceList/priceList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //左边列表的数据设置
    num:0,
    content:"内容",
    message:[
      {
        id: '0',text: "废金属"
      },{
        id: '1',text: '废电子'
      },{
        id: '2',text: '废塑料'
      },{
        id: '3',text: '废电池'
      },{
        id: '4',text: '废纸'
      }
    ],
    //右边数据的设置
    content1:[
      {
       mySrc:'../../image/洗衣机.png',
       myLabel:'废金属1',
       myRange:'10~20'
      },{
        mySrc:'../../image/洗衣机.png',
        myLabel:'废金属2',
        myRange:'10~20'
      },
      {
        mySrc:'../../image/洗衣机.png',
        myLabel:'废金属2',
        myRange:'10~20'
      }
    ]
 },
 clickList:function(e){
    //console.log(e)
    let num = e.target.id;
    //console.log(num)
    let content = this.data.message[num].text;
    //console.log(content.text)
     this.setData({
         num:num,
         content:content
     })
     //console.log(this) 
 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})