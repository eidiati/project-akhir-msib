<template>
  <div role="main" class="main">
    <div class="container py-4">
      <div class="row pb-1 pt-2">
        <section class="">
          <ul class="breadcrumb d-block">
            <li><NuxtLink to="/">Beranda</NuxtLink></li>
            <li class="active">Jurnalis</li>
          </ul>
        </section>
      </div>
      <div class="container mt-5">
        <div
          v-if="user.loading"
          class="d-flex justify-content-center align-items-center"
        >
          <AnimationEllipsis />
        </div>
        <div v-else class="row d-flex justify-content-center">
          <div class="col-lg-10 col-md-10 col-12">
            <div class="card p-3 py-4">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-6 mx-auto">
                  <img
                    :src="user.data.user_photo"
                    class="rounded-circle w-100"
                  />
                </div>
              </div>

              <div class="text-center mt-3">
                <span class="bg-secondary p-1 px-4 rounded text-white">{{
                  user.data.user_category
                }}</span>
                <h5 class="mt-2 mb-0">{{ user.data.user_name }}</h5>
                <span>{{ user.data.user_email }}</span>

                <div class="px-4 mt-1">
                  <p class="fonts">
                    {{ user.data.user_bio }}
                  </p>
                </div>

                <h5 class="mt-5 pb-3 mb-0 border-bottom">Postingan</h5>
                <div class="container text-start">
                  <LazyListPosts
                    :directory="'user-post/' + user.data.user_id"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const slug = route.params.slug;
const { getData } = await useFetchData();
const { decrypted } = useFunction();

const user = ref({
  data: {},
  loading: true,
});

const decrypt = decrypted(slug);

onMounted(async () => {
  const res = await getData(`user/${decrypt}`);
  user.value = res;
  useHead({
    title: `${res.data.user_name} | Lancang Kuning`,
  });
});
</script>
