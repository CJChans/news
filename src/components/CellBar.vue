<template>
  <div class="cell-wrap" @click="$emit('click',$event)">
      <div class="cell" >
          <span>{{lable}}</span>
          <i>{{ type === 'password' ? '******' : text}}</i>
          <span class="iconfont iconjiantou1"></span>
      </div>
  </div>
</template>

<script>
export default {
    props:["lable","text","type"]
}
</script>

<style scoped lang="less">
    .cell-wrap{
        padding-left: 20px;

        .cell{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 10px;
            height: 48/360*100vw;
            border-bottom: 1px solid #eee;
        }
        i{
            display: block;
            flex: 1;
            font-size: 14px;
            padding: 0 10px;
            color: #999;
            text-align: right;
        }
    }
</style>