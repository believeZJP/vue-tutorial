<template>
    <div class="page-con-r">
        <h3>用户列表</h3>
        <el-form :inline="true" :model="searchObj" class="demo-form-inline mt10p" size="small">
        <el-form-item label="用户名">
            <el-input v-model="searchObj.name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="地址" size="small">
            <el-select v-model="searchObj.address" placeholder="地址">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
        </el-form-item>
        </el-form>

        <el-table :data="tableData" border stripe style="width: 100%">
            <el-table-column type="index" width="180"></el-table-column>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                    <el-button @click="deleConfirm(scope.row)" type="text" size="small" class="del-text-btn">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        
    </div>
</template>
<script>
    export default {
        data () {
            return {
                searchObj: {
                    name: '',
                    address: ''
                },
                tableData: [{
                    date: '2016-05-02',
                    name: '王大虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    tel: '13000000000'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    tel: '13000000000'
                }, {
                    date: '2016-05-02',
                    name: '上小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    tel: '13000000000'
                }, {
                    date: '2016-05-02',
                    name: '王小2',
                    address: '上海市普陀区金沙江路 1518 弄',
                    tel: '13000000000'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    tel: '13000000000'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    tel: '13000000000'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    tel: '13000000000'
                }]
            }
        },
        methods: {
            onSubmit () {
            },
            deleConfirm (row) {
                this.$confirm('删除' + row.name + ', 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.tableData.filter(name => {
                        return ''
                    })
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
</style>

