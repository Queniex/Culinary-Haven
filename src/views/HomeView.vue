<template>
  <div class="home">
    <Navbar />
    <div class="body d-flex justify-content-md-center align-items-center">
      <div class="container my-5">

        <!-- Desktop -->
        <div class="d-none d-md-block">
          <div class="row align-items-start">
            <div class="col-md-6">
              <div class="mx-3">
                <hr>
                <h2>Welcome to <span class="text-success">Culinary-Haven</span>!</h2>
                <p>Embark on a culinary journey with our exquisite dishes that promise to delight your taste buds. Savory
                  indulgence awaits!</p>
                <h5 class="fs-6">Start Your First Order.</h5>
                <button class="btn btn-success"> → ORDER</button>
              </div>
              <hr>
            </div>
            <div class="col-md-6">
              <div class="d-flex justify-content-center">
                <img src="https://i.postimg.cc/bYKfGfnz/watering-plant-4.png" alt="" class="w-75 h-max ml-5">
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile -->
        <div class="body2 d-sm-block d-md-none">
          <div class="row align-items-start">
            <div class="col-md-6 mt-3">
              <div class="d-flex justify-content-center ml-5">
                <img src="https://i.postimg.cc/bYKfGfnz/watering-plant-4.png" alt="" class="w-75 h-75 ml-5">
              </div>
            </div>
            <div class="col-md-6 mt-3">
              <div class="mx-3">
                <hr>
                <h2 class="text-success">Welcome to Culinary Haven!</h2>
                <p>Embark on a culinary journey with our exquisite dishes that promise to delight your taste buds. Savory
                  indulgence awaits!</p>
                <h5 class="fs-6">Start Your First Order.</h5>
                <button class="btn btn-success"> → ORDER</button>
              </div>
              <hr>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col">
            <h2 class="mx-3">Recommended <span class="fw-bolder text-info-emphasis">Food</span><a href=""
                class="btn btn-success float-end"><i class='fa fa-list-ul'></i> More List</a></h2>
            <hr>
          </div>
          <div class="col">
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-md-3 mt-4" v-for="product in products" :key="product.id">
            <CardProduct :product="product" />
          </div>
        </div>

      </div>
    </div>



    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Footer,
    CardProduct,
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    setProduct(data) {
      this.products = data;
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/best-cakes')
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("Fail : ", error))
  }
};
</script>

<style>
/* * {
  border: 1px red solid;
} */

.body {
  display: flex;
  flex-direction: column;
  min-height: 75vh;
}

.body2 {
  display: flex;
  flex-direction: column;
  min-height: 78vh;
}
</style>
