<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="CardProduct">
        <div class="card shadow rounded" style="width: 16rem;">
            <img :src="require('@/assets/images/' + product.picture)" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ product.label }}</h5>
                <p class="card-text">Price : <span class="text-success">${{ product.price }}</span></p>
                <hr>
                <router-link :to="'/foods/' + product.id" class="btn btn-success"><i
                        class="fa fa-shopping-cart text-white"></i>
                    Order</router-link>
            </div>
        </div>
    </div>
</template>
  
<style>
/* *{
      border: red 1px solid;
    } */
</style>
  
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "CardProduct",
    props: ['product']
};
</script>
  