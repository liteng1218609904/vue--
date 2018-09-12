<template>
  <section class="list">
    <Search/>
    <section class="main">
      <NavList :navData="navData"/>
      <Detail :navData="navData"/>
    </section>
  </section>
</template>
<script>
  import {mapState} from 'vuex'
  import Search from './Search'
  import NavList from  './NavList'
  import Detail from './Detail'

  export default {
    data() {
      return {
      }
    },
    mounted () {
      this.$store.dispatch('getNavData')
    },
    computed: {
      ...mapState(['navData']) /*['navData']为="navData"*/
    },

    components:{
      Search,
      NavList,
      Detail
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .list
    margin-bottom 50px
    height 100%
    background #ffffff
</style>
