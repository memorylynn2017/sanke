<template>
<div class="fillcontain">
    <!-- <head-top></head-top> -->
    <div class="headAdv">
        <div class="listed">
            <span><strong>会员列表</strong></span>
        </div>
        <div class="searched">
            <div class="searched_left">
                <el-select v-model="levelName" placeholder="请选择"  @change="filterLevel()">
                    <el-option v-for="level in levelData" :key="level.value" :label="level.label" :value="level.value">
                    </el-option>
                </el-select>
            </div>
            <div class="searched_right">
                <!-- <el-input v-model="customer_id" placeholder="请输入要查询的客户Id"></el-input>
                <el-input v-model="username" placeholder="请输入要查询的用户名"></el-input>
                <el-button type="primary">查询</el-button> -->
                <el-input v-model="customer_id" placeholder="请输入要查询的客户Id">
                        <el-button slot="append" @click="searchUser()">查询</el-button>
                </el-input>
            </div>
            <div class="searched_middle">
                <span>显示</span>&nbsp;
                <el-select v-model="pageNum" filterable style="margin-left:-30px;">
                    <el-option v-for="page in pageData" :key="page.value" :label="page.label" :value="page.value" > </el-option>
                </el-select>
            </div>
        </div>
        <div class="recorded">
            <span>总记录数 {{count}}</span>
        </div>
    </div>
    <div class="table_container">
        <el-table :data="getUserListFilter" highlight-current-row style="width: 100%">
            <el-table-column property="customer_id" label="客户ID" width="100">
            </el-table-column>
            <el-table-column property="levelname" label="等级" width="100">
            </el-table-column>
            <el-table-column property="username" label="用户名" width="100">
            </el-table-column>
            <el-table-column property="areaname" label="地区" width="100">
            </el-table-column>
            <el-table-column property="purshname" label="订单" width="100">
            </el-table-column>
            <el-table-column property="countname" label="数量" width="100">
            </el-table-column>
            <el-table-column property="pricename" label="金额" width="110">
            </el-table-column>
            <el-table-column property="costname" label="余额" width="110">
            </el-table-column>
            <el-table-column property="registe_time" label="注册时间" width="110">
            </el-table-column>
            <el-table-column property="editname" label="操作" width="80">
                <template slot-scope="scope">
                        <el-button style="border:none;" size="small" @click="handleList">[详情]</el-button>
                    </template>
            </el-table-column>
            <el-table-column property="statusname" label="状态" width="80">
            </el-table-column>
        </el-table>
        <div class="Pagination" style="text-align: center;margin-top: 10px;opacity:0">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="20" layout="total, prev, pager, next" :total="count">
            </el-pagination>
        </div>
    </div>
</div>
</template>
<script>
// import headTop from '../components/headTop'
import { getUserList, getUserCount} from '@/api/getData'
import axios from 'axios'
export default {
    data() {
        return {
            tableData: [],
            levelData: [{
                value: '所有等级',
                label: '所有等级'
            }, {
                value: 'VIP',
                label: 'VIP'
            }, {
                value: '批发会员',
                label: '批发会员'
            }, {
                value: '注册会员',
                label: '注册会员'
            }],
            pageData: [{
                value: '选项1',
                label: '15'
            }, {
                value: '选项2',
                label: '30'
            }, {
                value: '选项3',
                label: '90'
            }, {
                value: '选项4',
                label: '120'
            }],
            customer_id: '',
            levelName: '请选择',
            pageNum:30,
            currentRow: null,
            offset: 0,
            limit: 20,
            count: 0,
            currentPage: 1,
            userList: []
        }
    },
    components: {
        // headTop,
    },
    computed: {
        getUserListFilter(){
            return this.userList.slice(0,this.pageNum);
        }
    },

    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            axios.get('/getUserList').then(res=>{
                if(res.data){
                    this.tableData = res.data;
                    this.userList = res.data;
                }
            }).catch(error=>{
                console.log(error);
            })
        },
        showNums(index){
            this.pageNum = parseInt(this.options2[index].label);
        },
        filterLevel() {
            if (this.levelName == '' || this.myvalue1 == "所有等级") {
                this.userList = this.tableData;
            } else {
                this.userList = this.tableData.filter(item => {
                    return item.levelName !== null && item.levelName == this.levelName;
                });
            }
        },
        searchUser(){
            if(this.customer_id){
                this.userList = this.tableData.filter((item)=>{
                    return item.customer_id == this.customer_id;
                });
            }
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.offset = (val - 1) * this.limit;
            this.getUsers()
        },
        handleList() {
            this.$router.push({
                path: '/member'
            });
        },
        filterTag(value, row) {
            return row.levelname === value;
        },
    }
}
</script>
<style lang="less" scoped>
@import '../style/mixin';
@import '../style/stable';
</style>
