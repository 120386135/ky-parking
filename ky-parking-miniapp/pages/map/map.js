Page({
      data: {
        scale: 17,
        latitude: "26.527530",
        longitude: "107.892078",
        markers: [{
            id: 1,
            latitude: 26.527252,
            longitude: 107.894073,
            width: 30,
            height: 30,
            iconPath: "../../images/map.png",
            callout: {
              content: "实验楼地下停车区",
              padding: 8,
              display: 'ALWAYS',
              textAlign: 'center'
            },
          },
          {
            id: 2,
            latitude: 26.526743,
            longitude: 107.894078,
            width: 30,
            height: 30,
            iconPath: "../../images/map.png",
            callout: {
              content: "1号停车区",
              padding: 8,
              display: 'ALWAYS',
              textAlign: 'center'
            }

          },
          {
            id: 2,
            latitude: 26.528860,
            longitude: 107.890661,
            width: 30,
            height: 30,
            iconPath: "../../images/map.png",
            callout: {
              content: "体育馆停车区",
              padding: 8,
              display: 'ALWAYS',
              textAlign: 'center'
            }
          }
        ],

      },

      onLoad: function() {
        var _this = this;

        console.log("----" + this.data.markers);
        wx.getSystemInfo({
          success: function(res) {
            //设置map高度，根据当前设备宽高满屏显示
            _this.setData({
              view: {
                Height: res.windowHeight
              }

            })



          }
        })

      },

      showDialogBtn: function(e) {
          var i = e.markerId;
          console.log("uId" + i)
          wx.request({
            url: url,
            data: {
              id: i,
            },
            success: function(res) {
              console.log(res);
              that.setData({
                post: res.data.data,
                showModal: true,
              });
            }
          })
            },
            hideModal: function() { //隐藏模态对话框
              this.setData({
               showModal: false
              });
            },
            /**
  
            * 生命周期函数--监听页面加载
  
            */
            showmodle: function(e) {
              this.setData({

                showModal: false

              });

            },
          })