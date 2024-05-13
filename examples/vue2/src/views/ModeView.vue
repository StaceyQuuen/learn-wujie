<template>
  <div class="about">
    单例模式
    <button @click="go">路由跳转</button>
    <input type="text" v-model="value">
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    go() {
      this.$router.push({name: 'communication'})
    }
  },
}
</script>
