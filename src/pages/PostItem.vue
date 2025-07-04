<template>
  <div class="d-flex justify-space-between w-100 my-2 px-12" v-if="postDetails">
    <RouterLink to="/gallery" class="text-white">
      <v-btn class="bg-orange-accent-4">Back</v-btn></RouterLink
    >
    <EditModal @close="onClose" @save="onSave" :modal-active="modalActive">
      <div class="d-flex flex-column">
        <v-text-field v-model="postDetails.id" readonly></v-text-field>
        <v-text-field v-model="postDetails.title"></v-text-field>
        <v-text-field v-model="POST_IMAGE"></v-text-field>
      </div>
    </EditModal>
    <v-btn class="bg-orange-accent-4" @click="onClose">Edit</v-btn>
  </div>
  <v-container
    class="my-8 d-flex justifiy-center align-center flex-column"
    v-if="postDetails"
  >
    <v-img :src="POST_IMAGE" alt="cardDetail image" class="w-50 cover"></v-img>
    <p class="text-center text-white text-h5 py-4">{{ postDetails.title }}</p>
    <p class="text-center text-white text-h5 py-4">{{ postDetails.id }}</p>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

import { POST_IMAGE } from "@/constant/index";
import EditModal from "@/components/EditModal.vue";
import { usePostStore } from "@/stores/PostStore";

const route = useRoute();
const postItem = route.params.id as string;
const modalActive = ref<boolean>(false);

const postItemStore = usePostStore();
const postDetails = postItemStore.getPostByID(postItem);

const onClose = () => {
  modalActive.value = !modalActive.value;
};

const onSave = () => {
  alert("post updated");
  modalActive.value = !modalActive.value;
};
</script>
