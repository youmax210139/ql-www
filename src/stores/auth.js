import { LocalStorage } from "quasar";
import { defineStore } from "pinia";
import { guest } from "boot/axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: LocalStorage.getItem("user"),
  }),

  getters: {},

  actions: {
    async login(data) {
      const response = await guest.post("/login", data);
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
      const response = await guest.post("/register", data);
      if (response.code == 200) {
        this.router.push({ name: "login.index" });
      }
    },
  },
});
