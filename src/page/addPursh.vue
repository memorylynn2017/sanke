<template>
    <div class="fillcontain">
        <!-- <head-top></head-top> -->
        <div class="headAdv">
            <!-- <div class="listed">
            <span><strong>订单列表</strong></span>
        </div> -->
            <div class="searched">
                <div class="btn" style="position:relative;left:-480px;display:inline-block;">
                    <!-- <el-button @click="handleAdd">测试采购单入口</el-button> -->
                </div>
                <div class="searched_left">
                </div>
                <div class="searched_right">
                    
                </div>
                <div class="searched_middle" style="position:relative;left:450px;">
                    <!-- <span class="pashow">显示</span>&nbsp; -->
                     <!-- @click="handleAdd" -->
                    <el-button>保存</el-button>
                    <el-button>打印</el-button>
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
                <el-table-column property="#" label="采购编号" width="250">
                </el-table-column>
                <el-table-column property="order_times" label="创建时间" width="650">
                </el-table-column>
                <el-table-column property="order_suppler" label="创建人" width="250">
                </el-table-column>
            
        
               
                </el-table-column>
                
                <el-table-column property="editname" label="处理">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">[查看]</el-button>
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
export default {
  data() {
    return {
      currentIndex: "",
      dialogFormVisible: true,
      formLabelWidth: "200px",
      form: {},
      tableData: [],
      orderList: [],
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
      order_id: "",
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
      multipleSelection: []
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
            //临时表
            this.tableData = data.result.orderList;
            //数据表
            this.orderList = data.result.orderList;
            this.count = this.orderList.length;
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
    // filterLevel(levelName) {
    //   if (this.levelName == "" || this.levelName == "所有分类") {
    //     this.orderList = this.tableData;
    //   } else {
    //     this.orderList = this.tableData.filter(item => {
    //       return item.order_type !== null && item.order_type == this.levelName;
    //     });
    //   }
    // },

    // filterUser() {
    //   if (this.purvalue0 == "" || this.purvalue0 == "所有渠道") {
    //     if (this.purvalue1 == "" || this.purvalue1 == "全部") {
    //       this.orderList = this.tableData;
    //     } else {
    //       this.orderList = this.tableData.filter(item => {
    //         return item.order_purstatus == this.purvalue1;
    //       });
    //     }
    //   } else {
    //     if (this.purvalue1 == "" || this.purvalue1 == "全部") {
    //       this.orderList = this.tableData.filter(item => {
    //         return item.order_fetch == this.purvalue0;
    //       });
    //     } else {
    //       this.orderList = this.tableData.filter(item => {
    //         return (
    //           item.order_fetch == this.purvalue0 &&
    //           item.order_purstatus == this.purvalue1
    //         );
    //       });
    //     }
    //   }
    // },
    showNums(index) {
      this.pageNum = parseInt(this.options2[index].label);
    },
    // searchUser() {
    //   if (this.order_id) {
    //     this.orderList = this.tableData.filter(item => {
    //       return (
    //         item.order_id.toLowerCase().indexOf(this.order_id.toLowerCase()) !==
    //         -1
    //       );
    //     });
    //   }
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
    getStatus(urlStr) {
      var urlStrArr = urlStr.split("/");
      return urlStrArr[urlStrArr.length - 1];
    },
   
    // handleEdit(index, row) {
    //   this.$router.push({
    //     path: "/purshrDetail",
    //     query: {
    //       pursh_id: row.pursh_id
    //     }
    //   });
    // },
    
    filterTag(value, row) {
      return row.levelname === value;
    }
  }
  // watch: {
  //   $route(to, from) {
  //     console.log(this.getStatus(this.$route.path));
  //   }
  // }
};
</script>
<style lang="less">
@import "../style/stable";
</style>
