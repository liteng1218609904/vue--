<template>
  <div class="shop">
    <header><span>购物车</span><span>领劵</span></header>
    <div class="prompt">
      <div><i ></i>30天无忧退货</div>
      <div><i ></i>48小时快速退款</div>
      <div><i></i>满88元免邮费</div>
    </div>
    <div class="login">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png"/>
      <div>去添加点什么吧</div>
      <button @click="toLogin">登录</button>
    </div>
  </div>
</template>
<script>
  export default {
    methods:{
      toLogin(){
        this.$router.replace('/personal')
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .shop
    background: #f4f4f4;
    height:100%;
    header
      height:50px
      padding: 0 10px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      span:first-child
        color:#333;
        font-size: 18px
      span:last-child
        color:#B4282D;
        font-size: 17px
        position: absolute;
        right:20px;
        top:19px;

    .prompt
      padding:0 10px
      height:26px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #fff;
      margin-bottom: 10px;
      background: #f4f4f4;
      div
        color:#333;
        font-size: 13px;
        i
          color:#b4282d;
          margin-right:4px
          display: inline-block;
          width: 12px;
          height: 11px;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png)
          background-repeat: no-repeat;
          background-size: cover;

    .login
      display: flex;
      flex-direction: column;
      align-items: center;
      img
        width:124px;
        height:124px
        vertical-align: top;
        margin-top: 160px
      div
        color: #999;
        font-size: 15px
        margin-bottom: 12px
      button
        background: #b4282d;
        width:240px;
        height:45px;
        line-height: 30px
        text-align: center;
        border:none;
        color: #fff;



</style>
