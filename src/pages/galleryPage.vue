<template>
  <section class="px-8">
    <search v-model="SEARCH_INPUT" />
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

import search from "@/components/search.vue";
import cardSection from "@/components/cardSection.vue";
import { POST, API_BASE, SEARCH_INPUT, CARD_NUM } from "@/constant/constant";

const postValues = computed(() => {
  const filter = SEARCH_INPUT.value.toLowerCase();
  if (!SEARCH_INPUT.value) {
    return POST.value;
  }

  return POST.value.filter((item) => item.title.toLowerCase().includes(filter));
});

onMounted(async () => {
  try {
    const response = await axios.get(API_BASE);
    POST.value = response.data.filter((item) => item.id <= CARD_NUM);
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
