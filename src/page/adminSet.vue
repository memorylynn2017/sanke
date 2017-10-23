<template>
    <div class="fillcontain">
        
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
            <el-table :data="adminList" style="width: 100%">
                <el-table-column type="expand">
                </el-table-column>
                <el-table-column label="用户ID" prop="_id">
                </el-table-column>
                <el-table-column label="用户名" prop="user_name">
                </el-table-column>
                <el-table-column label="用户密码" prop="pass_word">
                </el-table-column>
                <el-table-column label="操作" width="160">
                    <template scope="scope">
                        <el-button size="small" @click="dialogEdit = true">编辑</el-button>
                        <el-button size="small" type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="tablebottom" style="position:relative;left:996px;margin-top:10px;">
                <el-button type="info" @click="dialogAdd = true">新增管理员</el-button>
                <el-dialog title="新增管理员信息" :visible.sync="dialogAdd">
                    <el-form  :model="addForm">
                        <el-form-item label="用户名" label-width="100px">
                            <el-input v-model="addForm.username" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" label-width="100px">
                            <el-input type="password" v-model="addForm.password"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="addAct()">添 加</el-button>
                        <el-button @click="dialogAdd = false">取 消</el-button>
                    </div>
                </el-dialog>
            </div>
            <div class="tablebottom" style="position:relative;left:996px;margin-top:10px;">
                <el-button type="info" @click="dialogEdit = true">编辑管理员</el-button>
                <el-dialog title="修改管理员信息" :visible.sync="dialogEdit">
                    <el-form :model="editForm">
                        <el-form-item label="用户名" label-width="100px">
                            <el-input v-model="editForm.username"auto-complete="off"></el-input>
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
                        <el-button @click="dialogEdit = false">取 消</el-button>
                        <el-button type="primary">确 定</el-button>
                    </div>
                </el-dialog>
            </div>
        </div>
    </div>
</template>
<script>
import headTop from '../components/headTop'
import axios from 'axios'
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

            addForm: {},
            editForm:{},
            adminList: {},
            dialogAdd:false,
            dialogEdit: false,

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
            axios.get("/admin/getList").then(res=>{
                const data = res.data;
                if(data.status == 200){
                    this.adminList = data.result.adminList;
                }
            }).catch(error=>{
                console.log(error);
            })

            // console.log(this.loginForm)
        },
        addAct(){
            axios.post("/admin/add",{"user_name": this.addForm.username,"pass_word": this.addForm.password}).then(res=>{
                const data = res.data;
                if(data.status == 200){
                    this.$message({
                        type: 'success',
                        message: '添加管理员成功'
                    });
                    this.initData();
                }
            }).catch(error=>{
                console.log(error)
            })
            this.dialogAdd = false;
        },
        //新增功能
        handleAdd(row) {
            this.dialogFormVisible1 = true;
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
</style>
























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
