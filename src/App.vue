<template>
  <div id="app">
    <transition :name="transitionName">
      <navigation>
        <router-view
          :key="$route.fullPath"
          :class="['router-view-c',transitionName===''?'no-transition':'']"
        />
      </navigation>
    </transition>
  </div>
</template>

<script>
  import Apicloud from '@/mixins/apicloud'
  export default {
    name: 'App',
    mixins: [Apicloud],
    data() {
      return {
        transitionName: 'forward'
      }
    },
    created() {
      // bind event
      this.$navigation.on('forward', (to, from) => {
        const { noTransition } = to.route.meta
        this.transitionName = noTransition ? '' : 'forward'
      })
      this.$navigation.on('back', (to, from) => {
        const { noTransition } = from.route.meta
        this.transitionName = noTransition ? '' : 'back'
      })
      this.$navigation.on('replace', (to, from) => {
        console.log('replace to', to, 'from ', from)
      })
      this.$navigation.on('refresh', (to, from) => {
        console.log('refresh to', to, 'from ', from)
      })
      this.$navigation.on('reset', () => {
        console.log('reset')
      })
      // and use [once, off] methods
      this.$navigation.once('forward', () => {
        console.log('appear once')
      })
      const off = () => {
        console.log('will not appear')
      }
      this.$navigation.on('forward', off)
      this.$navigation.off('forward', off)
    },
    mounted() {
      window.api && this.addRativeListener()
    },
    methods: {
      // 处理ios路由切换 没有动画时 背景有延迟更换的现象
      // handleNoTransition(bool) {
      //   this.noTransition = bool
      //   setTimeout(() => {
      //     this.noTransition = false
      //   }, 1000)
      // }
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
/* .slide-left-enter,
.slide-right-leave-active {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
} */
/* .no-transition{
  transition: 0s !important
} */
.router-view-c {
  position: absolute;
  transition: opacity 0.5s, transform 0.5s;
  width: 100%;
  height: 100%;
}

/* .forward-enter {
  opacity: 1;
  transform: translateX(100%);
}
.back-leave-active {
  opacity: 1;
  transform: translateX(10%);
}
.forward-leave-active{
  opacity: 1;
  transform: translateX(-10%);
}
.back-enter {
  opacity: 1;
  transform: translateX(-100%);
} */

.forward-enter-active{
  z-index:3;
  pointer-events: none;
  -webkit-animation: app-fade-in 300ms ease-out;
  animation: app-fade-in 300ms ease-out;
  animation-fill-mode: both
}
.forward-leave-active{
  z-index:1;
  pointer-events: none;
  -webkit-animation: app-fade-stop 300ms ease-out;
  animation: app-fade-stop 300ms ease-out;
  animation-fill-mode: both
}

.back-enter-active{
  z-index:1;
  pointer-events: none;
  -webkit-animation: app-fade-stop 300ms ease-out;
  animation: app-fade-stop 300ms ease-out;
  animation-fill-mode: both
}
.back-leave-active{
  z-index:3;
  pointer-events: none;
  -webkit-animation: app-fade-out 300ms ease-out;
  animation: app-fade-out 300ms ease-out;
  animation-fill-mode: both
}

@keyframes app-fade-in {
  0% {
    transform:translate3d(100%,0,0);
  }
  100% {
    transform:translate3d(0,0,0);
  }
}

@keyframes app-fade-out {
  0% {
    transform:translate3d(0,0,0);
  }
  100% {
    transform:translate3d(100%,0,0);
  }

}

@keyframes app-fade-stop {
  0% {
    transform:translate3d(0,0,0);
  }
  100% {
    transform:translate3d(0,0,0);
  }
}

</style>
