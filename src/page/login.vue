<template>
<div class="login_page fillcontain">
    <div class="pic"><img src=".././assets/img/figure.png" alt=""></div>
    <transition name="form-fade" mode="in-out">
        <section class="form_contianer">
            <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="90px" class="demo-ruleForm qf">
                <div class="login-left fl">
                    <el-form-item label="账号：" prop="username">
                        <el-input placeholder="用户名" v-model="loginForm.username" @keyup.enter.native="submitForm('loginForm')"><span></span></el-input>
                    </el-form-item>
                    <el-form-item label="密码：" prop="password">
                        <el-input type="password" placeholder="密码" v-model="loginForm.password" @keyup.enter.native="submitForm('loginForm')"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码：" prop="checknode">
                        <el-input placeholder="验证码" v-model="loginForm.checknode" @keyup.enter.native="submitForm('loginForm')"></el-input>
                        <div style="width: 76px; height: 36px;" id="codeimg"></div>
                        <el-checkbox v-model="checked" @keyup.enter.native="submitForm('loginForm')">记住密码</el-checkbox>
                    </el-form-item>
                </div>
                <div class="line fl"></div>
                <div class="login-right fl">
                    <el-form-item>
                        <el-button @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
                    </el-form-item>
                </div>
            </el-form>
            <p class="txt">淘亿批发管理系统登录</p>
        </section>
    </transition>
</div>
</template>
<script>
import { login, getAdminInfo } from "@/api/getData";
import { mapActions, mapState } from "vuex";
import Code from ".././assets/js/gverify.js";
import axios from "axios";
export default {
  data() {
    return {
      loginForm: {
        userid: "",
        username: "",
        password: "",
        verifycode: ""
      },
      verifyForm: {
        userid: "",
        user_name: "",
        pass_word: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ],
        checknode: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur"
          }
        ]
      },
      checked: false
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.loginForm.verifycode = new GVerify("codeimg");
      this.getCookie();
    });
  },
  created() {
    // this.checkLogin();
  },
  computed: {
    // ...mapState(['adminInfo']),
  },
  methods: {
    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    //读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "userName") {
            this.loginForm.username = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "userPwd") {
            this.loginForm.password = arr2[1];
          }
        }
      }
    },
    //清除cookie
    clearCookie: function() {
      this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    },
    // checkLogin() {
    //     //检查是否存在session
    //     //cookie操作方法在源码里有或者参考网上的即可
    //     if (!this.getCookie('session')) {
    //         //如果没有登录状态则跳转到登录页
    //         this.$router.push('/');
    //     } else {
    //         //否则跳转到登录后的页面
    //         this.$router.push('/message');
    //     }
    // },
    async submitForm(formName) {
      console.log(this.checked);
      //判断复选框是否被勾选 勾选则调用配置cookie方法
      if (this.checked == true) {
        //传入账号名，密码，和保存天数3个参数
        this.setCookie(this.loginForm.username, this.loginForm.password, 7);
      } else {
        this.clearCookie();
      }
      this.$refs[formName].validate(async valid => {
        if (valid) {
          if (this.loginForm.verifycode.validate(this.loginForm.checknode)) {
            axios
              .post("admin/login", {
                user_name: this.loginForm.username,
                pass_word: this.loginForm.password
              })
              .then(res => {
                const data = res.data;
                if (data.status == 200) {
                  this.$message({
                    type: "success",
                    message: "验证成功"
                  });
                  this.$router.push("manage");
                } else {
                  this.$message({
                    type: "error",
                    message: "登陆失败"
                  });
                  this.loginForm.verifycode.refresh();
                  return false;
                }
              })
              .catch(error => {
                console.log(error);
              });
          } else {
            this.$alert("验证码错误 请重新输入", "警告", {
              confirmButtonText: "确认",
              callback: action => {
                this.$router.go(0);
              }
            });
          }
        }
      });
    }
  },
  watch: {
    // "$route": 'checkLogin'
  }
};
</script>
<style lang="less" scoped>
@import "../style/mixin";
.qf {
  *zoom: 1;
}
.qf:after {
  content: "";
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
  margin-left: 12px;
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
