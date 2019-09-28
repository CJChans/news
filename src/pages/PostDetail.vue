<template>
  <div class="container">
    <!-- 新闻的详情页的内容 -->
    <div class="article">
      <div class="header">
        <div class="header-left">
          <span class="iconfont iconjiantou2" @click="$router.back()"></span>
          <span class="iconfont iconnew"></span>
        </div>
        <span class="focus" v-if="!detail.has_follow" @click="handleFollow">关注</span>
        <span class="focus focus_active" v-else @click="handleFollow">已关注</span>
      </div>

      <h3>{{detail.title}}</h3>

      <p class="post-info">{{ detail.user.nickname }} 2019-10-06</p>

      <div class="post-content" v-html="detail.content"></div>
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

    <!-- 页脚组件 -->
    <PostFooter />
  </div>
</template>

<script>
import PostFooter from "@/components/PostFooter";
export default {
  data() {
    return {
      //文章的详情
      detail: {
        user: {}
      }
    };
  },
  components: {
    PostFooter
  },
  methods: {
    //关注当前的作者
    handleFollow() {
      var url = "";
      if (this.detail.has_follow) {
        url = "/user_unfollow/";
      } else {
        url = "/user_follows/";
      }
      //通过作者id关注用户
      this.$axios({
        url: url + this.detail.user.id,
        //添加头信息
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then(res => {
        console.log(res);
        const { message } = res.data;
        // if(message==="关注成功"){
        this.detail.has_follow = !this.detail.has_follow;
        this.$toast.success(message)
        // }
      });
    }
  },

  mounted() {
    //请求文章的详情
    // console.log(this.$route.params)
    const { id } = this.$route.params;
    const token = localStorage.getItem("token");
    const config = { url: "/post/" + id };
    // 如果有token就带上，才可能获取到是否关注，是否收藏的属性
    if (token) {
      config.headers = {
        Authorization: token
      };
    }
    this.$axios(config).then(res => {
      // console.log(res)
      const { data } = res.data;

      //保存到详情
      this.detail = data;
      console.log(this.detail);
    });
  }
};
</script>

<style scoped lang="less">
.container {
  padding-bottom: 200 / 360 * 100vw;
  .article {
    padding: 10px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      .header-left {
        display: flex;
        align-items: center;
        .iconnew {
          font-size: 46/360 * 100vw;
          margin-left: 10px;
        }
      }
      .focus {
        font-size: 12px;
        line-height: 1.5;
        display: block;
        width: 50/360 * 100vw;
        border: 1px solid #999;
        border-radius: 50px;
        text-align: center;
      }
      .focus_active {
        border: 1px #ccc solid;
        color: #fff;
        background: green;
      }

      p {
        font-size: 12px;
        color: #999;
        margin-bottom: 10px;
      }
    }
  }

  .post-button {
    display: flex;
    justify-content: space-around;
    margin-top: 30/360 * 100vw;
    padding: 0 30px;
    span {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 60/360 * 100vw;
      border: 1px solid #999;
      text-align: center;
      font-size: 12px;
      padding: 0 10px;
      line-height: 1.5;
      border-radius: 50px;
      .iconweixin {
        color: #04c804;
      }
    }
  }
}
/deep/ img {
  max-width: 100%;
}
</style>