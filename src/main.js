import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.config.productionTip = false
Vue.http.options.root = process.env.VUE_APP_FIREBASE_URL;

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
