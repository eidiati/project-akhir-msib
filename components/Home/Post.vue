<template>
  <template v-for="(post, i) in posts" :key="i">
    <div class="heading heading-border heading-middle-border">
      <h3 class="text-4">
        <strong
          class="font-weight-bold text-1 px-3 text-light py-2"
          :class="post.bgColor"
          >{{ post.label }}</strong
        >
      </h3>
    </div>

    <div class="row pb-1">
      <div class="col-lg-6 mb-4 pb-1">
        <article
          class="thumb-info thumb-info-no-zoom bg-transparent border-radius-0 pb-2 mb-2"
        >
          <div class="row">
            <div class="col">
              <NuxtLink :to="post.articles[0].link">
                <img
                  :src="post.articles[0].image"
                  class="img-fluid border-radius-0"
                  alt="Why should I buy a smartwatch?"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="thumb-info-caption-text">
                <div class="d-inline-block text-default text-1 mt-2 float-none">
                  <NuxtLink
                    :to="post.articles[0].link"
                    class="text-decoration-none text-color-default"
                    >{{ post.articles[0].date }}</NuxtLink
                  >
                </div>
                <h4
                  class="d-block line-height-2 text-4 text-dark font-weight-bold mb-0"
                >
                  <NuxtLink
                    :to="post.articles[0].link"
                    class="text-decoration-none text-color-dark text-color-hover-primary"
                    >{{ post.articles[0].title }}</NuxtLink
                  >
                </h4>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="col-lg-6">
        <template v-for="(article, i) in post.articles" :key="i">
          <article
            v-if="i > 0"
            class="thumb-info thumb-info-no-zoom bg-transparent border-radius-0 pb-4 mb-2"
          >
            <div class="row align-items-center pb-1">
              <div class="col-sm-4">
                <NuxtLink :to="article.link">
                  <img
                    :src="article.image"
                    class="img-fluid border-radius-0"
                    alt="Gadgets That Make Your Smartphone Even Smarter"
                  />
                </NuxtLink>
              </div>
              <div class="col-sm-8 ps-sm-0">
                <div class="thumb-info-caption-text">
                  <div class="d-inline-block text-default text-1 float-none">
                    <NuxtLink
                      :to="article.link"
                      class="text-decoration-none text-color-default"
                      >{{ article.date }}</NuxtLink
                    >
                  </div>
                  <h4
                    class="d-block pb-2 line-height-2 text-3 text-dark font-weight-bold mb-0"
                  >
                    <NuxtLink
                      :to="article.link"
                      class="text-decoration-none text-color-dark text-color-hover-primary"
                      >{{ article.title }}</NuxtLink
                    >
                  </h4>
                </div>
              </div>
            </div>
          </article>
        </template>
      </div>
    </div>
  </template>
</template>

<script setup>
import blog67 from "~/assets/img/blog/default/blog-67.jpg";
import blog47 from "~/assets/img/blog/default/blog-47.jpg";
import blog68 from "~/assets/img/blog/default/blog-68.jpg";
// import blog67 from "~/assets/img/blog/default/blog-67.jpg"
import blog49 from "~/assets/img/blog/default/blog-49.jpg";
import blog50 from "~/assets/img/blog/default/blog-50.jpg";
import blog51 from "~/assets/img/blog/default/blog-51.jpg";
import blog52 from "~/assets/img/blog/default/blog-52.jpg";
import blog53 from "~/assets/img/blog/default/blog-53.jpg";
import blog54 from "~/assets/img/blog/default/blog-54.jpg";
import blog55 from "~/assets/img/blog/default/blog-55.jpg";
import blog56 from "~/assets/img/blog/default/blog-56.jpg";
import blog57 from "~/assets/img/blog/default/blog-57.jpg";
import blog58 from "~/assets/img/blog/default/blog-58.jpg";
import blog59 from "~/assets/img/blog/default/blog-59.jpg";
import blog60 from "~/assets/img/blog/default/blog-60.jpg";

const posts = [
  {
    label: "Berita Advetorial",
    bgColor: "bg-secondary",
    articles: [
      {
        image: blog67,
        date: "January 12, 2020",
        title: "Why should I buy a smartwatch?",
        link: "/",
      },
      {
        image: blog47,
        date: "January 12, 2020",
        title: "Gadgets That Make Your Smartphone Even Smarter",
        link: "/",
      },
      {
        image: blog68,
        date: "January 12, 2020",
        title: "The best augmented reality smartglasses",
        link: "/",
      },
      {
        image: blog67,
        date: "January 12, 2020",
        title: "Why should I buy a smartwatch?",
        link: "/",
      },
    ],
  },
  {
    label: "Malay Homeland",
    bgColor: "bg-primary",
    articles: [
      {
        image: blog49,
        date: "January 12, 2020",
        title: "The Best Way to Ride a Motorcycle",
        link: "/",
      },
      {
        image: blog50,
        date: "January 12, 2020",
        title: "5 Fun Things to Do at the Beach",
        link: "/",
      },
      {
        image: blog51,
        date: "January 12, 2020",
        title: "Amazingly Fresh Fruit And Herb Drinks For Summer",
        link: "/",
      },
      {
        image: blog52,
        date: "January 12, 2020",
        title: "The 20 Best Appetizers with 5 Ingredients",
        link: "/",
      },
    ],
  },
  {
    label: "Berita Menarik Lainnya",
    bgColor: "bg-warning",
    articles: [
      {
        image: blog53,
        date: "January 12, 2020",
        title: "6 Tips to Memorize Before Your Next Flight",
        link: "/",
      },
      {
        image: blog54,
        date: "January 12, 2020",
        title: "How to Make Friends as a Grown-Up",
        link: "/",
      },
      {
        image: blog55,
        date: "January 12, 2020",
        title: "Simple Ways to Have a Pretty Face",
        link: "/",
      },
      {
        image: blog56,
        date: "January 12, 2020",
        title: "Ranking the greatest players in basketball",
        link: "/",
      },
    ],
  },
];
</script>
