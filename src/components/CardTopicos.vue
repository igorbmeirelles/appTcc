<template>
  <v-sheet
    v-ripple="{ class: `primary--text` }"
    class="sheet-size rounded-lg blue lighten-5 pa-3 mb-2"
    :class="{ 'golden-button': cardInfo.titulo === 'Prêmios' }"
    @click="$emit('click')"
  >
    <figure
      class="sheet-icon"
      :class="{
        'golden-color': cardInfo.titulo === 'Prêmios',
        'blue lighten-4': cardInfo.titulo !== 'Prêmios',
      }"
    >
      <v-img
        :src="require(`@/assets/icons/${cardInfo.icon}`)"
        contain
        max-width="32"
        max-height="32"
      ></v-img>
    </figure>
    <h4
      class="mt-5 font-weight-medium"
      :class="{ 'white--text': cardInfo.titulo === 'Prêmios' }"
    >
      {{ cardInfo.titulo }}
    </h4>
  </v-sheet>
</template>

<script>
export default {
  props: {
    cardInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.sheet-size {
  width: 40vw !important;
}
.sheet-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
}

.golden-button {
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
}

.golden-color {
  background-color: #f7ce68 !important;
}
</style>
