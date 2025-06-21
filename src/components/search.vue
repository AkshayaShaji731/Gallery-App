<template>
  <input type="text" placeholder="Search" v-model="searchInput" />
</template> 

<script setup>
import { ref, watch } from "vue";

const searchInput = ref("");

const emit = defineEmits(["search-function"]);

watch(searchInput, (newValue) => {
  emit("search-function", newValue);
});
</script>

<style scoped>
input {
  margin-top: 30px;
  padding: 15px 12px;
  background-color: #ff731f;
  border: none;
  border-radius: 4px;
  outline: none;
}

input::placeholder {
  color: #fff;
  font-weight: 500;
  font-size: 16px;
}
</style>
