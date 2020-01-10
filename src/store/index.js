/*
  VueX的最核心管理对象，store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from'./state'
import mutations from'./mutations'
import actions from'./actions'
import getters from './getters'

Vue.use(Vuex)

export default {
  latitude: 40.10038, // 纬 度
  longitude: 116.36867, // 经 度
  address: {}, // 地址信息对象
  categorys: [], // 分类数组
  shops: [] // 商家数组
}
