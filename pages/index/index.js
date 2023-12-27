// index.js
const app = getApp()
Component({
  data: {
    history: [
      {
        "role": "user",
        "content": "您好？",
      },
      {
        "role": "assistant",
        "content": "您好，这里是AI智能知识库问答系统，请问你需要问点什么呢？",
      },
    ],
    state:[0,0],
    query: "",
    SHeight:0,
    Sbottom:0,
    animationData:null,
    scrollBottom:"",
    bottomLift: app.globalData.bottomLift+48,
    statusBarHeight:app.globalData.statusBarHeight,
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  methods: {
    sendQuestion() {
      var history1 = [].concat(this.data.history)
      var history0 = [].concat(this.data.history)
      var query = this.data.query
      let len = history0.length
      history0.push({
        "role": "user",
        "content": this.data.query,
      })
      let state = this.data.state
      state.push(1)
      console.log(this.data)
      this.setData({
        history:history0,
        state:state,
        query:"",
      })
      console.log(query);
    wx.request({
        url: "http://47.108.183.245:8080/api/getAnswer",
        // url: "http://192.168.3.85:8080/api/getAnswer",
        method: 'Post',
        data: {
          query:query,
          history:history1
        },
        header: {
          'Content-Type': 'application/json'
        },
        success: res =>{
          // 请求成功，处理返回的数据
          console.log(res.data);
          //处理成功返回数据，然后将数据放到history中
          if(res.data.code==200){
            var rdata = JSON.parse(res.data.data)
            history0.push({
              "role": "assistant",
              "content": rdata.result,
            })
            state[len]=0
            state.push(0)
            this.setData({
              history:history0,
              state:state,
              scrollBottom:"scrollBottom"
            })
          }
        },
        fail: function (err) {
          // 请求失败，处理错误信息
          console.error(err);
        }
      });

    },
    inputBindFocus(e) {

      this.setData({
         SHeight:e.detail.height,
         bottomLift:0,
        scrollBottom:"scrollBottom"
      })
    },
    inputBindBlur() {
      this.setData({
        SHeight:0,
        bottomLift:app.globalData.bottomLift+48,
      })
    },
    noneFunction(e) {
      var inputValue = e.detail.value
      this.setData({
          query:inputValue,
    })
  }
  }
})
