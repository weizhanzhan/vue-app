<template>
  <div
    ref="wrapper"
    class="bscroll"
  >
    <slot />
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      console.log('触发scroll')
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    destroyed() {
      console.log('触发')
    },
    beforeDestroy() {
      console.log('触发beforeDestroy')
    },
    activated() {
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    methods: {
      _initScroll() {
        const wrapper = this.$refs.wrapper
        if (!wrapper) return

        this.scroll = new BScroll(wrapper, {
          click: true
        })
      }
    }
  }
</script>

<style scoped>
.bscroll{
    height: 100%;
    overflow: hidden;
}
</style>
