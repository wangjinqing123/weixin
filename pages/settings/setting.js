
Page({
  data:{
    settingData:[
      {
        list:["消息设置","夜间模式","柴扉文章字号","清除缓存","隐私设置"],
        currentIndex:1
      },
      {
        list:["聊天背景","聊天气泡"]
      },
      {
        list:["收藏夹"]
      },
      {
        list:["常见问题","意见反馈"]
      },
      {
        list:["为火柴盒评分","当前版本","关于火柴盒"]
      }
    ]
  },
  onLoad:function(){

  },
  switchChange:function(event){
    //true : 黑夜
    if(event.detail.value){

    }else{//白天
      
    }
  }
})
