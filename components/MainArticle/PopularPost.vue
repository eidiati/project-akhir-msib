<template>
  <h3 class="font-weight-semi-bold text-3 mb-3">Berita Terkait</h3>
  <main
    v-if="popularPost.loading"
    class="position-relative w-100 mb-3"
    style="padding-top: 100%"
  >
    <div class="position-absolute top-0 start-0 end-0 bottom-0">
      <AnimationSkleton width_="100%" height_="100%" />
    </div>
  </main>
  <template v-else>
    <template v-for="(post, index) in popularPost.data" :key="post.post_id">
      <div v-if="index < 1" class="">
        <article
          class="thumb-info thumb-info-no-zoom bg-transparent border-radius-0 pb-2 mb-2"
        >
          <div class="row">
            <div class="col">
              <NuxtLink :to="'/post/' + post.post_slug">
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
                    :to="'/post/' + post.post_slug"
                    class="text-decoration-none text-color-default text-capitalize"
                    >{{ post.post_date }}</NuxtLink
                  >
                </div>
                <h4
                  class="d-block line-height-2 text-4 text-dark font-weight-bold mb-0"
                >
                  <NuxtLink
                    :to="'/post/' + post.post_slug"
                    class="text-decoration-none text-color-dark text-color-hover-primary"
                    >{{ post.post_title }}</NuxtLink
                  >
                </h4>
              </div>
            </div>
          </div>
        </article>
      </div>
      <ul v-else class="simple-post-list">
        <li>
          <article>
            <div class="post-image">
              <div class="img-thumbnail img-thumbnail-no-borders d-block">
                <NuxtLink :to="'/post/' + post.post_slug">
                  <img
                    :src="post.thumbnail"
                    class="border-radius-0"
                    width="50"
                    height="50"
                    :alt="post.post_title"
                  />
                </NuxtLink>
              </div>
            </div>
            <div class="post-info">
              <div class="post-meta text-capitalize">{{ post.post_date }}</div>
              <h4 class="font-weight-normal text-3 mb-0">
                <NuxtLink
                  :to="'/post/' + post.post_slug"
                  class="text-dark"
                  style="
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  "
                  >{{ post.post_title }}</NuxtLink
                >
              </h4>
            </div>
          </article>
        </li>
      </ul>
    </template>
  </template>
</template>

<script setup>
const props = defineProps(["post_id"]);
const post_id = ref(props.post_id);
const popularPost = ref({
  data: null,
  loading: true,
});
const { getData } = await useFetchData();

onMounted(async () => {
  popularPost.value = await getData(`related-articles/${post_id.value}`);
});
</script>
<style>
.hoverCard {
  transition: all 0.3s ease-in-out;
}
.hoverCard:hover {
  filter: brightness(0.7);
}
</style>
