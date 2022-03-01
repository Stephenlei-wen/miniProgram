// components/searchBox/searchBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    search(e){
      let searchValue = e.detail.value
      //传值给父组件
      this.triggerEvent("search",  {
        value: searchValue
      })
      console.log(e.detail.value,"woshini");
    }
  }
})
