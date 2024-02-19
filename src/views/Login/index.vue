<template>
  <div class="login-container">
    <van-nav-bar class="page-nav-bar"
      title="登录"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-form @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="用户名"
        placeholder="请填写手机号"
      >
      <i slot="left-icon" class="toutiao toutiao-shouji"></i>
    </van-field>
      <van-field
      v-model="user.code"
        name="验证码"
        placeholder="请输入验证码"
      >
      <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>

      <template #button>
        <div class="send-msg-btn">
          <van-button size="small" type="default" round>发送验证码</van-button>
        </div>
      </template>

      </van-field>
      <div class="login-submit-btn">
        <van-button block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { loginApi } from '../../api/user'

export default {
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  name: 'LoginIndex',
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    onClickRight () {
      Toast('按钮')
    },
    async onSubmit (values) {
      try {
        const response = await loginApi(this.user)
        console.log(response)
        const { data: { data: { token } } } = response
        console.log(token)
      } catch (error) {
        if (error.response.status === 400) {
          console.log(error.response.data.message)
        } else {
          console.log('登陆失败请稍后再试', error)
        }
      }
    }

  }
}
</script>

<style lang='less'>
.login-container {
  .toutiao-shouji{
    font-size: 37px;
  }

  .toutiao-yanzhengma{
    font-size: 37px;
  }
  .login-submit-btn{
    margin: 36px  16px;
  }
  .send-msg-btn{
    border-left: 1px solid #ededed;
    padding-left: 10px;
    .van-button{
      background-color: #ededed;
      width: 152px;
      height: 46px;
      line-height: 46px;
      font-size: 22px;
      color: #666;
    }
  }

  .login-submit-btn{
    .van-button--info{
      background-color: #6db4fb;
      border: #6db4fb;
    }
  }
}
</style>
