import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store'
import VueComposition from '@vue/composition-api'
import '@/styles/common.less'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(VueComposition)
Vue.use(Mint)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
