import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import './assets/icon/iconfont.css'
import router from './router'
import VuePageStack from 'vue-page-stack'
import Container from './components/Container.vue'
import { Tabbar, Skeleton, Panel, ActionSheet, TabbarItem, Icon, NavBar, Cell, CellGroup, Button, Field, Dialog, Toast } from 'vant'

Vue.config.productionTip = false
Vue.use(router).use(TabbarItem).use(Icon).use(NavBar).use(Cell).use(CellGroup).use(Button).use(Field).use(Dialog).use(Toast)
Vue.use(Tabbar).use(Panel).use(ActionSheet).use(Skeleton)
Vue.component(Container.name, Container)
const userAgent = navigator.userAgent.toLowerCase()
Vue.use(VuePageStack, { router })
if (userAgent.indexOf('apicloud') >= 0) {
  window.apiready = () => {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
} else {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}
