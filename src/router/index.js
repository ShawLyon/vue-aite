import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import login from '../page/login/login'
import register from '../page/register/register'
// register子路由
import registerChildOne from '../page/register/register-child/registerChildOne'
import registerChildTwo from '../page/register/register-child/registerChildTwo'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Router)
Vue.use(iView)
Vue.use(ElementUI)
Vue.use(Vuex)

const routes = [
 { path: '/login', name: 'login', component: login },
 { path: '/register',
   name: 'register',
   component: register,
   children: [
    { path: '/', name: 'registerChildOne', component: registerChildOne },
    { path: '/registerChildTwo', name: 'registerChildTwo', component: registerChildTwo }
   ]
  }
]

const router = new Router({
  routes
})
router.push('/login')
export default router
