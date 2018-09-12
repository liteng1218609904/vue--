<template>
  <div class="main-container">
    <header/>
    <div class="login-types-wrapper" v-show="isShow">
      <div class="logo_img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="login-way">
        <div class="phone-login button" @click="changeIsShow">
          <i class="iconfont icon-icon--">&nbsp;&nbsp;手机号码登陆</i>
        </div>
        <div class="email-login button" @click="changeIsEmail">
          <i class="iconfont icon-02">&nbsp;&nbsp;邮箱账号登陆</i>
          <div>
            <span>手机号快捷注册</span>
            <i class="iconfont icon-icon"></i>
          </div>
        </div>
      </div>
      <div class="others-login">
        <i class="iconfont icon-wechat">&nbsp;微信&nbsp;&nbsp;</i><span>|</span>
        <i class="iconfont icon-web-icon-">&nbsp;QQ&nbsp;&nbsp;</i><span>|</span>
        <i class="iconfont icon-weibo">&nbsp;微博</i>
      </div>
    </div>
    <div class="login-wrap" v-show="!isShow">
      <div class="phone_login">
        <div class="logo_img">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="phone" v-show="isPhone">
          <input type="text" placeholder="请输入手机号" v-model="phone">
          <div class="success" v-show="showprops">{{test?'手机号正确':'手机号错误'}}</div>
          <input type="password" placeholder="请输入短信验证码" v-model="code">
          <div class="question">
            <span class="left">遇到问题？</span>
            <span class="right">使用密码验证登陆</span>
          </div>
        </div>
        <div class="email" v-show="!isPhone">
          <input type="text" placeholder="邮箱账号" v-model="email"><div class="success" v-show="showprops">{{test?'邮箱正确':'邮箱错误'}}</div>
          <input type="password" placeholder="密码" v-model="password">
          <div class="question">
            <span class="left">注册账号</span>
            <span class="right">忘记密码</span>
          </div>
        </div>
        <div class="btn loginBtn" @click="login">登陆</div>


        <div class="btn otherLoginWay" @click="changeIsShow">其他登陆方式</div>
        <div class="register btn">
          <span>注册账号</span>
          <i class="iconfont icon-icon"></i>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isShow:true,
        isPhone:true,//true:phone
        phone: '',
        email: '',
        code: '',
        password:'',
        test:'',
        showprops:''
      }
    },
    methods:{
      linkTo(path){
        this.$router.replace(path)
      },
      changeIsShow(){
        this._data.isPhone = true
        this._data.isShow = !this._data.isShow
      },
      changeIsEmail(){
        this._data.isPhone = false
        this._data.isShow = false
      },
      login(){
        this.showprops=true
        this.test=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(this.phone)

        console.log(this.phone,this.test)
        this.test=new RegExp("[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?").test(this.email)
        console.log(this.email, this.test)
      },

    },
    watch:{
      phone(){
        console.log(this.phone)

      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .main-container
    width 100%
    height 100%
    .header
      z-index 100
      position fixed
      top 0
      left 0
      right 0
      width 355px
      height 44px
      background #FAFAFA
      display flex
      justify-content space-between
      padding 0 8px 0 12px
      line-height 44px
      .logo
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        margin auto
        width 85px
        height 23px
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
        background-size cover
      i
        font-size 24px
      span
        font-size 20px
    .login-types-wrapper
      width 100%
      height 100%
      background #F2F5F4
      .logo_img
        width 100%
        padding 124px 0 80px 0
        text-align center
        img
          width 134px
          height 45px
      .login-way
        width 335px
        padding 20px
        .button
          width 100%
          height 45px
          border 1px solid #b4282d
          text-align center
          line-height 45px
          font-size 14px
        .phone-login
          background #b4282d
          color white
          margin-bottom 16px
      .others-login
        line-height 20px
        margin-top 190px
        width 100%
        text-align center
        color #7f7f7f
        i
          margin 0 20px
    .login-wrap
      width 100%
      .phone_login
        padding 0 20px
        .logo_img
          margin 72px 0 80px 0
          text-align center
          img
            width 96px
            height 32px
        input
          text-indent 10px
          font-size 14px
          margin-top 20px
          border-bottom 1px solid #eee
          width 335px
          height 37px
          line-height 37px
          outline none
        .question
          font-size 14px
          line-height 60px
          display flex
          justify-content space-between
          .left
            color #999
        .btn
          width 335px
          height 46px
          text-align center
          line-height 46px
        .success
          text-align center
        .loginBtn
          background #b4282d
          color white
          margin-bottom 16px
        .otherLoginWay
          border 1px solid #b4282d
          color #b4282d
          font-size 14px





</style>
