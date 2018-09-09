<template>
  <div id="app">
    <div  class="home">
      <span class="goTop"><span></span></span>
      <section  class="head">
        <header >
          <div  class="logo"></div>
          <div  class="search">
            <i ></i>
            <span>搜索商品, 共9789款好物</span>
          </div>
        </header>
        <ListScroll/>
      </section>
      <Swiper2 />
      <div   class="explain">
        <div   class="expItem"> <i></i> <span  >网易自营品牌</span></div>
        <div   class="expItem"> <i></i><span  >30天无忧退货</span></div>
        <div   class="expItem"> <i></i><span  >48小时快速退款</span>
        </div>
      </div>
      <section class="GoodsSale">
        <header>
          <a href="javascript:;">
            <span>品牌制造商直供</span>
            <i></i>
          </a>
        </header>
        <div class="goods">
          <ul>
            <li v-for="(item, index) in homeData.tagList" :key="item.id" v-if="index<=3">
              <a href="javascipt:;">
                <div class="ctn">
                  <h4 class="title">{{item.name}}</h4>
                  <span class="proce1">{{item.floorPrice}}</span><span class="proce2">元起</span>
                </div>
                <img v-lazy="item.picUrl" alt="img">
              </a>
            </li>
          </ul>
        </div>
      </section>    <!--品牌制造商直供-->
      <section class="indexFloor">
        <div class="move new">
          <a href="javascript:;" class="moveCont">
            <span class="title">新品首发</span>
            <div class="all">
              <span>查看全部</span>
              <i></i>
            </div>
          </a>
        </div>
        <GoodsList styleName="w1" :data="homeData.newItemNewUserList"/>
      </section>    <!--新品首发-->
      <section class="indexFloor">
        <div class="move hot">
          <a href="javascript:;" class="moveCont">
            <span class="title">人气推荐.好物精选</span>
            <div class="all">
              <span>查看全部</span>
              <i></i>
            </div>
          </a>
        </div>
        <GoodsList styleName="w2" :data="homeData.popularItemList"/>
      </section>     <!--人气推荐-->
      <div class="countDown">
        <a href="javascript:;">
          <div class="itemLeft">
            <div class="title">严选限时购</div>
            <div class="countNum">
              <span class="time">06</span>
              <span class="colon">:</span>
              <span class="time">60</span>
              <span class="colon">:</span>
              <span class="time">60</span>
            </div>
            <div class="nextTitle">下一场 22:00  开始</div>
          </div>
          <div class="itemRight">
            <img src="../../asssets/images/test2.png" alt="">
            <div class="price">
              <span class="now">¥42</span>
              <span class="old">¥49</span>
            </div>
          </div>
        </a>
      </div>
      <div class="weal">
        <a href="javascript:;">
          <img src="../../asssets/images/move.jpg" alt="">
        </a>
      </div>
      <Subjects :data="homeData.topicList"/>
      <GoodsShow :data="homeData.cateList"/>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  import Swiper2 from './Swiper'
  import ListScroll from './ListScroll'
  import GoodsList from  './GoodsList'
  import Subjects from './Subjects'
  import GoodsShow from './GoodsShow'

  export default {
    data() {
      return {}
    },
    mounted (){
      this.$store.dispatch('getHomeData')
    },
    computed: {  //读取数据显示品牌制造商直供
      ...mapState(['homeData']),
    },



    components: {
      Swiper2,
      ListScroll,
      GoodsList,
      Subjects,
      GoodsShow
    },

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #app
    width: 100%;   /*必须外容器包着*/
    height:10000px;  /*样式之间的灰色缝隙，若设成100%，只是当前界面为灰色，向下滑动时就为原来的白色*/
    background #f4f4f4
    .home
      letter-spacing 1px
      margin-bottom 30px
      .head
        background-color #ffffff
        position fixed
        top 0
        left 0
        right 0
        z-index 5
        header
          height 35px
          display flex
          padding 6px  13px
          align-items center
          .logo
            width 65px
            height  18px
            background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
            background-size cover
            margin-right 12px
            display inline-block
            background-position center
          .search
            flex-grow 1
            display flex
            align-items center
            justify-content center
            width  50px
            height  27px
            background-color #ededed
            border-radius 3px
            i
              display inline-block
              width 14px
              height 14px
              background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
              margin-right 3px
              background-repeat: no-repeat;
              background-size: 100% 100%;
            span
              color #666666
              font-size 13px
      /*网易自营品牌*/
      .explain
        width 100%
        height 28px
        display flex
        background #ffffff
        padding 0 6px
        box-sizing border-box
        flex-direction row
        flex-wrap nowrap
        align-items center
        justify-content space-around
        font-size 2px
        margin-bottom 11px
        .expItem
          vertical-align middle  /*文字图片中心对齐*/
          span
            display inline-block
          i
            display inline-block
            width  12px
            height  11px
            background-image:url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png);
            background-repeat no-repeat
            background-size cover
      /*品牌制造商直供*/
      .GoodsSale
        background #ffffff
        margin-bottom 12px
        header
          display flex
          flex-flow row nowrap
          align-items center
          justify-content center
          height 50px
          a
            color #333333
            span
              font-size 17px
            i
              display inline-block
              width 15px
              height 15px
              background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png)
              background-repeat no-repeat
              background-size cover
        .goods
          padding-bottom 4px
          ul
            position relative
            margin  0 10px
            height 230px
            overflow hidden
            li
              display inline-block
              position relative
              float left
              margin-bottom 6px
              width 175px
              height 111px
              overflow hidden
              background-color #f4f4f4
              &:nth-child(odd)
                margin-right 5px
              >a
                color #333333
                .ctn
                  position absolute
                  left 0
                  top 0
                  padding 2px 0 0 3px
                  width 100%
                  z-index 4
                  font-size 0
                  .title
                    ellipsis()
                    font-size 12px
                    line-height 15px
                    margin-bottom 5px
                  .proce1,.proce2
                    font-size 15px
                    line-height 17px
                    margin-bottom 5px
                >img
                  width 100%
                  height 100%






      /*新品首发 人气推荐 */
      .indexFloor
        background #ffffff
        .move
          width 100%
          height 135px
          margin-bottom 15px
          position relative
          &.new
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png)
            background-size 330px 130px
            a
              color #8ba0b6
            .all
              background #d8e5f1
          &.hot
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png)
            background-size 260px 159px
            a
              color #B4A078
            .all
              background #F4E9CB
          .moveCont
            position absolute
            width 167px
            height 63px
            top 50%
            left 50%
            margin-left -83px
            margin-top -32px
            text-align center
            font-size 18px
            .all
              position relative
              margin 15px auto 0
              width 120px
              height 30px
              font-size 0
              line-height 32px
              span
                font-size 14px
              i
                display inline-block
                width 5px
                height 11px
                background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexNewArrow-f3b56d449b.png)
                background-size 5px 11px
                margin-left 3px





       /*严选限时购*/
      .countDown
        width 100%
        box-sizing border-box
        height 160px
        padding 15px 20px 25px 28px
        margin-bottom 10px
        background #ffffff
        overflow hidden
        a
          display block
          width 100%
          height 100%
          clearFix()
        .itemLeft
          float left
          padding-top 20px
          .title
            font-size 18px
            line-height 18px
            margin-bottom 12px
            letter-spacing 6px
            color #333333
          .countNum
            display inline
            font-size 0
            .time
              display inline-block
              font-size 16px
              text-align center
              width 31px
              height 28px
              line-height 28px
              border-radius 2px
              color #ffffff
              background #444444
            .colon
              display inline-block
              color #333333
              font-size 30px
              font-weight 700
              width 10px
              text-align center
          .nextTitle
            margin-top 20px
            color #333333
            font-size 12px
            height 12px
            line-height 12px
        .itemRight
          width 160px
          height 160px
          position relative
          float right
          img
            width 100%
            height 100%
          .price
            width 48px
            height 48px
            position absolute
            background-color rgba(244,143,24,.95)
            border-radius 50%
            bottom 18px
            right 10px
            color #ffffff
            text-align center
            display flex
            flex-direction column
            justify-content center
            span
              font-size 12px
      .weal
        width 100%
        height 150px
        margin-bottom 10px
        overflow hidden
        img
          width 100%






</style>
