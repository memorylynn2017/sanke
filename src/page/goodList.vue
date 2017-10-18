<template>
<div class="fillcontain">
    <!-- <head-top></head-top> -->
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
                    <el-button slot="append">查询</el-button>
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
        <el-table ref="multipleTable" :data="productList" highlight-current-row style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
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
            <!-- <el-table-column property="product_up" label="上架" width="80">
          </el-table-column> -->
            <el-table-column property="product_up_time" label="上架时间" width="140">
            </el-table-column>
            <el-table-column property="product_down_time" label="下架时间" width="140">
            </el-table-column>
            <el-table-column property="editname" label="操作" width="180">
                <template slot-scope="scope">
              <el-button style="float:left; border:none;" size="small" @click="handleEdit">[下架]</el-button>
              <el-button style="float:left; border:none;" size="small" @click="handleEdit">[编辑]</el-button>
            </template>
            </el-table-column>
            <el-table-column property="product_down" label="下架" width="80">
                <!-- 这里有用到scope -->
                <!-- <template scope="scope">
                      <el-switch v-model="oncontrol" on-text="开" off-text="关" on-color="#13ce66" off-color="#ff4949">
                      </el-switch>
               </template> -->
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
import {getUserList, getUserCount} from '@/api/getData'
import axios from 'axios'
export default {
    data() {
        return {
            oncontrol: true,
            tableData: [

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
            multipleSelection: []
        }
    },
    components: {
        // headTop,
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

    mounted() {
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
        handleSelectionChange(val) {
        this.multipleSelection = val;
      },

        async initData() {
            axios.get('getGoodsList').then(res=>{
                this.tableData = res.data;
                this.productList = res.data;
            }).catch(error=>{
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
        handleEdit() {
            this.$router.push({
                path: '/productList'
            });
        },
        filterTag(value, row) {
            return row.levelname === value;
        },
      },
    }
    </script>



<style lang="less" scoped>
@import '../style/mixin';
@import '../style/stable';
</style>
