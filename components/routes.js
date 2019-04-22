import Vue from 'vue'
import Template from './src/Template'
import Clientes from './src/clientes/clientesList.vue'
import BasicUsage from './src/BasicUsage.vue'
import Props from './src/Props.vue'
import Events from './src/Events.vue'
import Styling from './src/Styling.vue'
import VueRouter from 'vue-router'
import Login from './src/login/Login'
import ClienteNew from './src/clientes/ClienteNew'

Vue.use(VueRouter)

export const routes = [

  {
    path: '/login',
    component: Login,
    meta: { auth: false },
  },
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/cicloi',
    component: Template,
    redirect: '/clientes',
    meta: { auth: true },
    children: [

      {
        path: '/clientes',
        name: 'Clientes',
        component: Clientes
      },
      {
        path: '/clientes-new',
        name: 'Clientes-new',
        component: ClienteNew
      },
      {
        path: '/basic-usage',
        name: 'BasicUsage',
        component: BasicUsage
      },
      {
        path: '/props',
        name: 'Props',
        component: Props
      },
      {
        path: '/events',
        name: 'Events',
        component: Events
      },
      {
        path: '/styling',
        name: 'Styling',
        component: Styling
      }]
  }]

export const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.auth)) {

    let token = localStorage.getItem('X-token')
    if (token === null) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
