<template>
  <v-card>
    <RouterLink :to="`/postItem/${props.postData.id}`" class="text-black">
      <v-img :src="POST_IMAGE" alt="card image" />
      <v-card-item>
        <v-card-title>{{ props.postData.title }}</v-card-title>
        <v-card-subtitle>{{ props.postData.id }}</v-card-subtitle>
      </v-card-item>
    </RouterLink>
  </v-card>
</template>

<script setup lang="ts">
import { POST_IMAGE } from "@/constant/index";

const props = defineProps({
  postData: {
    required: true,
    type: Object,
  },
});
</script>

<style scoped></style>
