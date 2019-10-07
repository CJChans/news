// 文章列表模块的组件
import PostCard from "@/components/PostCard";

export default {
    name: "index", //可以为任意字符串
    data() {
        return {
            // 搜索的关键字
            keyword: "",
            // 文章的列表
            list: []
        }
    },
    components: {
        PostCard
    },
    methods: {
        // 处理搜索
        handleSearch() {
            this.$axios({
                url: `/post_search?keyword=${this.keyword}`
            }).then(res => {
                const { data } = res.data;
                // 赋值给list
                this.list = data;
            })
        }
    },

    //组件内的路由守卫，判断如果是首页进入到搜索页的，清空页面的缓存数据

    //to:去哪里
    //from:从哪里来
    //next:函数，必须要调用next，还可以接受url、函数，不传参数
    beforeRouteEnter(to, from, next) {
        if (from.path === "\/") {
            //vm就是组件的实例，也就是this
            next(vm => {
                vm.keyword = "",
                    vm.list = []
            })
        } else {
            next()
        }

    }
}