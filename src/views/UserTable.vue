<template>
    <div class="page-con-r">
        <h3>用户列表</h3>
        <el-form :inline="true" :model="searchObj" class="demo-form-inline mt10p" size="small">
        <el-form-item label="用户名">
            <el-input v-model="searchObj.name" placeholder="用户名" @input="onSearch"></el-input>
        </el-form-item>
        <el-form-item label="手机" size="small">
            <el-input v-model="searchObj.tel" placeholder="手机" @input="onSearch"></el-input>
        </el-form-item>
        <el-form-item label="地址" size="small">
            <el-input v-model="searchObj.address" placeholder="地址" @input="onSearch"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSearch" size="small">查询</el-button>
        </el-form-item>
        <el-button type="success" @click="showAddDia" class="fr mr20p" size="small" icon="el-icon-plus">新建用户</el-button>
        </el-form>

        <el-table :data="tableData" border stripe style="width: 100%">
            <el-table-column type="index" width="180"></el-table-column>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="用户名" width="180"></el-table-column>
            <el-table-column prop="tel" label="手机" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template slot-scope="scope">
                    <el-button @click="editUser(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="deleConfirm(scope.row)" type="text" size="small" class="del-text-btn">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        

        <el-dialog :title = 'editStatus === "add" ? "添加用户" : "修改用户"' :visible.sync="editVisible">
            <el-form :model="editorUser" class="editor-form" label-position="top">
                <h4>基本信息</h4>
                <el-form-item label="用户名">
                <el-input v-model="editorUser.name" size="small" class="el-input"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                <el-input v-model="editorUser.tel" size="small"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                <el-input v-model="editorUser.address" auto-complete="off" size="small"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirmEdit">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                searchObj: {
                    name: '',
                    tel: '',
                    address: ''
                },
                editStatus: 'add',
                editVisible: false,
                editorUser: {
                    uid: '',
                    date: '',
                    name: '',
                    address: '',
                    tel: ''
                },
                initUser: {
                    uid: '',
                    date: '',
                    name: '',
                    address: '',
                    tel: ''
                },
                tableData: [],
                allTableData: [{
                    uid: 1,
                    date: '2016-05-02',
                    name: '王大虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    tel: '13000000000'
                }, {
                    uid: 2,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 2343 弄',
                    tel: '13005432000'
                }, {
                    uid: 3,
                    date: '2016-05-02',
                    name: '上小虎',
                    address: '上海市普陀区金沙江路 6464 弄',
                    tel: '13000423000'
                }, {
                    uid: 4,
                    date: '2016-05-02',
                    name: '王小2',
                    address: '上海市普陀区金沙江路 7256 弄',
                    tel: '13000023100'
                }, {
                    uid: 5,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1232 弄',
                    tel: '13000000123'
                }, {
                    uid: 6,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1725 弄',
                    tel: '13000000345'
                }, {
                    uid: 7,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1645 弄',
                    tel: '13023400000'
                }]
            }
        },
        created () {
            this.tableData = this.allTableData
        },
        methods: {
            onSearch () {
                let arr = []
                this.allTableData.forEach((ele) => {
                    let s = this.searchObj
                    let operator = true
                    if (s.name) {
                        operator = operator && (ele.name.indexOf(s.name) > -1)
                    }
                    if (s.tel) {
                        operator = operator && (ele.tel.indexOf(s.tel) > -1)
                    }
                    if (s.address) {
                        operator = operator && (ele.address.indexOf(s.address) > -1)
                    }
                    if (operator) {
                        arr.push(ele)
                    }
                })
                this.tableData = arr
            },
            showAddDia () {
                this.editorUser = Object.assign({}, this.initUser)
                this.editStatus = 'add'
                this.editVisible = true
            },
            deleConfirm (row) {
                this.$confirm('删除' + row.name + ', 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let newArr = []
                    console.log(this.tableData)
                    this.tableData.forEach(temp => {
                        if (temp.uid !== row.uid) {
                            newArr.push(temp)
                        }
                    })
                    this.tableData = newArr
                    console.log(this.tableData)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
            },
            editUser (row) {
                // this.editorUser = row
                this.editorUser = Object.assign({}, row)
                this.editStatus = 'edit'
                this.editVisible = true
            },
            confirmEdit () {
                if (this.editStatus === 'add') {
                    // 添加用户
                    let newUser = Object.assign({}, this.editorUser)
                    newUser['uid'] = this.allTableData.length + 1
                    // this.tableData.push(this.editorUser)
                    this.allTableData.push(newUser)
                    this.editorUser = Object.assign({}, this.initUser)
                    this.$message({
                        type: 'success',
                        message: '添加成功!'
                    })
                } else {
                    // 修改用户
                    this.tableData.forEach((ele, i) => {
                        if (ele.uid === this.editorUser.uid) {
                            // this.tableData[i] = this.editorUser
                            // 这里好不容易才找到这句话可以更新
                            // 直接查找数组元素并替换，发现列表里的值不会更新
                            this.$set(this.tableData, i, this.editorUser)
                        }
                    })
                    this.$message({
                        type: 'success',
                        message: '修改成功!'
                    })
                }
                this.editVisible = false
            }
        }
    }
</script>
<style lang="scss" scope>
    h3{
        height: 50px;
        margin: 0;
        color: #333;
        font-size: 18px;
        font-weight: 600;
        line-height: 50px;
        padding-left: 20px;
        border-bottom: 1px solid #e1e1e1;
    }
    .editor-form .el-input{
        max-width:664px;
    }
    .el-form-item{
        margin-bottom: 0px;
    }
</style>

