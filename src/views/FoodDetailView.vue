<template>
    <div class="food-detail">
        <Navbar />
        <div class="body">
            <div class="container">
                <div class="mt-4 mx-2">
                    <div class="float-start">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="/"
                                        class="text-dark text-decoration-none">Home</router-link></li>
                                <li class="breadcrumb-item"><router-link to="/foods"
                                        class="text-dark text-decoration-none">Food</router-link>
                                </li>
                                <li class="breadcrumb-item active fw-bold" aria-current="page"><span
                                        class="badge text-bg-dark">Food
                                        Detail</span></li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-md-4 mt-4">
                        <div class=" h-100 d-flex justify-content-center align-items-center">
                            <div class="w-75">
                                <img :src="require('@/assets/images/' + product.picture)" class="img-fluid" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4">
                        <h2>
                            <strong>{{ product.label }}</strong>
                        </h2>
                        <hr />
                        <h4>
                            Price :
                            <strong>${{ product.price }}</strong>
                        </h4>
                        <form class="mt-4">
                            <div class="form-group">
                                <label for="jumlah_pemesanan">Quantity</label>
                                <input type="number" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="keterangan">Note</label>
                                <textarea class="form-control" placeholder="Extra Sweet, Less Sugar, etc.."></textarea>
                            </div>
                            <button class="btn btn-success my-2"><i class="fa fa-shopping-cart text-white"></i>
                                Order</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
  
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
    name: "FoodDetailView",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            product: {}
        }
    },
    methods: {
        setProduct(data) {
            this.product = data;
        }
    },
    mounted() {
        // console.log(this.$route.params.id);
        axios
            .get('http://localhost:3000/all-cakes/' + this.$route.params.id)
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
    min-height: 75vh;
}
</style>