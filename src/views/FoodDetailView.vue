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
                                        class="badge text-bg-dark">Food-Detail</span></li>
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
                        <form class="mt-4" v-on:submit.prevent>
                            <div class="form-group">
                                <label for="quantity">Quantity</label>
                                <input id="quantity" type="number" class="form-control" v-model="order.quantity" />
                            </div>
                            <div class="form-group">
                                <label for="note">Note</label>
                                <textarea id="note" class="form-control" placeholder="Extra Sweet, Less Sugar, etc.."
                                    v-model="order.note"></textarea>
                            </div>
                            <button class="btn btn-success my-2" @click="order_detail"><i
                                    class="fa fa-shopping-cart text-white"></i>
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
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
Vue.use(VueToast);

export default {
    name: "FoodDetailView",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            product: {},
            order: {}
        };
    },
    methods: {
        setProduct(data) {
            this.product = data;
        },
        order_detail() {
            if (this.order.quantity) {
                this.order.products = this.product;
                axios
                    .post('http://localhost:3000/cart', this.order)
                    .then(() => {
                        this.$router.push({ path: "/cart/" });
                        Vue.$toast.open({
                            message: "You place an order😊!",
                            type: 'success'
                        });
                    })
                    .catch((error) => console.log(error));
            } else {
                Vue.$toast.open({
                    message: "Field can't be empty!",
                    type: 'error'
                });
            }

        }

    },
    mounted() {
        axios
            .get('http://localhost:3000/all-cakes/' + this.$route.params.id)
            .then((response) => this.setProduct(response.data))
            .catch((error) => console.log("Fail : ", error));
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