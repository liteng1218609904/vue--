<template>
  <div   class="wrapper"   ref="wrapper">
    <ul>
      <li  v-for="(name,index) in navlist" :key="index"  :class="{'active':current===index}" @click="currentIndex(index)">
        <span>{{name}}</span></li>
    </ul>
  </div>
</template>
<script>
  import BScorll from 'better-scroll'
  export default {
    data() {
      return {
        navlist: ['推荐', '居家', '配件', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
        current: 0
      }
    },

    //因为不是异步请求回来的数据，若是异步数据加 this.$store.dispatch('action方法', () => {}）
    mounted () {
      this.$nextTick(() => {    /*确保数据回来*/
        this.scroll = new BScorll (this.$refs.wrapper, {  /*wrapper父容器*/
          scrollX: true,      /*应用better-scroll*/
          click: true
        })
      })
    },

    methods: {
      currentIndex (index) {
        this.current = index   //当点击的下标=current，就出现active
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"

  .wrapper
    width 100%  /*将ul设置成100%，就是父容器不可以定宽，后期数据遍历，让li将ul撑开*/
    height 100%
    overflow hidden
    display flex
    ul
      display flex
      justify-content space-between
      padding 0  15px
      background #ffffff
      height 25px
      align-items center
      li
        width 65px
        height 20px
        display flex
        flex-direction row
        flex-wrap nowrap
        justify-content space-between
        &.active
          span
            color $main
            position relative
            &:after{
              content ''
              left 0
              bottom 0
              position absolute
              width 100%
              height 2px
              background-color $main
            }
        span
          display inline-block
          letter-spacing  3px
          padding 0 3px
          line-height 17px
          font-size 13px
          text-align center
          color #333333

</style>
