<template>
  <template v-if="advertising.loading">
    <AnimationSkleton
      width_="100%"
      height_="90px"
      class="d-none d-lg-block d-md-block d-sm-none"
    />
    <AnimationSkleton
      width_="100%"
      height_="70px"
      class="d-block d-lg-none d-md-none d-sm-block"
    />
  </template>
  <template v-else>
    <template v-if="isAdsActive">
      <NuxtLink :to="advertising.data.ads_link" class="d-block">
        <img
          :src="advertising.data.ads_image"
          alt="ADS LG"
          style="height: 90px"
          class="img-fluid d-none d-lg-block d-md-block d-sm-none"
        />
        <img
          :src="advertising.data.ads_mobile_image"
          alt="ADS XS"
          style="height: 70px"
          class="img-fluid d-block d-lg-none d-md-none d-sm-block"
        />
      </NuxtLink>
    </template>
  </template>
</template>

<script setup>
const props = defineProps({
  position: String,
});
const { position } = toRefs(props);

const advertising = ref({
  data: {},
  loading: true,
});
const isAdsActive = ref(false);
const { getData } = await useFetchData();

onMounted(async () => {
  const res = await getData("advertising?position=" + position.value);

  advertising.value = res;
  const curr_date = new Date();
  const ads_start = new Date(res.data.ads_start);
  const ads_end = new Date(res.data.ads_end);

  isAdsActive.value = curr_date >= ads_start && curr_date <= ads_end;
});
</script>
