<template>
  <nav class="gallery-nav">
    <ul>
      <li v-for="routes in ROUTE_LIST" :key="routes.title">
        <RouterLink
          :to="`${routes.path}`"
          :class="[
            getRouteStatus(`${routes.path}`)
              ? 'bg-orange-accent-3 pa-5 text-white'
              : 'hover:orange-accent-3 pa-5',
          ]"
          >{{ routes.title }}</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ROUTE_LIST} from "@/constant/constant";

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
  justify-content: flex-end;
  gap: 20px;
  font-size: 20px;
  font-weight: bold;
}

.gallery-nav ul a {
  color: #fff;
}
</style>