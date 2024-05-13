<template>
  <ul type="1">
    <li>
      <p><b>props方式</b></p>
      <button @click="getPropsData">触发</button>
    </li>
    <li>
      <p><b>window通信</b></p>
      <button @click="getWindowParent">触发</button>
    </li>
    <li>
      <p><b>eventBus 通信</b></p>
      <button @click="clickMainEvent">触发</button>
    </li>
  </ul>
</template>
<script>
export default {
  methods: {
    getPropsData() {
     console.log(window.$wujie?.props) 
    },
    getWindowParent() {
      console.log(window.parent)
    },
    clickMainEvent() {
      window.$wujie?.bus.$emit('click', '你好，子应用在触发主应用中的事件')
    }
  },
}
</script>
