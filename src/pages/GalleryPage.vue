<template>
  <section class="px-8">
    <div class="d-flex justify-space-between align-center">
      <searchBar v-model="searchInput" />
      <h5 class="text-white text-h6 font-weight-bold">
        Total Posts:{{ postValues.length }}
      </h5>
    </div>
    <section class="card-container">
      <cardSection 
        v-for="post in postValues"
        :key="post.id"
        :post-data="post"
      />
    </section>
  </section>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted, computed } from "vue";

import cardSection from "@/components/Card.vue";
import searchBar from "@/components/SearchInput.vue";
import { API_URL, DISPLAY_CARDS_COUNT } from "@/constant/index.js";

const posts = ref<any>([]);
const searchInput = ref<string>("");

const postValues = computed(() => {
  const cardFilter = searchInput.value.toLowerCase();

  if (!searchInput.value) {
    return posts.value;
  }

  return posts.value.filter((item:any) =>
    item.title.toLowerCase().includes(cardFilter)
  );
});

onMounted(async () => {
  try {
    const response = await axios.get(API_URL);
    posts.value = response.data.filter(
      (item:any) => item.id <= DISPLAY_CARDS_COUNT
    );
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
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
