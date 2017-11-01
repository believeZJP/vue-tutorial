import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello2 from '@/components/Hello2'
import User from '@/components/User'
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      children: [
        {path: '/hello2', name: 'Hello2', component: Hello2},
        {path: '/user', name: 'User', component: User}
      ]
    }
  ]
})
