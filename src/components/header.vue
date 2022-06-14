<template>
  <header>
    <div class="w">
      <div class="top">
        <router-link to="/shouye" class="top_logo">
          <img src="../assets/logo.png" alt="">
        </router-link>
        <div class="toggle" @click="changeShowSidebar">
          <el-icon :size="30" v-show="showSidebar">
            <ArrowLeft />
          </el-icon>
          <el-icon :size="30" v-show="!showSidebar">
            <ArrowRight />
          </el-icon>
        </div>
        <div class="top_r">
          <el-tooltip class="box-item" effect="dark" :content="`有${messageLength}条未读信息`" placement="bottom">
            <el-badge :value="messageLength" class="item">
              <el-icon :size="36" color="red">
                <Edit />
              </el-icon>
            </el-badge>
          </el-tooltip>
          <el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
          <el-dropdown>
            <span class="el-dropdown-link">
              {{username}}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <!-- 此处应有router-link -->
                <el-dropdown-item>
                  <router-link to="/gerenzhongxin">
                    个人中心
                  </router-link>
                </el-dropdown-item>
                <el-dropdown-item>项目仓库</el-dropdown-item>
                <hr />
                <el-dropdown-item @click="tuichudenglu">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import {
    computed,
    ref
  } from 'vue';
  import {
    useStore
  } from 'vuex';
  import {
    useRouter
  } from "vue-router"

  const store = useStore()
  const router = useRouter()

  let messageLength = ref(store.state.messageLength.length)
  let username = localStorage.getItem("username")

  const tuichudenglu = () => {
    localStorage.clear()
    router.replace("/login")
  }

  let showSidebar = computed(() => store.state.showSidebar)
  const changeShowSidebar = () => {
    store.commit("changeShowSidebar")
  }
</script>

<style scoped>
  header {
    position: relative;
    width: 100%;
    height: 75px;
    background: #fff;
    border-bottom: 2px solid #ccc;
  }

  .top {
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .top_logo img {
    width: 250px;
    height: 75px;
  }

  .top_r {
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
  }

  .toggle {
    position: absolute;
    left: 275px;
    top: 45px;
  }
</style>