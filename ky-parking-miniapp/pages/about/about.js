// pages/about/about.js
const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  formSubmit: function(e) {
    console.log(e.detail.value.contact,e.detail.value.email);
    var open_id = wx.getStorageSync('opne_id')
    wx.request({
      url: App.host.url + '/xxx/',
      data: {
        'open_id': open_id,
        'contant': e.detail.value.contant,
        'email': e.detail.value.email
      },
      method: 'GET',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        var code = res.data.code;
        if (code == 0) {
          wx.showToast({
            title: '提交失败',
            icon: 'loading',
            duration: 3000
          })
        } else {
          wx.showToast({
            title: '提交成功',
            icon: 'loading',
            duration: 3000
          })
        }

      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})