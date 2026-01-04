import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
  }),
  actions: {
    login(email, password) {
      if (email === "" && password === "") {
        const user = { email };
        this.user = user;
        localStorage.setItem("user", JSON.stringify(user));
        return true;
      }
      return false;
    },
    signup(email, password) {
      const user = { email, password };
      localStorage.setItem("user", JSON.stringify(user));
      this.user = user;
      alert 
      this.$router.push("/Login");
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
    },
  },
});
