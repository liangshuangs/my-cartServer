<template>
  <div class="cart-customer" ref="recommend">
    <scroll ref="scroll" class="cart-customer-content" :data="data">
      <div>
        <div class="cart-custome-list" v-for="items in data">
          <h2 class="list-title">{{items.index}}</h2>
          <ul>
            <li @click="selectItem(item)" v-for="i in items.item" class="item">
              {{i.name}}
            </li>
          </ul>
        </div>
      </div>
    </scroll>
    <div class="short-cart" v-show="data">
      <li v-for="items in data">
        {{items.index}}
      </li>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        discList: []
      }
    },
    created() {
      this._getDiscList()
    },
    methods: {
      _getDiscList() {
        setTimeout(()=>{
          for(let i = 0; i < 50; i++) {
            this.discList.push(i)
          }
        },1000)
      },
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .cart-customer
    position: fixed
    width: 100%
    top: 49px
    bottom: 0
    .cart-customer-content
      height: 100%
      overflow: hidden
      .cart-custome-list
        .list-title
          height: 40px;
          line-height:40px;
          border-bottom 1PX solid #E6E6E6;
          padding-left 20px;
          color #101010;
          font-size 14px;
          background #f6f6f6;
        .item
          font-size 16px;
          color #424242;
          padding-left 20px;
          line-height 40px;
          height 40px;
          border-bottom 1PX solid #E6E6E6;
    .short-cart
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      width: 30px;
      text-align: center;
      border-radius: 5px;
      padding: 10px 0;
      background rgba(0,0,0,0.2);
      li
        line-height 1.5;
        font-size 14px;
        color #101010;
</style>
