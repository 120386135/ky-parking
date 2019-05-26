const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemData: [{
        id: '001',
      parking_no:'1号停车场',
        car_no: '贵·JPC873',       
        date: '2019-5-17',
      },
      {
        id: '001',
        parking_no: '4号停车场',
        car_no: '贵·JPC873',     
        date: '2019-5-17',
      },
      {
        id: '001',
        parking_no: '2号停车场',
        car_no: '贵·JPC873',
        date: '2019-5-17',
      },
    ]
  },
  touchS: function(e) { // touchstart
    let startX = App.Touches.getClientX(e)
    startX && this.setData({
      startX
    })
    console.log("aaa", startX)
  },
  touchM: function(e) { // touchmove
    let itemData = App.Touches.touchM(e, this.data.itemData, this.data.startX)
    itemData && this.setData({
      itemData
    })
  },
  touchE: function(e) { // touchend
    const width = 300 // 定义操作列表宽度
    let itemData = App.Touches.touchE(e, this.data.itemData, this.data.startX, width)
    itemData && this.setData({
      itemData
    })
  },
  itemDelete: function(e) { // itemDelete
    let itemData = App.Touches.deleteItem(e, this.data.itemData)
    itemData && this.setData({
      itemData
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  updata:function(e){
    // var id = e.target.dataset.id;
    // console.log("id == " + id);
    // wx.request({
    //   // url: '',
    //   data: {
    //     id: id
    //   },
    //   header: 'application/json',
    //   method: 'GET',
    //   success: function (res) {
    //     console.log(res);
        wx.navigateTo({
          url: '../updata/updata',
        })
      // },
      // fail: function (res) { },
      // complete: function (res) { },
    // })
  },
  onDel:function(e){
    var id = e.target.dataset.id;
    console.log("id == "+id);
    wx.request({
      // url: '',
      data: {
        id:id
      },
      header: 'application/json',
      method: 'GET',
      success: function(res) {
        console.log(res);
      },
      fail: function(res) {},
      complete: function(res) {},
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