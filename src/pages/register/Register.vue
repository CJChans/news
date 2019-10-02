<template>
<!-- 注册页面 -->
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
        :value="form.username"
        @input="handleUsername"
        :rule="/^1[0-9]{4,10}$/"
        err_message="手机号码格式不正确"
      ></AuthInput>

      <!-- 昵称组件 -->
      <AuthInput
        placeholder="昵称"
        v-model="form.nickname"
        :rule="/^[0-9a-zA-Z\u4e00-\u9fa5]{2,6}$/"
        err_message="昵称格式不正确"
      ></AuthInput>

      <!-- 密码框组件 -->
      <AuthInput
        placeholder="密码"
        v-model="form.password"
        :rule="/^[0-9a-zA-Z]{3,12}$/"
        err_message="密码格式不正确"
      ></AuthInput>
    </div>

    <!-- 登录 -->
    <!-- <button @click="handleSubmit">登录按钮</button> -->
    <AuthButton text="注册" @click="handleSubmit">注册按钮</AuthButton>
  </div>
</template>

<script>
  import config from "./register";
  export default config;
</script>
 
<style scoped lang="less">
//  scoped作用域样式
  @import url('register.less');
</style>