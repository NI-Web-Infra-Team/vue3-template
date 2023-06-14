import { defineStore } from "pinia";

const useCounter = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});

export default useCounter;
