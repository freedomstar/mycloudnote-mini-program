//logs.js

Page({
  data: {
    title:'',
    context:'',
    noteID:'',
  }
  ,
  deleteNote:function (e)
  {
    wx.request({
      url: 'http://139.199.74.155/myCloudNote/deleteNote.php',
      data: {
        noteID:e.detail.value.noteID,
      },
      method: 'POST', 
      header: {'content-type':'application/x-www-form-urlencoded'},
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
  },
  save: function(e)
  {
    wx.request({
      url: 'http://139.199.74.155/myCloudNote/updateNote.php',
      data: {
        noteID:e.detail.value.noteID,
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
  },
  onLoad: function(options)
  {
     var that = this
     console.log(options.noteid);
    wx.request({
        url: 'http://139.199.74.155/myCloudNote/getNote.php',
        data: {noteID:options.noteid},
        method: 'POST', 
        header: {'content-type':'application/x-www-form-urlencoded'},
        success: function(res){
          that.setData({
             title:res.data.title,
             context:res.data.context,
             noteID:options.noteid
          })   
        },
        fail: function() {
          
        },
        complete: function() {
          
        }
      })
  }
})
