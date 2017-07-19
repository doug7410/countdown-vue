import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'
import LoginPage from '../components/Login/LoginPage'
import CountdownList from '../components/Dashboard/CountdownList'
import Dashboard from '../components/Dashboard/Dashboard'
import Countdown from '../components/CountdownViewer/CountdownContainer'
import CountdownForm from '../components/Dashboard/CountdownForm'
import EditCountdownForm from '../components/Dashboard/EditCountdownForm'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'home',
          name: 'countdownList',
          component: CountdownList,
          meta: { requiresAuth: true }
        },
        {
          path: 'countdown/create',
          name: 'createCountdown',
          component: CountdownForm,
          meta: { requiresAuth: true }
        },
        {
          path: 'countdown/:id/update',
          name: 'updateCountdown',
          component: EditCountdownForm,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/countdown/:id',
      name: 'countdownView',
      component: Countdown,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'LoginPage' && store.getters.accessToken) {
    next({name: 'countdownList'})
  }

  if (to.meta.requiresAuth) {
    if (store.getters.accessToken) {
      next()
    } else {
      next({name: 'LoginPage'})
    }
  }

  next()
})

export default router
