import Login from "@/pages/login/Login.vue";
import Register from "@/pages/register/Register.vue";
import Personal from "@/pages/personal/Personal.vue";
import EditProfile from "@/pages/edit_profile/EditProfile.vue";
import UserFollow from "@/pages/user_follow/UserFollow.vue";
import UserComment from "@/pages/user_comment/UserComment.vue";
import Index from "@/pages/index/Index.vue";
import PostDetail from "@/pages/post_detail/PostDetail.vue";
import PostComment from "@/pages/post_comment/PostComment.vue";
import Search from "@/pages/search/Search.vue";

//路由:2.创建路由配置
const routes = [
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/personal", component: Personal },
    { path: "/editprofile", component: EditProfile },
    { path: "/user_follow", component: UserFollow },
    { path: "/user_comment", component: UserComment },

    { path: "/", component: Index },

    //:id是文章的id
    { path: "/post_detail/:id", component: PostDetail },
    { path: "/post_comment/:id", component: PostComment },
    { path: "/search", component: Search },

]



export default routes;