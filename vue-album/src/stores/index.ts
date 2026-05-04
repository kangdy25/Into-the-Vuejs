import axios from "axios";
import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    searchValue: "korea",
    images: [],
    page: 1,
    perPage: 30,
    total: 1,
    totalPages: 1,
  }),
  actions: {
    async fetchApi() {
      const ACCSEE_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
      const API_URL = `${import.meta.env.VITE_UNSPLASH_API_URL}/photos?page=${this.page}&query=${this.searchValue}&per_page=${this.perPage}&client_id=${ACCSEE_KEY}`;

      try {
        const res = await axios.get(API_URL);

        this.images = res.data.results;
        this.total = res.data.total;
        this.totalPages = res.data.total_pages;

        console.log(res);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
});
