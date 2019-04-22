import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSidebarMenu from '../store/index'
import { router } from './routes'
import Notifications from 'vue-notification'
import BListGroup from 'bootstrap-vue/es/components/list-group/list-group'
import BootstrapVue from 'bootstrap-vue'
import VueTheMask from 'vue-the-mask'
import Paginate from 'vuejs-paginate'


Vue.component('paginate', Paginate)
Vue.use(VueTheMask)
Vue.use(Notifications)
Vue.use(VueRouter)
Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue)

Vue.component('b-list-group', BListGroup)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

