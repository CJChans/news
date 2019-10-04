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
            detail: {}
        }
    },

    mounted() {
        //文章的id
        const { id } = this.$route.params;
        //请求文章评论
        this.$axios({
            url: "/post_comment/" + id
        }).then(res => {
            // console.log(res.data)
            const { data } = res.data;
            this.comments = data
        })

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
            console.log(res.data)
            const { data } = res.data;
            this.detail = data
        })
    }
}