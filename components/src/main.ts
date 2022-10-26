import Vue from 'vue';
import App from './App.vue';
import store from './store.ts';
import router from './router.ts';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
