<template>
    <div style="margin-top:10px;">
        <el-form  label-width="80px" :model="adminInfo">
            <el-form-item label="用户名">
                <el-input v-model="adminInfo.user_name" width="60px"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="adminInfo.pass_word" width="60px"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" @click="edit()">确定</el-button>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return {
            adminInfo:{}
        }
    },
    mounted(){
        this.getAdmin();
    },
    methods: {
        getAdmin(){
            const id = this.$route.query.id
            axios.get("/admin/getAdmin",{params: {id: id}}).then(res=>{
                const data = res.data
                if(data.status == 200){
                    this.adminInfo = data.result.adminInfo

                }
            }).catch(error=>{
                console.log(error)
            })
        },
        edit(){
            axios.post("/admin/edit",this.adminInfo).then(res=>{
                const data = res.data
                if(data.status == 200){
                    this.$message({
                        type: 'success',
                        message: data.msg
                    })
                    this.$router.push('adminSet');
                }
            }).catch(error=>{

            })
        }
    }
}
</script>