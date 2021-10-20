<template>
  <v-container class="'d-flex justify-center align-items-center'" fill-height fluid>
    <v-sheet
      class="flex-grow-1 elevation-1 height-90vh"
      max-width="800"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <v-row style="height: 100%" no-gutters>
        <v-col class="col-3 elevation-1">
          <v-list nav dense>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="item.titulo"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col class="col-9 px-4 py-3">
          <h3>{{ itemExibido.titulo }}</h3>
          <div>video</div>
          <div v-html="itemExibido.textoHtml">
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {
    itemExibido() {
      return this.items[this.selectedItem];
    },
  },
  data: () => ({
    selectedItem: 0,
    items: [
      {
        titulo: "Apresentação",
        textoHtml: `Olá! Sejam todos Bem-vindos ao <strong> NOME DO APP</strong>, aqui você poderá
      encontrar diversas informações sobre as Infecções Sexualmente Transmissíveis (IST),
      assim como, suas formas de prevenção e
      <span class="text-danger"> tratamento </span>, sobre as diferenças corporais
      causadas pela puberdade, sobre os métodos contraceptivos e muitos outros conteúdos.

      <br />

      Esse aplicativo surgiu como parte do trabalho de conclusão de curso do graduando
      João Victor Manço Resende da Escola de Enfermagem Aurora de Afonso Costa da
      Universidade Federal Fluminense (EEAAC-UFF), orientado pelo Dr. Jorge Luiz Lima da
      Silva. Aproveitem o aplicativo, explorem todas as abas, esclareçam suas dúvidas e
      compartilhem com seus amigos e familiares. Informação e saúde para todos!`,
      },
      {
        titulo: "O que é uma IST",
      },
      {
        titulo: "Sintomas",
      },
      {
        titulo: "Métodos contraceptivos",
      },
      {
        titulo: "Violência Sexual ",
      },
    ],
  }),
  created() {
    console.log(this.$vuetify.breakpoint);
  },
};
</script>

<style>
.height-90vh {
  height: 80vh;
}

.bg-gray {
  background-color: #f5f5f5;
}
</style>
