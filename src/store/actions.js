import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA
} from './mutation-types'

import {
  reqHomeData,
  reqTopciData,
} from '../api'

export default{
  async getHomeData ({commit}, callback) {  // 获取首页数据
    const result = await reqHomeData()
    if (result.code === 0) {
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {homeData})
      callback && callback()
    }
  },
  async getTopicData ({commit}) {
    const result = await reqTopciData()
    if (result.code === 0) {
      const topicData = result.data
      commit(RECEIVE_TOPICDATA, {topicData})
    }
  },

















}
