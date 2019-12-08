<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"

      left-arrow
      @click-left="onClickLeft"
    />
    details
    <ul>
      <li>id: {{ info.id }}</li>
      <li>name:{{ info.name }}</li>
      <li>desc:{{ info.description }}</li>
    </ul>
    {{ info.name }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        info: {}
      }
    },
    mounted() {
      console.log(this.$route.query)
      this.info = this.$route.query
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onClickRight() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>
