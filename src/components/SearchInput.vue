<template>
  <input
    type="text"
    placeholder="Search"
    v-model="searchInput"
    class="search-input"
  />
</template> 

<script setup lang="ts">
import { ref, watch } from "vue";

const searchInput = ref<string>("");
const emit = defineEmits(["search"]);

watch(searchInput, (newValue) => {
  emit("search", newValue);
});
</script>

<style scoped>
.search-input {
  margin-top: 30px;
  padding: 15px 12px;
  background-color: #ff731f;
  border: none;
  border-radius: 4px;
  outline: none;
}

.search-input::placeholder {
  color: #fff;
  font-weight: 500;
  font-size: 16px;
}
</style>
