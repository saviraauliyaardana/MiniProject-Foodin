<template>
  <div>
    <form v-on:submit.prevent="fetchSomething">
      <b-row style="margin-top: 4%">
        <b-col md="6" offset-md="5">
          <h1 style="font-weight: 800">Share Your Recipe In Here</h1>
        </b-col>
      </b-row>

      <b-row style="margin-top: 4%">
        <b-col md="6">
          <b-form-input
            v-model="foto"
            size="lg"
            placeholder="Link The Foto"
            style="margin-top: 5%"
          ></b-form-input>
          <b-form-input
            v-model="video"
            size="lg"
            placeholder="Link The Video"
            style="margin-top: 5%"
          ></b-form-input
        ></b-col>
        <b-col md="6">
          <b-form-input
            v-model="name"
            size="lg"
            placeholder="Enter your recipe's Name"
            style="margin-top: 5%"
          ></b-form-input>
          <b-form-input
            v-model="keterangan"
            size="lg"
            placeholder="Descripe your recipes"
            style="margin-top: 5%"
          ></b-form-input>
          <b-form-input
            v-model="koki"
            size="lg"
            placeholder="koki name"
            style="margin-top: 5%"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row style="margin-top: 4%">
        <b-button
          type="submit"
          size="lg"
          block
          style="background-color: #00aa13"
          >Share</b-button
        >
      </b-row>
    </form>
  </div>
</template>
<script>
import { gql } from "nuxt-graphql-request";

export default {
  data() {
    return {
      name: "",
      foto: "",
      video: "",
      keterangan: "",
      koki: "",
    };
  },
  methods: {
    async fetchSomething() {
      const mutation = gql`
        mutation AddingRecipe(
          $name: String!
          $koki: String!
          $ket: String!
          $foto: String!
          $linkvid: String!
          $prep: String
          $cook: String
          $gizi: Int
          $step: Int
        ) {
          addRecipe(
            object: {
              name: $name
              koki: $koki
              ket: $ket
              foto: $foto
              linkvid: $linkvid
              prep: $prep
              cook: $cook
              gizi: $gizi
              step: $step
            }
          ) {
            name
            koki
            ket
            foto
            linkvid
            prep
            cook
            gizi
            step
          }
        }
      `;

      const variables = {
        name: this.name,
        koki: this.koki,
        ket: this.keterangan,
        foto: this.foto,
        linkvid: this.video,
        prep: "30 Menitus",
        cook: "30 Menitus",
        gizi: 2,
        step: 2,
      };

      await this.$graphql.default
        .request(mutation, variables)
        .then(console.log("asdsada"))
        .catch((err) => {
          console.error(JSON.stringify(error, undefined, 2));
          process.exit(1);
        });
      // console.log(JSON.stringify(data, undefined, 2));catch (error) {
    },
  },
};
</script>
<!-- mutation recipes(
              $name: String!,
              $koki: String!,
              $ket: String!,
              $foto: String!,
              $linkvid: String!,
              $prep: String,
              $cook: String,
              $gizi: Int,
              $step: Int,):addRecipe(name:$name,koki:$koki,ket:$ket,foto:$foto,linkvid:$linkvid,prep:$prep,cook:$cook,gizi:$gizi,step:$step){ name koki ket foto linkvid prep cook gizi step}
      -->
<!-- {
        addRecipe( 
        name: this.name,
        koki: this.koki,
        ket: this.keterangan,
        foto: this.foto,
        linkvid: this.video,
        prep: "30 Menitus",
        cook: "30 Menitus",
        gizi: 2,
        step: 2,){
          name
          koki
          ket
          foto
          linkvid
          prep
          cook
          gizi
          step
        }
      } -->
<!-- mutation addRecipe(
          $name: String!
          $koki: String!
          $ket: String!
          $foto: String!
          $linkvid: String!
          $prep: String
          $cook: String
          $gizi: Int
          $step: Int
        ) {
          recipe(
            object: {
              name: $name
              koki: $koki
              ket: $ket
              foto: $foto
              linkvid: $linkvid
              prep: $prep
              cook: $cook
              gizi: $gizi
              step: $step
            }
          ) {
            name
            koki
            ket
            foto
            linkvid
            prep
            cook
            gizi
            step
          }
        } -->
