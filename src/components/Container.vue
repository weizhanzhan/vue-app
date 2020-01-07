<template>
  <div class="z-container">
    <div
      class="nav_bar"
      :style="{'padding-top':noStatusBar?0:statusBarHeight+'px'}"
    >
      <van-nav-bar
        v-if="!nobar"
        :title="title"
        left-text="返回"

        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div
      ref="body"
      class="body"
      @scroll="scroll"
    >
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Container',
    props: {
      nobar: {
        type: Boolean,
        default: false
      },
      noStatusBar: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        statusBarHeight: 0,
        scrollTop: 0
      }
    },
    mounted() {
      if (window.api) {
        this.statusBarHeight = window.api.safeArea.top
      }
    },
    activated() {
      // this.$refs.body.scrollTop = this.scrollTop
    },
    methods: {
      onClickLeft() {
        this.$emit('back')
      },
      scroll() {
        // this.scrollTop = this.$refs.body.scrollTop
      }

    }
  }
</script>

<style  scoped>
.z-container{
  height: 100%;
  display: flex;
  flex-direction: column
}
.body{
  flex: 1;
  overflow: auto;
  background: #ffffff;
  position: relative;
}
</style>
