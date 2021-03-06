import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
  path: '/',
 component: () => import(/* webpackChunkName: "about" */ '../components/Content/Main.vue'),
  children: [
    {
      path: '/',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/Home/Main.vue')
    },
    {
      path: '/categories/mens',
      name: 'mens',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/Content/Products/Mens.vue')
    },
    {
      path: '/categories/womens',
      name: 'womens',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/Content/Products/Womens.vue')
    },
    {
      path: '/categories/new',
      name: 'new',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/Content/Products/New.vue')
    },  {
      path: '/categories/sale',
      name: 'sale',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/Content/Products/Sale.vue')
    },
    {
      path: '/categories/brands',
      name: 'brands',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/Content/Products/Brands.vue')
    },
    {
      path: '/categories/all',
      name: 'all',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/Content/Products/All.vue')
    },
    {
      path: '/categories/jerseys',
      name: 'jerseys',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/Content/Products/Jerseys.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/Content/Cart/Main.vue')
    },
    {
      path: '/product/:id',
      name: 'productDetails',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "productdetails" */ '../components/Content/Products/ProductDetails.vue')
    },
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "productdetails" */ '../components/Home/TermsAndConditions')
    },
    {
      path: '/faq',
      name: 'faq',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "productdetails" */ '../components/Home/FAQ')
    }
  ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/relico-store-front/',
  routes
})
// base: '/relico-store-front/',
// https://stackoverflow.com/questions/53162491/how-to-change-basepath-on-deployment-of-vue-app
export default router
