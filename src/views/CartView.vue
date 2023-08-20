<template>
    <div class="cart">
        <Navbar :updateCart="cart" />
        <div class="body">
            <div class="container">
                <div class="mt-4 mx-2 mb-4">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><router-link to="/"
                                    class="text-dark text-decoration-none">Home</router-link></li>
                            <li class="breadcrumb-item active fw-bold" aria-current="page"><span
                                    class="badge text-bg-dark">Shopping Cart</span></li>
                        </ol>
                    </nav>

                    <div class="row">
                        <div class="mt-1">
                            <h2 class="fw-light">My <span class="fw-bold text-success">Shopping Cart</span></h2>
                            <hr>
                            <table class="table">
                                <thead class="table-dark text-center">
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Preview</th>
                                        <th scope="col">Cake Label</th>
                                        <th scope="col">Note</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product, index) in cart" :key="product.id">
                                        <th scope="row" class="text-center">{{ index + 1 }}</th>
                                        <td>
                                            <div class="image-container">
                                                <img :src="require('@/assets/images/' + product.products.picture)" alt=""
                                                    width="100px" class="rounded shadow">
                                            </div>
                                        </td>
                                        <td class="text-center">{{ product.products.label }}</td>
                                        <td class="text-center">{{ product.note ? product.note : "-" }}</td>
                                        <td class="text-center">{{ product.quantity }}</td>
                                        <td class="text-center">${{ product.products.price }}</td>
                                        <td class="text-center">${{ product.products.price * product.quantity }}</td>
                                        <td class="text-center"><button @click="deleteCart(product.id)"
                                                class="btn btn-dark"><i class="fa fa-trash" style="color:red"></i></button>
                                        </td>
                                    </tr>
                                    <tr class="table-secondary">
                                        <td colspan="7" align="right">
                                            Total Price <span class="fw-bold ml-3">${{ priceTotal }}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div class="row justify-content-end">
                                <div class="col-md-4">
                                    <form v-on:submit.prevent autocomplete="on">
                                        <div class="form-group">
                                            <label for="name">Costumer Name : </label>
                                            <input autocomplete="off" id="name" type="text" class="form-control mb-1"
                                                v-model="order.name" />
                                        </div>
                                        <div class="form-group mt-3">
                                            <label for="table">Number of Table : </label>
                                            <input autocomplete="off" id="table" type="number" class="form-control"
                                                v-model="order.table" />
                                        </div>
                                        <button class="btn btn-success my-2 float-end" type="submit" @click="checkout">
                                            CheckOut</button>
                                    </form>
                                </div>
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
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
Vue.use(VueToast);

export default {
    name: "CartView",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            cart: {},
            order: {},
        }
    },
    methods: {
        setCart(data) {
            this.cart = data;
        },
        deleteCart(id) {
            axios
                .delete('http://localhost:3000/cart/' + id)
                .then(() => {
                    Vue.$toast.open({
                        message: "Successfully deleted product!",
                        type: 'error'
                    });

                    // refresh page
                    axios
                        .get('http://localhost:3000/cart')
                        .then((response) => this.setCart(response.data))
                        .catch((error) => console.log("Fail : ", error));
                })
                .catch((error) => console.log("Fail : ", error));
        },
        checkout() {
            // console.log("pesan", this.order.name);
            if (this.cart.length > 0) {
                if (this.order.name && this.order.table) {
                    this.order.products = this.cart;
                    axios
                        .post('http://localhost:3000/order', this.order)
                        .then(() => {

                            // Clear the cart
                            this.cart.map(function (item) {
                                return axios
                                    .delete('http://localhost:3000/cart/' + item.id)
                                    .catch((error) => console.log("Fail : ", error));
                            });

                            // refresh page
                            axios
                                .get('http://localhost:3000/cart')
                                .then((response) => this.setCart(response.data))
                                .catch((error) => console.log("Fail : ", error));

                            this.$router.push({ path: "/order/" });
                            Vue.$toast.open({
                                message: "Successfully checkout!",
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
            } else {
                Vue.$toast.open({
                    message: "Chart can't be empty!",
                    type: 'error'
                });
            }
        }
    },
    mounted() {
        axios
            .get('http://localhost:3000/cart')
            .then((response) => this.setCart(response.data))
            .catch((error) => console.log("Fail : ", error));
    },
    computed: {
        priceTotal() {
            return this.cart.reduce(function (items, data) {
                return items + (data.products.price * data.quantity)
            }, 0)
        }
    }
};
</script>

<style>
.body {
    min-height: 75vh;
}

/* * {
    border: 1px red solid;
} */

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

td,
th {
    text-align: center;
    vertical-align: middle;
}

.table-secondary td,
th {
    text-align: right;
    vertical-align: middle;
}
</style>