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
            replyComment: null
        }
    },

    methods: {
        // 请求评论的列表
        getComments(id) {
            console.log('id----------', id)
                //请求文章评论
            this.$axios({
                url: "/post_comment/" + id
            }).then(res => {
                // console.log(res.data)
                const { data } = res.data;
                this.comments = data
            })
        },
        // 点击回复按钮时候触发的方法
        handleReply(item) {
            // 获取到当前要回复的id
            this.replyComment = item;
        }

    },

    mounted() {
        //文章的id
        const { id } = this.$route.params;
        console.log('this.$route.params', id)
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