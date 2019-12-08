<template>
  <div id="app">
    <transition :name="state.direction">
      <keep-alive>
        <router-view class="wx_page_body" />
      </keep-alive>
    </transition>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
  var localSessionRouteStack = sessionStorage.getItem('$$routeStack') || []

  export default {
    name: 'App',
    data() {
      try {
        localSessionRouteStack = this.$route.path !== '/' ? JSON.parse(localSessionRouteStack) : []
      } catch (error) {
        localSessionRouteStack = []
      }
      return {
        transitionName: 'slide-right',
        state: {
          routeStack: localSessionRouteStack,
          direction: 'slide-left',
          pushCount: localSessionRouteStack.length,
          routeMap: {}
        }
      }
    },
    mounted() {
      this.$router.beforeEach((to, from, next) => {
        const { routeStack } = this.state

        if (routeStack.length === 0) {
          this.setRouteDirection({ dir: 'slide-left', to, from })
          this.addRouteStack(from)
          this.addRouteStack(to)
        } else if (routeStack.length === 1) {
          this.setRouteDirection({ dir: 'slide-left', to, from })
          this.addRouteStack(to)
        } else {
          const lastBeforeRoute = routeStack[routeStack.length - 2]
          if (lastBeforeRoute.path === to.path) {
            this.popRouteStack()
            this.setRouteDirection({ dir: 'slide-right', to, from })
          } else {
            this.addRouteStack(to)
            this.setRouteDirection({ dir: 'slide-left', to, from })
          }
        }
        next()
      })
    },
    methods: {
      setRouteDirection({ dir, to, from }) {
        this.state.direction = dir
        this.state.routeMap['to'] = to.path
        this.state.routeMap['from'] = from.path
      },
      addRouteStack(route) {
        this.state.routeStack.push({
          path: route.path
        })
        this.state.pushCount++
        sessionStorage.setItem('$$routeStack', JSON.stringify(this.state.routeStack))
      },
      popRouteStack() {
        this.state.routeStack.pop()
        sessionStorage.setItem('$$routeStack', JSON.stringify(this.state.routeStack))
      }
    }
    // watch: {
    //   '$route'() {
    //     const isBack = this.$router.isBack //  监听路由变化时的状态为前进还是后退
    //     if (isBack) {
    //       this.transitionName = 'slide-right'
    //     } else {
    //       this.transitionName = 'slide-left'
    //     }
    //     this.$router.isBack = false
    //   }
    // }

  }
</script>

<style>
body,html{
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
}
#app{
  font-size: 16px;

  height: 100%;
  width: 100%;

}
.wx_page_body{
  position: absolute;
    overflow: auto;
    width: 100%;
    background: #ffffff;
    height: 100%;
    transition: all 0.3s
}

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

</style>
