<template>
  <div>
    <b-row><h1>Cooking Steps</h1></b-row>
    <b-row>
      <ul style="">
        <li v-for="step in step" class="list-style02">{{ step }}</li>
      </ul>
    </b-row>
  </div>
</template>
<script>
export default {
  props: {
    step: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style>
.list-style02 {
  list-style-type: decimal;
  padding: 1% 0;
  font-size: x-large;
  font-weight: 400;
}
</style>
