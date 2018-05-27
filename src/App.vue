<template lang="pug">
  #app
    router-view

    .footer
      
    .quick-link
      .weui-tabbar
        router-link(to="/" class="weui-tabbar__item" tag="a")
          p.weui-tabbar__label 网站首页
        router-link(to="/meeting" class="weui-tabbar__item" tag="a")
          p.weui-tabbar__label 直接预约
        router-link(to="/user/center" class="weui-tabbar__item" tag="a")
          p.weui-tabbar__label 个人中心
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
