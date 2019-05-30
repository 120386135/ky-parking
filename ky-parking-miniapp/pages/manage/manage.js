const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemData: [{
        id: '001',
      parking_no:'实验楼地下停车区',
        car_no: '贵·A88888',       
        date: '2019-5-28',
      },
      {
        id: '001',
        parking_no: '4号停车场',
        car_no: '贵·JPC873',     
        date: '2019-5-30',
      },
      {
        id: '001',
        parking_no: '2号停车场',
        car_no: '贵·JPC873',
        date: '2019-6-02',
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
    var open_id = wx.getStorageSync('open_id');
    wx.request({
      url: App.host.url + "appointment/",
      method: "GET",
      data: {
        'open_id': open_id
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        this.setData({
          post: res.data.data
        })
      }
    })

  },
  updata:function(e){
    var id = e.target.dataset.id;
    console.log("id == " + id);
    wx.navigateTo({
      url: '../updata/updata?id=' + id,
    })
  },
  onDel: function (e) {//从绑定的控件列的data-id传过来
    var id = e.target.dataset.id;
    console.log("user_id" + id);
    var that = this;
    wx.showModal({
      title: "警告",
      content: "是否取消该预约信息！",
      showCancel: true,
      cancelText: '否',
      confirmText: '是',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: app.host.url + "cancelParking/", //再次获取后台数据传输id,感觉这个方法不完美，后期再改进
            method: "GET",
            data: {
              id: id,
            },
            headers: {
              'Content-Type': 'application/json'
            },
            success: function (res) {
              var newList = that.data.post;
              console.log("liebiao" + newList);
              for (var i = 0; i < newList.length; i++) {
                if (newList[i].id == id) {
                  newList.splice(i, 1);
                }
              }
              that.setData({  //主动刷新
                post: newList
              })
            },
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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