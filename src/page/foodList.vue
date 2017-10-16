<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="headAdv">
            <div class="listed">
                <span><strong>商家列表</strong></span>
            </div>
            <div class="searched">
                <div class="searched_left">
                    <el-select v-model="myvalue1" filterable placeholder="请选择" @change="test1">
                        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="searched_right">
                    <el-input icon="search" v-model="input2">
                        <el-button slot="append">查询</el-button>   <!--  @click="test2" -->
                    </el-input>
                </div>
                <div class="searched_middle">
                    <span>显示</span>&nbsp;
                    <el-select v-model="myvalue2" filterable style="margin-left:-30px;">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                    </el-select>
                </div>
            </div>
            <div class="recorded">
                <span><strong >总记录数 {{count}}</strong></span>
            </div>
        </div>
        <div class="table_container">
            <el-table :data="productList" highlight-current-row style="width: 100%">
                <el-table-column type="index" width="60">
                </el-table-column>
                <el-table-column property="product_name" label="商品名称" width="170">
                </el-table-column>
                <el-table-column property="product_code" label="商品编号" width="105">
                </el-table-column>
                <el-table-column property="product_class" label="分类" width="90">
                </el-table-column>
                <el-table-column property="product_puprice" label="拿货价" width="100">
                </el-table-column>
                <el-table-column property="product_shop" label="商家名称" width="100">
                </el-table-column>
                <el-table-column property="product_up" label="上架" width="70">
                </el-table-column>
                <el-table-column property="product_up_time" label="上架时间" width="180">
                </el-table-column>
                <el-table-column property="product_down_time" label="下架时间" width="180">
                </el-table-column>
                <el-table-column property="editname" label="操作" width="180">
                  <template scope="scope">
                    <el-button style="float:left; border:none;" size="small">[下架]</el-button>
                    <el-button style="float:left; border:none;" size="small">[编辑]</el-button>
                  </template>
                </el-table-column>
                <el-table-column property="product_down" label="下架" width="70">
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
import {
    getUserList,
    getUserCount
} from '@/api/getData'
export default {
    data() {
        return {
            tableData: [],
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
            input1: '',
            input2: '',
            myvalue1: '所有等级',
            myvalue2: '30',
            currentRow: null,
            offset: 0,
            limit: 20,
            count: 0,
            currentPage: 1,
            productList: [],
        }
    },
    components: {
        headTop,
    },
    computed: {
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

    created() {
        this.initData();

    },
    methods: {

        test1(myvalue1) {
            // console.log(myvalue1);
            if (this.myvalue1 == '' || this.myvalue1 == "所有等级") {
                this.productList = this.tableData;
            } else {
                this.productList = this.tableData.filter(item => {
                    return item.shop_type !== null && item.shop_type == this.myvalue1;
                });
            }
        },

        async initData() {
            var data = []
            let url = 'http://localhost:3000/products'
            let _this = this
            this.$http.get(url, {}).then(function(res) {
                for (let i = 0; i < res.data.length; i++) {

                    var obj = {}
                    obj.product_name = res.data[i].product_name
                    obj.product_code = res.data[i].product_code
                    obj.product_class = res.data[i].product_class
                    obj.product_puprice = res.data[i].product_puprice
                    obj.product_shop = res.data[i].product_shop
                    obj.product_up = res.data[i].product_up
                    obj.product_up_time = res.data[i].product_up_time
                    obj.product_down_time = res.data[i].product_down_time
                    obj.product_down = res.data[i].product_down
                    data[i] = obj
                }
                console.log(data);
                _this.tableData = data;
                console.log(_this.tableData);
                _this.productList = _this.tableData;
            }).catch(function(error) {
                console.log(error);
            })
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.offset = (val - 1) * this.limit;
            this.getUsers()
        },
        // handleEdit() {
        //     this.$router.push({
        //         path: '/member'
        //     });
        // },
        filterTag(value, row) {
            return row.levelname === value;
        },
      },
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
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
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
    left: 0px;
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

.el-table th>.cell {
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
    transition: all .3s;
}

.el-select .el-input .el-input__icon {
    color: #bfcbd9;
    font-size: 12px;
    transition: transform .3s;
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
