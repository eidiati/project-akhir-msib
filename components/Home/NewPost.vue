import { NuxtLink } from '#build/components';
<template>
  <h3 class="font-weight-bold text-3 pt-1">Berita Terbaru</h3>

  <div class="pb-2">
    <div
      v-if="posts.loading"
      v-for="number in posts.data"
      :key="number"
      class="mb-4 pb-2"
    >
      <article class="pb-2 mb-2">
        <div class="row">
          <div class="col">
            <div class="position-relative w-100" style="padding-top: 90%">
              <div class="position-absolute top-0 start-0 end-0 bottom-0">
                <AnimationSkleton width_="100%" height_="100%" />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <AnimationSkleton width_="100px" height_="14px" class_="my-2" />
            <AnimationSkleton width_="100%" height_="14px" />
          </div>
        </div>
      </article>
    </div>

    <template v-else v-for="(post, index) in posts.data" :key="post.post_id">
      <div v-if="index < 2" class="mb-4 pb-2">
        <article
          class="thumb-info thumb-info-no-zoom bg-transparent border-radius-0 pb-2 mb-2"
        >
          <div class="row">
            <div class="col">
              <NuxtLink :to="post.post_url">
                <img
                  :src="post.thumbnail"
                  class="img-fluid border-radius-0"
                  :alt="post.post_title"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="thumb-info-caption-text">
                <div class="d-inline-block text-default text-1 mt-2 float-none">
                  <NuxtLink
                    :to="post.post_url"
                    class="text-decoration-none text-color-default text-capitalize"
                    >{{ post.post_date }}</NuxtLink
                  >
                </div>
                <h4
                  class="d-block line-height-2 text-4 text-dark font-weight-bold mb-0"
                >
                  <NuxtLink
                    :to="post.post_url"
                    class="text-decoration-none text-color-dark text-color-hover-primary"
                    >{{ post.post_title }}</NuxtLink
                  >
                </h4>
              </div>
            </div>
          </div>
        </article>
      </div>
    </template>
  </div>
</template>

<script setup>
const posts = ref({
  data: 1,
  loading: true,
});

const { getData } = await useFetchData();

onMounted(async () => {
  posts.value = await getData("latest-news");
});
</script>
