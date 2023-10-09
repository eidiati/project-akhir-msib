<template>
  <div class="container">
    <div class="row pb-1">
      <HomePostByCategory />
    </div>
    <div class="row pb-1 pt-2">
      <div class="col-md-9">
        <HomePost />
        <!-- advertising -->
        <HomeAdvertising />
        <div class="row pb-1 pt-3">
          <!-- popular post -->
          <div class="col-md-6">
            <HomePopularRecentPost :post="popularpost" />
          </div>
          <!-- recent post -->
          <div class="col-md-6">
            <HomePopularRecentPost :post="recentpost" />
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <HomeNewPost />
        <aside class="sidebar pb-4">
          <HomeTags />
          <NuxtLink to="/" class="my-4 pt-3 d-block">
            <img
              alt="Porto"
              class="img-fluid"
              src="~/assets/img/blog/blog-ad-1-medium.jpg"
            />
          </NuxtLink>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import blog55 from "~/assets/img/blog/default/blog-55.jpg";
import blog56 from "~/assets/img/blog/default/blog-56.jpg";
import blog57 from "~/assets/img/blog/default/blog-57.jpg";
import blog58 from "~/assets/img/blog/default/blog-58.jpg";
import blog59 from "~/assets/img/blog/default/blog-59.jpg";
import blog60 from "~/assets/img/blog/default/blog-60.jpg";

const popularpost = {
  label: "Postingan Populer",
  articles: [
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
    {
      image: blog57,
      date: "January 12, 2020",
      title: "4 Ways to Look Cool in Glasses",
      link: "/",
    },
    {
      image: blog58,
      date: "January 12, 2020",
      title: "Top Camper Trailer Towing Tips",
      link: "/",
    },
    {
      image: blog59,
      date: "January 12, 2020",
      title: "5 Lovely Walks in New York",
      link: "/",
    },
    {
      image: blog60,
      date: "January 12, 2020",
      title: "How to Become a Professional Photographer",
      link: "/",
    },
  ],
};
const recentpost = {
  label: "Postingan Terkini",
  articles: [
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
    {
      image: blog57,
      date: "January 12, 2020",
      title: "4 Ways to Look Cool in Glasses",
      link: "/",
    },
    {
      image: blog58,
      date: "January 12, 2020",
      title: "Top Camper Trailer Towing Tips",
      link: "/",
    },
    {
      image: blog59,
      date: "January 12, 2020",
      title: "5 Lovely Walks in New York",
      link: "/",
    },
    {
      image: blog60,
      date: "January 12, 2020",
      title: "How to Become a Professional Photographer",
      link: "/",
    },
  ],
};
</script>
