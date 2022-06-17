<template>
  <div class="tab">
    <h3>
      <el-icon :size="16" color="black">
        <Edit />
      </el-icon>
      基础表格
    </h3>

    <div class="content">
      <!-- 上方三个按钮 -->
      <div class="btn">
        <p :class="{'on':show==1}" @click="changeShow(1)">未读消息{{weiduxiaoxi.length}}</p>
        <p :class="{'on':show==2}" @click="changeShow(2)">已读消息{{yiduxiaoxi.length}}</p>
        <p :class="{'on':show==3}" @click="changeShow(3)">回收站{{huishouzhan.length}}</p>
      </div>
      <div class="weidu" v-show="show==1">
        <ul>
          <li v-for="item,k of weiduxiaoxi" :key="k">
            <p>{{item.msg}}</p>
            <em>
              {{item.time}}
              <button @click="yidu(item)">标记为已读</button>
            </em>
          </li>
        </ul>
        <button class="btn_bottom" @click="allYidu">全部标记为已读</button>
      </div>
      <div class="yidu" v-show="show==2">
        <ul>
          <li v-for="item,k of yiduxiaoxi" :key="k">
            <p>{{item.msg}}</p>
            <em>
              {{item.time}}
              <button>删除</button>
            </em>
          </li>
        </ul>
        <button class="btn_bottom">删除全部</button>
      </div>
      <div class="huishou" v-show="show==3">
        <ul>
          <li v-for="item,k of huishouzhan" :key="k">
            <p>{{item.msg}}</p>
            <em>
              {{item.time}}
              <button>还原</button>
            </em>
          </li>
        </ul>
        <button class="btn_bottom">清空回收站</button>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
  import {
    computed,
    ref
  } from "vue"
  import {
    useStore
  } from "vuex";

  const store = useStore()

  let weiduxiaoxi = computed(() => store.state.weiduxiaoxi)
  let yiduxiaoxi = computed(() => store.state.yiduxiaoxi)
  let huishouzhan = computed(() => store.state.huishouzhan)

  // 标记1 2 3分别表示显示不同消息ul
  let show = ref(1)

  const changeShow = (n:number)=>{
    show.value = n
  }
  const yidu = (msg:JSON)=>{
    store.commit("YIDU",msg)
  }
  const allYidu = ()=>{
    store.commit("ALLYIDU")
  }
</script>

<style scoped>
  .tab {
    margin: 7px;
    background: #f9f9f9;
    width: 100%;
  }

  .tab h3 {
    display: flex;
    align-items: center;
  }

  .tab {
    padding: 15px;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #ccc;
  }

  .btn {
    border-bottom: 2px solid #ccc;
    display: flex;
    gap: 15px;
    padding: 5px;
  }

  .btn p {
    cursor: pointer;
  }

  .btn p.on {
    color: #2edef7;
  }

  .content ul li {
    padding: 7px 15px;
    width: 100%;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content ul li p {
    color: cornflowerblue;
    margin-top: 7px;
  }

  button {
    border: 1px solid #ccc;
    background: #fff;
    padding: 5px 7px;
    cursor: pointer;
  }

  button:active {
    background: #2edef7;
    border: 1px solid #2edef7;
    color: #fff;
  }

  .btn_bottom {
    margin-top: 20px;
  }
</style>