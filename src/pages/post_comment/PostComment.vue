<template>
<!-- 精彩跟帖页面 -->
  <div class="bg-color">
       <!-- 头部 -->
      <HeaderNormal title="精彩跟帖"/>

      <!-- 评论模块 -->
      <div  v-for="(item,index) in comments" :key="index" class="bd-bottom">
      <div class="comment">
          <!-- 用户的信息 -->
          <div class="comment-info">
              <!-- 头像 -->
              <img :src="$axios.dedault.baseURL + item.user.head_img" v-if="item.user.head_img">
              <img src="../../../static/20150108164231_t432j.png" v-else>
              <!-- 用户的名字 -->
              <div class="user-info">
                  <p>{{item.user.nickname}}</p>
                  <span>2小时前</span>
              </div>
          </div>

            <div class="reply" @click="handleReply(item)">回复</div>
      </div>
        <!-- 调用楼层组件 -->
        <CommentFloor v-if="item.parent" :data="item.parent"/>
           
          <div class="comment-content">
            {{item.content}}
          </div>
        <!-- 添加底部页脚组件 -->
        <!-- <PostFooter :post="detail" @getComments="getComments"/> -->
         <!-- post文章的详情
        replyComment：要回复的评论
        getComments：发布评论成功后重新请求评论的列表 -->
        <PostFooter 
        :post="detail" 
        :replyComment="replyComment" 
        @getComments="getComments"/>
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