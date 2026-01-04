<template>
  <div>
    <div class="relative w-full h-screen bg-cover bg-center flex justify-center items-center text-red-700"
      style="background-image: url('https://boutiquestoredesign.com/wp-content/uploads/2018/10/super-quality-branded-bags-store-display-design-4-1240x775.jpg');">
    </div>
    <div class="flex justify-center items-center  bg-gradient-to-r from-blue-500 to-green-500 text-white">
  <div class="text-center p-10 rounded-md shadow-md w-full max-w-lg">
    <h1 class="text-4xl font-bold">Welcome to Bag Fusion</h1>
    <p class="text-lg mt-4">Find the best bags for every occasion!</p>
  </div>
</div>
    <!-- Search Bar -->
    <div class="flex justify-center items-center my-6">
      <input v-model="searchQuery" type="text" placeholder="Search for a bag..."
        class="p-2 border rounded-md w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <button @click="searchProducts"
        class="ml-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">Search</button>
    </div>

    <!-- Products Section -->
    <div class="p-10 bg-gray-100">
      <h1 class="text-3xl font-bold mb-6 text-red-600 text-center">Cnoles Bags</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="bag in cnoles" :key="bag.id" class="border p-4 rounded-lg shadow-md bg-white">
          <h3 class="text-green-600 text-2xl font-bold">{{ bag.name }}</h3>
          <img :src="bag.image" class="mx-auto h-48 object-cover" :alt="bag.name">
          <p class="text-gray-700 text-sm">{{ bag.description }}</p>

        </div>
      </div>
    </div>

    <div class="p-10 bg-gray-100">
      <h1 class="text-3xl font-bold mb-6 text-red-600 text-center">Foxer Bags</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="bag in foxer" :key="bag.id" class="border p-4 rounded-lg shadow-md bg-white">
          <h3 class="text-green-600 text-2xl font-bold">{{ bag.name }}</h3>
          <img :src="bag.image" class="mx-auto h-48 object-cover" :alt="bag.name">
          <p class="text-gray-700 text-sm">{{ bag.description }}</p>

        </div>
      </div>
    </div>

  </div>



<div class=" w-full bg-gray-400 py-4 flex justify-center shadow-lg">
      <div class="flex space-x-6">
        
        
        <a href="https://facebook.com/" target="_blank" aria-label="Facebook"
          rel="nofollow noopener noreferrer" class="social-icon">
          <img src="../assets/image/fb.png" alt="">
          <svg viewBox="0 0 24 24" class="icon">
          </svg>
        </a>

        
        <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram"
          rel="nofollow noopener noreferrer" class="social-icon">
          <img src="../assets/image/instagramicon.png" alt="">
          <svg viewBox="0 0 24 24" class="icon"></svg>
        </a>
      <a
        href="https://vt.tiktok.com/" target="_blank" aria-label="TikTok"
        rel="nofollow noopener noreferrer" class="social-icon">
        <img src="../assets/image/tiktokicon.png" alt="">
        <svg viewBox="0 0 24 24" class="icon"></svg>
      </a>
       <!-- <a href="https://x.com/" target="_blank" aria-label="X"
        rel="nofollow noopener noreferrer" class="social-icon">
        <img src="../assets/image/xicon.png" alt="">
        <svg viewBox="0 0 24 24" class="icon"></svg>
      </a>
      <a href="https://youtube.com/" target="_blank" aria-label="Youtube"
        rel="nofollow noopener noreferrer" class="social-icon">
        <img src="../assets/image/youtubeicon.png" alt="">
        <svg viewBox="0 0 24 24" class="icon"></svg>
      </a> -->
    </div>
  </div>


