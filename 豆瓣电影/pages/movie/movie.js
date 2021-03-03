Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    winHeight:0,
    winWidth:0,
    indicatorDots:false,
    autoplay:true,
    interval:5000,
    duration:1000,
    imgUrls:[
        "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rihu44gdukg39f3b25/6371c3d0-3de4-11eb-bf0a-894cbc80c40a.jpg",
        "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rihu44gdukg39f3b25/62b3f210-3de4-11eb-bf0a-894cbc80c40a.jpg",
        "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rihu44gdukg39f3b25/64416fe0-3de4-11eb-bf0a-894cbc80c40a.jpg",
        "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rihu44gdukg39f3b25/65081b40-3de4-11eb-bf0a-894cbc80c40a.jpg"
    ]
  },
  switchNav:function(e){
    var id=e.currentTarget.id;
    this.setData({currentTab:id})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
  var page=this;
  wx.getSystemInfo({
    success: function(res){
      page.setData({winWidth:res.windowWidth});
      page.setData({winHeight:res.windowHeight});
    }
  })
  this.loadMovies();
  },
  loadMovies:function(){
      var page=this;
      wx.request({
        url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=0&count=6',
        method:'GET',
        header:{
          "Content-Type":"json"
        },
        success:function(res){
          console.log(res)
          var movieList=res.data.subject_collection_items;
          var size=movieList.length;
          var len =parseInt(size/3);
          page.setData({movies:movieList});
          // page.setData({winHeight:(len+1)*230})
          //猫眼接口数据
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  loadDetail: function (e) {
    var id=e.currentTarget.id;
    wx.navigateTo({
      url: '../movieDetail/movieDetail?id='+id,
    })
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
