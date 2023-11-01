<template>
  <h3 class="font-weight-semi-bold text-3 mb-3">Berita Terkait</h3>
  <main
    v-if="relatedPost.loading"
    class="position-relative w-100 mb-3"
    style="padding-top: 85%"
  >
    <div class="position-absolute top-0 start-0 end-0 bottom-0">
      <AnimationSkleton width_="100%" height_="100%" />
    </div>
  </main>
  <template v-else>
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide mb-3"
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
                  class="font-weight-semi-bold text-light"
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
const relatedPost = ref({
  data: null,
  loading: true,
});
const { getData } = useFetchData();
const getRelatedPost = async () => {
  try {
    const datas = await getData("products");
    relatedPost.value = {
      data: datas.products
        .map((data) => ({
          post_id: data.id,
          post_title: `${data.title} ${data.description}`,
          post_category: data.category,
          thumbnail: data.thumbnail,
          medium_thumbnail: data.images[0],
          post_url: `/${data.id}`,
          post_date: "4 september 2023, senin",
        }))
        .slice(0, 5),
      loading: false,
    };
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  getRelatedPost();
});
</script>
