<template>
  <!-- <v-img
      v-if="this.$vuetify.breakpoint.smAndUp"
      max-width="586"
      max-height="586"
      contain
      src="../assets/research.png"
    /> -->
  <v-container
    class="d-flex justify-space-between"
    v-if="!$vuetify.breakpoint.xs"
  >
    <div
      class="d-flex flex-column justify-center"
      v-if="this.$vuetify.breakpoint.smAndUp"
    >
      <iframe
        width="350"
        height="200"
        src="https://www.youtube.com/embed/b-9wAtI0O4E?si=ryzNpXxA9RKwAW7u"
        title="YouTube video player"
        frameborder="0"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share;
        "
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <main>
      <h2> Prev-IST</h2>
      <p>
        aqui você encontra diversas informações sobre as Infecções
        Sexualmente Transmissíveis (ISTs), assim como formas de prevenção,
        as mudanças corporais da puberdade, os principais métodos
        contraceptivos e muitos outros conteúdos. Aproveite!
      </p>

      <div class="d-flex flex-wrap">
        <template v-for="(item, i) in items">
          <div
            class="mb-2 mr-2 blue lighten-4 home-button rounded"
            :class="{ 'golden-button': item.titulo === 'Prêmios' }"
            @click="$router.push(item.route)"
            v-ripple
            :key="i"
          >
            <v-img
              :src="require(`../assets/icons/${item.icon}`)"
              max-width="32"
              contain
            />
            <span :class="{ 'white--text': item.titulo === 'Prêmios' }">{{
              item.titulo
            }}</span>
          </div>
        </template>
      </div>
    </main>
  </v-container>
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
import TopicosIST from "@/data/TopicosIST.js";
import { logarEescrever } from "../data/db";
import CardTopicos from "../components/CardTopicos";
export default {
  name: "Home",
  components: {
    CardTopicos,
  },
  data: () => ({
    items: TopicosIST,
  }),
  mounted() {
    if (process.env.NODE_ENV === "production") {
      this.$firebase.analytics().logEvent("screen_view", {
        screen_name: "pagina inicial",
      });
    }
  },
  created() {
    this.$ga.page("/home");
    if (
      !this.$cookies.get("acessado") &&
      process.env.NODE_ENV === "production"
    ) {
      logarEescrever({
        data: new Date().toLocaleDateString("pt-BR"),
      });
      this.$cookies.set("acessado", "true");
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

main {
  max-width: calc(22.5rem - 1rem);
}

@media (max-width: 600px) {
  main {
    margin: auto;
  }
}
p {
  font-size: 0.875rem;
}

.home-button {
  display: flex;
  align-items: center !important;
  gap: 0.5rem;

  padding: 0.5rem;

  cursor: pointer;
}

.home-button span {
  font-size: 0.75rem;
}

.gradient-text {
  background: linear-gradient(
    to top right,
    rgba(19, 84, 122, 0.8),
    rgba(128, 208, 199, 0.8)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.golden-button {
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
}
</style>
