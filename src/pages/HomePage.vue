<template>
  <section class="px-8 py-11">
    <h2 class="pa-2 text-white text-h3">Gallery App</h2>
    <p class="pa-4 text-white text-body-1 text-justify">
      Welcome to the About Photography Blog, where I share my thoughts and
      essays about photography. Whether you're a beginner or a seasoned veteran,
      there's something on this website that will pique your interest. The site
      is divided into several sections. This section covers the basics for
      anyone just starting or looking to discover different genres of
      photography. You can find various photographers in the masters section, as
      well as interesting stories or facts about pictures you may not know.
    </p>
    <section class="card-container">
      <cardSection v-for="post in posts" key="post" :post-data="post" />
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Post } from "@/types/Posts";
import cardSection from "@/components/Card.vue";
import { usePostStore } from "@/stores/PostStore";

const postStore = usePostStore();
const posts = computed(() => postStore.latestPosts());
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-block: 30px;
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
