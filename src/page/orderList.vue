<template>
<div class="fillcontain">
    <!-- <head-top></head-top> -->
    <div class="headAdv">
        <div class="listed">
            <span><strong>订单列表</strong></span>
        </div>
        <div class="searched">
            <div class="searched_left">
                <el-select v-model="purvalue1" filterable placeholder="请选择" @change="filterLevel1">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="purvalue2" filterable placeholder="请选择" @change="filterLevel2">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="purvalue3" filterable placeholder="请选择" @change="filterLevel3">
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="searched_right">
                <el-input v-model="purchase_num" placeholder="请输入要查询的订单Id">
                    <el-button slot="append" @click="searchUser()">查询</el-button>
                </el-input>
            </div>
            <div class="searched_middle">
                <span class="pashow">显示</span>&nbsp;
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" :page-sizes="[15,30,60,90]" layout="sizes" :total="count" class="patag">
                </el-pagination>
            </div>
        </div>
        <div class="recorded">
            <span>总记录数 {{Message}}</span>
        </div>
    </div>
    <div class="table_container">
        <el-table :data="purchListFilter" highlight-current-row style="width:100%">
            <el-table-column property="purchase_num" label="订单号" width="100" sortable>
            </el-table-column>
            <el-table-column property="purchase_count" label="数量" width="90" sortable>
            </el-table-column>
            <el-table-column property="purchase_price" label="金额" width="90" sortable>
            </el-table-column>
            <el-table-column property="purchase_freight" label="运费" width="90" sortable>
            </el-table-column>
            <el-table-column property="purchase_key" label="会员编号" width="120">
            </el-table-column>
            <!-- <el-table-column property="purchase_goodsman" label="收货人" width="90">
            </el-table-column> -->
            <el-table-column property="purchase_leval" label="等级" width="100">
            </el-table-column>
            <el-table-column property="purchase_area" label="地区" width="100">
            </el-table-column>
            <!-- <el-table-column property="purchase_areasend" label="配送方式" width="100">
                </el-table-column> -->
            <el-table-column property="purchase_purstatus" label="订单状态" width="90">
            </el-table-column>
            <el-table-column property="purchase_senstatus" label="发货状态" width="90">
            </el-table-column>
            <el-table-column property="purchase_times" label="下架时间" width="160">
                </el-table-column>
            <el-table-column property="editname" label="处理" width="80">
                <template slot-scope="scope">
                        <el-button style="float:left; border:none;" size="small" @click="handleList">[处理]</el-button>
                    </template>
            </el-table-column>
        </el-table>
        <div class="pagination_bottom">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" :page-sizes="[15,30,60,90]" layout="total, sizes, prev, pager, next, jumper" :total="count" style="float: right;">
            </el-pagination>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            oncontrol: true,
            purchList: [

            ],
            tableData: [],
            options1: [{
                value: '所有等级',
                label: '所有等级'
            }, {
                value: '批发会员',
                label: '批发会员'
            }, {
                value: 'VIP',
                label: 'VIP'
            }, {
                value: '注册会员',
                label: '注册会员'
            }],
            options2: [{
                value: '未付款',
                label: '未付款'
            }, {
                value: '已付款',
                label: '已付款'
            }, {
                value: '已取消',
                label: '已取消'
            }],
            options3: [{
                value: '未发货',
                label: '未发货'
            }, {
                value: '已打单',
                label: '已打单'
            }, {
                value: '已发货',
                label: '已发货'
            }, {
                value: '已完结',
                label: '已完结'
            }, {
                value: '已作废',
                label: '已作废'
            }],
            options4: [{
                value: '选项1',
                label: '30'
            }, {
                value: '选项2',
                label: '60'
            }, {
                value: '选项3',
                label: '90'
            }, {
                value: '选项4',
                label: '120'
            }],
            purchase_num: '',
            input: '',
            purvalue1: '所有等级',
            purvalue2: '订单状态',
            purvalue3: '发货状态',
            myvalue4: '30',
            currentRow: null,
            begin: 0,
            end: 0,
            limit: 20,
            count: 0,
            currentPage: 1,
            pageSize: 15,
            purchList: [],
            multipleSelection: []
        }
    },
    components: {
        // headTop,
    },
    computed: {
        Message: function() {
            return this.purchList.length
        },
        purchListFilter() {
            return this.purchList.slice(this.begin, this.end);
        }
    },


    mounted() {
        this.initData();

    },
    methods: {

        filterLevel1(purvalue1) {
            // console.log(levelName);
            if (this.purvalue1 == '' || this.purvalue1 == "所有等级") {
                this.purchList = this.tableData;
            } else {
                this.purchList = this.tableData.filter(item => {
                    return item.purchase_leval !== null && item.purchase_leval == this.purvalue1;
                });
            }
        },
        filterLevel2(purvalue2) {
            // console.log(levelName);
            if (this.purvalue2 == '' || this.purvalue2 == "订单状态") {
                this.purchList = this.tableData;
            } else {
                this.purchList = this.tableData.filter(item => {
                    return item.purchase_purstatus !== null && item.purchase_purstatus == this.purvalue2;
                });
            }
        },
        filterLevel3(purvalue3) {
            // console.log(levelName);
            if (this.purvalue3 == '' || this.purvalue3 == "发货状态") {
                this.purchList = this.tableData;
            } else {
                this.purchList = this.tableData.filter(item => {
                    return item.purchase_senstatus !== null && item.purchase_senstatus == this.purvalue3;
                });
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleList() {
            this.$router.push({
                path: '/orderDetail'
            });
        },
        async initData() {
            axios.get('getPurchasList').then(res => {
                if (res.data) {
                    //临时表
                    this.tableData = res.data;
                    //数据表
                    this.purchList = res.data;
                    this.count = this.purchList.length;
                    this.begin = 0;
                    this.end = this.pageSize;
                    console.log(this.purchList)
                    console.log('\separter');
                    console.log(this.purchList.slice(this.begin, this.end));
                }
            }).catch(error => {
                console.log(error);
            })
        },
        showNums(index) {
            this.pageNum = parseInt(this.options2[index].label);
        },
        searchUser() {
            if (this.purchase_num) {
                // this.userList = this.tableData.filter((item) => {
                //     return item.customer_id == this.customer_id;
                // });
                this.purchList = this.tableData.filter((item) => {
                    return item.purchase_num.toLowerCase().indexOf(this.purchase_num.toLowerCase()) !== -1

                });
            }
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageSize = val;
            this.begin = (this.currentPage - 1) * this.pageSize;
            this.end = this.currentPage * this.pageSize;
        },

        handleCurrentChange(val) {
            this.currentPage = val;
            this.begin = (this.currentPage - 1) * this.pageSize;
            this.end = this.currentPage * this.pageSize;
            console.log(this.currentPage);
            console.log(this.begin);
        },
        filterTag(value, row) {
            return row.levelname === value;
        },
    },
}
</script>
<style lang="less">
@import '../style/stable';
.patag {
    display: inline-block;
    float: left;
    position: relative;
    top: -3px;
    left: 5px;
}

.pashow {
    display: inline-block;
    float: left;
}
</style>
