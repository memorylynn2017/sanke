<template>
    <div class="fillcontain shopdetail">
        <el-button class="backbtn_shop" @click="gobackIndex" sytle=" z-index:999;">返回</el-button>
        <div class="table_container">
            <el-tabs type="border-card">
                <el-tab-pane class="shoplist">
                    <span slot="label">会员资料</span>
                    <el-row :gutter="30">
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <div class="grid-content bg-purple">
                                <template>
                                    <el-form label-position="left" inline class="demo-table-expand qf" ref="addForm" :model="addForm">
                                        <!-- <el-form-item label="商家序号">
                                            <span style="color: #e51c23;">系统自动生成</span>
                                        </el-form-item> -->
                                        <el-form-item label="商家序号">
                                            <span>
                                                <el-input size="small" v-model="addForm.shop_id" placeholder="商家ID"></el-input>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="商家等级">
                                            <span>
                                                  <el-select size="small" v-model="addForm.shop_level" placeholder="请选择">
                                                      <el-option
                                                        v-for="item in levels"
                                                        :key="item.value"
                                                        :label="item.label"
                                                        :value="item.value">
                                                      </el-option>
                                                  </el-select>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="商家名称">
                                            <span>
                                                <el-input size="small" v-model="addForm.shop_name" placeholder="请输入内容"></el-input><em>*</em>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="商家类型">
                                            <span>
                                                <el-radio-group v-model="addForm.shop_type">
                                                  <el-radio :label="1" value="A类">A类</el-radio>
                                                  <el-radio :label="2" value="B类">B类</el-radio>
                                                  <el-radio :label="3" value="C类">C类</el-radio>
                                                  <el-radio :label="4" value="T类">T类</el-radio>
                                                </el-radio-group>
                                                <em>*</em>
                                          </span>
                                        </el-form-item>
                                        <el-form-item label="商家简称">
                                            <span>
                                                <el-input size="small" v-model="addForm.shop_short" placeholder="请输入内容"></el-input>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="授信额度">
                                            <span>
                                                <el-input size="small" v-model="addForm.shop_credit" placeholder="请输入内容"></el-input>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="商家账号">
                                            <span>
                                              <el-input size="small" v-model="addForm.shop_accout" placeholder="请输入内容"></el-input>
                                              <em>*</em>
                                              <el-checkbox class="radio" v-model="auto" label="1">自动生成</el-checkbox>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="联系人">
                                            <span>
                                                <el-input size="small" v-model="addForm.shop_cr_human" placeholder="请输入内容"></el-input>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="商家密码">
                                            <span>
                                                <el-input size="small" v-model="addForm.shop_password" placeholder="请输入内容" type="password"></el-input><em>*</em>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="手机号码">
                                            <span>
                                                <el-input size="small" v-model="addForm.shop_cr_telephone" ></el-input>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="确认密码">
                                            <span>
                                                <el-input size="small" v-model="addForm.shop_confirm" type="password"></el-input><em>*</em>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="QQ/微信">
                                            <span>
                                                <el-input size="small" v-model="addForm.shop_cr_weixi" ></el-input>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="所在市场">
                                            <span>
                                                <el-select size="small" v-model="addForm.shop_Stall" placeholder="请选择">
                                                  <el-option
                                                    v-for="item in marketplaces"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                  </el-option>
                                                </el-select>
                                                <em>*</em>
                                          </span>
                                        </el-form-item>
                                        <el-form-item label="通信地址">
                                            <span><el-input size="small" v-model="addForm.shop_cr_address"></el-input></span>
                                        </el-form-item>
                                        <el-form-item label="所在档口">
                                            <span><el-input size="small" v-model="addForm.shop_market"></el-input><em>*</em></span>
                                        </el-form-item>
                                        <el-form-item label="紧急电话">
                                            <span><el-input size="small" v-model="addForm.shop_alert"></el-input></span>
                                        </el-form-item>
                                        <el-form-item label="所在楼层">
                                            <span>
                                              <el-select size="small" v-model="addForm.shop_floor" placeholder="请选择">
                                              <el-option
                                                v-for="item in floors"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                              </el-option>
                                              </el-select>
                                              <em>*</em>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="服务认证">
                                            <span>
                                                <el-radio-group v-model="addForm.shop_auth">
                                                  <el-radio :label="1">实拍</el-radio>
                                                  <el-radio :label="2">退现</el-radio>
                                                  <el-radio :label="3">代发</el-radio>
                                                </el-radio-group>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="联系电话">
                                            <span>
                                                <el-input size="small" v-model="addForm.shop_contact"></el-input><em>*</em>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="经营范围">
                                            <span>
                                                <el-input size="small" v-model="addForm.shop_scope"></el-input><em>*</em>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="注册日期">
                                            <span>2017-08-03 13:47:09</span>
                                        </el-form-item>
                                        <el-form-item label="是否启用">
                                            <span>
                                            <el-radio-group v-model="addForm.shop_status">
                                              <el-radio :label="1">启用</el-radio>
                                              <el-radio :label="2">禁用</el-radio>
                                            </el-radio-group>
                                            <em>*</em>
                                          </span>
                                        </el-form-item>
                                        <el-form-item class="special">
                                            <span>
                                                 <el-button @click="addAct">确定</el-button>
                                            </span>
                                        </el-form-item>
                                    </el-form>
                                </template>
                            </div>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane class="shopset" label="店铺设置">
                    <el-row :gutter="30">
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <div class="grid-content bg-purple">
                                <template>
                                    <el-form label-position="left" inline class="demo-table-expand qf">
                                        <el-form-item label="淘宝店铺地址">
                                            <span><el-input size="small" v-model="input" placeholder="请输入内容"></el-input><span class="warn">！请设置淘宝店铺所有分类页面的分页URL</span></span>
                                        </el-form-item>
                                        <el-form-item label="搜索页面大小">
                                            <span><el-input size="small" v-model="input" placeholder="请输入内容"></el-input><span class="warn">！请设置淘宝店铺所有分类页面的分页数</span></span>
                                        </el-form-item>
                                        <el-form-item label="价格统一减去">
                                            <span><el-input size="small" v-model="input" placeholder="请输入内容"></el-input><span class="warn">！系统提示：若设置0~1之间的小数则为打折，例如0.5表示五折(打包价同理)</span></span>
                                        </el-form-item>
                                        <el-form-item label="打包价统一减去">
                                            <span><el-input size="small" v-model="input" placeholder="请输入内容"></el-input><em>*</em></span>
                                        </el-form-item>
                                        <el-form-item label="重量">
                                            <span><el-input size="small" v-model="input" placeholder="请输入内容"></el-input><em>*</em></span>
                                        </el-form-item>
                                        <el-form-item label="分类">
                                            <span>
                            <el-select size="small" v-model="classify" placeholder="请选择">
                              <el-option
                                v-for="item in classifys"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                            <em>*</em>
                          </span>
                                        </el-form-item>
                                        <el-form-item label="类型">
                                            <span>
                            <el-select size="small" v-model="shoptype" placeholder="请选择">
                              <el-option
                                v-for="item in shoptypes"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                            <em>*</em>
                          </span>
                                        </el-form-item>
                                        <el-form-item label="品牌">
                                            <span>
                            <el-select size="small" v-model="addForm.shop_Stall" placeholder="请选择">
                              <el-option
                                v-for="item in marketplaces"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </span>
                                        </el-form-item>
                                        <el-form-item class="special">
                                            <span><el-button>确定</el-button></span>
                                        </el-form-item>
                                    </el-form>
                                </template>
                            </div>
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
            <!-- <el-dialog title="新增" v-model="dialogAdd" :close-on-click-modal="false" >
                <el-form  label-width="120px;" :model="addForm">
                    <el-form-item label="所属商家">
                        <el-input v-model="addForm.shop_name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商家简称">
                        <el-input v-model="addForm.shop_short" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所属类型">
                        <el-input v-model="addForm.shop_type" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所属等级">
                        <el-input v-model="addForm.shop_level" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商家账号">
                        <el-input v-model="addForm.shop_accout" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人">
                        <el-input v-model="addForm.shop_cr_human" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model="addForm.shop_cr_telephone" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="QQ/微信">
                        <el-input v-model="addForm.shop_cr_weixi" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="通迅地址">
                        <el-input v-model="addForm.shop_cr_address" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="紧急联系人">
                        <el-input v-model="addForm.shop_alert" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所在市场">
                        <el-input v-model="addForm.shop_Stall" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所在档口">
                        <el-input v-model="addForm.shop_market" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所在楼层">
                        <el-input v-model="addForm.shop_floor" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="经营范围">
                        <el-input v-model="addForm.shop_scope" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系方式">
                        <el-input v-model="addForm.shop_contact" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="服务认证">
                        <el-input v-model="addForm.shop_auth" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="是否启用">
                        <el-input v-model="addForm.shop_status" auto-complete="off"></el-input>
                    </el-form-item>

                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click.native="dialogAdd = false">取消</el-button>
                    <el-button type="primary" @click.native="addAct">添加</el-button>
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
      id: this.$route.query.shop_id,
      addForm: {},
      input: "",

      // 以下这些都是选项卡
      levels: [
        {
          value: "普通商家",
          label: "普通商家"
        },
        {
          value: "合作商家",
          label: "合作商家"
        },
        {
          value: "VIP商家",
          label: "VIP商家"
        }
      ],
      marketplaces: [
        {
          value: "大西豪",
          label: "大西豪"
        },
        {
          value: "三晟",
          label: "三晟"
        },
        {
          value: "佰润",
          label: "佰润"
        },
        {
          value: "跨客城",
          label: "跨客城"
        },
        {
          value: "国大",
          label: "国大"
        },
        {
          value: "大时代",
          label: "大时代"
        },
        {
          value: "女人街",
          label: "女人街"
        },
        {
          value: "宝华",
          label: "宝华"
        },
        {
          value: "国投",
          label: "国投"
        },
        {
          value: "柏美",
          label: "柏美"
        },
        {
          value: "非凡",
          label: "非凡"
        },
        {
          value: "新金马",
          label: "新金马"
        },
        {
          value: "圣迦",
          label: "圣迦"
        },
        {
          value: "景叶",
          label: "景叶"
        }
      ],
      floors: [
        {
          value: "1F",
          label: "1F"
        },
        {
          value: "2F",
          label: "2F"
        }
      ],
      classifys: [
        {
          value: "女装",
          label: "女装"
        },
        {
          value: "—裤装",
          label: "—裤装"
        },
        {
          value: "—牛仔裤",
          label: "—牛仔裤"
        },
        {
          value: "—运动",
          label: "—运动"
        }
      ],
      shoptypes: [
        {
          value: "服装",
          label: "服装"
        },
        {
          value: "配钸",
          label: "配钸"
        },
        {
          value: "鞋帽",
          label: "鞋帽"
        },
        {
          value: "箱包",
          label: "箱包"
        }
      ],

      classify: "",
      shoptype: "",
      brand: "",
       type: 3,
      serve: 1,
      start: 1,
      auto: "",
      tableData: []
    };
  },
  components: {},
  created() {},
  mounted() {},

  methods: {
    addAct() {
      this.$confirm("确认提交吗?", "提示", {}).then(() => {
        axios
          .post("/shop/add", {
            shop_name: this.addForm.shop_name,
            shop_short: this.addForm.shop_short,
            shop_id: this.addForm.shop_id,
            shop_password: this.addForm.shop_password,
            shop_confirm: this.addForm.shop_confirm,
            shop_level: this.addForm.shop_level,
            shop_type: this.addForm.shop_type,
            shop_accout: this.addForm.shop_accout,
            shop_credit: this.addForm.shop_credit,
            shop_cr_human: this.addForm.shop_cr_human,
            shop_cr_address: this.addForm.shop_cr_address,
            shop_cr_telephone: this.addForm.shop_cr_telephone,
            shop_cr_weixi: this.addForm.shop_cr_weixi,
            shop_market: this.addForm.shop_market,
            shop_Stall: this.addForm.shop_Stall,
            shop_floor: this.addForm.shop_floor,
            shop_contact: this.addForm.shop_contact,
            shop_scope: this.addForm.shop_scope,
            shop_status: this.addForm.shop_status,
            shop_alert: this.addForm.shop_alert
          })
          .then(res => {
            const data = res.data;
            if (data.status == 200) {
              this.$message({
                type: "success",
                message: "添加商家成功"
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      });
    },
    gobackIndex() {
      this.$router.push({
        path: "/shopList"
      });
    }
  }
};
</script>
<style lang="less">
@import "../style/sstyle";
</style>
        


