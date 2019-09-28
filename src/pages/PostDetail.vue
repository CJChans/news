<template>
  <div>
      <!-- 新闻的详情页的内容 -->
      <div class="article">

          <div class="header">
              <div class="header-left">
                  <span class="iconfont iconjiantou2" @click="$router.back()"></span>
                  <span class="iconfont iconnew"></span>
              </div>
              <span class="focus">关注</span>
          </div>

          <h3>新闻的标题内容</h3>

          <p  class="post-info">火星时报  2019-10-06</p>

          <div class="post-content">
                新闻的详情页的内容  新闻的详情页的内容  新闻的详情页的内容 
                新闻的详情页的内容  新闻的详情页的内容  新闻的详情页的内容 
                新闻的详情页的内容  新闻的详情页的内容
          </div>
      </div>

      <!-- 点赞按钮和分享链接 -->
      <div class="post-button">
          <span>
              <i class="iconfont icondianzan"></i>
              168
          </span>
          <span>
              <i class="iconfont iconweixin"></i>
              微信
          </span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
    .article{
        padding: 10px;
        .header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            .header-left{
                display: flex;
                align-items: center;
               .iconnew{
                   font-size: 46/360*100vw;
                   margin-left: 10px;
               }
            }
            .focus{
                font-size: 12px;
                line-height: 1.5;
                display: block;
                width: 50/360*100vw;
                border: 1px solid #999;
                border-radius: 50px;
                text-align: center;
             
            }

             p{
            font-size: 12px;
            color: #999;
            margin-bottom: 10px;
        }
        }           
    }

      .post-button{
            display: flex;
            justify-content: space-around;
            margin-top: 30/360*100vw;
            padding: 0 30px;
            span{
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 60/360*100vw;
                border: 1px solid #999;
                text-align: center;
                font-size: 12px;
                padding: 0 10px;
                line-height: 1.5;
                border-radius: 50px;
                .iconweixin{
                    color: #04c804;
                }
            }
        }
</style>