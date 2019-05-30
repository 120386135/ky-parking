//index.js
//获取应用实例
const App = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    routers: [{
        name: '预约停车',
        url: '../appointment/appointment',
        icon: '../../images/parking.png',
        id: "001"
      }, {
        name: '预约管理',
        url: '../manage/manage',
        icon: '../../images/manage.png',
        id: "001"
      },
      {
        name: '地图导航',
        url: '../map/map',
        icon: '../../images/nav.png',
        id: "002"
      }
    ]
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function() {
    var _this=this;
    if (App.globalData.userInfo) {
      this.setData({
        userInfo: App.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      App.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    } 
    wx.request({
      url: App.host.url + "",
      method: "GET",
      data: {
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        _this.setData({
          img:res.data.img,
          post: res.data.data
        })
      }
    })
  },
  about:function(e){
    wx.navigateTo({
      url: '../about/about',
    })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    var that = this;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})