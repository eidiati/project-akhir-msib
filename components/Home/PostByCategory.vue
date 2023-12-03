<template>
  <div class="col-lg-7 mb-4 pb-2">
    <div
      v-if="posts.loading"
      class="position-relative w-100"
      style="padding-top: 55%"
    >
      <AnimationSkleton
        class="position-absolute top-0 start-0 end-0 bottom-0"
      />
    </div>

    <NuxtLink
      v-else
      :to="'/post/' + encodeURIComponent(posts.data[0].post_slug)"
    >
      <article
        class="thumb-info thumb-info-no-borders thumb-info-bottom-info thumb-info-bottom-info-dark thumb-info-bottom-info-show-more thumb-info-no-zoom border-radius-0"
      >
        <div class="thumb-info-wrapper thumb-info-wrapper-opacity-6">
          <div class="position-relative w-100" style="padding-top: 55%">
            <div class="position-absolute top-0 start-0 end-0 bottom-0">
              <img
                :src="posts.data[0].medium_thumbnail"
                style="width: 100%; height: 100%; object-fit: cover"
                :alt="posts.data[0].post_title"
              />
            </div>
          </div>

          <div class="thumb-info-title bg-transparent p-4">
            <div class="thumb-info-type bg-color-dark px-2 mb-1">
              {{ posts.data[0].post_category }}
            </div>
            <div class="thumb-info-inner mt-1">
              <h2
                class="font-weight-bold text-color-light line-height-2 text-5 mb-0"
              >
                {{ posts.data[0].post_title }}
              </h2>
            </div>
            <div class="thumb-info-show-more-content">
              <p class="text-1 line-height-9 mb-1 mt-2 text-light opacity-5">
                {{ posts.data[0].post_title }}
              </p>
            </div>
          </div>
        </div>
      </article>
    </NuxtLink>
  </div>

  <div class="col-lg-5">
    <template
      v-if="posts.loading"
      v-for="(post, index) in posts.data"
      :key="index"
    >
      <article
        class="thumb-info thumb-info-no-zoom bg-transparent border-radius-0 pb-4 mb-2"
      >
        <div class="row align-items-center pb-1">
          <div class="col-sm-5">
            <div class="position-relative w-100" style="padding-top: 55%">
              <AnimationSkleton
                class="position-absolute top-0 start-0 end-0 bottom-0"
              />
            </div>
          </div>
          <div class="col-sm-7 ps-sm-1">
            <div class="m-0 my-1">
              <AnimationSkleton width_="30%" height_="14px" />
            </div>
            <div class="mt-1 mb-0">
              <AnimationSkleton
                width_="100%"
                height_="14px"
                class_="mt-2 mb-1"
              />
              <AnimationSkleton width_="100%" height_="14px" class_="mb-1" />
            </div>
          </div>
        </div>
      </article>
    </template>
    <template v-else v-for="(post, i) in posts.data" :key="post.post_id">
      <article
        v-if="i > 0 && i < 4"
        class="thumb-info thumb-info-no-zoom bg-transparent border-radius-0 pb-4 mb-2"
      >
        <div class="row align-items-center pb-1">
          <div class="col-sm-5">
            <NuxtLink :to="'/post/' + encodeURIComponent(post.post_slug)">
              <div class="position-relative w-100" style="padding-top: 55%">
                <div class="position-absolute top-0 start-0 end-0 bottom-0">
                  <img
                    :src="post.thumbnail"
                    style="width: 100%; height: 100%; object-fit: cover"
                    :alt="post.post_title"
                  />
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="col-sm-7 ps-sm-1">
            <div class="thumb-info-caption-text">
              <div
                class="thumb-info-type text-light text-uppercase d-inline-block bg-color-dark px-2 m-0 mb-1 float-none"
              >
                <NuxtLink
                  :to="'/post/' + encodeURIComponent(post.post_slug)"
                  class="text-decoration-none text-color-light"
                  >{{ post.post_category }}</NuxtLink
                >
              </div>
              <h2
                class="d-block line-height-2 text-4 text-dark font-weight-bold mt-1 mb-0"
              >
                <NuxtLink
                  :to="'/post/' + encodeURIComponent(post.post_slug)"
                  class="text-decoration-none text-color-dark text-color-hover-primary"
                  >{{ post.post_title }}</NuxtLink
                >
              </h2>
            </div>
          </div>
        </div>
      </article>
    </template>
  </div>
</template>

<script setup>
const posts = ref({
  data: 3,
  loading: true,
});
const { getData } = await useFetchData();

onMounted(async () => {
  posts.value = await getData("post-by-category");
});
</script>
