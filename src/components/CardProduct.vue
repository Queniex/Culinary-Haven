<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="CardProduct">
        <div class="card" style="width: 16rem;">
            <img :src="require('@/assets/images/' + product.picture)" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ product.label }}</h5>
                <p class="card-text">Price : ${{ product.price }}</p>
                <a href="#" class="btn btn-success"><i class="fa fa-shopping-cart text-white"></i> Order</a>
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
  