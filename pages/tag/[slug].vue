<template>
  <div role="main" class="main">
    <div class="container py-4">
      <div class="row pb-1 pt-2">
        <section class="mb-4">
          <ul class="breadcrumb d-block">
            <li><NuxtLink to="/">Beranda</NuxtLink></li>
            <li class="active">Tag</li>
          </ul>

          <h1 class="text-dark text-capitalize font-weight-bold text-8 m-0">
            Berita Tentang {{ tag.data.tag_name }}
          </h1>
        </section>

        <div class="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
          <div
            v-if="tag.loading"
            v-for="number in numberPost"
            :key="number"
            class="col"
          >
            <AnimationSkleton width_="100%" height_="200px" />
          </div>
          <div
            v-else
            v-for="(data, index) in tag.data.tag_posts"
            :key="index"
            class="col"
          >
            <CategoryCardPost :data="data" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

const tag = ref({
  data: {
    tag_posts: [1, 2, 3, 4, 5, 6],
  },
  loading: true,
});
const numberPost = 6;
const { getData } = await useFetchData();
onMounted(async () => {
  const res = await getData(`tags/${slug}`);
  tag.value = res;
  useHead({
    title: `${res.data.tag_name} | Lancang Kuning`,
  });
});
</script>
