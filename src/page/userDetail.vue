<template>
    <div class="fillcontain userdetail">
        <el-button class="backbtn_user" @click="handleReturn" sytle=" z-index:999;">返回</el-button>
        <!-- <el-button class="backbtn_user" @click="handleEdit" sytle=" z-index:999;">修改</el-button> -->
        <div class="table_container">
            <el-tabs type="border-card">
                <el-tab-pane>
                    <span slot="label">会员资料</span>

                    <el-row :gutter="30">
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <div class="grid-content bg-purple">
                    <template>
                        <el-form  label-position="left" inline class="demo-table-expand tableone" ref="userForm" :model="userForm">
                            <div class="el-form-items">
                                <el-form-item label="会员ID">
                                    <span>{{userForm.user_id}}</span>
                                </el-form-item>
                                <el-form-item label="采购数量">
                                    <span>79820</span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="用户名">
                                    <span>{{userForm.usercall}}</span>
                                </el-form-item>
                                <el-form-item label="累计金额">
                                    <!-- 此用户消费的累计金额 -->
                                    <span>136789.32</span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="等级">
                                    <el-input v-show='this.flag1' v-focus="true" v-model="userForm.levelname" @keyup.enter.native="upload" @blur="saveIconClick1" style="border-bottom:1px solid #ccc;width:88px;"></el-input>
                                    <span v-show='!this.flag1'>{{userForm.levelname}}<i class="writeo" @click='edit1()' style="cursor:pointer"></i></span>
                                </el-form-item>
                                <el-form-item label="真实姓名">
                                    <el-input v-show='this.flag2' v-focus="true" v-model="userForm.username" @keyup.enter.native="saveIconClick2" @blur="saveIconClick2" style="border-bottom:1px solid #ccc;width:88px;"></el-input>
                                    <span v-show='!this.flag2'>{{userForm.username}}<i class="writeo" @click='edit2()' style="cursor:pointer"></i></span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="积分">
                                    <span>{{userForm.user_score}}</span>
                                </el-form-item>
                                <el-form-item label="性别">
                                    <span>{{userForm.usersex}}</span>
                                </el-form-item>
                            </div>
  
  


                            <div class="el-form-items">
                                <el-form-item label="禁用">
                                    <span>{{userForm.user_status}}</span>
                                </el-form-item>
                                <el-form-item label="出生日期">
                                    <span>{{userForm.userdate}}</span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="注册时间">
                                    <span>{{userForm.registe_time}}</span>
                                </el-form-item>
                                <el-form-item label="城市">
                                    <el-input v-show='this.flag3' v-focus="true" v-model="userForm.usercity" @keyup.enter.native="saveIconClick3" @blur="saveIconClick3" style="border-bottom:1px solid #ccc;width:88px;"></el-input>
                                    <span v-show='!this.flag3'>{{userForm.usercity}}<i class="writeo" @click='edit3()' style="cursor:pointer"></i></span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="注册IP">
                                    <span>{{userForm.registe_IP}}</span>
                                </el-form-item>
                                <el-form-item label="(E-mail)">
                                    <span>{{userForm.useremail}}</span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="最近访问">
                                    <span>{{userForm.login_time}}</span>
                                </el-form-item>
                                <el-form-item label="联系电话">
                                    <el-input v-show='this.flag4' v-focus="true" v-model="userForm.usercall" @keyup.enter.native="saveIconClick4" @blur="saveIconClick4" style="border-bottom:1px solid #ccc;width:125px;"></el-input>
                                    <span v-show='!this.flag4'>{{userForm.usercall}}<i class="writeo" @click='edit4()' style="cursor:pointer"></i></span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="登录IP">
                                    <span>{{userForm.login_IP}}</span>
                                </el-form-item>
                                <el-form-item label="QQ微信">
                                    <el-input v-show='this.flag5' v-focus="true" v-model="userForm.userqq" @keyup.enter.native="saveIconClick5" @blur="saveIconClick5" style="border-bottom:1px solid #ccc;width:88px;"></el-input>
                                    <span v-show='!this.flag5'>{{userForm.userqq}}<i class="writeo" @click='edit5()' style="cursor:pointer"></i></span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="访问次数">
                                    <span>{{userForm.login_count}}</span>
                                </el-form-item>
                                <el-form-item label="支付宝">
                                    <span>{{userForm.userzi}}</span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item class="special" label="全部订单(1000)">
                                </el-form-item>
                                <el-form-item class="special" label="待付款(10)">
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item class="special" label="待收货(10)">
                                </el-form-item>
                                <el-form-item class="special" label="已完成(1000)">
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item class="special" label="已取消(100)">
                                </el-form-item>
                            </div>
                        </el-form>
                        <el-form label-position="left" inline class="demo-table-expand tabletwo">
                            <div class="el-form-items">
                                <el-form-item label="交易排名">
                                    <span>100</span>
                                </el-form-item>
                                <el-form-item label="贡献值">
                                    <span>10000.00</span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="平均单量">
                                    <span>12件</span>
                                </el-form-item>
                                <el-form-item label="平均单价">
                                    <span>26.00</span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="30天订单数">
                                    <span>20</span>
                                </el-form-item>
                                <el-form-item label="30天交易额">
                                    <span>6000.00</span>
                                </el-form-item>
                            </div>
                        </el-form>
                        <div class="customer">
                            <p>客户标签：<i class="writeo"></i></p>
                            <div class="item"><span>女装</span><span>韩版</span><span>好质量</span></div>
                            <div class="item"><span>爽快</span><span>老客户</span></div>
                        </div>
                        <div class="customer">
                            <p>客户顾问：
                            <el-input v-show='this.flag6' v-focus="true" v-model="userForm.user_expert" @keyup.enter.native="saveIconClick6" @blur="saveIconClick6" style="border-bottom:1px solid #ccc;width:88px;"></el-input><span v-show='!this.flag6'>{{userForm.user_expert}}<i class="writeo" @click='edit6()' style="cursor:pointer"></i></span> </p>
                            <p>备注信息：
                            <el-input v-show='this.flag7' v-focus="true" v-model="userForm.user_bei" @keyup.enter.native="saveIconClick7" @blur="saveIconClick7" style="border-bottom:1px solid #ccc;width:250px;"></el-input><span v-show='!this.flag7'>{{userForm.user_bei}}<i class="writeo" @click='edit7()' style="cursor:pointer"></i></span> </p>
                                    
                           
                        </div>
                    </template>
                    </div>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane class="yue" label="余额(100000.00)">
                    <div class="yue-head">
                        <el-select v-model="value12">
                            <el-option v-for="item in zioptions" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <span>总记录数<i>11</i>笔</span>
                        <span>存入总金额￥<i>35862.00</i></span>
                        <span>支出总金额￥<i>35862.00</i></span>
                    </div>
                    <el-table :data="tableData" highlight-current-row style="width: 100%">
                        <el-table-column type="index" width="60">
                        </el-table-column>
                        <el-table-column label="操作类型" width="100" property="edit_type">
                        </el-table-column>
                        <el-table-column label="订单号" width="120" property="pursh_code">
                        </el-table-column>
                        <el-table-column label="存入" width="100" property="save_in">
                        </el-table-column>
                        <el-table-column label="支出" width="100" property="save_out">
                        </el-table-column>
                        <el-table-column label="余额" width="110" property="cost_count">
                        </el-table-column>
                        <el-table-column label="交易时间" width="130" property="sell_time">
                        </el-table-column>
                        <el-table-column label="操作人" width="100" property="edit_name">
                        </el-table-column>
                        <el-table-column label="备注" width="140" property="edit_exp">
                        </el-table-column>
                        <el-table-column label="查看" width="140">
                            <template slot-scope="scope">
                                <el-button style="border:none;" size="small">[订单]</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="收藏(99)" disabled>收藏(99)</el-tab-pane>
                <el-tab-pane label="关注(99)" disabled>关注(99)</el-tab-pane>
                <el-tab-pane label="足迹(99)">
                    <div class="steps qf">
                        <div class="step">
                            <div class="pic"><img src=".././assets/img/steppic.png" alt=""></div>
                            <p class="price">￥ 25.00</p>
                            <p class="date">2017-10-11 23:01</p>
                        </div>
                        <div class="step">
                            <div class="pic"><img src=".././assets/img/steppic.png" alt=""></div>
                            <p class="price">￥ 25.00</p>
                            <p class="date">2017-10-11 23:01</p>
                        </div>
                        <div class="step">
                            <div class="pic"><img src=".././assets/img/steppic.png" alt=""></div>
                            <p class="price">￥ 25.00</p>
                            <p class="date">2017-10-11 23:01</p>
                        </div>
                        <div class="step">
                            <div class="pic"><img src=".././assets/img/steppic.png" alt=""></div>
                            <p class="price">￥ 25.00</p>
                            <p class="date">2017-10-11 23:01</p>
                        </div>
                        <div class="step">
                            <div class="pic"><img src=".././assets/img/steppic.png" alt=""></div>
                            <p class="price">￥ 25.00</p>
                            <p class="date">2017-10-11 23:01</p>
                        </div>
                        <div class="step">
                            <div class="pic"><img src=".././assets/img/steppic.png" alt=""></div>
                            <p class="price">￥ 25.00</p>
                            <p class="date">2017-10-11 23:01</p>
                        </div>
                        <div class="step">
                            <div class="pic"><img src=".././assets/img/steppic.png" alt=""></div>
                            <p class="price">￥ 25.00</p>
                            <p class="date">2017-10-11 23:01</p>
                        </div>
                        <div class="step">
                            <div class="pic"><img src=".././assets/img/steppic.png" alt=""></div>
                            <p class="price">￥ 25.00</p>
                            <p class="date">2017-10-11 23:01</p>
                        </div>
                        <div class="step">
                            <div class="pic"><img src=".././assets/img/steppic.png" alt=""></div>
                            <p class="price">￥ 25.00</p>
                            <p class="date">2017-10-11 23:01</p>
                        </div>
                        <div class="step">
                            <div class="pic"><img src=".././assets/img/steppic.png" alt=""></div>
                            <p class="price">￥ 25.00</p>
                            <p class="date">2017-10-11 23:01</p>
                        </div>
                        <div class="step">
                            <div class="pic"><img src=".././assets/img/steppic.png" alt=""></div>
                            <p class="price">￥ 25.00</p>
                            <p class="date">2017-10-11 23:01</p>
                        </div>
                        <div class="step">
                            <div class="pic"><img src=".././assets/img/steppic.png" alt=""></div>
                            <p class="price">￥ 25.00</p>
                            <p class="date">2017-10-11 23:01</p>
                        </div>
                        <div class="step">
                            <div class="pic"><img src=".././assets/img/steppic.png" alt=""></div>
                            <p class="price">￥ 25.00</p>
                            <p class="date">2017-10-11 23:01</p>
                        </div>
                        <div class="step">
                            <div class="pic"><img src=".././assets/img/steppic.png" alt=""></div>
                            <p class="price">￥ 25.00</p>
                            <p class="date">2017-10-11 23:01</p>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="地址(99)">
                    <div class="addresses qf">
                        <div class="address">
                            <i class="num">100</i>
                            <div class="peoplemsg">收货人： <span>陈困斌</span><span>13610002345</span></div>
                            <p class="txt last"><span>广东省</span><span>广州市</span><span>海珠区</span>南洲路119号南洲路119号南洲路119号南洲路119号（元粮油仓库）</p>
                            <div class="other">
                                <p><i></i> 设置为默认地址</p>
                            </div>
                        </div>
                        <div class="address">
                            <i class="num">6</i>
                            <div class="peoplemsg">收货人： <span>LILiLee</span><span>13610002345</span></div>
                            <p class="txt"><span>马来西亚</span><span>西马</span></p>
                            <p class="txt">南洲路119号南洲路119号南洲路119号南洲路119号（元粮油仓库）</p>
                            <div class="other">
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <!-- <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
                <el-form  label-width="120px" :model="editForm">
                    <el-form-item label="所属会员">
                        <el-input v-model="editForm.username" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所属等级">
                        <el-input v-model="editForm.levelname" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所属城市">
                        <el-input v-model="editForm.usercity" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model="editForm.usercall" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="QQ/微信">
                        <el-input v-model="editForm.userqq" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="客户顾问">
                        <el-input v-model="editForm.user_expert" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="备注信息">
                        <el-input v-model="editForm.user_bei" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                <el-button @click.native="editFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit">提交</el-button>
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
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,
      flag5: false,
      flag6: false,
      flag7: false,
      //   editFormVisible: false,
      //   editLoading: false,
      id: this.$route.query.user_id,
      userForm: {},
      editForm: {},
      tableData: [
        {
          edit_type: "提现",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "提现",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "提现",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "提现",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "退运费",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "退运费",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "财务调节",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "财务调节",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "充值提交",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "充值提交",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "缺货支付",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "缺货支付",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "在线支付",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "在线支付",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "在线支付",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "余额支付",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "余额支付",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "余额支付",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "余额支付",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        },
        {
          edit_type: "余额支付",
          pursh_code: "900023",
          save_in: "100",
          save_out: "1200",
          cost_count: "50",
          sell_time: "2016-10-10",
          edit_name: "管理员",
          edit_exp: "补运费"
        }
      ],
      zioptions: [
        {
          value: "在线支付",
          label: "在线支付"
        },
        {
          value: "缺货支付",
          label: "缺货支付"
        },
        {
          value: "退运费",
          label: "退运费"
        },
        {
          value: "充值提交",
          label: "充值提交"
        },
        {
          value: "账务调节",
          label: "账务调节"
        },
        {
          value: "余额支付",
          label: "余额支付"
        },
        {
          value: "提现",
          label: "提现"
        },
        {
          value: "订单取消",
          label: "订单取消"
        }
      ],
      value12: "请选择",
      currentRow: null,
      offset: 0,
      limit: 20,
      count: 0,
      currentPage: 1
    };
  },
  components: {},
  created() {},
  mounted() {
    this.getUser();
  },
  activated() {
    this.getUser();
  },
  directives: {
    focus: function(el, option) {
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
  },
  methods: {
    async getUser() {
      axios
        .get("/user/getUser", { params: { user_id: this.id } })
        .then(res => {
          const data = res.data;
          if (data.status == 200) {
            this.userForm = data.result.userList;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleReturn() {
      this.$router.push({
        path: "/userList"
      });
    },
    edit1() {
      this.flag1 = true;
    },
    saveIconClick1() {
      this.upload();
      console.log("save");
      this.flag1 = false;
    },
    edit2() {
      this.flag2 = !this.flag2;
    },
    saveIconClick2() {
      this.upload();
      console.log("save");
      this.flag2 = !this.flag2;
    },
    edit3() {
      this.flag3 = !this.flag3;
    },
    saveIconClick3() {
      this.upload();
      console.log("save");
      this.flag3 = !this.flag3;
    },
    edit4() {
      this.flag4 = !this.flag4;
    },
    saveIconClick4() {
      this.upload();
      console.log("save");
      this.flag4 = !this.flag4;
    },
    edit5() {
      this.flag5 = !this.flag5;
    },
    saveIconClick5() {
      this.upload();
      console.log("save");
      this.flag5 = !this.flag5;
    },
    edit6() {
      this.flag6 = !this.flag6;
    },
    saveIconClick6() {
      this.upload();
      console.log("save");
      this.flag6 = !this.flag6;
    },
    edit7() {
      this.flag7 = !this.flag7;
    },
    saveIconClick7() {
      this.upload();
      console.log("save");
      this.flag7 = !this.flag7;
    },

    upload() {
      axios
        .post("/user/editUser", this.userForm)
        .then(res => {
          const data = res.data;
          if (data.status == 200) {
            this.$message({
              type: "success",
              message: data.msg
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
      this.getUser();
    }
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route(to, from) {
      this.id = this.$route.query.user_id;
      this.getUser();
    }
  }
};
</script>
<style lang="less">
@import "../style/sstyle";
</style>

