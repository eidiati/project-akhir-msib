<template>
  <!-- author -->
  <span class="me-2 text-capitalize"
    ><i class="far fa-user me-1"></i> By
    <AnimationSkleton
      v-if="loading"
      width_="70px"
      height_="12px"
      class_="d-inline-block"
    />
    <NuxtLink v-else :to="/author/ + article.post_author.author_name">{{
      article.post_author.author_name
    }}</NuxtLink>
  </span>
  <!-- folder -->
  <span class="me-2 text-capitalize"
    ><i class="far fa-folder me-1"></i>
    <AnimationSkleton
      v-if="loading"
      width_="70px"
      height_="12px"
      class_="d-inline-block"
    />
    <NuxtLink v-else :to="/kategori/ + article.post_category">{{
      article.post_category
    }}</NuxtLink>
  </span>
  <!-- comments -->
  <span class="text-capitalize">
    <img
      src="https://api.iconify.design/material-symbols:calendar-month.svg?color=%23777777"
      alt="publishedAt"
      style="width: 17px; height: 17px; margin: -5px 1px 0 0"
    />
    <AnimationSkleton
      v-if="loading"
      width_="70px"
      height_="12px"
      class_="d-inline-block"
    />
    <NuxtLink v-else to="#">{{ article.post_date }}</NuxtLink>
  </span>
</template>
<script setup>
defineProps({
  article: Object,
  loading: Boolean,
});
</script>
