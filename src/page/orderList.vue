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
                    <el-select v-model="myvalue2" filterable placeholder="请选择" @change="test2">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="myvalue3" filterable placeholder="请选择" @change="test3">
                        <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="searched_right">
                    <el-input icon="search" v-model="input2">
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
                <span>总记录数 {{count}}</span>
            </div>
        </div>
        <div class="table_container">
            <el-table :data="productList" highlight-current-row style="width:100%">
                <el-table-column property="purchase_num" label="订单号" width="100">
                </el-table-column>
                <el-table-column property="purchase_count" label="数量" width="100">
                </el-table-column>
                <el-table-column property="purchase_price" label="金额" width="100">
                </el-table-column>
                <el-table-column property="purchase_freight" label="运费" width="100">
                </el-table-column>
                <el-table-column property="purchase_key" label="会员编号" width="100">
                </el-table-column>
                <el-table-column property="purchase_goodsman" label="收货人" width="90">
                </el-table-column>
                <el-table-column property="purchase_leval" label="等级" width="100">
                </el-table-column>
                <el-table-column property="purchase_area" label="地区" width="100">
                </el-table-column>
                <el-table-column property="purchase_area" label="配送方式" width="100">
                </el-table-column>
                <el-table-column property="purchase_purstatus" label="订单状态" width="100">
                </el-table-column>
                <el-table-column property="purchase_senstatus" label="发货状态" width="100">
                </el-table-column>
                <el-table-column property="purchase_times" label="下架时间" width="135">
                </el-table-column>
                <el-table-column property="editname" label="处理" width="180">
                    <template scope="scope">
                        <el-button style="float:left; border:none;" size="small">[编辑]</el-button>
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
            productList: [

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
            input1: '',
            input2: '',
            myvalue1: '所有等级',
            myvalue2: '订单状态',
            myvalue3: '发货状态',
            myvalue4: '30',
            currentRow: null,
            offset: 0,
            limit: 20,
            count: 0,
            currentPage: 1,
            productList: [],
            multipleSelection: []
        }
    },
    components: {
        // headTop,
    },
    computed: {},


    mounted() {
        this.initData();

    },
    methods: {

        test1(myvalue1) {
            if (this.myvalue1 == '' || this.myvalue1 == "所有等级") {
                this.productList = this.tableData;
            } else {
                this.productList = this.tableData.filter(item => {
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
                this.productList = res.data;
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
<style lang="less">
@import '../style/mixin';
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

.el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #bfcbd9;
    border-radius: 20px;
    box-sizing: border-box;
    width: 18px;
    height: 18px;
    background-color: #fff;
    z-index: 1;
    transition: border-color 0.25s cubic-bezier(.71,-.46,.29,1.46),background-color 0.25s cubic-bezier(.71,-.46,.29,1.46);
}

</style>
