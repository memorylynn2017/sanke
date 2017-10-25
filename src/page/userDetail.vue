<template>
    <div class="fillcontain userdetail">
        <!-- <head-top></head-top> -->
        <el-button class="backbtn_user" @click="handleReturn" sytle=" z-index:999;">返回</el-button>
        <div class="table_container">
            <el-tabs type="border-card">
                <el-tab-pane>
                    <span slot="label">会员资料</span>
                    <template>
                        <el-form label-position="left" inline class="demo-table-expand tableone" ref="userForm" :model="userForm">
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
                                    <span>{{userForm.username}}</span>
                                </el-form-item>
                                <el-form-item label="累计金额">
                                    <span>136789.32</span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="等级">
                                    <span>{{userForm.levelname}}<i class="writeo"></i></span>
                                </el-form-item>
                                <el-form-item label="真实姓名">
                                    <span>{{userForm.username}}<i class="writeo"></i></span>
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
                                    <span>{{userForm.usercity}}<i class="writeo"></i></span>
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
                                    <span>{{userForm.usercall}}<i class="writeo"></i></span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="登录IP">
                                    <span>{{userForm.login_IP}}</span>
                                </el-form-item>
                                <el-form-item label="QQ微信">
                                    <span>{{userForm.userqq}}<i class="writeo"></i></span>
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
                            <p>客服顾问<span style="margin-left: 22px;">{{userForm.user_expert}}</span></p>
                            <p>备注信息：{{userForm.user_bei}}<i class="writeo"></i></p>
                        </div>
                    </template>
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
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            id: this.$route.query.user_id,
            userForm: {
                user_id: '',
                username: '',

            },
            tableData: [{
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }, {
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',

            }],
            zioptions: [{
                value: '在线支付',
                label: '在线支付'
            }, {
                value: '缺货支付',
                label: '缺货支付'
            }, {
                value: '退运费',
                label: '退运费'
            }, {
                value: '充值提交',
                label: '充值提交'
            }, {
                value: '账务调节',
                label: '账务调节'
            }, {
                value: '余额支付',
                label: '余额支付'
            }, {
                value: '提现',
                label: '提现'
            }, {
                value: '订单取消',
                label: '订单取消'
            }],
            value12: '请选择',
            currentRow: null,
            offset: 0,
            limit: 20,
            count: 0,
            currentPage: 1,
        }
    },
    components: {},
    created() {},
    mounted() {
        this.getUser();
    },
    methods: {
        getUser() {
            axios.get("/admin/getUser", { params: { user_id: this.id } }).then(res => {
                const data = res.data
                if (data.status == 200) {
                    this.userForm = data.result.userList
                    console.log(this.userForm)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        handleReturn() {
            this.$router.push({
                path: '/userList'
            });
        },
    },
    watch: {
        // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
        '$route' (to, from) {
            this.id = this.$route.query.user_id;
            this.getUser();
        }
    }
}

</script>
<style lang="less">
@import '../style/sstyle';

</style>
