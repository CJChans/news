import HeaderNormal from "@/components/HeaderNormal";
import CommentFloor from "@/components/CommentFloor";
import PostFooter from "@/components/PostFooter";
export default {
    components: {
        HeaderNormal,
        CommentFloor,
        PostFooter
    },

    data() {
        return {
            //评论的列表
            comments: [],
            //文章的详情
            detail: {},
            // 保存点击回复的评论
            replyComment: null,

            // 分页的参数
            loading: false,
            finished: false,
            pageIndex: 1,
            pageSize: 10
        }
    },

    methods: {
        // 请求评论的列表
        getComments(id, isReply) {
            // console.log('id----------', id)
            //如果评论发布成功，初始化分页的数据和列表数据
            if (isReply === "isReply") {
                this.pageIndex = 1;
                this.comments = []
            }
            //请求文章评论
            this.$axios({
                // url: "/post_comment/" + id
                // 条数默认是10
                url: `/post_comment/${id}?pageIndex=${this.pageIndex}`,
            }).then(res => {
                // console.log(res.data)
                const { data } = res.data;
                this.comments = [...this.comments, ...data];

                // 请求完毕需要手动变为false
                this.loading = false;

                if (data.length < this.pageSize) {
                    this.finished = true;
                    return;
                }
                // 页数加1
                this.pageIndex++;
            })
        },
        // 点击回复按钮时候触发的方法
        handleReply(item) {
            // 获取到当前要回复的id
            console.log(item)
            this.replyComment = item;
        },

        // 评论加载更多
        onLoad() {
            setTimeout(() => {
                // 文章的id
                const { id } = this.$route.params;
                // 请求下一页的数据
                this.getComments(id);
            }, 2000)
        }

    },

    mounted() {
        //文章的id
        const { id } = this.$route.params;
        // console.log('this.$route.params', id)
        // 请求评论的列表
        this.getComments(id);


        //请求文章详情
        const config = {
            url: "/post/" + id
        }
        const token = localStorage.getItem("token")
        if (token) {
            config.headers = {
                Authorization: token
            };
        }
        this.$axios(config).then(res => {
            // console.log(res.data)
            const { data } = res.data;
            this.detail = data
        })
    }
}