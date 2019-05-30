const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // dates: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  bindDateChange: function(e) {
    console.log(e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  formSubmit: function(e) {
    console.log(e.detail.value.name, e.detail.value.tel, e.detail.value.date, e.detail.value.car_no, e.detail.value.remark);
    wx.request({
      url: app.host.url + '/appointment/',
      data: {
        'open_id': open_id,
        'name': e.detail.value.name,
        'tel': e.detail.value.tel,
        'parking_time': e.detail.value.date,
        'car_no': e.detail.value.car_no,
        'remark': e.detail.value.remark
      },
      method: 'GET',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log(e.detail.value.name);
        var code = res.data.code;
        if(code == 0){
          wx.redirectTo({
            url: '../manage/manage',
          })
        } else{
          wx.showToast({
            title: '预约成功',
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