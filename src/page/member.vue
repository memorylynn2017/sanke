<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-tabs type="border-card">
                <el-button class="backbtn" @click="handleReturn">返回</el-button>
                <el-tab-pane>
                    <span slot="label">会员资料</span>
                    <template>
                        <el-form label-position="left" inline class="demo-table-expand tableone">
                            <div class="el-form-items">
                                <el-form-item label="会员ID">
                                    <span>80001737</span>
                                </el-form-item>
                                <el-form-item label="采购数量">
                                    <span>79820</span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="用户名">
                                    <span>13678954132</span>
                                </el-form-item>
                                <el-form-item label="累计金额">
                                    <span>136789.32</span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="等级">
                                    <span>批发会员<i class="writeo"></i></span>
                                </el-form-item>
                                <el-form-item label="真实姓名">
                                    <span><i class="writeo"></i></span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="积分">
                                    <span>81168</span>
                                </el-form-item>
                                <el-form-item label="性别">
                                    <span>女</span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="禁用">
                                    <span>否</span>
                                </el-form-item>
                                <el-form-item label="出生日期">
                                    <span>1990-11-23</span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="注册时间">
                                    <span>2015-09-24 08:51</span>
                                </el-form-item>
                                <el-form-item label="城市">
                                    <span>新加坡<i class="writeo"></i></span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="注册IP">
                                    <span>109.156.21.146</span>
                                </el-form-item>
                                <el-form-item label="(E-mail)">
                                    <span>eleonorachen@gmail.com</span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="最近访问">
                                    <span>2017-09-24 08:51</span>
                                </el-form-item>
                                <el-form-item label="联系电话">
                                    <span><i class="writeo"></i></span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="登录IP">
                                    <span>109.156.21.146</span>
                                </el-form-item>
                                <el-form-item label="QQ微信">
                                    <span><i class="writeo"></i></span>
                                </el-form-item>
                            </div>
                            <div class="el-form-items">
                                <el-form-item label="访问次数">
                                    <span>1001</span>
                                </el-form-item>
                                <el-form-item label="支付宝">
                                    <span></span>
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
                            <p>客服顾问<span style="margin-left: 22px;">许顺</span></p>
                            <p>备注信息：<i class="writeo"></i></p>
                        </div>
                    </template>
                </el-tab-pane>
                <el-tab-pane class="yue" label="余额(100000.00)">
                    <div class="yue-head">
                        <!-- <el-select >
                            <el-option>请选择</el-option>
                            <el-option>余额支付</el-option>
                            <el-option>在线支付</el-option>
                            <el-option>退运费</el-option>
                        </el-select> -->
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
import headTop from '../components/headTop'
import { getUserList, getUserCount } from '@/api/getData'
export default {
    data() {
        return {
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
            currentRow: null,
            offset: 0,
            limit: 20,
            count: 0,
            currentPage: 1,
        }
    },
    components: {
        headTop,
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                const countData = await getUserCount();
                if (countData.status == 1) {
                    this.count = countData.count;
                } else {
                    throw new Error('获取数据失败');
                }
                this.getUsers();
            } catch (err) {
                console.log('获取数据失败', err);
            }
        },
        handleReturn() {
          this.$router.push({
            path: '/userList'
          });
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          this.currentPage = val;
          this.offset = (val - 1) * this.limit;
          this.getUsers()
        },
      },
    }


</script>
<style lang="less">
@import '../style/mixin';
.qf {
    *zoom: 1;
}

.qf:after {
    content: '';
    display: table;
    clear: both;
}

