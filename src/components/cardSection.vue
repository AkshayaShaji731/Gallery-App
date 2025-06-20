<template>
  <v-card>
    <v-img :src="Image" alt="img" />
    <v-card-item>
      <v-card-title>{{ props.postData.title }}</v-card-title>
      <v-card-subtitle>{{ props.postData.id }}</v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<script setup>
const Image =
  "https://fastly.picsum.photos/id/488/200/200.jpg?hmac=V8mvdG1ON09kNw80-qS00BSFq5gGhqRYoYPJftrsYA8";

const props = defineProps({
  postData: Object,
});
</script>

<style scoped></style>