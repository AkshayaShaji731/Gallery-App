<template>
  <div class="d-flex justify-space-between w-100 my-2 px-12">
    <RouterLink to="/gallery" class="text-white">
      <v-btn class="bg-orange-accent-4">Back</v-btn></RouterLink
    >
    <EditModal @close="onClose" @save="onSave" :modal-active="modalActive">
      <div class="d-flex flex-column px-8" v-for="post in posts" :key="post.id">
        <v-text-field v-model="post.id" readonly></v-text-field>
        <v-text-field v-model="post.title"></v-text-field>
        <v-text-field v-model="POST_IMAGE"></v-text-field>
      </div>
    </EditModal>
    <v-btn class="bg-orange-accent-4" @click="onClose">Edit</v-btn>
  </div>
  <v-container
    class="my-8 d-flex justifiy-center align-center flex-column"
    v-for="post in postItemStore.postValue"
    :key="post.id"
  >
    <v-img :src="POST_IMAGE" alt="cardDetail image" class="w-50 cover"></v-img>
    <p class="text-center text-white text-h5 py-4">{{ post.title }}</p>
    <p class="text-center text-white text-h5 py-4">{{ post.id }}</p>
  </v-container>
</template>

<script setup>
import { onMounted } from "vue";

import { POST_IMAGE } from "@/constant/index";
import { usePostStore } from "@/stores/PostStore";

const postItemStore = usePostStore();

onMounted(() => {
  postItemStore.postItemFetch();
});
</script>