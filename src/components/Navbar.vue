<template>
  <nav class="gallery-nav">
    <div class="app-logo">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2HmvUNeIh7JMikSBZ3v5bV3T8sumpWJ3NOI0SyieSEeMVaWsKTx_qF2Bixk75omg8Fw&usqp=CAU"
        alt="Gallery app"
      />
      <h2>GalleryApp</h2>
    </div>

    <!-- Burger menu -->
    <button class="nav-mob-btn" @click="onHamburgerClick">
      <i class="fa-solid fa-bars text-white"></i>
    </button>
    <ul class="nav-mob" v-if="isMenuDropdownEnable">
      <li v-for="routes in ROUTE_LIST" :key="routes.title">
        <RouterLink :to="routes.path" @click="onHamburgerMenuClose">
          {{ routes.title }}</RouterLink
        >
      </li>
    </ul>
    <!-- end -->

    <!-- menu for lap -->
    <ul class="nav-lap">
      <li v-for="routes in ROUTE_LIST" :key="routes.title">
        <RouterLink
          :to="routes.path"
          :class="[
            {
              'text-white pa-5': true,
              'bg-orange-accent-3 text-white': getRouteStatusByRoute(
                routes.path
              ),
            },
          ]"
          >{{ routes.title }}</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { ROUTE_LIST } from "@/constant/index";

const route = useRoute();
const isMenuDropdownEnable = ref(false);

const getRouteStatusByRoute = (routePath: Object) => {
  return route.path === routePath;
};

const onHamburgerClick = () => {
  isMenuDropdownEnable.value = !isMenuDropdownEnable.value;
};

const onHamburgerMenuClose = () => {
  isMenuDropdownEnable.value = false;
};
</script>

<style scoped>
.app-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.app-logo img {
  width: 20px;
  height: 20px;
}

.app-logo h2 {
  color: #fff;
}

.gallery-nav {
  background-color: #ff731f;
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gallery-nav ul a {
  color: #fff;
}

.nav-mob {
  list-style-type: none;
  position: absolute;
  right: 12%;
  top: 55px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  background-color: #111827;
  padding: 10px;
  font-weight: bold;
}

.nav-lap {
  list-style-type: none;
  display: none;
  gap: 20px;
  font-size: 20px;
  font-weight: bold;
}

.nav-mob :hover {
  background-color: grey;
}
@media screen and (min-width: 768px) {
  .nav-lap {
    display: flex;
  }

  .nav-mob,
  .nav-mob-btn {
    display: none;
  }
}
</style>
