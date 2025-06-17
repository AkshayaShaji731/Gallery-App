<template>
  <section class="card-container">
    <section v-for="post in posts" :key="post.id" class="gallery-card">
      <div class="img-container">
        <img :src="Image" alt="img" />
      </div>
      <div class="img-details-container">
        <span class="img-title">{{ post.title }}</span>
        <span class="img-id">{{ post.id }}</span>
      </div>
    </section>
  </section>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const posts = ref([]);
const Image =
  "https://fastly.picsum.photos/id/488/200/200.jpg?hmac=V8mvdG1ON09kNw80-qS00BSFq5gGhqRYoYPJftrsYA8";

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    posts.value = response.data;
  } catch (error) {
    console.error("Error fetching jobs", error);
  }
});
</script>

<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-inline: 16px;
  gap: 16px;
  margin-top: 30px;
}

.gallery-card {
  display: flex;
  flex-direction: column;
  border: 2px solid #1f2937;
  border-radius: 4px;
}

.img-container {
  padding-top: 8px;
  border-bottom: 2px solid #1f2937;
  max-width: 400px;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-details-container {
  display: flex;
  flex-direction: column;
  padding: 12px;
  text-align: center;
}

.img-title {
  font-weight: 500;
  color: #e5e7eb;
  line-height: 20px;
  text-transform: capitalize;
}

.img-id {
  color: #9ca3af;
  font-size: 12px;
  line-height: 16px;
}

@media screen and (min-width: 768px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1024px) {
  .card-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

</style>