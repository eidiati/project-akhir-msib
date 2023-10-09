<template>
  <h3
    :class="
      post.label === 'Postingan Populer'
        ? 'font-weight-bold text-3 mb-0'
        : 'font-weight-bold text-3 mb-0 mt-4 mt-md-0'
    "
  >
    {{ post.label }}
  </h3>
  <ul class="simple-post-list">
    <ul class="simple-post-list">
      <template v-for="(article, i) in post.articles" :key="i">
        <li>
          <article>
            <div class="post-image">
              <div class="img-thumbnail img-thumbnail-no-borders d-block">
                <NuxtLink :to="article.link">
                  <img
                    :src="article.image"
                    class="border-radius-0"
                    width="50"
                    height="50"
                    :alt="article.title"
                  />
                </NuxtLink>
              </div>
            </div>
            <div class="post-info">
              <div class="post-meta">{{ article.date }}</div>
              <h4 class="font-weight-normal text-3 mb-0">
                <NuxtLink :to="article.link" class="text-dark">{{
                  article.title
                }}</NuxtLink>
              </h4>
            </div>
          </article>
        </li>
      </template>
    </ul>
  </ul>
</template>

<script setup>
defineProps({
  post: Object,
});
</script>
