import Vue from "vue";

//路由：1.导入路由构造函数
import VueRouter from "vue-router";
//导入UI-vantage组件
import Vant from "vant";
import { Toast } from 'vant';
// 导入axios
import axios from "axios";

//1.导入组件
import App from "@/App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Personal from "@/pages/Personal";
import EditProfile from "@/pages/EditProfile";
import UserFollow from "@/pages/UserFollow";
import UserComment from "@/pages/UserComment";
import Index from "@/pages/Index";
import PostDetail from "@/pages/PostDetail";



//在.vue文件中要使用router-link或者router-view.需要注册下插件
Vue.use(VueRouter)
Vue.use(Vant)

//把axios挂载到原型
Vue.prototype.$axios = axios; //this.$axios
// 基准路径，以后每次请求都会自动在前面加上该路径
axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.baseURL = "http://172.20.10.4:3000";

//路由:2.创建路由配置
const routes = [
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/personal", component: Personal },
    { path: "/editprofile", component: EditProfile },
    { path: "/user_follow", component: UserFollow },
    { path: "/user_comment", component: UserComment },
    { path: "/index", component: Index },
    { path: "/post_detail/:id", component: PostDetail },

]

//路由:3.创建对象
const router = new VueRouter({
    routes
});

// 路由守卫，就是一页面跳转之前的拦截器
// to要跳转之后的页面,去哪里
// from跳转之前的页面，来自哪里
// next 必须要调用next()。调用才会执行跳转，还可以重定向，next("/login")
router.beforeEach((to, from, next) => {
        //是否有token
        const hasToken = localStorage.getItem("token");
        // console.log(hasToken)

        //判断是否是需要登录权限的页面
        if (to.path === "/personal" || to.path === "/edit_profile") {

            //判断本地是否有token
            if (hasToken) {
                //正常跳转
                next();
            } else {
                //没有token正常跳转到登录
                next("/login")
            }
        } else {
            //所有人都可以访问的页面正常浏览
            next();
        }
    })
    //axios的统一的拦截器，拦截响应
axios.interceptors.response.use(res => {
    // console.log(res)
    const { message, statusCode } = res.data;
    if (statusCode == 400 || statusCode == 401) {
        Toast.fail(message)
    }
    // token过期了，或者token无效，一般引起的原因可能token被清空，密码修改了
    if (message === "用户信息验证失败") {
        // 跳转到登录
        router.push('/login')
    }
    //必须要返回res
    return res;
})

new Vue({
    el: "#app",

    //4.挂载到根实例
    router,
    //指定一个组件渲染根实例，这个组件可以成为最底层的组件
    render(createElement) {
        //固定写法，只有App可变
        return createElement(App);
    }
})