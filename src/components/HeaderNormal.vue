<template>
    <!-- 头部组件 -->
    <!-- 个人中心页板块的头部 -->
    <div class="header">
        <span class="iconfont iconjiantou2" @click="$router.back()"></span>
        <h4>{{title}}</h4>
        <span> > </span>
    </div>
</template>

<script>
export default {
    props:["title"]
}
</script>

<style scoped lang="less">
    .header{
        height: 50/360*100vw;
        display: flex;
        justify-content: space-between;
        padding: 20px;

        span:last-child{
            opacity: 0;
        }
    }
</style>