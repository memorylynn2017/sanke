<template>
    <div class="fillcontain shopdetail">
        <el-button class="backbtn_shop" @click="gobackIndex" sytle=" z-index:999;">返回</el-button>
        <div class="table_container">
            <el-tabs type="border-card">
                <el-tab-pane>
                    <span slot="label">会员资料</span>
                    <el-row :gutter="30">
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <div class="grid-content bg-purple">
                                <template>
                                    <el-form label-position="left" inline class="demo-table-expand qf" ref="shopForm" :model="shopForm">
                                        <el-form-item label="商家序号">
                                            <span style="color: #e51c23;">系统自动生成</span>
                                        </el-form-item>
                                        <el-form-item label="商家等级">
                                            <span>
                                                  <el-select size="small" v-model="shopForm.shop_level" placeholder="请选择">
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
                                                <el-input size="small" v-model="shopForm.shop_name" placeholder="请输入内容"></el-input><em>*</em>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="商家类型">
                                            <span>
                                                <el-radio-group v-model="shopForm.shop_type">
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
                                                <el-input size="small" v-model="shopForm.shop_short" placeholder="请输入内容"></el-input>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="授信额度">
                                            <span>
                                                <el-input size="small" v-model="shopForm.shop_credit" placeholder="请输入内容"></el-input>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="商家账号">
                                            <span>
                                              <el-input size="small" v-model="shopForm.shop_id" placeholder="请输入内容"></el-input>
                                              <em>*</em>
                                              <el-checkbox class="radio" v-model="auto" label="1">自动生成</el-checkbox>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="联系人">
                                            <span>
                                                <el-input size="small" v-model="shopForm.shop_cr_human" placeholder="请输入内容"></el-input>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="商家密码">
                                            <span>
                                                <el-input size="small" v-model="shopForm.shop_password" placeholder="请输入内容" type="password"></el-input><em>*</em>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="手机号码">
                                            <span>
                                                <el-input size="small" v-model="shopForm.shop_cr_telephone" ></el-input>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="确认密码">
                                            <span>
                                                <el-input size="small" v-model="shopForm.shop_confirm" type="password"></el-input><em>*</em>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="QQ/微信">
                                            <span>
                                                <el-input size="small" v-model="shopForm.shop_cr_weixi" ></el-input>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="所在市场">
                                            <span>
                                                <el-select size="small" v-model="shopForm.shop_Stall" placeholder="请选择">
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
                                            <span><el-input size="small" v-model="shopForm.shop_cr_address"></el-input></span>
                                        </el-form-item>
                                        <el-form-item label="所在档口">
                                            <span><el-input size="small" v-model="shopForm.shop_market"></el-input><em>*</em></span>
                                        </el-form-item>
                                        <el-form-item label="紧急联系电话">
                                            <span><el-input size="small" v-model="shopForm.shop_alert"></el-input></span>
                                        </el-form-item>
                                        <el-form-item label="所在楼层">
                                            <span>
                                              <el-select size="small" v-model="shopForm.shop_floor" placeholder="请选择">
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
                                                <el-radio-group v-model="shopForm.shop_auth">
                                                  <el-radio :label="1">实拍</el-radio>
                                                  <el-radio :label="2">退现</el-radio>
                                                  <el-radio :label="3">代发</el-radio>
                                                </el-radio-group>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="联系电话">
                                            <span>
                                                <el-input size="small" v-model="shopForm.shop_contact"></el-input><em>*</em>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="经营范围">
                                            <span>
                                                <el-input size="small" v-model="shopForm.shop_scope"></el-input><em>*</em>
                                            </span>
                                        </el-form-item>
                                        <el-form-item label="注册日期">
                                            <span>2017-08-03 13:47:09</span>
                                        </el-form-item>
                                        <el-form-item label="是否启用">
                                            <span>
                                            <el-radio-group v-model="shopForm.shop_status">
                                              <el-radio :label="1">启用</el-radio>
                                              <el-radio :label="2">禁用</el-radio>
                                            </el-radio-group>
                                            <em>*</em>
                                          </span>
                                        </el-form-item>
                                        <el-form-item class="special">
                                            <span>
                                                 <el-button>确定</el-button>
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
                            <el-select size="small" v-model="shopForm.shop_Stall" placeholder="请选择">
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
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            id: this.$route.query.shop_id,
            shopForm:{
                shop_auth:1
            },
            
            input: '',
            levels: [{
                value: '普通商家',
                label: '普通商家'
            }, {
                value: '合作商家',
                label: '合作商家'
            }, {
                value: 'VIP商家',
                label: 'VIP商家'
            }],
            marketplaces: [{
                value: '大西豪',
                label: '大西豪'
            }, {
                value: '三晟',
                label: '三晟'
            },{
                value: '佰润',
                label: '佰润'
            }, {
                value: '跨客城',
                label: '跨客城'
            },{
                value: '国大',
                label: '国大'
            }, {
                value: '大时代',
                label: '大时代'
            },{
                value: '女人街',
                label: '女人街'
            }, {
                value: '宝华',
                label: '宝华'
            }, {
                value: '国投',
                label: '国投'
            },{
                value: '柏美',
                label: '柏美'
            }, {
                value: '非凡',
                label: '非凡'
            }, {
                value: '新金马',
                label: '新金马'
            },{
                value: '圣迦',
                label: '圣迦'
            }, {
                value: '景叶',
                label: '景叶'
            }],
            floors: [{
                value: '1F',
                label: '1F'
            }, {
                value: '2F',
                label: '2F'
            }],
            classifys: [{
                value: '女装',
                label: '女装'
            }, {
                value: '—裤装',
                label: '—裤装'
            },{
                value: '—牛仔裤',
                label: '—牛仔裤'
            }, {
                value: '—运动',
                label: '—运动'
            }],
            shoptypes: [{
                value: '服装',
                label: '服装'
            }, {
                value: '配钸',
                label: '配钸'
            },{
                value: '鞋帽',
                label: '鞋帽'
            }, {
                value: '箱包',
                label: '箱包'
            }],
           
           
            classify: '',
            shoptype: '',
            brand: '',
            type:3,
            serve:1,
            start:1,
            auto: '',
            tableData: []
                
           
        }
    },
    components: {
    },
    created() {
        
    },
    mounted() {
        this.getShop();
    },

    methods: {

        getShop() {
            axios.get("/shop/getShop", { params: { shop_id: this.id } }).then(res => {
                const data = res.data
                if (data.status == 200) {
                    this.shopForm = data.result.shopList
                    console.log(this.shopForm)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.offset = (val - 1) * this.limit;
            this.getUsers()
        },
        gobackIndex() {
            this.$router.push({
                path: '/shopList'
            });
        },
    }
}
             

</script>
<style lang="less">
@import '../style/sstyle';

</style>
        


