// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "初始化数据",
    userInfo:{} //用户的基本信息
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log("onLoad()")
    // //修改 msg 的状态数据，语法 this.setData
    // console.log(this.data.msg)
    // setTimeout(() => {
    //   this.setData({
    //     msg: '修改之后的数据'
    //   })
    //   console.log(this.data.msg)
    // }, 2000)

    // console.log(this.data.msg)
    //授权以后获取用户信息
    wx.getUserInfo({
      success:(res) => {
        console.log(res);
        this.setData({
          userInfo:res.userInfo
        })
      },
      fail:(err)=>{
        console.log(err);
      }
    })
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

  },
  /**
   * 跳转至 logs 的页面方法
   */
  toLogs() {
    wx.redirectTo({
      url: '/pages/logs/logs',
    })
  },
  handleParent() {
    console.log("Parent")
  },
  handleChild() {
    console.log("Child")
  },

  /**
   * 获取用户胡信息
   */
  handleGetUserInfo(res){
    console.log(res)
    if (res.detail.userInfo) {
      //修改 userInfo 的状态数据
      this.setData({userInfo:res.detail.userInfo})
    }
  },
})
