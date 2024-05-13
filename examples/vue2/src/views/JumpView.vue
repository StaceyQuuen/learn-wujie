<template>
  <button @click="go">跳转到主路由</button>
</template>
<script>
export default {
  created () {
  },
  computed: {
    routerMode() {
      return window.$wujie?.props.data.routerMode
    }
  },
  methods: {
    go() {
      if(this.routerMode === 'hash') {
        // 主基座为hash模式的路由跳转
        window.$wujie?.props.jump({ name: "aliveMode", params: {id: 1} } , `?aliveMode=${window.encodeURIComponent("")}`)
      }else {
        // 主基座为history
        window.$wujie?.props.jump({ name: "aliveMode", params: {id: 1} })
      }
    }
  },
}
</script>