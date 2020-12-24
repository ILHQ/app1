import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const baseUrl = process.env.VUE_APP_BASE_URL;

const routes = [
  {
    path: `/${baseUrl}`,
    redirect: `${baseUrl}/about`
  },
  {
    path: `${baseUrl}/about`,
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
