<template>
    <div class="fillcontain">
        <!-- <head-top></head-top> -->
        <div class="headAdv">
            
                <!-- <div class="listed">
                <span><strong>商家列表</strong></span>
            </div> -->
          
            <div class="searched">
                <div class="btn" style="position:relative;left:-225px;display:inline-block;">
                    <el-button @click="handleAdd">新建商家</el-button>
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
                <!-- <div class="searched_middle">
                    <span class="pashow">显示</span>&nbsp;
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" :page-sizes="[15,30,60,90]" layout="sizes" :total="count" class="patag">
                    </el-pagination>
                </div> -->
            </div>
            <!-- <div class="recorded">
                <span>总记录数 {{Message}}</span>
            </div> -->
        </div>
        <div class="table_container">
            <el-table :data="getshopListFilter" highlight-current-row style="width: 100%">
                <el-table-column property="shop_id" label="商家ID" width="120" sortable>
                </el-table-column>
                <el-table-column property="shop_name" label="商家名称" width="135" sortable>
                </el-table-column>
                <el-table-column property="shop_type" label="类型" width="110" sortable>
                </el-table-column>
                <el-table-column property="shop_market" label="所在档口" width="140">
                </el-table-column>
                <el-table-column property="shop_area" label="所在市场" width="100">
                </el-table-column>
                <el-table-column property="shop_ranking" label="商家排名" width="125">
                </el-table-column>
                <el-table-column property="shop_time" label="进驻时间" width="220">
                </el-table-column>
                <el-table-column property="shop_time" label="抓取商品时间" width="220">
                </el-table-column>
                </el-table-column>
                <el-table-column property="editname" label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="handleEdit(scope.$index, scope.row)" size="small">[编辑]</el-button>
                        <!-- <el-button type="danger" @click="handleDelete(scope.$index,scope.row)" size="small">删除</el-button> -->
                        <el-button type="danger" size="small">[抓取商品]</el-button>
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

import axios from "axios";
export default {
  data() {
    return {
      currentIndex: "",
      dialogFormVisible: true,
      formLabelWidth: "200px",
      form: {},
      tableData: [],
      shopList: [],
      levelData: [
        {
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
      pageData: [
        {
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
  components: {},
  computed: {
    getshopListFilter() {
      return this.shopList.slice(this.begin, this.end);
    },
    Message: function() {
      return this.shopList.length;
    }
  },
  created() {
    // console.log(this.getStatus(this.$route.path));
  },
  mounted() {
    this.initData();
  },
  activated() {
    this.initData();
  },
  methods: {
    async initData() {
      axios
        .get("/shop/getShopList")
        .then(res => {
          const data = res.data;
          if (data.status == 200) {
            this.tableData = data.result.shopList;
            this.shopList = data.result.shopList;
            this.count = this.shopList.length;
            this.begin = 0;
            this.end = this.pageSize;
          }
        })
        .catch(error => {
          console.log(error);
        });
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
            item.shop_id.toLowerCase().indexOf(this.shop_id.toLowerCase()) !==-1
            
          );
        });
      }
    },

    handleSizeChange(val) {
      this.pageSize = val;
      this.begin = (this.currentPage - 1) * this.pageSize;
      this.end = this.currentPage * this.pageSize;
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.begin = (this.currentPage - 1) * this.pageSize;
      this.end = this.currentPage * this.pageSize;
    },
    getStatus(urlStr) {
      var urlStrArr = urlStr.split("/");
      return urlStrArr[urlStrArr.length - 1];
    },
    handleAdd() {
      this.$router.push({
        path: "/addShop"
      });
    },
    handleEdit(index, row) {
      this.$router.push({
        path: "/shopDetail",
        query: {
          shop_id: row.shop_id
        }
      });
    },
    handleDelete(index, row) {
      this.$confirm("确认删除该商家吗？", "提示", { type: "warning" }).then(() => {
        axios
          .post("/shop/delete", { id: row._id })
          .then(res => {
            const data = res.data;
            if (data.status == 200) {
              this.initData();
              this.$message({
                type: "success",
                message: data.msg
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      });
    },
    filterTag(value, row) {
      return row.levelname === value;
    }
  },
  watch: {
    $route(to, from) {
      // console.log(this.getStatus(this.$route.path));
    }
  }
};
</script>
<style lang="less">
@import "../style/stable";
</style>
