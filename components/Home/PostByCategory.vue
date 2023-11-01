<template>
  <div class="col-lg-7 mb-4 pb-2">
    <div
      v-if="loading"
      class="position-relative w-100"
      style="padding-top: 55%"
    >
      <AnimationSkleton
        class="position-absolute top-0 start-0 end-0 bottom-0"
      />
    </div>

    <NuxtLink v-else :to="posts[0].post_url">
      <article
        class="thumb-info thumb-info-no-borders thumb-info-bottom-info thumb-info-bottom-info-dark thumb-info-bottom-info-show-more thumb-info-no-zoom border-radius-0"
      >
        <div class="thumb-info-wrapper thumb-info-wrapper-opacity-6">
          <div class="position-relative w-100" style="padding-top: 55%">
            <div class="position-absolute top-0 start-0 end-0 bottom-0">
              <img
                :src="posts[0].medium_thumbnail"
                style="width: 100%; height: 100%; object-fit: cover"
                alt="How To Take Better Concert Pictures in 30 Seconds"
              />
            </div>
          </div>

          <div class="thumb-info-title bg-transparent p-4">
            <div class="thumb-info-type bg-color-dark px-2 mb-1">
              {{ posts[0].post_category }}
            </div>
            <div class="thumb-info-inner mt-1">
              <h2
                class="font-weight-bold text-color-light line-height-2 text-5 mb-0"
              >
                {{ posts[0].post_title }}
              </h2>
            </div>
            <div class="thumb-info-show-more-content">
              <p class="text-1 line-height-9 mb-1 mt-2 text-light opacity-5">
                {{ posts[0].post_description }}
              </p>
            </div>
          </div>
        </div>
      </article>
    </NuxtLink>
  </div>

  <div class="col-lg-5">
    <template v-if="loading" v-for="(post, index) in numberPost" :key="index">
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
    <template v-else v-for="(post, i) in posts" :key="post.post_id">
      <article
        v-if="i > 0 && i < 4"
        class="thumb-info thumb-info-no-zoom bg-transparent border-radius-0 pb-4 mb-2"
      >
        <div class="row align-items-center pb-1">
          <div class="col-sm-5">
            <NuxtLink :to="post.post_url">
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
                  :to="post.post_url"
                  class="text-decoration-none text-color-light"
                  >{{ post.post_category }}</NuxtLink
                >
              </div>
              <h2
                class="d-block line-height-2 text-4 text-dark font-weight-bold mt-1 mb-0"
              >
                <NuxtLink
                  :to="post.post_url"
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
import blog46 from "~/assets/img/blog/default/blog-46.jpg";
import blog55 from "~/assets/img/blog/default/blog-55.jpg";
import blog56 from "~/assets/img/blog/default/blog-56.jpg";

const numberPost = 3;
const posts = ref([
  {
    post_id: 1,
    post_title: "How To Take Better Concert Pictures in 30 Seconds",
    post_category: "Pendidikan",
    thumbnail: blog46,
    medium_thumbnail: blog46,
    post_url: `/1`,
    post_date: "4 september 2023, senin",
    post_description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet expedita dolore corporis ex, dolorem corrupti atque aut illo ab ut maiores sint doloribus obcaecati qui laborum, necessitatibus cum. Harum, at",
  },
  {
    post_id: 2,
    post_title: "Simple Ways to Have a Pretty Face",
    post_category: "Bisnis",
    thumbnail: blog55,
    medium_thumbnail: blog55,
    post_url: `/2`,
    post_date: "4 september 2023, senin",
    post_description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet expedita dolore corporis ex, dolorem corrupti atque aut illo ab ut maiores sint doloribus obcaecati qui laborum, necessitatibus cum. Harum, at",
  },
  {
    post_id: 3,
    post_title: "Ranking the greatest players in basketball",
    post_category: "Wisata",
    thumbnail: blog56,
    medium_thumbnail: blog56,
    post_url: `/3`,
    post_date: "4 september 2023, senin",
    post_description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet expedita dolore corporis ex, dolorem corrupti atque aut illo ab ut maiores sint doloribus obcaecati qui laborum, necessitatibus cum. Harum, at",
  },
  {
    post_id: 4,
    post_title: "4 Ways to Look Cool in Glasses",
    post_category: "Politik",
    thumbnail: blog56,
    medium_thumbnail: blog56,
    post_url: `/4`,
    post_date: "4 september 2023, senin",
    post_description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet expedita dolore corporis ex, dolorem corrupti atque aut illo ab ut maiores sint doloribus obcaecati qui laborum, necessitatibus cum. Harum, at",
  },
]);
const loading = ref(true);

const { getData } = useFetchData();
async function getPostByCategory() {
  try {
    const datas = await getData("products");
    posts.value = datas.products.map((data) => ({
      post_id: data.id,
      post_title: `${data.title} ${data.description}`,
      post_category: data.category,
      thumbnail: data.thumbnail,
      medium_thumbnail: data.images[0],
      post_url: `/${data.id}`,
      post_date: "4 september 2023, senin",
      post_description: data.description,
    }));
    loading.value = false;
  } catch (error) {
    console.log(error);
  }
}
onMounted(() => {
  getPostByCategory();
});
</script>
