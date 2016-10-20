var app = getApp();

Page({
  data: {
    "list":[],
    "loadingHidden":false,
    "refreshHidden":true,
    "loadingMoreHidden":false,
    "scrollTop":true,
    "currentPage":0,
    "swiper": {
      "indicatorDots": false,
      "autoplay": false,
      "interval": 0,
      "duration": 1000
    },

    "list2":[],
    "loadingHidden2":false,
    "refreshHidden2":true,
    "loadingMoreHidden2":false,
    "scrollTop2":true,
    "isNew":true
  },
  onLoad: function () {
    this.renderFriends();
    this.setData({
    		isNew:true
    });
  },
  //渲染数据
  renderFriends:function(){
    var self = this;
    wx.request({
      url:"http://localhost:8090/mock/list.json",
      header:{
        'Content-Type': 'application/json'
      },
      success: function(res) {
        self.setData({
          list:res.data,
          loadingHidden:true

        });
      }
    });
  },
  //下拉刷新
  freshList:function(){
  	
    var that = this;
    this.setData({
      refreshHidden: false,
      scrollTop:false
    });
    setTimeout(function(){
    		wx.request({
	      url: 'http://localhost:8090/mock/reflesh.json',
	      success: function (res) {
	        that.setData({
	          list: res.data.concat(that.data.list),
	          refreshHidden: true,
	          scrollTop:true
	        });
	      }
	    });
    },1000);
    
  },
  //上拉加载
  loadList:function(){
    var that = this;
    this.setData({
      loadingMoreHidden:false
    });
    wx.request({
      url: 'http://localhost:8090/mock/loadMore.json',
      success: function (res) {

        that.setData({
          list: that.data.list.concat(res.data),
          loadingMoreHidden: true
        });
      }
    });
  },
  //首页左右滑动切换
  swiperChange:function(event){

    this.setData({
      currentPage:event.detail.current
    });
    this.renderFriends2(event.detail.current);
  },
  //渲染数据
  renderFriends2:function(currentPage){
    if(currentPage){
      wx.setNavigationBarTitle({
        title:"欢喜"
      });
    }else{
      wx.setNavigationBarTitle({
        title:"好友"
      });
    }
    var self = this;
    setTimeout(function(){
		if(self.data.isNew){
			self.setData({
				isNew:false
			});
			wx.request({
			  url:"http://localhost:8090/mock/list2.json",
			  header:{
			    'Content-Type': 'application/json'
			  },
			  success: function(res) {
			    self.setData({
			      list2:res.data,
			      loadingHidden2:true
			    });
			  }
			});
		}	
    },1000)
    
  },
  //欢喜页面，下拉刷新
  freshList2:function(){
  	console.log("fsfs");
    var that = this;
    this.setData({
      refreshHidden2: false,
      scrollTop2:false
    });
    setTimeout(function(){
	    	wx.request({
	      url: 'http://localhost:8090/mock/reflesh2.json',
	      success: function (res) {
	        that.setData({
	          list2: res.data.concat(that.data.list2),
	          refreshHidden2: true,
	          scrollTop2: true
	        });
	      }
	    });
    },1000)
    
  },
  //加载更多
  loadList2:function(){
    var that = this;
    this.setData({
      loadingMoreHidden2:false
    });
    wx.request({
      url: 'http://localhost:8090/mock/loadMore2.json',
      success: function (res) {

        that.setData({
          list2: that.data.list2.concat(res.data),
          loadingMoreHidden2: true
        });
      }
    });
  }


})
