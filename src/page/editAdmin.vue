<template>
<el-form  :model="adminInfo">
    <el-form-item label="用户名" label-width="100px">
        <el-input v-model="adminInfo.user_name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" label-width="100px">
        <el-input type="password" v-model="adminInfo.pass_word"></el-input>
    </el-form-item>
</el-form>
<el-button type="primary" @click="edit()">确定</el-button>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return {
            adminInfo:[]
        }
    },
    methods: {
        getAdmin(){
            const id = this.$route.query.id
            axios.get("/admin/getList",{params: {_id: id}}).then(res=>{
                const data = res.data
                if(data.status == 200){
                    this.adminInfo = data.result.adminList[0]
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
                    this.$router.push('adminList');
                }
            }).catch(error=>{

            })
        }
    },
    mounted(){
        this.getAdmin();
    }
}
</script>