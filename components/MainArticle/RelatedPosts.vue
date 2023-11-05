<template>
  <h3 class="font-weight-semi-bold text-3 mb-3">Berita Terkait</h3>
  <main
    v-if="relatedPost.loading"
    class="position-relative w-100 mb-3"
    style="padding-top: 100%"
  >
    <div class="position-absolute top-0 start-0 end-0 bottom-0">
      <AnimationSkleton width_="100%" height_="100%" />
    </div>
  </main>
  <template v-else>
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide mb-3 hoverCard"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner rounded-2 shadow-sm">
        <template v-for="(post, index) in relatedPost.data" :key="post.post_id">
          <div
            :class="index === 0 ? 'carousel-item active' : 'carousel-item'"
            data-bs-interval="3000"
          >
            <NuxtLink :to="post.post_url">
              <div
                class="position-relative w-100"
                style="padding-top: 60%; background-size: cover"
                :style="{
                  backgroundImage: `url(${post.thumbnail})`,
                }"
              ></div>
              <div class="bg-primary py-3 px-4">
                <div
                  class="font-weight-semi-bold text-light text-lg-start mb-3"
                  style="font-size: 12px"
                >
                  <img
                    src="https://api.iconify.design/material-symbols:calendar-month.svg?color=%23ffffff"
                    alt="publishedAt"
                    style="width: 17px; height: 17px; margin: -5px 1px 0 -2px"
                  />
                  {{ post.post_date }}
                </div>
                <div
                  class="font-weight-semi-bold text-light text-lg-start"
                  style="
                    font-size: 12px;
                    text-align: justify;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  "
                >
                  {{ post.post_title }}
                </div>
              </div>
            </NuxtLink>
          </div>
        </template>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
</template>

<script setup>
const props = defineProps(["idArticle"]);
const idArticle = props.idArticle;

const relatedPost = ref({
  data: null,
  loading: true,
});
const { getData } = await useFetchData();

onMounted(async () => {
  relatedPost.value = await getData(`related-articles/${idArticle}`);
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
