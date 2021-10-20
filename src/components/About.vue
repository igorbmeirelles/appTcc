<template>
  <div class="pa-4">
    <h2 class="mb-3">Apresentação</h2>
    <div class="mb-3">video</div>
    <div>
      Olá! Sejam todos Bem-vindos ao <strong> NOME DO APP</strong>, aqui você poderá
      encontrar diversas informações sobre as Infecções Sexualmente Transmissíveis (IST),
      assim como, suas formas de prevenção e
      <span class="text-danger"> tratamento </span>, sobre as diferenças corporais
      causadas pela puberdade, sobre os métodos contraceptivos e muitos outros conteúdos.

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
export default {
  data: () => ({
    pages: [{ id: 1, titulo: "Apresentação" }],
  }),
};
</script>

<style scoped>
.text-danger {
  color: #ff5252;
}
</style>
