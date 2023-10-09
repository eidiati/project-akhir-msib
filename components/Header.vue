<template>
  <header
    id="header"
    data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyStartAt': 122, 'stickySetTop': '-122px', 'stickyChangeLogo': false}"
  >
    <div class="header-body border-color-primary border-top-0 box-shadow-none">
      <!-- header -->
      <div class="d-lg-block d-none bg-color-dark">
        <main class="container py-2">
          <div class="row text-light">
            <div class="col-3">Riau, Indonesia</div>
            <div class="col-3 border-start border-light">
              {{ tampilTanggal }}/{{ tampilWaktu }}
            </div>
            <div class="col-3 border-start border-light">
              <NuxtLink to="/" class="text-decoration-none text-light"
                >Contact</NuxtLink
              >
            </div>
            <div class="col-3 text-end">
              <template v-for="(data, i) in sosmed" :key="i">
                <NuxtLink :to="data.link" class="me-3">
                  <img :src="data.icon" :alt="data.label" />
                </NuxtLink>
              </template>
            </div>
          </div>
        </main>
      </div>
      <!-- logo and advertising -->
      <div
        class="header-container container z-index-2"
        style="min-height: 122px"
      >
        <div class="header-row">
          <div class="header-column">
            <div class="header-row">
              <h1 class="header-logo">
                <NuxtLink to="/">
                  <img
                    alt="Porto"
                    height="48"
                    src="~/assets/img/lancangkuning.png"
                  />
                  <span class="hide-text">Porto - Demo Blog 5</span>
                </NuxtLink>
              </h1>
            </div>
          </div>
          <div class="header-column justify-content-end">
            <div class="header-row h-100">
              <NuxtLink
                to="http://themeforest.net/item/porto-responsive-html5-template/4106987"
                target="_blank"
                class="py-3 d-block"
              >
                <img
                  alt="Porto"
                  class="img-fluid ps-3"
                  src="~/assets/img/blog/blog-ad-2.jpg"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!-- navbar -->
      <Navbar />
    </div>
  </header>
</template>

<script setup>
const sosmed = [
  {
    label: "instagram",
    link: "/",
    icon: "https://api.iconify.design/mdi:instagram.svg?color=%23ffffff",
  },
  {
    label: "facebook",
    link: "/",
    icon: "https://api.iconify.design/mdi:facebook.svg?color=%23ffffff",
  },
  {
    label: "twitter",
    link: "/",
    icon: "https://api.iconify.design/mdi:twitter.svg?color=%23ffffff",
  },
  {
    label: "youtube",
    link: "/",
    icon: "https://api.iconify.design/mdi:youtube.svg?color=%23ffffff",
  },
];
const tampilTanggal = ref("Minggu, 8 Oktober 2023");
const tampilWaktu = ref("16:38");

function updateDateTime() {
  const date = new Date();
  const tahun = date.getFullYear();
  const bulan = date.getMonth();
  const tanggal = date.getDate();
  const hari = date.getDay();
  const jam = date.getHours();
  const menit = date.getMinutes();
  const detik = date.getSeconds();

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

  tampilTanggal.value =
    hariNames[hari] + ", " + tanggal + " " + bulanNames[bulan] + " " + tahun;
  tampilWaktu.value = jam + ":" + menit;
}
onMounted(() => {
  updateDateTime();
  setInterval(updateDateTime, 1000);
});
</script>
