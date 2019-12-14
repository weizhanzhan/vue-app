<template>
  <van-tabbar route>
    <van-tabbar-item
      name="home"
      to="/home"
      icon="apps-o"
    >
      Home
    </van-tabbar-item>
    <van-tabbar-item
      name="account"
      to="/account"
      icon="user-circle-o"
    >
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    data() {
      return {
        active: 'home'
      }
    }
  }
</script>

<style scoped>

</style>
