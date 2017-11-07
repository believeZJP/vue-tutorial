import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello2 from '@/components/Hello2'
import User from '@/components/User'
import Login from '@/components/Login'
// const _import = require('./_import_' + process.env.NODE_ENV)
// const UserTable = _import('UserTable')
import UserTable from '@/views/UserTable'
import ZhihuView from '@/views/ZhihuView'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            name: 'Hello',
            redirect: '/zhihu',
            component: HelloWorld,
            children: [
                {path: '/hello2', name: 'Hello2', component: Hello2},
                {path: '/user', name: 'User', component: User},
                {path: '/userTable', name: 'UserTable', component: UserTable},
                {path: '/zhihu', name: 'ZhihuView', component: ZhihuView}
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            children: [
            ]
        }
    ]
})
