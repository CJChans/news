<template>
  <div class="container">
      <div class="header">
          <span class="iconfont iconjiantou2" @click="$router.back()"></span>
          <div class="input-wrap">
              <span class="iconfont iconsearch"></span>
              <input type="text" >
          </div>

          <span class="search-btn">搜索</span>
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