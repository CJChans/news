import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import Personal from "@/pages/personal/Personal";
import EditProfile from "@/pages/edit_profile/EditProfile";
import UserFollow from "@/pages/user_follow/UserFollow";
import UserComment from "@/pages/user_comment/UserComment";
import Index from "@/pages/index/Index.vue";
import PostDetail from "@/pages/post_detail/PostDetail";
import PostComment from "@/pages/post_comment/PostComment";

//路由:2.创建路由配置
const routes = [
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/personal", component: Personal },
    { path: "/editprofile", component: EditProfile },
    { path: "/user_follow", component: UserFollow },
    { path: "/user_comment", component: UserComment },
    { path: "/", component: Index },
    { path: "/post_detail/:id", component: PostDetail },
    { path: "/post_comment/:id", component: PostComment },

]



export default routes;