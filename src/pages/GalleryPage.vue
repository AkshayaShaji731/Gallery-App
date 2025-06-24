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

<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";

import cardSection from "@/components/Card.vue";
import searchBar from "@/components/SearchInput.vue";
import { API_URL, DISPLAY_CARDS_COUNT } from "@/constant/index";

const posts = ref([]);
const searchInput = ref("");

const postValues = computed(() => {
  const filterText = searchInput.value.toLowerCase();
  const isNumber = checkIsValidNumber(filterText);

  if (!searchInput.value) {
    return posts.value;
  }
  if (isNumber) {
    return posts.value.filter((item) => item.id === Number(filterText));
  } else {
    return posts.value.filter((item) =>
      item.title.toLowerCase().includes(filterText)
    );
  }
});

function checkIsValidNumber(input) {
  return !isNaN(parseFloat(input)) && isFinite(Number(input));
}

function isNumericString(str) {
  return !isNaN(parseFloat(str)) && isFinite(Number(str));
}

onMounted(async () => {
  try {
    const response = await axios.get(API_URL);
    posts.value = response.data.filter(
      (item) => item.id <= DISPLAY_CARDS_COUNT
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
