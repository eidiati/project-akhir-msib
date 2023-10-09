import { NuxtLink } from '#build/components';
<template>
  <h3 class="font-weight-bold text-3 pt-1">Berita Terbaru</h3>

  <div class="pb-2">
    <div v-for="(article, index) in articles" :key="index" class="mb-4 pb-2">
      <article
        class="thumb-info thumb-info-no-zoom bg-transparent border-radius-0 pb-2 mb-2"
      >
        <div class="row">
          <div class="col">
            <NuxtLink :to="article.link">
              <img
                :src="article.image"
                class="img-fluid border-radius-0"
                :alt="article.title"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="thumb-info-caption-text">
              <div class="d-inline-block text-default text-1 mt-2 float-none">
                <NuxtLink
                  :to="article.link"
                  class="text-decoration-none text-color-default"
                  >{{ article.date }}</NuxtLink
                >
              </div>
              <h4
                class="d-block line-height-2 text-4 text-dark font-weight-bold mb-0"
              >
                <NuxtLink
                  to="/"
                  class="text-decoration-none text-color-dark text-color-hover-primary"
                  >{{ article.title }}</NuxtLink
                >
              </h4>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
  <!-- caraousel -->
  <!-- <main class="my-4 d-block">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1602015103066-f45732e2aa84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
              class="d-block w-100"
              alt="..."
            />
            <div
              class="carousel-caption d-none d-md-block bg-warning opacity-75"
            >
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1549021179-127b81585b60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
              class="d-block w-100"
              alt="..."
            />
            <div
              class="carousel-caption d-none d-md-block bg-warning opacity-75"
            >
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1540542189638-bb1b775836fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fDElM0ExfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              class="d-block w-100"
              alt="..."
            />
            <div
              class="carousel-caption d-none d-md-block bg-warning opacity-75"
            >
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </main> -->
</template>

<script setup>
import blog65 from "~/assets/img/blog/default/blog-65.jpg";
import blog66 from "~/assets/img/blog/default/blog-66.jpg";

const articles = [
  {
    title: "Main Reasons To Stop Texting And Driving",
    image: blog65,
    link: "/",
    date: "January 12, 2020",
  },
  {
    title: "Tips to Help You Quickly Prepare your Lunch",
    image: blog66,
    link: "/",
    date: "January 12, 2020",
  },
];
</script>
