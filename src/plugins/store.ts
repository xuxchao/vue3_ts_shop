import Vue from 'vue'
import Vuex from 'vuex'
// 相对路径引入会失败 why ？
// import axios from './axios'
import axios from '@/plugins/axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false
  },
  mutations: {
    login (state) {
      state.login = true
    },
    logout (state) {
      state.login = false
    }
  },
  actions: {
    getShops () {
      return axios.get(`/data/shops.json`)
    },
    getPlayList () {
      return axios.get(`/data/playList.json`)
    },
    getCarList () {
      return axios.get(`/data/carList.json`)
    },
    getOrderList () {
      return axios.get(`/data/orders.json`)
    },
    getCouponList () {
      return axios.get(`/data/coupons.json`)
    },
  }
})
