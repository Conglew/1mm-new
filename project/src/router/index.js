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
    meta: {
      title: 'Home OMM'
    },
    // component: HomeView
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/aboutA',
    name: 'aboutA',
    meta: {
      title: 'Compang Project'
    },
    component: () => import('../views/AboutAView.vue')
  },
  {
    path: '/aboutB',
    name: 'aboutB',
    meta: {
      title: 'Person Project'
    },
    component: () => import('../views/AboutBView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      title: 'Contact OMM'
    },
    component: () => import( '../views/ContactView.vue')
  }
]

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
