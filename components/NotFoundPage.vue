<template>
  <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="text-center">
      <h1 class="display-1 fw-bold">404</h1>
      <p class="fs-3">
        <span class="text-danger">Ups!</span> Halaman tidak ditemukan.
      </p>
      <p class="lead">Halaman yang Anda cari tidak ada.</p>
      <NuxtLink to="/" class="btn btn-primary">Kembali ke Beranda</NuxtLink>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: false,
});
useHead({
  title: "Halaman Tidak Ditemukan | Lancang Kuning",
});
</script>
