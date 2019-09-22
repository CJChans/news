<template>
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
       ></AuthInput>
      </div>
      

    <!-- 登录 -->
      <button @click="handleSubmit">登录</button>
  </div>
</template>

<script>

import AuthInput from "@/components/AuthInput";
export default {
  data(){
    return{
      form:{
        username:"",
        password:""
      }
    }
  },
  //注册组件
  components:{
    AuthInput
  },

  methods:{

    handleUsername(value){
      this.form.username = value;
    },

    handleSubmit(){
    console.log(this.form)
    }
  }
}
</script>
 
<style scoped lang="less">
//  scoped作用域样式
  .container{
    padding: 20px;
  }
  .close{
    span{
      font-size: 27 / 360 * 100vw;
    }
  }
  .logo{
    display: flex;
    justify-content: center;
    span{
      display: block;
      font-size: 126/360*100vw;
       color: #d81e06;
    }           

  }

</style>