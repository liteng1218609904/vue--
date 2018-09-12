<template>
  <div class="topicList">
    <div class="back">
      <div class="back-slide" v-for="(item, index) in data" :key="index">
        <a href="javascript:;">
          <img v-lazy="item.picUrl" alt="">
          <div class="tNum">
            <span class="tNumCon">{{item.articleCount}}</span>
          </div>
          <div class="title">{{item.title}}</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import BScorll from 'better-scroll'
  export default {
    data () {
      return {

      }
    },

    props: {
      data: Array
    },



    mounted () {
      this.$nextTick(() => {    /*确保数据回来*/
        this.scroll = new BScorll ('.topicList', {  /*wrapper父容器*/
          scrollX: true,      /*应用better-scroll*/
          click: true
        })
      })
    },


  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../../common/stylus/mixins.styl'
  .topicList
    height 113px
    width 100%
    background #ffffff
    margin-bottom 10px
    padding 16px 0 14px 15px
    overflow hidden
    .back
      width 800px
      height 100%
      float left   /*ul.li双重左浮动个*/
      .back-slide
       float left
       margin-right: 14px;
       a
        display block
        width 82px
        height 110px
        position relative
        img
          width 82px
          height 82px
          border-radius 2px
          margin-bottom 11px
        .tNum
          position absolute
          top 0
          right 0
          color #ffffff
          width 58px
          height 16px
          border-radius 0 2px 0 0
          background url('../../../asssets/images/bg.png') no-repeat
          background-size 100%
          .tNumCon
            position absolute
            top 0
            right 4px
            width 75px
            height 16px
            line-height 16px
            font-size 12px
            text-align right
        .title
          color #333333
          font-size 12px
          line-height 1
          text-align center
          height 15px
          width  84px

</style>
