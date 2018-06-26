<template>
    <div class="main">
      <div class="search-container">
        <search @query="onQueryChange"> </search>
      </div>
      <select-cartcust :data = "distList"></select-cartcust>
    </div>
</template>

<script>
  import Search from 'base/search/search'
  import SelectCartcust from './selectCartCustomer/selectCartCustomer'
  import Recommoned from './recommoned'
  import { queryCartServer } from 'api/cartServer'

    export default {
      components:{
        Search,
        SelectCartcust,
        Recommoned
      },
      data() {
        return {
          scrollY: 0,
          distList:[]
        }
      },
      created() {
        this.probeType = 3
        this.listenScroll = true
      },
      methods: {
        // 搜索查询方法
        onQueryChange(value) {
          queryCartServer(value).then(res=>{
            this.distList = res.data
          })
        },
        scroll(pos) {
          this.scrollY = pos.y
        },
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .main
    width: 100%
    height: 100%
    padding-top 49px;
    position relative;
    .search-container
      position absolute;
      top:0;
      left:0;
      width 100%;
    .search-list
      width: 100%
      height: 100%;
      position relative;

</style>
