import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore1 = defineStore("main", {
  state: () => {
    return {
      title: "제목",
      description: "설명",
      count: 10,
    };
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});

export const useStore2 = defineStore("main", () => {
  const title = ref("제목");
  const description = ref("설명");

  return { title, description };
});
