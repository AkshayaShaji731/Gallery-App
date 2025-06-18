<template>
  <nav class="gallery-nav">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="./pages/galleryPage.vue">Gallery</a></li>
      <li><a href="./pages/AboutPage.vue">About</a></li>
    </ul>
  </nav>
</template>

<script></script>

<style scoped>

.gallery-nav {
  background-color: #ff731f;
  position: fixed;
  top: 0;
  left: 0px;
  width: 100%;
  padding: 30px;
}

.gallery-nav ul {
  list-style-type: none;
  color: #fff;
  display: flex;
  gap: 20px;
  font-size: 20px;
  font-weight: bold;
}

</style>