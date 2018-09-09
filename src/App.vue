<template>
  <div id="app">
    <router-view/>  <!--其他的路由组件-->
    <FooterGuide />  <!--不需要底部导航的将导航隐藏与index中meta结合使用-->
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'


export default {
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
