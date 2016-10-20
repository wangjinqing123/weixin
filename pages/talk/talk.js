//index.js
//获取应用实例
var app = getApp()

Page({
  data: {

    imgUrls: [],
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 1000,
    currentIndex:0,

    item:[],

    talkRefreshHidden:true,
    talkLoadMoreHidden:true,
    talkScrollTop:true
  },
  onLoad: function () {
    this.render();
  },
  //数据渲染
  render:function(){
  	this.getBannerData();
  	this.getListData();

  },
  //列表数据
  getListData:function(){
  	wx.request({
      url:"http://localhost:8090/mock/talk/talkList.json",
      header:{
        "Content-Type":'application/json'
      },
      success:function(res){
        this.setData({
        	  item:res.data
        });
      }.bind(this)
    });
  },

  //轮播图
  getBannerData:function(){
  	wx.request({
      url:"http://localhost:8090/mock/talk/banner.json",
      header:{
        "Content-Type":'application/json'
      },
      success:function(res){
        this.setData({
          imgUrls:res.data
        });

      }.bind(this)
    });
  },

  //轮播图切换
  swiperSlide:function(event){

	var self = this;
  	if(self.data.imgUrls.length - 1 == event.detail.current){

  		self.setData({
  			interval:3000,
			     duration:0
  		});
  		setTimeout(function(){
	  		self.setData({
				currentIndex:0,
				autoplay:false
			});
	  	},1000);
  	}else{
  		self.setData({
			currentIndex:event.detail.current
		});
  	}
  	if(self.data.currentIndex==0){
  		self.setData({
  			duration:1000,
  			autoplay:true,
  			interval:4000
  		});
  	}
  },

  //下拉刷新
  talkFreshList:function(){
//	console.log("fsdfsf");
    var that = this;
    that.setData({
      talkRefreshHidden: false,
      talkScrollTop:false
    });

    setTimeout(function(){
    		that.setData({
    			talkRefreshHidden:true,
    			talkScrollTop:true
    		})
    },1000);

  },
  //上拉加载
  talkLoadList:function(){
//	console.log("sdfsafa");
    var that = this;
    that.setData({
      talkLoadMoreHidden:false
    });
    setTimeout(function(){
    		that.setData({
    			talkLoadMoreHidden:true
    		})
    },1000);
  }
})
