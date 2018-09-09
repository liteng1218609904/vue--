<template>
  <header>
    <div class="row">
      <div class="home" @click="$router.push('/home')">  <!--跳转路由-->
        <i class="iconfont icon-sinaweibo05"></i>
      </div>
      <div class="logo"></div>
      <div class="right">
        <div class="search">
          <a href="javascript:;">
            <i ></i>
          </a>
        </div>
        <div class="cart">
          <a href="javascript:;">
            <i></i>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/mixins.styl'
header
  height 44px
  position fixed
  left 0
  top 0
  right 0
  z-index 5
  background #fafafa
  &:after
    content ''
    position absolute
    left 0
    bottom 0
    width 100%
    height 1px
    background-color #d9d9d9
    transform scaleY(0.5)
  .row
    box-sizing border-box
    width 375px
    height 44px
    padding-left 12px
    padding-right 8px
    overflow hidden
    display flex
    align-items center
    justify-content space-between
    position relative
    >.home
      width 24px
      height 22px
      display inline-block
      vertical-align middle
      i
        font-size 24px
    .logo
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      margin auto
      width 86px
      height 27px
      display inline-block
      vertical-align middle
      background url('../../asssets/images/icons.png')
      background-repeat no-repeat
      background-size 88px 199px
      background-position: 0px -63px;
    .right
      box-sizing border-box
      text-align center
      a
        display inline-block
        width 32px
        height 32px
      .search
        margin-right 10px
        float left
        i
          width 32px
          height 32px
          display block
          background-repeat: no-repeat;
          vertical-align middle
          background url('../../asssets/images/icons.png')
          background-repeat no-repeat
          background-size 86px 199px
          background-position: 0px -165px;
      .cart
        float left
        i
          width 32px
          height 32px
          display block
          background-repeat: no-repeat;
          vertical-align middle
          background url('../../asssets/images/icons.png')
          background-repeat no-repeat
          background-size 87px 199px
          background-position: 0px 3px;
</style>
