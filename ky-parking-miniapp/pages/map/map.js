Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      id: 0,
      longitude: 107.8921580308,
      latitude: 26.5248999648,
      title:"图书馆",
      iconPath: '../../images/location.png',
      width: 32,
      height: 32
    }],
    polyline: [{
      points: [{
        latitude: 26.5248999648,
        longitude: 107.8921580308

      }, {
          latitude: 26.5248999648,
          longitude: 107.8921580308
      }],
      color: "#ff6600",
      width: 2,
      dottedLine: false,
      arrowLine: true,
      borderColor: "#000",
      borderWidth: 5
    }],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var mar = this.data.markers;
    that.setData({
      markers: mar
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
    
  }
})