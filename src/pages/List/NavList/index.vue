<template>
  <div class="listMenu" v-if="navData"> <!--v-if="navData一般都得判断，有数据就执行-->
    <div class="inner" ref="scroll">
      <ul>        <!--  this.navIndex = index 中的navIndex-->    <!--先定义状态，自己用，不用设成公共state,定义为data状态-->
        <li class="item" :class="{'active' : navIndex === index}"
            v-for="(item, index) in navData"
            :key="index" @click="currentIndex(index)">
          <a href="javascript:;">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScorll from 'better-scroll'
  /*整体思路，当有数据的时候，执行回弹，然后默认当前index再第一个上，然后调用action去，显示当前下标对应的数据*/
  export default {
    data(){
      return{
        navIndex : 0
      }
    },
    mounted(){
      if (!this.navData){  /*没有数据就返回，有数据就执行回弹*/
        return
      }
      this._initData()
    },
    watch:{
      navData (){   /*通过监视navData数据，再执行回弹*/
        this._initData()
        this.$store.dispatch('setNavIndex', 0)   /*当有值的时候，请求回来数据，再调用action*/
      }   /*让初始的下标状态为0，红杠就在第一个上*/
    },

    computed: {
      ...mapState(['navData'])
    },

    methods: {
      currentIndex (index) {
          this.$store.dispatch('setNavIndex', index) /*将index传给action,调用mutation直接更新*/
          this.navIndex = index   /*将navIndex状态变为当前点击的index*/
      },
      _initData(){
        this.$nextTick(() => {
          this.scroll = new BScorll (this.$refs.scroll, { /*this.$refs.scroll*/
            scrollX: true,
            click: true
          })
        })
      }
    }
  }


 /* mounted () {
    this.$store.dispatch('getNavDetail', () => {
      this.$nextTick(() => {
        this.scroll = new BScorll (this.$refs.scroll, {
          scrollY: true,
          click: true
        })
      })
    })

  },*/

</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../common/stylus/mixins.styl'
  .listMenu
    position fixed
    top 44px
    left 0
    bottom 0
    z-index 4
    width 81px
    background-color #ffffff
    &:after
      content ''
      position absolute
      background-color rgba(0,0,0,.15)
      top 0
      bottom 0
      width 1px
      -webkit-transform-origin 100% 50% 0
      transform-origin 100% 50% 0
      right 0
    .inner
      width 100%
      height 100%
      max-height 552px
      padding-top 20px
      overflow hidden
      >ul
        padding-bottom 69px
        height 1500px
        >.item
          width 100%
          height 38px
          line-height 38px
          text-align center
          border none
          &.active
            position relative
            &:before
              content ''
              position absolute
              top 0
              left 0
              bottom 0
              width 3px
              background-color $main
            >a
              font-size 18px
              line-height 38px
              font-weight 700
              color $main
          +.item
            margin-top 10px
          >a
            display block
            color #333333
            font-size 14px
            line-height 28px

</style>
