<template>
  <nav class="gallery-nav">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/gallery">Gallery</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.gallery-nav {
  background-color: #ff731f;
  width: 100%;
  padding: 30px;
  /* display: block; */
  position: relative;
}

.gallery-nav ul {
  list-style-type: none;
  display: flex;
  position: absolute;
  top: 12px;
  right: 16px;
  gap: 20px;
  font-size: 20px;
  font-weight: bold;
}

.gallery-nav ul a {
  color: #fff;
}
</style>