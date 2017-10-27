<template>
    <div class="fillcontain">
        <!-- <head-top></head-top> -->
        <div class="headAdv">
            <div class="listed">
                <span><strong>会员列表</strong></span>
            </div>
            <div class="searched">
                <div class="searched_left">
                    <el-select v-model="levelName" placeholder="请选择" @change="filterLevel">
                        <el-option v-for="level in levelData" :key="level.value" :label="level.label" :value="level.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="areaName" placeholder="区域" @change="test">
                        <el-option　v-for="area in areaData" :key="area.value" :label="area.label" :value="area.value"></el-option>
                    </el-select>
                </div>
                <div class="searched_right">
                    <el-input v-model="user_id" placeholder="请输入要查询的客户Id" @keyup.enter.native="searchUser">
                        <el-button slot="append" @click="searchUser">查询</el-button>
                    </el-input>
                </div>
                <div class="searched_middle qf">
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
            <el-table :data="getUserListFilter" highlight-current-row style="width: 100%">
                <el-table-column property="user_id" label="客户ID" width="100">
                </el-table-column>
                <el-table-column property="levelname" label="等级" width="100">
                </el-table-column>
                <el-table-column property="usercall" label="用户名" width="130">
                </el-table-column>
                <el-table-column property="usercity" label="地区" width="100">
                </el-table-column>
                <el-table-column property="purchase_num" label="订单" width="100" sortable>
                </el-table-column>
                <el-table-column property="countname" label="数量" width="100" sortable>
                </el-table-column>
                <el-table-column property="pricename" label="金额" width="110" sortable>
                </el-table-column>
                <el-table-column property="costname" label="余额" width="110" sortable>
                </el-table-column>
                <el-table-column property="registe_time" label="注册时间" width="160" sortable>
                </el-table-column>
                <el-table-column property="editname" label="操作" width="135">
                    <template slot-scope="scope">
                        <el-button style="border:none;" size="small" @click="handleList(scope.$index, scope.row)">[详情]</el-button>
                    </template>
                </el-table-column>
                <el-table-column property="user_status" label="状态" width="80">
                </el-table-column>
            </el-table>
            <div class="pagination_bottom">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" :page-sizes="[15,30,60,90]" layout="total, prev, pager, next, jumper" :total="count" style="float: right;">
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
      tableData: [],
      levelData: [
        {
          value: "所有等级",
          label: "所有等级"
        },
        {
          value: "VIP",
          label: "VIP"
        },
        {
          value: "批发会员",
          label: "批发会员"
        },
        {
          value: "注册会员",
          label: "注册会员"
        }
      ],
      areaData: [
        {
          value: "全部地区",
          label: "全部地区"
        },
        {
          value: "美国",
          label: "美国"
        },
        {
          value: "英国",
          label: "英国"
        },
        {
          value: "广州",
          label: "广州"
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
      user_id: "",
      levelName: "所有等级",
      areaName: "全部地区",
      currentRow: null,
      begin: 0,
      end: 0,
      limit: 20,
      count: 0,
      currentPage: 1,
      pageSize: 15,
      userList: [],
      mid_userList: []
    };
  },
  components: {
    // headTop,
  },
  computed: {
    getUserListFilter() {
      return this.userList.slice(this.begin, this.end);
    },
    Message: function() {
      return this.userList.length;
    }
  },

  directives: {
    focus: {
      // 指令的定义
      inserted: function(el, option) {
        var defClass = "el-input",
          defTag = "input";
        var value = option.value || true;
        if (typeof value === "boolean")
          value = { cls: defClass, tag: defTag, foc: value };
        else
          value = {
            cls: value.cls || defClass,
            tag: value.tag || defTag,
            foc: value.foc || false
          };
        if (el.classList.contains(value.cls) && value.foc)
          el.getElementsByTagName(value.tag)[0].focus();
      }
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      axios
        .get("/user/getUserList")
        .then(res => {
          const data = res.data;
          if (data.status == 200) {
            // console.log(data.result.userList);
            //临时表
            this.tableData = data.result.userList;
            //数据表
            this.userList = data.result.userList;
            this.count = this.userList.length;
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

    test(areaName) {
      // console.log(areaName);
      if (this.areaName == "" || this.areaName == "全部地区") {
        this.userList = this.mid_userList;
      } else {
        this.userList = this.mid_userList.filter(item => {
          // console.log(item);
          return item.areaname !== null && item.areaname == this.areaName;
        });
      }
    },
    showNums(index) {
      this.pageNum = parseInt(this.options2[index].label);
    },
    filterLevel(levelName) {
      // console.log(levelName);
      if (this.levelName == "" || this.levelName == "所有等级") {
        this.userList = this.tableData;
        this.areaName = "全部地区";
      } else {
        this.userList = this.tableData.filter(item => {
          return item.levelname !== null && item.levelname == this.levelName;
        });
        this.mid_userList = this.userList;
      }
    },
    showNums(index) {
      this.pageNum = parseInt(this.options2[index].label);
    },
    searchUser() {
      if (this.user_id) {
        // this.userList = this.tableData.filter((item) => {
        //     return item.user_id == this.user_id;
        // });
        this.userList = this.tableData.filter(item => {
          return (
            item.user_id .toLowerCase().indexOf(this.user_id.toLowerCase()) !== -1
          );
        });
             
              
        this.user_id = "";
      } else {
        this.userList = this.tableData;
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
        path: "/userDetail",
         query: {
          user_id: row.user_id
        }
      });
    }
  }
};
</script>

<style lang="less">
@import "../style/stable";
</style>
