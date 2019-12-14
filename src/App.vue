<template>
  <div id="app">
    <!-- <transition :name="transitionName">
      <vue-page-stack> -->
    <router-view
      :key="$route.fullPath"
      class="router-view-c"
    />
    <!-- </vue-page-stack>
    </transition> -->
  </div>
</template>

<script>
  import Apicloud from '@/mixins/apicloud'
  export default {
    name: 'App',
    mixins: [Apicloud],
    data() {
      return {
        time: 0
        // transitionName: 'forward'
      }
    },
    // watch: {
    //   $route(to, from) {
    //     if (to.params['stack-key-dir'] === 'forward') {
    //       this.transitionName = 'forward'
    //     } else {
    //       this.transitionName = 'back'
    //     }
    //   }
    // },
    mounted() {
      window.api && this.addRativeListener()
    },
    methods: {

    }
  }
</script>

<style>
body,html{
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background: #ffffff
  /* overflow: hidden; */
}
#app{
  font-size: 16px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column
}
.app-body{
  flex: 1
}
/* .wx_page_body{
  position: absolute;
    overflow: auto;
    width: 100%;
    background: #ffffff;
    height: 100%;
    transition: all 0.3s
} */

.slide-left-enter,
.slide-right-leave-active {

-webkit-transform: translate(100%, 0);
transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {

-webkit-transform: translate(-100%, 0);
transform: translate(-100% 0);
}

.router-view-c {
  position: absolute;
  transition: opacity 0.5s, transform 0.5s;
  width: 100%;
  height: 100%;
}
.forward-enter,
.back-leave-active {
  opacity: 1;
  transform: translateX(100%);
}
.forward-leave-active,
.back-enter {
  opacity: 1;
  transform: translateX(-100%);
}
</style>
