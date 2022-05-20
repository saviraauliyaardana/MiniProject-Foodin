<template>
  <div>
    <b-row tag="h1" style="font-weight: 800">{{ recipeById.name }}</b-row>
    <b-container fluid="sm">
      <b-row>
        <div class="card-status1 row">
          <img src="~/assets/img/Timer.png" class="photo" />
          <div class="margin-card1">{{ recipeById.prep }}</div>
        </div>
        <div class="card-status1 row">
          <img src="~/assets/img/ForkKnife.png" class="photo" />
          <div class="margin-card1">{{ recipeById.cook }}</div>
        </div>
      </b-row>
    </b-container>
    <b-row>
      <b-col sm="8">
        <b-embed
          type="iframe"
          aspect="16by9"
          :src="recipeById.linkvid"
          allowfullscreen
        ></b-embed>
      </b-col>
      <b-col sm="4"><card-gizi :gizi="recipeById.gizi" /></b-col>
    </b-row>
    <b-row
      ><h6 style="margin: 5% 0; font-weight: 400">
        {{ recipeById.ket }}
      </h6>
    </b-row>
    <inggredients :ing="recipeById.step.ingridient" />
    <step-recipes :step="recipeById.step.step" />
    <Oppening-last />
  </div>
</template>
<script>
import { Spesifikquery } from "~/graphql/query";

export default {
  async asyncData({ $graphql, params }) {
    const Recipes = await $graphql.default.request(Spesifikquery);
    const recipeById = Recipes.recipes.filter(
      (recipe) => recipe.id == params.id
    )[0];
    //console.log(recipeById);
    return { Recipes, recipeById };
  },
  computed: {
    routeId() {
      return this.$route.params.id;
    },
  },
  data() {
    return {
      massageDown:
        "adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    };
  },
};
</script>
<style>
.card-status1 {
  margin: 1%;
  padding: 2%;
  font-family: "Inter", sans-serif;
  color: black;
  border-radius: 20px;
  font-size: x-small;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.1);
}
.margin-card1 {
  margin-left: 5px;
  color: black;
}
.photo {
  max-height: 12px;
}
</style>
