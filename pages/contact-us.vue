<template>
  <div role="main" class="main">
    <!-- Google Maps - Go to the bottom of the page to change settings and map location. -->
    <div id="googlemaps" class="google-map mt-0" style="height: 500px">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.687637847705!2d101.396144474208!3d0.46373616378476096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a9bc86b4b417%3A0x94e290673138bc58!2sGaruda%20Cyber%20Institute!5e0!3m2!1sid!2sid!4v1699255736125!5m2!1sid!2sid"
        class="w-100 h-100 border-0"
        title="Lokasi Garuda Cyber Indonesia"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div class="container">
      <div class="row py-4">
        <div class="col-lg-6">
          <ul class="breadcrumb d-block">
            <li><NuxtLink to="/">Beranda</NuxtLink></li>
            <li class="active">Kontak</li>
          </ul>
          <h2 class="font-weight-bold text-8 mt-2 mb-0">Hubungi Kami</h2>
          <p class="mb-4">
            Jangan ragu untuk menanyakan detailnya, jangan simpan pertanyaan apa
            pun!
          </p>

          <form v-on:submit="(e) => handleSubmit(e)" class="contact-form">
            <div class="contact-form-success alert alert-success d-none mt-4">
              <strong>Success!</strong> Your message has been sent to us.
            </div>

            <div class="contact-form-error alert alert-danger d-none mt-4">
              <strong>Error!</strong> There was an error sending your message.
              <span class="mail-error-message text-1 d-block"></span>
            </div>

            <div class="row">
              <div class="form-group col-lg-6">
                <label class="form-label mb-1 text-2">Nama Lengkap</label>
                <input
                  type="text"
                  :value="form.username"
                  v-on:input="(e) => (form.username = e.target.value)"
                  data-msg-required="Masukkan nama anda."
                  maxlength="100"
                  class="form-control text-3 h-auto py-2"
                  required
                />
              </div>
              <div class="form-group col-lg-6">
                <label class="form-label mb-1 text-2">Alamat Email</label>
                <input
                  type="email"
                  :value="form.email"
                  v-on:input="(e) => (form.email = e.target.value)"
                  data-msg-required="Masukkan email anda."
                  data-msg-email="Masukkan email anda yang valid."
                  maxlength="100"
                  class="form-control text-3 h-auto py-2"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="form-group col">
                <label class="form-label mb-1 text-2">Subjek</label>
                <input
                  type="text"
                  :value="form.subject"
                  v-on:input="(e) => (form.subject = e.target.value)"
                  data-msg-required="Masukkan subjek."
                  maxlength="100"
                  class="form-control text-3 h-auto py-2"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="form-group col">
                <label class="form-label mb-1 text-2">Pesan</label>
                <textarea
                  maxlength="5000"
                  :value="form.message"
                  v-on:input="(e) => (form.message = e.target.value)"
                  data-msg-required="Masukkan pesan anda."
                  rows="8"
                  class="form-control text-3 h-auto py-2"
                  required
                ></textarea>
              </div>
            </div>
            <div class="row">
              <div class="form-group col">
                <button type="submit" class="btn btn-primary btn-modern">
                  <template v-if="!loading">Kirim</template>
                  <div
                    v-else
                    class="spinner-border spinner-border-sm text-light"
                    style="margin: -2px 6.5px -2px 6.5px"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-6">
          <div class="">
            <h4 class="mt-2 mb-1">Kantor <strong>Kami</strong></h4>
            <ul class="list list-icons list-icons-style-2 mt-2">
              <li v-for="(cont, index) in contact.data" :key="cont.contact_id">
                <div
                  v-if="contact.loading"
                  class="d-flex align-items-center"
                  style="margin-left: -35px"
                >
                  <AnimationSkleton
                    width_="32px"
                    height_="32px"
                    class_="rounded-circle me-3"
                  />
                  <AnimationSkleton width_="70%" height_="14px" />
                </div>
                <template v-else>
                  <i :class="iconContact[index]"></i>
                  <strong class="text-dark">{{ cont.contact_title }}:</strong>
                  {{ cont.contact_name }}
                </template>
              </li>
            </ul>
          </div>

          <div class="">
            <h4 class="pt-5">Visi Misi <strong>Lancang Kuning.com</strong></h4>
            <div v-if="visi_misi.loading">
              <div class="d-flex align-items-center">
                <AnimationSkleton
                  width_="32px"
                  height_="32px"
                  class_="rounded-circle me-3"
                />
                <AnimationSkleton width_="20%" height_="14px" class_="mb-2" />
              </div>
              <div class="ms-5 mb-5">
                <AnimationSkleton width_="70%" height_="14px" class_="mb-3" />
                <AnimationSkleton width_="70%" height_="14px" class_="mb-3" />
                <AnimationSkleton width_="70%" height_="14px" class_="mb-3" />
              </div>

              <div class="d-flex align-items-center">
                <AnimationSkleton
                  width_="32px"
                  height_="32px"
                  class_="rounded-circle me-3"
                />
                <AnimationSkleton width_="20%" height_="14px" class_="mb-2" />
              </div>
              <div class="ms-5">
                <AnimationSkleton width_="70%" height_="14px" class_="mb-3" />
                <AnimationSkleton width_="70%" height_="14px" class_="mb-3" />
                <AnimationSkleton width_="70%" height_="14px" class_="mb-3" />
              </div>
            </div>
            <template v-else>
              <div class="mb-3">
                <img
                  src="https://api.iconify.design/mingcute:target-line.svg?color=%23006eff"
                  alt="visimisi"
                  srcset=""
                  style="width: 25px; margin-right: 11px"
                />
                <strong class="text-dark">Visi</strong>
                <div style="margin-left: 37px">
                  {{ visi_misi.data.visi }}
                </div>
              </div>
              <div class="">
                <img
                  src="https://api.iconify.design/mingcute:target-line.svg?color=%23006eff"
                  alt="visimisi"
                  srcset=""
                  style="width: 25px; margin-right: 11px"
                />
                <strong class="text-dark">Misi</strong>
                <div style="margin-left: 37px">
                  {{ visi_misi.data.misi }}
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { getData, postData } = await useFetchData();
const contact = ref({
  data: 4,
  loading: true,
});
const visi_misi = ref({
  data: {
    visi: null,
    misi: null,
  },
  loading: true,
});
const iconContact = [
  "fas fa-map-marker-alt top-6",
  "fas fa-phone top-6",
  "fas fa-envelope top-6",
  "fas fa-headset top-6",
];
const form = ref({
  username: "",
  email: "",
  subject: "",
  message: "",
});
const loading = ref(false);
async function handleSubmit(e) {
  e.preventDefault();
  loading.value = true;
  const res = await postData("contact-us", form.value);
  loading.value = res.loading;
  form.value = {
    username: "",
    email: "",
    subject: "",
    message: "",
  };
}
onMounted(async () => {
  contact.value = await getData("contact");
  visi_misi.value = await getData("visi-misi");
});
</script>
