<template>
  <header class="search">
    <div class="inner">
      <div class="ipt">
        <i class="icon"></i>
        <span class="placeholder">搜索商品, 共9723款好物</span>
      </div>
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../common/stylus/mixins.styl'
  .search
    position fixed
    top 0
    left 0
    z-index 5
    width 100%
    height 44px
    .inner
      display flex
      align-items center
      padding 0 15px
      width 100%
      height 44px
      position relative
      background-color #ffffff
      &:after
        content ''
        position: absolute
        background-color #d9d9d9
        left 0
        width 100%
        height 1px
        transform-origin 50% 100% 0
        bottom 0
      .ipt
        width 100%
        display flex
        align-items center
        justify-content center
        height 28px
        font-size 14px
        background-color #ededed
        border-radius 4px
        margin-right 24px
        >.icon
          display inline-block
          vertical-align middle
          width 14px
          height 14px
          background url('../../../asssets/images/search.png')
          background-repeat no-repeat
          margin-right 5px
          background-size 100%
        >.placeholder
          font-size 13px
          color #666666
</style>
