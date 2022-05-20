<template>
  <div style="margin-top: 12%; margin-left: 3%; margin-right: 3%">
    <b-navbar toggleable="lg" type="white" variant="white" fixed>
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
        <b-navbar-nav class="ml-auto" end>
          <b-nav-item as="NUXTLINK" type="black" href="/">Home</b-nav-item>
          <b-nav-item as="NUXTLINK" type="black" href="recipes"
            >Recipes</b-nav-item
          >
          <b-nav-item as="NUXTLINK" type="black" href="contact"
            >Contact Us</b-nav-item
          >
          <b-nav-item as="NUXTLINK" type="black" href="about"
            >About us</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-row style="margin-left: 0%; font-weight: 400"
      ><b-col>Eat good, feel good, look Good </b-col>
    </b-row>
    <b-row align-h="end" style="padding: 4% 0 ">
      <b-col cols="6">
        &copy;2022 Foodin. Powered by
        <a href="https://webflow.com/">Webflow</a></b-col
      >
      <b-col cols="2" align-self="start"
        ><a href=""
          ><img
            src="~/assets/img/instagram.png"
            tag="NajmunNahar"
            class="icon-size link-margin"
          /> </a
        ><a href=""
          ><img
            src="~/assets/img/twitter.png"
            tag="NajmunNahar"
            class="icon-size link-margin"
          /> </a
        ><a href=""
          ><img
            src="~/assets/img/facebook.png"
            tag="NajmunNahar"
            class="icon-size link-margin"
          /> </a
      ></b-col>
    </b-row>
  </div>
</template>
<style>
.link-margin {
  margin: 0 3%;
}
</style>
