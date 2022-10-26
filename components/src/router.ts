import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import App from './App.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/intro/:msg?', component: HelloWorld, props: true},
    {path: '/counters', component: App},
  ]
})

export default router;
