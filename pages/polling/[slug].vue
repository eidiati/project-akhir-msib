<template>
  <div role="main" class="main">
    <div class="container py-4">
      <div class="row pb-1 pt-2">
        <section class="mb-4">
          <ul class="breadcrumb d-block">
            <li><NuxtLink to="/">Beranda</NuxtLink></li>
            <li class="active">Polling</li>
          </ul>

          <h1 class="text-dark text-capitalize font-weight-bold text-8 m-0">
            <AnimationSkleton
              v-if="polling.loading"
              width_="100%"
              height_="32px"
              class_="mt-2"
            />
            <template v-else>
              <template v-if="polling.data.poll_active">
                {{ polling.data.poll_title }}
              </template>
            </template>
          </h1>
        </section>
        <div
          v-if="polling.loading"
          class="d-flex justify-content-center align-items-center"
        >
          <AnimationEllipsis />
        </div>
        <main v-else v-if="polling.data.poll_active">
          <section class="mt-5 mb-4">
            <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
              <div
                v-for="(opt, index) in polling.data.poll_opt"
                :key="index"
                class="col"
              >
                <LazyPollingCard
                  :poll_id="polling.data.poll_id"
                  :opt="opt"
                  :bgColor="bgColor[index]"
                />
              </div>
            </div>
          </section>

          <section class="mt-5 mb-4">
            <h3 class="font-weight-bold text-capitalize text-center text-dark">
              Grafik Perolehan Suara
            </h3>
            <div class="row row-cols-1 row-cols-lg-2 g-5">
              <LazyPollingChart
                :chartData="chartData"
                :chartOptions="chartOptions"
                :loading="polling.loading"
                label="bar"
              />
              <LazyPollingChart
                :chartData="chartData"
                :chartOptions="chartOptions"
                :loading="polling.loading"
                label="pie"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const slug = route.params.slug;
const chartData = ref({
  labels: [""],
  datasets: [
    {
      label: "Jumlah Suara ",
      backgroundColor: [""],
      data: [0],
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: "y",
});

const { getData } = await useFetchData();
const { decrypted } = useFunction();
const polling = ref({
  data: {
    poll_opt: 10,
  },
  loading: true,
});

const bgColor = ref([""]);

onMounted(async () => {
  const decrypt = decrypted(slug);
  const res = await getData(`polling/${Number(decrypt)}`);
  polling.value = res;

  const candidates = res.data.poll_opt.map((data) => data.opt_text);
  const count = res.data.poll_opt.map((data) => data.opt_count);
  const color = count.map(
    () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
  );
  chartData.value.labels = candidates;
  chartData.value.datasets[0].data = count;
  chartData.value.datasets[0].backgroundColor = color;
  bgColor.value = color;

  useHead({
    title: `${res.data.poll_title} | Lancang Kuning`,
  });
});
</script>
