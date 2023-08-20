<template>
    <div class="orderSuccess">
        <Navbar />
        <div class="body">
            <div class="container">
                <div class="mx-2 mt-4 mb-4">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-6 mt-3">
                            <center>
                                <div class="w-50 d-flex mt-2">
                                    <img src="../assets/images/happy1.png" class="img-fluid" alt="">
                                </div>
                            </center>
                            <h1 class="text-center">Your <span class="text-success">order</span> is on process!</h1>
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

export default {
    name: "OrderSuccessView",
    components: {
        Navbar,
        Footer
    },
};
</script>

<style>
.body {
    min-height: 75vh;
}

/* * {
    border: 1px red solid;
} */
</style>
  