<template>
    <div class="fillcontain">
      <head-top></head-top>
      <div class="table_container">
        <el-tabs type="border-card">
          <el-button class="backbtn" @click="gobackIndex">返回</el-button>
          <el-tab-pane>
            <span slot="label">会员资料</span>
              <table class="table0 w100">
                <tr>
                  <td>商品编号</td>
                  <td><el-input size="small" v-model="input" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                  <td>商品原始编号</td>
                  <td><el-input size="small" v-model="input" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                  <td>商品名称</td>
                  <td>
                    <el-input size="small" v-model="input" placeholder="请输入内容"></el-input>
                    <span style="margin-left: 20px;font-size: 12px; color: #000;">查看图片</span>
                  </td>
                </tr>
                <tr>
                  <td>所属商家</td>
                  <td>
                    <el-input size="small" v-model="input" placeholder="请输入内容"></el-input>
                    <el-checkbox class="radio" v-model="auto" label="1">记住我的选择</el-checkbox>
                  </td>
                </tr>
                <tr>
                  <td>发货商</td>
                  <td><el-input size="small" v-model="input" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                  <td>商品类别</td>
                  <td>
                    <el-select size="small" v-model="level" placeholder="请选择">
                      <el-option
                        v-for="item in levels"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td>商品品牌</td>
                  <td>
                    <el-select size="small" v-model="level" placeholder="请选择">
                      <el-option
                        v-for="item in levels"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td>所属分区</td>
                  <td>
                    <el-select size="small" v-model="level" placeholder="请选择">
                      <el-option
                        v-for="item in levels"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td>拿货价</td>
                  <td><el-input size="small" v-model="input" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                  <td>打包价</td>
                  <td><el-input size="small" v-model="input" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                  <td>市场售价</td>
                  <td><el-input size="small" v-model="input" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                  <td>商品重量</td>
                  <td><el-input size="small" v-model="input" placeholder="请输入内容"></el-input>&nbsp;&nbsp;KG</td>
                </tr>
                <tr>
                  <td>货位</td>
                  <td><el-input size="small" v-model="input" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                  <td>库存量</td>
                  <td><el-input size="small" v-model="input" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                  <td>上传商品图片</td>
                  <td>
                    <el-upload
                      style="width: 400px; padding: 5px; border: 1px solid #ececec;"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove">
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog v-model="dialogVisible" size="tiny">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                  </td>
                </tr>
                <tr>
                  <td>页面关键词</td>
                  <td><el-input type="textarea" v-model="form.desc"></el-input></td>
                </tr>
                <tr>
                  <td>提示标签</td>
                  <td><el-input type="textarea" v-model="form.desc"></el-input></td>
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
                    <span>自动下架</span>
                    <el-input size="small" v-model="input" placeholder="请输入内容"></el-input>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td><el-button>确定</el-button></td>
                </tr>
              </table>
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
                        <el-form-item  class="special">
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
    import headTop from '../components/headTop'
    export default {
        data(){
            return {
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
                classify:'',
                shoptype: '',
                brand:'',
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
            headTop,
        },
        created(){
            this.initData();
        },
        methods: {
            async initData(){
                try{
                    const countData = await getUserCount();
                    if (countData.status == 1) {
                        this.count = countData.count;
                    }else{
                        throw new Error('获取数据失败');
                    }
                    this.getUsers();
                }catch(err){
                    console.log('获取数据失败', err);
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
                this.getUsers()
            },
            async getUsers(){
                const Users = await getUserList({offset: this.offset, limit: this.limit});
                this.tableData = [];
                Users.forEach(item => {
                    const tableData = {};
                    tableData.username = item.username;
                    tableData.registe_time = item.registe_time;
                    tableData.city = item.city;
                    this.tableData.push(tableData);
                })
            },
            gobackIndex() {
              this.$router.push({
                  path: '/manage'
              });
            }
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .table0 {
      tr {
        td {
          font-size: 16px;
          color: #646464;
          box-sizing: border-box;
          &:first-child {
            width: 160px;
            text-align: right;
          }
          .el-input {
            width: 200px;
          }
        }
      }
    }
</style>
