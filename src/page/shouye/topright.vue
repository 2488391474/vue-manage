<template>
  <div class="top_r">
    <section>
      <div>
        <div class="icon">
          <el-icon :size="56" color="#fff">
            <Edit />
          </el-icon>
        </div>
        <p>
          1234<br />
          <span>用户访问量</span>
        </p>
      </div>
      <div>
        <div class="icon">
          <el-icon :size="56" color="#fff">
            <Edit />
          </el-icon>
        </div>
        <p>
          1234<br />
          <span>用户访问量</span>
        </p>
      </div>
      <div>
        <div class="icon">
          <el-icon :size="56" color="#fff">
            <Edit />
          </el-icon>
        </div>
        <p>
          1234<br />
          <span>用户访问量</span>
        </p>
      </div>
    </section>

    <!-- 代办事项 -->
    <section>
      <h3>代办事项 <span @click="todoListAdd">添加</span></h3>
      <div class="shuru" :class="{'on':isShow,'add':true}">
        <input type="text" placeholder="输入" v-model="message">
        <button @click="todoListAddBtn">提交</button>
      </div>
      <ul>
        <li v-for="item,val in list" :key="val">
          <input type="checkbox" @click="checkbox(item)" :checked="item.done">
          <p :class="{'on':item.done}">{{item.title}}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
  import {
    computed,
    ref
  } from "vue"
  import {
    useStore
  } from 'vuex';

  const store = useStore()

  let list = computed(() => store.state.todoList)

  const checkbox = (item: {
    title: string,
    done: boolean
  }) => {
    store.state.todoList.some((val: any) => {
      if (item.title == val.title) {
        val.done = !val.done
      }
    });
  }

  let message = ref("")
  let isShow = ref(false)
  const todoListAdd = () => {
    isShow.value = !isShow.value
  }
  const todoListAddBtn = () => {
    store.commit("TODOLISTADDBTN", message.value)
    message.value = ""
  }
</script>

<style scoped>
  .top_r section:nth-child(1) {
    width: 100%;
    display: flex;
    gap: 10px;
  }

  .top_r section:nth-child(1)>div {
    flex: 1;
    background: #fff;
    display: flex;
    align-items: center;
  }

  .icon {
    width: 85px;
    height: 85px;
    background: #2edef7;
    padding: 7px;
    text-align: center;
    padding-top: 15px;
  }

  .top_r section:nth-child(1) div p {
    display: inline-block;
    flex-grow: 1;
    text-align: center;
    color: skyblue;
  }

  .top_r section:nth-child(1) div p span {
    color: #ccc;
  }

  .top_r section:nth-child(2) {
    margin-top: 25px;
    position: relative;
  }

  .add {
    position: absolute;
    top: 30px;
    right: 0px;
    display: none;
  }

  .add.on {
    display: block;
  }

  .top_r section:nth-child(2) h3 {
    margin-bottom: 7px;
    padding-bottom: 4px;
    border-bottom: 2px solid #ccc;
  }

  .top_r section:nth-child(2) h3 span {
    float: right;
    color: #2edef7;
    cursor: pointer;
  }

  .top_r section:nth-child(2) ul {
    max-height: 200px;
    overflow-y: auto;
    /* overflow: hidden; */
  }

  .top_r section:nth-child(2) ul li {
    margin-top: 7px;
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .top_r section:nth-child(2) ul li p {
    position: relative;
    display: inline-block;
  }

  .top_r section:nth-child(2) ul li p.on::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0%;
    width: 100%;
    height: 2px;
    background: black;
  }
</style>