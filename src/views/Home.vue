<template>
  <hello-world v-if="$vuetify.breakpoint.smAndUp" />
  <div class="d-flex justify-space-between flex-wrap pa-7" v-else>
    <template v-for="(item, i) in items">
      <CardTopicos @click="$router.push(`${item.route}`)" :cardInfo="item" :key="i" />
    </template>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import CardTopicos from "../components/CardTopicos";
import TopicosIST from "@/data/TopicosIST.js"
export default {
  name: "Home",

  data: () => ({
    items: TopicosIST
  }),
  components: {
    HelloWorld,
    CardTopicos,
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
