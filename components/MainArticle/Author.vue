<template>
  <h4 class="mb-3">Author</h4>
  <div class="img-thumbnail img-thumbnail-no-borders d-block pb-3">
    <AnimationSkleton
      v-if="loading"
      width_="100px"
      height_="100px"
      class_="me-3"
    />
    <NuxtLink v-else to="/">
      <img :src="author.author_thumbnail" :alt="author.author_name" />
    </NuxtLink>
  </div>
  <div v-if="loading" class="pt-2" style="margin-left: 100px">
    <AnimationSkleton width_="200px" height_="14px" class_="mb-3" />
    <AnimationSkleton width_="100%" height_="14px" class_="mb-2" />
    <AnimationSkleton width_="100%" height_="14px" class_="mb-2" />
    <AnimationSkleton width_="100%" height_="14px" class_="mb-2" />
  </div>
  <template v-else>
    <p>
      <strong class="name text-capitalize">
        <NuxtLink
          :to="'/author' + author.author_url"
          class="text-4 pb-2 pt-2 d-block"
          >{{ author.author_name }}</NuxtLink
        >
      </strong>
    </p>
    <p>
      {{ author.author_description }}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
      euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem,
      adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo
      eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id
      dui.
    </p>
  </template>
</template>

<script setup>
defineProps({
  author: Object,
  loading: Boolean,
});
</script>
