import Vue from 'vue'
import Vuex from 'vuex'
// import * as types from './mutation-types'
// import * as actions from './actions'
// import * as getters from './getters'
import login from './moudles/login'


Vue.use(Vuex);

const state = {
  count: 1
}

const mutations = {
  add(state){
    state.count += 1;
  },
  reduce(state){
    state.count -= 1;
  }
}


const store = new Vuex.Store({
  state,
  mutations,
  moudles: {
    login
  }
})
store.commit('add')
export default store