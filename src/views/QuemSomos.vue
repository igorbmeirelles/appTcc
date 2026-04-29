<template>
  <main>
    <h2>Sobre o projeto</h2>
    Esse aplicativo surgiu como parte do trabalho de conclusão de curso do
    graduando João Victor Manço Resende da Escola de Enfermagem Aurora de Afonso
    Costa da Universidade Federal Fluminense (EEAAC-UFF), orientado pelo Dr.
    Jorge Luiz Lima da Silva. Aproveitem o aplicativo, explorem todas as abas,
    esclareçam suas dúvidas e compartilhem com seus amigos e familiares.
    Informação e saúde para todos!
    <div
      class="mb-4"
      style="display: flex; justify-content: center; margin-top: 32px"
    >
      <iframe 
          width="350"
          height="200" 
          src="https://www.youtube.com/embed/b-9wAtI0O4E?si=ryzNpXxA9RKwAW7u" 
          title="YouTube video player" 
          frameborder="0" ></iframe>

    </div>
    <h3>Equipe envolvida</h3>
    <div>
      <p>
        <a href="https://lattes.cnpq.br/6416930033138212" target="_blank">
          Igor Barreto Meirelles - Cederj - Ciências da Computação
        </a>
      </p>
      <p>
        <a href="http://lattes.cnpq.br/6014894162579048" target="_blank">
          João Victor Manço Resende - Enfermeiro - Uff
        </a>
      </p>
      <p>
        <a href="http://lattes.cnpq.br/8243099229156246" target="_blank"
          >Jorge Luiz Lima - Prof. Saúde coletiva e políticas públicas - Mep/
          Uff
        </a>
      </p>
    </div>

    <h3 class="mt-4">
      Você sabia que a UFF tem um setor especializado em IST?
    </h3>
    <a href="http://www.dst.uff.br/" target="_blank"
      >saiba mais clicando aqui</a
    >
    <address>
      <p>
        Localizado em:
        <a
          href="https://www.google.com.br/maps/place/Universidade+Federal+Fluminense+-+Campus+Valonguinho/@-22.897877,-43.1279905,17z/data=!3m1!4b1!4m5!3m4!1s0x9983da8f8ec235:0x410efa02ccd4ae8!8m2!3d-22.897882!4d-43.1257965"
          target="_blank"
        >
          Universidade Federal Fluminense - Campus Valonguinho
        </a>
      </p>
      <p>
        Endereço: R. Prof. Hernani Pires de Mello, 71 - Ingá, Niterói - RJ,
        24210-130
      </p>
      <p>Aberto 09h ⋅ Fecha às 22h</p>
      <p>Telefone: (21) 2629-2494</p>
    </address>
    <h3>Sugestões e dúvidas sobre o conteúdo</h3>
    <a href="https://forms.gle/wwXZevP5VRK73j9a8" class="link" target="_blank">
      Deixe sua opinião clicando aqui!
    </a>

    <h3>Nossas redes sociais</h3>
    <div class="my-3 d-flex align-center">
      <v-img
        src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
        width="24"
        max-width="24"
        height="24"
        max-height="24"
      />

      <a
        class="ml-2"
        href="https://www.instagram.com/espacoabertosaudeuff/"
        target="_blank"
      >
        @espacoabertosaudeuff
      </a>
    </div>

    <div class="my-3 d-flex align-center">
      <v-img
        src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
        width="24"
        max-width="24"
        height="24"
        max-height="24"
      />

      <a
        class="ml-2"
        href="https://www.youtube.com/@espacoabertosaudeuff"
        target="_blank"
      >
        @EspacoAbertoparaSaudeUFF
      </a>
    </div>

    <div class="my-3 d-flex align-center">
      <v-img
        src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
        width="24"
        max-width="24"
        height="24"
        max-height="24"
      />

      <a
        class="ml-2"
        href="https://www.youtube.com/c/Ci%C3%AAnciaSa%C3%BAdeUFF"
        target="_blank"
      >
        @CienciaSaudeUFF
      </a>
    </div>

    <div class="my-3 d-flex align-center">
      <v-img
        src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
        width="24"
        max-width="24"
        height="24"
        max-height="24"
      />

      <a
        class="ml-2"
        href="https://www.facebook.com/EspacoAbertoParaSaude"
        target="_blank"
      >
        EspacoAbertoParaSaude
      </a>
    </div>

    <footer class="mt-4 pb-4">
      Este produto faz parte do Programa de Ensino Pesquisa e Extensão Espaço
      Aberto para Saúde:
      <a href="https://linktr.ee/labmapps" target="_blank">
        saiba mais
      </a>
    </footer>
  </main>
</template>
<script>
export default {
  mounted() {
    if (process.env.NODE_ENV === "production") {
      this.$firebase.analytics().logEvent("screen_view", {
        screen_name: "quem somos",
      });
    }
  },
};
</script>
<style scoped>
main {
  max-width: 47.5rem;
  margin: auto;
  padding: 0 1rem;
}
address {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0.25rem;
}
.link {
  display: inline-block;
  margin-bottom: 1rem;
}
</style>
