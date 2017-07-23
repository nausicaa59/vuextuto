// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import VueRouter from 'vue-router';

import Article from './Article'
import test from './test'

Vue.config.productionTip = false

// create router instance and define routes
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    { name: 'index', path: '/', component: test },
    { name: 'article', path: '/articles/', component: Article }
  ],
  hashbang: false,
  mode: 'history',
  root: '/',
  saveScrollPosition: true
});





/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  router,
  components: { App }
})
