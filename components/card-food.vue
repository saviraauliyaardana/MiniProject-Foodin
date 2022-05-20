<template>
  <div style="margin-top: 3%">
    <!-- v-for="n in path == 'index' ? 4 : path == 'recipes' ? 3 : 2" -->
    <b-row>
      <b-col cols="4" v-for="(recipes, idx) in recipes" :key="idx">
        <b-card
          :img-src="recipes.foto"
          img-alt="Image"
          img-top
          img-height="10%"
          border-variant=""
          style="object-fit: scale-down"
        >
          <b-card-text>
            <router-link :to="`/recipes/${recipes.id}`">{{
              recipes.name
            }}</router-link>
          </b-card-text>
          <Status2 />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  props: {
    recipes: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      path: this.$nuxt.$route.name,
    };
  },
};
</script>
