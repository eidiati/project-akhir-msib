<template>
  <div role="main" class="main">
    <div class="container py-4">
      <div class="row pb-1 pt-2">
        <section class="mb-4">
          <ul class="breadcrumb d-block">
            <li><NuxtLink to="/">Beranda</NuxtLink></li>
            <li class="active">Post</li>
          </ul>
          <AnimationSkleton
            v-if="article.loading"
            width_="100%"
            height_="30px"
          />
          <h1 v-else class="text-dark font-weight-bold text-8 m-0">
            {{ article.data.post_title }}
          </h1>

          <div class="post-meta">
            <MainArticlePostMeta
              :article="article.data"
              :loading="article.loading"
            />
          </div>
        </section>
        <div class="col-md-9">
          <LazyMainArticleMap :article="article" />
          <div class="blog-posts single-post">
            <article class="post post-large blog-single-post border-0 m-0 p-0">
              <div class="post-image ms-0">
                <LazyMainArticleImage :article="article" />
              </div>
              <div class="post-content ms-0">
                <template v-if="article.loading">
                  <AnimationSkleton
                    width_="100%"
                    height_="16px"
                    class_="mb-2"
                  />
                  <AnimationSkleton
                    width_="100%"
                    height_="16px"
                    class_="mb-2"
                  />
                  <AnimationSkleton
                    width_="100%"
                    height_="16px"
                    class_="mb-2"
                  />
                  <AnimationSkleton width_="80%" height_="16px" class_="mb-2" />
                </template>
                <template v-else>
                  <p style="text-align: justify">
                    {{ article.data.post_content }}
                  </p>
                  <p style="text-align: justify">
                    Ut ac elit non mi pharetra dictum nec quis nibh.
                    Pellentesque ut fringilla elit. Aliquam non ipsum id leo
                    eleifend sagittis id a lorem. Sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                    Aliquam massa mauris, viverra et rhoncus a, feugiat ut sem.
                    Quisque ultricies diam tempus quam molestie vitae sodales
                    dolor sagittis. Praesent commodo sodales purus. Maecenas
                    scelerisque ligula vitae leo adipiscing a facilisis nisl
                    ullamcorper. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae;
                  </p>
                  <p style="text-align: justify">
                    Curabitur non erat quam, id volutpat leo. Nullam pretium
                    gravida urna et interdum. Suspendisse in dui tellus. Cras
                    luctus nisl vel risus adipiscing aliquet. Phasellus
                    convallis lorem dui. Quisque hendrerit, lectus ut accumsan
                    gravida, leo tellus porttitor mi, ac mattis eros nunc vel
                    enim. Nulla facilisi. Nam non nulla sed nibh sodales auctor
                    eget non augue. Pellentesque sollicitudin consectetur
                    mauris, eu mattis mi dictum ac. Etiam et sapien eu nisl
                    dapibus fermentum et nec tortor.
                  </p>
                </template>

                <div
                  class="post-block mt-5 d-flex align-items-center post-share"
                >
                  <h4 class="mb-0 me-3 p-0">Share this Post</h4>
                  <LazyMainArticleSharePost />
                </div>
                <div class="mt-4">
                  <LazyHomeAdvertising />
                </div>
                <div class="post-block mt-4 pt-2 post-author">
                  <LazyMainArticleAuthor
                    :author="article.data.post_author"
                    :loading="article.loading"
                  />
                </div>
                <div id="comments" class="post-block mt-5 post-comments">
                  <LazyMainArticleComments />
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="col-md-3">
          <LazyMainArticleRelatedPosts :idArticle="slug" />
          <div class="sidebar pb-4">
            <LazyTags
              :tags="article.data.post_tags"
              :loading="article.loading"
            />
            <NuxtLink to="/" class="my-4 pt-3 d-block">
              <img
                alt="Porto"
                class="img-fluid"
                src="~/assets/img/blog/blog-ad-1-medium.jpg"
              />
            </NuxtLink>
          </div>
          <LazyMainArticlePopularRecentPost />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

const article = ref({
  data: {
    post_author: null,
  },
  loading: true,
});
const { getData } = await useFetchData();

onMounted(async () => {
  // article.value = await getData(`main-article/${slug}`);
  const res = await getData(`main-article/${slug}`);
  const content = res.data.post_content;
  const tes = content.includes("[polling=");
});
</script>
