<template>
  <div>
      <h2>{{msg}}</h2>
      <hr/>
      <!-- <h3>{{$store.state.count}}</h3> -->
      <h3>{{count}}</h3>
      <button @click="add(10)"> 加分 </button>
      <button @click="reduce"> 减分 </button>
      <button @click="addAction(10)"> 异步加分 </button>
      <button @click="reduceAction"> 异步减分 </button>
  </div>
</template>

<script>
    import store from '@/store'
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
    export default{
        data () {
            return {
                msg: 'Hello Vuex'
            }
        },
        /* computed: {
            count () {
                return this.$store.state.count
            }
        }, */
        /* computed: mapState({
            count: state => state.count
        }), */
        // computed: mapState(['count']),
        computed: {
            /* count () {
                return this.$store.getters.count
            } */
            ...mapState(['count']),
            ...mapGetters(['count'])
        },
        methods: {
            ...mapActions(['addAction', 'reduceAction']),
            ...mapMutations(['add', 'reduce'])
        },
        store
    }
</script>