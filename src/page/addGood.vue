<template>
    <div class="fillcontain addgood">
        <!-- <head-top></head-top> -->
        <el-button class="backbtn_good" @click="gobackIndex()" sytle=" z-index:999;">返回</el-button>
        <div class="table_container gooddetail">
            <el-tabs type="border-card">
                <el-tab-pane>
                    <span slot="label">基本信息</span>
                    <el-form ref="addForm" :model="addForm" label-width="80px">
                        <table class="table0 w100">
                            <tr>
                                <td>商品编号</td>
                                <td>
                                    <el-input size="small" v-model="addForm.product_id" placeholder="请输入内容"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>商品原始编号</td>
                                <td>
                                    <el-input size="small" v-model="addForm.product_id" placeholder="请输入内容"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>商品名称</td>
                                <td>
                                    <el-input size="small" v-model="addForm.product_name" placeholder="请输入内容"></el-input>
                                    <!-- <span style="margin-left: 20px;font-size: 12px; color: #000;">查看图片</span> -->
                                </td>
                            </tr>
                            <tr>
                                <td>所属商家</td>
                                <td>
                                    <el-input size="small" v-model="addForm.product_shop" placeholder="请输入内容"></el-input>
                                    <!-- <el-checkbox class="radio" v-model="auto" label="1">记住我的选择</el-checkbox> -->
                                </td>
                            </tr>
                            <tr>
                                <td>发货商</td>
                                <td>
                                    <el-input size="small" v-model="addForm.product_brand" placeholder="请输入内容"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>商品类别</td>
                                <td>
                                    <el-select size="small" v-model="addForm.product_class" placeholder="请选择">
                                        <el-option v-for="item in levels" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <td>商品品牌</td>
                                <td>
                                    <el-select size="small" v-model="addForm.product_brand" placeholder="请选择">
                                        <el-option v-for="item in levels" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <td>所属分区</td>
                                <td>
                                    <el-select size="small" v-model="addForm.product_area" placeholder="请选择">
                                        <el-option v-for="item in levels" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <td>拿货价</td>
                                <td>
                                    <el-input size="small" v-model="addForm.product_puprice" placeholder="请输入内容"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>打包价</td>
                                <td>
                                    <el-input size="small" v-model="addForm.product_boxprice" placeholder="请输入内容"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>市场售价</td>
                                <td>
                                    <el-input size="small" v-model="addForm.product_saleprice" placeholder="请输入内容"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>商品重量</td>
                                <td>
                                    <el-input size="small" v-model="addForm.product_weight" placeholder="请输入内容"></el-input>&nbsp;&nbsp;KG</td>
                            </tr>
                            <tr>
                                <td>货位</td>
                                <td>
                                    <el-input size="small" v-model="addForm.product_positon" placeholder="请输入内容"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>库存量</td>
                                <td>
                                    <el-input size="small" v-model="addForm.product_storage" placeholder="请输入内容"></el-input>
                                </td>
                            </tr>
                            <!-- <tr>
                                <td>上传商品图片</td>
                                <td>
                                    <el-upload style="width: 400px; padding: 5px; border: 1px solid #ececec;" action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                                        <i class="el-icon-plus"></i>
                                    </el-upload>
                                    <el-dialog v-model="dialogVisible" size="tiny">
                                        <img width="100%" :src="dialogImageUrl" alt="">
                                    </el-dialog>
                                </td>
                            </tr> -->
                            <tr>
                                <td>页面关键词</td>
                                <td>
                                    <el-input type="textarea" style="width: 410px;" v-model="addForm.product_keyword"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>提示标签</td>
                                <td>
                                    <el-input type="textarea" style="width: 410px;" v-model="addForm.product_mend"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>购买禁用</td>
                                <td>
                                    <el-input size="small" v-model="input" placeholder="请输入内容"></el-input>
                                    <el-radio-group v-model="start" style="margin-left: 25px;">
                                        <el-radio :label="3">下架</el-radio>
                                        <el-radio :label="6">断色</el-radio>
                                        <el-radio :label="9">断码</el-radio>
                                    </el-radio-group>
                                </td>
                            </tr>
                            <tr>
                                <td>自动上架</td>
                                <td>
                                    <el-input size="small" v-model="input" placeholder="请输入内容"></el-input>
                                    <span style="margin: 0 10px 0 25px;">自动下架</span>
                                    <el-input size="small" v-model="input" placeholder="请输入内容"></el-input>
                                </td>
                            </tr>
                            <tr class="last">
                                <td></td>
                                <td>
                                    <el-button size="small" @click="addAct">确定</el-button>
                                </td>
                            </tr>
                        </table>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane class="shopset" label="商品描述">

                ???
                </el-tab-pane>
                <el-tab-pane class="shopset" label="商品属性">
                    <!-- <table class="table0 w100">
                        <tr>
                            <td>商品类型</td>
                            <td>
                                <el-select size="small" v-model="level" placeholder="请选择">
                                    <el-option v-for="item in levels" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </td>
                        </tr>
                        <tr>
                            <td>厂家</td>
                            <td>
                                <el-input size="small" v-model="input" placeholder="请输入内容"></el-input>
                            </td>
                        </tr>
                        <tr class="last">
                            <td></td>
                            <td>
                                <el-button size="small">确定保存</el-button>
                                <el-button size="small" style="margin-left: 15px;">返回</el-button>
                                <el-checkbox class="radio" v-model="auto" label="1" style="margin-left: 20px;">保存后继续添加商品</el-checkbox>
                            </td>
                        </tr>
                    </table> -->
                </el-tab-pane>
                <el-tab-pane class="shopset" label="商品规格">
                    <!-- <table class="table0 w100">
                        <tr>
                            <td>规格名称</td>
                            <td>
                                <el-checkbox-group v-model="checkList">
                                    <el-checkbox label="颜色"></el-checkbox>
                                    <el-checkbox label="尺码"></el-checkbox>
                                </el-checkbox-group>
                            </td>
                        </tr>
                        <tr>
                            <td>设置库存
                                <div style="font-size: 12px;text-align: left; color: #e51c23;">(温馨提示：无货空挂可能会引起买家或卖家的投诉。)</div>
                            </td>
                            <td>
                                <el-button size="small" style="margin-bottom: 10px;">增加库存</el-button>
                                <table class="table0 w100" style="font-size: 14px;">
                                    <tr>
                                        <td>编号</td>
                                        <td>颜色</td>
                                        <td>尺码</td>
                                        <td>库存</td>
                                        <td>操作</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <el-select size="mini" v-model="value" placeholder="请选择">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </td>
                                        <td>
                                            <el-select size="mini" v-model="value" placeholder="请选择">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </td>
                                        <td>
                                            <el-input size="mini" v-model="input" placeholder="请输入内容" style="margin-right: 10px;"></el-input>件</td>
                                        <td>删除</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <el-select size="mini" v-model="value" placeholder="请选择">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </td>
                                        <td>
                                            <el-select size="mini" v-model="value" placeholder="请选择">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </td>
                                        <td>
                                            <el-input size="mini" v-model="input" placeholder="请输入内容" style="margin-right: 10px;"></el-input>件</td>
                                        <td>删除</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr class="last">
                            <td></td>
                            <td>
                                <el-button size="small">确定保存</el-button>
                                <el-button size="small" style="margin-left: 15px;">返回</el-button>
                                <el-checkbox class="radio" v-model="auto" label="1" style="margin-left: 20px;">保存后继续添加商品</el-checkbox>
                            </td>
                        </tr>
                    </table> -->
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
// import headTop from '../components/headTop'
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.query.product_id,
      addForm: {},
      // dialogVisible: false,
      // handlePreview:'',
      // onRemove:'',
      // onPreview:'',
    //   dialogImageUrl: "",
      input: "",
      value: "",
      auto: "",
      checkList: "",
      start: "",
      levels: [
        {
          value: "淘亿",
          label: "淘亿"
        }
      ],
      options: [],
    //   level: "",
      tableData: []
    };
  },
  components: {
    // headTop,
  },
  created() {},
  mounted() {
    this.getGood();
  },
  methods: {
    addAct() {
      this.$confirm("确认提交吗?", "提示", {}).then(() => {
        axios
          .post("/good/add", {
            product_name: this.addForm.product_name,
            product_id: this.addForm.product_id,
            product_shop: this.addForm.product_shop,
            product_brand: this.addForm.product_brand,
            product_class: this.addForm.product_class,
            product_brand: this.addForm.product_brand,
            product_area: this.addForm.product_area,
            product_puprice: this.addForm.product_puprice,
            product_boxprice: this.addForm.product_boxprice,
            product_saleprice: this.addForm.product_saleprice,
            product_weight: this.addForm.product_weight,
            product_positon: this.addForm.product_positon,
            product_storage: this.addForm.product_storage,
            product_keyword: this.addForm.product_keyword,
            product_mend: this.addForm.product_mend
          })
          .then(res => {
            const data = res.data;
            if (data.status == 200) {
              this.$message({
                type: "success",
                message: "添加商家成功"
              });
              this.initData();
            }
          })
          .catch(error => {
            console.log(error);
          });
        // this.dialogAdd = false;
        // this.initData();
      });
    },
    getGood() {
      axios
        .get("/good/getGood", { params: { product_id: this.id } })
        .then(res => {
          const data = res.data;
          if (data.status == 200) {
            this.goodForm = data.result.goodList;
            console.log(this.goodForm);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    editSubmit() {
      axios
        .post("/good/edit", this.goodForm)
        .then(res => {
          const data = res.data;
          if (data.status == 200) {
            this.$message({
              type: "success",
              message: data.msg
            });
            //因为vue-router后退操作不刷新页面，此处强制刷新
            setTimeout(() => {
              this.goback();
            }, 1500);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    goback() {
      this.$router.go(-1);
    },
    gobackIndex() {
      this.$router.push({
        path: "/goodList"
      });
    }
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route(to, from) {
      this.id = this.$route.query.product_id;
      this.getGood();
    }
  }
};
</script>
<style lang="less">
@import "../style/sstyle";
</style>
