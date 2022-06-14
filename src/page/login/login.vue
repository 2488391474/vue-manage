<template>
  <el-form label-width="120px">
    <el-form-item>
      <el-input v-model="ilogin.username" />
    </el-form-item>
    <el-form-item>
      <el-input v-model="ilogin.password" />
    </el-form-item>
    <el-button type="primary" @click.prevent="onSubmit">Create</el-button>
  </el-form>
</template>

<script setup lang="ts">
  import {
    ref,
    reactive,
    onMounted
  } from "vue"
  import {
    ElMessage
  } from 'element-plus'
  import {
    login
  } from "../../ts/login"
  import {
    useStore
  } from "vuex"
  import {
    useRouter
  } from 'vue-router'

  const store = useStore()
  const router = useRouter()

  let ilogin: login = reactive({
    username: "",
    password: ""
  })

  const onSubmit = () => {
    let isok;
    store.state.ku.forEach((item: any) => {
      if (item.username == ilogin.username) {
        if (item.password == ilogin.password) {
          ElMessage({
            message: 'Congrats, this is a success message.',
            type: 'success',
          })
          isok = true
          localStorage.setItem("username",item.username)
          router.push("/shouye")
          return true
        }
      }
    });
    if (!isok) {
      return ElMessage({
        showClose: true,
        message: 'Oops, this is a error message.',
        type: 'error',
      })
    }
  }
</script>

<style scoped>

</style>