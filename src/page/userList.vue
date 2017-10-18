<template>
<div class="fillcontain">
    <head-top></head-top>
    <div class="headAdv">
        <div class="listed">
            <span><strong>会员列表</strong></span>
        </div>
        <div class="searched">
            <div class="searched_left">
                <el-select v-model="myvalue1" filterable placeholder="请选择" @change="test1">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
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
                <el-select v-model="myvalue2" filterable style="margin-left:-30px;">
                    <el-option v-for="(item,index) in options2" :key="item.value" :label="item.label" :value="item.value" @click="showNums(index)"> </el-option>
                </el-select>
            </div>
        </div>
        <div class="recorded">
            <span><strong >总记录数 {{count}}</strong></span>
        </div>
    </div>
    <!-- 以后需要从后台模拟数据出来 -->
    <!-- :filters="[{ text: 'VIP', value: 'VIP' }, { text: '批发会员', value: '批发会员' },{ text: '注册会员', value: '注册会员' }]" :filter-method="filterTag" -->
    <div class="table_container">
        <el-table :data="getUserListFilter" highlight-current-row style="width: 100%">
            <el-table-column type="index" width="60">
            </el-table-column>
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
                <template scope="scope">
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
import headTop from '../components/headTop'
import { getUserList, getUserCount} from '@/api/getData'
import axios from 'axios'
export default {
    data() {
        return {
            tableData: [],
            options1: [{
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
            options2: [{
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
            myvalue1: '所有等级',
            myvalue2: '30',
            currentRow: null,
            offset: 0,
            limit: 20,
            count: 0,
            currentPage: 1,
            userList: [],
            pageNum:30
        }
    },
    components: {
        headTop,
    },
    computed: {
        getUserListFilter(){
            return this.userList.slice(0,this.pageNum);
        }
        // tableFilter() {
        //     return this.myvalue1.length ? this.tableData.filter(item => item.levelname.indexof(this.myvalue1) > -1) : this.tableData;
        // }
    },

    // 创建后的钩子函数

    // 注意这个循环逻辑

    // this.tableData.forEach((e, i) => {
    //     if (e.levelname == myvalue1) {
    //         tablearray.push(this.tableData[i]);
    //     }
    //     // console.log(tablearray);
    //     this.tableData = tablearray;
    // })

    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            /* var data = []
            let url = 'http://localhost:3000/tableData'
            let _this = this
            this.$http.get(url, {}).then(function(res) {
                for (let i = 0; i < res.data.length; i++) {

                    var obj = {}
                    obj.customer_id = res.data[i].customer_id
                    obj.levelname = res.data[i].levelname
                    obj.areaname = res.data[i].areaname
                    obj.purshname = res.data[i].purshname
                    obj.username = res.data[i].username
                    obj.countname = res.data[i].countname
                    obj.pricename = res.data[i].pricename
                    obj.costname = res.data[i].costname
                    obj.registe_time = res.data[i].registe_time
                    obj.statusname = res.data[i].statusname
                    data[i] = obj
                }
                console.log(data);
                _this.tableData = data;
                console.log(_this.tableData);
                _this.userList = _this.tableData;
            }).catch(function(error) {
                console.log(error);
            }) */
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
        test1(myvalue1) {
            if (this.myvalue1 == '' || this.myvalue1 == "所有等级") {
                this.userList = this.tableData;
            } else {
                this.userList = this.tableData.filter(item => {
                    return item.levelname !== null && item.levelname == this.myvalue1;
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

.fl {
    float: left;
}

.fr {
    float: right;
}

.table_container {
    padding: 20px;
}

.el-table .cell {
    white-space: normal;
    word-break: break-all;
    line-height: 24px;
    text-align: center;
}

.el-table {
    font-size: 13px;
    color: #1f2d3d;
}

.fillcontain .headAdv {
    display: flex;
    justify-content: space-between;
    height: 45px;
    line-height: 45px;
}

.headAdv .listed {
    font-size: 14px;
    display: inline-block;

    margin-left: 20px;
}

.headAdv .recorded {
    display: inline-block;
    font-size: 14px;
}

.headAdv .searched {
    display: inline-block;
    text-align: center;
    width: 550px;
    height: 45px;
}

.headAdv .el-select-dropdown {
    width: 95px;
}

.headAdv .el-input__inner {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 50px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid #bfcbd9;
    box-sizing: border-box;
    color: #1f2d3d;
    font-size: inherit;
    height: 32px;
    line-height: 1;
    outline: 0;
    padding: 3px 10px;
    transition: border-color 0.2s cubic-bezier(.645, .045, .355, 1);
}

.headAdv .searched .searched_left .el-input__inner {
    border-radius: 5px;
}

.headAdv .searched .searched_middle .el-input__inner {
    width: 65px;
    border-radius: 5px;
}

.headAdv .searched .el-select .el-input {
    width: 112px;
    height: 45px;
    border-radius: 50px;
}

.headAdv .searched .searched_left {
    display: inline-block;
    position: relative;
    left: 0;
    top: 2px;
}

.headAdv .searched .searched_right {
    display: inline-block;
    position: relative;
    left: 5px;
}

.headAdv .searched .searched_middle {
    display: inline-block;
    position: relative;
    top: 3px;
    left: 40px;
}

.headAdv .recorded {
    display: inline-block;
    width: 170px;
    height: 50px;
}

.el-table th {
    white-space: nowrap;
    overflow: hidden;
    background-color: #50606a;
    text-align: left;
}

.el-table th > .cell {
    background-color: #4f616a;
}

.el-table__footer-wrapper thead div,
.el-table__header-wrapper thead div {
    background-color: #eef1f6;
    color: #1f2d3d;
    color: white;
}

.el-input-group__append {
    background-color: rgb(0, 209, 186);
    color: #fff;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border-radius: 50px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border: 1px solid #bfcbd9;
    padding: 0 10px;
    width: 1px;
    white-space: nowrap;
}

.el-input-group__prepend {}

.el-input__icon {
    position: absolute;
    width: 35px;
    height: 100%;
    left: 2px;
    top: 2px;
    text-align: center;
    color: #bfcbd9;
    transition: all 0.3s;
}

.el-select .el-input .el-input__icon {
    color: #bfcbd9;
    font-size: 12px;
    transition: transform 0.3s;
    -ms-transform: translateY(-50%) rotate(180deg);
    transform: translateY(-50%) rotateZ(180deg);
    line-height: 16px;
    left: 80px;
    top: 52%;
    cursor: pointer;
}

.searched_middle .el-select .el-input .el-input__icon {
    left: 55px;
}
</style>
