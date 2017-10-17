 / *come from login.vue.r1 */
<template>
    <div class="login_page fillcontain">
        <div class="pic"><img src=".././assets/img/figure.png" alt=""></div>
        <transition name="form-fade" mode="in-out">
            <section class="form_contianer" v-show="showLogin">
                <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="90px" class="demo-ruleForm qf">
                    <div class="login-left fl">
                        <el-form-item label="账号：" prop="username">
                            <el-input placeholder="用户名" v-model="loginForm.username"><span></span></el-input>
                        </el-form-item>
                        <el-form-item label="密码：" prop="password">
                            <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
                        </el-form-item>
                        <el-form-item label="验证码：" prop="checknode">
                            <el-input placeholder="验证码" v-model="loginForm.checknode"></el-input>
                            <div style="width: 76px; height: 36px;" id="codeimg"></div>
                        </el-form-item>
                    </div>
                    <div class="line fl"></div>
                    <div class="login-right fl">
                        <el-form-item>
                            <!-- @click="submitForm('loginForm')" -->
                            <el-button @click="login()" class="submit_btn">登陆</el-button>
                        </el-form-item>
                    </div>
                </el-form>
                <p class="txt">淘亿批发管理系统登录</p>
            </section>
        </transition>
    </div>
</template>
<script>
import {
    login,
    getAdminInfo
} from '@/api/getData'
import {
    mapActions,
    mapState
} from 'vuex'
import Code from '.././assets/js/gverify.js'


export default {

    data() {
        return {
            loginForm: {
                userid: '',
                username: '',
                password: '',
            },
            loginCode: 10,
            verifyForm: {
                userid: '',
                user_name: '',
                pass_word: '',
            },
            rules: {
                username: [{
                    required: true,
                    message: '请输入用户名',
                    trigger: 'blur'
                }, ],
                password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }],
                checknode: [{
                    required: true,
                    message: '请输入验证码',
                    trigger: 'blur'
                }],
            },
            showLogin: false,
        }
    },
    mounted() {
        this.showLogin = true;
        // this.$nextTick(function() {
        //   this.loginForm.verifycode = new GVerify("codeimg");
        // })
        this.codImg = new GVerify("codeimg");
    },
    created() {},
    computed: {
        ...mapState(['adminInfo']),
    },
    methods: {
        checkLogin(userName, password) {
            const url = 'http://localhost:3000/verifyForm';
            //console.log(this.loginCode);
            this.$http.get(url).then(res => {
                if (res.data) {
                    const userData = res.data;
                    const data = userData.filter(function(item) {
                        return item.user_name == userName;
                    });
                    if (data) {
                        if (data[0].pass_word == password) {
                            this.loginCode = 200;
                        } else {
                            this.loginCode = 100;
                        }
                    } else {
                        this.loginCode = 300;
                    }
                }
                console.log(this.loginCode);
            }).catch(error => {
                console.log(error);
            })
            console.log(this.loginCode);
        },
        login() {
            if (this.codImg.validate(this.loginForm.checknode)) {
                this.checkLogin(this.loginForm.username, this.loginForm.password);
                console.log(this.loginCode);
                if (this.loginCode == 200) {
                    this.$message({
                        type: 'success',
                        message: '验证成功'
                    });
                    this.$router.push('manage');
                } else if (this.loginCode == 100) {
                    this.$message({
                        type: 'error',
                        message: '密码错误'
                    });
                } else if (this.loginCode == 300) {
                    this.$message({
                        type: 'error',
                        message: '用户名不存在'
                    });
                } else {
                    //接口请求错误
                }
            } else {
                this.$notify.error({
                    title: '错误',
                    message: '验证信息输入有误',
                    offset: 100
                });

            }
        },
        ...mapActions(['getAdminData']),
        // login(paras){
        //       var data = [];
        //       var url='http://localhost:3000/userInfo';
        //
        //       this.$http.get(url,paras).then(function(res) {
        //               var obj = {};
        //
        //               for (let i = 0; i < res.data.length; i++) {
        //                     if (res.data[i].user_name==paras.username&&res.data[i].pass_word==paras.password) {
        //                             console.log(res.data[i]);
        //                             return res.data[i].status =1;
        //
        //                     } else {
        //                         console.log(res.data[i]);
        //                        return res.data[i].status=null;
        //                     }
        //               }
        //         }).catch(function(error) {
        //               console.log(error);
        //         })
        // },

        // async submitForm(formName) {
        //     this.$refs[formName].validate(async(valid) => {
        //         if (valid) {
        //             if (this.loginForm.verifycode.validate(this.loginForm.checknode)) {
        //                 const code = this.checkLogin(this.loginForm.username, this.loginForm.password);
        //                 if (code == 200) {
        //                     this.$message({
        //                         type: 'success',
        //                         message: '验证成功'
        //                     });
        //                     this.$router.push('manage')
        //                 } else if (code == 100) {
        //                     this.$message({
        //                         type: 'error',
        //                         message: '用户名或密码错误'
        //                     });
        //                 } else {
        //                     //接口出错，调试
        //                 }
        //             } else {
        //                 this.$notify.error({
        //                     title: '错误',
        //                     message: '验证信息输入有误',
        //                     offset: 100
        //                 });
        //                 return false;
        //             }
        //         }

        //     })
        // }
    },
}

