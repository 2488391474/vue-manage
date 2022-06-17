<template>
  <div class="all">
    <div class="box">
      <Topleft class="topleft" name="admin"></Topleft>
      <Topright class="topright"></Topright>
    </div>
    <Ibottom></Ibottom>

  </div>
</template>

<script setup lang="ts">
  import Topleft from "./topleft.vue"
  import Topright from "./topright.vue"
  import Ibottom from "./ibottom.vue"
</script>

<style scoped>
  .all {
    background: #f8f8f8;
    padding: 17px;
  }

  .box {
    display: flex;
    gap: 15px;
  }

  .topleft {
    flex: 2;
  }

  .topright {
    flex: 5;
  }
</style>