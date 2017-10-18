<template>
    <div class="fillcontain">
        <!-- <head-top></head-top> -->
        <div class="headAdv">
            <div class="listed">
                <span><strong>订单列表</strong></span>
            </div>
            <div class="searched">
                <div class="searched_left">
                    <el-select v-model="myvalue1" filterable placeholder="请选择" @change="test1">
                        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                      <!-- @change="test2" -->
                    <el-select v-model="myvalue2" filterable placeholder="请选择" >
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <!-- @change="test3" -->
                    <el-select v-model="myvalue3" filterable placeholder="请选择" >
                        <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="searched_right">
                    <el-input icon="search" v-model="input">
                        <el-button slot="append">查询</el-button>
                    </el-input>
                </div>
                <div class="searched_middle">
                    <span>显示</span>&nbsp;
                    <el-select v-model="myvalue4" filterable style="margin-left:-30px;">
                        <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                    </el-select>
                </div>
            </div>
            <div class="recorded">
                <span>总记录数 {{Message}}</span>
            </div>
        </div>
        <div class="table_container">
            <el-table :data="purchList" highlight-current-row style="width:100%">
                <el-table-column property="purchase_num" label="订单号" width="100">
                </el-table-column>
                <el-table-column property="purchase_count" label="数量" width="90">
                </el-table-column>
                <el-table-column property="purchase_price" label="金额" width="90">
                </el-table-column>
                <el-table-column property="purchase_freight" label="运费" width="90">
                </el-table-column>
                <el-table-column property="purchase_key" label="会员编号" width="100">
                </el-table-column>
                <el-table-column property="purchase_goodsman" label="收货人" width="90">
                </el-table-column>
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
                <el-table-column property="editname" label="处理" width="90">
                    <template slot-scope="scope">
                        <el-button style="float:left; border:none;" size="small">[处理]</el-button>
                    </template>
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
import axios from 'axios'
export default {
    data() {
        return {
            oncontrol: true,
            purchList: [

            ],
            tableData:[
            ],
            options1: [{
                value: 'A类',
                label: 'A类'
            }, {
                value: 'B类',
                label: 'B类'
            }, {
                value: 'C类',
                label: 'C类'
            }, {
                value: 'D类',
                label: 'D类'
            }, {
                value: 'T类',
                label: 'T类'
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
            input: '',
            myvalue1: '所有等级',
            myvalue2: '订单状态',
            myvalue3: '发货状态',
            myvalue4: '30',
            currentRow: null,
            offset: 0,
            limit: 20,
            count: 0,
            currentPage: 1,
            purchList: [],
            multipleSelection: []
        }
    },
    components: {
        // headTop,
    },
    computed: {
        Message:function(){ return this.purchList.length }
    },


    mounted() {
        this.initData();

    },
    methods: {

        test1(myvalue1) {
            if (this.myvalue1 == '' || this.myvalue1 == "所有等级") {
                this.purchList = this.tableData;
            } else {
                this.purchList = this.tableData.filter(item => {
                    return item.shop_type !== null && item.shop_type == this.myvalue1;
                });
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },

        async initData() {
            axios.get('getPurchasList').then(res => {
                this.tableData = res.data;
                this.purchList = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.offset = (val - 1) * this.limit;
            this.getUsers()
        },
        filterTag(value, row) {
            return row.levelname === value;
        },
    },
}

</script>
<style lang="less" >
@import '../style/mixin';
@import '../style/stable';

</style>
