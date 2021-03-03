// pages/movieDetail/movieDetail.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    winWidth:0,
    winHeight:0,
    movie:{},
    directors:[],
    casts:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var page = this;

    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/movie/'+e.id,
      header:{
        "Content-Type":"json"
      },
      success:function(res){
        console.log(res);
        var movie = res.data;
        page.setData({movie:movie});
        page.setData({directors:movie.directors});
        page.setData({casts:movie.casts});
        wx.setNavigationBarTitle({
          title: movie.title
        })
      }
    });
    wx.getSystemInfo({
      success: function(res){
        console.log(res);
        page.setData({winWidth:res.windowWidth});
        page.setData({winHeight:res.windowHeight});
      },
    })
  },
  switchNav:function(e){
    var id = e.currentTarget.id;
    this.setData({currentTab:id});
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