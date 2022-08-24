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
        this.router.push({ name: "accounts.index" });
      }
    },
    async logout() {
      LocalStorage.remove("user");
      this.$reset();
      this.router.go(0);
    },
    async register(data) {
      await api.get("/sanctum/csrf-cookie");
      const response = await api.post("/register", data);
      if (response.code == 200) {
        this.router.push({ name: "login.index" });
      }
    },
  },
});
