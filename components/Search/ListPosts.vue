<template>
  <ul class="simple-post-list">
    <template
      v-if="posts.loading"
      v-for="number in posts.data.posts"
      :key="number"
    >
      <li>
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div class="position-relative w-100" style="padding-top: 55%">
              <div class="position-absolute top-0 start-0 end-0 bottom-0">
                <AnimationSkleton width_="100%" height_="100%" />
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-8">
            <div class="d-flex justify-content-between">
              <AnimationSkleton width_="100px" height_="14px" class_="my-2" />
              <AnimationSkleton width_="100px" height_="14px" class_="my-2" />
            </div>
            <AnimationSkleton width_="100%" height_="14px" class_="my-2" />
            <AnimationSkleton width_="100%" height_="14px" class_="my-2" />
            <AnimationSkleton width_="100%" height_="14px" class_="my-2" />
            <AnimationSkleton width_="150px" height_="30px" class_="my-4" />
          </div>
        </div>
      </li>
    </template>
    <template v-else v-for="(post, i) in posts.data.posts" :key="post.post_id">
      <li>
        <LazySearchCardPost :data="post" />
      </li>
    </template>
  </ul>
</template>
<style>
.textEclipse {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
<script setup>
const props = defineProps(["route_api"]);
const route_api = props.route_api;

const posts = ref({
  data: {
    posts: 6,
  },
  loading: true,
});

const { getData } = await useFetchData();

onMounted(async () => {
  posts.value = await getData(route_api);
});
</script>
