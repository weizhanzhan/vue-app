<template>
  <container
    title="详情"
    @back="onClickLeft"
  >
    <van-cell-group>
      <van-cell
        title="id"
        :value="info.id"
      />
      <van-cell
        title="名称"
        :value="info.name"
      />
      <van-cell
        title="描述"
        :label="info.description"
      />
    </van-cell-group>

    <div class="submit">
      <van-button
        type="primary"
        size="large"
        @click="$router.push('/github/repos/edit/'+info.id )"
      >
        编辑
      </van-button>
    </div>
  </container>
</template>

<script>
  export default {
    data() {
      return {
        info: {}
      }
    },
    mounted() {
      this.info = this.$route.query
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
.submit{
  margin: 200px 10px 0 10px
}
</style>
