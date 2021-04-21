import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/store/modules/products'
import user from '@/store/modules/user'
import common from '@/store/modules/common'
import orders from '@/store/modules/orders'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    common,
    products,
    orders
  }
})
