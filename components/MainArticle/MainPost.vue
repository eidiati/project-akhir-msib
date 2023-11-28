<template>
  <div role="main" class="main">
    <div class="container py-4">
      <div class="row pb-1 pt-2">
        <section class="mb-4">
          <ul class="breadcrumb d-block">
            <li><NuxtLink to="/">Beranda</NuxtLink></li>
            <li v-if="directory === 'lokasi'">
              <NuxtLink to="/lokasi">Lokasi</NuxtLink>
            </li>
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
        <div class="col-lg-9 col-md-8">
          <LazyMainArticleMap
            v-if="directory === 'lokasi'"
            :article="article"
          />
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
                    {{ content }}
                  </p>
                </template>
                <template v-if="isPolling">
                  <MainArticlePolling :poll_id="poll_id" />
                </template>
                <template v-if="isQuiz">
                  <MainArticleQuiz v-if="isParticipant" :quiz_id="quiz_id" />
                  <MainArticleCardParticipant v-else />
                </template>
                <div
                  v-if="!article.loading"
                  class="post-block mt-5 d-flex align-items-center post-share"
                >
                  <h4 class="mb-0 me-3 p-0">Bagikan Artikel</h4>
                  <LazyMainArticleSharePost
                    :url="
                      directory === 'lokasi'
                        ? base_url +
                          '/lokasi/post/' +
                          encodeURIComponent(article.data.post_slug)
                        : base_url +
                          '/post/' +
                          encodeURIComponent(article.data.post_slug)
                    "
                  />
                </div>
                <div class="mt-4 d-flex justify-content-center">
                  <Advertising position="atas" />
                </div>
                <div class="post-block mt-4 pt-2 post-author">
                  <LazyMainArticleAuthor
                    :user="article.data.post_user"
                    :loading="article.loading"
                  />
                </div>
                <div
                  v-if="!article.loading"
                  id="comments"
                  class="post-block mt-5 post-comments"
                >
                  <LazyMainArticleComments />
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <LazyMainArticlePopularPost :post_id="article.data.post_id" />
          <div class="sidebar pb-4">
            <LazyTags
              :tags="article.data.post_tags"
              :loading="article.loading"
            />
            <div class="my-4 pt-3">
              <Advertising position="bawah" />
            </div>
          </div>
          <LazyMainArticlePopularRecentPost />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  slug: String,
  directory: String,
});
const { slug, directory } = toRefs(props);

const article = ref({
  data: {
    post_title: "",
    post_user: null,
  },
  loading: true,
});
const advertising = ref({
  data: 1,
  loading: true,
});

const base_url = useRuntimeConfig().public.base_url;
const content = ref("");
const isPolling = ref(false);
const poll_id = ref(null);
const quiz_id = ref(null);
const isQuiz = ref(false);
const isParticipant = useIsParticipant();

const { getData } = await useFetchData();
const { get_poll_id_or_quiz_id } = useFunction();

onMounted(async () => {
  const participant = localStorage.getItem("participant");
  if (participant) {
    isParticipant.value = true;
  }
  const dir =
    directory.value === "lokasi" ? "location-main-article" : "main-article";

  const res = await getData(`${dir}/${slug.value}`);
  advertising.value = await getData("advertising");

  if (!res.loading) {
    article.value = res;
    let postContent = res.data.post_content;

    useHead({
      title: res.data.meta_title,
      meta: [
        { name: res.data.meta_description, content: res.data.meta_keyword },
      ],
    });

    isPolling.value = postContent.includes("[polling=");
    isQuiz.value = postContent.includes("[quiz=");

    if (isPolling.value === true) {
      const id = await get_poll_id_or_quiz_id(
        /\[polling=(.*?)=\]/,
        postContent
      );
      poll_id.value = Number(id);
      content.value = postContent.replace(/\[polling=[^\]]*\]/, "");
    } else if (isQuiz.value === true) {
      const id = await get_poll_id_or_quiz_id(/\[quiz=(.*?)=\]/, postContent);
      quiz_id.value = Number(id);
      content.value = postContent.replace(/\[quiz=[^\]]*\]/, "");
    } else {
      content.value = postContent;
    }
  }
});
</script>
