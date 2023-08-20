<template>
    <div class="orderSuccess">
        <Navbar />
        <div class="body">
            <div class="container">
                <div class="mx-2 mt-4 mb-4">
                    <h1>Success Page</h1>
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
  