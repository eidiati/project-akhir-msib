<template>
  <div class="container">
    <div class="row pb-1">
      <HomePostByCategory />
    </div>
    <div class="row pb-1 pt-2">
      <div class="col-lg-9 col-md-8">
        <LazyHomePost />
        <!-- advertising -->
        <div class="d-flex mb-3 justify-content-center">
          <LazyAdvertising position="bawah" />
        </div>
        <div class="row pb-1 pt-3">
          <!-- popular post -->
          <div class="col-md-6">
            <h3 class="font-weight-bold text-3 mb-0">Postingan Populer</h3>
            <LazyListPosts directory="popular-posts" />
          </div>
          <!-- recent post -->
          <div class="col-md-6">
            <h3 class="font-weight-bold text-3 mb-0 mt-4 mt-md-0">
              Postingan Terkini
            </h3>
            <LazyListPosts directory="recent-posts" />
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4">
        <LazyHomeNewPost />
        <aside class="sidebar pb-4">
          <LazyHomePollingCard />
          <div class="d-flex mt-4 justify-content-center">
            <LazyAdvertising position="bawah" />
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Beranda | Lancang Kuning",
});
</script>
