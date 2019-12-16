import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import aboutRoutes from './aboutRoutes/aboutRoutes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  ...aboutRoutes,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
