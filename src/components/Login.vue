<template>
    <div>
        <el-form :model="userInfo" class="demo-form">
            <el-form-item label="邮箱">
            <el-input v-model="userInfo.username" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="密码">
            <el-input type="password" v-model="userInfo.password" placeholder=""></el-input>
            </el-form-item><el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="text" @click="reset">修改密码</el-button>
            <el-button type="text" @click="regist">注册</el-button>

            </el-form-item>
        </el-form>
        <el-dialog title="修改密码" :visible.sync="resetVisible">
            <el-form :model="resetObj">
                <el-form-item label="用户名">
                    <el-input v-model="resetObj.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="resetObj.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input v-model="resetObj.newPassword"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirmReset">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="注册" :visible.sync="registVisible">
            <el-form :model="registObj">
                <el-form-item label="用户名">
                    <el-input v-model="registObj.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="registObj.password"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="registVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirmRegist">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import fetch from '@/utils/AFetch'
import Cookie from 'js-cookie'
export default {
    data () {
        return {
            userInfo: {
                username: '',
                password: ''
            },
            resetObj: {
                username: '',
                password: '',
                newPassword: ''
            },
            initResetObj: {
                username: '',
                password: ''
            },
            registObj: {
                username: '',
                password: ''
            },
            initRegistObj: {
                username: '',
                password: ''
            },
            resetVisible: false,
            registVisible: false
        }
    },
    methods: {
        login () {
            fetch('login', this.userInfo).then(res => {
                console.log(res)
                if (res.success) {
                    this.$message({
                        type: 'success',
                        message: '登录成功'
                    })
                    Cookie.set('token', res.token, {expires: 365})
                    this.$router.push('/')
                } else {
                    this.$message({
                        type: 'warning',
                        message: res.msg
                    })
                }
            }).catch(err => {
                console.log(err)
            })
        },
        reset () {
            this.resetObj = Object.assign({}, this.initResetObj)
            this.resetVisible = true
        },
        confirmReset () {
            if (!this.resetObj.username) {
                this.$message({
                    type: 'warning',
                    message: '请填写用户名'
                })
                return
            }
            if (!this.resetObj.password) {
                this.$message({
                    type: 'warning',
                    message: '请填写密码'
                })
                return
            }
            if (!this.resetObj.newPassword) {
                this.$message({
                    type: 'warning',
                    message: '请填写确认密码'
                })
                return
            }
            if (this.resetObj.newPassword !== this.resetObj.password) {
                this.$message({
                    type: 'warning',
                    message: '两次输入的密码不一致请重新输入'
                })
                return
            }
            fetch('login/reset', this.resetObj).then(res => {
                console.log(res)
                if (res.success) {
                    this.$message({
                        type: 'success',
                        message: '修改成功, 请重新登录'
                    })
                    this.resetVisible = false
                }
            }).catch(err => {
                this.$message({
                    type: 'warning',
                    message: '修改失败,请稍后重试'
                })
                console.log(err)
            })
        },
        regist () {
            this.registObj = Object.assign({}, this.initRegistObj)
            this.registVisible = true
        },
        confirmRegist () {
            if (!this.registObj.username) {
                this.$message({
                    type: 'warning',
                    message: '请填写用户名'
                })
                return
            }
            if (!this.registObj.password) {
                this.$message({
                    type: 'warning',
                    message: '请填写密码'
                })
                return
            }
            fetch('login/regist', this.registObj).then(res => {
                console.log(res)
                if (res.success) {
                    this.$message({
                        type: 'success',
                        message: '注册成功, 请登录'
                    })
                    this.registVisible = false
                }
            }).catch(err => {
                this.$message({
                    type: 'warning',
                    message: '修改失败,请稍后重试'
                })
                console.log(err)
            })
        },
        jumpToHome () {
        }

    }
}
</script>

<style scoped>
  .demo-form{
    max-width: 400px;
    margin: 0 auto;
  }
</style>
