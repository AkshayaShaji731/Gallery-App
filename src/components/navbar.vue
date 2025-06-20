<template>
  <nav class="gallery-nav">
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/gallery">Gallery</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
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