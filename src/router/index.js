import Vue from 'vue'
import Router from 'vue-router'
import login from '../page/login/login'
import repassword from '../page/login/repassword'
import register from '../page/register/register'
import personalcenter from '../page/personalcenter/personalcenter'

// register子路由
import registerChildOne from '../page/register/register-child/registerChildOne'
import registerChildTwo from '../page/register/register-child/registerChildTwo'
import childPersonal from '../page/register/register-child/childPersonal'
import childCompany from '../page/register/register-child/childCompany'
// repassword 子路由
import repasswordChildEnter from '../page/login/repassword-child/repasswordChildEnter'
import repasswordChildSet from '../page/login/repassword-child/repasswordChildSet'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Router)
Vue.use(ElementUI)

const routes = [
 { path: '/login', name: 'login', component: login },
 { path: '/personalcenter', name: 'personalcenter', component: personalcenter },
 { path: '/repassword', name: 'repassword', component: repassword,
   children: [
    { path: '/', name: 'repasswordChildEnter', component: repasswordChildEnter },
    { path: '/repasswordChildSet', name: 'repasswordChildSet', component: repasswordChildSet }
   ]
  },
 { path: '/register',
   name: 'register',
   component: register,
   children: [
    { path: '/', name: 'registerChildOne', component: registerChildOne },
    { path: '/registerChildTwo', name: 'registerChildTwo', component: registerChildTwo },
    { path: '/childPersonal', name: 'childPersonal', component: childPersonal },
    { path: '/childCompany', name: 'childCompany', component: childCompany }
   ]
  }
]

const router = new Router({
  routes
})
router.push('/login')
export default router
