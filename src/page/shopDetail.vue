<template>
    <div class="fillcontain">
        <!-- <head-top></head-top> -->
        <el-button class="backbtn" @click="gobackIndex" sytle=" z-index:999;">返回</el-button>
        <div class="table_container">
            <el-tabs type="border-card">
                <el-tab-pane>
                    <span slot="label">会员资料</span>
                    <el-row :gutter="30">
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <div class="grid-content bg-purple">
                                <template>
                                    <el-form label-position="left" inline class="demo-table-expand qf">
                                        <el-form-item label="商家序号">
                                            <span style="color: #e51c23;">系统自动生成</span>
                                        </el-form-item>
                                        <el-form-item label="商家等级">
                                            <span>
                            <el-select size="small" v-model="level" placeholder="请选择">
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
                                            <span><el-input size="small" v-model="input" placeholder="请输入内容"></el-input><em>*</em></span>
                                        </el-form-item>
                                        <el-form-item label="商家类型">
                                            <span>
                            <el-radio-group v-model="type">
                              <el-radio :label="3">A类</el-radio>
                              <el-radio :label="6">B类</el-radio>
                              <el-radio :label="9">C类</el-radio>
                              <el-radio :label="12">T类</el-radio>
                            </el-radio-group>
                            <em>*</em>
                          </span>
                                        </el-form-item>
                                        <el-form-item label="商家简称">
                                            <span><el-input size="small" v-model="input" placeholder="请输入内容"></el-input></span>
                                        </el-form-item>
                                        <el-form-item label="授信额度">
                                            <span><el-input size="small" v-model="input" placeholder="请输入内容"></el-input></span>
                                        </el-form-item>
                                        <el-form-item label="商家账号">
                                            <span>
                          <el-input size="small" v-model="input" placeholder="请输入内容"></el-input>
                          <em>*</em>
                          <el-checkbox class="radio" v-model="auto" label="1">自动生成</el-checkbox>
                          </span>
                                        </el-form-item>
                                        <el-form-item label="联系人">
                                            <span><el-input size="small" v-model="input" placeholder="请输入内容"></el-input></span>
                                        </el-form-item>
                                        <el-form-item label="商家密码">
                                            <span><el-input size="small" v-model="input" placeholder="请输入内容"></el-input><em>*</em></span>
                                        </el-form-item>
                                        <el-form-item label="手机号码">
                                            <span><el-input size="small" v-model="input" ></el-input></span>
                                        </el-form-item>
                                        <el-form-item label="确认密码">
                                            <span><el-input size="small" v-model="input" ></el-input><em>*</em></span>
                                        </el-form-item>
                                        <el-form-item label="QQ/微信">
                                            <span><el-input size="small" v-model="input" ></el-input></span>
                                        </el-form-item>
                                        <el-form-item label="所在市场">
                                            <span>
                            <el-select size="small" v-model="marketplace" placeholder="请选择">
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
                                            <span><el-input size="small" v-model="input"></el-input></span>
                                        </el-form-item>
                                        <el-form-item label="所在档口">
                                            <span><el-input size="small" v-model="input"></el-input><em>*</em></span>
                                        </el-form-item>
                                        <el-form-item label="紧急联系电话">
                                            <span><el-input size="small" v-model="input"></el-input></span>
                                        </el-form-item>
                                        <el-form-item label="所在楼层">
                                            <span>
                            <el-select size="small" v-model="floor" placeholder="请选择">
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
                            <el-radio-group v-model="serve">
                              <el-radio :label="3">实拍</el-radio>
                              <el-radio :label="6">退现</el-radio>
                              <el-radio :label="9">代发</el-radio>
                            </el-radio-group>
                          </span>
                                        </el-form-item>
                                        <el-form-item label="联系电话">
                                            <span><el-input size="small" v-model="input"></el-input><em>*</em></span>
                                        </el-form-item>
                                        <el-form-item label="经营范围">
                                            <span><el-input size="small" v-model="input"></el-input><em>*</em></span>
                                        </el-form-item>
                                        <el-form-item label="注册日期">
                                            <span>2017-08-03 13:47:09</span>
                                        </el-form-item>
                                        <el-form-item label="是否启用">
                                            <span>
                            <el-radio-group v-model="start">
                              <el-radio :label="3">启用</el-radio>
                              <el-radio :label="6">禁用</el-radio>
                            </el-radio-group>
                            <em>*</em>
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
                            <el-select size="small" v-model="brand" placeholder="请选择">
                              <el-option
                                v-for="item in brands"
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
// import headTop from '../components/headTop'
export default {
    data() {
        return {
            input: '',
            levels: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            marketplaces: [{
                value: '选项11',
                label: '市场1'
            }, {
                value: '选项22',
                label: '市场2'
            }],
            floors: [{
                value: '选项11',
                label: 'F1'
            }, {
                value: '选项22',
                label: 'F2'
            }],
            classifys: [{
                value: '选项11',
                label: 'F1'
            }, {
                value: '选项22',
                label: 'F2'
            }],
            shoptypes: [{
                value: '选项11',
                label: 'F1'
            }, {
                value: '选项22',
                label: 'F2'
            }],
            brands: [{
                value: '选项11',
                label: 'F1'
            }, {
                value: '选项22',
                label: 'F2'
            }],
            level: '',
            marketplace: '',
            floor: '',
            classify: '',
            shoptype: '',
            brand: '',
            type: 3,
            serve: '',
            start: '',
            auto: '',
            tableData: [{
                edit_type: '提现',
                pursh_code: '900023',
                save_in: '100',
                save_out: '1200',
                cost_count: '50',
                sell_time: '2016-10-10',
                edit_name: '管理员',
                edit_exp: '补运费',
            }]
        }
    },
    components: {
        // headTop,
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
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.offset = (val - 1) * this.limit;
            this.getUsers()
        },
        // async getUsers() {
        //     const Users = await getUserList({ offset: this.offset, limit: this.limit });
        //     this.tableData = [];
        //     Users.forEach(item => {
        //         const tableData = {};
        //         tableData.username = item.username;
        //         tableData.registe_time = item.registe_time;
        //         tableData.city = item.city;
        //         this.tableData.push(tableData);
        //     })
        // },
        gobackIndex() {
            this.$router.push({
                path: '/shopList'
            });
        }
    },
}

