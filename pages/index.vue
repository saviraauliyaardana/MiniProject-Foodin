<!-- @format -->

<template>
  <div style="font-family: 'Inter', sans-serif; font-weight: 800">
    <Oppening :recipes="RecipesRandom" />
    <b-row align-h="between" style="margin-top: 4%">
      <b-col cols="4"><h2>Recipes</h2></b-col>
      <b-col cols="1.5"> <NuxtLink to="/recipes">See All ></NuxtLink></b-col>
    </b-row>
    <card-food :recipes="data" />
    <b-row style="margin-top: 6%">
      <b-col md="6" offset-md="5">
        <h1 style="font-weight: 800">Reviews</h1>
      </b-col>
    </b-row>
    <div>
      <reviews :reviews="reviewData" />
    </div>
    <b-row style="margin-top: 25%">
      <b-col>
        <Oppening-last />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { query, Review } from "~/graphql/query";

export default {
  async asyncData({ $graphql }) {
    const Recipes = await $graphql.default.request(query);
    const Reviewer = await $graphql.default.request(Review);
    const RecipesRandom = await Recipes.recipes.filter(
      (recipe) => recipe.id == Math.floor(Math.random() * 11)
    )[0];
    const data = await Recipes.recipes.slice(0, 6);
    const reviewData = await Reviewer.review.slice(0, 3);
    //console.log(data);
    return { data, reviewData, RecipesRandom };
  },
};
</script>
