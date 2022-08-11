import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),

  getters: {},

  actions: {
    async login(data) {
      const response = await api.post("/auth/login", {});
      console.log(response);
      this.user = {
        name: "test",
        email: "test@gmail.com",
      };
      console.log(11111);
    },
    async logout() {
      this.user = null;
    },
  },
});
