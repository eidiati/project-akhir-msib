<template>
  <header
    id="header"
    data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyStartAt': 122, 'stickySetTop': '-122px', 'stickyChangeLogo': false}"
  >
    <div class="header-body border-color-primary border-top-0 box-shadow-none">
      <!-- header -->
      <div class="d-lg-block d-none" style="background-color: #2c3033">
        <main class="container py-2">
          <div class="row text-light">
            <div class="col-3">
              <AnimationSkleton
                v-if="location.loading"
                width_="80%"
                height_="16px"
                class_="mt-1 rounded-0"
              />
              <span v-else class="text-capitalize">
                {{ location.data[0].location_city }},
                {{ location.data[0].location_province }}
              </span>
            </div>
            <div class="col-3 border-start border-light">
              <AnimationSkleton
                v-if="tanggalWaktu.loading"
                width_="80%"
                height_="16px"
                class_="mt-1 rounded-0"
              />
              <span v-else>
                {{ tanggalWaktu.data }}
              </span>
            </div>
            <div class="col-3 border-start border-light">
              <NuxtLink to="/contact-us" class="text-decoration-none text-light"
                >Contact</NuxtLink
              >
            </div>
            <div class="col-3 text-end">
              <template v-for="d in sosmed.data" :key="d.sosmed_id">
                <AnimationSkleton
                  v-if="sosmed.loading"
                  width_="16px"
                  height_="16px"
                  class_="mt-1 me-3 rounded-circle d-inline-block"
                />
                <NuxtLink v-else :to="d.sosmed_link" class="me-3">
                  <img :src="d.sosmed_icon" :alt="d.sosmed_title" />
                </NuxtLink>
              </template>
            </div>
          </div>
        </main>
      </div>
      <!-- logo and advertising -->
      <div
        class="header-container container z-index-2"
        style="min-height: 100px"
      >
        <div class="row w-100 my-3 mx-auto">
          <div class="col-4 d-flex align-items-center">
            <NuxtLink to="/">
              <img
                alt="Logo Lancang Kuning LG"
                src="~/assets/img/lancangkuning.svg"
                style="height: 48px"
                class="img-fluid d-none d-lg-block d-md-block d-sm-none"
              />
              <img
                alt="Logo Lancang Kuning XS"
                src="~/assets/img/lancangkuning.svg"
                class="W-100 img-fluid d-block d-lg-none d-md-none d-sm-block"
              />
            </NuxtLink>
          </div>
          <div class="col-8 d-flex align-items-center justify-content-end">
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
            <template
              v-else
              v-for="(ads, index) in advertising.data"
              :key="ads.ads_id"
            >
              <NuxtLink v-if="index < 1" :to="ads.ads_link" class="d-block">
                <img
                  :src="ads.ads_image"
                  alt="ADS LG"
                  style="height: 90px"
                  class="img-fluid d-none d-lg-block d-md-block d-sm-none"
                />
                <img
                  :src="ads.ads_mobile_image"
                  alt="ADS XS"
                  style="height: 70px"
                  class="img-fluid d-block d-lg-none d-md-none d-sm-block"
                />
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
      <!-- navbar -->
      <Navbar />
    </div>
  </header>
</template>

<script setup>
const tanggalWaktu = ref({
  data: "",
  loading: true,
});
const sosmed = ref({
  data: 4,
  loading: true,
});
const advertising = ref({
  data: 1,
  loading: true,
});
const location = ref({
  data: 1,
  loading: true,
});
const { getData } = await useFetchData();
function updateDateTime() {
  const date = new Date();
  const tahun = date.getFullYear();
  const bulan = date.getMonth();
  const tanggal = date.getDate();
  const hari = date.getDay();
  const jam = date.getHours();
  const menit = date.getMinutes();

  const hariNames = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
  ];
  const bulanNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  tanggalWaktu.value = {
    data:
      hariNames[hari] +
      ", " +
      tanggal +
      " " +
      bulanNames[bulan] +
      " " +
      tahun +
      "/" +
      jam +
      ":" +
      menit,
    loading: false,
  };
}
onMounted(async () => {
  setInterval(() => {
    updateDateTime();
  }, 1000);
  sosmed.value = await getData("social-media");
  advertising.value = await getData("advertising");
  location.value = await getData("location");
});
</script>
