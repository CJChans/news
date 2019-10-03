<template>
<!-- 精彩跟帖页面 -->
  <div class="bg-color">
       <!-- 头部 -->
      <HeaderNormal title="精彩跟帖"/>

      <!-- 评论模块 -->
      <div class="comment">
          <!-- 用户的信息 -->
          <div class="comment-info">
              <!-- 头像 -->
              <img src="../../../static/20150108164231_t432j.png" alt="">
              <!-- 用户的名字 -->
              <div class="user-info">
                  <p>火星网友</p>
                  <span>2小时前</span>
              </div>
          </div>

            <div class="reply">回复</div>
      </div>

      <!-- 评论楼层 -->
      <div class="comment-floor">

          <div class="floor-header">
              <span>1 火星网友</span>
              <i>2小时前</i>
              <em>回复</em>
          </div>

          <div class="comment-content">
              生活不止眼前的苟且，还有诗和远方!
          </div>
      </div>

       <!-- 评论楼层 -->
      <div class="comment-floor bd-tp">

          <div class="floor-header">
              <span>1 火星网友</span>
              <i>2小时前</i>
              <em>回复</em>
          </div>

          <div class="comment-content">
              生活不止眼前的苟且，还有诗和远方!
          </div>
      </div>


  </div>
</template>

<script>
    import config from "./post_comment";
    export default config;
</script>

<style scoped lang="less">
    @import url("post_comment.less");
</style>