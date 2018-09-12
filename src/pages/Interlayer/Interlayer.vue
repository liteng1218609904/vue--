<template>
  <div class="g-bd">
    <div class="g-row">
      <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg">
      <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg">
    </div>
    <div class="g-row">
      <img src="//yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg">
      <div class="download-app"></div>
      <router-link to="/home" class="backWapBtn">继续使用触屏版浏览 ></router-link>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="stylus" rel="stylesheet/less">
  .backWapBtn
    width 100%
    height 100px
    left 55px
    top 115px
    position: absolute;
    z-index: 99;
    display: block;
    font-size: 14px;
    line-height: 1.5;
  .g-bd
    max-width 100%
    margin: 0 auto;
    background: #eee;
    line-height: 1.5;
    color: #333;
    height: 100%;
    .g-row
      position: relative;
      width: 200px;
      padding-top: 120px;
      &:nth-child(2)
        padding-top: 0;
      img
        vertical-align: top;
        width: 378px;
      .download-app
        width: 200px;
        left: 30px;
        top: 100px;
        position: absolute;
        display: block;

</style>
