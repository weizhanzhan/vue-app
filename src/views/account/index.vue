<template>
  <container
    nobar
    no-status-bar
  >
    <div class="account">
      <header class="header">
        <div class="avatar">
          <img
            src="../../assets/images/avatar.jpg"
            alt=""
            srcset=""
          >
        </div>
        <div
          class="wap-nav"
          @click="sheetShow= true"
        >
          <van-icon name="wap-nav" />
        </div>
      </header>
      <div class="info">
        <div class="name">
          魏展展
        </div>
        <div class="github-url">
          https://github.com/weizhanzhan
        </div>
      </div>
      <div class="divider-line" />
      <div class="info-box">
        <van-field
          label="资料"
          left-icon="contact"
          right-icon="arrow"
          disabled
          @click-right-icon="to('info')"
        />
        <van-field
          label="地址"
          left-icon="location-o"
          right-icon="arrow"
          disabled
          @click-right-icon="to('info')"
        />
        <van-field
          label="收藏"
          left-icon="gift-card-o"
          right-icon="arrow"
          disabled
          @click-right-icon="to('info')"
        />
        <van-field
          label="设置"
          left-icon="setting-o"
          right-icon="arrow"
          disabled
          @click-right-icon="to('info')"
        />
        <van-field
          label="检查更新"
          left-icon="down"
          right-icon="arrow"
          disabled
          @click-right-icon="to('update')"
        />
      </div>
    </div>
    <van-action-sheet
      v-model="sheetShow"
      :actions="actions"
      cancel-text="取消"
      @select="onSelect"
      @cancel="onCancel"
    />
  </container>
</template>

<script>
  import Apicloud from '@/mixins/apicloud'
  export default {
    mixins: [Apicloud],
    data() {
      return {
        sheetShow: false,
        actions: [
          { name: '更换账号', key: 1 },
          { name: '退出登录', key: 2 }
        ]
      }
    },
    methods: {

      onCancel() {},
      onSelect(e) {
        console.log(e)
        this.sheetShow = false
      },
      to(type) {
        switch (type) {
        case 'update':
          window.api && this.checkUpdate()
          break
        default:
          console.log('to')
        }
      }

    }
  }
</script>

<style scoped>
.header{
  height: 120px;
  width: 100%;
  /* background-image: linear-gradient(to right, #ff9569 0%, #e92758 100%); */
  background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
  opacity:0.8;
  position: relative;
}
.avatar{
  height: 70px;
  width: 70px;
  background: #597ef7;
  border-radius: 50%;
  position: absolute;
  bottom: -30px;
  left: 20px;
  text-align: center;
  line-height: 70px;
  overflow: hidden;
}
.avatar img{
  width: 60px;
  height: 60px;
  margin-top: 5px;
  border-radius: 50%;
}
.info-box{
  padding-top: 20px
}
.info{
  padding: 30px 0 10px 20px;
  /* border-bottom: 1px solid #d9d9d9 */
}
.info .name{
  font-size: 20px;
  font-weight: bold
}
.info .github-url{
  font-size: 14px;
  color: #8c8c8c
}
.wap-nav{
  background: rgba(0, 0, 0, 0.2);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 35px;
  color: #ffffff;
  position: absolute;
  right: 10px;
  top: 30px;
}
.divider-line{
  height: 12px;
  width: 100%;
  background: #f5f5f5
}
</style>
