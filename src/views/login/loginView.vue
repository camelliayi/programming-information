<template>
  <div class="content">
    <form action="" @submit.prevent>
      <div class="login-wrapper">
        <div class="left-img">
          <div class="glass">
            <div class="tips">
              <div class="title">
                编程资讯
              </div>
              <h1>分享知识，共享智慧！</h1>
            </div>
          </div>
        </div>
        <div class="right-login-form">
          <div class="form-wrapper">
            <h1>登录畅享更多</h1>
            <div class="input-items">
            <span class="input-tips">
              用户名
            </span>
              <input type="text" class="inputs" placeholder="邮箱" @blur="checkEmail" v-model="email" name="email">
              <div class="input-reg" v-if="emailPass === 3">
                <span class="reg-tip">*邮箱格式不合法</span>
              </div>
            </div>
            <div class="input-items">
            <span class="input-tips">
              密码
            </span>
              <input type="password" class="inputs" placeholder="密码" @blur="checkPassword" v-model="password" name="password">
              <div class="input-reg" v-if="passwordPass === 3">
                <span class="reg-tip">*密码不能为空</span>
              </div>
            </div>
            <button class="btn-login" @click="login">登录</button>
            <div class="signup-tips">
              <span>没有账户？</span>
              <router-link to="register"><span>注册</span></router-link>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import api from '@/api/cliUser/cliUser'
export default {
  data () {
    return {
      email: '',
      password: '',
      emailPass: 1, // 默认为1 ，2为校验通过，3为校验不通过
      passwordPass: 1 // 默认为1 ，2为校验通过，3为校验不通过
    }
  },
  methods: {
    checkEmail () {
      // 邮箱校验规则
      const regExp = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      this.emailPass = regExp.test(this.email) ? 2 : 3
    },
    checkPassword () {
      this.passwordPass = this.password !== '' ? 2 : 3
    },
    login () {
      this.checkEmail()
      this.checkPassword()
      if (this.emailPass === 2 && this.passwordPass === 2) {
        api.login(this.email, this.password).then(response => {
          console.log(response)
        })
      }
    }
  }
}
</script>
<style src="../.././style/style.css" scoped></style>
<style scoped>
  .content .login-wrapper .right-login-form .form-wrapper .btn-login:active {
    transform: scale(0.97);
  }
  .input-reg {
    color: red;
    margin-top: 10px;
  }
</style>
