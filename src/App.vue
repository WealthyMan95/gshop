<template id="app">
    <div>
      <router-view/>
      <!-- $route代表当前路由，而当前路由中就有meta属性，如果属性中的showFooter的值为True才显示 -->
      <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: { FooterGuide }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
