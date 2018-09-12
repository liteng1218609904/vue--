<template>
  <div >
    <transition name="fade" >
      <div class="m-newWapUserGiftModal" v-if="isMask">
        <div class="mask"></div>  <!--遮罩层，层级0-->
        <i class="close" @click="isMask = false"></i>
        <div class="wrap">
          <div class="modle">
            <div class="title">
              <i class="titleContent">- 新人专享礼 -</i>
            </div>
            <div class="subTitle">感谢使用网易严选, 已为你准备了一份专享礼</div>
            <div class="m-newUserItem">
              <div class="img">
                <img src="http://yanxuan.nosdn.127.net/4c372b5314d26235324abb0cf7f0713a.jpg?imageView&amp;quality=85&amp;thumbnail=232y232" alt="">
              </div>
              <div class="content">
                <div class="itemName">花样年华女士小白鞋</div>
                <div class="manu">
                  <i class="manuTag">舒适透气，时尚经典</i>
                </div>
                <div class="price">
                  <div class="retailPrice">
                    <span>¥</span>
                    <span>259.00</span>
                  </div>
                  <div class="comparePrice">
                    <span>¥</span>
                    <span>899.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="actCouponBtn">
            <span>
              <span>领券立减¥</span>
              <span>60.00</span>
            </span>
              <div class="linkBtn">查看更多特惠商品</div>
            </div>
          </div>
        </div>  <!--内容，层级2-->
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isMask: true
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .m-newWapUserGiftModal
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 9999
    &.fade-enter-active,&.fade-leave-active
      transition: opacity 1s;

    &.fade-enter,&.fade-leave-to
      opacity: 0;

    .mask
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.5);

    .close
      position: fixed;
      right: 40px;
      top: 50px;
      z-index: 2;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/modalClose-9365f12572.png);
      width: 40px;
      height: 40px;
      display: inline-block;
      vertical-align: middle;
      background-repeat: no-repeat;
      background-size: 100% 100%;

    .wrap
      transform: translate(-50%,-50%);
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      .modle
        width: 300px;
        height: 355px;
        background-color: #fff;
        border-radius: 12px;
        padding:20px 15px;
        .title
          font-size: 30px
          text-align: center;
          .titleContent
            display: inline-block;
            margin-bottom 20px
            position: relative;
            font-weight: 700;
            font-size: 18px
            text-align: center
        .subTitle
          font-size: 12px
          text-align: center;

        .m-newUserItem
          margin-top: 20px
          background-color: #f4f4f4;
          border-radius: 10px
          height: 135px
          width: 100%;
          display: flex;
          .img
            img
              width: 135px
              height: 135px
          .content
            flex: 1;
            padding: 10px
            margin-left: 0px
            line-height: 1.5;
            color: #333;
            font-size: 12px
            .itemName
              font-size: 17px
              width: 90%
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              line-height: 1.5;
              color: #333;
            .manu
              margin-top: 5px
              line-height: 1.5;
              color: #333;
              display: block;
              font-size: 14px;
              .manuTag
                border: 1px solid #7f7f7f;
                border-radius: 20px
                height: 20px
                line-height: 20px
                color: #333;
            .price
              line-height: 1.5;
              color: #333;
              display: block;
              margin-top: 30px
              font-size: 15px
              .retailPrice
                color: #b4282d;
                font-size: 15px
                line-height: 1.5;
                span
                  float: left;
                  color: #b4282d;
                  font-size: 15px
                  line-height: 0.5;

              .comparePrice
                color: #999;
                display: inline-block;
                margin-left: 12px
                text-decoration: line-through;
                font-size: 15px
                line-height: 1.5;
                span
                  color: #999;
                  display: inline-block;
                  margin-left: -3px
                  text-decoration: line-through;
                  font-size: 15px
                  line-height: 1.5;


        .actCouponBtn
          height: 50px
          background-color: #b4282d;
          color: #fff;
          font-size: 20px
          margin-top: 20px
          border-radius: 10px
          text-align: center;
          line-height: 40px
          span
            color: #fff;
            font-size: 20px
            text-align: center;
            line-height: 20px
            span
              height: 20px
              background-color: #b4282d;
              color: #fff;
              font-size: 15px
              margin-top: 10px
              border-radius: 5px
              text-align: center;
              line-height: 10px
          .linkBtn
            height: 50px
            border: 1px solid #7F7F7F;
            border-radius: 10px
            text-align: center;
            line-height: 50px
            font-size: 15px
            margin-top: 20px
            display block
            color #333
</style>

