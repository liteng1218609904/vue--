<template><!--轮播图-->
  <div  class="wapper">
    <div class="swiper-container">  <!--2层必须写-->
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in homeData.focusList" :key="index">
        <!--<swiper-slide v-for="item in homeData.focusList" :key="item.id">-->
          <!--遍历每个重复的li,focusList为数组，可以将item理解为下标，item.id通过id取-->
            <img :src="item.picUrl" alt="">  <!--轮播图这不写图片懒加载，否则加载慢-->
        </div>
      </div>
      <div class="swiper-pagination">  <!--分页器-->
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    data() {
      return {
      }
    },

    // 轮播图注意: 状态变化后, 界面才异步执行更新, watch的回调是同步执行
    watch: {
      homeData() { // 获得了homeData列表数据了
        // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它
        this.$nextTick(() => {
          // 必须在列表界面显示后才创建(列表数据显示后)
          //console.log(this.homeData);
            new Swiper('.swiper-container', {    /*必须有个父容器*/
              loop: true,  // 循环轮播
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },
            })
        })

      }
    },

    computed: {
      ...mapState(['homeData'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .wapper
    width 100%
    margin-top  77px
    .swiper-container
      width 100%
      .swiper-wrapper
        width 100%
        height 205px
        .swiper-slide
          /*a*/
            /*display block*/
            /*height 200px*/
          img
            width 100%
            height 100%
    /*.wapper*/
      /*.swiper-pagination-bullet*/
        /*width 10px*/
        /*height 2px*/
        /*background #ffffff*/
        /*opacity .4*/
        /*border-radius 0*/
      /*.swiper-pagination-bullet-active*/
        /*opacity 1*/
</style>
