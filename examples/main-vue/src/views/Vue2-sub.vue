  <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->
  <WujieVue width="100%" height="100%" name="vue2" :url="vue2Url"></WujieVue>
</template>

<script>
import hostMap from "../../wujie-config/hostMap";

export default {
  computed: {
    vue2Url() {
      return hostMap("//localhost:6100/") + `#/${this.$route.params.path}`;
    },
  },
  methods: {
    jump(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="scss" scoped></style>
