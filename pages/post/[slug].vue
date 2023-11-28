<template>
  <MainArticleMainPost :slug="slug" directory="post" />
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;
</script>
