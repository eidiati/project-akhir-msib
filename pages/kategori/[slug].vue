<template>
  <div role="main" class="main">
    <div class="container py-4">
      <div class="row pb-1 pt-2">
        <section class="mb-4">
          <ul class="breadcrumb d-block">
            <li><NuxtLink to="/">Beranda</NuxtLink></li>
            <li v-if="!category.loading" class="active">
              {{ category.data.category_name }}
            </li>
          </ul>

          <h1
            v-if="!category.loading"
            class="text-dark text-capitalize font-weight-bold text-8 m-0"
          >
            {{ category.data.category_name }}
          </h1>
        </section>

        <div class="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
          <div
            v-if="category.loading"
            v-for="number in numberPost"
            :key="number"
            class="col"
          >
            <AnimationSkleton width_="100%" height_="200px" />
          </div>
          <div
            v-else
            v-for="(data, index) in category.data.category_posts"
            :key="index"
            class="col"
          >
            <LazyCategoryCardPost :data="data" directory="kategori" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = ref(route.params.slug);

const category = ref({
  data: {
    category_posts: [1, 2, 3, 4, 5, 6],
  },
  loading: true,
});
const numberPost = 6;
const { getData } = await useFetchData();
onMounted(async () => {
  const res = await getData(`post-category/${slug}`);
  category.value = res;

  useHead({
    title: `${res.data.category_name} | Lancang Kuning`,
  });
});
</script>
