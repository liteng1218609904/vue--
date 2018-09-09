<template>  <!--更多好物-->
  <div>
    <section class="goodsShow" v-for="(items,index) in data" :key="index">
     <Title :title="items.name+'好物'"/>
      <ul class="list" >
        <li class="item" v-for="(item, index) in items.itemList"  :key="index">
          <a href="javascript:;">
            <img v-lazy="item.listPicUrl" alt="">
            <div class="desc  ellipsis">{{item.simpleDesc}}</div>
            <div class="name ellipsis">{{item.name}}</div>
            <div class="price ellipsis">￥{{item.retailPrice}}</div>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;" class="move">
            <p>更多{{items.name}}好物</p>
            <i></i>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import Title from '../../../components/Title'
  export default {
    props: {
      data: Array
    },
   components: {
      Title
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../../common/stylus/mixins.styl'
    .goodsShow
      background #ffffff
      margin-bottom 10px
      .list
        position relative
        overflow hidden
        width 400px

        .item
          float left
          overflow hidden
          width  175px
          margin-left 10px
          background #ffffff
          a
            display block
            height 252px
            width 185px
            font-size 0
            overflow hidden
            img
              width 172px
              height 172px
              border-radius 2px  0 0 2px
              background-color #f4f4f4
            .desc
              width 172px
              padding 10px 5px
              box-sizing border-box
              background-color #f1ece2
              border-radius 0 2px 2px 0
              color #9f8a60
              letter-spacing 0
              line-height 15px
              font-size 12px
            .name
              margin-top 5px
              padding 0 5px
              color #333333
              font-size 13px
              line-height 24px
            .price
              line-height 1
              font-size 16px
              color $main
              padding 0 5px
            &.move
              border-radius 2px
              padding 64px 0
              box-sizing border-box
              display flex
              flex-direction column
              align-items center
              justify-content center
              background #f4f4f4
              height 208px
              p
                color #333333
                font-size 16px
                line-height 16px
                margin-bottom 25px
              i
                display block
                background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goodGridMore-233aaf669a.png)
                vertical-align middle
                background-repeat no-repeat
                background-size 100% 100%
                width 33px
                height 33px !important
</style>
