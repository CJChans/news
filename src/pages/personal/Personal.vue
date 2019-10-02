<template>
<!-- 个人中心页 -->

  <div>
    <router-link to="/editprofile">
      <div class="profile">
        <!-- <img src="../../static/20150108164231_t432j.png" alt=""> -->
        <!-- $axios.defaults.baseURL读取axios的服务器路径 -->
        <img :src=" profile.head_img " alt />

        <div class="profile-center">
          <div class="name">
            <span class="iconfont iconxingbienan nan" v-if="profile.gender==1"></span>
            <span class="iconfont iconxingbienv nv" v-if="profile.gender==0"></span>
            <!-- 火星网友 -->
            {{profile.nickname}}
          </div>
          <div class="time">2019-9-24</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </router-link>
    <div>
      <!-- 调用条形组件 -->
      <router-link to="/user_follow">
        <CellBar lable="我的关注" text="关注的用户" />
      </router-link>

      <router-link to="/user_comment">
        <CellBar lable="我的跟帖" text="跟帖/回复" />
      </router-link>
      <CellBar lable="我的收藏" text="文章/视频" />
      <CellBar lable="退出" @click="handleLogout" />
    </div>
  </div>
</template>

<script>
  import config from "./personal";
  export default config;
</script>

<style scoped lang="less">
  @import url('./personal.less');
</style>