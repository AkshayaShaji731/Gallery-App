<template>
  <div class="d-flex justify-space-between w-100 my-2 px-12">
    <RouterLink to="/gallery" class="text-white">
      <v-btn class="bg-orange-accent-4">Back</v-btn></RouterLink
    >
    <EditModal @close="close" @save="saveEdit" :modal-active="modalActive">
      <div class="d-flex flex-column px-8" v-for="post in posts" :key="post.id">
        <v-text-field v-model="post.id" readonly></v-text-field>
        <v-text-field v-model="post.title"></v-text-field>
        <v-text-field v-model="POST_IMAGE"></v-text-field>
      </div>
    </EditModal>
    <v-btn class="bg-orange-accent-4" @click="close">Edit</v-btn>
  </div>
  <v-container
    class="my-8 d-flex justifiy-center align-center flex-column"
    v-for="post in posts"
    :key="post.id"
  >
    <v-img :src="POST_IMAGE" alt="cardDetail image" class="w-50 cover"></v-img>
    <p class="text-center text-white text-h5 py-4">{{ post.title }}</p>
    <p class="text-center text-white text-h5 py-4">{{ post.id }}</p>
  </v-container>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { POST_IMAGE, API_URL } from "@/constant/index";
import EditModal from "@/components/EditModal.vue";

const posts = ref([]);
const route = useRoute();
const postItem = route.params.id;
const modalActive = ref(false);

const close = () => {
  modalActive.value = !modalActive.value;
};

const saveEdit = () => {
  alert("post updated");
};

onMounted(async () => {
  try {
    const response = await axios.get(API_URL);
    posts.value = response.data.filter((item) => item.id == postItem);
  } catch (error) {
    console.error("Error fetching jobs", error);
  }
});
</script>