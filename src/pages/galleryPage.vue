<template>
  <search @search-function="onSearch" />
  <section class="card-container">
    <cardSection v-for="post in postValues" :key="post.id" :post-data="post" />
  </section>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import search from "@/components/search.vue";
import cardSection from "@/components/cardSection.vue";

const posts = ref([]);
const postValues = ref(posts);

function onSearch(searchInput) {
  console.log("vakue");
  postValues.value = posts.value;
  if (searchInput === "") {
    console.log("empty");
  } else {
    console.log(searchInput);
    postValues.value = [posts.value[searchInput - 1]];
    // console.log(postValues);
    searchInput = "";
  }
}

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    posts.value = response.data.filter((item) => item.id <= 40);
  } catch (error) {
    console.error("Error fetching jobs", error);
  }
});
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 30px;
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
