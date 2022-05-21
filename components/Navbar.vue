<!-- @format -->

<template>
  <div class="mh-100 shadow-sm p-3 mb-5 bg-white rounded" style="color: black">
    <b-navbar
      toggleable="lg"
      type="white"
      variant="white"
      style="margin: 0 3%"
      fixed
    >
      <b-navbar-brand
        tag="h1"
        class="mb-0"
        href="/"
        type="black"
        style="font-family: 'Lobster', cursive; font-size: xx-large"
        >Foodin</b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse " variant="black"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="m-auto d-flex">
          <b-nav-item as="NUXTLINK" type="black" href="/">Home</b-nav-item>
          <b-nav-item as="NUXTLINK" type="black" href="recipes"
            >Recipes</b-nav-item
          >
          <b-nav-item as="NUXTLINK" type="black" href="">Contact Us</b-nav-item>
          <b-nav-item as="NUXTLINK" type="black" href="">About us</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav justified end>
          <b-nav-item as="nuxt-link" type="black" href=""
            ><img
              src="~/assets/img/instagram.png"
              tag="NajmunNahar"
              class="icon-size"
          /></b-nav-item>
          <b-nav-item as="nuxt-link" type="black" href=""
            ><img
              src="~/assets/img/twitter.png"
              tag="Smashicons"
              class="icon-size"
          /></b-nav-item>
          <b-nav-item as="nuxt-link" type="black" href=""
            ><img
              src="~/assets/img/facebook.png"
              tag="NajmunNahar"
              class="icon-size"
          /></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style>
.icon-size {
  width: 24px;
  height: auto;
}
a {
  color: black;
}
#navbar{
  font-family: "Lobster", cursive;
}
</style>
