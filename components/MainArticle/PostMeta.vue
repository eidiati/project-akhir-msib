<template>
  <!-- author -->
  <span class="me-2"
    ><i class="far fa-user me-1"></i> By
    <AnimationSkleton
      v-if="article.loading"
      width_="70px"
      height_="12px"
      class_="d-inline-block"
    />
    <NuxtLink v-else to="/">{{ article.data.post_author_name }}</NuxtLink>
  </span>
  <!-- folder -->
  <span class="me-2"
    ><i class="far fa-folder me-1"></i>
    <AnimationSkleton
      v-if="article.loading"
      width_="70px"
      height_="12px"
      class_="d-inline-block"
    />
    <NuxtLink v-else to="/">{{ article.data.post_category }}</NuxtLink>
  </span>
  <!-- comments -->
  <span>
    <img
      src="https://api.iconify.design/material-symbols:calendar-month.svg?color=%23777777"
      alt="publishedAt"
      style="width: 17px; height: 17px; margin: -5px 1px 0 0"
    />
    <AnimationSkleton
      v-if="article.loading"
      width_="70px"
      height_="12px"
      class_="d-inline-block"
    />
    <NuxtLink v-else to="/">{{ article.data.post_date }}</NuxtLink>
  </span>
</template>
<script setup>
defineProps({
  article: Object,
});
</script>
