import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA,
  RECEIVE_NAVLIST,
  REACT_NAVINDEX,
  RECEIVE_NAVDETAIL
} from './mutation-types'


import {
  reqHomeData,
  reqTopciData,
  reqNavData
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

  async getNavData ({commit}) {  // 获取nav页的数据
    const result = await reqNavData()
    if (result.code === 0) {
      const navData = result.data
      commit(RECEIVE_NAVDATA, {navData})
    }
  },
  getNavList ({commit}, callback) { // 获取nav页的菜单分类
    commit(RECEIVE_NAVLIST)
    callback && callback()
  },

  setNavIndex ({commit,state}, index) {  /*传入state,为当前点击的index对应的数据state.navData[index]赋值给navdetail*/
    const navdetail = state.navData[index]
    // 重置默认下标
    commit(REACT_NAVINDEX, {navdetail})  /*将数据传给mutations*/
  }

  /*getNavDetail ({commit}, callback) { // 获取分类对应的数据
    commit(RECEIVE_NAVDETAIL)
    callback && callback()
  }*/















}
