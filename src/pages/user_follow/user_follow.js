import HeaderNormal from "@/components/HeaderNormal"

export default {
    data() {
        return {
            list: []
        }
    },
    components: {
        HeaderNormal
    },
    methods: {
        //取消关注
        handleCancel(index) {
            // console.log(this.list[index])
            //要取消关注的用户id
            const id = this.list[index].id

            this.$axios({
                url: "/user_follows/" + id,
                //添加头信息
                headers: {
                    Authorization: localStorage.getItem("token")
                },
            }).then(res => {
                // console.log(res.status)
                if (res.status === 200) {
                    //从列表中删除
                    this.list.splice(index, 1);
                    this.$toast.success("老铁看着删，已经成功了")
                }
            })
        }
    },
    mounted() {
        // 请求用户关注的列表
        this.$axios({
            url: "/user_follows",
            // 添加头信息
            headers: {
                Authorization: localStorage.getItem("token")
            },
        }).then(res => {
            // console.log(res.data)
            const { data } = res.data;
            // 赋值给关注的列表
            this.list = data;
        })
    }

}