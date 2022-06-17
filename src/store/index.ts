import {createStore} from "vuex"
import {
  ElMessage
} from 'element-plus'


const store = createStore({
  state:{
    // 存储账号和密码的数组
    ku:[
      {username:"admin",password:"admin"},
      {username:"admin2",password:"admin2"}
    ],
    // 信息消息
    messageLength:[
      "hello,world!",
      "hello,world!!",
      "hello,world!!!",
    ],
    // 是否展开侧边栏
    showSidebar:true,
    // tags
    tagList : [{path:"",name:""}],
    // 代办事项 这本应该使用mysql实现
    todoList:[{
      title:"今天要修复100个bug",
      done:false
    },{
      title:"今天要开心哦",
      done:true
    },{
      title:"好好学习",
      done:false
    },{
      title:"天天向上",
      done:false
    },],
    biaogeList:[
      {ID:1,username:"张三",userBalance:"100",headPortrait:"https://lin-xin.gitee.io/images/post/wms.png",address:"广东省湛江市",istate:true,registrationTime:"2019-7-25"},
      {ID:2,username:"李四",userBalance:"123",headPortrait:"https://lin-xin.gitee.io/images/post/wms.png",address:"广东省广州市",istate:true,registrationTime:"2020-3-12"},
      {ID:3,username:"王五",userBalance:"421",headPortrait:"https://lin-xin.gitee.io/images/post/wms.png",address:"广东省东莞市",istate:true,registrationTime:"2021-4-9"},
      {ID:4,username:"赵六",userBalance:"999",headPortrait:"https://lin-xin.gitee.io/images/post/wms.png",address:"湖南省长沙市",istate:true,registrationTime:"2022-12-4"}
    ],

    // tab 未读消息 已读消息 回收站
    weiduxiaoxi:[
      {msg:"今晚12点整发大红包，先到先得",time:"	2018-04-19 21:00:00"},
      {msg:"msgmsgmsg2",time:"	2077-04-19 21:00:00"},
    ],
    yiduxiaoxi:[
      {msg:"【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",time:"	2018-04-19 20:00:00"},
    ],
    huishouzhan:[
      {msg:"【系统通知】回收站内容",time:"	2018-04-19 20:00:00"},
    ]
  },
  getters:{},
  mutations:{
    changeShowSidebar(state){
      state.showSidebar = !state.showSidebar
    },
    SHANCHU(state,path:string){
      state.tagList = state.tagList.filter(val=>{
        return val.path != path
      })
    },
    TAGADD(state,j){
      // 判断数组内是否已经存在
      const isTrue = state.tagList.some(val=>{
        return val.path == j.path
      })
      if(!isTrue){
        state.tagList.splice(state.tagList.length,0,j)
      }
    },
    CLOSEALLTABS(state){
      state.tagList.length = 0
    },
    CLOSETHEOTHER(state,path){
      state.tagList = state.tagList.filter(val=>{
        return val.path == path
      })
    },
    TODOLISTADDBTN(state,message){
      const has = state.todoList.some(val=>{
        return val.title == message
      })
      if(!has && message.trim()!=""){
        state.todoList.push({title:message,done:false})
        ElMessage({
          message: '添加成功!',
          type: 'success',
        })
      }else{
        ElMessage({
          message: '添加失败，不允许有相同的内容,或者空内容!',
          type: 'error',
        })
      }
    },
    BIAOGESHANCHU(state,ID){
      state.biaogeList = state.biaogeList.filter(val=>{
        return val.ID !== ID
      })
    },
    CHANGEBIAOGEMSG(state,msg){
      for(let i=0;i<state.biaogeList.length;i++){
        if(state.biaogeList[i].ID==msg.ID){
          state.biaogeList[i].address = msg.address
          state.biaogeList[i].username = msg.username
          break
        }
      }
    },
    YIDU(state,msg){
      state.weiduxiaoxi = state.weiduxiaoxi.filter(val=>{
        return val.msg != msg.msg
      })
      state.yiduxiaoxi.splice(state.yiduxiaoxi.length,0,msg)
    },
    ALLYIDU(state){
      state.weiduxiaoxi.forEach(val=>{
        state.yiduxiaoxi.splice(state.yiduxiaoxi.length,0,val)
      })
      state.weiduxiaoxi.length = 0
    }
    
  },
  actions:{}
})

export default store