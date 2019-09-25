<template>
  <div>
      <!-- 头部 -->
      <HeaderNormal title="编辑资料"/>
      <!-- 头像 -->
      <div class="head">
          <img src="../../static/c36e17c5c21de631d94fe0caf55c94e2.png" alt="">
      </div>

      <!-- 调用条形组件 -->
      <CellBar lable="昵称" text="火星网友"/>
      <CellBar lable="密码" text="123"/>
      <CellBar lable="性别" text="男"/>
  </div>
</template>

<script>
//导入头部
import  HeaderNormal from "@/components/HeaderNormal";
import  CellBar from "@/components/CellBar";
export default {
    components:{
        HeaderNormal,
        CellBar
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