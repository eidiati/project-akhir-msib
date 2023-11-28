<template>
  <div
    v-if="polling.loading"
    class="d-flex justify-content-center align-items-center"
  >
    <AnimationEllipsis />
  </div>
  <div v-else v-if="polling.data.poll_active" class="row">
    <section class="my-4">
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
  </div>
</template>

<script setup>
const props = defineProps(["poll_id"]);
const poll_id = ref(props.poll_id);
const { getData } = await useFetchData();
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

const polling = ref({
  data: {
    poll_opt: 10,
  },
  loading: true,
});

const bgColor = ref([""]);

onMounted(async () => {
  const res = await getData(`polling/${poll_id.value}`);
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
});
</script>
