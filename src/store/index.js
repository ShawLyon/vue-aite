import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  activeSteps: 0
}

const mutations = {
  NEXT_STEPS (state) {
    // if (state.activeSteps++ > 2) state.activeSteps = 0;
    alert(state.activeSteps);
    state.activeSteps = this.activeSteps++
  }
}
const store = new Vuex.Store({
  state,
  mutations
})

export default store