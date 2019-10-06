<template>
  <div class="container">
      <div class="header">
          <span class="iconfont iconjiantou2" @click="$router.back()"></span>
          <div class="input-wrap">
              <span class="iconfont iconsearch"></span>
              <input type="text" v-model="keyword" placeholder="搜索关键字">
          </div>

          <span class="search-btn" @click="handleSearch">搜索</span>
      </div>

       <div class="list">
          <!-- 调用首页用过的文章模块的组件 -->
          <PostCard 
          v-for="(item, index) in list"
          :key="index"
          :post="item"/>
      </div>
  </div>
</template>

<script>
    import config from "./search";
    export default config;
</script>

<style scoped lang="less">
    @import url("./search.less");
</style>