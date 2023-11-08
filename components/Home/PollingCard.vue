<template>
  <template v-for="(poll, i) in polling.data" :key="i">
    <main v-if="polling.loading" class="mb-4 pb-2">
      <article class="pb-2 mb-2">
        <div class="row">
          <div class="col">
            <div class="position-relative w-100" style="padding-top: 90%">
              <div class="position-absolute top-0 start-0 end-0 bottom-0">
                <AnimationSkleton width_="100%" height_="100%" />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <AnimationSkleton width_="100px" height_="14px" class_="my-2" />
            <AnimationSkleton width_="100%" height_="14px" />
          </div>
        </div>
      </article>
    </main>
    <main v-else v-if="poll.poll_active">
      <h3 class="font-weight-bold text-3 pt-1">Polling & Survey</h3>

      <div class="card shadow-sm">
        <NuxtLink :to="'/polling' + poll.poll_url">
          <div class="card-image">
            <img :src="poll.thumbnail" :alt="poll.poll_title" />
          </div>
        </NuxtLink>

        <h4
          class="d-block line-height-2 text-4 text-dark font-weight-bold my-3"
        >
          <NuxtLink
            :to="'/polling' + poll.poll_url"
            class="text-decoration-none text-color-dark text-color-hover-primary"
          >
            {{ poll.poll_title }}</NuxtLink
          >
        </h4>

        <NuxtLink :to="'/polling' + poll.poll_url" class="card-button"
          >Voting</NuxtLink
        >
      </div>
    </main>
  </template>
</template>

<script setup>
const { getData } = await useFetchData();
const polling = ref({
  data: 1,
  loading: true,
});

onMounted(async () => {
  polling.value = await getData("card-polling");
});
</script>

<style scoped>
.card-image img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 8px 8px 0px 0;
}

.card-button {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  width: 100%;
  background-color: rgb(0, 119, 255);
  color: #fff;
  border-radius: 0 0 8px 8px;
}

.card-button:hover {
  text-decoration: none;
  background-color: rgb(0, 75, 160);
  color: #fff;
}
</style>
