<template>
  <div class="flex justify-center items-center bg-gradient-to-r from-pink-300 to-yellow-400 text-white h-screen">
    <div class="text-center p-10 rounded-md shadow-md w-full max-w-lg">
      <h2 class="text-3xl font-bold mb-6 text-center text-green-700">Create Your BagStore Account</h2>
      <form @submit.prevent="handleSignup" class="flex flex-col space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          required
          class="p-3 border rounded w-full text-black focus:ring-2 focus:ring-green-400"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
          class="p-3 border rounded w-full text-black focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          class="bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
        >
          Sign Up
        </button>
      </form>
      <router-link to="/login" class="block text-center mt-4 text-blue-500 hover:underline">
        Already have an account? Login
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const handleSignup = () => {
      if (email.value && password.value) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some((u) => u.email === email.value);

        if (userExists) {
          alert("User already exists. Please log in.");
        } else {
          users.push({ email: email.value, password: password.value });
          localStorage.setItem("users", JSON.stringify(users));
          alert("Registration successful! Please log in.");
          router.push("/login");
        }
      } else {
        alert("Please fill in all fields.");
      }
    };

    return { email, password, handleSignup };
  },
};
</script>
