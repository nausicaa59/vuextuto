// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import VueRouter from 'vue-router';

import Article from './Article'
import Categorie from './Categorie'
import ListArticles from './ListArticles'

Vue.config.productionTip = false

// create router instance and define routes
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    { name: 'index', path: '/', component: ListArticles },
    { name: 'articleEdit', path: '/article/:id', component: Article, props: true },
    { name: 'articleCreate', path: '/articles/', component: Article},
    { name: 'categorieCreate', path: '/categorie/', component: Categorie}
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
