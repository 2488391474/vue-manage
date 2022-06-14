<template>
  <div class="tag" v-show="isShow">
    <ul>
      <li v-for="(item) of tagList" :key="item.path">
        <router-link :to="item.path" exact-active-class="jihuo">
          {{item.name}}<span @click.prevent="shanchu(item.path)">&#10006</span>
        </router-link>
      </li>
    </ul>
    <div class="close">
      <span @click="closeAllTab">删除所有</span>
      <span @click="closeTheOther">关闭其他</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    computed,
    onMounted
  } from "vue"
  import {
    useStore
  } from "vuex";
  import {
    onBeforeRouteUpdate,
    useRoute,
    useRouter
  } from "vue-router"


  const store = useStore()
  const route = useRoute()
  const router = useRouter()

  let tagList = computed(() => store.state.tagList)
  let isShow = computed(() => tagList.value.length)

  const shanchu = (path: string) => {
    store.commit("SHANCHU", path)
  }
  const closeAllTab = ()=>{
    store.commit("CLOSEALLTABS")
  }
  const closeTheOther = ()=>{
    const path = route.path.slice(1,);
    store.commit("CLOSETHEOTHER",path)
  }

  // 当路由改变时触发
  onBeforeRouteUpdate((to, from) => {
    // 传递添加的数据
    const j = {
      name: to.name,
      path: to.path.slice(1, )
    }
    store.commit("TAGADD", j)
  })


  onMounted(() => {
    const j = {
      name: route.name,
      path: route.path.slice(1, )
    }
    store.state.tagList = [j]
  })
</script>

<style scoped>
  ul {
    display: flex;
    gap: 15px;
    align-items: center;
    padding-left: 15px;
  }

  ul li {
    padding: 5px 15px;
    background: #2edef7;
    border-radius: 7px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  ul li span {
    margin-left: 4px;
  }
  .tag{
    display: flex;
    justify-content: space-between;
  }
  .close{
    display: flex;
    align-items: center;
    gap:5px
  }
  .close span{
    display: inline-block;
    padding: 5px 15px;
    background: #2edef7;
    border-radius: 7px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  .jihuo{
    background: red;
  }
</style>