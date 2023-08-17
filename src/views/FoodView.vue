<template>
  <div class="food">
    <Navbar />
    <h1>Food</h1>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "FoodView",
  components: {
    Navbar,
  },
};
</script>
