<template>
  <div class="topic">
    <Header/>
    <Banner :data="topicData.banner"/>
    <TopicList :data="topicData.column"/>
    <Recommend :data="topicData.recommend"/>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Header from '../../components/Header'
  import Banner from './Banner'
  import TopicList from './TopicList'
  import Recommend from  './Recommend'

  export default {
    data() {
      return {}
    },



    mounted () {
      this.$store.dispatch('getTopicData')
    },
    computed: {
      ...mapState(['topicData'])
    },

    components:{
      Header,
      Banner,
      TopicList,
      Recommend
    }




  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .topic
    margin-bottom 50px
    height 100%
    width 100%

</style>
