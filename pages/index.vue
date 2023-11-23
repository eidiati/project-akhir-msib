<template>
  <div class="container">
    <div class="row pb-1">
      <HomePostByCategory />
    </div>
    <div class="row pb-1 pt-2">
      <div class="col-md-9">
        <LazyHomePost />
        <!-- advertising -->
        <LazyHomeAdvertising />
        <div class="row pb-1 pt-3">
          <!-- popular post -->
          <div class="col-md-6">
            <h3 class="font-weight-bold text-3 mb-0">Postingan Populer</h3>
            <LazyListPosts directori="popular-posts" />
          </div>
          <!-- recent post -->
          <div class="col-md-6">
            <h3 class="font-weight-bold text-3 mb-0 mt-4 mt-md-0">
              Postingan Terkini
            </h3>
            <LazyListPosts directori="recent-posts" />
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <LazyHomeNewPost />
        <aside class="sidebar pb-4">
          <LazyHomePollingCard />
          <NuxtLink to="/" class="my-4 pt-3 d-block">
            <img
              alt="Porto"
              class="img-fluid"
              src="~/assets/img/blog/blog-ad-1-medium.jpg"
            />
          </NuxtLink>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup></script>
