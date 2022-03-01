//Page Object
Page({
  data: {
    // swiperList:[{swiperId:1,content:11},{},{}]
  },
  onpaper(){
    wx.navigateTo({
      url: '/pages/questionnaire/questionnaire',
    })
  },
  onscore(){
    wx.navigateTo({
      url: '/pages/studyScore/studyScore',
    })
  },
  //options(Object)
  onLoad: function(options){
    //发送异步请求
    var reqTask = wx.request({
      url: '',//请求的地址
      //data: {},//给后台发的数据 这里不用加
      //header: {'content-type':'application/json'},//请求头 暂时不用加有默认值
      method: 'GET',
      dataType: 'json',//默认值是json 也不要
      responseType: 'text',//返回数据的文本类型
      success: (result)=>{
        console.log("年后");
        //成功后赋值的代码
        this.setData({
          swiperList:result.data.message
        })
      },
      fail: ()=>{},
      complete: ()=>{}//成功和失败都会调用的函数
    });
  }
});