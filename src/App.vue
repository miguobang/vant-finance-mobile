<template>
  <div id="app">
    <!--缓存的页面-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
      </router-view>
    </keep-alive>
    <!--不缓存的页面-->
    <router-view v-if="!$route.meta.keepAlive">
    </router-view>
  </div>
</template>

<script>
  //使用本地的icon字体
  import 'vant/lib/icon/local.less';
  import 'vant/lib/nav-bar/style/less';
  import 'vant/lib/dialog/style/less';

  export default {
    name: "app",
  }
</script>


<style scoped lang="scss">
  @import './assets/style/common.css';

  #app {
    background-color: #f7f7f7;
    height: 100vh;
  }
</style>
