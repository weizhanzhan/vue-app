<template>
  <div>
    <router-view />
    <GuideFooter />
  </div>
</template>

<script>
  import GuideFooter from './footer'
  export default {
    components: { GuideFooter }
  }
</script>

<style scoped>

</style>
