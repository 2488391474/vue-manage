<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="showSidebar">
    <el-menu-item index="1">
      <router-link to="/shouye" exact-active-class="eac">
          <el-icon :size="20">
            <House />
          </el-icon>
          Navigator Two
      </router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/biaoge">
        <el-icon :size="20">
          <IceCream />
        </el-icon>
        <span>基础表格</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/tab">
        <el-icon :size="20">
          <IceDrink />
        </el-icon>
        <span>tab选项卡</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/shouye">
        <el-icon :size="20">
          <KnifeFork />
        </el-icon>7
        <span>表单相关</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="5">
      <router-link to="/shouye">
        <el-icon :size="20">
          <MilkTea />
        </el-icon>
        <span>自定义图标</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="5">
      <router-link to="/shouye">
        <el-icon :size="20">
          <Microphone />
        </el-icon>
        <span>schart图标</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="5">
      <router-link to="/shouye">
        <el-icon :size="20">
          <MoonNight />
        </el-icon>
        <span>国际化功能</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="5">
      <router-link to="/shouye">
        <el-icon :size="20">
          <PhoneFilled />
        </el-icon>
        <span>错误处理</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="5">
      <router-link to="/shouye">
        <el-icon :size="20">
          <Pear />
        </el-icon>
        <span>支持作者</span>
      </router-link>
    </el-menu-item>

  </el-menu>
</template>

<script setup lang="ts">
  import {
    computed
  } from "vue"
  import {
    useStore
  } from "vuex"

  const store = useStore()

  let showSidebar = computed(() => store.state.showSidebar)
</script>

<style scoped>
  .eac {
    color: red;
  }

.el-menu-vertical-demo{
  overflow: hidden;
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>