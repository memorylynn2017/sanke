<template>
    <div class="fillcontain">
        <head-top></head-top>
        <el-button type="primary" @click="showAddDialog">新增</el-button>
        <header class="admin_title">管理员信息</header>
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
                    <template slot-scope="scope">
                        <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            
            <!-- 新增 -->
            <el-dialog title="新增" v-model="dialogAdd" :close-on-click-modal="false">
                <el-form  :model="addForm">
                    <el-form-item label="用户名" label-width="100px">
                        <el-input v-model="addForm.username" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" label-width="100px">
                        <el-input type="password" v-model="addForm.password"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click.native="dialogAdd = false">取消</el-button>
                    <el-button type="primary" @click.native="addAct" :loading="addLoading">添加</el-button>
                </div>
            </el-dialog>
            <!-- 编辑-->
            <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
                <el-form  label-width="80px" :model="editForm">
                    <el-form-item label="用户名">
                        <el-input v-model="editForm.user_name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password" v-model="editForm.pass_word" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                <el-button @click.native="editFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
                </div>
            </el-dialog>
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
            filters: {
                name: ''
            },
            addForm: {},
            editForm:{},
            adminList:[],
            dialogAdd:false,
            addLoading: false,
            editFormVisible: false,
            editLoading: false,
        }
    },
    components: {
        headTop,
    },
    mounted() {
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
        showAddDialog(){
            this.dialogAdd = true;
        },
        addAct(){
            this.$confirm('确认提交吗?','提示',{}).then(()=>{
                this.addLoading = true;
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
                this.initData();
            })
        },
        handleEdit(row) {
            this.editFormVisible = true
            this.editForm = row
        },
        editSubmit(){
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
                this.editLoading = true;
                axios.post("/admin/edit",this.editForm).then(res=>{
                    const data = res.data
                    if(data.status == 200){
                        this.$message({
                            type: 'success',
                            message: data.msg
                        })
                    }
                }).catch(error=>{
                    console.log(error)
                })
                this.editFormVisible = false;
                this.initData();
            });
        },
        handleDelete(index,row) {
            this.$confirm('确认删除该管理员吗？','提示',{type: 'warning'}).then(()=>{
                //数据库删除
                axios.post("/admin/delete",{id: row._id}).then(res=>{
                    const data = res.data;
                    if(data.status == 200){
                        //视图界面上删除
                        this.initData();
                        this.$message({
                            type: 'success',
                            message: data.msg
                        });
                    }
                }).catch(error=>{
                    console.log(error)
                })
            })
            
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
    }
}

</script>
<style lang="less" scoped>
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
