<template>   <!--轮播图-->
  <div  class="wapper"  v-if="data" >
    <div  class="swiper-container">
      <div class="swiper-wrapper">
        <div  class="swiper-slide"  v-for="(item, index) in data" :key="index">
          <a  href="javascript:;">
            <div  class="content">
              <div class="subTitle">{{item.subTitle}}</div>
              <div  class="title">{{item.title}}</div>
              <div  class="desc">{{item.desc}}</div>
            </div>
            <img  :src="item.picUrl"alt=""> <!--图片不用懒加载否则加载慢-->
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>  <!--分页器-->
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    data() {
      return {

      }
    },

    props: {
      data: Array
    },


    mounted () {   /*页面加载完成之后执行mounted，一般轮播图，回弹放在mounted中执行*/
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            spaceBetween: 13,  /*空白在两边*/
            slidesPerView: 1.15,  /*若1.5占1.5个图片宽*/
            centeredSlides: true, /*默认靠左为false,图片靠左，没有空白区间1.15*/
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
    },
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .wapper
    margin-top 44px
    padding 12px 0
    width 375px
    box-sizing border-box
    background #ffffff
    .swiper-container
      width 100%
      .swiper-wrapper
        width 1500px
        .swiper-slide
          width 335px
          height 192px
          a
            display block
            height 192px
            img
              width 100%
              height 100%
              border-radius 6px
            .content
              position absolute
              top 0
              left 0
              bottom 0
              right 0
              margin auto
              display flex
              align-items center
              justify-content center
              flex-direction column
              width 233px
              height 99px
              background-color rgba(255, 255, 255, .9)
              .subTitle
                position relative
                font-size 10px
                color #7f7f7f
                line-height 15px
                padding  0 4px
                &:before,&:after
                  content ''
                  position absolute
                  top 0
                  bottom 0
                  margin auto
                  width 12px
                  height 1px
                  background-color #999999
                &:before
                  left -12px
                &:after
                  right -12px
              .title
                font-size 16px
                line-height 24px
                color #333333
                margin-top 8px
                font-weight 700
              .desc
                font-size 12px
                color #333333
                line-height 18px
                margin-top 2px
</style>


