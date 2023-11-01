<template>
  <div class="card w-100">
    <NuxtLink :to="data.post_url" class="d-block">
      <img
        :src="data.medium_thumbnail"
        class="card-img-top d-lg-block d-md-none d-sm-none d-none"
        style="height: 200px; object-fit: contain"
        :alt="data.author_name"
      />
      <img
        :src="data.medium_thumbnail"
        class="card-img-top d-lg-none d-md-block d-sm-block d-block"
        style="height: 100px; object-fit: contain"
        :alt="data.author_name"
      />
    </NuxtLink>
    <div class="card-body">
      <div class="d-flex justify-content-between text-default text-1 mb-2">
        <span class=""
          ><i class="far fa-user me-1"></i>By {{ data.author_name }}</span
        >
        <span class=""
          ><img
            src="https://api.iconify.design/material-symbols:calendar-month.svg?color=%23777777"
            alt="publishedAt"
            style="width: 17px; height: 17px; margin: -5px 1px 0 -2px"
          />{{ data.post_date }}</span
        >
      </div>
      <NuxtLink :to="data.post_url">
        <h5 class="card-title textEclipse">{{ data.post_title }}</h5>
      </NuxtLink>
      <p class="card-text textEclipse">
        {{ data.post_content }}
      </p>
      <NuxtLink :to="data.post_url" class="btn btn-primary"
        >Selengkapnya</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
const data = props.data;
</script>

<style>
.textEclipse {
  font-size: 12px;
  text-align: justify;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
