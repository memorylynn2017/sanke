<template>
    <div class="fillcontain">
        <!-- <head-top></head-top> -->
        <div class="headAdv">
            <div class="listed">
                <!-- <span><strong>商家列表</strong></span> -->
            </div>
            <div class="searched">
                <div class="btn" style="position:relative;left:-92px;display:inline-block;">
                    <el-button>新建商家</el-button>
                    <el-button>更新数据</el-button>
                </div>
                <div class="searched_left">
                    <el-select v-model="levelName" placeholder="请选择" @change="filterLevel()">
                        <el-option v-for="level in levelData" :key="level.value" :label="level.label" :value="level.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="searched_right">
                    <el-input v-model="shop_id" placeholder="请输入要查询的客户Id">
                        <el-button slot="append" @click="searchUser()">查询</el-button>
                    </el-input>
                </div>
                <div class="searched_middle">
                    <span class="pashow">显示</span>&nbsp;
                    <!-- <el-select v-model="pageNum" filterable style="margin-left:-30px;">
                        <el-option v-for="page in pageData" :key="page.value" :label="page.label" :value="page.value"> </el-option>
                    </el-select> -->
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" :page-sizes="[15,30,60,90]" layout="sizes" :total="count" class="patag">
                    </el-pagination>
                </div>
            </div>
            <div class="recorded">
                <span>总记录数 {{Message}}</span>
            </div>
        </div>
        <div class="table_container">
            <el-table :data="getshopListFilter" highlight-current-row style="width: 100%">
                <el-table-column property="shop_id" label="商家ID" width="100" sortable>
                </el-table-column>
                <el-table-column property="shop_type" label="类型" width="100" sortable>
                </el-table-column>
                <el-table-column property="shop_market" label="商家名称" width="135" sortable>
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
                <el-table-column property="shop_status" label="状态" width="75">
                </el-table-column>
                <el-table-column property="editname" label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button style="float:left; border:none;" size="small" @click="handleList">[编辑]</el-button>
                        <el-button style="float:left; display:inline-block; border:none;" size="small">[抓取商品]</el-button>
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
// import headTop from '../components/headTop'
import {
    getUserList,
    getUserCount
} from '@/api/getData'
import axios from 'axios'
export default {
    data() {
        return {
            tableData: [],
            levelData: [{
                value: '所有分类',
                label: '所有分类'
            }, {
                value: 'A类',
                label: 'A类'
            }, {
                value: 'B类',
                label: 'B类'
            }, {
                value: 'C类',
                label: 'C类'
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
            shop_id: '',
            levelName: '所有分类',
            currentRow: null,
            begin: 0,
            end: 0,
            limit: 20,
            count: 0,
            currentPage: 1,
            pageSize: 15,
            shopList: []
        }
    },
    components: {
        // headTop,
    },
    computed: {
        getshopListFilter() {
            return this.shopList.slice(this.begin, this.end);
        },
        Message: function() {
            return this.shopList.length
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            axios.get('/getShopList').then(res => {
                if (res.data) {
                    //临时表
                    this.tableData = res.data;
                    //数据表
                    this.shopList = res.data;
                    this.count = this.shopList.length;
                    this.begin = 0;
                    this.end = this.pageSize;
                    console.log(this.shopList)
                    console.log('\separter');
                    console.log(this.shopList.slice(this.begin, this.end));
                }
            }).catch(error => {
                console.log(error);
            })
        },
        showNums(index) {
            this.pageNum = parseInt(this.options2[index].label);
        },
        filterLevel(levelName) {
            if (this.levelName == '' || this.levelName == "所有分类") {
                this.shopList = this.tableData;
            } else {
                this.shopList = this.tableData.filter(item => {
                    return item.shop_type !== null && item.shop_type == this.levelName;
                });
            }
        },
        showNums(index) {
            this.pageNum = parseInt(this.options2[index].label);
        },
        searchUser() {
            // 这是一种精确查询
            // if (this.shop_id) {
            //     this.shopList = this.tableData.filter((item) => {
            //         return item.shop_id == this.shop_id;
            //     });
            // }
            // 这是一种模糊查询
            if (this.shop_id) {
                this.shopList = this.tableData.filter((item) => {
                    return item.shop_id.toLowerCase().indexOf(this.shop_id.toLowerCase()) !== -1

                });
            }
        },
        // handleSizeChange(val) {
        //     console.log(`每页 ${val} 条`);
        // },
        // handleCurrentChange(val) {
        //     this.currentPage = val;
        //     this.offset = (val - 1) * this.limit;
        //     this.getUsers()
        // },

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
        handleList() {
            this.$router.push({
                path: '/shopDetail'
            });
        },
        filterTag(value, row) {
            return row.levelname === value;
        },
    }
}

</script>
<style lang="less">
@import '../style/stable';
.btn .el-button {
    padding: 7px 15px;
    background-color: #f5f5f5;
}

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
