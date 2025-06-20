<template>
  <nav class="gallery-nav">
    <ul>
      <li>
        <RouterLink
          to="/"
          :class="[
            isActiveLink('/')
              ? 'bg-orange-accent-3 pa-4 text-white'
              : 'hover:orange-accent-3 pa-4',
          ]"
          >Home</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/gallery"
          :class="[
            isActiveLink('/gallery')
              ? 'bg-orange-accent-3 pa-4 text-white'
              : 'hover:orange-accent-3 pa-4',
          ]"
          >Gallery</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/about"
          :class="[
            isActiveLink('/about')
              ? 'bg-orange-accent-3 pa-4 text-white'
              : 'hover:orange-accent-3 pa-4',
          ]"
          >About</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
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