// components/select/select.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    options: {
      type: Array,
      value: []
    },
    defaultOption: {
      type: Object,
      value: {
        id: '0',
        name: '全部学校'
      }
    },
    key: {
      type: String,
      value: 'id'
    },
    text: {
      type: String,
      value: 'name'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // result: [{id:'1',name:'河北大学'},{id:'2',name:'保定大学'}],
    isShow: false,
    current: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    optionTap(e) {
      let dataset = e.target.dataset
      console.log(dataset,"是什么");
      this.setData({
        current: dataset,
        isShow: false
      });
      // 调用父组件方法，并传参
      this.triggerEvent("change", { ...dataset })
    },
    openClose() {
      this.setData({
        isShow: !this.data.isShow
      })
    },

    // 此方法供父组件调用
    close() {
      this.setData({
        isShow: false
      })
    }
  },
  lifetimes: {
    attached() {
      // 属性名称转换, 如果不是 { id: '', name:'' } 格式，则转为 { id: '', name:'' } 格式
      // let result = []
      // if (this.data.key !== 'id' || this.data.text !== 'name') {
      //   for (let item of this.data.options) {
      //     let { [this.data.key]: id, [this.data.text]: name } = item
      //     result.push({ id, name })
      //   }
      // }
      this.setData({
        current: Object.assign({}, this.data.defaultOption),
        // result: result
      })
      console.log(this.properties.options,"options");
      // console.log(this.data.result,"result");
    }
  }
})
