<script setup lang="ts">
import {onMounted} from "vue"
</script>

<template>
  <router-view></router-view>
</template>

<style>
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
li{
  list-style: none;
}
.w{
  max-width: 1400px;
  margin: 0 auto;
}
img{
  object-fit: cover;
}
a{
  text-decoration: none;
}
</style>
