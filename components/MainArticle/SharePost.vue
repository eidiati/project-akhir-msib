<template>
  <main class="d-flex">
    <template v-for="(data, i) in datas" :key="i">
      <NuxtLink :to="data.link">
        <div
          :style="{ backgroundColor: data.color }"
          class="d-flex justify-content-center align-items-center p-3"
        >
          <img
            :src="data.icon"
            alt="data.label"
            style="width: 16px; height: 16px"
          />
        </div>
      </NuxtLink>
    </template>
  </main>
</template>

<script setup>
const datas = [
  {
    label: "facebook",
    icon: "https://api.iconify.design/ion:social-facebook.svg?color=%23ffffff",
    link: "/",
    color: "#3b5998",
  },
  {
    label: "twitter",
    icon: "https://api.iconify.design/mdi:twitter.svg?color=%23ffffff",
    link: "/",
    color: "#55acee",
  },
  {
    label: "google-plus",
    icon: "https://api.iconify.design/mdi:google-plus.svg?color=%23ffffff",
    link: "/",
    color: "#dd4b39",
  },
  {
    label: "linkedin",
    icon: "https://api.iconify.design/basil:linkedin-solid.svg?color=%23ffffff",
    link: "/",
    color: "#0077b5",
  },
];
</script>
