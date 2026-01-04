<template>
    <div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-sm">
      <h2 class="text-blue-600 text-2xl font-semibold text-center mb-4">Contact Us</h2>
      
      <form @submit.prevent="submitForm" class="space-y-4 text-sm">
        <div>
          <label class="block text-gray-700">Name</label>
          <input v-model="name" type="text" placeholder="Your Name" class="w-full p-2 border rounded" />
          <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
        </div>
  
        <div>
          <label class="block text-gray-700">Email</label>
          <input v-model="email" type="email" placeholder="Your Email" class="w-full p-2 border rounded" />
          <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
        </div>
  
        <div>
          <label class="block text-gray-700">Message</label>
          <textarea v-model="message" placeholder="Your Message" class="w-full p-2 border rounded h-28"></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</p>
        </div>
  
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Send Message
        </button>
  
        <p v-if="successMessage" class="text-green-500 text-center mt-4">{{ successMessage }}</p>
      </form>
    </div>
    
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const name = ref("");
      const email = ref("");
      const message = ref("");
      const errors = ref({});
      const successMessage = ref("");
  
      const validateForm = () => {
        errors.value = {};
        if (!name.value) errors.value.name = "Name is required";
        if (!email.value) errors.value.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email.value)) errors.value.email = "Invalid email";
        if (!message.value) errors.value.message = "Message cannot be empty";
        
        return Object.keys(errors.value).length === 0;
      };
  
      const submitForm = () => {
        if (validateForm()) {
          successMessage.value = "Message sent successfully!";
          setTimeout(() => (successMessage.value = ""), 3000);
  
          // Reset form
          name.value = "";
          email.value = "";
          message.value = "";
        }
      };
  
      return { name, email, message, errors, successMessage, submitForm };
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Additional custom styles */
  </style>
  