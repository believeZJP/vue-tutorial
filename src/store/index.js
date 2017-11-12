import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 1
}

const mutations = {
    add (state, n) {
        state.count += n
    },
    reduce (state) {
        state.count --
    }
}

const actions = {
    addAction (context) {
        setTimeout(() => {
            context.commit('reduce')
            console.log('我是异步执行的')
        }, 500)
        context.commit('add', 10)
        console.log('我先执行')
    },
    reduceAction ({commit}) {
        commit('reduce')
    }
}
const getters = {
    count: function (state) {
        // state.count += 100
        return state.count
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
