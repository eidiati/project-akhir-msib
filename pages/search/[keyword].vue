<template>
  <div role="main" class="main">
    <div class="container py-4">
      <div class="row pb-1 pt-2">
        <section class="mb-4">
          <ul class="breadcrumb d-block">
            <li><NuxtLink to="/">Beranda</NuxtLink></li>
            <li class="active">Pencarian</li>
          </ul>
          <h1 class="text-dark text-capitalize font-weight-bold text-8 m-0">
            Berita tentang {{ route.params.keyword }}
          </h1>
          <span
            >Hasil pencarian "{{ route.params.keyword }}",
            {{ totalPostSearch }} hasil ditemukan</span
          >
        </section>
        <div class="row mx-auto">
          <div class="col-12 col-lg-10 mx-auto">
            <SearchTabs :keyword="route.params.keyword" />
          </div>
        </div>
        <div
          class="mt-5 d-flex align-items-center justify-content-center"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const totalPostSearch = useTotalPostSearch();

useHead({
  title: `${route.params.keyword} | Lancang Kuning`,
});
</script>
