

Page({
  data: {
    user:{},
    stable:{
	    editIcon:"/images/mine/pan.png",
	    edit:"编辑资料",
	    setSign:"点此设置签名",
	    guanzhu:"关注",
	    fensi:"粉丝",
	    innerItem:["话题","帖子","赞过的"],
	    xialaImg:"/images/mine/xiala.png"
    },
    tab:{
      tabBg:"background5",
      tabBg2:"",
      tabBg3:"",
      tabTextColor:"textColor6",
      tabTextColor2:"textColor5",
      tabTextColor3:"textColor5"
    }

  },
  onLoad:function(){
  	this.loadUserInfo();
  },
  loadUserInfo:function(){
    var self = this;
    wx.request({
      url:"http://localhost:8090/mock/mine/userInfo.json",
      header:{
        'Content-Type': 'application/json'
      },
      success: function(res) {

        self.setData({
        		user:res.data[0]
        });
      }
    });
  },
  changeTab:function(event){
    switch(event.target.dataset.name){
      case "one":
        this.setData({
          tab:{
            tabBg:"background5",
            tabBg2:"",
            tabBg3:"",
            tabTextColor:"textColor6",
            tabTextColor2:"textColor5",
            tabTextColor3:"textColor5"
          }
        });

        break;
      case "two":
        this.setData({
          tab:{
            tabBg:"",
            tabBg2:"background5",
            tabBg3:"",
            tabTextColor:"textColor5",
            tabTextColor2:"textColor6",
            tabTextColor3:"textColor5"
          }
        });
        break;
      case "three":
        this.setData({
          tab:{
            tabBg:"",
            tabBg2:"",
            tabBg3:"background5",
            tabTextColor:"textColor5",
            tabTextColor2:"textColor5",
            tabTextColor3:"textColor6"
          }
        });
        break;
    }
  }
})
