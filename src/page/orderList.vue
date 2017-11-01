<template>
    <div class="fillcontain">
        <!-- <head-top></head-top> -->
        <div class="headAdv">
            <!-- <div class="listed">
            <span><strong>订单列表</strong></span>
        </div> -->
            <div class="searched">
                <div class="btn" style="position:relative;left:-95px;display:inline-block;">
                    <el-button @click="handleAdd">测试订单入口</el-button>
                </div>
                <div class="searched_left" style="position:relative;left:-65px;">
                    <el-select v-model="purvalue0" placeholder="请选择" @change="filterUser()">
                        <el-option v-for="item in options0" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="purvalue1" placeholder="请选择" @change="filterUser()">
                        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="purvalue2" placeholder="请选择" @change="filterUser()">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="purvalue3" placeholder="请选择" @change="filterUser()">
                        <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="searched_right">
                    <el-input v-model="search_id" placeholder="搜索" style="position:relative;left:0px;">
                        <el-button slot="append" @click="searchUser()">查询</el-button>
                    </el-input>
                </div>
                <div class="searched_middle">
                    <el-button type="info" size="small" @click="addAct">生成采购单</el-button>
                </div>
            </div>
            <!-- <div class="recorded">
              <span>总记录数 {{Message}}</span>
            </div> -->
        </div>
        <div class="table_container">
            <el-table ref="multipleTable" :data="getorderListFilter" highlight-current-row style="width:100%">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column property="order_fetch" label="渠道" width="100" sortable>
                </el-table-column>
                <el-table-column property="order_id" label="订单号" width="120" sortable>
                </el-table-column>
                <el-table-column property="order_count" label="数量" width="90" sortable>
                </el-table-column>
                <el-table-column property="order_price" label="金额" width="90" sortable>
                </el-table-column>
                <el-table-column property="order_freight" label="运费" width="90" sortable>
                </el-table-column>
                <el-table-column property="order_key" label="会员ID" width="120">
                </el-table-column>
                <!-- <el-table-column property="order_goodsman" label="收货人" width="90">
            </el-table-column> -->
                <!-- <el-table-column property="order_leval" label="等级" width="100">
            </el-table-column> -->
                <el-table-column property="order_area" label="收货地区" width="100">
                </el-table-column>
                <el-table-column property="order_sendm" label="配送方式" width="100">
                </el-table-column>
                <el-table-column property="order_purstatus" label="订单状态" width="115">
                </el-table-column>
                <el-table-column property="order_senstatus" label="发货状态" width="115">
                </el-table-column>
                <el-table-column property="order_paystatus" label="付款状态" width="100">
                </el-table-column>
                <el-table-column property="order_times" label="下单时间" width="180">
                </el-table-column>
                <el-table-column property="editname" label="处理">
                    <template slot-scope="scope">
                        <el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">[处理]</el-button>
                        <!-- <el-button type="danger" @click="handleDelete(scope.$index,scope.row)" size="small">删除</el-button> -->
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
import ".././assets/js/formatefy.js";
export default {
  data() {
    return {
      getime: "",
      currentIndex: "",
      dialogFormVisible: true,
      formLabelWidth: "200px",
      form: {},
      tableData: [],
      orderList: [],
      dataArray: [],
      options1: [
        {
          value: "全部",
          label: "全部"
        },
        {
          value: "订单产生",
          label: "订单产生"
        },
        {
          value: "采购保存",
          label: "采购保存"
        },
        {
          value: "已打订单",
          label: "已打订单"
        },
        {
          value: "已完成",
          label: "已完成"
        }
      ],
      options2: [
        {
          value: "全部",
          label: "全部"
        },
        {
          value: "未发货",
          label: "未发货"
        },
        {
          value: "已发货",
          label: "已发货"
        },
        {
          value: "已取消",
          label: "已取消"
        }
      ],
      options3: [
        {
          value: "全部",
          label: "全部"
        },
        {
          value: "已付款",
          label: "已付款"
        },
        {
          value: "未付款",
          label: "未付款"
        },
        {
          value: "退款",
          label: "退款"
        }
      ],
      options0: [
        {
          value: "所有渠道",
          label: "所有渠道"
        },
        {
          value: "网站",
          label: "网站"
        },
        {
          value: "小程序",
          label: "小程序"
        },
        {
          value: "线下",
          label: "线下"
        }
      ],
      search_id: "",
      input: "",
      purvalue1: "全部",
      purvalue2: "全部",
      purvalue3: "全部",
      purvalue0: "所有渠道",
      myvalue4: "30",
      currentRow: null,
      begin: 0,
      end: 0,
      limit: 20,
      count: 0,
      currentPage: 1,
      pageSize: 15,
      multipleSelection: [],
      msg: "虚拟单号800100023"
    };
  },
  components: {
    // headTop,
  },
  computed: {
    getorderListFilter() {
      return this.orderList.slice(this.begin, this.end);
    },
    Message: function() {
      return this.orderList.length;
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
        .get("/order/getOrderList")
        .then(res => {
          const data = res.data;
          if (data.status == 200) {
            this.tableData = data.result.orderList;
            this.orderList = data.result.orderList;
            this.count = this.orderList.length;
            this.begin = 0;
            this.end = this.pageSize;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    addAct() {
      this.$confirm("确认提交吗?", "提示", {}).then(() => {
        axios
          .post("/pursh/add", {
            pursh_id: this.msg+getNowFormatDate(),
            pursh_time: getNowFormatDate(),
            pursh_man: "沈利松"
          })
          .then(res => {
            const data = res.data;
            if (data.status == 200) {
              this.$message({
                type: "success",
                message: "添加采购单成功"
              });
              //因为vue-router后退操作不刷新页面，此处强制刷新
              setTimeout(() => {
                this.$router.push({
                  path: "/addPursh"
                });
                // this.goback();
              }, 1500);
            }
          })
          .catch(error => {
            console.log(error);
          });
      });
    },
    //待完善
    filterUser() {
      if (this.purvalue0 == "" || this.purvalue0 == "所有渠道") {
        if (this.purvalue1 == "" || this.purvalue1 == "全部") {
          this.orderList = this.tableData;
        } else {
          this.orderList = this.tableData.filter(item => {
            return item.order_purstatus == this.purvalue1;
          });
        }
      } else {
        if (this.purvalue1 == "" || this.purvalue1 == "全部") {
          this.orderList = this.tableData.filter(item => {
            return item.order_fetch == this.purvalue0;
          });
        } else {
          this.orderList = this.tableData.filter(item => {
            return (
              item.order_fetch == this.purvalue0 &&
              item.order_purstatus == this.purvalue1
            );
          });
        }
      }
    },
    showNums(index) {
      this.pageNum = parseInt(this.options2[index].label);
    },
    //旧高级搜索功能测试逻辑1
    // searchUser() {
    //   if (this.order_id) {
    //     this.orderList = this.tableData.filter(item => {
    //       return (
    //         item.order_id.toLowerCase().indexOf(this.order_id.toLowerCase()) !==-1

    //       );
    //     });
    //   }
    // },
    //新高级搜索功能测试逻辑2
    searchUser() {
      if (this.search_id) {
        for (let i = 0; i < this.tableData.length; i++) {
          this.searchMethod(this.tableData[i], this.search_id.toLowerCase());
        }
        this.orderList = this.dataArray;
      }
    },
    searchMethod(data, value) {
      if (data.order_fetch.indexOf(value) > 0) {
        this.dataArray.push(data);
        return;
      } else if (data.order_area.indexOf(value) > 0) {
        this.dataArray.push(data);
        return;
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
        path: "/addOrder"
      });
    },
    handleEdit(index, row) {
      this.$router.push({
        path: "/orderDetail",
        query: {
          order_id: row.order_id
        }
      });
    },
    handleDelete(index, row) {
      this.$confirm("确认删除该订单吗？", "提示", { type: "warning" }).then(() => {
        axios
          .post("/order/delete", { id: row._id })
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
