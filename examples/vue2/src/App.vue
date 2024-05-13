<template>
  <div class="app">
    <div class="menu">
      <h1>child1-vue</h1>
      <ul>
        <li>
          <router-link :to="{ name: 'mode' }">运行模式</router-link>
        </li>
        <li><router-link :to="{ name: 'communication' }">通信系统</router-link> |</li>
        <li><router-link :to="{ name: 'jump' }">路由跳转</router-link> |</li>
        <li><router-link :to="{ name: 'share' }">应用共享</router-link> |</li>
      </ul>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    clickMainEvent() {
      window.$wujie?.bus.$emit("click", "你好，子应用在触发主应用中的事件");
    },
  },
};
</script>
<style scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
.menu {
  width: 200px;
}
.main {
  flex: 1;
}
</style>
