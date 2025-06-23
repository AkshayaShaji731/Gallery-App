<template>
  <transition name="model-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <i class="far fa-times-circle"></i>
        <div>
          <h1>This is modal header</h1>
          <p>This is a modal message</p>
        </div>
        <v-btn>Close</v-btn>
      </transition>
    </div>
  </transition>
</template>

<script setup>
</script>

<style scoped>
</style>