.table_container {
   /* border: 1px solid red; */


    .el-tabs__item.is-active {
        color: #e51c23;
    }
    .el-tabs__item {
        padding: 0 40px;
        height: 50px;
        line-height: 50px;
        color: #000;
    }
    .el-tabs--border-card>.el-tabs__header {
        background: #f5f5f5;
    }
    .el-form.tableone {
        width: 56%;
        margin: 0 10px 100px;
        float: left;
    }
    .el-form {
        border: 1px solid #ececec;
        .el-form-items {
            border-bottom: 1px solid #ececec;
            &:last-child {
                border-bottom: none;
            }
        }
        .el-form-item {
            width: 49%;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            .el-form-item__label {
                width: 140px;
                padding-left: 30px;
                font-size: 16px;
                color: #666;
            }
            .el-form-item__content {
                color: #666;
            }
            &.special {
                .el-form-item__label {
                    width: 100%;
                    padding-left: 30px;
                    color: #333;
                    box-sizing: border-box;
                }
            }
        }
    }
    .el-form.tabletwo {
        width: 38%;
        margin: 0 10px;
        float: right;
        .el-form-item__label {
            width: 120px;
            padding-left: 20px;
        }
    }
    .customer {
        width: 38%;
        float: right;
        padding: 10px 16px 0;
        margin: 26px 10px 0;
        border: 1px solid #f5f5f5;
        box-sizing: border-box;
        p {
            font-size: 16px;
            color: #666;
            line-height: 20px;
            margin-bottom: 15px;
        }
        .item {
            span {
                display: inline-block;
                padding: 0 15px;
                height: 30px;
                font-size: 12px;
                color: #e51c23;
                line-height: 30px;
                border: 1px solid #e51c23;
                border-radius: 4px;
                margin-right: 12px;
                margin-bottom: 18px;
            }
        }
    }
    .writeo {
        display: inline-block;
        width: 21px;
        height: 16px;
        vertical-align: middle;
        background: url(".././assets/img/write.png") no-repeat center center;
        margin-left: 10px;
    }
    .yue {
        .yue-head {
            margin-bottom: 20px;
            .el-select {
                width: 100px;
                margin-left: 25px;
                margin-right: 6px;
                .el-input__inner {
                    height: 30px;
                    padding: 0 10px;
                }
            }
            span {
                font-size: 12px;
                color: #000;
                margin-left: 22px;
            }
        }
        .el-table {
            th {
                background: #4f606b;
            }
            .el-table__footer-wrapper thead div,
            .el-table__header-wrapper thead div {
                background: #4f606b;
                color: #fff;
            }
        }
    }
    .steps {
        padding-bottom: 50px;
        .step {
            width: 130px;
            border: 1px solid #bbbbbb;
            box-sizing: border-box;
            margin-right: 18px;
            margin-bottom: 20px;
            float: left;
            .pic {
                padding: 4px 4px 0;
                img {
                    width: 100%;
                    vertical-align: top;
                }
            }
            .price {
                font-size: 12px;
                color: #e51c23;
                line-height: 30px;
                padding-left: 8px;
                border-bottom: 1px solid #dddddd;
            }
            .date {
                font-size: 12px;
                color: #fff;
                line-height: 24px;
                padding-left: 12px;
                background: #646464;
            }
        }
    }
    .addresses {
        .address {
            float: left;
            margin-right: 20px;
            width: 375px;
            height: 149px;
            padding: 10px 10px 0;
            font-size: 12px;
            color: #000;
            line-height: 30px;
            border: 1px solid #ddd;
            box-sizing: border-box;
            overflow: hidden;
            position: relative;
            .num {
                display: inline-block;
                width: 30px;
                height: 20px;
                font-size: 12px;
                color: #fff;
                line-height: 20px;
                text-align: center;
                background: #e51c23;
                position: absolute;
                top: 0;
                right: 0;
            }
            .peoplemsg {
                span {
                    margin-right: 20px;
                }
            }
            .txt {
                line-height: 24px;
                &.last {
                    padding-bottom: 10px;
                }
                span {
                    margin-right: 8px;
                }
            }
            .other {
                padding: 10px;
                line-height: 28px;
                border-top: 1px solid #e6e6e6;
                i {
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    vertical-align: text-bottom;
                    background: url(".././assets/img/address.png") no-repeat center center;
                    margin-right: 12px;
                }
            }
        }
    }
    .el-tabs--border-card {

        border: 1px solid #fff;
        box-shadow: none;
        .backbtn {
            width: 100px;
            font-size: 16px;
            color: #333;
            padding: 6px 15px;
            background: #e6e6e6;
            border: 1px solid #bbbbbb;
            border-radius: 4px;
            position: relative;
            top: -7px;
            left: 89%;
            z-index: 1000;
        }
    }

    .el-select .el-input .el-input__icon {
        color: #bfcbd9;
        font-size: 12px;
        transition: -webkit-transform .3s;
        transition: transform .3s;
        transition: transform .3s, -webkit-transform .3s;
        -webkit-transform: translateY(-50%) rotateZ(180deg);
        transform: translateY(-50%) rotateZ(180deg);
        line-height: 16px;
        left: 66px;
        top: 52%;
        cursor: pointer;
    }
}

</style>
