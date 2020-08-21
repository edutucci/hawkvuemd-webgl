import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../layouts/mainLayout.vue'),
    children: [
      { path: '', component: () => import('../views/StartPage.vue') },
      { path: 'cube', component: () => import('../views/Samples/Cube.vue') },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
