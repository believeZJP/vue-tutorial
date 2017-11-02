<template>
  <el-form :model="userInfo" class="demo-form">
    <el-form-item label="邮箱">
      <el-input v-model="userInfo.account" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="userInfo.password" placeholder=""></el-input>
    </el-form-item><el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
      data () {
          return {
              userInfo: {
                  account: '',
                  password: ''
              }
          }
      },
      methods: {
          onSubmit () {
          },
          jumpToHome () {
          }

      }
  }
</script>

<style scoped>
  .demo-form{
    max-width: 400px;
    margin: 0 auto;
  }
</style>
