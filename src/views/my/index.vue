<template>
  <div class="my-container">
    <!-- 个人中心-未登录 -->
    <div class="header not-login">
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="" />
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <!-- /个人中心-未登录 -->

    <!-- 个人中心-一登录 -->
    <div class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image
            class="avater"
            round
            cover
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <span class="name">黑马头条号</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">100</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">88</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">6</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>

    <!-- 宫格导航 -->
    <van-grid :column-num="2" class="grid-nav"  clickable>
      <van-grid-item class="grid-item">
        <i class="toutiao toutiao-shoucang" slot="icon"></i>
        <span class="text" slot="text">收藏</span>
      </van-grid-item>
      <van-grid-item  class="grid-item">
        <i class="toutiao toutiao-lishi" slot="icon"></i>
        <span class="text" slot="text">历史</span>
      </van-grid-item>
    </van-grid>
    <!-- /宫格导航 -->
    <!-- /个人中心-一登录 -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.my-container {
  .header {
    background: url("~@/assets/banner.png") no-repeat;
    background-size: cover;
    height: 360px;
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      .mobile-img {
        width: 132px;
        height: 132px;
        margin-bottom: 15px;
      }
      .text {
        font-size: 28px;
        color: #fff;
      }
    }
  }

  .user-info {
    .base-info {
      height: 231px;
      padding: 76px 32px 23px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .avater {
          width: 132px;
          height: 132px;
          margin-right: 23px;
          border: 4px solid #fff;
        }
        .name {
          font-size: 30px;
          color: #fff;
        }
      }
    }

    .data-stats {

      display: flex;
      .data-item{
        height: 130px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        .count{
          font-size: 36px;
        }

        .text{
          font-size: 23px;
        }
      }
    }
  }

  .grid-nav{
    .grid-item{
      height: 141px;
      i.toutiao{
        font-size: 45px;
        color: #eb5253;
      }
      i.toutiao-lishi{
        color: #ffa938;
      }
      span.text{
        font-size: 28px;
      }
    }
  }
}
</style>
