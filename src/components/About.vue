<template>
  <main class="pa-4">
    <h2 v-if="itemExibido.titulo !== 'Prêmios'" class="mb-3">
      {{ itemExibido.titulo }}
    </h2>
    <div v-html="itemExibido.textoHtml"></div>
    <v-dialog v-model="modalImagem" max-width="600">
      <v-img :src="require(`../assets/${currentImage}`)" />
    </v-dialog>
  </main>
</template>

<script>
import TopicosIST from "@/data/TopicosIST";
export default {
  computed: {
    itemExibido() {
      console.log(
        this.items.find((item) => item.route.includes(this.$route.params.id))
      );
      return this.items.find((item) =>
        item.route.includes(this.$route.params.id)
      );
    },
  },
  data: () => ({
    items: TopicosIST,
    modalImagem: false,
    currentImage: "corenrj.jpg",
  }),
  mounted() {
    if (process.env.NODE_ENV === "production") {
      this.$firebase.analytics().logEvent("screen_view", {
        screen_name: this.itemExibido.titulo,
      });
    }

    if (this.itemExibido.titulo === "Prêmios") {
      const certificadosLink = document.querySelectorAll(".certificado");
      certificadosLink.forEach((link) => {
        link.addEventListener("click", (event) => {
          this.currentImage = event.target.getAttribute("open-image");
          this.modalImagem = true;
        });
      });
    }
  },
};
</script>

<style>
.text-danger {
  color: #ff5252;
}
ol li {
  margin-top: 0.75rem;
}

ul li {
  list-style: none;
  padding: 0;
}
</style>

<style scoped>
main {
  max-width: 47.5rem;
  margin: auto;
}

::v-deep .gradient-text {
  background: linear-gradient(
    to top right,
    rgba(19, 84, 122, 0.8),
    rgba(128, 208, 199, 0.8)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
