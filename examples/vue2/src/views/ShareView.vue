<template>
  <div>{{ arr1 }}</div>
</template>
<script>
export default {
  data() {
    return {
      arr: [1, 2, 3],
    };
  },
  computed: {
    arr1() {
      console.log('window._========>', window._)
      // 用主应用插件的方式实现
      // 使用第三方CDN
      return window._.fill(this.arr, "a");
      // 不用主应用插件
      // return window.parent.lodash.fill(this.arr, "a");
    },
  },
};
</script>
