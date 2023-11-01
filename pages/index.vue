<template>
  <div class="container">
    <div class="row pb-1">
      <HomePostByCategory />
    </div>
    <div class="row pb-1 pt-2">
      <div class="col-md-9">
        <HomePost />
        <!-- advertising -->
        <HomeAdvertising />
        <div class="row pb-1 pt-3">
          <!-- popular post -->
          <div class="col-md-6">
            <HomePopularRecentPost label="Postingan Populer" />
          </div>
          <!-- recent post -->
          <div class="col-md-6">
            <HomePopularRecentPost label="Postingan Terkini" />
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <HomeNewPost />
        <aside class="sidebar pb-4">
          <HomeTags />
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
