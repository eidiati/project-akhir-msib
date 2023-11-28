<template>
  <MainArticleMainPost :slug="slug" directory="lokasi" />
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;
</script>
