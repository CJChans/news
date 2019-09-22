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

      :rule="/^1[0-9]{4,10}$/"
        err_message="手机号码格式不正确"
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
      <AuthButton text="登录" @click="handleSubmit">登录按钮</AuthButton>
  </div>
</template>

<script>
// 导入请求库
// import axios from "axios";
import AuthInput from "@/components/AuthInput";
import AuthButton from "@/components/AuthButton";
export default {
  data(){
    return{
      form:{
        username:"",
        password:""
      },
    }
  },
  //注册组件
  components:{
    AuthInput,
    AuthButton
  },

  methods:{

    handleUsername(value){
      this.form.username = value;
    },

    //表单提交
    handleSubmit(){
    // console.log(this.form)
      this.$axios({
        url:"http://localhost:3000/login",
        method:"post",//method相当于type
        data:this.form
        //.then的回调函数相当于success
      }).then( res=>{
        console.log(res)
      })
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