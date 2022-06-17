<template>
  <div class="biaoge">
    <h3>
      <el-icon :size="16" color="black">
        <Edit />
      </el-icon>
      基础表格
    </h3>

    <div class="content">
      <div class="iinput">
        <select v-model="address" class="address">
          <option value="所有">所有</option>
          <option value="广东">广东</option>
          <option value="湖南">湖南</option>
        </select>
        <input type="text" placeholder="用户名" class="name" v-model="username">
        <button class="sousuo" @click="search">
          <el-icon :size="20">
            <Search />
          </el-icon>
          搜索
        </button>
      </div>

      <!-- 表格内容 -->
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>用户名</th>
            <th>用户余额</th>
            <th>头像(查看大图)</th>
            <th>地址</th>
            <th>状态</th>
            <th>注册时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in showList" :key="item.ID">
            <td>{{item.ID}}</td>
            <td>{{item.username}}</td>
            <td>￥{{item.userBalance}}</td>
            <td><img :src="item.headPortrait" alt=""></td>
            <td>{{item.address}}</td>
            <td>
              <p v-if="item.istate">成功</p>
              <p v-else>失败</p>
              </td>
            <td>{{item.registrationTime}}</td>
            <td>
              <p @click="changeMessage(item.ID)">
                <el-icon>
                  <Paperclip />
                </el-icon>
                编辑
              </p>
              <p @click="shanchu(item.ID)">
                <el-icon>
                  <Van />
                </el-icon>
                删除
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <teleport to="body">
    <div class="changeShow" v-show="changeIsShow">
      <p>姓名：<input type="text" v-model="changeUsername"></p>
      <p>地址：<input type="text" v-model="changAddress"></p>
      <button @click="submitChange">提交</button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  import {
    computed,
    onMounted,
    ref,
    watch
  } from "vue"
  import {
    useStore
  } from "vuex"

  const store = useStore()

  let address = ref("所有")
  let list = computed(() => store.state.biaogeList)
  let username = ref("")
  let showList = ref(list.value)

  const search = () => {
    if (address.value === "所有") {
      showList.value = list.value
    } else {
      showList.value = list.value.filter((el: any) => {
        return el.address.indexOf(address.value) !== -1
      });
    }

    if (username.value !== "") {
      showList.value = showList.value.filter((val: any) => {
        return val.username.indexOf(username.value) !== -1
      })
    }
    return
  }
  const shanchu = (ID: number) => {
    store.commit("BIAOGESHANCHU", ID)
    showList.value = list.value
  }

  // 改变用户内容界面
  let changeIsShow = ref(false)
  // 中转变量
  let msgId = ref()
  let changeUsername = ref("")
  let changAddress = ref("")
  const submitChange = () => {
    let j = {ID:msgId.value,username:changeUsername.value,address:changAddress.value}
    store.commit("CHANGEBIAOGEMSG",j)
    changeIsShow.value = false
  }
  const changeMessage = (id: number) => {
    changeIsShow.value = true
    msgId.value = id
  }

  onMounted(() => {

  })
</script>

<style scoped>
  .biaoge {
    margin: 7px;
    background: #f9f9f9;
    width: 100%;
  }

  .biaoge h3 {
    display: flex;
    align-items: center;
  }

  .content {
    padding: 15px;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #ccc;
  }

  .iinput {
    display: flex;
    gap: 5px;
  }

  .address,
  .address option {
    border: 0px;
    outline: 0px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 2px 7px;
    transition: 0.4s;
  }

  .address:focus {
    border: 1px solid #2edef7;
  }

  .name {
    padding: 2px 7px;
    outline: 0px;
    border: 0px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  .name:focus {
    border: 1px solid #2edef7;
  }

  .sousuo {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 2px 7px;
    background: #2edef7;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    border: 0px;
  }

  .sousuo:active {
    filter: grayscale(0.6);
  }

  .biaoge table {
    border: 1px solid #ccc;
    margin-top: 10px;
    border-collapse: collapse;
  }

  .biaoge table thead tr:first-child {
    background: #f8f8f8;
  }

  .biaoge table tr th:not(:first-child) {
    width: 200px;
  }

  .biaoge table td,
  .biaoge table th {
    padding: 7px 0px;
    text-align: center;
  }

  .biaoge table tr:hover {
    background: #f8f8f8;
  }

  .biaoge table tbody td:nth-child(4) img {
    width: 45px;
    height: 45px;
  }

  .biaoge table tbody td:nth-child(8) {
    display: flex;
    gap: 7px;
    justify-content: center;
    align-items: center;
  }

  .biaoge table tbody td:nth-child(8) p:nth-child(1) {
    color: blue;
    cursor: pointer;
  }

  .biaoge table tbody td:nth-child(8) p:nth-child(2) {
    color: red;
    cursor: pointer;
  }

  .changeShow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 300px;
    transform: translateX(-50%);
    background: red;
  }
</style>