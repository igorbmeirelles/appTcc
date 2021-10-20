<template>
  <v-container
    class="d-flex justify-center align-items-center blue lighten-5"
    fill-height
    fluid
  >
    <v-sheet
      class="flex-grow-1 elevation-1 height-90vh"
      v-if="$vuetify.breakpoint.smAndUp"
      max-width="800"
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

        <v-col class="col-9 px-4 py-3 overflow-auto">
          <h2 class="mb-3">{{ itemExibido.titulo }}</h2>

          <div v-html="itemExibido.textoHtml"></div>

          <div class="d-flex px-4 mt-5">
            <v-btn v-if="selectedItem != 0" @click="selectedItem--" color="success" text>
              <v-icon>mdi-chevron-left </v-icon> Anterior
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="selectedItem++" color="success" text
              >Próximo <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
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
        textoHtml: `<article> Olá! Sejam todos Bem-vindos ao <strong> NOME DO APP</strong>, aqui você poderá
      encontrar diversas informações sobre as Infecções Sexualmente Transmissíveis (IST),
      assim como, suas formas de prevenção e
      <span class="text-danger"> tratamento</span>, sobre as diferenças corporais
      causadas pela puberdade, sobre os métodos contraceptivos e muitos outros conteúdos.

      <br />

      Esse aplicativo surgiu como parte do trabalho de conclusão de curso do graduando
      João Victor Manço Resende da Escola de Enfermagem Aurora de Afonso Costa da
      Universidade Federal Fluminense (EEAAC-UFF), orientado pelo Dr. Jorge Luiz Lima da
      Silva. Aproveitem o aplicativo, explorem todas as abas, esclareçam suas dúvidas e
      compartilhem com seus amigos e familiares. Informação e saúde para todos!</article>`,
      },
      {
        titulo: "O que é uma IST",
        textoHtml: `<article>As Infecções Sexualmente Transmissíveis (IST) são ocasionadas por fungos, 
        bactérias, vírus ou outros microrganismos.  
        Sua transmissão ocorre, em muitos das vezes, por via sexual sem a utilização de camisinha masculina 
        ou feminina, outras formas de transmissão são através da gestação, amamentação e compartilhamento de 
        objetos pessoais. 
        <br/>
        Ocorreu a substituição da nomenclatura Doenças Sexualmente Transmissíveis (DST) para Infecções 
        Sexualmente Transmissíveis (IST) devido a possibilidade de um indivíduo ter e transmitir uma infecção, 
        mesmo sem sinais e sintomas.</article>`,
      },
      {
        titulo: "Sintomas",
        textoHtml: `<article>As IST´s podem se manifestar de diferentes formas como, verrugas, feridas, escorrimento,
         dor pélvica, ardência ao urinar e outras, podendo aparecer principalmente nos órgãos genitais, 
         mas também em outras áreas como boca, mãos e olhos. 
        <br />
        Algumas IST´s podem não apresentar sintomas podendo levar a complicações sérias caso não sejam diagnosticadas
         e tratadas. Devido a isso, é necessário realizar exames laboratoriais para verificar se houve contato com 
         alguma IST.
        </article>`,
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

.overflow-auto {
  max-height: 100%;
  overflow: auto;
}

.v-btn {
  text-transform: none;
}
</style>
