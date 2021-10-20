<template>
  <v-sheet
    v-ripple="{ class: `primary--text` }"
    class="sheet-size rounded elevation-1 blue lighten-5 pa-2 mb-3"
    @click="$emit('click')"
  >
    <figure class="sheet-icon blue lighten-4">
      <v-img src="@/assets/virus.png" contain max-width="32" max-height="32"></v-img>
    </figure>

    <h4 class="mt-5 font-weight-medium">{{cardInfo.titulo}}</h4>
  </v-sheet>
</template>

<script>
export default {
  props: {
    cardInfo: {
      type: Object,
      required: true
    }
  }
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
