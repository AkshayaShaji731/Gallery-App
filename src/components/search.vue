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

function onSearch() {
  if (searchInput.value === "") {
    console.log("empty");
  } else {
    console.log(searchInput.value);
  }
}
</script>
<style scoped>
body {
  background-color: #111827;
}

input {
  padding: 15px;
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
