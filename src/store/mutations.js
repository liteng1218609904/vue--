/*
直接更新state的多个方法的对象
 */
import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA,
  RECEIVE_NAVLIST,
  REACT_NAVINDEX,
  RECEIVE_NAVDETAIL
} from './mutation-types'

 export default {
   [RECEIVE_HOMEDATA] (state, {homeData}) {
     state.homeData = homeData
   },
   [RECEIVE_TOPICDATA] (state, {topicData}) {
     state.topicData = topicData
   },
   [RECEIVE_NAVDATA] (state, {navData}) {
     state.navData = navData
   },
   [RECEIVE_NAVLIST] (state) {
     let arr = []
     state.navData.forEach(item => {
       arr.push(item.name)
     })
     if (arr.length > 13) {
       arr.length = 13
     }
     state.navList = arr
   },

   /*mutation为直接更新状态的*/

   [REACT_NAVINDEX] (state, {navdetail}) {   /*为将navData的数据赋值给navDetail*/
     state.navDetail = navdetail   /*当前点击的index对应的数据赋值給navDetail，navDetail为state里面定义的状态*/
   }

   /*[RECEIVE_NAVDETAIL] (state) {
     state.navDetail = state.navData[state.navIndex]  /!*对象.下标，为对象里当前的下标去更新对应分页的数据*!/
   }*/
 }

