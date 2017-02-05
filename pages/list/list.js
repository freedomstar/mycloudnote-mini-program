//logs.js
var app = getApp()
Page({
  data: 
  {
    array:{}
  },
  listTouch: function (e) 
  {
    var id=e.currentTarget.id;

    wx.navigateTo({
      url: '../gg/gg',
    })
  }
  ,
  onLoad: function () {
    var that = this
    app.getUserInfo(function(userInfo){
      wx.request({
        url: 'http://139.199.74.155/myCloudNote/getNoteList.php',
        data: {userid:userInfo.nickName},
        method: 'POST', 
        header: {'content-type':'application/x-www-form-urlencoded'},
        success: function(res){
          that.setData({
             array:res.data
          })   
          console.log(res.data);
        },
        fail: function() {
          
        },
        complete: function() {
          
        }
      })
    })
  }
})
