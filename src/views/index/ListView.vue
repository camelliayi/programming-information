<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="header-box">
          <el-menu :default-active="activeIndex" class="header-container" mode="horizontal" :ellipsis="false" @select="handleSelect">
            <el-menu-item index="0"><img src="../.././assets/icon/logo.png" class="img-logo"></el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">学习</el-menu-item>
            <el-menu-item index="3">资源</el-menu-item>
            <el-menu-item index="4">面试题</el-menu-item>
            <el-menu-item index="5">关于</el-menu-item>
          </el-menu>
          <div class="header-right">
            <input type="text" class="search-input" placeholder="探索编程资讯">
            <span class="search">
              <button class="btn-search"><img src="../.././assets/icon/svg/search.svg"></button>
            </span>
          </div>
          <div class="header-writer">
            <button class="btn-writer">写文章</button>
          </div>
          <div class="header-login">
            <button class="btn-login">登录/注册</button>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div class="nav-box">
            <div class="nav-item">
              <div class="nav-item-content" v-for="item in data" :key="item.id">
                <router-link to="item.path">
                  <span>{{ item.text }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          id: 1,
          path: '/',
          text: '综合'
        },
        {
          id: 2,
          path: '/',
          text: 'Java'
        },
        {
          id: 3,
          path: '/',
          text: 'Python'
        }
      ]
    }
  }
}
</script>
<style scoped>
  .flex-grow {
    margin-left: 50px;
  }
  .header-box {
    display: flex;
  }
  .nav-box {
    background-color: #f2f3f5;
    height: 500px;
    border: 1px solid white;
  }
  .nav-box .nav-item {
    height: 80%;
    width: 60%;
    margin-left: 40px;
    margin-top: 50px;
    background-color: white;
  }
  .nav-box .nav-item .nav-item-content {
    margin-left: 50px;
  }
  .img-logo {
    width: 150px;
    height: auto;
  }
  .header-box .header-right {
    position: relative;
    margin-top: 18px;
    margin-left: 300px;
  }
  .header-box .header-writer {
    margin-top: 16px;
    margin-left: 20px;
  }
  .header-box .header-login {
    margin-top: 16px;
    margin-left: 20px;
  }
  .header-box .header-login .btn-login {
    height: 30px;
    width: 85px;
    background-color: #0c81e7;
    color: white;
    border: 1px solid #0c81e7;
    cursor: pointer;
    transform: scale(1);
  }
  .header-box .header-login .btn-login:active {
    transform: scale(0.97);
  }
  .header-box .header-writer .btn-writer {
    height: 30px;
    width: 85px;
    background-color: #0c81e7;
    color: white;
    border: 1px solid #0c81e7;
    cursor: pointer;
    transform: scale(1);
  }
  .header-box .header-writer .btn-writer:active {
    transform: scale(0.97);
  }
  .header-box .header-right .search-input {
    height: 25px;
    width: 350px;
    border-radius: 4px;
    border: 1px solid darkgray;
  }
  .header-box .header-right .search-input:focus {
    border: 1px solid blue;
  }
  .search .btn-search {
    position: absolute;
    top: 0;
    right: 0;
    width: 15%;
    height: 28px;
    border: none;
    background-color: darkseagreen;
    cursor: pointer;
    transform: scale(1);
  }
  .search .btn-search:active {
    transform: scale(0.97);
  }
  .search .btn-search img {
    height: 20px;
    width: 20px;
  }
</style>
