<template>
<!-- 首页内容组件 -->
<div>
    <!-- 单张图片显示的布局 -->
  <div class="card" v-if="post.cover.length ==1 && post.type===1">
      <!-- 左侧文字 -->
      <div class="card-left">
          <div class="post-title">
            <router-link :to="`/post_detail/${post.id}`">
             {{post.title}}
            </router-link>
          </div>
          <p class="post-info">
              <span>{{post.user.nickname}}</span>
              <span>{{post.comment_length}}跟帖</span>
          </p>
      </div>

      <div class="card-img">
        <router-link :to="`/post_detail/${post.id}`">
          <img :src="post.cover[0].url" alt="">
        </router-link>
      </div>
  </div>

  <!-- 视频显示的布局 -->
    <div class="video-cart" v-if="post.type === 2 && post.cover.length === 1">
        <div class="post-title">
            <router-link :to="`/post_detail/${post.id}`">
            {{post.title}}
            </router-link>
        </div>
        <div class="video">
             <router-link :to="`/post_detail/${post.id}`">
            <img :src="post.cover[0].url" alt="">
             <span class="video-layer">
                <i class="iconfont iconshipin"></i>
            </span>
            </router-link>
        </div>
        <p class="post-info">
            <span>{{post.user.nickname}}</span>
            <span>{{post.comment_length}}跟帖</span>
        </p>
    </div>

    <!-- 3张图片显示的布局 -->
    <div class="img-cart" v-if="post.cover.length >= 3">
        <div class="post-title">
            <router-link :to="`/post_detail/${post.id}`">
            {{post.title}}
             </router-link>
        </div>
        <div class="img-list">
            <router-link :to="`/post_detail/${post.id}`">
            <img 
            v-for="(item, index) in post.cover" 
            :key="index"
            :src="item.url" 
            
            >
             </router-link>
        </div>
        <p class="post-info">
                <span>{{post.user.nickname}}</span>
                <span>{{post.comment_length}}跟帖</span>
            </p>
    </div>
  </div>
</template>

<script>
export default {
    props:['post'],

    mounted(){
        // console.log(this.post)
        //判断封面图片是否包含http
        this.post.cover.forEach(item=>{
            if(item.url.indexOf("http") === -1){
                item.url = this.$axios.defaults.baseURL + item.url;
            }
        })
    }
}
</script>

<style scoped lang="less">
    .card{
        display: flex;
        padding: 15px 10px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;

        .card-left{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 80 / 360 * 100vw;
            flex: 1;
           .post-title{
                font-size: 14px;
                line-height: 1.5;
                margin-bottom: 5px;

                //文本溢出隐藏
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
           }

           .post-info{
               font-size: 12px;
               color: #999;
           }
        }

        .card-img{
            margin-left: 5px;
            img{
                display: bock;
                width: 120/360*100vw;
                height: 80/360*100vw;

                //图片按比例缩放
                object-fit: cover;
            }
        }
    }

    .img-cart{
        padding: 20px 10px;
        border-bottom: 1px solid #ccc;
        .post-title{
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 5px;

            //文本溢出隐藏
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
        }
        .img-list{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5px;
            img{
                width: 33%;
                height: 80/360*100vw;

                //图片等比例缩放
                object-fit: cover;
            }
        }
         .post-info{
               font-size: 12px;
               color: #999;
           }
    }

    .video-cart{
        display: flex;
        padding: 20px 10px;
        flex-direction: column;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;

        .post-title{
            font-size: 14px;
            margin-bottom: 5px;
            line-height: 1.5;
            //文本溢出隐藏
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
        }
        .video{
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            
            img{
                display: block;
                width: 340/360*100vw;
                height: 170/360*100vw;
                //图片等比例缩放
                object-fit: cover;
            }

            .video-layer{
                position: absolute;
                background: rgba(0, 0, 0, 0.4);
                width:46 / 360 * 100vw;
                height:46 / 360 * 100vw;
                left: 147/360*100vw;
                top: 62/360*100vw;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;

                i{
                    font-size: 36/360*100vw;
                    color: #fff;
                }
        }
        
    }
     .post-info{
               font-size: 12px;
               color: #999;
           }
    }
</style>