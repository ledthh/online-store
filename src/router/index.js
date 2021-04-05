import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import LogIn from '@/views/Auth/LogIn'
import SignUp from '@/views/Auth/SignUp'
import Checkout from '@/views/User/Checkout'
import Product from '@/views/Products/Product'
import ProductList from '@/views/Products/ProductList'
import NewProduct from '@/views/Products/NewProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/new',
    name: 'new',
    component: NewProduct
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/list',
    name: 'list',
    component: ProductList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
