import "whatwg-fetch"; // fetch polyfill
import "custom-event-polyfill";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import WujieVue from "wujie-vue2";
import hostMap from "../wujie-config/hostMap";
import credentialsFetch from "../wujie-config/fetch";
import Switch from "ant-design-vue/es/switch";
import Tooltip from "ant-design-vue/es/tooltip";
import button from "ant-design-vue/es/button/index";
import Icon from "ant-design-vue/es/icon/index";
import "ant-design-vue/es/button/style/index.css";
import "ant-design-vue/es/style/index.css";
import "ant-design-vue/es/switch/style/index.css";
import "ant-design-vue/es/tooltip/style/index.css";
import "ant-design-vue/es/icon/style/index.css";
import lifecycles from "../wujie-config/lifecycle";
import plugins from "../wujie-config/plugin";

//依赖共享
import "./share";

const isProduction = process.env.NODE_ENV === "production";
const { setupApp, preloadApp, bus } = WujieVue;
Vue.use(WujieVue).use(Switch).use(Tooltip).use(button).use(Icon);

Vue.config.productionTip = false;

bus.$on("click", (msg) => window.alert(msg));

// 在 xxx-sub 路由下子应用将激活路由同步给主应用，主应用跳转对应路由高亮菜单栏
bus.$on("sub-route-change", (name, path) => {
  const mainName = `${name}-sub`;
  const mainPath = `/${name}-sub${path}`;
  const currentName = router.currentRoute.name;
  const currentPath = router.currentRoute.path;
  if (mainName === currentName && mainPath !== currentPath) {
    router.push({ path: mainPath });
  }
});

const degrade = window.localStorage.getItem("degrade") === "true" || !window.Proxy || !window.CustomElementRegistry;
const props = {
  jump: (name) => {
    router.push({ name });
  },
};
/**
 * 大部分业务无需设置 attrs
 * 此处修正 iframe 的 src，是防止github pages csp报错
 * 因为默认是只有 host+port，没有携带路径
 */
const attrs = isProduction ? { src: hostMap("//localhost:8000/") } : {};
/**
 * 配置应用，主要是设置默认配置
 * preloadApp、startApp的配置会基于这个配置做覆盖
 */

setupApp({
  name: "vue2",
  url: hostMap("//localhost:6100/"),
  attrs,
  exec: true,
  props,
  fetch: credentialsFetch,
  degrade,
  ...lifecycles,
});

// setupApp({
//   name: "vue3",
//   url: hostMap("//localhost:8082/"),
//   attrs,
//   exec: true,
//   alive: true,
//   plugins: [
//     {
//       cssExcludes: ["https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"],
//     },
//   ],
//   props,
//   // 引入了的第三方样式不需要添加credentials
//   fetch: (url, options) =>
//     url.includes(hostMap("//localhost:8082/")) ? credentialsFetch(url, options) : window.fetch(url, options),
//   degrade,
//   ...lifecycles,
// });

if (window.localStorage.getItem("preload") !== "false") {
  preloadApp({
    name: "vue2",
  });

  // if (window.Proxy) {
  //   preloadApp({
  //     name: "vue3",
  //   });
  // }
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
