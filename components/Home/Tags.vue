<template>
  <h5 class="font-weight-semi-bold pt-4 mb-2">Tags</h5>
  <div class="mb-3 pb-1">
    <template v-for="(tag, i) in tags" :key="i">
      <NuxtLink to="/"
        ><span
          class="badge badge-dark badge-sm rounded-pill text-uppercase px-2 py-1 me-1"
          >{{ tag }}</span
        ></NuxtLink
      >
    </template>
  </div>
</template>

<script setup>
const tags = ["Kriminal", "Bisnis", "Kampus", "Prestasi", "Politik"];
</script>
