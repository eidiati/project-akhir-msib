<template>
  <main class="d-flex">
    <template v-for="(data, i) in datas" :key="i">
      <NuxtLink :to="data.link" target="_blank">
        <div
          :style="{ backgroundColor: data.color }"
          class="d-flex justify-content-center align-items-center bgIconShare"
        >
          <img :src="data.icon" alt="data.label" class="iconShare" />
        </div>
      </NuxtLink>
    </template>
  </main>
</template>

<script setup>
const props = defineProps({
  url: String,
});
const { url } = toRefs(props);
const datas = [
  {
    label: "facebook",
    icon: "https://api.iconify.design/ion:social-facebook.svg?color=%23ffffff",
    link: `https://www.facebook.com/sharer/sharer.php?u=${url.value}`,
    color: "#3b5998",
  },
  {
    label: "twitter",
    icon: "https://api.iconify.design/mdi:twitter.svg?color=%23ffffff",
    link: `https://twitter.com/intent/tweet?url=${url.value}`,
    color: "#55acee",
  },
  {
    label: "linkedin",
    icon: "https://api.iconify.design/basil:linkedin-solid.svg?color=%23ffffff",
    link: `https://www.linkedin.com/sharing/share-offsite/?url=${url.value}`,
    color: "#0077b5",
  },
  {
    label: "whatsapp",
    icon: "https://api.iconify.design/ri:whatsapp-fill.svg?color=%23ffffff",
    link: `https://api.whatsapp.com/send?text=url=${url.value}`,
    color: "#25D366",
  },
];
</script>
<style>
.iconShare {
  width: 20px;
  height: 20px;
  margin: 15px;
}
.bgIconShare {
  transition: all 0.3s;
}
.bgIconShare:hover {
  transform: scale(0.9);
}
</style>
