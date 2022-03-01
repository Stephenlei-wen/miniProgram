// pages/authorize/authorize.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    identity:'0',
    verifyed:0,
    identityCode:"666666"
  },
  bandleChange(e){
    console.log(e.detail.value,"温");
    this.setData({
      identity:e.detail.value
    })
  },
  onLogin(){
    if(this.data.identity === "0"){
      wx.switchTab({
        url: '/pages/index/index',
      })
    }else{
      if(this.data.identity === "1"&&this.data.verifyed === 1){
        wx.switchTab({
          url: '/pages/index/index',
        })
      }else{
        console.log("登录错误");
      }
    }
  },
  bindsubmit(e){
    console.log(e.detail.value);
  },
  bindblur(e){
    if(e.detail.value===this.data.identityCode){
      this.setData({
        verifyed:1
      })
      // wx.showModal({
      //   content: '请登录'
      // })
    } else{
      wx.showModal({
        title: '提示',
        content: '请输入正确验证码！',
        success: function (res) {
          if (res.confirm) {
            console.log(e);
          }
        }
      })
    }
    console.log(e.detail.value);
    // this.setData({
    // })
    console.log("this.identity",this.data.identity);
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