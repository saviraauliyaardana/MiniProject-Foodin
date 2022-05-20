<template>
  <div>
    <b-card
      overlay
      img-src="~/assets/img/bg-down.png"
      img-alt="Card Image"
      text-variant="white"
      body-class="text-center"
      style = "margin-top: 8%;"
    >
      <b-card-title title-tag="h1" style="margin-top: 2%; font-weight: 800">
        Shared deliciousness your recipe
      </b-card-title>
      <b-card-text
        title-tag="h6"
        style="
          margin-top: 4%;
          word-wrap: break-word;
          font-weight: 400;
          padding: 0 20%;
        "
        >Recipes have no soul. You as a cook have to bring soul to the recipes because you don't have to cook fancy or complicated masterpieces, just good food from fresh ingredients.
      </b-card-text>
      <b-button
        href="/addrecipes"
        size="lg"
        style="margin-top: 3%; background-color: black; border-color: black"
        >Share Recipes</b-button
      >
    </b-card>
  </div>
</template>
