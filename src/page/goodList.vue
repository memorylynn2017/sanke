<template>
    <div class="fillcontain">
        <!-- <head-top></head-top> -->
        <div class="headAdv">
            <!-- <div class="listed">
                <span><strong>商品列表</strong></span>
            </div> -->
            <div class="searched">
                <div class="btn" style="position:relative;left:-218px;display:inline-block;">
                    <el-button @click="handleAdd">新建商品</el-button>
                    <el-button>更新数据</el-button>
                </div>
                <div class="searched_left">
                    <!-- <el-select v-model="levelName" filterable placeholder="请选择" @change="filterLevel">
                        <el-option v-for="level in levelData" :key="level.value" :label="level.label" :value="level.value">
                        </el-option>
                    </el-select> -->
                </div>
                <div class="searched_right">
                    <el-input v-model="product_code" placeholder="请输入要查询的商品Id">
                        <el-button slot="append" @click="searchUser()">查询</el-button>
                    </el-input>
                </div>
                <!-- <div class="searched_middle qf">
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
            <el-table ref="multipleTable" :data="getProductListFilter" highlight-current-row style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column property="product_name" label="商品名称" width="185">
                </el-table-column>
                <el-table-column property="product_id" label="商品编号" width="100">
                </el-table-column>
                <!-- <el-table-column property="product_class" label="分类" width="100">
                </el-table-column> -->
                <el-table-column property="product_puprice" label="拿货价" width="100">
                </el-table-column>
                <el-table-column property="product_shop" label="商家名称" width="100">
                </el-table-column>
                <el-table-column property="product_up" label="上架状态" width="105">
                </el-table-column>
                <el-table-column property="product_up_time" label="上架时间" width="140">
                </el-table-column>
                <el-table-column property="product_down_time" label="下架时间" width="140">
                </el-table-column>
                 <el-table-column property="product_down" label="下架" width="120">
                </el-table-column>
                <el-table-column property="editname" label="操作">
                    <template slot-scope="scope">
                        <el-button size="small">[下架]</el-button>
                        <el-button type="text" @click="handleEdit(scope.$index, scope.row)" size="samll">[编辑]</el-button>
                        <!-- <el-button type="danger" @click="handleDelete(scope.$index, scope.row)" size="small">删除</el-button> -->
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
import { getUserList, getUserCount } from "@/api/getData";
import axios from "axios";
export default {
  data() {
    return {
      product_code: "",
      oncontrol: true,
      tableData: [],
      productList: [],
      levelData: [
        {
          value: "所有类型",
          label: "所有类型"
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
        },
        {
          value: "T类",
          label: "T类"
        }
      ],
      options2: [
        {
          value: "30",
          label: "30"
        },
        {
          value: "60",
          label: "60"
        },
        {
          value: "90",
          label: "90"
        },
        {
          value: "120",
          label: "120"
        }
      ],
      input1: "",
      input2: "",
      levelName: "所有类型",
      myvalue2: "30",
      currentRow: null,
      begin: 0,
      end: 0,
      limit: 20,
      count: 0,
      currentPage: 1,
      pageSize: 15,

      multipleSelection: []
    };
  },
  components: {
    // headTop,
  },
  computed: {
    getProductListFilter() {
      return this.productList.slice(this.begin, this.end);
    },
    Message: function() {
      return this.productList.length;
    }
  },

  mounted() {
    this.initData();
  },
  activated() {
    this.initData();
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    async initData() {
      axios
        .get("/good/getGoodList")
        .then(res => {
          const data = res.data;
          if (data.status == 200) {
            this.tableData = data.result.goodList;
            this.productList = data.result.goodList;
            this.count = this.productList.length;
            this.begin = 0;
            this.end = this.pageSize;
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
      if (this.levelName == "" || this.levelName == "所有类型") {
        this.productList = this.tableData;
      } else {
        this.productList = this.tableData.filter(item => {
          return (
            item.product_class !== null && item.product_class == this.levelName
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
    handleAdd() {
      this.$router.push({
        path: "/addGood"
      });
    },
    handleEdit(index, row) {
      this.$router.push({
        path: "/goodDetail",
        query: {
          product_id: row.product_id
        }
      });
    },
    handleDelete(index, row) {
      this.$confirm("确认删除该商品吗？", "提示", { type: "warning" }).then(() => {
        axios
          .post("/good/delete", { id: row._id })
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
  }
};
</script>
<style lang="less">
@import "../style/stable";
</style>

</style>
