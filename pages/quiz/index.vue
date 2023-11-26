<template>
  <div role="main" class="main">
    <div class="container py-4">
      <div class="row pb-1 pt-2">
        <section class="mb-4">
          <ul class="breadcrumb d-block">
            <li><NuxtLink to="/">Beranda</NuxtLink></li>
            <li class="active">Kuis</li>
          </ul>

          <h1 class="text-dark text-capitalize font-weight-bold text-8 m-0">
            Kuis Lancangkuning.com
          </h1>
        </section>

        <div class="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-2 g-lg-3">
          <div
            v-if="quiz.loading"
            v-for="number in numberPost"
            :key="number"
            class="col"
          >
            <AnimationSkleton width_="100%" height_="200px" />
          </div>
          <div v-else v-for="data in quiz.data" :key="data.quiz_id" class="col">
            <LazyQuizCard :quiz="data" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div ref="infiniteScroll" @scroll="handleScroll" style="height: 10px"></div>
</template>

<script setup>
const quiz = ref({
  data: [""],
  loading: true,
});
const numberPost = 6;
const { getData } = await useFetchData();

const handleScroll = () => {
  const scrollElement = $refs.infiniteScroll;

  // Jika elemen dalam pandangan dan hampir terlihat, panggil fetchData
  if (
    scrollElement.getBoundingClientRect().bottom <=
    window.innerHeight + 100
  ) {
    fetchData();
  }
};

onMounted(async () => {
  quiz.value = await getData("quiz");
});
</script>
