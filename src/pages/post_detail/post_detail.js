import PostFooter from "@/components/PostFooter";
export default {
    data() {
        return {
            //文章的详情
            detail: {
                user: {},
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
                // console.log(res);
                const { message } = res.data;
                // if(message==="关注成功"){
                this.detail.has_follow = !this.detail.has_follow;
                this.$toast.success(message)
                    // }
            });
        },

        // 点赞
        handleLike() {
            // 通过作者id关注用户
            this.$axios({
                url: "/post_like/" + this.detail.id,
                // 添加头信息
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then(res => {
                // console.log(res)
                const { message } = res.data;
                // console.log(message)
                if (message === "点赞成功") {
                    // 修改关注的按钮的状态
                    this.detail.has_like = true;
                    this.detail.like_length++;
                    this.$toast.success(message)
                } else {
                    this.detail.has_like = false;
                    this.detail.like_length--;
                }
            })
        },

        // 收藏
        handleStar() {
            // 通过作者id关注用户
            this.$axios({
                url: "/post_star/" + this.detail.id,
                // 添加头信息
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then(res => {
                // console.log(res)
                const { message } = res.data;
                if (message === "收藏成功") {
                    // 修改关注的按钮的状态
                    this.detail.has_star = true;
                    this.$toast.success(message)
                } else {
                    this.detail.has_star = false;
                }
            })
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