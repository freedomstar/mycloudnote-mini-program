//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function(e) {
    var id=e.currentTarget.id;
    wx.navigateTo({
      url: '../gg/gg'
    })
  },
  onLoad: function () {
    var that = this
    
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      wx.request({
        url: 'http://139.199.74.155/myCloudNote/findUser.php',
        data: {userid:userInfo.nickName},
        header: {'content-type':'application/x-www-form-urlencoded'},
        method: 'POST', 
        success: function(res){
          console.log(res);
        },
        fail: function() {
          
        },
        complete: function() {
          
        }
      })
    })
  }
})
