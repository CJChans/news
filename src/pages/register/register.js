// 导入请求库
// import axios from "axios";
import AuthInput from "@/components/AuthInput";
import AuthButton from "@/components/AuthButton";
export default {
    data() {
        return {
            form: {
                username: "",
                password: "",
                nickname: ""
            }
        };
    },
    //注册组件
    components: {
        AuthInput,
        AuthButton
    },

    methods: {
        handleUsername(value) {
            this.form.username = value;
        },

        //表单提交
        handleSubmit() {
            // console.log(this.form)
            this.$axios({
                // url:"http://localhost:3000/login",
                url: "/register",
                method: "post", //method相当于type
                data: this.form
                    //.then的回调函数相当于success
            }).then(res => {
                console.log(res.data);
                const { message } = res.data;
                if (message === "注册成功") {
                    //跳转到首页
                    this.$router.push("/login");
                }
            });
        }
    }
};