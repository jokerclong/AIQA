// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    wx.getSystemInfo({
      success: res => {
        this.globalData.bottomLift = res.screenHeight - res.safeArea.bottom;
      },
      fail(err) {
        console.log(err);
      }
    })
    wx.getSystemInfoAsync({
      success: res=>{
        this.globalData.statusBarHeight = res.statusBarHeight;
      },
      fail(err) {
        console.log(err);
      }
    })


    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    bottomLift: 0,
    statusBarHeight:0
  }
})
