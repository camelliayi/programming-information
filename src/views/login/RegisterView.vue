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
            <h1>用户注册</h1>
            <div class="input-items">
              <span class="input-tips">
                用户邮箱
              </span>
              <input type="text" class="inputs" placeholder="邮箱" @blur="checkEmail" v-model="email" name="email">
              <div class="input-reg" v-if="emailPass === 3">
                <span class="reg-tip">*邮箱格式不合法</span>
              </div>
            </div>
            <div class="input-items">
              <span class="input-tips">
                登录密码
              </span>
              <input type="password" class="inputs" placeholder="密码" @blur="checkPassword" v-model="password" name="password">
              <div class="input-reg" v-if="passwordPass === 3">
                <span class="reg-tip">*至少包含字母、数字，6-16位</span>
              </div>
            </div>
            <div class="input-auth">
              <input type="text" class="inputs" placeholder="请输入验证码" v-model="code" name="code">
              <button class="btn-auth" @click="sendCode" :disabled="isSend">{{ btnText }}</button>
            </div>
            <button class="btn-register" @click="register">注册</button>
            <div class="signup-tips">
              <span>已有账户？</span>
              <span @click="toLogin">登录</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import router from '@/router'
import api from '@/api/cliUser/cliUser'
export default {
  data () {
    return {
      email: '',
      password: '',
      code: '',
      emailPass: 1, // 默认为1 ，2为校验通过，3为校验不通过
      passwordPass: 1, // 默认为1 ，2为校验通过，3为校验不通过
      isSend: false,
      btnText: '发送验证码',
      totalTime: 60,
      timer: ''
    }
  },
  methods: {
    checkEmail () {
      // 邮箱校验规则
      const regExp = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      // console.log('表单失去了焦点')
      this.emailPass = regExp.test(this.email) ? 2 : 3
    },
    checkPassword () {
      // 密码校验规则
      const regExp = /^(?=.*[a-zA-Z])(?=.*\d).{1,9}$/
      this.passwordPass = regExp.test(this.password) ? 2 : 3
    },
    toLogin () {
      router.push({ name: 'login' })
    },
    sendCode () {
      // console.log('发送验证码')
      if (this.emailPass !== 2 && this.passwordPass !== 2) {
        this.checkEmail()
        this.checkPassword()
        return
      }
      if (this.isSend) return
      api.sendVerifyCode(this.email)
      this.isSend = true
      this.btnText = this.totalTime + 's后重新发送'
      this.timer = setInterval(() => {
        this.totalTime--
        this.btnText = this.totalTime + 's后重新发送'
        if (this.totalTime < 0) {
          clearInterval(this.timer)
          this.btnText = '重新发送验证码'
          this.totalTime = 60
          this.isSend = false
        }
      }, 1000)
    },
    register () {
      if (this.emailPass === 2 && this.passwordPass === 2 && this.code !== '') {
        // console.log('点击了注册')
        api.register(this.email, this.password, this.code).then(response => {
          // console.log(response)
          if (response.data.code === 200) {
            this.$message.success(response.data.message || '操作成功')
          }
        })
      }
    }
  }
}
</script>
<style src="../.././style/style.css" scoped></style>
<style scoped>
  .content .login-wrapper .right-login-form .form-wrapper .btn-register {
    width: 100%;
    height: 50px;
    background-color: rgb(128, 106, 196);
    border: 0;
    border-radius: 10px;
    color: #fff;
    font-size: 25px;
    margin: 20px 0;
    cursor: pointer;
    transform: scale(1);
  }
  .content .login-wrapper .right-login-form .form-wrapper .btn-register:active {
    transform: scale(0.97);
  }
  .input-auth {
    height: 40px;
    display: flex;
    margin-top: 25px;
    border-radius: 4px;
    position: relative;
    background-color: white;
  }
  .input-auth .inputs {
    padding: 20px;
    width: 100%;
    height: 40px;
    border: 1px solid rgb(227, 227, 227);
    border-radius: 10px;
    box-sizing: border-box;
    outline: none;
    transition: 0.5s;
  }
  .input-auth .inputs:focus {
    border: 1px solid rgb(128, 106, 196);
  }
  .input-auth .btn-auth {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    color: blue;
    border-radius: 10px;
    font-weight: 500;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: 5px;
  }
  .input-auth .btn-auth[disabled] {
    cursor: default;
    color: #6E6E6E;
  }
  .input-reg {
    color: red;
    margin-top: 10px;
  }
</style>
