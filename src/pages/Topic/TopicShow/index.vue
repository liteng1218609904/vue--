<template>
  <div class="topicShow">
    <Title title="十点一刻"/>
    <div class="topicback">
      <div class="ShowSwiper">
      <div class="mySwiper">
        <div class="swiper-slide" v-for="(item, index) in data" :key="index">
          <a href="javascript:;">
            <div class="lineTitle">
              <span class="inner">今日话题</span>
            </div>
            <div class="tsTitle">{{item.title}}</div>
            <div class="desc ellipsis">{{item.desc}}</div>
            <div class="joinInfo">{{item.participantNum}}人参与话题</div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <div class="move">
              <span>查看全部话题</span>
              <i></i>
            </div>
          </a>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  import BScorll from 'better-scroll'
  import Title from '../../../components/Title'

  export default {
    data () {
      return {
      }
    },
    components: {
      Title
    },
    props: {
      data: Array
    },
    mounted () {
      this.$nextTick(() => {    /*确保数据回来*/
        this.scroll = new BScorll ('.ShowSwiper', {  /*wrapper父容器*/
          scrollX: true,      /*应用better-scroll*/
          click: true
        })
      })
    },


  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../common/stylus/mixins.styl'
  .topicShow
    width 100%
    background-color #fafafa
    padding-left 10px
    padding-bottom 10px
    .topicback
      width 400px
      height 215px
      background-color white
    .ShowSwiper
      width 100%
      height 100%
      .mySwiper
        float left
        width 1300px
        .swiper-slide
          float left
          width 300px
          height 210px
          margin-right 20px
          background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png)
          background-repeat no-repeat
          background-size 100% 100%
          a
            position relative
            display block
            width 100%
            height 206px
            padding 19px 20px 40px
            box-sizing border-box
            text-align center
            color #333333
            .lineTitle
              display flex
              align-items center
              justify-content center
              margin-bottom 14px
              &:before
                content ''
                display block
                width 12px
                height 1px
                background-color #7f7f7f
              &:after
                content ''
                display block
                width 12px
                height 1px
                background-color #7f7f7f
              span
                margin 0 4px
                font-size 12px
                color #7f7f7f
            .tsTitle
              font-size 18px
              font-weight 700
              margin-top 30px
              margin-bottom 7px
            .desc
              font-size 14px
              line-height 1.5
              margin-top 10px
              margin-bottom 7px
            .joinInfo
              position absolute
              left 50%
              transform translateX(-50%)
              bottom 19px
              width 250px
              height 24px
              font-size 12px
              text-align center
          &:last-child
            background none
            a
              position relative
              width 290px
              height 192px
              border 10px solid #e6e6e6
              padding 0
              background-color #fafafa
              >.move
                position absolute
                top 0
                right 0
                left 0
                bottom 0
                margin auto
                width 120px
                height 19px
                display flex
                align-items center
                >span
                  color #7f7f7f
                  font-size 16px
                  line-height 19px
                  margin-right 9px
                >i
                  display inline-block
                  width 15px
                  height 15px
                  background url('../../../asssets/images/right.png')
                  background-repeat no-repeat
                  background-size 100% 100%
</style>
