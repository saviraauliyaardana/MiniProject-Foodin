<!-- @format -->

<template>
  <div>
    <b-card
      no-body
      v-if="recipes"
      class="overflow-hidden"
      style="max-height: 100%; border-radius: 42px"
    >
      <b-row no-gutters>
        <b-col md="6" style="background-color: #00aa13">
          <b-card-body>
            <b-row no-gutters style="margin: 3%">
              <Status />
              <h2 class="font-title">{{ recipes.name }}</h2>
              <h5 class="font-title" style="font-size: small; font-weight: 400">
                {{ recipes.ket }}
              </h5>
              <Status2 />
              <ButtonPlay />
            </b-row>
          </b-card-body>
        </b-col>
        <b-col md="6">
          <b-card-img
            :src="recipes.foto"
            alt="Image"
            class="rounded-0"
            img-height="50px"
          ></b-card-img>
        </b-col>
      </b-row>
    </b-card>
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
};
</script>
<style>
.font-title {
  margin-top: 5%;
  font-family: "Inter", sans-serif;
  font-size: 52px;
  font-weight: 600;
  color: #000;
}
</style>
