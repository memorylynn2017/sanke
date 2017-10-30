<template>
    <div class="fillcontain">
        <!-- <head-top></head-top> -->
        <div class="headAdv">
            
            <div class="listed" style="margin-left:50px;">
                <span><strong>市场信息</strong></span>
            </div>
          
            <div class="searched">
                <div class="btn" style="position:relative;left:-152px;display:inline-block;">
                    <el-button @click="handleAdd">添加市场</el-button>
                    <el-button>更新数据</el-button>
                </div>
                <div class="searched_left">
                    <el-select v-model="levelName" placeholder="请选择" @change="filterLevel()">
                        <el-option v-for="level in levelData" :key="level.value" :label="level.label" :value="level.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="searched_right">
                    <el-input v-model="shop_id" placeholder="">
                        <el-button slot="append" @click="searchUser()">查询</el-button>
                    </el-input>
                </div>
                <div class="searched_middle">
                    <span class="pashow">显示</span>&nbsp;
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" :page-sizes="[15,30,60,90]" layout="sizes" :total="count" class="patag">
                    </el-pagination>
                </div>
            </div>
            <!-- <div class="recorded">
                <span>总记录数 {{Message}}</span>
            </div> -->
        </div>
        <div class="table_container">
            <el-table :data="getshopListFilter" highlight-current-row style="width: 100%">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column property="#" label="市场名称" width="115">
                </el-table-column>
                <el-table-column property="#" label="详细地址" width="135">
                </el-table-column>
                <el-table-column property="#" label="经营范围" width="120">
                </el-table-column>
                <el-table-column property="#" label="经营模式" width="120">
                </el-table-column>
                <el-table-column property="#" label="招商电话" width="100">
                </el-table-column>
                <el-table-column property="#" label="网批地址" width="90">
                </el-table-column>
                <el-table-column property="#" label="所属市场" width="120">
                </el-table-column>
                <el-table-column property="#" label="所属商圈" width="120">
                </el-table-column>
                <el-table-column property="#" label="排序" width="80">
                </el-table-column>
                <el-table-column property="#" label="状态" width="80">
                </el-table-column>
                <el-table-column property="#" label="热门" width="80">
                </el-table-column>
                <el-table-column property="editname" label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="handleEdit(scope.$index, scope.row)" size="small">[编辑]</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination_bottom" style="margin-top:35px;">
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
             <!-- 一般式运用模块框 -->
            <!-- <el-dialog title="抓取商品" :visible.sync="dialogFormVisible">
                <el-form :model="form" style="text-align:center;width:400px;height:400px;">
                    <span>商家：</span><span>芬妮女装</span>
                    <el-form-item label="分类" :label-width="formLabelWidth">
                        <el-input auto-complete="off" style="width:100px;">></el-input>
                    </el-form-item>
                    <el-form-item label="类型" :label-width="formLabelWidth">
                        <el-input auto-complete="off" style="width:100px;">></el-input>
                    </el-form-item>
                    <el-form-item label="品牌" :label-width="formLabelWidth">
                        <el-input auto-complete="off" style="width:100px;">></el-input>
                    </el-form-item>
                    <el-form-item label="价格统一减去" :label-width="formLabelWidth">
                        <el-input auto-complete="off" style="width:100px;">></el-input>
                    </el-form-item>
                    <el-form-item label="打包价" :label-width="formLabelWidth">
                        <el-input auto-complete="off" style="width:100px;">></el-input>
                    </el-form-item>
                    <el-form-item label="重量" :label-width="formLabelWidth">
                        <el-input auto-complete="off" style="width:100px;">></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer" style="text-align:center;">
                    <el-button type="primary" size="small" @click="update">立即抓取</el-button>
                    <el-button @click="cancel">取 消</el-button>
                </div>
            </el-dialog> -->
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
          value: "经营范围",
          label: "经营范围"
        },
        {
          value: "招商电话",
          label: "招商电话"
        },
         {
          value: "详细地址",
          label: "详细地址"
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
      levelName: "市场名称",
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
      // return this.shopList.slice(this.begin, this.end);
    },
    Message: function() {
      return this.shopList.length;
    }
  },
  created() {
    console.log(this.getStatus(this.$route.path));
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
            item.shop_id.toLowerCase().indexOf(this.shop_id.toLowerCase()) !==
            -1
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
        //数据库删除
        axios
          .post("/shop/delete", { id: row._id })
          .then(res => {
            const data = res.data;
            if (data.status == 200) {
              //视图界面上删除
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
  // watch: {
  //   $route(to, from) {
  //     console.log(this.getStatus(this.$route.path));
  //   }
  // }
};
</script>
<style lang="less">
@import "../../style/stable";
</style>
