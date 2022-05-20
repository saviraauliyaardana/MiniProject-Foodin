<template>
  <div>
    <b-row><h1>Inggredients</h1></b-row>
    <b-row>
      <ul style="list-style-type: circle">
        <li v-for="ing in ing" class="list-style">{{ ing }}</li>
      </ul>
    </b-row>
  </div>
</template>
<script>
export default {
  props: {
    ing: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
.list-style {
  padding: 1% 0;
  font-size: x-large;
  font-weight: 400;
}
</style>
