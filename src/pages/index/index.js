import PostCard from "@/components/PostCard"
export default {
    data() {
        return {
            // 当前默认的栏目, 没有登录应该0，有登录等于1, 最终的效果为了默认显示头条

            active: localStorage.getItem("token") ? 1 : 0,

            //栏目列表
            categories: [],
            //栏目id
            cid: 999,

            // //默认的文章列表
            posts: [],
            // 是否在加载,加载完毕后需要手动变为false
            loading: false,
            // 是否有更多数据，如果加载完所有的数据，改为true
            finished: false,
            // 分页的变量
            pageIndex: 1,
            // 每页加载条数这个值不用去修改
            pageSize: 5,
        }
    },

    watch: {
        active() {
            // console.log(this.categories)
            this.cid = this.categories[this.active].id
                // console.log(this.cid )
                // console.log(this.active )
            this.onLoad();

        }
    },

    components: {
        PostCard
    },

    methods: {
        // 加载下一页的数据
        onLoad() {
            setTimeout(() => {
                // console.log("已经滚动到底部");
                // 请求文章列表
                const category = this.categories[this.active]
                this.$axios({
                    url: `/post?category=${this.cid}&pageIndex=${category.pageIndex}&pageSize=${this.pageSize}`
                }).then(res => {
                    // console.log(res.data)
                    const { data } = res.data;
                    // 没有更多的数据了
                    if (data.length < this.pageSize) {
                        category.finished = true;
                    }
                    // 默认赋值给头条的列表
                    category.posts = [...category.posts, ...data];

                    //页数加一
                    category.pageIndex++

                        // 告诉onload事件这次的数据加载已经完毕，下次可以继续的出发onload
                        category.loading = false;
                })

            }, 2000)
        }
    },

    mounted() {

        const config = {
                url: "/category",
            }
            //  是否存在token，如果有就给头部加上token验证
        if (localStorage.getItem("token")) {
            config.headers = {
                Authorization: localStorage.getItem("token")
            }
        }

        this.$axios(config).then(res => {
            // console.log(res)
            const { data } = res.data
                // console.log(data)
            const newData = []

            //循环给每一个栏目都添加四个独立的属性
            data.forEach(item => {
                item.posts = [];
                item.loading = false;
                item.finished = false;
                item.pageIndex = 1;
                newData.push(item);
            })

            //保存栏目列表到新的数据
            this.categories = newData
                // this.categories = data
                // console.log(this.categories) 

            // 必须先等待栏目请求完毕再请求文章列表
            this.$axios({
                url: `/post?category=${this.cid}&pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`
            }).then(res => {
                // console.log(res.data)
                const { data } = res.data;
                // 默认赋值给头条的列表
                this.categories[this.active].posts = data;
                // console.log(this.categories)
                //页数加一
                this.categories[this.active].pageIndex++
            })
        });

    }
}