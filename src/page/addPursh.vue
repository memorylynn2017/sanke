<template>
    <div class="fillcontain">
        <!-- <head-top></head-top> -->
        <div class="headAdv addPursh">
            <!-- <div class="listed">
            <span><strong>订单列表</strong></span>
            </div> -->
            <div class="searched">
                <!-- <div class="btn" style="position:relative;left:-250px;display:inline-block;">
                    <el-button>测试采购单入口</el-button>
                </div> -->
                <div class="searched_left" style="position:relative;left:-480px;">
                   <span>查询编号：</span>&nbsp;
                    <el-select v-model="purvalue" placeholder="请选择" >
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="searched_right">
                </div>
                <div class="searched_middle" style="position:relative;left:420px;">
                   
                    <el-button>保存</el-button>
                    <el-button>打印</el-button>&nbsp;
                    
                </div>
            </div>
            <div class="recorded" style="position:relative;left:0px;">
            </div>
        </div>
        <div class="table_container">
            <el-table ref="multipleTable" :data="getorderListFilter" highlight-current-row style="width:100%">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column property="pursh_time" label="创建时间" width="250">
                </el-table-column>
                <el-table-column property="pursh_id" label="采购编号" width="450">
                </el-table-column>
                <el-table-column property="pursh_man" label="创建人" width="350">
                </el-table-column>
               
               
                <el-table-column property="editname" label="处理">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">[查看]</el-button>
                        <el-button type="danger" @click="handleDelete(scope.$index,scope.row)" size="small">删除</el-button>
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
      formLabelWidth: "200px",
      tableData: [],
      purshList: [],
      options: [
        {
          value: "采购编号1",
          label: "采购编号1"
        },
        {
          value: "采购编号2",
          label: "采购编号2"
        }
      ],
      order_id: "",
      input: "",
      purvalue: "请输入编号",
      myvalue4: "30",
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
    getorderListFilter() {
      return this.purshList.slice(this.begin, this.end);
    },
    Message: function() {
      return this.purshList.length;
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
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    async initData() {
      axios
        .get("/pursh/getPurshList")
        .then(res => {
          const data = res.data;
          if (data.status == 200) {
            this.tableData = data.result.purshList;
            this.purshList = data.result.purshList;
            this.count = this.purshList.length;
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
    handleDelete(index, row) {
      this.$confirm("确认删除该订单吗？", "提示", { type: "warning" }).then(() => {
        axios
          .post("/pursh/delete", { id: row._id })
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
