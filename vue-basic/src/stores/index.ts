import { defineStore } from "pinia";

export const useStore = defineStore("main", {
    state: () => {
        return {
            title: "제목",
            description: "설명",
            count: 10,
        };
    },
    getters: {
        doubleCount: (state) => state.count * 2,
        doublePlusOne(): number {
            return this.doubleCount + 1;
        },
    },
    actions: {
        increment() {
            this.count++;
        },
        randomizeCounter() {
            this.count = Math.round(100 * Math.random());
        },
    },
});
