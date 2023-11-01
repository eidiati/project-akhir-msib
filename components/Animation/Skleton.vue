<template>
  <div :style="{ width: width_, height: height_ }" :class="class_"></div>
</template>

<style lang="scss" scoped>
div {
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>

<script setup>
defineProps({
  width_: String,
  height_: String,
  class_: String,
});
</script>
