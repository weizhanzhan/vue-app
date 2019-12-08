<template>
  <div class="home">
    <div class="container">
      <header class="header">
        <div class="title">
          Hi，早上好！
        </div>
        <div>
          <van-icon
            name="location-o"
            :size="20"
          />
          <span style="vertical-align: top;"> 常州市</span>
        </div>
      </header>
      <div class="banner">
        <img
          src="../../assets/images/banner1.jpg"
          alt=""
          srcset=""
        >
      </div>
      <div class="divider-line" />
      <div class="application">
        <div class="title">
          功能应用
        </div>
        <div class="box">
          <div
            v-for="item in applications"
            :key="item.icon"
            class="item"
            @click="to(item)"
          >
            <div
              class="icon"
              :style="{background:item.color}"
            >
              <i :class="['iconfont '+item.icon]" />
            </div>
            <div class="label">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterGuide />
  </div>
</template>

<script>

  import FooterGuide from 'components/footer'
  export default {
    components: { FooterGuide },
    data() {
      return {
        active: 0,
        applications: [
          { icon: 'icon-github-fill', label: 'Github', color: '#fa8c16', path: '/github' },
          { icon: 'icon-video-o', label: '看视频', color: '#a0d911', path: '' },
          { icon: 'icon-scan', label: '扫一扫', color: '#1890ff', path: '' },
          { icon: 'icon-map-marked', label: '地图', color: '#722ed1', path: '' },
          { icon: 'icon-audio', label: '听音乐', color: '#f5222d', path: '' },
          { icon: 'icon-video1', label: '摄像', color: '#722ed1', path: '' },
          { icon: 'icon-picture_fill', label: '看图片', color: '#a0d911', path: '' },
          { icon: 'icon-cart-o', label: '购物车', color: '#1890ff', path: '' },
          { icon: 'icon-repair', label: '设置', color: '#722ed1', path: '' },
          { icon: 'icon-discover', label: '主题', color: '#f5222d', path: '' },
          { icon: 'icon-comment', label: '聊天', color: '#a0d911', path: '' },
          { icon: 'icon-file', label: '文件夹', color: '#fa8c16', path: '' },
          { icon: 'icon-areachart', label: '统计', color: '#a0d911', path: '' },
          { icon: 'icon-dashboard', label: '仪表盘', color: '#1890ff', path: '' },
          { icon: 'icon-gift', label: '礼物', color: '#722ed1', path: '#1890ff' },
          { icon: 'icon-appstore', label: '更多', color: '#1890ff', path: '#a0d911' }
        ]
      }
    },
    methods: {
      to(row) {
        row.path && this.$router.push(row.path)
      }
    }
  }
</script>

<style scoped>
.home{
  overflow: auto;
  width: 100%;
  height: 100%;
}
.container{
  /* height: 1000px; */
  background: #ffffff;
  padding-bottom: 60px
}
.header{
  display: flex;
  justify-content: space-between;
  padding: 20px
}
.header .title,.application .title{
  font-size: 18px;
  font-weight: bold
}
.banner{
  margin-bottom: 20px
}
.banner, .banner img{
  width: 100%;
}
.divider-line{
  height: 12px;
  width: 100%;
  background: #f5f5f5
}
.application{
  padding: 20px
}
.application .title{
  margin-bottom: 10px
}
.application .box{
  display: grid;
  grid-template-columns: repeat(4, 25%);
  /* grid-template-rows: repeat(4, 25%); */
}
.application .box .item .icon{
  width:55px;
  height:55px;
  margin: 0 auto;
  text-align: center;
  background: #faad14;
  line-height: 55px;
  border-radius: 15px;
  color: #ffffff;
  margin-top: 10px
}
.application .box .item .icon i{
  font-size: 26px
}
.application .box .item .label{
  text-align: center;
  padding-top: 5px;
  font-size: 14px
}
</style>
