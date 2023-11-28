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
            <div class="col-4 border-start border-light">
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
            <div class="col-2 border-start border-light">
              <NuxtLink to="/contact-us" class="text-decoration-none text-light"
                >Kontak</NuxtLink
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
                <NuxtLink
                  v-else
                  :to="d.sosmed_url"
                  class="d-inline-block iconSosmed me-2"
                >
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
          <!-- ads -->
          <div class="col-8 d-flex align-items-center justify-content-end">
            <Advertising position="atas" />
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
const location = ref({
  data: [],
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
  location.value = await getData("location");
});
</script>
<style>
.iconSosmed {
  transition: all 0.3s;
}
.iconSosmed:hover {
  transform: scale(1.3);
}
</style>
