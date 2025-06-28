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
      {{ postTitle }}
    </p>
    <p class="text-center text-white text-h5 py-4">{{ postId }}</p>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import { POST_IMAGE } from "@/constant/index";
import EditModal from "@/components/EditModal.vue";
import { usePostStore } from "@/stores/PostStore";

const postItemStore = usePostStore();
const modalActive = ref(false);
const route = useRoute();
const postItem = route.params.id;
const postDetails = ref();
const postId = ref("");
const postTitle = ref("");
const editForm = {
  id: " ",
  title: "",
};
const onClose = () => {
  modalActive.value = !modalActive.value;
};

const onSave = () => {
  alert("post updated");
};

onMounted(() => {
  postDetails.value = postItemStore.posts.filter((item) => item.id == postItem);
  console.log(postDetails.value[0].id);
  postId.value = postDetails.value[0].id;
  postTitle.value = postDetails.value[0].title;
  editForm.id = postDetails.value[0].id;
  editForm.title = postDetails.value[0].title;
});
</script>