//引入路由组件
import Classify from '../pages/Classify/Classify.vue'
import Deserve from '../pages/Deserve/Deserve.vue'
import HomePage from '../pages/HomePage/HomePage.vue'
import Personage from '../pages/Personage/Personage.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'

// 暴露
export default [
  {
    path: '/homepage',
    component: HomePage
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/deserve',
    component: Deserve
  },
  {
    path: '/personage',
    component: Personage
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/',
    redirect: '/homepage'
  }
]