<template>
  <div class="col-lg-7 mb-4 pb-2">
    <NuxtLink :to="posts[0].link">
      <article
        class="thumb-info thumb-info-no-borders thumb-info-bottom-info thumb-info-bottom-info-dark thumb-info-bottom-info-show-more thumb-info-no-zoom border-radius-0"
      >
        <div class="thumb-info-wrapper thumb-info-wrapper-opacity-6">
          <img
            :src="posts[0].image"
            class="img-fluid"
            alt="How To Take Better Concert Pictures in 30 Seconds"
          />
          <div class="thumb-info-title bg-transparent p-4">
            <div class="thumb-info-type bg-color-dark px-2 mb-1">
              {{ posts[0].category }}
            </div>
            <div class="thumb-info-inner mt-1">
              <h2
                class="font-weight-bold text-color-light line-height-2 text-5 mb-0"
              >
                {{ posts[0].title }}
              </h2>
            </div>
            <div class="thumb-info-show-more-content">
              <p
                class="mb-0 text-1 line-height-9 mb-1 mt-2 text-light opacity-5"
              >
                {{ posts[0].description }}
              </p>
            </div>
          </div>
        </div>
      </article>
    </NuxtLink>
  </div>

  <div class="col-lg-5">
    <template v-for="(post, i) in posts" :key="i">
      <article
        v-if="i > 0"
        class="thumb-info thumb-info-no-zoom bg-transparent border-radius-0 pb-4 mb-2"
      >
        <div class="row align-items-center pb-1">
          <div class="col-sm-5">
            <NuxtLink :to="post.link">
              <img
                :src="blog55"
                class="img-fluid border-radius-0"
                :alt="post.title"
              />
            </NuxtLink>
          </div>
          <div class="col-sm-7 ps-sm-1">
            <div class="thumb-info-caption-text">
              <div
                class="thumb-info-type text-light text-uppercase d-inline-block bg-color-dark px-2 m-0 mb-1 float-none"
              >
                <NuxtLink
                  :to="post.link"
                  class="text-decoration-none text-color-light"
                  >{{ post.category }}</NuxtLink
                >
              </div>
              <h2
                class="d-block line-height-2 text-4 text-dark font-weight-bold mt-1 mb-0"
              >
                <NuxtLink
                  :to="post.link"
                  class="text-decoration-none text-color-dark text-color-hover-primary"
                  >{{ post.title }}</NuxtLink
                >
              </h2>
            </div>
          </div>
        </div>
      </article>
    </template>
  </div>
</template>

<script setup>
import blog46 from "~/assets/img/blog/default/blog-46.jpg";
import blog55 from "~/assets/img/blog/default/blog-55.jpg";
import blog56 from "~/assets/img/blog/default/blog-56.jpg";
import blog57 from "~/assets/img/blog/default/blog-57.jpg";

const posts = [
  {
    image: blog46,
    category: "Pendidikan",
    title: "How To Take Better Concert Pictures in 30 Seconds",
    description:
      "Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    link: "/",
  },
  {
    image: blog55,
    category: "Bisnis",
    categoryLink: "/",
    title: "Simple Ways to Have a Pretty Face",
    link: "/",
  },
  {
    image: blog56,
    category: "Wisata",
    categoryLink: "/",
    title: "Ranking the greatest players in basketball",
    link: "/",
  },
  {
    image: blog57,
    category: "Politik",
    categoryLink: "/",
    title: "4 Ways to Look Cool in Glasses",
    link: "/",
  },
];
</script>
