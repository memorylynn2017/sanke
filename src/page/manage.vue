<!-- -->
<template>
<div class="manage_page fillcontain">
    <div class="advTop qf">
        <div class="advTop_left fl"><a href="#">淘亿批发管理系统 V1.0</a></div>
        <div class="advTop_right fr">
            <i class="iconfont icon-home" style="color:#fff;"></i>
            <i class="iconfont icon-user" style="color:#fff;"></i>
            <i class="iconfont icon-tuichu" style="color:#fff;" @click="handleExit"></i>
        </div>
    </div>
    <el-row style="height: 100%;">
        <el-col :span="4" style="min-height: 100%; background-color: #293641;">
            <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
                <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">会员管理</template>
                    <el-menu-item index="userList">会员列表</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">商家管理</template>
                    <el-menu-item index="shopList">商家列表</el-menu-item>
                    <!-- <el-menu-item index="addShop">添加商家</el-menu-item> -->
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">商品管理</template>
                    <el-menu-item index="foodList">商品列表</el-menu-item>
                    <!-- <el-menu-item index="addGoods">添加商品</el-menu-item> -->
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">订单管理</template>
                    <el-menu-item index="orderList">订单列表</el-menu-item>
                    <!-- <el-menu-item index="orderList">添加订单</el-menu-item> -->
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">发货管理</template>
                    <el-menu-item index="#">已入库</el-menu-item>
                    <el-menu-item index="#">待出库</el-menu-item>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title">图表</template>
                    <el-menu-item index="visitor">用户分布</el-menu-item>
                    <el-menu-item index="newMember">用户数据</el-menu-item>
                </el-submenu>
                <el-submenu index="8">
                    <template slot="title">系统设置</template>
                    <el-menu-item index="adminSet">管理员设置</el-menu-item>
                </el-submenu>
                <!-- <el-submenu index="9">
                    <template slot="title">安全管理</template>
                </el-submenu> -->
            </el-menu>
        </el-col>
        <el-col :span="20" style="height: 100%;overflow: auto;">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </el-col>
    </el-row>
</div>
</template>
<script>
import {
    signout
} from '@/api/getData'
import {
    mapActions,
    mapState
} from 'vuex'
export default {
    created() {
        if (!this.adminInfo.id) {
            this.getAdminData()
        }
    },
    methods: {
        ...mapActions(['getAdminData']),
        async handleExit() {
            const res = await signout();
            if (res.status == 1) {
                this.$message({
                    type: 'success',
                    message: '退出成功'
                });
                this.$router.push('/');
            } else {
                this.$message({
                    type: 'error',
                    message: res.message
                });
            }
        },
    },

    computed: {
        //状态的计算属性集合之adminInfo
        ...mapState(['adminInfo']),
        // 标准激活
        defaultActive: function() {
            return this.$route.path.replace('/', '');
        }
    },
}
</script>
<style lang="less" scoped>
@import '../style/mixin';
@import '//at.alicdn.com/t/font_434872_krcqu8kwibyphkt9.css';

.manage_page {
    min-width: 980px;
}

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

.advTop {
    background: url(".././assets/img/top_1.png") repeat-x;
}

.advTop .advTop_left {
    /*border: 1px solid gray;*/
    width: 300px;
    height: 50px;
    line-height: 45px;
    padding-left: 10px;
}

.advTop .advTop_left a {
    font-family: "Microsoft YaHei", Serif;
    color: #fff;
}

.advTop .advTop_right {
    /*border: 1px solid gray;*/
    width: 150px;
    height: 45px;
    line-height: 45px;
    padding-left: 10px;
}

.advTop .advTop_right i {
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
}

.el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 100%;
}
</style>
