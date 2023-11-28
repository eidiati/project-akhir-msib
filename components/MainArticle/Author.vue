<template>
  <h4 class="mb-3">Jurnalis</h4>
  <div class="img-thumbnail img-thumbnail-no-borders d-block pb-3">
    <AnimationSkleton
      v-if="loading"
      width_="100px"
      height_="100px"
      class_="me-3"
    />
    <NuxtLink v-else to="/">
      <img :src="user.user_photo" :alt="user.user_name" />
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
          :to="'/author/' + encodeURIComponent(encrypted(user.user_id))"
          class="text-4 pb-2 pt-2 d-block"
          >{{ user.user_name }}</NuxtLink
        >
      </strong>
    </p>
    <p>
      {{ user.user_bio }}
    </p>
  </template>
</template>

<script setup>
defineProps({
  user: Object,
  loading: Boolean,
});
const { encrypted } = useFunction();
</script>
