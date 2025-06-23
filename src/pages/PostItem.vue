<template>
  <div class="d-flex justify-space-between w-100 my-2 px-12">
    <v-btn class="bg-orange-accent-4">
      <RouterLink to="/" class="text-white">back</RouterLink>
    </v-btn>
    <v-btn class="bg-orange-accent-4">Edit</v-btn>
  </div>
  <v-container
    class="my-8 d-flex justifiy-center align-center flex-column"
    v-for="post in posts"
    :key="post.id"
  >
    <v-img :src="POST_IMAGE" alt="cardDetail image " class="w-50 cover"></v-img>
    <p class="text-center text-white text-h5 py-4">{{ post.title }}</p>
    <p class="text-center text-white text-h5 py-4">{{ post.id }}</p>
  </v-container>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { POST_IMAGE, API_BASE } from "@/contant/main";

const posts = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(API_BASE);
    posts.value = response.data.filter((item) => item.id <= 1);
  } catch (error) {
    console.error("Error fetching jobs", error);
  }
});
</script>