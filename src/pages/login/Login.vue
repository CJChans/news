<template>
<!-- 登录页 -->
  <div class="container">
    <!-- 关闭的按钮 -->
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>

    <!-- logo -->

     <div class="logo">
       <span class="iconfont iconnew"></span>
     </div>

    <!-- 用户名和密码输入框 -->
      <div>

        <!-- 输入框组件 -->
       <AuthInput
       placeholder="手机号码"
      
      :value='form.username'
      @input="handleUsername"

      :rule="/^1[0-9]{4,10}$/"
        err_message="手机号码格式不正确"
       ></AuthInput>

        <!-- 密码框组件 -->
       <AuthInput
       placeholder="密码"
       type="password"
       v-model="form.password"
       
       :rule="/^[0-9a-zA-Z]{3,12}$/"
       err_message="密码格式不正确"
       ></AuthInput>
      </div>

      <p class="tips">
        没有账号？
        <router-link to="/register">去注册</router-link>
      </p>
      

    <!-- 登录 -->
      <!-- <button @click="handleSubmit">登录按钮</button> -->
      <AuthButton text="登录" @click="handleSubmit">登录按钮</AuthButton>
  </div>
</template>

<script>
// 导入请求库
 import config from "./login.js";
 export default config;
</script>
 
<style scoped lang="less">
//  scoped作用域样式
 @import url("./login.less");
</style>