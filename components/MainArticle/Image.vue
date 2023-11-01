<template>
  <div class="d-flex justify-content-center">
    <AnimationSkleton v-if="article.loading" width_="100%" height_="500px" />
    <NuxtLink v-else to="/">
      <img
        :src="article.data.first_image"
        class="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0"
        :alt="article.data.post_title"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  article: Object,
});
</script>
