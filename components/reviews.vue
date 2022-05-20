<template>
  <div>
    <div v-for="reviews in reviews">
      <b-card
        :img-src="reviews.recipe.foto"
        img-alt="Card image"
        img-left
        img-width="25%"
        img-height="25%"
        class="mb-3"
        style="margin-top: 4%"
      >
        <div style="margin: 4%">
          <b-card-title title-tag="h2" style="font-weight: 800">
            {{ reviews.recipe.name }}
          </b-card-title>
          <no-ssr>
            <star-rating
              :rating="reviews.rat"
              show-rating="false"
              read-only="true"
            >
            </star-rating>
          </no-ssr>
          <b-card-text
            title-tag="h6"
            style="margin-top: 4%; word-wrap: break-word; font-weight: 400"
            >{{ reviews.comment }}</b-card-text
          >
        </div>
      </b-card>
    </div>
  </div>
</template>
<style></style>
<script>
export default {
  props: {
    reviews: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
