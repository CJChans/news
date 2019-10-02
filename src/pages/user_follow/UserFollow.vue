<template>
    <!-- 我的关注页面 -->
  <div>
      <HeaderNormal title="我的关注"/>

      <!-- 关注用户的列表 -->
      <div class="follow-item" v-for="(item,index) in list" :key="index">
          <img :src=" $axios.defaults.baseURL + item.head_img " alt="">

          <div class="item-center">
              <p>{{item.nickname}}</p>
              <span>2019-9-25</span>
          </div>

          <span class="cancel" @click ="handleCancel(index)">取消关注</span>
      </div>
  </div>
</template>

<script>
    import config from './user_follow';
    export default config;
</script>

<style scoped lang="less">
   @import url('./user_follow.less');
</style>