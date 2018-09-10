<template>  <!--专题精选-->
  <section class="GoodsSale">
    <header>
      <a href="javascript:;">
        <span>专题精选</span>
        <i></i>
      </a>
    </header>
    <div class="subjects">
      <div class="swiper-wrapper" >
        <div class="swiper-slide"  v-for="(item,index) in data" :key="index">
          <img v-lazy="item.itemPicUrl" alt="">
          <div class="line">
            <h4 class="title  ellipsis">{{item.title}}</h4>
            <span class="price">{{item.priceInfo}}元起</span>
          </div>
          <div class="desc  ellipsis">{{item.subtitle}}</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import BScorll from 'better-scroll'
  export default {
    props: {
      data: Array
    },
    mounted () {
      this.$nextTick(() => {    /*确保数据回来*/
        this.scroll = new BScorll ('.subjects', {  /*wrapper父容器*/
          scrollX: true,      /*应用better-scroll*/
          click: true
        })
      })
    },

  }
</script>

<style lang='stylus' rel='stylesheet/stylus' >
@import '../../../common/stylus/mixins.styl'
  header
    display flex
    flex-flow row nowrap
    align-items center
    justify-content center
    height 55px
    a
      color #333333
      span
        font-size 16px
      i
        display inline-block
        width 15px
        height 15px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png)
        background-repeat no-repeat
  .subjects
    width 100%
    height 205px
    padding-left  15px
    padding-bottom 18px
    .swiper-wrapper
      width 1100px
      padding-right 15px
      .swiper-slide
        width 300px
        height 160px
        box-sizing border-box
        padding-right 11px
        img
          width 100%
          height 100%
          border-radius 8px
          margin-bottom 8px
        .line
          height 20px
          margin-bottom 1px
          font-size 14px
          .title
            width 205px
            float left
            color #333333
          .price
            float right
            color $main
        .desc
          height 18px
          font-size 12px
          color #7f7f7f
</style>