</script>
<style lang="less">
@import '../style/mixin';
// @import '../style/sstyle';
.table_container .el-select .el-input .el-input__icon {
    color: #bfcbd9;
    font-size: 12px;
    transition: -webkit-transform 0.3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
    -webkit-transform: translateY(-50%) rotateZ(180deg);
    transform: translateY(-50%) rotateZ(180deg);
    line-height: 16px;
    left: 160px;
    top: 52%;
    cursor: pointer;
}

.qf {
    *zoom: 1;
}

.qf:after {
    content: '';
    display: table;
    clear: both;
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
    top: 60px;
    left: 87%;
    z-index: 1000;
}

.table_container {
    position: relative;
    .backbtn {
        width: 100px;
        font-size: 16px;
        color: #333;
        padding: 6px 15px;
        background: #e6e6e6;
        border: 1px solid #bbbbbb;
        border-radius: 4px;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1;
    }
    .el-tabs__content {
        position: static;
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
    .el-form {
        border-top: 1px solid #ececec;
        .el-form-item {
            width: 50%;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            float: left;
            border-bottom: 1px solid #ececec;
            position: relative;
            &:nth-child(2n+1) {
                border-left: 1px solid #ececec;
            }
            &:nth-child(2n) {
                border-right: 1px solid #ececec;
            }
            &:last-child,
            &.last {
                border-bottom: none;
            }
            .el-form-item__label {
                width: 150px;
                padding-right: 30px;
                font-size: 14px;
                color: #666;
                text-align: right;
                position: absolute;
                left: 0;
                top: 0;
            }
            .el-form-item__content {
                width: 100%;
                color: #666;
                margin-left: 150px;
                em {
                    color: #e51c23;
                    font-style: normal;
                    margin-left: 5px;
                }
                .el-input {
                    width: 200px;
                }
                .el-input__inner:focus,
                .el-radio__inner:hover,
                .el-radio__input.is-focus,
                .el-checkbox__inner:hover,
                {
                    border-color: #e51c23;
                }
                .el-radio__input.is-checked .el-radio__inner {
                    border-color: #e51c23;
                    background: #e51c23;
                }
                .el-checkbox__input.is-checked .el-checkbox__inner {
                    border-color: #e51c23;
                    background: #e51c23;
                }
            }
            &.special {
                width: 100%;
                padding-left: 150px;
                border: none;
                margin-top: 20px;
                .el-form-item__content {
                    margin-left: 0;
                    .el-button:hover,
                    .el-button:active {
                        border-color: #e51c23;
                        span {
                            color: #e51c23;
                        }
                    }
                }
            }
        }
    }
    .el-tabs--border-card {
        border-bottom: 1px solid #fff;
        box-shadow: none;
    }
}

.shopset {
    .el-form .el-form-item {
        width: 100%;
        border-left: 1px solid #ececec;
        border-right: 1px solid #ececec;
        .warn {
            color: #e51c23;
        }
    }
}

@media screen and (max-width: 820px) {
    .el-form .el-form-item {
        width: 100%!important;
        border-left: 1px solid #ececec;
        border-right: 1px solid #ececec;
    }
}

</style>
