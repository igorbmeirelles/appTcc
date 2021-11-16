<template>
  <div class="pa-4">
    <h2 class="mb-3">{{itemExibido.titulo}}</h2>
    <div v-html="itemExibido.textoHtml">
      Olá! Sejam todos Bem-vindos ao <strong> PREV-IST</strong>, aqui você poderá
      encontrar diversas informações sobre as Infecções Sexualmente Transmissíveis (IST),
      assim como, suas formas de prevenção e diagnósticos, sobre as diferenças corporais
      causadas pela puberdade, sobre os métodos contraceptivos e muitos outros conteúdos.

      <br />
      <br />

      Esse aplicativo surgiu como parte do trabalho de conclusão de curso do graduando
      João Victor Manço Resende da Escola de Enfermagem Aurora de Afonso Costa da
      Universidade Federal Fluminense (EEAAC-UFF), orientado pelo Dr. Jorge Luiz Lima da
      Silva. Aproveitem o aplicativo, explorem todas as abas, esclareçam suas dúvidas e
      compartilhem com seus amigos e familiares. Informação e saúde para todos!
    </div>
  </div>
</template>

<script>
import TopicosIST from "@/data/TopicosIST";
export default {
  computed: {
    itemExibido () {
      return this.items[this.$route.params.id]
    }
  },
  data: () => ({
    items: TopicosIST,
  }),
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
}
</style>
