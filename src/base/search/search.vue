<template>
    <div class="search-box">
      <i class="icon search-icon"></i>
      <input ref='query' v-model="query" type="text" class="box" :placeholder="placeholder">
      <i @click="clear" v-show="query" class="icon dismiss-cion"></i>
    </div>
</template>

<script>
  import {debounce} from 'common/js/util'
    export default {
      props: {
        placeholder: {
          type: String,
          default: '请输入车商名称或者拼音'
        }
      },
      data() {
        return {
          query: ''
        }
      },
      methods: {
        clear() {
          this.query = ''
        },
        blur() {
          this.$refs.query.blur()
        }
      },
      created() {
        this.$watch('query', debounce((newQuery) => {
          this.$emit('query', newQuery)
        }, 200))
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .search-box
    width 100%;
    height 49px;
    background $input-bg-color;
    text-align center;
    display flex;
    align-items center;
    justify-content center;
    position relative;
    .search-icon
      background url('~assets/icon-search.png');
      display inline-block;
      width 13px;
      height 13px;
      background-size cover;
      position absolute;
      left:24px;
    .dismiss-cion
      background url('~assets/icon-close.png');
      display inline-block;
      width 13px;
      height 13px;
      background-size cover;
      position absolute;
      right 24px;
    .box
      width 90%;
      height 28px;
      line-height 28px;
      border-radius 5px;
      outline none;
      text-indent 20px;
      font-size 14px;
      color #030303;

</style>
