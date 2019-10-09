<template>
  <div class="container">
    <!-- 新闻的详情页的内容 -->
    <div class="article" v-if="detail.type==1">
      <div class="header">
        <div class="header-left">
          <span class="iconfont iconjiantou2" @click="$router.back()"></span>
          <span class="iconfont iconnew"></span>
        </div>
        <span class="focus" v-if="!detail.has_follow" @click="handleFollow">关注</span>
        <span class="focus focus_active" v-else @click="handleFollow">已关注</span>
      </div>

      
      <h3>{{detail.title}}</h3>

      <p class="post-info">{{ detail.user.nickname }} 2019-10-06</p>

      <div class="post-content" v-html="detail.content"></div>
    </div>

    <!-- 视频详情的内容 -->
    <div class="video-wrap" v-if="detail.type==2">
      <video
        :src="detail.content"
        class="video"
        controls
       :poster="$axios.defaults.baseURL + detail.cover[0].url"
      ></video>

      <div class="video-info">
        <div class="video-user">
          <img :src="$axios.defaults.baseURL + detail.user.head_img" />
          <span>{{detail.user.nickname}}</span>
        </div>

        <span class="focus" v-if="!detail.has_follow" @click="handleFollow">关注</span>
        <span class="focus focus_active" v-else @click="handleFollow">已关注</span>
        
      </div>

       <h3 style="padding:0 15px">{{detail.title}}</h3>
    </div>

    <!-- 点赞按钮和分享链接 -->
    <div class="post-button">
      <span @click="handleLike" :class="{ like_active: detail.has_like }">
        <i class="iconfont icondianzan"></i>
        {{detail.like_length}}
      </span>
      <span>
        <i class="iconfont iconweixin"></i>
        <a href="https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#1">微信</a>
      </span>
    </div>

    <!-- 页脚组件 -->
    <PostFooter :post="detail" @handleStar="handleStar" />
  </div>
</template>

<script>
import config from "./post_detail";
export default config;
</script>

<style scoped lang="less">
@import url("./post_detail.less");
</style>