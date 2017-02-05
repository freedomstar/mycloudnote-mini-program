//logs.js
var app = getApp()
Page({
  data: {
    title:'',
    context:'',
    noteID:'',
  }
  ,
  save: function(e)
  {
    app.getUserInfo(function(userInfo){
      wx.request({
      url: 'http://139.199.74.155/myCloudNote/addNote.php',
      data: {
        userid:userInfo.nickName,
        title:e.detail.value.title,
        context:e.detail.value.context
      },
      header: {'content-type':'application/x-www-form-urlencoded'},
      method: 'POST', 
      success: function(res){
        wx.redirectTo({
          url:'../list/list'
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  })
  },
  onLoad: function(options)
  {
     
  }
})
