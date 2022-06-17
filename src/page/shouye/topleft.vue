<template>
  <div class="top_left">
    <section>
      <div class="sc_t">
         <img :size="50" src="../../assets/logo.png" />
         <h2>{{name}}</h2>
         <p>{{name2}}</p>
      </div>
      <div class="sc_b">
        <p>上次登录时间: <span>2019-11-01</span></p>
        <p>上次登录地点: <span>东莞</span></p>
      </div>
    </section>

    <section>
      <h3>语言详情</h3>
      <h4>Vue</h4>
      <el-progress :text-inside="false" :stroke-width="10" :percentage="70" color="green"/>
      <h4>JavaScript</h4>
      <el-progress :text-inside="false" :stroke-width="10" :percentage="24.1" color="yellow"/>
      <h4>CSS</h4>
      <el-progress :text-inside="false" :stroke-width="10" :percentage="13.7" color="blue"/>
      <h4>HTML</h4>
      <el-progress :text-inside="false" :stroke-width="10" :percentage="5.9" color="red"/>
    </section>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from 'vue';
const props = defineProps(["name"])

const name2 = props.name=="admin"?"超级管理员":"普通用户"

onMounted(()=>{
  
})

</script>

<style scoped>
.top_left{
  background:#fff;
  padding: 15px;
  border-radius: 7px;
}
.top_left section:nth-child(1){
  padding: 7px;
}
.sc_t img{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid #ccc;
  padding: 1px;
  align-items: center;
  float: left;
}
.sc_t{
  border-bottom: 2px solid #ccc;
}

.top_left section:nth-child(2){
  margin-top: 15px;
}
.top_left section:nth-child(2) h3{
  border-bottom: 2px solid #ccc;
  margin-bottom: 2px;
}

</style>