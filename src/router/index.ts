import {createWebHashHistory, createRouter } from "vue-router";
import {ElMessage} from 'element-plus'

// 页面引入
import home from "../page/home/home.vue"
import login from "../page/login/login.vue"

const routes:any = [
  {
    path:"/",
    name:"home",
    component: home,
    meta:{
      // 判断是否需要登录
      denglu : true
    },
    children:[
      {
        path:"/shouye",
        name:"shouye",
        component: ()=> import("../page/shouye/shouye.vue")
      },
      {
        path:"/gerenzhongxin",
        name:"gerenzhongxin",
        component: ()=> import("../page/gerenzhongxin/gerenzhongxin.vue")
      }
    ]
  },
  {
    path:"/login",
    name:"login",
    component:login,
    meta:{
      // 判断是否需要登录
      denglu : false
    }
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  // 判断是否已经登录
  if(to.meta.denglu){
    if(!localStorage.getItem("username")){
      ElMessage({
        showClose: true,
        message: '请先登录',
        type: 'error',
      })
      router.push("/login")
    } 
  }

  next()
})

export default router
