<template>
  <transition name="modal-animation">
    <div v-show="props.modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="props.modalActive" class="modal-inner">
          <i @click="close" class="far fa-times-circle close-icon"></i>
          <slot></slot>
          <div class="d-flex justify-end px-8 ga-1">
            <v-btn>Save</v-btn>
            <v-btn @click="close">Cancel</v-btn>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  modalActive: Boolean,
});

const emit = defineEmits(["close"]);
const close = () => {
  emit("close");
};
</script>

<style scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-active {
  opacity: 0;
  transform: scale(0.8);
}

.modal-animation-inner-leave-active {
  transform: scale(0.8);
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 50%;
  background: #fff;
  position: absolute;
  top: 25%;
  left: 25%;
  z-index: 1;
}

.modal-inner {
  position: relative;
  max-width: 640px;
  width: 80%;
  background: #fff;
  padding: 100px 0px;
}

.close-icon {
  position: absolute;
  top: 35px;
  right: 0px;
  font-size: 20px;
  cursor: pointer;
}

.close-icon:hover {
  color: crimson;
}
</style>