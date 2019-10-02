<template>
    <!-- 我的跟帖页面 -->
  <div>
      <HeaderNormal title="我的跟帖"/>

      <!-- 评论的列表 -->
      <div class="comment-item" v-for="(item,index) in list" :key="index">
          <div class="time">2019-9-25 10:10</div>

          <!-- 当前的评论回复的评论 -->
          <div class="parent" v-if="item.parent">
              <div class="parent-title">
                  @: {{item.parent.user.nickname}}
              </div>
              <div class="parent-content">
                  {{item.parent.content}}
              </div>
          </div>

          <!-- 个人评论的内容 -->
          <div class="content">
              {{item.content}}
          </div>

            <router-link to="#" class="article-link">
          <p>          
                原文：{{item.post.title}}
           
            <span class="iconfont iconjiantou1"></span>
          </p>
           </router-link>
      </div>
  </div>
</template>

<script>
    import config from './user_comment';
    export default config;
</script>

<style scoped lang="less">
    @import url('./user_comment.less');
</style>