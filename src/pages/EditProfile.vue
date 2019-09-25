<template>
  <div>
      <!-- 头部 -->
      <HeaderNormal title="编辑资料"/>
      <!-- 头像 -->
      <div class="head">
          <img :src=" profile.head_img " alt="">
      </div>

      <!-- 调用条形组件 -->
      <CellBar lable="昵称" :text="profile.nickname"/>
      <CellBar lable="密码" :text="profile.password" type="password"/>
      <CellBar lable="性别" :text="profile.gender"/>
  </div>
</template>

<script>
//导入头部
import  HeaderNormal from "@/components/HeaderNormal";
import  CellBar from "@/components/CellBar";
export default {
    data(){
        return{
            //用户详情
            profile:{}
        }
    },
    components:{
        HeaderNormal,
        CellBar
    },
    mounted(){
        //请求个人资料接口
        this.$axios({
            url:"/user/" + localStorage.getItem("user_id"),
             //添加头信息
        headers: {
            Authorization: localStorage.getItem("token")
         }
            }).then(res => {
                // console.log(res)
                 const { data } = res.data;
                if(data){
                this.profile = data;
                 // console.log(this.profile);
                //如果用户有头像
                if(data.head_img){
                    this.profile.head_img =this.$axios.defaults.baseURL + data.head_img 
                   }else{
                        this.profile.head_img = "../../static/20150108164231_t432j.png";
                 }
                }
            })
    }
}
</script>

<style scoped lang="less">
    .head{
        display: flex;
        justify-content:center;
        align-items:center;
       
       img{
           display: block;
           width: 100/360*100vw;
           height: 100/360*100vw;
           border-radius: 50%;
       }
    }

</style>