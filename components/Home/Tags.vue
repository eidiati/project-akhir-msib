<template>
  <h5 class="font-weight-semi-bold pt-4 mb-2">Tags</h5>
  <div class="mb-3 pb-1">
    <template v-if="loading">
      <div class="d-flex flex-wrap">
        <div v-for="number in numberPost" :key="number">
          <AnimationSkleton width_="80px" height_="16px" class_="mb-2 me-1" />
        </div>
      </div>
    </template>
    <template v-else v-for="(tag, i) in tags" :key="tag.tag_id">
      <NuxtLink v-if="i < 6" to="/"
        ><span
          class="badge badge-dark badge-sm rounded-pill text-uppercase px-2 py-1 me-1"
          >{{ tag.tag_name }}</span
        ></NuxtLink
      >
    </template>
  </div>
</template>

<script setup>
const tags = ref([
  {
    tag_id: "",
    tag_name: "",
  },
]);
const loading = ref(true);
const numberPost = 4;
const { getData } = useFetchData();

async function getTags() {
  try {
    const datas = await getData("products/categories");
    tags.value = datas.map((data, index) => ({
      tag_id: index,
      tag_name: data,
    }));
    loading.value = false;
  } catch (error) {
    console.log(error);
  }
}
onMounted(() => {
  getTags();
});
</script>
