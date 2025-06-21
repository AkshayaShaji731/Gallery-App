<template>
  <v-card>
    <v-img :src="POST_IMAGE" alt="card image" />
    <v-card-item>
      <v-card-title>{{ props.postData.title }}</v-card-title>
      <v-card-subtitle>{{ props.postData.id }}</v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { POST_IMAGE } from "@/constant/constant";
const props = defineProps({
  postData: Object,
});
</script>

<style scoped></style>