<template>
  <div class="p-10 text-sm">
    <h1 class="text-4xl font-bold mb-4 text-red-600">🛒 Your Cart</h1>
    
    <div v-if="cart.length === 0">
      <p class="text-center text-gray-700">No products in the cart. 😢</p>
    </div>

    <div v-else>
      <div v-for="(bag, index) in cart" :key="index" class="border p-4 rounded mb-2">
        <h3 class="text-green-600 text-2xl font-bold">{{ bag.name }}</h3>
        <img :src="bag.image" class="mx-auto h-48 object-cover" :alt="bag.name">
        <p class="text-gray-700 text-sm">{{ bag.description }}</p>
        <p class="text-red-600">{{ bag.price }} USD</p>

        <div class="flex items-center space-x-2 mt-2">
          <button @click="decreaseQuantity(index)" class="bg-gray-300 px-3 py-1 rounded-l">-</button>
          <span class="px-4 text-2xl bg-red-400">{{ bag.quantity }}</span>
          <button @click="increaseQuantity(index)" class="bg-gray-300 px-3 py-1 rounded-r">+</button>
        </div>

        <button class="bg-red-600 text-white p-2 mt-2" @click="removeFromCart(index)">
          ❌ Remove
        </button>
      </div>
      

      <h3 class="text-2xl text-right mt-4 font-bold">
        Total: $ {{ totalPrice.toFixed(2) }}
      </h3>
      

      <button class="bg-blue-600 text-white font-bold p-4 mt-4" @click="payByBank">
        Payment Bank
      </button>
    </div>
    

    <div v-if="showQrCode" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg relative">
        <button @click="closeQrCode" class="absolute top-0 right-0 m-2 text-gray-700 font-bold">X</button>
        <h2 class="text-2xl mb-4 text-center">Scan to Pay</h2>

        <img src="../assets/image/QRcode.jpg" alt="QR Code" class="w-60 h-64 mx-auto"/>
        <p class="mt-4 text-center">Total: ${{ totalPrice.toFixed(2) }}</p>
      </div>
    </div>
    
  </div>
</template>

<script>
import { reactive, computed, watch, ref } from "vue";

export default {
  setup() {
    // Load cart from localStorage or set to an empty array
    const cart = reactive(JSON.parse(localStorage.getItem("cart")) || []);

    // Compute the total price
    const totalPrice = computed(() => {
      return cart.reduce((sum, item) => {
        const price = parseFloat(item.price) || 0;
        const quantity = parseInt(item.quantity) || 1;
        return sum + price * quantity;
      }, 0);
    });

    // Update localStorage whenever the cart changes
    const updateLocalStorage = () => {
      localStorage.setItem("cart", JSON.stringify(cart));
    };
    watch(cart, updateLocalStorage, { deep: true });

    // Cart action methods
    const removeFromCart = (index) => {
      cart.splice(index, 1);
    };

    const increaseQuantity = (index) => {
      if (!cart[index].quantity) cart[index].quantity = 1;
      cart[index].quantity++;
    };

    const decreaseQuantity = (index) => {
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
      }
    };

    // QR code modal control
    const showQrCode = ref(false);
    const payByBank = () => {
      // Open the QR code modal for payment
      showQrCode.value = true;
    };
    const closeQrCode = () => {
      showQrCode.value = false;
    };

    return {
      cart,
      totalPrice,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      payByBank,
      showQrCode,
      closeQrCode,
    };
  },
};
</script>
