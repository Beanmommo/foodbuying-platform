import { defineStore } from "pinia";

export const useTestStore = defineStore("test", () => {
  const test = ref("false");
  const testProp = ref({ name: "test", value: "false" });
  return {
    testProp,
    test,
  };
});
