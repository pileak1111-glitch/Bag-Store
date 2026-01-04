<template>
  <nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-gradient-to-r from-blue-500 to-green-500 px-5 py-4 shadow-lg">
    <h1 class="text-3xl font-bold text-red-600">BAG <span class="text-yellow-500">Store</span></h1>
    <div class="flex space-x-6">
      <RouterLink to="/" class="hover:text-blue-600 font-bold text-2xl text-center">HOME</RouterLink>
      <RouterLink to="/product" class="hover:text-blue-600 font-bold text-2xl text-center">PRODUCT</RouterLink>
      <RouterLink to="/about" class="hover:text-blue-600 font-bold text-2xl text-center">ABOUT</RouterLink>
      <RouterLink to="/contact" class="hover:text-blue-600 font-bold text-2xl text-center">CONTACT</RouterLink>
      <RouterLink to="/cart" class="hover:text-blue-600 font-bold text-2xl text-center">CART</RouterLink>
      <Router-link to="/login" class="mr-2 text-red-600 hover:bg-blue-500 px-2 rounded-md font-bold text-2xl text-center">Login</Router-link>
    </div>
  </nav>

  <!-- Add padding to avoid content being hidden under fixed navbar -->
  <div class="pt-15 font-bold text-2xl text-center">
    <RouterView />
  </div>
</template>

<script>
export default {};
</script>