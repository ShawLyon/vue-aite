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

// personalcenter 子路由
import mainPage from '../page/personalcenter/personalcenter-child/mainPage'
import publishPage from '../page/personalcenter/personalcenter-child/publishPage'
import contentAdminPage from '../page/personalcenter/personalcenter-child/contentAdminPage'
import contentAdminDetails from '../page/personalcenter/personalcenter-child/contentAdminDetails'

import articlePage from '../page/personalcenter/personalcenter-child/articlePage'
import fansPage from '../page/personalcenter/personalcenter-child/fansPage'
import systemInfo from '../page/personalcenter/personalcenter-child/systemInfo'
// personalcenter 子路由 '设置'
import accountInfo from '../page/personalcenter/settings/accountInfo'
import accountRevise from '../page/personalcenter/settings/accountRevise'
import selfAdvertising from '../page/personalcenter/settings/selfAdvertising'
// personalcenter 子路由 income   收益
import incomeProfile from '../page/personalcenter/income/incomeProfile'
import settlementCenter from '../page/personalcenter/income/settlementCenter'
// 

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import 'font-awesome/css/font-awesome.min.css'
Vue.use(Router)
Vue.use(ElementUI)

const routes = [
 { path: '/login', name: 'login', component: login },
 { path: '/personalcenter',
   name: 'personalcenter',
   component: personalcenter,
   children: [
    { path: '/', name: 'mainPage', component: mainPage },
    { path: '/publishPage', name: 'publishPage', component: publishPage },
    { path: '/contentAdminPage', name: 'contentAdminPage', component: contentAdminPage },
    { path: '/contentAdminDetails', name: 'contentAdminDetails', component: contentAdminDetails },
    { path: '/articlePage', name: 'articlePage', component: articlePage },
    { path: '/fansPage', name: 'fansPage', component: fansPage },
    { path: '/systemInfo', name: 'systemInfo', component: systemInfo },
    { path: '/accountInfo', name: 'accountInfo', component: accountInfo },
    { path: '/accountRevise', name: 'accountRevise', component: accountRevise },
    { path: '/selfAdvertising', name: 'selfAdvertising', component: selfAdvertising },
    { path: '/incomeProfile', name: 'incomeProfile', component: incomeProfile },
    { path: '/settlementCenter', name: 'settlementCenter', component: settlementCenter }
   ]
  },
 { path: '/repassword',
   name: 'repassword',
   component: repassword,
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
