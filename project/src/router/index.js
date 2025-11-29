import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'Home OMM',
      keepAlive: true
    }
  },
  {
    path: '/aboutA',
    name: 'aboutA',
    component: () => import('../views/AboutAView.vue'),
    meta: {
      title: 'Compang Project',
      keepAlive: true
    }
  },
  {
    path: '/aboutB',
    name: 'aboutB',
    component: () => import('../views/AboutBView.vue'),
    meta: {
      title: 'Person Project',
      keepAlive: true
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue'),
    meta: {
      title: 'Contact OMM',
      keepAlive: true
    }
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title; // 在路由切换前设置页面标题
  }
  next();
});

export default router
