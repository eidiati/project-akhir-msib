<template>
  <template v-for="(post, index) in posts" :key="index">
    <div class="heading heading-border heading-middle-border">
      <h3 class="text-4">
        <strong
          class="font-weight-bold text-1 px-3 text-light py-2"
          :class="post.bgColor"
          >{{ post.label }}</strong
        >
      </h3>
    </div>

    <div class="row pb-1">
      <div class="col-lg-6 mb-4 pb-1">
        <article v-if="post.loading">
          <div class="row">
            <div class="col">
              <div class="position-relative w-100" style="padding-top: 55%">
                <div class="position-absolute top-0 start-0 end-0 bottom-0">
                  <AnimationSkleton width_="100%" height_="100%" />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <AnimationSkleton width_="200px" height_="14px" class_="my-2" />
              <AnimationSkleton width_="100%" height_="14px" />
            </div>
          </div>
        </article>
        <article
          v-else
          class="thumb-info thumb-info-no-zoom bg-transparent border-radius-0 pb-2 mb-2"
        >
          <div class="row">
            <div class="col">
              <NuxtLink :to="post.articles[0].post_url">
                <div class="position-relative w-100" style="padding-top: 55%">
                  <div class="position-absolute top-0 start-0 end-0 bottom-0">
                    <img
                      :src="post.articles[0].medium_thumbnail"
                      style="width: 100%; height: 100%; object-fit: cover"
                      :alt="post.articles[0].post_title"
                    />
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="thumb-info-caption-text">
                <div class="d-inline-block text-default text-1 mt-2 float-none">
                  <NuxtLink
                    :to="post.articles[0].post_url"
                    class="text-decoration-none text-color-default"
                    >{{ post.articles[0].post_date }}</NuxtLink
                  >
                </div>
                <h4
                  class="d-block line-height-2 text-4 text-dark font-weight-bold mb-0"
                >
                  <NuxtLink
                    :to="post.articles[0].post_url"
                    class="text-decoration-none text-color-dark text-color-hover-primary"
                    >{{ post.articles[0].post_title }}</NuxtLink
                  >
                </h4>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="col-lg-6">
        <template
          v-if="post.loading"
          v-for="number in numberPost"
          :key="number"
        >
          <article class="mb-2">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <div class="position-relative w-100" style="padding-top: 55%">
                  <div class="position-absolute top-0 start-0 end-0 bottom-0">
                    <AnimationSkleton width_="100%" height_="100%" />
                  </div>
                </div>
              </div>
              <div class="col-sm-8 ps-sm-0">
                <AnimationSkleton width_="100px" height_="14px" class_="my-2" />
                <AnimationSkleton width_="100%" height_="14px" />
              </div>
            </div>
          </article>
        </template>
        <template
          v-else
          v-for="(article, index) in post.articles"
          :key="article.post_id"
        >
          <article
            v-if="index > 0 && index < 4"
            class="thumb-info thumb-info-no-zoom bg-transparent border-radius-0 pb-4 mb-2"
          >
            <div class="row align-items-center pb-1">
              <div class="col-sm-4">
                <NuxtLink :to="article.post_url">
                  <div class="position-relative w-100" style="padding-top: 55%">
                    <div class="position-absolute top-0 start-0 end-0 bottom-0">
                      <img
                        :src="article.thumbnail"
                        style="width: 100%; height: 100%; object-fit: cover"
                        :alt="article.post_title"
                      />
                    </div>
                  </div>
                </NuxtLink>
              </div>
              <div class="col-sm-8 ps-sm-0">
                <div class="thumb-info-caption-text">
                  <div class="d-inline-block text-default text-1 float-none">
                    <NuxtLink
                      :to="article.post_url"
                      class="text-decoration-none text-color-default"
                      >{{ article.post_date }}</NuxtLink
                    >
                  </div>
                  <h4
                    class="d-block pb-2 line-height-2 text-3 text-dark font-weight-bold mb-0"
                  >
                    <NuxtLink
                      :to="article.post_url"
                      class="text-decoration-none text-color-dark text-color-hover-primary"
                      >{{ article.post_title }}</NuxtLink
                    >
                  </h4>
                </div>
              </div>
            </div>
          </article>
        </template>
      </div>
    </div>
  </template>
</template>

<script setup>
import blog46 from "~/assets/img/blog/default/blog-46.jpg";
const numberPost = 3;
const posts = ref([
  {
    label: "Berita Advetorial",
    bgColor: "bg-secondary",
    loading: true,
    articles: [
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
    ],
  },
  {
    label: "Malay Homeland",
    bgColor: "bg-primary",
    loading: true,
    articles: [
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
    ],
  },
  {
    label: "Berita Menarik Lainnya",
    bgColor: "bg-warning",
    loading: true,
    articles: [
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
    ],
  },
]);

const { getData } = useFetchData();
async function getPostAdvetorial() {
  try {
    const datas = await getData("products");
    const advetorial = posts.value[0];
    advetorial.loading = false;
    advetorial.articles = datas.products.map((data) => ({
      post_id: data.id,
      post_title: `${data.title} ${data.description}`,
      post_category: data.category,
      thumbnail: data.thumbnail,
      medium_thumbnail: data.images[0],
      post_url: `/${data.id}`,
      post_date: "4 september 2023, senin",
      post_description: data.description,
    }));
    posts.value[0] = advetorial;
  } catch (error) {
    console.log(error);
  }
}
async function getPostMalayHomeland() {
  try {
    const datas = await getData("products");
    const malayhomeland = posts.value[1];
    malayhomeland.loading = false;
    malayhomeland.articles = datas.products.map((data) => ({
      post_id: data.id,
      post_title: `${data.title} ${data.description}`,
      post_category: data.category,
      thumbnail: data.thumbnail,
      medium_thumbnail: data.images[0],
      post_url: `/${data.id}`,
      post_date: "4 september 2023, senin",
      post_description: data.description,
    }));
    posts.value[1] = malayhomeland;
  } catch (error) {
    console.log(error);
  }
}
async function getPostIntresting() {
  try {
    const datas = await getData("products");
    const intresting = posts.value[2];
    intresting.loading = false;
    intresting.articles = datas.products.map((data) => ({
      post_id: data.id,
      post_title: `${data.title} ${data.description}`,
      post_category: data.category,
      thumbnail: data.thumbnail,
      medium_thumbnail: data.images[0],
      post_url: `/${data.id}`,
      post_date: "4 september 2023, senin",
      post_description: data.description,
    }));
    posts.value[2] = intresting;
  } catch (error) {
    console.log(error);
  }
}
onMounted(() => {
  getPostAdvetorial();
  getPostMalayHomeland();
  getPostIntresting();
});
</script>
