<template>
  <container
    title="编辑页面"
    @back="onClickLeft"
  >
    <van-cell-group>
      <van-field
        v-model="name"
        label="名称"

        placeholder="请输入名称"
      />

      <van-field
        v-model="desc"
        label="描述信息"
        placeholder="请输入描述信息"
      />
    </van-cell-group>
    <div class="submit">
      <van-button
        type="primary"
        size="large"
        @click="submit"
      >
        提交
      </van-button>
    </div>
  </container>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        name: '',
        desc: ''
      }
    },
    methods: {
      submit() {
        this.$dialog.alert({
          message: '提交成功，即将返回列表页面'
        }).then(() => {
          this.$router.go(-2)
        })
      },
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
.submit{
  margin: 244px 10px 0 10px
}
</style>
