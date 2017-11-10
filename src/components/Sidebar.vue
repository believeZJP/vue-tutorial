<template>
  <div class="sidebar">
    <el-menu default-active="2" class="el-menu-vertical-demo" :router='true'>
      <el-submenu index="1">
        <template slot="title">导航一</template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="Hello2">
            <router-link to='/hello'>
              Hello
            </router-link>
          </el-menu-item>
          <el-menu-item index="Hello">
            <router-link to='/user'>
              User
            </router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/hello2">
        Hello2
        <!--<router-link to='/Hello2'>
          Hello2
        </router-link>-->
      </el-menu-item>
      <el-menu-item index="/count">
        Count
      </el-menu-item>
      <el-menu-item index="/user">
        User
      </el-menu-item>
      <el-menu-item index="/userTable">
        UserTable
      </el-menu-item>
      <el-menu-item index="/zhihu">
        知乎日报
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sidebar{
    width: 260px;
    height: 100%;
    background-color: #F2F3F8;
    text-align: left;
    overflow-y: auto;
    border-right: solid 1px #e6e6e6;
  }
 
</style>
