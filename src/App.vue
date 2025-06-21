<template>
  <navbar />
  <!-- <RouterView /> -->
   <cardDetails />
</template>

<script setup>
import { RouterView } from "vue-router";
import navbar from "@/components/navbar.vue";
import cardDetails from "./components/cardDetails.vue";
</script>

<style>
body {
  background-color: #111827;
  box-sizing: border-box;
}
</style>