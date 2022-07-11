<template>
  <hello-world v-if="$vuetify.breakpoint.smAndUp" />
  <div class="d-flex justify-space-between flex-wrap pa-7" v-else>
    <template v-for="(item, i) in items">
      <CardTopicos
        @click="$router.push(`${item.route}`)"
        :cardInfo="item"
        :key="i"
      />
    </template>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import CardTopicos from "../components/CardTopicos";
import TopicosIST from "@/data/TopicosIST.js";
import { logarEescrever } from "../data/db";
export default {
  name: "Home",

  data: () => ({
    items: TopicosIST,
  }),
  components: {
    HelloWorld,
    CardTopicos,
  },
  created() {
    this.$ga.page("/home");
    if (!this.$cookies.get("acessado")) {
      logarEescrever({
        data: new Date().toLocaleDateString("pt-BR"),
      });
      this.$cookies.set("acessado", "true")
    }
  },
};
</script>

<style scoped>
.sheet-size {
  width: 35vw;
}
.sheet-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
}
</style>
