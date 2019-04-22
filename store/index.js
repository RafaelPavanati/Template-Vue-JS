import SidebarMenu from './components/SidebarMenu.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  install (Vue) {
    Vue.component('sidebar-menu', SidebarMenu)
  }
}

export { SidebarMenu }
