import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Icon from "vue-awesome/components/Icon"
import "vue-awesome/icons"

// Sirve para poder utilizar Bootstrap dentro de la app
Vue.use(BootstrapVue);
Vue.component("v-icon", Icon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
