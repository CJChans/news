<template>
  <div>
    <router-link to="/editprofile">
      <div class="profile">
        <!-- <img src="../../static/20150108164231_t432j.png" alt=""> -->
        <!-- $axios.defaults.baseURL读取axios的服务器路径 -->
        <img :src=" profile.head_img " alt />

        <div class="profile-center">
          <div class="name">
            <span class="iconfont iconxingbienan"></span>
            <!-- 火星网友 -->
            {{profile.nickname}}
          </div>
          <div class="time">2019-9-24</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </router-link>
    <div>
      <!-- 调用条形组件 -->
      <router-link to="/user_follow">
        <CellBar lable="我的关注" text="关注的用户" />
      </router-link>

      <router-link to="/user_comment">
        <CellBar lable="我的跟帖" text="跟帖/回复" />
      </router-link>
      <CellBar lable="我的收藏" text="文章/视频" />
      <CellBar lable="退出" @click="handleLogout" />
    </div>
  </div>
</template>

<script>
//导入条形组件
import CellBar from "@/components/CellBar";

export default {
  data() {
    return {
      // 个人信息
      profile: {}
    };
  },
  //注册组件
  components: {
    CellBar
  },
  methods: {
    handleLogout() {
      //清除本地的token和id
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");

      //replace替换上一个页面
      this.$router.replace("/login");
    }
  },
  mounted() {
    //请求个人资料接口
    // console.log(localStorage.getItem("token"));

    this.$axios({
      url: "/user/" + localStorage.getItem("user_id"),
      //添加头信息
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => {
      //   console.log(res)
      const { data } = res.data;
      if (data) {
        this.profile = data;
        // console.log(this.profile);
        //如果用户有头像
        if (data.head_img) {
          this.profile.head_img = this.$axios.defaults.baseURL + data.head_img;
        } else {
          this.profile.head_img = "../../static/20150108164231_t432j.png";
        }
      }
    });
  }
};
</script>

<style scoped lang="less">
.profile {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px solid #ddd;

  img {
    width: 70/360 * 100vw;
    height: 70/360 * 100vw;
    border-radius: 50%;
  }

  .profile-center {
    flex: 1;
    padding: 0 15px;
  }
  .name {
    span {
      color: #75b9eb;
    }
  }

  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
}
</style>