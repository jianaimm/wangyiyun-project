<template>

    <div class="login">

            <el-button v-if="!userInfo.id" class="loginBtn" type="text" @click="dialogFormVisible = true">登录</el-button>
        <el-button v-else class="loginBtn" type="text" @click="dialogFormVisible = false">
            <img class="avatarUrl" :src="userInfo.profile.avatarUrl"/>
            <span>{{ userInfo.profile.nickname }}</span>
</el-button>

            <el-dialog title="请登录" :visible.sync="dialogFormVisible" :top="top">
                <span class="warn">
                    {{msg}}
                </span>
                <el-form>
                    <el-form-item label="用户名" :label-width="formLabelWidth">
                        <el-input v-model="loginInfo.phone" auto-complete="off" placeholder="请输入手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" :label-width="formLabelWidth">
                        <el-input v-model="loginInfo.password" auto-complete="off" placeholder="请输入密码"></el-input>
                    </el-form-item>

                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="cancelLogin">取 消</el-button>
                    <el-button type="primary" @click="toLogin" >确 定</el-button>
                </div>

            </el-dialog>
        </div>
</template>
<script>

    export default {
        name: 'Login',
        data(){
            return {
                loginInfo: {
                    phone: '',
                    password: ''
                },
                msg: '',
                dialogTableVisible: false,
                dialogFormVisible: false,
                formLabelWidth: '60px',
                top: '45%'
            }
        },
        computed: {
           userInfo() {
               return this.$store.state.userInfo
           }
        },
        methods: {
            toLogin(){
                this.$store.dispatch('doLogin',this.loginInfo)
                    .then( data => {
                        console.log(data)
                        if(data.code != 200){
                            this.msg = data.msg || '登录失败';
                            this.dialogFormVisible = true;
                        } else {
                            this.msg = '登录成功';

                            this.$store.commit('updateUserInfo',data);

                            setTimeout(() => {
                                this.loginInfo.phone = '';
                                this.loginInfo.password = '';
                                this.msg = '';
                                this.dialogFormVisible = false;
//                                this.$router.push('/');跳转到页面，首页
                            },1000);

                        }
                    })
            },
            cancelLogin(){
                this.loginInfo.phone = '';
                this.loginInfo.password = '';
                this.msg = '';
                this.dialogFormVisible = false;
            }
        }
    }
</script>
<style>

    .loginBtn {
        color: #bfcbd9;
        font: 14px/40px arial,'微软雅黑';
    }
    .el-dialog__body {
        padding: 30px 30px 5px;
    }
    .el-dialog {
        border-radius: 8px;
        min-width: 300px;
    }
    .el-dialog__wrapper {
        background: rgba(7, 3, 3, 0.47);
    }
    /*登录框的宽度*/
    .el-dialog--small {
        position: relative;
        top: 50%;
        width: 28%;
        transform: translate(-50%,-50%);
    }
    .el-input__inner {
        width: 85%;
    }
    .el-dialog__footer {
        text-align: center;
        padding: 10px 15px 20px;
    }
    .el-button--primary {
        background: linear-gradient(rgba(254, 99, 97, 0.93),#ee000e);
        border-color: #ee000e;
    }
    .el-button--primary:hover {
        background: linear-gradient(#ee000e, rgba(254, 54, 56, 0.93));
        border-color: #ee000e;
    }
    .warn {
        position: absolute;
        top: 10%;
        left: 50%;
        width: 60px;
        transform: translateX(-50%);
    }
    .avatarUrl {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

</style>
