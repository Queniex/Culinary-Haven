<template>
  <div class="food">
    <Navbar />
    <div class="container my-5">
      <div class="mx-2">
        <div class="row">
          <div class="col-4">
            <h3>List of <span class="text-success">Cakes</span></h3>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <input type="text" class="form-control search" placeholder="Insert Keyword..."
                aria-label=" Insert Keyword..." aria-describedby="button-addon2" v-model="search" @keyup="searchProduct">
              <button class="btn btn-success" type="button" id="button-addon2">Search</button>
            </div>
          </div>
          <hr class="border border-dark border-1 opacity-75">
        </div>
        <center>
          <div class="row mb-3">
            <div class="col-md-3 mt-4" v-for="product in products" :key="product.id">
              <CardProduct :product="product" />
            </div>
          </div>
        </center>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "FoodView",
  components: {
    Navbar,
    Footer,
    CardProduct
  },
  data() {
    return {
      products: [],
      search: '',
    }
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    searchProduct() {
      axios
        .get('http://localhost:3000/all-cakes?q=' + this.search)
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log("Fail : ", error))
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/all-cakes')
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("Fail : ", error))
  }
};
</script>

<style>
/* * {
  border: 1px red solid;
} */
</style>
