<template>
<div>
     <!-- 评论楼层 -->
      <div class="comment-floor">

          <div class="floor-header">
              <span> {{data.user.nickname}}</span>
              <i>2小时前</i>
              <em>回复</em>
          </div>

          <div class="comment-content">
              {{data.content}}
          </div>
        </div>
          <!-- 自己再次在调用自己 -->
          <comment v-if="data.parent" :data="data.parent"></comment>
      </div>
</template>

<script>
export default {
    //组件的名字，当前的组件可以通过改名字自己调用自己
    name:"comment",
    props:["data"]
}
</script>

<style scoped  lang="less">
    //评论楼层
.comment-floor{
    border: 1px solid #ccc;
    padding: 15px 20px;
    background-color: #f6f6f6;

    .floor-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        font-size: 13px;
        i{
            flex: 1;
            margin-left: 10px;
            font-size: 12px;
            color: #999;
        }
    }
    
}
</style>