<template>
  <div class="home">
    <Navbar />
    <div class="body d-flex justify-content-md-center align-items-center">
      <div class="container my-5">
        <div class="row align-items-start">
          <div class="col">
            <div class="mx-3">
              <hr>
              <h2 class="text-success">Savory Delights Up Next!</h2>
              <p>Embark on a culinary journey with our exquisite dishes that promise to delight your taste buds. Savory
                indulgence awaits!</p>
              <h5 class="fs-6">Start Your First Order.</h5>
              <button class="btn btn-success"> → ORDER</button>
            </div>
            <hr>
          </div>
          <div class="col">
            <div class="d-flex justify-content-center">
              <div id="carouselExampleInterval" class="carousel slide w-50" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="1000">
                    <img src="https://i.postimg.cc/BnXFfWCD/logo-CH-2-0.png" class="d-block" width="270px" height="270px"
                      alt="...">
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://i.postimg.cc/xC4Z1Vzm/logo-CH-2-1.png" class="d-block" width="270px" height="270px"
                      alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="https://i.postimg.cc/Th8HnjQY/logo-CH-2-2.png" class="d-block" width="270px" height="270px"
                      alt="...">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
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

export default {
  name: "HomeView",
  components: {
    Navbar,
    Footer,
  },
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
</style>
