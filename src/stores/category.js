import { defineStore } from "pinia";
import { guest } from "boot/axios";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [],
  }),

  getters: {},

  actions: {
    async index(data) {
      const response = await guest.get("/categories", data);
      if (response.code == 200) {
        this.categories = response.data;
      }
    },
  },
});
