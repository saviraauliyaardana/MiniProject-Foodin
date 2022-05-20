<template>
  <b-card
    title="Nutrition Informasi"
    text-variant="white"
    style="background-color: #00aa13; font-weight: 600"
  >
    <b-row align-h="between" style="margin: 10% 0">
      <b-col cols="auto">Calories</b-col>
      <b-col cols="auto">{{ gizi.kalor || null }}</b-col>
    </b-row>
    <b-row align-h="between" style="margin: 10% 0">
      <b-col cols="auto">Total Fat</b-col>
      <b-col cols="auto">{{ gizi.fat || null }}</b-col>
    </b-row>
    <b-row align-h="between" style="margin: 10% 0">
      <b-col cols="auto">Protein</b-col>
      <b-col cols="auto">{{ gizi.protein || null }}</b-col>
    </b-row>
    <b-row align-h="between" style="margin: 10% 0">
      <b-col cols="auto">Carbohydrate</b-col>
      <b-col cols="auto">{{ gizi.karbo || null }}</b-col>
    </b-row>
    <b-row align-h="between" style="margin: 10% 0">
      <b-col cols="auto">Cholesterol</b-col>
      <b-col cols="auto">{{ gizi.koles || null }}</b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: {
    gizi: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
