<template>
  <div role="main" class="main">
    <div class="container py-4">
      <div class="row pb-1 pt-2">
        <section class="mb-4">
          <ul class="breadcrumb d-block">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li class="active">Blog</li>
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
            <MainArticlePostMeta :article="article" />
          </div>
        </section>
        <div class="col-md-9">
          <div class="blog-posts single-post">
            <article class="post post-large blog-single-post border-0 m-0 p-0">
              <div class="post-image ms-0">
                <MainArticleImage :article="article" />
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
                  <MainArticleSharePost />
                </div>
                <div class="mt-4">
                  <HomeAdvertising />
                </div>
                <div class="post-block mt-4 pt-2 post-author">
                  <MainArticleAuthor :article="article" />
                </div>
                <div id="comments" class="post-block mt-5 post-comments">
                  <MainArticleComments />
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="col-md-3">
          <MainArticleRelatedPosts />
          <div class="sidebar pb-4">
            <HomeTags />
            <NuxtLink to="/" class="my-4 pt-3 d-block">
              <img
                alt="Porto"
                class="img-fluid"
                src="~/assets/img/blog/blog-ad-1-medium.jpg"
              />
            </NuxtLink>
          </div>
          <MainArticlePopularRecentPost />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const article = ref({
  data: null,
  loading: true,
});
const { getOneData } = useFetchData();
async function getArticle(id) {
  try {
    const data = await getOneData("products", id);
    article.value = {
      data: {
        post_id: data.id,
        post_title: `${data.title} ${data.description}`,
        post_content: data.description,
        post_category: data.category,
        first_image: data.images[0],
        post_author_name: data.brand,
        post_slug: "https://lancangkuning/article?title=HPN-2023-di-Medan",
        post_date: "4 september 2023, senin",
      },
      loading: false,
    };
  } catch (error) {
    console.log(error);
  }
}
onMounted(() => {
  getArticle(route.params.id);
});
</script>
