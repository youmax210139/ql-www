import { LocalStorage } from "quasar";
import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: LocalStorage.getItem("user"),
  }),

  getters: {},

  actions: {
    async login(data) {
      await api.get("/sanctum/csrf-cookie");
      const response = await api.post("/login", data);
      if (response.code == 200) {
        this.user = response.data;
        LocalStorage.set("user", this.user);
      }
    },
    async logout() {
      LocalStorage.remove("user");
      this.$reset();
      this.router.go(0);
    },
  },
});
