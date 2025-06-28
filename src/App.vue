<template>
  <navbar />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import navbar from "@/components/Navbar.vue";
</script>

<style>
body {
  background-color: #111827;
  box-sizing: border-box;
}
</style>