<template>
  <div class="d-flex justify-space-between w-100 my-2 px-12">
    <RouterLink to="/gallery" class="text-white">
      <v-btn class="bg-orange-accent-4">Back</v-btn></RouterLink
    >
    <EditModal @close="onClose" @save="onSave" :modal-active="modalActive">
      <div class="d-flex flex-column px-8">
        <v-text-field v-model="editForm.id" readonly></v-text-field>
        <v-text-field v-model="editForm.title"></v-text-field>
        <v-text-field v-model="POST_IMAGE"></v-text-field>
      </div>
    </EditModal>
    <v-btn class="bg-orange-accent-4" @click="onClose">Edit</v-btn>
  </div>
  <v-container class="my-8 d-flex justifiy-center align-center flex-column">
    <v-img :src="POST_IMAGE" alt="cardDetail image" class="w-50 cover"></v-img>
    <p class="text-center text-white text-h5 py-4">
      {{ postValue[0].title }}
    </p>
    <p class="text-center text-white text-h5 py-4">
      {{ postValue[0].id }}
    </p>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import { POST_IMAGE } from "@/constant/index";
import EditModal from "@/components/EditModal.vue";
import { usePostStore } from "@/stores/PostStore";
import { DISPLAY_CARDS_COUNT } from "@/constant";


const postItemStore = usePostStore();
const modalActive = ref(false);
const route = useRoute();
const postItem = route.params.id;
const postValue = postItemStore.posts.filter((item) => item.id == postItem);
const editForm = {
  id: " ",
  title: ""
};
const onClose = () => {
  modalActive.value = !modalActive.value;
};

const onSave = () => {
  alert("post updated");
};

onMounted(async () => {
  const post = await postItemStore.postFetch();
  const data = post.filter((item) => item.id <= DISPLAY_CARDS_COUNT);
  postItemStore.updatePost(data);
  editForm.id= postValue[0].id;
  editForm.title= postValue[0].title;
});
</script>