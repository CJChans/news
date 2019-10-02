import HeaderNormal from "@/components/HeaderNormal";
export default {
    data() {
        return {
            list: []
        }
    },
    components: {
        HeaderNormal
    },

    mounted() {

        // 请求用户关注的列表
        this.$axios({

            url: "/user_comments/",
            // 添加头信息
            headers: {
                Authorization: localStorage.getItem("token")
            },
        }).then(res => {
            console.log(res.data)
            const { data } = res.data;
            // 赋值给关注的列表
            this.list = data;
        })
    }
}