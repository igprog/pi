// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
// Font awesome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

import resource from 'vue-resource';
Vue.use(resource);

/***** Bootstrap-Vue *****/
// import { BootstrapVue } from 'bootstrap-vue'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(BootstrapVue)
/***** Bootstrap-Vue *****/

import CookieLaw from 'vue-cookie-law';
Vue.use(CookieLaw);

import VueMeta from 'vue-meta';
Vue.use(VueMeta);

import VueI18n from 'vue-i18n'
import messages from './lang'
Vue.use(VueI18n)

import Toasted from 'vue-toasted';
 
Vue.use(Toasted, { 
  theme: "bubble", 
  position: "top-right", 
  duration : 3000,
})

Vue.toasted.register('error',
    (payload) => {
        if(!payload.message) {
    	    return "!!! Oops.. Something Went Wrong.."
        }
        return "!!! Oops.. " + payload.message;
    },
    {
      type : 'error'
    }
)


Vue.config.productionTip = false


// Vue.prototype.$constants = {
//   owner: 'igprog',
// }

Vue.prototype.$isLogin = false;

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
