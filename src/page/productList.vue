<template>
    <div class="fillcontain">
      <head-top></head-top>
      <div class="table_container">
        <el-tabs type="border-card">
          <el-button class="backbtn" @click="gobackIndex">返回</el-button>
          <el-tab-pane>
            <span slot="label">基本信息</span>
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
                  <td><el-input type="textarea" style="width: 410px;"></el-input></td>
                </tr>
                <tr>
                  <td>提示标签</td>
                  <td><el-input type="textarea" style="width: 410px;"></el-input></td>
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
                  <td><el-button  size="small">确定</el-button></td>
                </tr>
              </table>
          </el-tab-pane>
          <el-tab-pane class="shopset" label="商品描述">
          </el-tab-pane>
          <el-tab-pane class="shopset" label="商品属性">
            <table class="table0 w100">
                <tr>
                  <td>商品类型</td>
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
                  <td>厂家</td>
                  <td><el-input size="small" v-model="input" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr class="last">
                  <td></td>
                  <td>
                    <el-button size="small">确定保存</el-button>
                    <el-button size="small" style="margin-left: 15px;">返回</el-button>
                    <el-checkbox class="radio" v-model="auto" label="1" style="margin-left: 20px;">保存后继续添加商品</el-checkbox>
                  </td>
                </tr>
            </table>
          </el-tab-pane>
          <el-tab-pane class="shopset" label="商品规格">
            <table class="table0 w100">
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
                  <td>设置库存<div style="font-size: 12px;text-align: left; color: #e51c23;">(温馨提示：无货空挂可能会引起买家或卖家的投诉。)</div></td>
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
                                  <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                            </td>
                            <td>
                                <el-select size="mini" v-model="value" placeholder="请选择">
                                  <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                            </td>
                            <td><el-input size="mini" v-model="input" placeholder="请输入内容" style="margin-right: 10px;"></el-input>件</td>
                            <td>删除</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <el-select size="mini" v-model="value" placeholder="请选择">
                                  <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                            </td>
                            <td>
                                <el-select size="mini" v-model="value" placeholder="请选择">
                                  <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                            </td>
                            <td><el-input size="mini" v-model="input" placeholder="请输入内容" style="margin-right: 10px;"></el-input>件</td>
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
            </table>
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
                level: '',
                tableData: []
            }
        },
        components: {
            headTop,
        },
        methods: {
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
        &.last {
            td {
                border: none;
            }
        }
      }
    }
</style>
