<template>
  <input
    type="text"
    placeholder="Search"
    v-model="searchInput"
    @keyup.enter="onSearch"
  />
  <section class="card-container">
    <CardSection v-for="post in postValues" :key="post.id" :post-data="post" />
  </section>
</template> 

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import CardSection from "./cardSection.vue";

const searchInput = ref("");

let posts = ref([]);
let postValues = posts;

function onSearch() {
  if (searchInput.value === "") {
    postValues = posts;
    console.log("empty");
  } else {
    postValues = [posts.value[searchInput.value - 1]];
    console.log(posts);
    searchInput.value = "";
  }
}

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    posts.value = response.data;
  } catch (error) {
    console.error("Error fetching jobs", error);
  }
});
</script>

<style scoped>
body {
  background-color: #111827;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-inline: 16px;
  gap: 16px;
  margin-top: 30px;
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

@media screen and (min-width: 768px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1024px) {
  .card-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
