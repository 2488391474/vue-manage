<template>
  <Header></Header>
  <div class="box">
    <div class="cbl">
      <Sidebar></Sidebar>
    </div>
    <div class="neiron">
      <Tags class="tag"></Tags>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
  import Header from "../../components/header.vue"
  import Sidebar from "../../components/sidebar.vue"
  import Tags from "../../components/tags.vue"

</script>
<style scoped>
  .box {
    display: flex;
  }
  .neiron{
    width: 100%;
  }
  .tag{
    width: 100%;
    height: 43px;
    border-bottom: 2px solid #ccc;
  }
</style>