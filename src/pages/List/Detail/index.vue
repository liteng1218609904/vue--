<template><!--分类-->
  <div class="listDetail" ref="scroll"
       v-if="navDetail">   <!--当有数据的时候在执行--><!--因为navDetail.subCateList为navData里面的数据为3层连用-->
    <div class="warp">  <!--一般都要给 v-if="navDetail"为外层数据，有数据的时候再执行，若navDetail.subCateList就报错-->
      <div class="banner">
        <img v-lazy="navDetail.wapBannerUrl" alt="">
      </div>
      <div class="detailTit">
          <span class="text">
            <span>{{navDetail.name}}</span>
            <span>分类</span>
          </span>
        </div>
      <section class="detail" >
        <ul class="list">
          <li class="item" v-for="(item, index) in navDetail.subCateList" :key="index">
            <a href="javascript:;">
              <img v-lazy="item.wapBannerUrl" alt="">
              <span>{{item.name}}</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        anim: false
      }
    },
    mounted () {     /*通过监视获取的数据*/
      this.$store.dispatch('getNavDetail', () => {  /*dispatch后有回调，对应的action中要加  callback && callback()*/
        this.$nextTick(() => {
          this.scroll = new BScorll (this.$refs.scroll, {
            scrollY: true,
            click: true
          })
        })
      })

    },

    computed: {
      ...mapState(['navDetail'])
    },
    /*watch: {
      navDetail: function () {
        this.anim = true
        this.timer = setTimeout(() => {
          clearTimeout(this.timer)
          this.anim = false
        }, 800)
      }
    }*/
  }

</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../common/stylus/mixins.styl'
  @keyframes animTop
    30%
      transform  translate3d(0, -50px, 0)
    60%
      transform translate3d(0, 50px, 0)
    80%
      transform  translate3d(0, -10px, 0)
    100%
      transform translate3d()
  .listDetail
    margin-left 81px
    height 552px
    background #ffffff
    &.anim
      animation animTop .8s
    .warp
      padding 15px 15px 10px
      height auto
      background #ffffff
      margin-top 47px
      .banner
        width 100%
        height 96px
        border-radius 4px
        img
          width 100%
          height 100%
      .detailTit
        height 54px
        line-height 54px
        text-align center
        font-size 12px
        color #333333
        .text
          position relative
          font-size 0
          >span
            font-size 12px
          &:before,&:after
            position absolute
            content ''
            top -10px
            bottom 0
            margin auto
            height 1px
            width 20px
            background-color #d9d9d9
          &:before
            left -28px
          &:after
            right -28px
      .detail
        >.list
          >.item
            display inline-block
            margin-right 17px
            font-size 0
            width 72px
            vertifcal-align top
            &:nth-child(3n)
              margin-right -5px
            >a
              color #333333
              >img
                width 72px
                height 72px
              >span
                display block
                height 36px
                line-height 17px
                text-align center
                font-size 12px
</style>
