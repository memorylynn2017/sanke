<template>
    <div class="fillcontain addgood">
        <!-- <head-top></head-top> -->
        <el-button class="backbtn_good" @click="gobackIndex()" sytle=" z-index:999;" style="position:relative;top:60px;">返回</el-button>
        <div class="table_container gooddetail">
            <el-tabs type="border-card">
                <el-tab-pane>
                    <span slot="label">基本信息</span>
                    <el-form ref="addForm" :model="addForm" label-width="80px">
                        <table class="table0 w100">
                            <tr>
                                <td>下单时间</td>
                                <td>
                                    <el-date-picker v-model="addForm.order_times" type="datetime"  placeholder="选择日期时间">
                                    </el-date-picker>
                                </td>
                            </tr>
      
     
    
                            <tr>
                                <td>获取渠道</td>
                                <td>
                                    <el-select size="small" v-model="addForm.order_fetch" placeholder="请选择">
                                        <el-option v-for="item in fetch" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <td>订单生成号</td>
                                <td>
                                    <el-input size="small" v-model="addForm.order_id" placeholder="请输入内容"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>数量</td>
                                <td>
                                    <el-input size="small" v-model="addForm.order_count" placeholder="请输入内容"></el-input>
                                    <!-- <span style="margin-left: 20px;font-size: 12px; color: #000;">查看图片</span> -->
                                </td>
                            </tr>
                            <tr>
                                <td>金额</td>
                                <td>
                                    <el-input size="small" v-model="addForm.order_price" placeholder="请输入内容"></el-input>
                                    <!-- <el-checkbox class="radio" v-model="auto" label="1">记住我的选择</el-checkbox> -->
                                </td>
                            </tr>
                            <tr>
                                <td>运费</td>
                                <td>
                                    <el-input size="small" v-model="addForm.order_freight" placeholder="请输入内容"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>!会员ID</td>
                                <td>
                                    <el-select size="small" v-model="addForm.order_key" placeholder="请选择">
                                        <el-option v-for="item in levelsA" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <td>!会员等级</td>
                                <td>
                                    <el-select size="small" v-model="addForm.order_leval" placeholder="请选择">
                                        <el-option v-for="item in levelsB" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>
                             <tr>
                                <td>!收货人</td>
                                <td>
                                    <el-input size="small" v-model="addForm.order_goodsman" placeholder="请输入内容"></el-input>
                                </td>
                            </tr>
                            <tr>
                                <td>!收货地区</td>
                                <td>
                                    <el-select size="small" v-model="addForm.order_area" placeholder="请选择">
                                        <el-option v-for="item in levels_a" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <td>配送方式</td>
                                <td>
                                    <el-select size="small" v-model="addForm.order_sendm" placeholder="请选择">
                                        <el-option v-for="item in levels_b" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <td>订单状态</td>
                                <td>
                                    <el-select size="small" v-model="addForm.order_purstatus" placeholder="请选择">
                                        <el-option v-for="item in purstatus" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <td>发货状态</td>
                                <td>
                                    <el-select size="small" v-model="addForm.order_senstatus" placeholder="请选择">
                                        <el-option v-for="item in senstatus" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <td>付款状态</td>
                                <td>
                                    <el-select size="small" v-model="addForm.order_paystatus" placeholder="请选择">
                                        <el-option v-for="item in paystatus" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
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
                <el-tab-pane class="shopset" label="生成采购单">
                    拓展供应商采购信息测试
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
      id: this.$route.query.order_id,
      addForm: {},
      // dialogVisible: false,
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
      fetch: [
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
      purstatus: [
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
      senstatus: [
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
      paystatus: [
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
      levelsA: [
        {
          value: "关联会员1",
          label: "关联会员1"
        },
        {
          value: "关联会员2",
          label: "关联会员2"
        },
        {
          value: "关联会员3",
          label: "关联会员3"
        },
        {
          value: "关联会员4",
          label: "关联会员4"
        },
        {
          value: "关联会员5",
          label: "关联会员5"
        },
        {
          value: "关联会员6",
          label: "关联会员6"
        }
      ],
      levelsB: [
        {
          value: "注册会员",
          label: "注册会员"
        },
        {
          value: "批发会员",
          label: "批发会员"
        },
        {
          value: "VIP会员",
          label: "VIP会员"
        }
      ],
      levels_a: [
        {
          value: "广州",
          label: "广州"
        },
        {
          value: "深圳",
          label: "深圳"
        },
        {
          value: "东莞",
          label: "东莞"
        }
      ],
      levels_b: [
        {
          value: "国际快递",
          label: "国际快递"
        },
        {
          value: "国内快递",
          label: "国内快递"
        }
      ],
      options: [],
      tableData: []
    };
  },
  components: {
    // headTop,
  },
  created() {},
  mounted() {
    // this.getOrder();
  },
  methods: {
    addAct() {
      this.$confirm("确认提交吗?", "提示", {}).then(() => {
        axios
          .post("/order/add", {
            order_id: this.addForm.order_id,
            order_fetch: this.addForm.order_fetch,
            order_count: this.addForm.order_count,
            order_price: this.addForm.order_price,
            order_freight: this.addForm.order_freight,
            order_key: this.addForm.order_key,
            order_area: this.addForm.order_area,
            order_sendm: this.addForm.order_sendm,
            order_purstatus: this.addForm.order_purstatus,
            order_senstatus: this.addForm.order_senstatus,
            order_paystatus: this.addForm.order_paystatus,
            order_times: this.addForm.order_times,
            order_goodsman: this.addForm.order_goodsman,
            order_leval: this.addForm.order_leval
          })
          .then(res => {
            const data = res.data;
            if (data.status == 200) {
              this.$message({
                type: "success",
                message: "添加订单成功"
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
    // getOrder() {
    //   axios
    //     .get("/order/getOrder", { params: { order_id: this.id } })
    //     .then(res => {
    //       const data = res.data;
    //       if (data.status == 200) {
    //         this.orderForm = data.result.orderList;
    //         console.log(this.orderForm);
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
    // editSubmit() {
    //   axios
    //     .post("/order/edit", this.orderForm)
    //     .then(res => {
    //       const data = res.data;
    //       if (data.status == 200) {
    //         this.$message({
    //           type: "success",
    //           message: data.msg
    //         });
    //         setTimeout(() => {
    //           this.goback();
    //         }, 1500);
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
    // goback() {
    //   this.$router.go(-1);
    // },
    gobackIndex() {
      this.$router.push({
        path: "/orderList"
      });
    }
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    // $route(to, from) {
    //     this.id = this.$route.query.order_id;
    //     this.getGood();
    // }
  }
};
</script>
<style lang="less">
@import "../style/sstyle";
</style>
