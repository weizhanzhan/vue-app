import { Toast } from 'vant'
export default {
  methods: {
    addRativeListener() {
      this.keyBackListener()
      this.changeStatusBarColor()
      this.addResumeListener()
    },
    addResumeListener() {
      window.api.addEventListener({
        name: 'resume'
      }, function(ret, err) {
        Toast('欢迎回来')
        // window.api.toast({
        //   msg: '欢迎回来'
        // })
      })
    },
    changeStatusBarColor() {
      window.api.setStatusBarStyle({
        style: 'dark',
        color: 'transparent'
      })
    },
    keyBackListener() { // 监听原生返回
      window.api.addEventListener({
        name: 'keyback'
      }, (ret, err) => {
        const path = this.$route.path
        const whiteList = ['/home']
        if (whiteList.indexOf(path) === -1) {
          this.$router.go(-1)
        } else {
          if ((new Date().getTime() - this.timer) < 3000) {
            window.api.closeWidget({
              id: window.api.appId,
              retData: {
                name: 'closeWidget'
              },
              silent: true
            })
          } else {
            Toast('再按一次返回键退出')
            // window.api.toast({
            //   msg: '再按一次返回键退出'
            // })
            this.timer = new Date().getTime()
          }
        }
      })
    },
    checkUpdate() {
      var mam = window.api.require('mam')
      mam.checkUpdate(function(ret, err) {
        if (ret) {
          var result = ret.result
          if (result.update === true && result.closed === false) {
            var str = '新版本型号:' + result.version + ';更新提示语:' + result.updateTip + ';下载地址:' + result.source + ';发布时间:' + result.time
            window.api.confirm({
              title: '有新的版本,是否下载并安装 ',
              msg: str,
              buttons: ['确定', '取消']
            }, function(ret, err) {
              if (ret.buttonIndex === 1) {
                if (window.api.systemType === 'android') {
                  window.api.download({
                    url: result.source,
                    report: true
                  }, function(ret, err) {
                    if (ret && ret.state === 0) { /* 下载进度 */
                      window.api.toast({
                        msg: '正在下载应用' + ret.percent + '%',
                        duration: 2000
                      })
                    }
                    if (ret && ret.state === 1) { /* 下载完成 */
                      var savePath = ret.savePath
                      window.api.installApp({
                        appUri: savePath
                      })
                    }
                  })
                }
                if (window.api.systemType === 'ios') {
                  window.api.installApp({
                    appUri: result.source
                  })
                }
              }
            })
          } else {
            Toast('暂无更新')
            // window.api.alert({
            //   msg: '暂无更新'
            // })
          }
        } else {
          Toast(err.msg)
          // window.api.alert({
          //   msg: err.msg
          // })
        }
      })
    }
  }
}
