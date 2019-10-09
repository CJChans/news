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
        src="https://video.pearvideo.com/mp4/adshort/20190927/cont-1607446-14434032_adpkg-ad_hd.mp4"
        class="video"
        controls
        poster="https://timgmb04.bdimg.com/timg?searchbox_feed&quality=100&wh_rate=0&size=b576_324&ref=http%3A%2F%2Fwww.baidu.com&sec=1568739067&di=612dd27cae470b93b01a4b32ef72fbac&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fe18c6ffa079441431f8988ca4c3ac106.jpeg"
      ></video>

      <div class="video-info">
        <div class="video-user">
          <img :src="$axios.defaults.baseURL + detail.user.head_img" />
          <span>{{detail.user.nickname}}</span>
        </div>

        <span class="focus" v-if="!detail.has_follow" @click="handleFollow">关注</span>
        <span class="focus focus_active" v-else @click="handleFollow">已关注</span>
      </div>
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