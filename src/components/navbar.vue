<template>
  <nav class="gallery-nav">
    <ul>
      <li v-for="nav in NAV_TITLE" :key="nav.title">
        <RouterLink
          :to="`${nav.path}`"
          :class="[
            getRouteStatus(`${nav.path}`)
              ? 'bg-orange-accent-3 pa-5 text-white'
              : 'hover:orange-accent-3 pa-5',
          ]"
          >{{ nav.title }}</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import { NAV_TITLE } from "@/constant/constant";

const getRouteStatus = (routePath) => {
  const route = useRoute();

  return route.path === routePath;
};

</script>

<style scoped>
.gallery-nav {
  background-color: #ff731f;
  width: 100%;
  padding: 30px;
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