<template>
    <div class="fillcontain">
        <!-- <head-top></head-top> -->
        <el-button class="backbtn" @click="gobackIndex" sytle=" z-index:999;">返回</el-button>
        <div class="table_container">
            <el-tabs type="border-card">
                <el-tab-pane>
                    <span slot="label">基本信息</span>
                    <table class="table0 w100">
                        <tr>
                            <td rowspan='2' width="13%" class="tar">订单状态操作</td>
                            <td>
                                <el-button class="btn" size="mini">支付</el-button>
                                <el-button class="btn" size="mini">采购打印</el-button>
                                <el-button class="btn" size="mini">订单打印</el-button>
                                <el-button class="btn" size="mini">发货</el-button>
                                <el-button class="btn" size="mini">物流异常登记</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td class="tal">
                                <el-button class="btn" size="mini">签收</el-button>
                                <el-button class="btn" size="mini">退款</el-button>
                                <el-button class="btn" size="mini">退货</el-button>
                                <el-button class="btn" size="mini">换货</el-button>
                                <el-button class="btn" size="mini">作废</el-button>
                                <el-button class="btn" size="mini">完成</el-button>
                                <el-button class="btn" size="mini">结算</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td width="14%" class="tar">订单状态</td>
                            <td><span>[已打订单]</span><span>[已支付]</span><span>[已发货]</span></td>
                        </tr>
                    </table>
                    <table class="table0 w100 basemsg">
                        <tr>
                            <td>订单编号</td>
                            <td>20170822112876</td>
                            <td>下单时间</td>
                            <td>2017-08-22 23:42:51</td>
                        </tr>
                        <tr>
                            <td>商品总金额</td>
                            <td class="basecolor">￥225.00元</td>
                            <td>订单总金额</td>
                            <td class="basecolor">￥225.00元 [已付金额：￥225.00元]</td>
                        </tr>
                        <tr>
                            <td>配送方式</td>
                            <td>立邦到付
                                <el-button size="mini" style="margin-left: 10px;">快递单打印</el-button>
                            </td>
                            <td>支付方式</td>
                            <td>余额支付</td>
                        </tr>
                        <tr>
                            <td>配送费用</td>
                            <td>￥0.00元</td>
                            <td>支付手续费</td>
                            <td>￥0.00元</td>
                        </tr>
                        <tr>
                            <td>商品重量</td>
                            <td>2.6KG</td>
                            <td>供货商家</td>
                            <td>TAOEE</td>
                        </tr>
                        <tr>
                            <td>留言</td>
                            <td>留言留言留言留言留言留言</td>
                            <td>物流公司</td>
                            <td>立邦到付</td>
                        </tr>
                    </table>
                    <table class="table0 w100 basemsg">
                        <tr>
                            <td>收货人姓名</td>
                            <td>張如玉<i class="writeo"></i></td>
                            <td>收货地区</td>
                            <td>台湾省<i class="writeo"></i></td>
                        </tr>
                        <tr>
                            <td>收货地址</td>
                            <td>407台中市西屯區大進街702號<i class="writeo"></i></td>
                            <td>约定收货时间</td>
                            <td>任何时间</td>
                        </tr>
                        <tr>
                            <td>电话</td>
                            <td></td>
                            <td>手机</td>
                            <td>886986898978<i class="writeo"></i></td>
                        </tr>
                    </table>
                    <table class="table0 w100 basemsg">
                        <tr>
                            <td>用户名</td>
                            <td>Allice422</td>
                            <td>会员等级</td>
                            <td>批发会员</td>
                        </tr>
                        <tr>
                            <td>E-mail</td>
                            <td></td>
                            <td>最后登录IP</td>
                            <td>36.235.91.130</td>
                        </tr>
                        <tr>
                            <td>预存款余额</td>
                            <td>￥1243.00元</td>
                            <td>积分</td>
                            <td>886</td>
                        </tr>
                    </table>
                </el-tab-pane>
                <el-tab-pane label="商品信息">
                    <el-table :data="productMsg" highlight-current-row style="width: 100%">
                        <el-table-column prop="adress" label="货位" width="130"></el-table-column>
                        <el-table-column prop="name" label="商家名"></el-table-column>
                        <el-table-column prop="num" label="商品编号" width="100"></el-table-column>
                        <el-table-column label="图片" width="100">
                            <template slot-scope="scope">
                                <image :src="scope.row.image" width="60" height="60" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="proName" label="商品名称"></el-table-column>
                        <el-table-column prop="standard" label="规格" width="130"></el-table-column>
                        <el-table-column prop="price" label="价格" width="100"></el-table-column>
                        <el-table-column prop="count" label="数量" width="100"></el-table-column>
                        <el-table-column prop="actualSalary" label="实发" width="100"></el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="收/退款记录">
                    <div class="record" style="margin-bottom: 20px;">
                        <p class="title">收款记录</p>
                        <el-table :data="getRecord" highlight-current-row style="width: 100%">
                            <el-table-column prop="num" label="支付编号" width="120"></el-table-column>
                            <el-table-column prop="type" label="支付类型"></el-table-column>
                            <el-table-column prop="way" label="支付方式" width="100"></el-table-column>
                            <el-table-column prop="money" label="支付金额" width="150"></el-table-column>
                            <el-table-column prop="fee" label="支付手续费"></el-table-column>
                            <el-table-column prop="pay" label="付款人" width="100"></el-table-column>
                            <el-table-column prop="state" label="支付状态" width="100"></el-table-column>
                            <el-table-column prop="date" label="支付时间" width="180"></el-table-column>
                        </el-table>
                    </div>
                    <div class="record">
                        <p class="title">退款记录</p>
                        <el-table :data="refundOrder" highlight-current-row style="width: 100%">
                            <el-table-column prop="num" label="退款编号" width="120"></el-table-column>
                            <el-table-column prop="type" label="退款类型"></el-table-column>
                            <el-table-column prop="way" label="退款方式" width="100"></el-table-column>
                            <el-table-column prop="money" label="退款金额" width="150"></el-table-column>
                            <el-table-column prop="fee" label="退款手续费"></el-table-column>
                            <el-table-column prop="payee" label="收款人" width="100"></el-table-column>
                            <el-table-column prop="state" label="退款状态" width="100"></el-table-column>
                            <el-table-column prop="date" label="退款时间" width="180"></el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="退/换货记录"></el-tab-pane>
                <el-tab-pane label="订单日志">
                    <el-table :data="dailyRecord" highlight-current-row style="width: 100%">
                        <el-table-column prop="type" label="日志类型" width="180"></el-table-column>
                        <el-table-column prop="name" label="操作员" width="180"></el-table-column>
                        <el-table-column prop="msg" label="日志信息" width="260"></el-table-column>
                        <el-table-column prop="date" label="操作时间"></el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
