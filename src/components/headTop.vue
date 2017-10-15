<!-- 头部组件区域 -->
<template>
    <div class="header_container">
        <el-breadcrumb separator="/" style="line-height:3;">
            <img src=".././assets/img/timg.jpg" class="avator" style="float:left;margin-right: 15px;height:40px;">
            <!-- 这里写路由跳转 -->
            <el-breadcrumb-item :to="{ path: '/manage' }">早上好，XXX</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in $route.meta" key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- <el-dropdown @command="handleCommand" menu-align='start'>
            <img :src="baseImgPath + adminInfo.avatar" class="avator">
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="home">首页</el-dropdown-item>
                <el-dropdown-item command="singout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown> -->
    </div>
</template>
<script>

// 这个引用不到
// import { baseImgPath } from '@/config/env'


// import { signout } from '@/api/getData'
// import { mapActions, mapState } from 'vuex'


export default {
    data() {
        return {
            // baseImgPath,
        }
    },
    created() {
        // if (!this.adminInfo.id) {
        //     this.getAdminData()
        // }
    },
    computed:{
        // ...mapState(['adminInfo']),
    },
    methods: {
        // ...mapActions(['getAdminData']),
        // async handleCommand(command) {
            // if (command == 'home') {
            //     this.$router.push('/manage');
            // } else if (command == 'singout') {
            //     const res = await signout()
            //     if (res.status == 1) {
            //         this.$message({
            //             type: 'success',
            //             message: '退出成功'
            //         });
            //         this.$router.push('/');
            //     } else {
            //         this.$message({
            //             type: 'error',
            //             message: res.message
            //         });
            //     }
            // }

            // if (command == 'singout') {
            //     const res = await signout();
            //     if (res.status == 1) {
            //         this.$message({
            //             type: 'success',
            //             message: '退出成功'
            //         });
            //         this.$router.push('/');
            //     } else {
            //         this.$message({
            //             type: 'error',
            //             message: res.message
            //         });
            //     }
            // }
          
    }
}

</script>
<style lang="less">
@import '../style/mixin';
.qf {
    *zoom: 1;
}

.qf:after {
    content: '';
    display: table;
    clear: both;
}


.header_container {
    background-color: #EFF2F7;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
}

.avator {
    .wh(36px, 36px);
    border-radius: 50%;
    margin: 6px 18px 0px 0px;
}

.el-dropdown-menu__item {
    text-align: center;
}

</style>
