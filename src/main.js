import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import './assets/icon/iconfont.css'
import router from './router'
import { Tabbar, TabbarItem, Icon, NavBar } from 'vant'
Vue.config.productionTip = false
Vue.use(router).use(TabbarItem).use(Icon).use(NavBar)
Vue.use(Tabbar)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
