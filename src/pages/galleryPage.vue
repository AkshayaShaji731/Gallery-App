<template>
  <section class="gallery-container">
    <search v-model="searchInput"  />
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

const posts = ref([]);
const searchInput = ref("");

const postValues = computed(() => {
  if (!searchInput.value) {
    return posts.value;
  }
  const filter = searchInput.value.toLowerCase();
  return posts.value.filter((item) =>
    item.title.toLowerCase().includes(filter)
  );
});

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
.gallery-container {
  padding: 0 32px;
}
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
