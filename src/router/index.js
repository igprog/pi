import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
// import gallery from '@/pages/gallery'
// import booking from '@/pages/booking'
import aboutus from '@/pages/aboutus'
import contact from '@/pages/contact'
import packages from '@/pages/packages'
import test from '@/pages/test'


// import { defaultLocale } from '../config/i18n'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: '',  //process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Naslovna',
      component: home,
    },
    {
      path: '/paketi',
      name: 'Paketi',
      component: packages,
    },
    {
      path: '/o-nama',
      name: 'O nama',
      component: aboutus,
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: contact,
    },
    {
      path: '/test',
      name: 'Test',
      component: test,
    },
  ],
})