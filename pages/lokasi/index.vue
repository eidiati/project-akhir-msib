<template>
  <div role="main" class="main">
    <div class="container py-4">
      <div class="row pb-1 pt-2">
        <section class="mb-4">
          <ul class="breadcrumb d-block">
            <li><NuxtLink to="/">Beranda</NuxtLink></li>
            <li class="active">lokasi</li>
          </ul>

          <h1 class="text-dark text-capitalize font-weight-bold text-8 m-0">
            Info lokasi
          </h1>
        </section>

        <div class="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
          <div
            v-if="location.loading"
            v-for="number in numberPost"
            :key="number"
            class="col"
          >
            <AnimationSkleton width_="100%" height_="200px" />
          </div>
          <div
            v-else
            v-for="(data, index) in location.data"
            :key="index"
            class="col"
          >
            <LazyCategoryCardPost :data="data" directory="lokasi" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const location = ref({
  data: [],
  loading: true,
});
const numberPost = 6;
const { getData } = await useFetchData();
onMounted(async () => {
  location.value = await getData(`post-location`);
});
useHead({
  title: `Lokasi | Lancang Kuning`,
});
</script>
