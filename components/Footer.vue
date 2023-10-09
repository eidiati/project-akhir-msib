<template>
  <footer id="footer">
    <div class="container">
      <div class="footer-ribbon">
        <span>Lancang Kuning</span>
      </div>
      <div class="row py-5 my-4">
        <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
          <h5 class="text-3 mb-3">ABOUT THE BLOG</h5>
          <p>Portal Berita yang menyajikan berita teraktual</p>
          <p class="mb-5">
            <NuxtLink
              to="/"
              class="btn-flat btn-xs text-color-light p-relative top-5"
              ><strong class="text-2">VIEW MORE</strong
              ><i class="fas fa-angle-right p-relative top-1 ps-2"></i
            ></NuxtLink>
          </p>
          <h5 class="text-3 mb-3">STAY CONNECTED</h5>
          <main>
            <template v-for="(data, i) in sosmed" :key="i">
              <NuxtLink :to="data.link" class="me-3">
                <img
                  :src="data.icon"
                  :alt="data.label"
                  style="width: 25px; height: 25px"
                />
              </NuxtLink>
            </template>
          </main>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h5 class="text-3 mb-3">SUBSCRIBE FOR NEWSLETTER</h5>
          <ul class="list-unstyled mb-0">
            <li class="d-flex mb-3 pb-1">
              <article class="d-flex">
                <input
                  type="email"
                  class="form-control form-control-md"
                  placeholder="Your Email"
                />
              </article>
            </li>
            <li class="d-flex">
              <article class="d-flex">
                <button class="btn btn-light btn-sm">Subscribe</button>
              </article>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-md-0">
          <h5 class="text-3 mb-3">CONTACT</h5>
          <ul class="list-unstyled mb-0">
            <template v-for="(contact, i) in contacts" :key="i">
              <li class="d-flex mb-3 pb-1">
                <article class="d-flex">
                  <img
                    class="me-3"
                    :src="contact.icon"
                    alt=""
                    style="width: 25px; height: 25px"
                  />
                  <div class="media-body">
                    <h6
                      class="text-3 text-color-light opacity-8 line-height-7 ls-0 mb-1"
                    >
                      {{ contact.title }}
                    </h6>
                  </div>
                </article>
              </li>
            </template>
          </ul>
        </div>
        <div class="col-md-6 col-lg-2">
          <h5 class="text-3 mb-3">TAGS</h5>
          <p>
            <template v-for="(tag, i) in tags" :key="i">
              <NuxtLink to="/"
                ><span
                  class="badge badge-dark bg-color-black badge-sm py-2 me-1 mb-2 text-uppercase"
                  >{{ tag }}</span
                ></NuxtLink
              >
            </template>
          </p>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container py-2">
        <div class="row py-4">
          <div
            class="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-start mb-2 mb-lg-0"
          >
            <NuxtLink to="/" class="logo pe-0 pe-lg-3">
              <img
                alt="Logo Lancang Kuning"
                src="~/assets/img/lancangkuning.png"
                class="opacity-5"
                height="50"
              />
            </NuxtLink>
          </div>
          <div
            class="col-lg-4 d-flex align-items-center justify-content-center mb-4 mb-lg-0"
          >
            <p>© Copyright 2023 by LANCANG KUNING MEDIA.</p>
          </div>
          <div
            class="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end"
          >
            <main id="sub-menu" class="text-lg-start text-center">
              <template v-for="(data, i) in copyright" :key="i">
                <span v-if="i > 0" class="mx-2">|</span>
                <NuxtLink :to="data.link"> {{ data.label }}</NuxtLink>
              </template>
            </main>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const tags = ["Kriminal", "Bisnis", "Kampus", "Prestasi", "Politik"];
const contacts = [
  {
    icon: "https://api.iconify.design/material-symbols:location-on.svg?color=%23ffffff",
    title: "Jl. Subrantas No. 188 Panam. Pekanbaru, Riau.",
  },
  {
    icon: "https://api.iconify.design/material-symbols:phone-enabled-sharp.svg?color=%23ffffff",
    title: "0761-6704399",
  },
  {
    icon: "https://api.iconify.design/material-symbols:mail.svg?color=%23ffffff",
    title: "redaksi@lancangkuning.com",
  },
  {
    icon: "https://api.iconify.design/material-symbols:contact-support.svg?color=%23ffffff",
    title: "LancangKuning Support",
  },
];
const copyright = [
  {
    label: "Redaksi",
    link: "/",
  },
  {
    label: "Pedoman Media Siber",
    link: "/",
  },
  {
    label: "Kode Etik Jurnalistik",
    link: "/",
  },
  {
    label: "Kode Perilaku Wartawan",
    link: "/",
  },
  {
    label: "Standar Perlindungan Profesi Wartawan",
    link: "/",
  },
];
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
</script>
