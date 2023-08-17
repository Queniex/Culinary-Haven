<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container d-flex">

      <div class="p-2 flex-grow-1">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <a class="navbar-brand fw-bold fs-3" href="#">•CULINARY HAVEN•</a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Foods</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Other 
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Favorite Food</a></li>
              <li><a class="dropdown-item" href="#">Recommend Food</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">About Us</a></li>
            </ul>
          </li>
          </ul>
        </div>
      </div>

      <div class="p-2">
          <!-- Badge -->
          <div class="nav-item text-secondary">
            <a class="nav-link" href="#">
              <span>Shopping Cart</span>
              <span class="badge badge-pill bg-success mx-2">0</span>
              <span><i class="fa fa-shopping-cart text-white"></i></span>
            </a>
          </div>
      </div>
    </div>
  </nav>
</template>

<style>
/* *{
  border: red 1px solid;
} */
</style>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

