<template>
  <div role="main" class="main">
    <div class="container py-4">
      <div class="row pb-1 pt-2">
        <section class="mb-4">
          <ul class="breadcrumb d-block">
            <li><NuxtLink to="/">Beranda</NuxtLink></li>
            <li><NuxtLink to="/kuis">Kuis</NuxtLink></li>
          </ul>
        </section>
        <QuizQuestion :quiz="quiz" :user="user" />
      </div>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
const route = useRoute();
const slug = route.params.slug;
const { getData } = await useFetchData();
const { decrypted } = useFunction();
const quiz = ref({
  data: {
    quiz_title: "",
  },
  loading: true,
});
const user = ref({
  fullname: "",
  phone: "",
});
onMounted(async () => {
  const participant = localStorage.getItem("participant");
  if (participant) {
    user.value = JSON.parse(participant);
    const decrypt = decrypted(slug);
    const res = await getData(`quiz/${decrypt}`);
    quiz.value = res;
    useHead({
      title: `${res.data.quiz_title} | Lancang Kuning`,
    });
  } else {
    router.push("/kuis");
  }
});
</script>
