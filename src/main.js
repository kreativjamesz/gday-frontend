import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'

import '@/plugins/bootstrap-vue'
import '@/components/global'
import { Mixin } from './mixins'

Vue.mixin({ mixins: [Mixin] })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
