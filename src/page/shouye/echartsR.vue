<template>
  <div ref="myCharts" id="main" :style="{flex:'1',height:'500px'}">
  </div>
</template>

<script setup lang="ts">
  import {
    onMounted,
    ref
  } from "vue"
  import * as echarts from "echarts"


  onMounted(() => {
    let myChart = echarts.init(document.getElementById('main') as HTMLElement);
    var option = {
      title:{
        show:true,
        text:"最近一周各品类销售图"
      },
      legend:{},
      xAxis:{
        data:["周一","周二","周三","周四","周五"]
      },
      yAxis:{},
      series:[
        {
          type:"bar",
          name:"家电",
          data:[164,178,190,135,160]
        },{
          type:"bar",
          name:"百货",
          data:[234,278,270,190,123]
        },{
          type:"bar",
          name:"食品",
          data:[144,198,150,235,120]
        },
      ]
    };
    myChart.setOption(option);
  })
</script>

<style scoped>
div{
  background: #fff;
  padding: 7px;
  border-radius: 7px;
}
</style>