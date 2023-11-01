<template>
  <div role="main" class="main">
    <div class="container py-4">
      <div class="row pb-1 pt-2">
        <section class="mb-4">
          <ul class="breadcrumb d-block">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li class="active">{{ route.params.name }}</li>
          </ul>

          <h1 class="text-dark text-capitalize font-weight-bold text-8 m-0">
            Info {{ route.params.name }}
          </h1>
        </section>

        <div class="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
          <div
            v-if="archive.loading"
            v-for="number in numberPost"
            :key="number"
            class="col"
          >
            <AnimationSkleton width_="100%" height_="200px" />
          </div>
          <div
            v-else
            v-for="(data, index) in archive.data.archive_posts.slice(
              indexOfFirstItem,
              indexOfLastItem
            )"
            :key="index"
            class="col"
          >
            <ArchiveCardPost :data="data" />
          </div>
          <h1
            v-if="!archive.loading && currentPage > pageNumbers"
            class="text-center my-4 w-100"
          >
            Not Found Page
          </h1>
        </div>
        <div class="mt-5 d-flex align-items-center justify-content-center">
          <AnimationSkleton
            v-if="archive.loading"
            width_="150px"
            height_="40px"
          />
          <ArchivePagination
            v-else
            v-if="currentPage <= pageNumbers"
            :pageNumbers="pageNumbers"
            :currentPage="currentPage"
            :params="route.params.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const archive = ref({
  data: {
    archive_posts: [1, 2, 3, 4, 5, 6],
  },
  loading: true,
});
const numberPost = 6;
const { getData } = useFetchData();
async function getArchive() {
  try {
    const datas = await getData("products");
    archive.value = {
      data: {
        archive_id: 1,
        archive_name: `Info ${route.params.name}`,
        archive_image: "",
        archive_posts: datas.products.map((d) => ({
          post_id: 1,
          post_title: `${d.title} ${d.description}`,
          post_content: `${d.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum iusto est magni. Facere, repellat quidem eius eveniet accusantium quaerat harum numquam blanditiis quam, voluptatum inventore, debitis omnis obcaecati aperiam. Voluptate.`,
          medium_thumbnail: d.images[0],
          post_url: `/${d.id}`,
          post_date: "5 September 2023, Selasa",
          author_name: d.brand,
        })),
      },
      loading: false,
    };
    pageNumbers.value = Math.ceil(
      archive.value.data.archive_posts.length / itemsPerPage.value
    );
  } catch (error) {
    console.log(error);
  }
}
onMounted(() => {
  getArchive();
});

const currentPage = route.params.page;
const itemsPerPage = ref(6);
const indexOfLastItem = currentPage * itemsPerPage.value;
const indexOfFirstItem = indexOfLastItem - itemsPerPage.value;

const pageNumbers = ref(1);
</script>
