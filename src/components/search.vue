<template>
  <input
    type="text"
    placeholder="Search"
    v-model="searchInput"
    @keyup.enter="onSearch"
  />
</template> 

<script setup>
import { ref } from "vue";

const searchInput = ref("");

const emit = defineEmits(["search-function"]);

const onSearch = () => {
  emit("search-function", searchInput.value);
};
</script>

<style scoped>
input {
  margin-top: 30px;
  padding: 15px 12px;
  background-color: #ff731f;
  border: none;
  border-radius: 4px;
}

input::placeholder {
  color: #fff;
  font-weight: 500;
  font-size: 16px;
}
</style>
