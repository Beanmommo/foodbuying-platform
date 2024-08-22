import { defineStore } from "pinia";

export const useTestStore = defineStore("test", () => {
  const test = ref("false");
  return {
    test,
  };
});