// import headTop from '../components/headTop'
export default {
    data() {
        return {
            input: '',
            productMsg: [{
                adress: 'GD_3F_311A',
                name: '拉拉家',
                num: '1006',
                image: 'https://cbu01.alicdn.com/img/ibank/2017/381/393/3957393183_878940382.60x60.jpg',
                proName: '时尚house 实拍1...',
                standard: 'L 白色送腰带',
                price: '￥23.00元',
                count: '100',
                actualSalary: '95'
            }],
            getRecord: [{
                num: 'ZF10016636',
                type: '在线支付',
                way: '微信',
                money: '￥286350.00元',
                fee: '￥0.00元',
                pay: 'elis_oshin',
                state: '成功',
                date: '2017-08-22 10:05:57'
            }],
            refundOrder: [{
                num: 'ZF10013366',
                type: '缺货退款',
                way: '微信',
                money: '￥6350.00元',
                fee: '￥0.00元',
                payee: 'elis_oshin',
                state: '成功',
                date: '2017-08-25 13:10:20'
            }, {
                num: 'ZF10013366',
                type: '运费退款',
                way: '微信',
                money: '￥350.00元',
                fee: '￥0.00元',
                payee: 'elis_oshin',
                state: '成功',
                date: '2017-08-25 13:10:20'
            }, {
                num: 'ZF10013337',
                type: '订单作废',
                way: '微信',
                money: '￥286350.00元',
                fee: '￥0.00元',
                payee: 'elis_oshin',
                state: '成功',
                date: '2017-08-25 13:10:20'
            }],
            dailyRecord: [{
                type: '订单发货',
                name: 'kf002',
                msg: '2017-08-23 17:29:53.064',
                date: '2017-08-23 17:29:53'
            }, {
                type: '物流接收',
                name: 'sp003',
                msg: ' 2017-08-23 12:33:27.18',
                date: '2017-08-23 12:33:27'
            }, {
                type: '商家接收',
                name: 'sc001',
                msg: '2017-08-23 11:08:56.254',
                date: '2017-08-23 11:08:56'
            }, {
                type: '订单支付',
                name: '',
                msg: ' 支付总金额￥225.00',
                date: '2017-08-23 11:08:56'
            }, {
                type: '创建',
                name: ' Allice422',
                msg: '',
                date: '2017-08-23 11:08:56'
            }],
            tableData: []
        }
    },
    components: {
        // headTop,
    },
    methods: {
        gobackIndex() {
            this.$router.push({
                path: '/orderList'
            });
        }
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

.tal {
    text-align: left!important;
}

.tac {
    text-align: center!important;
}

.tar {
    text-align: right!important;
}



.table_container {
    position: relative;
    .el-tabs__content {
        position: relative;
    }
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
    .el-tabs--border-card {
        border-bottom: 1px solid #fff;
        box-shadow: none;
    }
}

@media screen and (max-width: 820px) {
    .el-form .el-form-item {
        width: 100%!important;
        border-left: 1px solid #ececec;
        border-right: 1px solid #ececec;
    }
}

@basecolor: #e51c23!important;

.basecolor {
    color: @basecolor;
}

.w100 {
    width: 100%;
}

.table0 {
    border: 1px solid #ececec;
    border-collapse: collapse;
    margin-bottom: 20px;
    font-size: 14px;
    color: #646464;
}

.table0 td,
.table0 th {
    padding: 5px 10px;
    border: 1px solid #ececec;
}

.el-input__inner:focus,
.el-select .el-input__inner:focus,
.el-radio__inner:hover {
    border-color: @basecolor;
}

.el-select-dropdown__item.selected {
    background-color: @basecolor;
}

.el-button:focus,
.el-button:hover {
    color: @basecolor;
    border-color: @basecolor;
}

.el-radio__input.is-checked .el-radio__inner {
    border-color: @basecolor;
    background: @basecolor;
}


.writeo {
    display: inline-block;
    width: 21px;
    height: 16px;
    vertical-align: middle;
    background: url(".././assets/img/write.png") no-repeat center center;
    margin-left: 10px;
}



.backbtn {
    width: 100px;
    font-size: 16px;
    color: #333;
    padding: 6px 15px;
    background: #e6e6e6;
    border: 1px solid #bbbbbb;
    border-radius: 4px;
    position: relative;
    top: 45px;
    left: 87%;
    z-index: 1000;
}

.table_container {
    padding: 0;
}


.record .title {
    font-size: 14px;
    padding: 10px;
}

.basemsg tr {
    td:nth-child(2n+1) {
        width: 14%;
        text-align: right;
    }
    td:nth-child(2n) {
        width: 36%;
    }
}

</style>
