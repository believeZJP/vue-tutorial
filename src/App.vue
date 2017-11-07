<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
import router from '@/router'
export default {
    name: 'app',
    created () {
        if (!Cookie.get('token')) {
            router.push('/login')
        } else {
            router.push('/')
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
