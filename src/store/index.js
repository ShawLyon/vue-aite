import Vue from 'vue'
import Vuex from 'vuex'
// import * as types from './mutation-types' import * as actions from
// './actions' import * as getters from './getters'

Vue.use(Vuex);

const state = {

  /* w 忘记密码数据 */
  w_phone: '',
  w_code: '',
  w_step: 1,

  /* z 注册 */
  z_phone: '', // username 用户名
  z_pass: '', // 密码
  z_type: '', // 类型
  
  z_code: '',
  z_step: 1 // active_step 当前步骤
}

const mutations = {
  /* w 忘记密码数据 */
  setPhone_w(state, ruleForm) {
    state.w_phone = ruleForm.phone
  },
  restepNext_w(state) {
    if (state.w_step >= 3) {
      state.w_step === 3
    } else {
      state.w_step++;
    }
  },
  restepPre_w(state) {
    if (state.w_step <= 0) {
      state.w_step === 0
    } else {
      state.w_step--;
    }
  },

  /* z 注册 */
  // 手机号
  setPhone_z(state, ruleForm) {
    state.z_phone = ruleForm.phone
  },
  // 密码
  setPass_z(state, ruleForm) {
    state.z_pass = ruleForm.pass
  },
  // 注册类型
  setType_z(state, ruleForm) {
    state.z_type = ruleForm.type
  },
  // step +1
  restepNext_z(state) {
    if (state.z_step >= 3) {
      state.z_step === 3
    } else {
      state.z_step++;
    }
  },
  // step -1
  restepPre_z(state) {
    if (state.z_step <= 0) {
      state.z_step === 0
    } else {
      state.z_step--;
    }
  }
}

const moudles = {
  login: 'login'
}

const store = new Vuex.Store({
  state, mutations,
  // moudles
})
export default store