<template>
  <div class="ibottom">
    <section>
      <echartsL></echartsL>
    </section>
    <section>
      <echartsR></echartsR>
    </section>
  </div>
</template>

<script setup lang="ts">
  import echartsL from "./echartsL.vue"
  import echartsR from "./echartsR.vue"
</script>

<style scoped>
  .ibottom {
    margin-top: 25px;
    width: 100%;
    display: flex;
    gap: 15px;
    height: 500px;
  }

  .ibottom section {
    flex: 1;
    height: 100%;
  }
</style>