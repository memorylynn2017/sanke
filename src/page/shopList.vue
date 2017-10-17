<template>
<div class="fillcontain">
    <head-top></head-top>
    <div class="headAdv">
        <!-- <div class="listed">
                <span><strong>商家列表</strong></span>
            </div> -->
        <div class="searched" style="width:850px;">
            <div class="searched_left">
                <el-button style="background-color:#80808033;">新建商家</el-button>
                <el-button style="background-color:#80808033;">更新数据</el-button>
                <el-select v-model="myvalue1" filterable placeholder="请选择" @change="test1" style="margin-left:40px">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="searched_right_r">

                <el-input icon="search" v-model="input2">
                    <el-button slot="append">查询</el-button>
                </el-input>
            </div>
            <div class="searched_right_l">
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
    <!-- 以后需要从后台模拟数据出来 -->
    <!-- :filters="[{ text: 'VIP', value: 'VIP' }, { text: '批发会员', value: '批发会员' },{ text: '注册会员', value: '注册会员' }]" :filter-method="filterTag" -->
    <div class="table_container">
        <el-table :data="shopList" highlight-current-row style="width: 100%">
            <!-- <el-table-column type="index" width="60">
                </el-table-column> -->
            <el-table-column property="shop_id" label="商家ID" width="80">
            </el-table-column>
            <el-table-column property="shop_type" label="类型" width="70">
            </el-table-column>
            <el-table-column property="shop_market" label="商家名称" width="135">
            </el-table-column>
            <el-table-column property="shop_area" label="所在市场" width="100">
            </el-table-column>
            <el-table-column property="shop_ranking" label="商家排名" width="100">
            </el-table-column>
            <el-table-column property="shop_time" label="最后抓取商品时间" width="180">
            </el-table-column>
            <el-table-column property="shop_time" label="进驻时间" width="180">
            </el-table-column>
            </el-table-column>
            <el-table-column property="shop_status" label="状态" width="75 ">
            </el-table-column>
            <el-table-column property="editname" label="操作" width="180">
                <template scope="scope">
                        <el-button style="float:left; border:none;" size="small">[编辑]</el-button>
                        <el-button style="float:left; display:inline-block; border:none;" size="small">[抓取商品]</el-button>
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
import headTop from '../components/headTop'
import {getUserList, getUserCount} from '@/api/getData'
import axios from 'axios'
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
            shopList: [],
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

    mounted() {
        this.initData();

    },
    methods: {

        test1(myvalue1) {
            // console.log(myvalue1);
            if (this.myvalue1 == '' || this.myvalue1 == "所有等级") {
                this.shopList = this.tableData;
            } else {
                this.shopList = this.tableData.filter(item => {
                    return item.shop_type !== null && item.shop_type == this.myvalue1;
                });
            }
        },
        // test2(input2) {
        //     this.$http.get("http://localhost:3000/bannerList").then(response => {
        //         console.log(response.data);
        //     }, response => {})

        //     let tablearray = [];
        //     if (this.input2 !== '') {
        //         tablearray = this.tableData.filter(item => {
        //             return item.levelname !== null && item.levelname == this.input2
        //         });
        //         console.log(tablearray);

        //     } else {}
        // },
        // async initData() {
        //     try {
        //         const countData = await getUserCount();
        //         if (countData.status == 1) {
        //             this.count = countData.count;
        //         } else {
        //             throw new Error('获取数据失败');
        //         }
        //         this.getUsers();

        //     } catch (err) {
        //         console.log('获取数据失败', err);
        //     }
        // },

        async initData() {
            /* var data = []
            let url = 'http://localhost:3000/shopForm'
            let _this = this
            this.$http.get(url, {}).then(function(res) {
                for (let i = 0; i < res.data.length; i++) {

                    var obj = {}
                    obj.shop_id = res.data[i].shop_id
                    obj.shop_type = res.data[i].shop_type
                    obj.shop_name = res.data[i].shop_name
                    obj.shop_market = res.data[i].shop_market
                    obj.shop_area = res.data[i].shop_area
                    obj.shop_ranking = res.data[i].shop_ranking
                    obj.shop_time = res.data[i].shop_time
                    obj.shop_status = res.data[i].shop_status
                    data[i] = obj
                }
                console.log(data);
                _this.tableData = data;
                console.log(_this.tableData);
                _this.shopList = _this.tableData;
            }).catch(function(error) {
                console.log(error);
            }) */
            axios.get().then(res=>{
                if(res.data){
                    this.shopList = res.data;
                    this.tableData = res.data;
                }
            }).catch(error=>{
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
        // async getUsers() {
        //     const Users = await getUserList({ offset: this.offset, limit: this.limit });
        //     this.tableData = [];
        //     Users.forEach(item => {
        //         const tableData = {};
        //         tableData.username = item.username;
        //         tableData.registe_time = item.registe_time;
        //         tableData.city = item.city;
        //         this.tableData.push(tableData);
        //     })
        // },

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
    min-width: 900px;
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
    width: 850px;
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

.headAdv .searched .searched_right_l .el-input__inner {
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

.headAdv .searched .searched_right_r {
    display: inline-block;
    position: relative;
    left: 5px;
}

.headAdv .searched .searched_right_l {
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

.searched_right_l .el-select .el-input .el-input__icon {
    left: 55px;
}
</style>
