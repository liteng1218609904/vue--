<template>
  <div class="personal">
    <Header/>
    <section class="cont">
      <div class="logo">
        <img src="../../asssets/images/logo.png" alt="">
      </div>
      <div class="btns">
        <div class="btn">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="btn dist">
          <i class="iconfont icon-youxiang space"></i>
          <span>邮箱账号登录</span>
        </div>
      </div>
      <div class="quickLoign">
        <span>手机号快捷注册</span>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </section>
    <section class="otherLogin">
      <div class="itemOther">
        <i class="iconfont icon-wechat"></i>
        <span>微信</span>
      </div>
      <div class="itemOther">
        <i class="iconfont icon-web-icon-"></i>
        <span>QQ</span>
      </div>
      <div class="itemOther">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </section>
  </div>
</template>
<script>
  import  Header from '../../components/Header'
  export default {
    data() {
      return {

      }
    },
    components: {
      Header
    },


  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'

  .personal
    width 100%
    height 100%
    box-sizing border-box
    padding-top 44px
    background #f2f5f4
    position relative
    .cont
      >.logo
        text-align center
        padding 60px 0
        >img
          width 150px
          height 52px
      >.btns
        padding 0 21px
        >.btn
          margin-bottom 20px
          text-align center
          border-radius 3px
          width 100%
          height 43px
          line-height 43px
          vertical-align middle
          text-align center
          font-size 14px
          color #ffffff
          border 1px solid $main
          background-color $main
          &.dist
            background-color #f2f5f4
            color $main
          >i
            width 20px
            height 20px
            box-sizing border-box
            font-size 20px
            vertical-align inherit
            &.space
              margin-right 5px
      >.quickLoign
        color #333333
        font-size 14px
        width 100%
        text-align center
        >i
          font-size 14px
          margin-right 8px
          margin-left 2px
          color #333333
    .otherLogin
      position absolute
      width 100%
      height 30px
      left 0
      bottom 30px
      text-align center
      .itemOther
        height 13px
        border-right 1px solid #979797
        display inline-block
        text-align center
        color #979797
        padding 0 30px
        font-size 13px
        >i
          13px
        &:last-child
          border-right none
</style>
