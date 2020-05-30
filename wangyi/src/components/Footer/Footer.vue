<template>
  <footer class="footer border-1px">
    <a href="javascript:;" 
    class="shizhan_item"
    :class="{on:'/homepage'===$route.path}"
    @click="goTo('/homepage')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" 
    class="shizhan_item"
    :class="{on:'/classify'===$route.path}"
    @click="goTo('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-leimupinleifenleileibie2"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" 
    class="shizhan_item"
    :class="{on:'/deserve'===$route.path}"
    @click="goTo('/deserve')">
      <span class="item_icon">
        <i class="iconfont icon-zhidetuijian"></i>
      </span>
      <span>值得买</span>
    </a>
    <a href="javascript:;" 
    class="shizhan_item"
    :class="{on:'/shopcart'===$route.path}"
    @click="goTo('/shopcart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" 
    class="shizhan_item"
    :class="{on:'/personage'===$route.path}"
    @click="goTo('/personage')">
      <span class="item_icon">
        <i class="iconfont icon-gerenzhongxin"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  // 方法
  methods: {
    //修改路径
    goTo(path){
      //路由   没有回退用replace   有回退用pash
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.footer
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .shizhan_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #02a774
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>