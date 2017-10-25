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
                <el-table-column property="shop_name" label="商家名称" width="135" sortable>
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
                <el-table-column property="editname" label="操作" width="170">
                    <template slot-scope="scope">
                        <!-- @click="handleEdit(scope.$index, scope.row)" -->
                        <el-button style="float:left; display:inline-block; border:none;" size="small" @click="handleList(scope.$index, scope.row)">[编辑]</el-button>
                        <!-- <el-button style="float:left; display:inline-block; border:none;" size="small" @click="handleList(scope.$index, scope.row)">[抓取商品]</el-button> -->
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination_bottom">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" :page-sizes="[15,30,60,90]" layout="total, sizes, prev, pager, next, jumper" :total="count" style="float: right;">
                </el-pagination>
            </div>
            <!-- 一般式运用模块框 -->
            <!-- <el-dialog title="商家信息" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="商家ID" :label-width="formLabelWidth">
                        <el-input v-model="form.shop_id" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="类型" :label-width="formLabelWidth">
                        <el-input v-model="form.shop_type" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商家代码" :label-width="formLabelWidth">
                        <el-input v-model="form.shop_market" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商家名称" :label-width="formLabelWidth">
                        <el-input v-model="form.shop_Stall" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所在市场" :label-width="formLabelWidth">
                        <el-input v-model="form.shop_area" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商家排名" :label-width="formLabelWidth">
                        <el-input v-model="form.shop_ranking" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="进驻时间" :label-width="formLabelWidth">
                        <el-input v-model="form.shop_time" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="状态" :label-width="formLabelWidth">
                        <el-input v-model="form.shop_status" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="cancel">取 消</el-button>
                    <el-button type="primary" @click="update">确 定</el-button>
                </div>
            </el-dialog> -->
        </div>
    </div>
</template>
<script>
// import { reformat } from '../common/reformartDate';
import axios from "axios";

export default {
    data() {
        return {
            currentIndex: "",
            dialogFormVisible: false,
            formLabelWidth: "200px",
            form: {},
            tableData: [],
            shopList: [],
            levelData: [{
                    value: "所有分类",
                    label: "所有分类"
                },
                {
                    value: "A类",
                    label: "A类"
                },
                {
                    value: "B类",
                    label: "B类"
                },
                {
                    value: "C类",
                    label: "C类"
                }
            ],
            pageData: [{
                    value: "选项1",
                    label: "15"
                },
                {
                    value: "选项2",
                    label: "30"
                },
                {
                    value: "选项3",
                    label: "90"
                },
                {
                    value: "选项4",
                    label: "120"
                }
            ],
            shop_id: "",
            levelName: "所有分类",
            currentRow: null,
            begin: 0,
            end: 0,
            limit: 20,
            count: 0,
            currentPage: 1,
            pageSize: 15
        };
    },
    components: {
        // headTop,
    },
    computed: {
        getshopListFilter() {
            return this.shopList.slice(this.begin, this.end);
        },
        Message: function() {
            return this.shopList.length;
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            axios
                .get("/admin/getShopList")
                .then(res => {
                    const data = res.data;
                    if (data.status == 200) {
                        console.log(data.result.shopList);
                        //临时表
                        this.tableData = data.result.shopList;
                        //数据表
                        this.shopList = data.result.shopList;
                        this.count = this.shopList.length;
                        this.begin = 0;
                        this.end = this.pageSize;
                        // console.log("separter");
                        // console.log(this.shopList.slice(this.begin, this.end));
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        showNums(index) {
            this.pageNum = parseInt(this.options2[index].label);
        },
        filterLevel(levelName) {
            if (this.levelName == "" || this.levelName == "所有分类") {
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
            if (this.shop_id) {
                this.shopList = this.tableData.filter(item => {
                    return (
                        item.shop_id.toLowerCase().indexOf(this.shop_id.toLowerCase()) !== -1

                    );
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
        handleList(index, row) {
            this.$router.push({
                path: "/shopDetail",
                query: {
                    shop_id: row.shop_id
                }
            });
        },
        filterTag(value, row) {
            return row.levelname === value;
        }

    }
};

</script>
<style lang="less">
@import "../style/stable";

</style>
