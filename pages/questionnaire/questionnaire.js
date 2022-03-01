// pages/questionnaire/questionnaire.js
// wx.cloud.init()
// const db = wx.cloud.database()
const qnaire = require("./sas.js")  //导入题库
var ans = new Array(90)  //答案数组初始化，会在onload函数中赋初值""
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qnaire: qnaire.qnaire,
    answer: ans,
    id: 0,
    idx:0,
    //题卡
    questionList:[
      { 'num': '1' },
      { 'num': '2' },
      { 'num': '3' },
      { 'num': '4' },
      { 'num': '5' },
      { 'num': '6' },
      { 'num': '7' },
      { 'num': '8' },
      { 'num': '9' },
      { 'num': '10'},
      { 'num': '11' },
      { 'num': '12' },
      { 'num': '13' },
      { 'num': '14' },
      { 'num': '15' },
      { 'num': '16' },
      { 'num': '17' },
      { 'num': '18' },
      { 'num': '19' },
      { 'num': '20'},
      { 'num': '21' },
      { 'num': '22' },
      { 'num': '23' },
      { 'num': '24' },
      { 'num': '25' },
      { 'num': '26' },
      { 'num': '27' },
      { 'num': '28' },
      { 'num': '29' },
      { 'num': '30'},
      { 'num': '31' },
      { 'num': '32' },
      { 'num': '33' },
      { 'num': '34' },
      { 'num': '35' },
      { 'num': '36' },
      { 'num': '37' },
      { 'num': '38' },
      { 'num': '39' },
      { 'num': '40'},
      { 'num': '41' },
      { 'num': '42' },
      { 'num': '43' },
      { 'num': '44' },
      { 'num': '45' },
      { 'num': '46' },
      { 'num': '47' },
      { 'num': '48' },
      { 'num': '49' },
      { 'num': '50'},
      { 'num': '51' },
      { 'num': '52' },
      { 'num': '53' },
      { 'num': '54' },
      { 'num': '55' },
      { 'num': '56' },
      { 'num': '57' },
      { 'num': '58' },
      { 'num': '59' },
      { 'num': '60'},
      { 'num': '61' },
      { 'num': '62' },
      { 'num': '63' },
      { 'num': '64' },
      { 'num': '65' },
      { 'num': '66' },
      { 'num': '67' },
      { 'num': '68' },
      { 'num': '69' },
      { 'num': '70'},
      { 'num': '71' },
      { 'num': '72' },
      { 'num': '73' },
      { 'num': '74' },
      { 'num': '75' },
      { 'num': '76' },
      { 'num': '77' },
      { 'num': '78' },
      { 'num': '79' },
      { 'num': '80'},
      { 'num': '81' },
      { 'num': '82' },
      { 'num': '83' },
      { 'num': '84' },
      { 'num': '85' },
      { 'num': '86' },
      { 'num': '87' },
      { 'num': '88' },
      { 'num': '89' },
      { 'num': '90' }
    ]
  },
goIndex: function(e) {
  let index = e.target.dataset.index
  this.setData({
    idx: index,
    id:index
  })

},
radioChange: function (e) {
  // console.log(e.detail.value,"所选的值")
  // console.log(e.target.dataset.questionid,"id号");
  var a = e.detail.value;
  var id = e.target.dataset.questionid;
  ans[id] = a;
  this.setData({
    answer: ans,
  })
  console.log(this.data.answer,"最终的答案");
  var sdf = this.data.answer
  // var WanSalary2= sdf.filter(function(item){
  //   return item.id>=10000;
  //   })
  console.log(sdfsd,"是错");
},
nextq: function () {
  if (this.data.id <89) {
    this.setData({
      id: this.data.id + 1,
      idx: this.data.id + 1
    })
  }
},
lastq: function (e) {
  if (this.data.id != 0) {
    this.setData({
      id: this.data.id - 1,
      idx: this.data.id - 1
    })
  }
},
// submit: function (e) {
//   console.log(e.detail.value);
//   var a = e.detail.value.answer;
//   var id = this.data.id;
//   ans[id] = a;
//   this.setData({
//     answer: ans,
//   })
//   console.log(this.data.answer,"选中的答案");
// },
//判断答题完成情况
formSubmit: function() {
  var finish;
  var i = 0;
  var _this = this;
  while (i < 5) {
    if (ans[i] === undefined) {
      finish = 'false';
      console.log("第"+ (i+1) +"题答案为空");
      break;
    } else {
      finish = 'true';
      console.log("nidi");
    }
    i++;
  }
  if (finish == 'false') {
    wx.showModal({
      title: '无法提交',
      content: '您还有部分题目未完成，请检查后重新提交',
      showCancel: false,
      confirmColor: '#fcbe39',
      confirmText: "好的",
      success(res) {
        _this.setData({
          id: i,
          idx:i
        })
      }
    })
  } else {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading({
        success(res) {
          // _this.answer2db();
          _this.countPoints();
          // wx.navigateBack({
          //   delta: 1
          // })
        }
      })
    }, 1000)
  }
},
//核算分数
countPoints:function(){
  console.log(this.data.answer,"最终的大啊 ");
  var answerList = this.data.answer;
  console.log(typeof(answerList),'值水浇地附件四');
  // var quTiHuaList = new Array(3)
   var quTiHuaList = answerList[0,1,5]
  console.log(typeof(quTiHuaList));

  //1躯体化成绩
  var quTiHua = 1;
  console.log(quTiHuaList,"是多少");
  //2强迫症
  var qiangPoZheng = 1;
  //3人际关系敏感
  var renJiGuanXi = 1;
  //4抑郁
  var yiYu = 1;
  //5焦虑
  var jiaoLv = 1;
  //6敌对
  var diDui = 1;
  //7恐怖
  var kongBu = 1;
  //8偏执
  var pianZhi = 1;
  //9精神病性
  var jingShenBing = 1;

},
//将用户完成的答案数组上传至云数据库
answer2db: function() {
  db.collection('SAS').add({
    data: {
      answer: this.data.answer
    },
    success(res) {
      console.log(res._id);
    },
    fail(res) {
      wx.showToast({
        icon: 'none',
        title: '新增记录失败'
      })
      console.error('[数据库] [新增记录] 失败：', err)
    }
  })
}
})

