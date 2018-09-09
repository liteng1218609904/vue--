<template>
  <footer class="footer_guide border-1px">
    <span class="guide_item" :class="{on: '/home'===$route.path}" @click="goTo('/home')">
      <span class="item_icon">   <!--$route.path获得当前请求路径-->     <!--实现点击切换界面-->
        <i class="iconfont icon-sinaweibo05"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on: '/topic'===$route.path}" @click="goTo('/topic')">
      <span class="item_icon">
        <i class="iconfont icon-hui"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="guide_item" :class="{on: '/list'===$route.path}" @click="goTo('/list')">
      <span class="item_icon">
        <i class="iconfont icon-chouti"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" :class="{on: '/shopCart'===$route.path}" @click="goTo('/shopCart')">
      <span class="item_icon">
        <i class="iconfont icon-tab-bar--n"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" :class="{on: '/personal'===$route.path}" @click="goTo('/personal')">
      <span class="item_icon">
        <i class="iconfont icon-nanrentouxiang"></i>
      </span>
      <span>个人</span>
    </span>
  </footer>
</template>
<script>
  export default {
    methods: {  /*点击切换路由，一种router-link,一种加点击监听*/
      goTo (path) {
        this.$router.replace(path)   /*实现点击切换界面*/
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #b4282d
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
