<!-- @format -->

<template>
  <div>
    <b-row style="margin-top: 4%; text-align: center">
      <b-col md="6" offset-md="3">
        <h1 style="font-weight: 800">Simple and tasty recipes</h1>
      </b-col>
    </b-row>
    <b-row style="text-align: center">
      <b-col md="8" offset-md="2">
        <h6 style="font-weight: 400">
          Healthy food tastes better. Eat Healthy, Look Healthy, Feel Healthy
        </h6>
      </b-col>
    </b-row>
    <card-food :recipes="Recipes.recipes" />
    <Oppening-last />
  </div>
</template>

<script>
import { query } from "~/graphql/query";

export default {
  async asyncData({ $graphql }) {
    const Recipes = await $graphql.default.request(query);
    //  console.log(Recipes);
    return { Recipes };
  },
  data() {
    return {
      parameter: this.$nuxt.$route.name,
      data: [],
    };
  },
};
</script>
