<template>
  <footer id="footer">
    <div class="container">
      <div class="footer-ribbon">
        <span>Lancang Kuning</span>
      </div>
      <div class="row py-5 my-4">
        <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
          <h5 class="text-3 mb-3">TENTANG LANCANGKUNING.COM</h5>
          <p>Portal Berita yang menyajikan berita teraktual</p>

          <h5 class="text-3 mb-3">TETAP TERHUBUNG</h5>
          <main>
            <template v-for="(d, i) in sosmed.data" :key="d.sosmed_id">
              <AnimationSkleton
                v-if="sosmed.loading"
                width_="25px"
                height_="25px"
                class_="me-3 rounded-circle d-inline-block"
              />
              <NuxtLink v-else :to="d.sosmed_link" class="me-3">
                <img
                  :src="d.sosmed_icon"
                  :alt="d.sosmed_title"
                  style="width: 25px; height: 25px"
                />
              </NuxtLink>
            </template>
          </main>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h5 class="text-3 mb-3">BERLANGGANAN NEWSLETTER</h5>
          <form v-on:submit="(e) => subscribe(e)">
            <ul class="list-unstyled mb-0">
              <li class="d-flex mb-3 pb-1">
                <article class="d-flex">
                  <input
                    type="email"
                    :value="email"
                    v-on:input="(e) => (email = e.target.value)"
                    required
                    class="form-control form-control-md"
                    placeholder="Your Email"
                  />
                </article>
              </li>
              <li class="d-flex">
                <article class="d-flex">
                  <button type="submit" class="btn btn-light btn-sm">
                    Subscribe
                  </button>
                </article>
              </li>
            </ul>
          </form>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-md-0">
          <h5 class="text-3 mb-3">KONTAK</h5>
          <ul class="list-unstyled mb-0">
            <template
              v-for="(contact, i) in contacts.data"
              :key="contact.contact_id"
            >
              <li class="d-flex mb-3 pb-1">
                <article class="d-flex">
                  <AnimationSkleton
                    v-if="contacts.loading"
                    width_="25px"
                    height_="25px"
                    class_="rounded-circle me-3"
                  />
                  <img
                    v-else
                    class="me-3"
                    :src="contact.contact_icon"
                    alt=""
                    style="width: 25px; height: 25px"
                  />
                  <div class="media-body">
                    <AnimationSkleton
                      v-if="contacts.loading"
                      width_="80px"
                      height_="16px"
                      class_="mt-1"
                    />
                    <h6
                      v-else
                      class="text-3 text-color-light opacity-8 line-height-7 ls-0 mb-1"
                    >
                      {{ contact.contact_name }}
                    </h6>
                  </div>
                </article>
              </li>
            </template>
          </ul>
        </div>
        <div class="col-md-6 col-lg-2">
          <h5 class="text-3 mb-3">KATEGORI</h5>
          <div v-if="category.loading" class="d-flex flex-wrap">
            <template v-for="(cat, i) in category.data" :key="i">
              <AnimationSkleton
                width_="60px"
                height_="16px"
                class_="mb-2 me-1"
              />
            </template>
          </div>
          <p v-else>
            <template v-for="(cat, i) in category.data" :key="cat.category_id">
              <NuxtLink :to="'/kategori' + cat.category_url"
                ><span
                  class="badge badge-dark bg-color-black badge-sm py-2 me-1 mb-2 text-uppercase"
                  >{{ cat.category_name }}</span
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
                src="~/assets/img/lancangkuning.svg"
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
              <template v-if="redaksi.loading">
                <div class="d-flex flex-wrap">
                  <template v-for="(data, i) in redaksi.data.length" :key="i">
                    <AnimationSkleton
                      width_="60px"
                      height_="16px"
                      class_="mb-2 me-1"
                    />
                  </template>
                </div>
              </template>
              <template v-else v-for="(data, i) in redaksi.data" :key="i">
                <span v-if="i > 0" class="mx-2">|</span>
                <NuxtLink to="/"> {{ data.label }}</NuxtLink>
              </template>
            </main>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const category = ref({
  data: 5,
  loading: true,
});
const contacts = ref({
  data: 4,
  loading: true,
});
const sosmed = ref({
  data: 4,
  loading: true,
});
const redaksi = ref({
  data: [
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
  ],
  loading: false,
});
const email = ref("");

const { getData } = await useFetchData();
function subscribe(e) {
  e.preventDefault();
  alert(email.value);
  email.value = "";
}

onMounted(async () => {
  category.value = await getData("category");
  contacts.value = await getData("contact");
  sosmed.value = await getData("social-media");
});
</script>