<footer class="bg-black dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-5x1 font-bold text-red-600 uppercase dark:text-white">Company</h2>
            <ul class="text-white dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="/product" class=" hover:underline">Product</a>
                </li>
                <li class="mb-4">
                    <a href="/about" class="hover:underline">About</a>
                </li>
                <li class="mb-4">
                    <a href="/contact" class="hover:underline">Contact</a>
                </li>
                <li class="mb-4">
                    <a href="/cart" class="hover:underline">Cart</a>
                </li>
            </ul>
        </div>
        <div>
            <h1 class="mb-6 text-5x1 font-bold text-red-600 uppercase dark:text-white">Help center</h1>
            <ul class="text-white dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="https://discord.com/" class="hover:underline">Discord Server</a>
                </li>
                <li class="mb-4">
                    <a href="https://facebook.com/" class="hover:underline">Facebook</a>
                </li>
                <li class="mb-4">
                    <a href="https://vt.tiktok.com/" class="hover:underline">TikTok</a>
                </li>
                <li class="mb-4">
                    <a href="https://www.instagram.com/" class="hover:underline">Instagram</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-5x1 font-bold text-red-600 uppercase dark:text-white">Legal</h2>
            <ul class="text-white dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Licensing</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-5x1 font-bold text-red-600 uppercase dark:text-white">Download</h2>
            <ul class="text-white dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">iOS</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Android</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Windows</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2025 Bag Store™ . All Rights Reserved.
        </span>
        <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path fill-rule="evenodd" d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
        </div>
      </div>
    </div>
</footer>

