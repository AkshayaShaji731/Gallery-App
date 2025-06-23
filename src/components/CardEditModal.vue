<template>
  <div class="edit">
    <EditModal @close="toggle" :modal-active="modalActive">
      <div class="d-flex flex-column px-8">
        <v-text-field placeholder="Enter the Url"></v-text-field>
        <v-text-field placeholder="Enter the Title"></v-text-field>
        <v-text-field placeholder="Enter the ID"></v-text-field>
      </div>
    </EditModal>
    <button @click="toggle">edit</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EditModal from "@/components/EditModal.vue";

const modalActive = ref(false);

const toggle = () => {
  modalActive.value = !modalActive.value;
};
</script>