//导入条形组件
import CellBar from "@/components/CellBar";

export default {
    data() {
        return {
            // 个人信息
            profile: {}
        };
    },
    //注册组件
    components: {
        CellBar
    },
    methods: {
        handleLogout() {
            //清除本地的token和id
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");

            //replace替换上一个页面
            this.$router.replace("/login");
        }
    },
    mounted() {
        //请求个人资料接口
        // console.log(localStorage.getItem("token"));

        this.$axios({
            url: "/user/" + localStorage.getItem("user_id"),
            //添加头信息
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(res => {
            // console.log(res.data.data)
            const { data } = res.data;
            if (data) {
                this.profile = data;
                // console.log(this.profile);
                //如果用户有头像
                if (data.head_img) {
                    this.profile.head_img = this.$axios.defaults.baseURL + data.head_img;
                } else {
                    this.profile.head_img = "../../static/20150108164231_t432j.png";
                }
            }
        });
    }
};