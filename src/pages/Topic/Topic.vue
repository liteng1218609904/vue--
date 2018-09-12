<template>
  <div class="topic">
    <Header/>
    <div class="maoD">
      <a href="javaScript:;" @click="goToTop(0, 0, 500)">
        <div>
          <i class="iconfont icon-arrowup"></i>
        </div>
      </a>
    </div>
    <Banner :data="topicData.banner"/>
    <TopicList :data="topicData.column"/>
    <Recommend :data="topicData.recommend"/>
    <TopicShow :data="topicData.tenfifteen"/>
    <Recommend :data="topicData.zhen"/>
    <section class="look">
      <Title title="严选LOOK"/>
      <a href="javascript:;">
        <img v-lazy="topicData.yxLook.picUrl" alt="">
        <div class="authorContainer">
          <div class="author">
            <div class="authorPic">
              <img v-lazy="topicData.yxLook.avatar" alt="">
            </div>
            <div class="authorName  ellipsis">{{topicData.yxLook.nickname}}</div>
          </div>
        </div>
        <div class="desc">{{topicData.yxLook.content}}</div>
      </a>
    </section>
    <MoveWonderful :data="topicData.yxWeek"/>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Header from '../../components/Header'
  import Banner from './Banner'
  import TopicList from './TopicList'
  import Recommend from  './Recommend'
  import TopicShow from './TopicShow'
  import Title from '../../components/Title'
  import MoveWonderful from './MoveWonderful'

  export default {
    data() {
      return {}
    },

    methods: {
      currentIndex(index) {
        this.current = index
      },

      _initScroll() {
        new BScroll('.betterScroll', {
          click: true,
          scrollX: true, // 水平滑动
        })
      },
      goToTop(x, y, time, easing){
        console.log('-------------',this)
        this.bscroll.scrollTo(x, y, time, easing)
      },
      backTop() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    },








    mounted () {
      this.$store.dispatch('getTopicData')
    },
    computed: {
      ...mapState(['topicData'])
    },

    components:{
      Header,
      Banner,
      TopicList,
      Recommend,
      TopicShow,
      Title,
      MoveWonderful
    }




  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .topic
    margin-bottom 50px
    height 100%
    width 100%
    background-color #fafafa
    .look
      background #ffffff
      margin-bottom 10px
      img
        width 100%
        height auto
      .authorContainer
        padding 10px 0 10px 10px
        .author
          display flex
          align-items center
          font-size 10px
          .authorPic
            width 23px
            height 23px
            border-radius 50%
            margin-right 4px
            border 1px solid #d9d9d9
            overflow hidden
          .authorName
            color: #333;
            font-size 14px
            letter-spacing 2px
            margin-left 10px
      .desc
        font-size 14px
        color #7f7f7f
        line-height 1.6
        padding 5px 15px 10px

  .maoD
    position fixed
    bottom 55px
    right 10px
    z-index 20
    div
      width 50px
      height 50px
      line-height 50px
      text-align center
      border-radius 50%
      background: #fff
      .iconfont
        color #aaa
        font-size 35px




</style>
