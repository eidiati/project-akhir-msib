<template>
  <div id="googlemaps" class="google-map mt-0" style="height: 200px">
    <AnimationSkleton v-if="article.loading" width_="100%" height_="100%" />
    <iframe
      v-else
      :src="article.data.post_location.location_embed"
      class="w-100 h-100 border-0"
      title="Lokasi Garuda Cyber Indonesia"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup>
defineProps({
  article: Object,
});
</script>
