<template>
  <!-- author -->
  <span class="me-2 text-capitalize"
    ><i class="far fa-user me-1"></i>
    <AnimationSkleton
      v-if="loading"
      width_="70px"
      height_="12px"
      class_="d-inline-block"
    />
    <span v-else class="text-primary">{{ article.post_user.user_name }}</span>
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
    <span v-else class="text-primary">{{ article.post_category }}</span>
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
    <span v-else class="text-primary">{{ article.post_date }}</span>
  </span>
</template>
<script setup>
defineProps({
  article: Object,
  loading: Boolean,
});
</script>
