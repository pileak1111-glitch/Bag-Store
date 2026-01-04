<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">Create Account</h2>

      <form @submit.prevent="signup">
        <!-- Name -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Full Name</label>
          <input
            v-model="form.name"
            type="text"
            class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your name"
            required
          />
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
            required
          />
        </div>

        <!-- Password -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Password</label>
          <input
            v-model="form.password"
            type="password"
            class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter password"
            required
          />
        </div>

        <!-- Confirm Password -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Confirm Password</label>
          <input
            v-model="form.confirm"
            type="password"
            class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Confirm password"
            required
          />
        </div>

        <!-- Error -->
        <p v-if="error" class="text-red-500 text-sm mb-3">{{ error }}</p>

        <!-- Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>

      <p class="text-center text-sm mt-4">
        Already have an account?
        <router-link to="/" class="text-blue-600 hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirm: ''
})

const error = ref('')

const signup = () => {
  if (form.password !== form.confirm) {
    error.value = 'Passwords do not match'
    return
  }

  const users = JSON.parse(localStorage.getItem('users') || '[]')

  const exists = users.find(u => u.email === form.email)
  if (exists) {
    error.value = 'Email already registered'
    return
  }

  users.push({
    name: form.name,
    email: form.email,
    password: form.password
  })

  localStorage.setItem('users', JSON.stringify(users))

  alert('Signup successful!')
  router.push('/')
}
</script>
