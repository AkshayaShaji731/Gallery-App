<template>
  <transition name="modal-animation">
    <div v-show="props.modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="props.modalActive" class="modal-inner">
          <i @click="handleClose" class="far fa-times-circle close-icon"></i>
          <slot></slot>
          <div class="d-flex justify-end ga-1 align-center justify-center">
            <v-btn @click="handleSave">Save</v-btn>
            <v-btn @click="handleClose">Cancel</v-btn>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
const props = defineProps({
  modalActive: Boolean,
});

const emit = defineEmits(["close", "save"]);
const handleClose = () => {
  emit("close");
};
const handleSave = () => {
  emit("save");
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

.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-animation-inner-leave-to {
  transform: scale(0.8);
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 75%;
  background: #fff;
  position: absolute;
  top: 25%;
  left: 15%;
  z-index: 1;
}

.modal-inner {
  position: relative;
  max-width: 640px;
  width: 80%;
  background: #fff;
  padding: 100px 0px 50px;
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

@media screen and (min-width: 768px) {
  .modal {
    width: 50%;
    left: 25%;
  }

  .modal-inner {
    padding-bottom: 100px;
  }
}
</style>
