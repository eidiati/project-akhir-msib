<template>
  <div class="card w-100 border-0">
    <div class="row">
      <div class="col-lg-4 col-md-4">
        <NuxtLink :to="'/post/' + data.post_slug" class="d-block">
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
      </div>
      <div class="col-lg-8 col-md-8">
        <div class="card-body">
          <div
            class="d-flex justify-content-between text-default text-1 mb-2 text-capitalize"
          >
            <span class=""
              ><i class="far fa-folder me-1"></i> {{ data.post_category }}</span
            >
            <span class=""
              ><img
                src="https://api.iconify.design/material-symbols:calendar-month.svg?color=%23777777"
                alt="publishedAt"
                style="width: 17px; height: 17px; margin: -5px 1px 0 -2px"
              />{{ data.post_date }}</span
            >
          </div>
          <NuxtLink :to="'/post/' + data.post_slug">
            <h5 class="card-title textEclipse">{{ data.post_title }}</h5>
          </NuxtLink>
          <p class="card-text textEclipse">
            {{ data.post_content }}, Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Dolorem pariatur sunt, dolor soluta suscipit
            laborum, vero placeat repellat provident quod libero porro illum
            quidem aliquam exercitationem itaque asperiores minima eligendi?
          </p>
          <NuxtLink :to="'/post/' + data.post_slug" class="btn btn-primary"
            >Selengkapnya</NuxtLink
          >
        </div>
      </div>
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
