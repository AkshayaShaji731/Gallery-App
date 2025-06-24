<template>
  <navbar />
  <RouterView />
  <PostItem />
</template>

<script setup>
import { RouterView } from "vue-router";
import navbar from "@/components/Navbar.vue";
import PostItem from "./pages/PostItem.vue";
</script>

<style>
body {
  background-color: #111827;
  box-sizing: border-box;
}
</style>