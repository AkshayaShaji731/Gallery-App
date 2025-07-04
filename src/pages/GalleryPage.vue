<template>
  <section class="px-8">
    <div class="d-flex justify-space-between align-center">
      <searchBar v-model="searchInput" />
      <h5 class="text-white text-h6 font-weight-bold">
        Total Posts:{{ postValues.length }}
      </h5>
    </div>
    <h2
      v-if="!hasPosts"
      class="d-flex justify-center align-center width-100 h-screen text-white"
    >
      No Elements found
    </h2>
    <section class="card-container" v-else>
      <cardSection
        v-for="post in postValues"
        :key="post.id"
        :post-data="post"
      />
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

import cardSection from "@/components/Card.vue";
import searchBar from "@/components/SearchInput.vue";
import { DISPLAY_CARDS_COUNT } from "@/constant";
import { usePostStore } from "@/stores/PostStore";
import { Post } from "@/types/Posts";

const searchInput = ref<string>("");
const postStore = usePostStore();
const hasPosts = computed(() => !!postValues.value?.length);

const postValues = computed(() => {
  const filterText = searchInput.value.toLowerCase();
  const isNumber = checkIsValidNumber(filterText);

  if (!searchInput.value) return postStore.posts;

  if (isNumber)
    return postStore.posts.filter(
      (item: Post) => item.id === Number(filterText)
    );

  return postStore.posts.filter((item: Post) =>
    item.title.toLowerCase().includes(filterText)
  );
});

function checkIsValidNumber(input: string) {
  return !isNaN(parseFloat(input)) && isFinite(Number(input));
}

onMounted(async () => {
  const post = await postStore.fetchPosts();
  const data = post.filter((item: Post) => item.id <= DISPLAY_CARDS_COUNT);
  postStore.updatePosts(data);
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
