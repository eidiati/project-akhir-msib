<template>
  <h3
    class="font-weight-bold text-3 mb-0"
    :class="label === 'Postingan Populer' ? null : 'mt-4 mt-md-0'"
  >
    {{ label }}
  </h3>
  <MainArticleListPopulerRecentPost :label="label" />
</template>

<script setup>
defineProps({
  label: String,
});
</script>
