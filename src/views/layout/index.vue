<template>
  <div class="layout-container">
    <router-view></router-view>
    <!-- 标签导航栏 -->
    <!-- route 开启路由模式 to属性 渲染哪个组件 -->
    <van-tabbar  class="layout-tabbar" route >
      <van-tabbar-item to="/">
        <i class="toutiao toutiao-shouye" slot="icon" ></i>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/qa">
        <i class="toutiao toutiao-wenda" slot="icon" ></i>
        <span class="text">问答</span>
      </van-tabbar-item>
      <van-tabbar-item  to="/video">
        <i class="toutiao toutiao-shipin" slot="icon"></i>
        <span class="text">视频</span>
      </van-tabbar-item>
      <van-tabbar-item  to="/my">
        <i class="toutiao toutiao-wode" slot="icon"></i>
        <span class="text">我的</span>
      </van-tabbar-item>
    </van-tabbar>
    <!-- /标签导航栏 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.layout-container {
  .layout-tabbar {
    i.toutiao {
      font-size: 40px;
    }
    span.text{
        font-size: 20px;
    }
  }
}
</style>
