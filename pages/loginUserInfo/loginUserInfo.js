// pages/loginUerInfo/loginUerInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bandleChange(e){
    console.log(e.detail.value,"温");
    // this.setData({
    //   identity:e.detail.value
    // })
  },
  bindsubmit(e){
    var names = e.detail.value.Name;
    var birthdays = e.detail.value.Birthday
    var sexs = e.detail.value.Sex;
    var classs = e.detail.value.Class;
    var studentIds= e.detail.value.StudentId;
    var numbers = e.detail.value.Number;
    if(names==""||birthdays==""||sexs==""||classs==""||studentIds==""){
      wx.showModal({
        title: '提示',
        content: '请输入完整信息！',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else{
      wx.navigateTo({
        url: '/pages/authorize/authorize',
      })
    }
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

  }
})