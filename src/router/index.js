import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../layouts/mainLayout.vue'),
    children: [
      { path: '', component: () => import('../views/StartPage.vue') },
    ],
  },
  {
    path: '/vtk',
    component: () => import('../layouts/vtkLayout.vue'),
    children: [
      { path: '', component: () => import('../views/StartPage.vue') },
      { path: 'fullscreen', component: () => import('../views/Samples/vtk/FullScreen.vue') },
      { path: 'genericWindow', component: () => import('../views/Samples/vtk/GenericWindow.vue') },
      { path: 'cone', component: () => import('../views/Samples/vtk/Cone.vue') },
    ],
  },
  {
    path: '/threejs',
    component: () => import('../layouts/threeLayout.vue'),
    children: [
      { path: '', component: () => import('../views/StartPage.vue') },
      { path: 'cube', component: () => import('../views/Samples/threejs/Cube.vue') },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
