<template>  <!--新品首发，人气推荐-->
  <div   class="goodsWrap " :class="styleName" >  <!--必须两层-->
    <div class="wrapper"  >
      <div class="swiper-slide " v-for="(item,index) in data" :key="index">  <!--接收的数据为data-->
        <a href="javascript:;">
        <div class="image">
          <img alt="" v-lazy="item.primaryPicUrl">
        </div>
        <div class="name ellipsis" >{{item.name}}</div>  <!--重置样式ellipsis-->
        <div class="nameDoc ellipsis">{{item.simpleDesc}}</div>
        <div class="price ellipsis">¥{{item.retailPrice}}</div>
      </a>
      </div>   <!--便利的data为可变数据，因为给传过来的为Array，不确定-->
      <div class="swiper-slide all" >
        <a href="javascript:;">
        <span>查看全部</span></a>
      </div>
    </div>
  </div>
</template>
<script>
  import BScorll from 'better-scroll'

  export default {
    props: {
      data: Array  , /*接收Home.vue传过来的homeData里的数组*/
      styleName:String //给滑动外层容追加容器名，实现复用。
    },

    data() {
      return {

      }
    },

    mounted () {
      this.$nextTick(() => {    /*确保数据回来*/
        this.scroll = new BScorll ("."+this.styleName, {  /*wrapper父容器*/
          scrollX: true,      /*应用better-scroll*/
          click: true
        })
      })
    },




  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"

  .goodsWrap
    width 100%
    height 222px
    overflow hidden
    margin-bottom 10px
    background #ffffff
    .wrapper
      padding-left 15px
      width 2000px
      .swiper-slide
        width 140px !important
        height 220px
        margin-right 13px
        .image
          width 140px
          height 140px
          background #f4f4f4
          z-index 0
          img
            width 100%
            height 100%
        .name
          margin 5px 0
          padding 0 5px
          color #333333
          font-size 14px
          line-height 17px
        .nameDoc
          margin-bottom 7px
          line-height 15px
          font-size 12px
          padding 0 5px
          color #7f7f7f
        .price
          padding 0 5px
          color $main
          line-height 1
          font-size 14px
        &:last-of-type
          border 4px solid #f4f4f4
          height 132px
          line-height 132px
          text-align center
          span
            font-size 14px
            color #333333
      .all
        border: 2px solid #f4f4f4;
        height: 139px;
        line-height: 139px;
        text-align: center;
        margin-right: 40px;




</style>
