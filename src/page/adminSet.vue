<template>
    <div class="fillcontain">
        <head-top></head-top>
        <header class="admin_title">管理员信息</header>
        <!-- <div class="admin_set">
            <ul id="example">
                <li v-for="item in loginList">
                    <span>姓名：{{item.username}}</span>
                    <br>
                    <span>密码：{{item.password}}</span>
                </li>
                
            </ul>
        </div> -->
        <div class="table_container">
            <!-- <el-table :data="loginList" style="width: 100%">
                <el-table-column type="expand">
                </el-table-column>
                <el-table-column label="用户ID" prop="userid">
                </el-table-column>
                <el-table-column label="用户名" prop="username">
                </el-table-column>
                <el-table-column label="用户密码" prop="password">
                </el-table-column>
                <el-table-column label="操作" width="160">
                    <template scope="scope">
                        <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button size="small" type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table> -->
            <template>
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column label="日期" width="180">
                        <template scope="scope">
                            <el-icon name="time"></el-icon>
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="姓名" width="180">
                        <template scope="scope">
                            <el-popover trigger="hover" placement="top">
                                <p>姓名: {{ scope.row.name }}</p>
                                <p>备注: {{ scope.row.address }}</p>
                                <div slot="reference" class="name-wrapper">
                                    <el-tag>{{ scope.row.name }}</el-tag>
                                </div>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template scope="scope">
                            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
            <div class="tablebottom" style="position:relative;left:996px;margin-top:10px;">
                <el-button type="info" @click="handleAdd(scope.$index, scope.row)">新增管理员</el-button>
                <el-dialog title="修改管理员信息" v-model="dialogFormVisible1">
                    <el-form :model="selectTable">
                        <el-form-item label="用户名" label-width="100px">
                            <el-input auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" label-width="100px">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="上传头像" label-width="100px">
                            <el-upload>
                            </el-upload>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button type="primary">添 加</el-button>
                        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                    </div>
                </el-dialog>
            </div>
            <el-dialog title="修改管理员信息" v-model="dialogFormVisible2">
                <el-form :model="selectTable">
                    <el-form-item label="用户名" label-width="100px">
                        <el-input auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" label-width="100px">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="上传头像" label-width="100px">
                        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                    <el-button type="primary">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import headTop from '../components/headTop'
// import { mapState } from 'vuex'
// import {baseUrl, baseImgPath} from '@/config/env'

export default {
    data() {
        return {

            imageUrl: '',

            tableData: [{
                date: '2016-10-14',
                name: '张三',
                address: '备注信息 1518 弄'
            }, {
                date: '2016-10-14',
                name: '李四',
                address: '备注信息 1517 弄'
            }],

            loginForm: [],
            loginList: [],
            selectTable: {},
            dialogFormVisible1: true,
            dialogFormVisible2: false,

        }
    },
    components: {
        headTop,
    },





    // computed: {
    //     ...mapState(['adminInfo']),
    // },
    created() {
        this.initData();
    },

    methods: {
        async initData() {
            var data = []
            let url = 'http://localhost:3000/verifyForm'
            let _this = this
            this.$http.get(url, {}).then(function(res) {
                for (let i = 0; i < res.data.length; i++) {

                    var obj = {}
                    obj.userid = res.data[i].user_id
                    obj.username = res.data[i].user_name
                    obj.password = res.data[i].pass_word
                    data[i] = obj
                }

                console.log(data);
                _this.loginForm = data;
                console.log(_this.loginForm);
                _this.loginList = _this.loginForm;
            }).catch(function(error) {
                console.log(error);
            })

            // console.log(this.loginForm)
        },
        //新增功能
        handleAdd(row) {
            this.dialogFormVisible1 = true;
        },


        //添加、删除功能
        // expand(row, status) {
        //     if (status) {
        //         this.getSelectItemData(row)
        //     } else {
        //         const index = this.expendRow.indexOf(row.index);
        //         this.expendRow.splice(index, 1)
        //     }
        // },
        handleEdit(row) {
            this.dialogFormVisible2 = true;
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    },
}

</script>
<style lang="less">
@import '../style/mixin';

.admin_set {
    width: 60%;
    background-color: #F9FAFC;
    min-height: 400px;
    margin: 20px auto 0;
    border-radius: 10px;
    ul>li {
        padding: 20px;
        span {
            color: #666;
        }
    }
}

.admin_title {
    margin-top: 20px;
    .sc(24px, #666);
    text-align: center;
}


.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}

























/*.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    margin-top: 10px;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
}

.avatar {
    width: 120px;
    height: 120px;
    display: block;

}
.explain_text {
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
    color: #333;
}

 */

</style>
