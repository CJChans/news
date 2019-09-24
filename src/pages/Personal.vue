<template>
<div>
  <div class="profile">
      <img src="../../static/20150108164231_t432j.png" alt="">

      <div class="profile-center">
          <div class="name">
              <span class="iconfont iconxingbienan"></span>
              火星网友
          </div>
          <div class="time">
              2019-9-24
          </div>
          <span class="iconfont iconjiantou1"></span>
      </div>
      </div>
   <div>
 <!-- 调用条形组件 -->
    <CellBar lable="我的关注" text="关注的用户"/>
    <CellBar lable="我的跟帖" text="跟帖/回复"/>
    <CellBar lable="我的收藏" text="文章/视频"/>
    <CellBar lable="设置" />
  </div>
  </div>
  
  
</template>

<script>
    //导入条形组件
import CellBar from "@/components/CellBar";

export default {
    //注册组件
    components:{
        CellBar,
    },

    mounted(){
        //请求个人资料接口
        this.$axios({
            url:"/user/" + localStorage.getItem("user_id"),
            //添加头信息
            header:{
                Authorization:localStorage.getItem("token")
            }
        }).then(res =>{
            // console.log(res)
        })
    }
}
</script>

<style scope lang="less">

    .profile{
        display: flex;
        padding: 20px 10px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 5px solid #ddd;

        img{
            width: 70/360*100vw;
            height: 70/360*100vw;
            border-radius:50%; 
        }

        .profile-center{
            flex:1;
            padding: 0 10px;
        }
        .name{
            span{
                color: #75b9eb;
            }
        }

        .time{
            color:#666;
            font-size: 14px;
            margin-top: 5px;
        }

    }


</style>