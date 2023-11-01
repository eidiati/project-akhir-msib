<template>
  <ul class="simple-post-list">
    <template v-if="loading" v-for="number in numberPost" :key="number">
      <li>
        <div class="row">
          <div class="col-3">
            <div class="position-relative w-100" style="padding-top: 55%">
              <div class="position-absolute top-0 start-0 end-0 bottom-0">
                <AnimationSkleton width_="100%" height_="100%" />
              </div>
            </div>
          </div>
          <div class="col-9">
            <AnimationSkleton width_="100px" height_="14px" class_="my-2" />
            <AnimationSkleton width_="100%" height_="14px" />
          </div>
        </div>
      </li>
    </template>
    <template v-else v-for="(post, i) in posts" :key="post.post_id">
      <li v-if="i < 6">
        <article>
          <div class="post-image">
            <div class="img-thumbnail img-thumbnail-no-borders d-block">
              <NuxtLink :to="post.post_url">
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
            <div class="post-meta">{{ post.post_date }}</div>
            <h4 class="font-weight-normal text-3 mb-0">
              <NuxtLink
                :to="post.post_url"
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
    </template>
  </ul>
</template>

<script setup>
const props = defineProps(["label"]);
const label = props.label;
const posts = ref([
  {
    post_id: "",
    post_title: "",
    post_category: "",
    thumbnail: "",
    medium_thumbnail: "",
    post_url: "",
    post_date: "",
  },
]);
const loading = ref(true);
const numberPost = 6;
const { getData } = useFetchData();

async function getPost() {
  try {
    const datas = await getData("products");
    if (label === "Postingan Populer") {
      posts.value = datas.products.map((data) => ({
        post_id: data.id,
        post_title: `${data.title} ${data.description}`,
        post_category: data.category,
        thumbnail: data.thumbnail,
        medium_thumbnail: data.images[0],
        post_url: `/${data.id}`,
        post_date: "4 september 2023, senin",
      }));
      loading.value = false;
    } else {
      posts.value = datas.products.map((data) => ({
        post_id: data.id,
        post_title: `${data.title} ${data.description}`,
        post_category: data.category,
        thumbnail: data.thumbnail,
        medium_thumbnail: data.images[0],
        post_url: `/${data.id}`,
        post_date: "5 september 2023, selasa",
      }));
      loading.value = false;
    }
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getPost();
});
</script>
