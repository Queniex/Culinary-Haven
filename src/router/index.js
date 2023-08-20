import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodView from '../views/FoodView.vue'
import FoodDetailView from '../views/FoodDetailView.vue'
import CartView from '../views/CartView.vue'
import OrderSuccessView from '../views/OrderSuccessView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/foods',
    name: 'food',
    component: FoodView
  },
  {
    path: '/foods/:id',
    name: 'foodDetail',
    component: FoodDetailView
  },
  {
    path: '/cart',
    name: 'cartDetail',
    component: CartView
  },
  {
    path: '/order',
    name: 'orderSuccess',
    component: OrderSuccessView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