</script>
<style lang="less" scoped>
@import '../style/mixin';

.qf {
    *zoom: 1;
}

.qf:after {
    content: '';
    display: table;
    clear: both;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.login_page {
    width: 100%;
    min-width: 345px;
    height: 100%;
    padding-top: 60px;
    padding-left: 105px;
    background: #7bc4f9 url(".././assets/img/bg.jpg") no-repeat top center;
    box-sizing: border-box;
}

.login_page .pic {
    width: 263px;
    height: 121px;
    margin-left: 130px;
    margin-bottom: 30px;
}

.login_page .pic img {
    width: 100%;
    vertical-align: top;
}

.login_page .demo-ruleForm {
    width: 480px;
    padding: 24px 0 22px;
    background: #afdbfb;
    box-sizing: border-box;
    border-radius: 10px;
}

.login_page .demo-ruleForm .el-input {
    width: 160px;
}

.login_page .demo-ruleForm .login-left {
    width: 310px;
}

.login_page .demo-ruleForm .login-left .el-form-item {
    margin-bottom: 18px;
}

.login_page .login-left .el-form-item .el-form-item__label {
    padding: 7px 12px 7px 0;
    color: #333;
}

.login_page .demo-ruleForm .login-left .el-form-item .el-form-item__content {
    line-height: 28px;
}

.login_page .demo-ruleForm .login-left .el-form-item .el-input__inner {
    height: 28px;
    border: 1px solid #ccc;
}

.login_page .demo-ruleForm .login-left .el-form-item:last-child {
    margin-bottom: 0;
}

.login_page .demo-ruleForm .login-left .el-form-item:last-child .el-input {
    width: 98px;
}

.login_page .demo-ruleForm .login-left .el-form-item:last-child #codeimg {
    display: inline-block;
    margin-left: 10px;
    position: relative;
    top: 2px;
    left: -6px;
    vertical-align: bottom;
}

.login_page .demo-ruleForm .login-left .el-form-item:last-child .codeimg img {
    width: 100%;
    vertical-align: top;
}

.login_page .demo-ruleForm .line {
    margin-top: 10px;
    width: 1px;
    height: 120px;
    background: #fff;
}

.login_page .demo-ruleForm .login-right {
    margin-left: -65px;
}

.login_page .demo-ruleForm .login-right .el-form-item .el-button {
    padding: 10px 42px;
    color: #333;
    margin-top: 44px;
}

.login_page .demo-ruleForm .login-right .el-form-item .el-button:focus,
.login_page .demo-ruleForm .login-right .el-form-item .el-button:hover {
    border-color: #ccc;
}

.login_page .txt {
    padding-left: 24px;
    margin-top: 16px;
    font-size: 14px;
    line-height: 14px;
    color: #fff;
}

@media screen and (max-width: 768px) {
    .login_page {
        padding-left: 50px;
    }
}

@media screen and (max-width: 480px) {
    .login_page {
        padding-left: 0;
    }
    .login_page .pic {
        width: 230px;
        height: auto;
        margin-left: 81px;
    }
    .login_page .demo-ruleForm {
        width: 90%;
        margin: 0 5%;
        padding: 24px 0 22px;
        background: #afdbfb;
        box-sizing: border-box;
        border-radius: 10px;
    }
    .login_page .line {
        display: none;
    }
    .login_page .demo-ruleForm .login-right .el-form-item {
        margin-bottom: 0;
    }
    .login_page .demo-ruleForm .login-right {
        margin-left: 0;
    }
    .login_page .demo-ruleForm .login-right .el-form-item .el-button {
        margin-top: 18px;
    }
}

</style>
