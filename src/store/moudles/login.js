// import * as types from '../mutation-types.js'


const state = {
  count: 1
}

const mutations = {
  add(state){
    state.count++;
  },
  reduce(state){
    state.count--;
  }
}

export default {
  state,
  mutations
}