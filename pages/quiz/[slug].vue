<template>
  <div role="main" class="main">
    <div class="container py-4">
      <div class="row pb-1 pt-2">
        <section class="mb-4">
          <ul class="breadcrumb d-block">
            <li><NuxtLink to="/">Beranda</NuxtLink></li>
            <li><NuxtLink to="/quiz">Kuis</NuxtLink></li>
            <li class="active">{{ route.params.slug }}</li>
          </ul>
        </section>
        <QuizQuestion />
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
</script>
