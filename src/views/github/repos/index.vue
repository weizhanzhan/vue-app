<template>
  <div style="position:relative;height:100%">
    <van-nav-bar
      title="标题"
      left-text="返回"

      left-arrow
      @click-left="onClickLeft"
    />
    <div class="container">
      <ul>
        <li
          v-for="item in repos"
          :key="item.name"
          class="repos_item"
          @click="$router.push({path:'/github/repos/'+item.id,query:item})"
        >
          <div class="head">
            <div>
              <div>
                <img
                  src="../../../assets/images/avatar.jpg"
                  alt=""
                  style="width:20px"
                >
                {{ item.owner.login }}
              </div>
            </div>
            <div>{{ item.language }}</div>
          </div>
          <div class="repos_name">
            {{ item.name }}
          </div>
          <div class="repos_discription">
            {{ item.description || '暂无描述信息' }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        repos: []
      }
    },
    mounted() {
      axios.get('https://api.github.com/users/weizhanzhan/repos').then(res => {
        this.repos = res.data
      })
    },
    methods: {
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
.repos_item{
    padding: 20px;
    border-bottom: 1px solid #faf4f5
}
.head{
    display: flex;
    justify-content: space-between
}
.repos_name{
    font-size: 18px;
    font-weight: 500;
    margin: 6px 0
}
.repos_discription{
    color: #bfbfbf;
    font-size: 14px
}
.container{
    position: absolute;
    top: 50px;
    bottom: 0;
    width: 100%;
    overflow: auto
}
</style>
