import {createStore} from "vuex"


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
    tagList : [{path:"",name:""}]
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
    }
    
  },
  actions:{}
})

export default store