</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      cnoles: [
        {id: 1, name: 'Cnoles1 Bag', description: "This is product Cnoles",image: "public/assets/image/Cnoles1.png" },
        {id: 2, name: 'Cnoles2 Bag', description: "This is product Cnoles",image: "public/assets/image/Cnoles2.png" },
        {id: 3, name: 'Cnoles3 Bag', description: "This is product Cnoles",image: "public/assets/image/Cnoles3.png" },
        {id: 4, name: 'Cnoles4 Bag', description: "This is product Cnoles",image: "public/assets/image/Cnoles4.png" },
        {id: 5, name: 'Cnoles5 Bag', description: "This is product Cnoles",image: "public/assets/image/Cnoles5.png" },
        {id: 6, name: 'Cnoles6 Bag', description: "This is product Cnoles",image: "public/assets/image/Cnoles6.png" },
        {id: 7, name: 'Cnoles7 Bag', description: "This is product Cnoles",image: "public/assets/image/Cnoles7.png" },
        {id: 8, name: 'Cnoles8 Bag', description: "This is product Cnoles",image: "public/assets/image/Cnoles8.png" },
        {id: 9, name: 'Cnoles9 Bag', description: "This is product Cnoles",  image: "public/assets/image/Cnoles9.png"},
    {id: 10, name: 'Cnoles10 Bag', description: "This is product Cnoles",  image: "public/assets/image/Cnoles10.png"},
    {id: 11, name: 'Cnoles11 Bag', description: "This is product Cnoles",  image: "public/assets/image/Cnoles11.png"},
    { id: 12, name: 'Cnoles12 Bag', description: "This is product Cnoles",  image: "public/assets/image/Cnoles12.png"},
    { id: 13, name: 'Cnoles13 Bag', description: "This is product Cnoles",  image: "public/assets/image/Cnoles13.png"},
    { id: 14, name: 'Cnoles14 Bag', description: "This is product Cnoles",  image: "public/assets/image/Cnoles14.png"},
    { id: 15, name: 'Cnoles15 Bag', description: "This is product Cnoles",  image: "public/assets/image/Cnoles1.png"},
    { id: 16, name: 'Cnoles16 Bag', description: "This is product Cnoles",  image: "public/assets/image/Cnoles15.png"},
    { id: 17, name: 'Cnoles17 Bag', description: "This is product Cnoles",  image: "public/assets/image/Cnoles16.png"},
    { id: 18, name: 'Cnoles18 Bag', description: "This is product Cnoles",  image: "public/assets/image/Cnoles17.png"},
    {id: 19, name: 'Cnoles19 Bag', description: "This is product Cnoles",  image: "public/assets/image/Cnoles10.png"},
    {id: 20, name: 'Cnoles20 Bag', description: "This is product Cnoles",  image: "public/assets/image/Cnoles11.png"},
      ],
      foxer: [
        { id: 1, name: 'Foxer1 Bag', description: "This is product Foxer",image: "/public/assets/image/Cnoles1.png" },
        { id: 2, name: 'Foxer2 Bag', description: "This is product Foxer",image: "/public/assets/image/Cnoles2.png" },
        { id: 3, name: 'Foxer3 Bag', description: "This is product Foxer",image: "/public/assets/image/Cnoles3.png" },
        { id: 4, name: 'Foxer4 Bag', description: "This is product Foxer",  image: "public/assets/image/Cnoles4.png"},
        { id: 5, name: 'Foxer5 Bag', description: "This is product Foxer",  image: "public/assets/image/Cnoles5.png"},
        { id: 6, name: 'Foxer6 Bag', description: "This is product Foxer",  image: "public/assets/image/Cnoles6.png"},
        { id: 7, name: 'Foxer7 Bag', description: "This is product Foxer",  image: "public/assets/image/Cnoles7.png"},
        { id: 8, name: 'Foxer8 Bag', description: "This is product Foxer",  image: "public/assets/image/Cnoles8.png"},
        { id: 9, name: 'Foxer9 Bag', description: "This is product Foxer",  image: "public/assets/image/Cnoles9.png"},
        { id: 10, name: 'Foxer10 Bag', description: "This is product Foxer",  image: "public/assets/image/Cnoles10.png"},
        { id: 11, name: 'Foxer11 Bag', description: "This is product Foxer",  image: "public/assets/image/Cnoles11.png"},
        { id: 12, name: 'Foxer12 Bag', description: "This is product Foxer",  image: "public/assets/image/Cnoles12.png"},
        { id: 13, name: 'Foxer13 Bag', description: "This is product Foxer",  image: "public/assets/image/Cnoles13.png"},
        { id: 14, name: 'Foxer14 Bag', description: "This is product Foxer",  image: "public/assets/image/Cnoles14.png"},
        { id: 15, name: 'Foxer15 Bag', description: "This is product Foxer",  image: "public/assets/image/Cnoles1.png"},
        { id: 16, name: 'Foxer16 Bag', description: "This is product Foxer",  image: "public/assets/image/Cnoles15.png"},
        { id: 17, name: 'Foxer17 Bag', description: "This is product Foxer",  image: "public/assets/image/Cnoles16.png"},
        { id: 18, name: 'Foxer18 Bag', description: "This is product Foxer",  image: "public/assets/image/Cnoles17.png"},
        { id: 19, name: 'Foxer19 Bag', description: "This is product Foxer",image: "/public/assets/image/Cnoles1.png" },
        { id: 20, name: 'Foxer20 Bag', description: "This is product Foxer",image: "/public/assets/image/Cnoles2.png" },
      ]
    };
  },
  computed: {
    filteredCnoles() {
      if (!this.searchQuery) {
        return this.cnoles;
      }
      return this.cnoles.filter(bag =>
        bag.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredFoxer() {
      if (!this.searchQuery) {
        return this.foxer;
      }
      return this.foxer.filter(bag =>
        bag.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    addToCart(bag) {
      const isConfirmed = window.confirm(`Are you sure you want to buy the ${bag.name} for ${bag.price} USD?`);
      if (isConfirmed) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(bag);
        localStorage.setItem("cart", JSON.stringify(cart));
        this.$router.push({ name: "cart" });
      }
    },
    searchProducts() {
      console.log("Searching for:", this.searchQuery);
    }
  }
};
</script>

<style>

.bg-cover {
  background-size: cover;
  background-position: center;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.social-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
} */

 SVG Icon Styling
 .icon {
  width: 24px;
  height: 24px;
  fill: white;
}


</style>




